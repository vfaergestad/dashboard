<script>
import { _CREATE, _EDIT, _VIEW } from '@/config/query-params';
import { removeAt } from '@/utils/array';

import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import LabeledInput from '@/components/form/LabeledInput';

export default {
  props: {
    mode: {
      type:    String,
      default: _CREATE
    },

    // chartValues.spec.sourceAuthorities
    value: {
      type:     [Map, Object],
      default:  null
    }
  },

  components: {
    FileSelector,
    LabeledInput,
  },

  fetch() {
    if ( this.value ) {
      /*
        Split the sourceAuthorities map into workable objects
        - registryObj will contain the URI
        - certificateObj will contain the certs associated with the URI
      */
      const entries = Object.entries(this.value);
      const keys = Object.keys(this.value);

      for ( const [key, value] of entries ) {
        const index = keys.indexOf(key);

        this.$set(this.registryObj, [index], key);
        this.$set(this.certificateObj, [index], value);
      }
    }
  },

  data() {
    return {
      certificateObj:  {},
      registryObj:     {},
    };
  },

  computed: {
    isCreate() {
      return this.mode === _CREATE;
    },

    isEdit() {
      return this.mode === _EDIT;
    },

    isView() {
      return this.mode === _VIEW;
    }
  },

  methods: {
    addCertificate(rIndex) {
      const key = Object.keys(this.value)[rIndex];

      this.$set(this.value, [key], [...this.value[key], '']);
    },

    addRegistry() {
      let length = null;

      if ( this.value ) {
        length = Object.keys(this.value).length;
      }
      const key = length ? length += 1 : 1;

      this.$set(this.registryObj, [key], '');

      if ( !this.value ) {
        this.$set(this, 'value', { [key]: [] });
      }

      this.$set(this.value, [key], []);
    },

    handleSelectFile(cert, rIndex) {
      createOnSelected('crt');

      const key = Object.keys(this.value)[rIndex];

      if ( key ) {
        this.$set(this.value, [key], [...this.value[key], cert]);
      }
    },

    removeRegistry(rIndex) {
      const key = Object.keys(this.value)[rIndex];

      if ( key ) {
        this.$delete(this.value, [key]);
      }

      delete this.registryObj[rIndex];
      this.$forceUpdate();
    },

    removeCert(rIndex, cIndex) {
      const key = Object.keys(this.value)[rIndex];

      removeAt(this.value[key], cIndex);
    },

    updateRegistryKey(event, rIndex) {
      const key = Object.keys(this.value)[rIndex];

      this.value[event] = this.value[key];
      delete this.value[key];
    }
  },
};
</script>

<template>
  <div class="row">
    <div class="col span-12">
      <h3>Source Authorities</h3>
      <template v-for="(rKey, rIndex) in Object.entries(registryObj)">
        <div :key="rKey[0] + rIndex" class="mt-20 mb-20 sources__container">
          <div>
            <LabeledInput
              v-model="registryObj[parseInt(rKey[0])]"
              type="multiline"
              label="Registry URI endpoint"
              class="mb-20 mt-20"
              :mode="mode"
              placeholder="registry-pre.example.com:5500"
              required
              @input="updateRegistryKey($event, rIndex, rKey)"
            />

            <template>
              <template v-for="(str, cIndex) in value[ Object.keys(value)[rIndex] ]">
                <div :key="str + cIndex" class="sources__container__cert">
                  <LabeledInput
                    v-model="value[ Object.keys(value)[rIndex] ][cIndex]"
                    type="multiline"
                    label="Certificate"
                    class="p-10 col span-6"
                    :mode="mode"
                    required
                    :placeholder="t('secret.certificate.certificatePlaceholder')"
                  />

                  <div class="remove">
                    <button
                      type="button"
                      :disabled="isView"
                      class="btn role-link remove"
                      @click="removeCert(rIndex, cIndex)"
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
                @click="addCertificate(rIndex)"
              >
                Add PEM Certificate
              </button>

              <FileSelector
                class="btn role-link"
                label="Read Certificate from File"
                @selected="handleSelectFile($event, rIndex)"
              />
            </template>
          </div>

          <button
            type="button"
            :disabled="isView"
            class="btn role-link remove btn-sm"
            @click="removeRegistry(rKey[0])"
          >
            <i class="icon icon-2x icon-x" />
          </button>

          <hr class="mt-20 mb-20" />
        </div>
      </template>

      <button
        type="button"
        class="btn role-tertiary add"
        :disabled="isView"
        @click="addRegistry()"
      >
        Add Source Authority
      </button>
    </div>
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
