<script>
import { _EDIT, _VIEW } from '@/config/query-params';
import { removeAt } from '@/utils/array';

import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import LabeledInput from '@/components/form/LabeledInput';

export default {
  props: {
    mode: {
      type:    String,
      default: _EDIT
    },

    value: {
      type:    Object,
      default: () => {}
    }
  },

  components: {
    FileSelector,
    LabeledInput,
  },

  watch: {
    'value.registryName': 'update',
    'value.certs':        {
      deep:    true,
      handler: 'update'
    }
  },

  computed: {
    isView() {
      return this.mode === _VIEW;
    }
  },

  methods: {
    addCertificate() {
      this.value.certs.push('');
    },

    handleSelectFile(event) {
      createOnSelected('crt');

      this.value.certs.push(event);
    },

    removeCert(cIndex) {
      removeAt(this.value.certs, cIndex);
    },

    update() {
      this.$emit('update', this.value);
    }
  }
};
</script>

<template>
  <div class="mt-20 mb-20 sources__container">
    <div>
      <LabeledInput
        v-model="value.registryName"
        type="multiline"
        label="Registry URI endpoint"
        class="mb-20 mt-20"
        :mode="mode"
        :disabled="isView"
        placeholder="registry-pre.example.com:5500"
        required
      />

      <template>
        <template v-for="(cert, cIndex) in value.certs">
          <div :key="cIndex" class="sources__container__cert">
            <LabeledInput
              v-model="value.certs[cIndex]"
              type="multiline"
              label="Certificate"
              class="p-10 col span-6"
              :mode="mode"
              :disabled="isView"
              required
              :placeholder="t('secret.certificate.certificatePlaceholder')"
            />

            <div class="remove">
              <button
                type="button"
                :disabled="isView"
                class="btn role-link remove"
                @click="removeCert(cIndex)"
              >
                Remove Certificate
              </button>
            </div>
          </div>
        </template>

        <button
          type="button"
          class="btn role-tertiary add"
          :disabled="isView"
          @click="addCertificate()"
        >
          Add PEM Certificate
        </button>

        <FileSelector
          class="btn role-link"
          label="Read Certificate from File"
          :disabled="isView"
          @selected="handleSelectFile($event)"
        />
      </template>
    </div>

    <slot name="remove"></slot>

    <hr class="mt-20 mb-20" />
  </div>
</template>

<style lang="scss" scoped>
.sources {
  &__container {
    position: relative;
    display: block;

    &__cert {
      display: grid;
      grid-template-columns: auto 150px;
      align-items: center;
      margin-bottom: 10px;

      & > .remove {
        text-align: right;
      }
    }

    & > .remove {
      position: absolute;

      padding: 0px;

      top: 0;
      right: 0;
    }
  }
}
</style>
