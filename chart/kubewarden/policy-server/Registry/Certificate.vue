<script>
import { _CREATE, _EDIT, _VIEW } from '@/config/query-params';
import { removeAt } from '@/utils/array';
import { isEmpty } from '@/utils/object';

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
    addCertificate(index) {
      const parsed = parseInt(index);

      if ( this.certificateObj[parsed] ) {
        return this.certificateObj[parsed].push('');
      }

      this.$set(this.certificateObj, [parsed], ['']);
    },

    /*

      Having issues with the keys of the registryObj, they are not being generated
      properly which causes multiples of the same key

    */

    addRegistry() {
      if ( !isEmpty(this.registryObj) ) {
        // Create a new object with an index as the key
        const keys = Object.keys(this.registryObj).map(k => parseInt(k));
        const sum = keys.reduce((a, b) => a + b, 1);

        // This doesn't solve everything
        // if ( this.registryObj[sum.toString()] ) {
        //   sum = sum++;
        // }

        return this.$set(this.registryObj, [sum], '');
      }

      this.$set(this.registryObj, '0', '');
    },

    handleSelectFile(cert, registryIndex) {
      createOnSelected('crt');

      const data = this.certificateObj[registryIndex];

      if ( data ) {
        data.push(cert);
      } else {
        this.$set(this.certificateObj, [registryIndex], [cert]);
      }
    },

    removeRegistry(source, index) {
      const parsed = parseInt(index);

      if ( this.value?.[source[parsed]] ) {
        this.$delete(this.value, [source[parsed]]);
      }

      if ( this.certificateObj[parsed] ) {
        delete this.certificateObj[parsed];
      }

      delete source[parsed];
      this.$forceUpdate();
    },

    removeCert(source, index) {
      removeAt(source, index);
    }
  },
};
</script>

<template>
  <div class="row">
    <div class="col span-12">
      <h3>Source Authorities</h3>
      <template v-for="(rKey, rValue) in Object.entries(registryObj)">
        <div :key="rKey + rValue" class="mt-20 mb-20 sources__container">
          <div>
            <LabeledInput
              v-model="registryObj[rKey]"
              type="multiline"
              label="Registry URI endpoint"
              class="mb-20 mt-20"
              :mode="mode"
              placeholder="registry-pre.example.com:5500"
              :disabled="!isCreate"
            />

            <template>
              <template v-for="(str, cIndex, cKey) in certificateObj[(parseInt(rKey))]">
                <div :key="cKey" class="sources__container__cert">
                  <LabeledInput
                    v-model="certificateObj[(parseInt(rKey))][cIndex]"
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
                      @click="removeCert(certificateObj[(parseInt(rKey))], cIndex)"
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
                @click="addCertificate(rKey)"
              >
                Add PEM Certificate
              </button>

              <FileSelector
                v-model="certificateObj[(parseInt(rKey))]"
                class="btn role-link"
                label="Read Certificate from File"
                @selected="handleSelectFile($event, rKey)"
              />
            </template>
          </div>

          <button
            type="button"
            :disabled="isView"
            class="btn role-link remove btn-sm"
            @click="removeRegistry(registryObj, rKey)"
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
