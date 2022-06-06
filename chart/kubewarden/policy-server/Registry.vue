<script>
import { _CREATE, _EDIT } from '@/config/query-params';

import ArrayList from '@/components/form/ArrayList';
import ArrayListGrouped from '@/components/form/ArrayListGrouped';
import Banner from '@/components/Banner';
import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import LabeledInput from '@/components/form/LabeledInput';

export default {
  name: 'Registry',

  props: {
    mode: {
      type:    String,
      default: _CREATE
    },

    // chartValues.spec
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
    LabeledInput
  },

  data() {
    const descriptionLabel = 'The PolicyServer allows you to pull policies from OCI registries and HTTP servers, by default HTTPS is enforced with host TLS verification. You can interact with registries using untrusted certificates or even without TLS by using the `insecureSources` setting. This approach is highly discouraged in environments closer to production.';

    const originalKey = this.value.decodedData['tls.key'] || '';
    const key = this.mode === _EDIT ? '' : originalKey;
    const crt = this.value.decodedData['tls.crt'] || '';

    return {
      descriptionLabel,

      configureRegistry: false,
      customRegistry:    null,

      originalKey,
      key,
      crt
    };
  },

  watch: {
    key: 'update',
    crt: 'update',
  },

  methods: {
    onKeySelected: createOnSelected('key'),
    onCrtSelected: createOnSelected('crt'),

    update() {
      let keyToSave;

      // use preexisting key if no new one was provided while editing
      if (this.mode === _EDIT && !this.key.length) {
        keyToSave = this.originalKey;
      } else {
        keyToSave = this.key;
      }

      this.value.setData('tls.crt', this.crt);
      this.value.setData('tls.key', keyToSave);
    }
  },
};
</script>

<template>
  <div class="mt-10 mb-20">
    <div class="row">
      <Banner
        class="type-banner mb-20 mt-0"
        color="info"
        :label="descriptionLabel"
      />
    </div>

    <template>
      <h3 class="mb-20">
        Insecure Sources
      </h3>
      <div class="row">
        <div class="col span-6">
          <ArrayList
            v-model="value.spec.insecureSources"
            :mode="mode"
            :add-allowed="true"
            add-label="Add Insecure Source"
            value-placeholder="registry-dev.example.com:5500"
          />
        </div>
      </div>
    </template>

    <div class="spacer"></div>

    <template>
      <h3 class="mb-20">
        Source Authorities
      </h3>
      <div class="row mb-20">
        <div class="col span-12">
          <ArrayListGrouped
            v-model="value.spec.sourceAuthorities"
            :mode="mode"
            :default-add-value="{}"
            add-label="Add Source Authority"
          >
            <template #default="props">
              <div class="row">
                <div class="col span-6">
                  <LabeledInput
                    key="sourceAuthorities"
                    v-model="props.row.value.uri"
                    title="Source Authorities"
                    label="Registry URI"
                    :mode="mode"
                    required
                  />
                </div>

                <div class="col span-6">
                  <LabeledInput
                    v-model="crt"
                    type="multiline"
                    label="Certificate"
                    :mode="mode"
                    :placeholder="t('secret.certificate.certificatePlaceholder')"
                  />
                  <FileSelector class="btn btn-sm bg-primary mt-10" :label="t('generic.readFromFile')" @selected="onCrtSelected" />
                </div>
              </div>
            </template>
          </ArrayListGrouped>
        </div>
      </div>
    </template>
  </div>
</template>
