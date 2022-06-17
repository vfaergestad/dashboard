<script>
import ArrayList from '@shell/components/form/ArrayList';
import { LabeledInput } from '@components/Form/LabeledInput';
import FileSelector from '@shell/components/form/FileSelector.vue';
import LabeledSelect from '@shell/components/form/LabeledSelect';
import KeyValue from '@shell/components/form/KeyValue';
import Tolerations from '@shell/components/form/Tolerations';
import NodeAffinity from '@shell/components/form/NodeAffinity';
import YamlEditor from '@shell/components/YamlEditor';
import { Checkbox } from '@components/Form/Checkbox';
import { _EDIT } from '@shell/config/query-params';
import { get } from '@shell/utils/object';
import { filterBy } from '@shell/utils/array';
import { NODE, PVC, STORAGE_CLASS, NORMAN } from '@shell/config/types';
// import debounce from 'lodash/debounce';
import jsyaml from 'js-yaml';
// import NodeScheduling from '@shell/components/form/NodeScheduling';

// Older versions of rancher document these words as valid types
const LEGACY_MAP = {
  storageclass: STORAGE_CLASS,
  pvc:          PVC,
};

export default {
  components: {
    ArrayList,
    FileSelector,
    KeyValue,
    LabeledInput,
    LabeledSelect,
    NodeAffinity,
    // NodeScheduling,
    Checkbox,
    Tolerations,
    YamlEditor
  },
  props: {
    question: {
      type:     Object,
      required: true,
    },

    mode: {
      type:    String,
      default: _EDIT,
    },

    // targetNamespace: {
    //   type:     String,
    //   required: true,
    // },

    value: {
      type:     null,
      required: true,
    },

    disabled: {
      type:    Boolean,
      default: false,
    },

    chartName: {
      type:    String,
      default: '',
    },

    inStore: {
      type:    String,
      default: 'cluster',
    },

    targetNamespace: {
      type:    String,
      default: null,
    },
  },
  fetch() {
    if (this.question.type === 'cloudcredential') {
      this.setCloudCredentialOptions();
    }

    if (this.question.type === 'nodeaffinity' || this.question.type === 'nodescheduling') {
      this.setNodeOptions();
    }

    // Fetch the options for the dropdown when you
    // need to select an object
    if ( this.isObjectReference && !this.typeSchema ) {
      this.setGenericObjectOptions();
    }
  },
  data(props) {
    let yaml = '';

    if (props.question.type === 'uploadyamlfile') {
      // Used when the question lets you upload and
      // edit a YAML file
      try {
        yaml = jsyaml.dump(this.value);
      } catch (e) {
        throw new Error(e);
      }
    }
    console.log('yaml ', yaml);

    return {
      cloudCredentials:        [],
      typeName:               '',
      typeSchema:             null,
      genericObjectOptions:    [],
      nodeOptions:            [],
      get,
      useSingleLineKeyValues: this.question.type === 'labels' || this.question.type === 'nodeselectors' || this.question.type === 'map[string]string',
      useMultiLineKeyValues:  this.question.type === 'annotations' || this.question.type === 'questionMap' || this.question.type === 'map[string]multiline',
      useListOfStrings:       this.question.type === 'array[string]' || this.question.type === 'array[multiline]' || this.question.type === 'listofstrings',
      valuesYaml:             yaml
    };
  },
  created() {
    let def = this.question.default;

    if (this.question.type === 'boolean' && typeof def === 'string') {
      def = def === 'true';
    }

    if (this.value === undefined && def !== undefined) {
      this.$emit('input', def);
    }
  },
  computed: {

    displayLabel() {
      const variable = this.question?.variable;
      const displayLabel = this.$store.getters['i18n/withFallback'](
        `charts.${ this.chartName }."${ variable }".label`,
        null,
        ''
      );

      return displayLabel || this.question?.label || variable || '?';
    },

    isNamespaced() {
      return !!this.typeSchema?.attributes?.namespaced;
    },

    showDescription() {
      function normalize(str) {
        return (str || '').toLowerCase().replace(/\s/g, '');
      }

      const desc = normalize(this.question?.description);
      const label = normalize(this.question?.label);

      // Only include the description if it doesn't match the label.
      return desc && desc !== label;
    },

    showHeader() {
      return (
        this.question.variable.endsWith('labels') ||
        this.question.type === 'labels' ||
        this.question.type === 'nodeselectors' ||
        this.question.variable.endsWith('annotations') ||
        this.question.type === 'annotations' ||
        this.question.type === 'tolerations' ||
        this.question.type === 'uploadyamlfile'
      );
    },

    displayDescription() {
      const variable = this.question?.variable;

      return this.$store.getters['i18n/withFallback'](
        `charts.${ this.chartName }."${ variable }".description`,
        null,
        this.question?.description
      );
    },
    isObjectReference() {
      return this.question.type.startsWith('reference') ||
              this.question.type === 'configmap' ||
              this.question.type === 'ConfigMap' ||
              this.question.type === 'secret' ||
              this.question.type === 'storageclass' ||
              this.question.type === 'pvc';
    }
  },
  methods: {
    update(event) {
      this.$emit('input', event);
    },
    setValuesYaml(event) {
      try {
        const obj = jsyaml.load(event);

        Object.assign(this.value, obj);
      } catch (e) {

      }
      this.update(event);
    },
    getTypeSchema() {
      const t = this.question.type;

      let typeName;

      const match = t.match(/^reference\[(.*)\]$/);

      if ( match ) {
        typeName = match?.[1];
      } else {
        typeName = LEGACY_MAP[t] || t;
      }

      if ( typeName ) {
        const schema = this.$store.getters[`${ this.inStore }/schemaFor`](this.question.type);

        return schema;
      }
    },
    async setCloudCredentialOptions() {
      try {
        const cloudCredentials = await this.$store.dispatch('rancher/findAll', { type: NORMAN.CLOUD_CREDENTIAL });

        this.cloudCredentialOptions = cloudCredentials.map((x) => {
          return {
            label: x.nameDisplay || x.name || x.metadata.name,
            value: x.id
          };
        });
      } catch {
        this.cloudCredentialOptions = [];
      }
    },
    async setNodeOptions() {
      try {
        const allNodeObjects = await this.$store.dispatch('cluster/findAll', { type: NODE });

        this.nodeOptions = allNodeObjects.map(node => node.id);
      } catch {
        this.nodeOptions = [];
      }
    },
    async setGenericObjectOptions() {
      this.typeSchema = await this.getTypeSchema();

      if (this.typeSchema) {
        let objects = await this.$store.dispatch(`${ this.inStore }/findAll`, { type: this.question.type });

        if ( this.isNamespaced ) {
          objects = filterBy(objects, 'metadata.namespace', this.targetNamespace);
        }

        this.genericObjectOptions = objects.map((x) => {
          return {
            label: x.nameDisplay || x.metadata.name,
            value: x.metadata.name
          };
        });
      }
    }
  },
};
</script>

