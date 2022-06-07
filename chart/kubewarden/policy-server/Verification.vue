<script>
import { _CREATE } from '@/config/query-params';

import LabeledInput from '@/components/form/LabeledInput';

export default {
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

  components: { LabeledInput }
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col span-6">
        <LabeledInput
          v-model="value.verificationConfig"
          :mode="mode"
          label="Verification Config"
          tooltip="Name of VerificationConfig configmap in the same namespace, containing Sigstore verification configuration. The configuration must be under a key named verification-config in the Configmap."
        />
      </div>
    </div>
  </div>
</template>
