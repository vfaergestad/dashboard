<script>
import { _CREATE, _EDIT } from '@/config/query-params';
import { base64Decode } from '@/utils/crypto';
import { set } from '@/utils/object';

import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import LabeledInput from '@/components/form/LabeledInput';

export default {
  props: {
    mode: {
      type:    String,
      default: _CREATE
    },

    value: {
      type:    Object,
      default: () => {}
    }
  },

  components: { FileSelector, LabeledInput },

  data() {
    const crt = this.decodedData['data'] || '';

    return { crt };
  },

  watch: { crt: 'updateCert' },

  computed: {
    isEdit() {
      return this.mode === _EDIT;
    },
  },

  methods: {
    onCrtSelected: createOnSelected('crt'),

    decodedData() {
      const out = {};

      for ( const k in this.value || {} ) {
        out[k] = base64Decode( this.value[k] );
      }

      return out;
    },

    updateCert() {
      set(this.value, 'data', this.crt);
    }
  },
};
</script>

<template>
  <div class="row">
    <div class="col span-6">
      <LabeledInput
        v-model="value.uri"
        title="Source Authorities"
        label="Registry URI"
        :mode="mode"
        required
      />
    </div>

    <div class="col span-6">
      <LabeledInput
        v-model="value.data"
        type="multiline"
        label="Certificate"
        :mode="mode"
        :placeholder="t('secret.certificate.certificatePlaceholder')"
      />
      <FileSelector
        v-model="crt"
        class="btn btn-sm bg-primary mt-10"
        :label="t('generic.readFromFile')"
        @selected="onCrtSelected"
      />
    </div>
  </div>
</template>