<template>
  <div>
    <div v-if="question.type === 'uploadyamlfile'">
      <div class="row">
        <h3>
          {{ displayLabel }}
        </h3>
      </div>
      <div class="row mb-10">
        <div v-if="showDescription" class="row">
          {{ question.description }}
        </div>
      </div>
      <YamlEditor
        :key="valuesYaml"
        ref="yamlEditor"
        :value="valuesYaml"
        class="yaml-editor mb-10"
        :editor-mode="'EDIT_CODE'"
        :initial-yaml-values="valuesYaml"
        :scrolling="true"
        @onInput="setValuesYaml($event)"
      />
      <FileSelector
        class="role-primary  btn-sm"
        :label="t('generic.readFromFile')"
        @selected="setValuesYaml($event)"
      />
    </div>

    <div v-else-if="question.type === 'nodeaffinity'">
      <div class="row">
        <h3>
          {{ displayLabel }}
        </h3>
      </div>
      <div class="row mb-10">
        <div v-if="showDescription" class="row">
          {{ question.description }}
        </div>
      </div>
      <NodeAffinity
        :value="value"
        :mode="mode"
        :nodes="nodeOptions"
        :initial-empty-row="true"
        @input="update($event)"
      />
    </div>

    <div v-else-if="question.type === 'tolerations'" class="full-width">
      <div class="row">
        <h3>
          {{ displayLabel }}
        </h3>
      </div>
      <div class="row mb-10">
        <div v-if="showDescription" class="row">
          {{ question.description }}
        </div>
      </div>
      <Tolerations
        :value="value"
        :mode="mode"
        @input="update($event)"
      />
    </div>

    <div v-else class="row mb-5">
      <div class="col span-6">
        <h3 v-if="showHeader">
          {{ displayLabel }}
        </h3>
        <KeyValue
          v-if="useSingleLineKeyValues"
          :key="question.variable"
          :value="value"
          :add-label="t('labels.addLabel')"
          :mode="mode"
          :read-allowed="true"
          :protip="t('keyValue.protip', null, true)"
          :disabled="disabled"
          :initial-empty-row="true"
          :value-multiline="false"
          @input="update($event)"
        />
        <KeyValue
          v-else-if="useMultiLineKeyValues"
          :key="question.variable"
          :value="value"
          :add-label="t('labels.addAnnotation')"
          :mode="mode"
          :read-allowed="true"
          :protip="t('keyValue.protip', null, true)"
          :disabled="disabled"
          :initial-empty-row="true"
          @input="update($event)"
        />
        <ArrayList
          v-else-if="useListOfStrings"
          :key="question.variable"
          :value="value"
          :title="question.label"
          :mode="mode"
          :protip="false"
          :disabled="disabled"
          @input="update($event)"
        />
        <Checkbox
          v-else-if="question.type === 'boolean'"
          :value="value"
          :mode="mode"
          :label="displayLabel"
          :disabled="disabled"
          @input="update($event)"
        />
        <LabeledSelect
          v-else-if="question.type === 'enum'"
          :value="value"
          :mode="mode"
          :label="displayLabel"
          :options="question.options"
          :placeholder="question.description"
          :required="question.required"
          :disabled="disabled"
          @input="update($event)"
        />
        <LabeledInput
          v-else-if="question.type === 'int'"
          :value="value"
          type="text"
          :mode="mode"
          :label="displayLabel"
          :placeholder="question.default"
          :required="question.required"
          :disabled="disabled"
          @input="
            val = parseInt($event, 10);
            if (!isNaN(val)) {
              update(val);
            }
          "
        />
        <LabeledInput
          v-else-if="question.type === 'float'"
          :value="value"
          type="text"
          :mode="mode"
          :label="displayLabel"
          :placeholder="question.default"
          :required="question.required"
          :disabled="disabled"
          @input="
            val = parseFloat($event);
            if (!isNaN(val)) {
              update(val);
            }
          "
        />
        <LabeledSelect
          v-else-if="question.type === 'cloudcredential'"
          :value="value"
          :mode="mode"
          :options="options"
          :disabled="$fetchState.pending || disabled"
          :label="displayLabel"
          :placeholder="question.description"
          :required="question.required"
          @input="!$fetchState.pending && update($event)"
        />
        <LabeledSelect
          v-else-if="isObjectReference && typeSchema"
          :value="value"
          :mode="mode"
          :options="genericObjectOptions"
          :disabled="$fetchState.pending || disabled"
          :label="displayLabel"
          :placeholder="question.description"
          :required="question.required"
          @input="!$fetchState.pending && update($event)"
        />
        <LabeledInput
          v-else-if="question.type === 'string'"
          :value="value"
          :mode="mode"
          :label="displayLabel"
          :placeholder="typeof question.default === 'string' ? question.default : 'placeholder is not a string'"
          :required="question.required"
          :disabled="disabled"
          @input="update($event)"
        />
        <p v-else>
          Could not render a form input for this value. The value can still be configured in YAML.
        </p>
      </div>
      <div v-if="showDescription" class="col span-6 mt-10">
        <div>
          {{ question.description }}
        </div>

        <div v-if="isObjectReference && typeSchema">
          {{ question.type }}
          <span v-if="isNamespaced"> in namespace {{ targetNamespace }}</span>
        </div>

        <div v-if="isObjectReference && !typeSchema" class="text-error">
          (You do not have access to list this type)
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.full-width {
  width: 100%;
}
</style>
