<script>
import isEmpty from 'lodash/isEmpty';
import { _CREATE } from '@/config/query-params';

import ArrayList from '@/components/form/ArrayList';
import ArrayListGrouped from '@/components/form/ArrayListGrouped';
import Banner from '@/components/Banner';
import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import LabeledInput from '@/components/form/LabeledInput';
import LabeledSelect from '@/components/form/LabeledSelect';
import RadioGroup from '@/components/form/RadioGroup';

export default {
  name: 'Registry',

  props: {
    mode: {
      type:    String,
      default: _CREATE
    },

    value: {
      type:     Object,
      required: true
    }
  },

  components: {
    ArrayList,
    ArrayListGrouped,
    Banner,
    FileSelector,
    LabeledInput,
    LabeledSelect,
    RadioGroup
  },

  fetch() {
    this.customRegistry = {
      insecure_sources:   [],
      source_authorities: []
    };
  },

  data() {
    const descriptionLabel = 'The PolicyServer allows you to pull policies from OCI registries and HTTP servers, by default HTTPS is enforced with host TLS verification. You can interact with registries using untrusted certificates or even without TLS by using the `insecure_sources` setting. This approach is highly discouraged in environments closer to production.';

    return {
      descriptionLabel,

      customRegistry:    null,
      hasCustomRegistry: false
    };
  },

  methods: {
    onCrtSelected: createOnSelected('crt'),

    handleCustomRegistry() {
      this.$emit('hasCustomRegistry', this.hasCustomRegistry);
    },

    updateChartValues() {
      const { insecure_sources, source_authorities } = this.customRegistry; // eslint-disable-line camelcase
      const { spec } = this.chartValues?.policy; // this needs to be refactored to PolicyServer

      if ( insecure_sources && isEmpty(spec?.insecure_sources) ) { // eslint-disable-line camelcase
        this.$set(spec, 'insecure_sources', insecure_sources);
      }

      if ( source_authorities && isEmpty(spec?.source_authorities) ) { // eslint-disable-line camelcase
        const out = source_authorities.map((s) => {
          const { type, uri } = s;

          if ( type === 'Path' ) {
            return {
              [uri]: {
                type,
                path: s.path
              }
            };
          }

          if ( type === 'Data' ) {
            return {
              [uri]: {
                type,
                data: s.data
              }
            };
          }
        });

        this.$set(spec, 'source_authorities', out);
      }
    },
  }
};
</script>

<template>
  <div class="row mt-10">
    <div class="col span-12">
      <Banner
        class="type-banner mb-20 mt-0"
        color="info"
        :label="descriptionLabel"
      />

      <RadioGroup
        v-model="hasCustomRegistry"
        name="hasCustomRegistry"
        :options="[false, true]"
        :mode="mode"
        class="mb-20"
        label="Custom Registry"
        :labels="['No', 'Yes']"
        tooltip="use that policy hub ya dingus"
        @input="handleCustomRegistry"
      />

      <template v-if="hasCustomRegistry">
        <h3 class="mb-20">
          Insecure Sources
        </h3>
        <div class="mb-10">
          <div class="row">
            <div class="col span-6">
              <ArrayList
                v-model="value.insecure_sources"
                :mode="mode"
                :add-allowed="true"
                add-label="Add Insecure Source"
                value-placeholder="registry-dev.example.com:5500"
              />
            </div>
          </div>

          <div class="spacer"></div>

          <h3 class="mb-20">
            Source Authorities
          </h3>
          <ArrayListGrouped
            v-model="value.source_authorities"
            :mode="mode"
            :default-add-value="{}"
            add-label="Add Source Authority"
          >
            <template #default="props">
              <div class="row mb-20">
                <div class="col span-6">
                  <LabeledInput
                    key="source_authorities"
                    v-model="props.row.value.uri"
                    title="Source Authorities"
                    label="Registry URI"
                    :mode="mode"
                    required
                  />
                </div>
              </div>

              <div class="row mb-20">
                <div class="col span-6">
                  <LabeledSelect
                    v-model="props.row.value.type"
                    :mode="mode"
                    :options="['Path', 'Data']"
                    label="Type"
                  />
                </div>
              </div>

              <template v-if="props.row.value.type === 'Path'">
                <div class="row">
                  <div class="col span-6">
                    <LabeledInput
                      key="source_authorities"
                      v-model="props.row.value.path"
                      label="Path"
                      placeholder="/opt/example.com/pki/ca-pre1-1.pem"
                      :mode="mode"
                    />
                  </div>
                </div>
              </template>

              <template v-else-if="props.row.value.type === 'Data'">
                <div class="row">
                  <div class="col span-6">
                    <LabeledInput
                      v-model="props.row.value.data"
                      type="multiline"
                      label="Certificate"
                      :mode="mode"
                      :placeholder="t('secret.certificate.certificatePlaceholder')"
                    />
                    <FileSelector class="btn btn-sm bg-primary mt-10" :label="t('generic.readFromFile')" @selected="onCrtSelected" />
                  </div>
                </div>
              </template>
            </template>
          </ArrayListGrouped>
        </div>
      </template>
    </div>
  </div>
</template>
