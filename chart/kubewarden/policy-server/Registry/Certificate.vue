<script>
import isEmpty from 'lodash/isEmpty';
import { _CREATE, _EDIT, _VIEW } from '@/config/query-params';
import { removeAt } from '@/utils/array';
import { randomStr } from '~/utils/string';

import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import InfoBox from '@/components/InfoBox';
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
    InfoBox,
    LabeledInput,
  },

  /*
    ~~~Incomplete~~~
  */

  data() {
    return {
      certificateObj:  {},
      registryList:    [],
    };
  },

  computed: {
    isEdit() {
      return this.mode === _EDIT;
    },

    isView() {
      return this.mode === _VIEW;
    },

    // If this.value arrives as an object, need to create a Map type out of it
    sourceAuthoritiesMap() {
      if ( this.value ) {
        const map = new Map();

        return map.set(this.value);
      }

      return null;
    }
  },

  methods: {
    addCertificate(index) {
      if ( this.certificateObj[index] ) {
        return this.certificateObj[index].push('');
      }

      this.$set(this.certificateObj, [index], ['']);
    },

    addRegistry() {
      this.registryList.push('');
    },

    // If selected replace what's in the data field with the file
    handleSelectFile(event, registryIndex, certIndex) {
      createOnSelected('crt');

      const data = this.certificateObj[registryIndex];

      data.splice(certIndex, 1, event);
    },

    remove(source, index) {
      removeAt(source, index);
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col span-12">
      <h3>Source Authorities</h3>

      <template v-for="(registry, registryIndex) in registryList">
        <InfoBox :key="registryIndex" class="p-20 sources__container">
          <div>
            <LabeledInput
              v-model="registryList[registryIndex]"
              type="multiline"
              label="Registry URI endpoint"
              class="mb-20"
              :mode="mode"
              placeholder="registry-pre.example.com:5500"
            />

            <template>
              <template v-for="(str, certIndex, key) in certificateObj[registryIndex]">
                <div :key="key">
                  <LabeledInput
                    v-model="certificateObj[registryIndex][certIndex]"
                    type="multiline"
                    label="Certificate"
                    class="p-10 col span-6"
                    :mode="mode"
                    required
                    :placeholder="t('secret.certificate.certificatePlaceholder')"
                  />

                  <FileSelector
                    v-model="certificateObj[registryIndex][certIndex]"
                    class="btn btn-sm bg-primary mt-10"
                    :label="t('generic.readFromFile')"
                    @selected="handleSelectFile($event, registryIndex, certIndex)"
                  />

                  <div class="remove">
                    <button
                      type="button"
                      :disabled="isView"
                      class="btn role-link"
                      @click="remove(certificateObj[registryIndex], certIndex)"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </template>

              <button
                type="button"
                class="btn role-tertiary add"
                :disabled="isView"
                @click="addCertificate(registryIndex)"
              >
                Add PEM Certificate
              </button>
            </template>
          </div>

          <button
            type="button"
            :disabled="isView"
            class="btn role-link remove btn-sm"
            @click="remove(registryList, registryIndex)"
          >
            <i class="icon icon-2x icon-x" />
          </button>
        </InfoBox>
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

    & > .remove {
      position: absolute;

      padding: 0px;

      top: 0;
      right: 0;
    }
  }
}
</style>
