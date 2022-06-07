<script>
import map from 'lodash/map';
import { _CREATE, _EDIT, _VIEW } from '@/config/query-params';
import { removeAt } from '@/utils/array';
import { base64Decode } from '@/utils/crypto';
import { set } from '@/utils/object';

import FileSelector, { createOnSelected } from '@/components/form/FileSelector';
import InfoBox from '@/components/InfoBox';
import LabeledInput from '@/components/form/LabeledInput';
import ArrayListGrouped from '~/components/form/ArrayListGrouped.vue';

export default {
  props: {
    mode: {
      type:    String,
      default: _CREATE
    },

    // sourceAuthorities
    value: {
      type:    Object,
      default: () => {}
    }
  },

  components: {
    FileSelector,
    InfoBox,
    LabeledInput,
    ArrayListGrouped
  },

  // add a default object with a uri as the key and an array as the value
  data() {
    const crt = this.decodedData['data'] || '';
    const sourcesArray = map(this.value, 'v');

    return {
      crt,
      allCrt: [],
      uri:    null,
      sourcesArray,
    };
  },

  computed: {
    isEdit() {
      return this.mode === _EDIT;
    },

    isView() {
      return this.mode === _VIEW;
    }
  },

  methods: {
    onCrtSelected: createOnSelected('crt'),

    add() {
      this.sourcesArray.push({});
    },

    decodedData() {
      const out = {};

      for ( const k in this.value || {} ) {
        out[k] = base64Decode( this.value[k] );
      }

      return out;
    },

    remove(index) {
      removeAt(this.sourcesArray, index);
    }

    // updateCert() {
    //   this.allCrt.push(this.crt);
    // }
  },
};
</script>

<template>
  <div class="row">
    <div class="col span-12">
      <h3>Source Authorities</h3>

      <template v-for="(authority, key, index) in sourcesArray">
        <InfoBox :key="index" class="p-20 sources__container">
          <LabeledInput
            v-model="authority[key]"
            type="multiline"
            label="Registry URI endpoint"
            class="mb-20"
            :mode="mode"
            placeholder="registry-pre.example.com:5500"
          />

          <template>
            <ArrayListGrouped
              v-model="authority.value"
              :mode="mode"
              :add-allowed="true"
              add-label="Add Certificate"
            >
              <template #default="props">
                <LabeledInput
                  v-model="props.row.value"
                  type="multiline"
                  label="Certificate"
                  class="p-10"
                  :mode="mode"
                  required
                  :placeholder="t('secret.certificate.certificatePlaceholder')"
                />
                <FileSelector
                  v-model="props.row.value"
                  class="btn btn-sm bg-primary mt-10"
                  :label="t('generic.readFromFile')"
                  @selected="onCrtSelected"
                />
              </template>
            </ArrayListGrouped>
          </template>

          <button
            type="button"
            :disabled="isView"
            class="btn role-link close btn-sm"
            @click="remove(index)"
          >
            <i class="icon icon-2x icon-x" />
          </button>
        </InfoBox>
      </template>

      <button
        type="button"
        class="btn role-tertiary add"
        :disabled="isView"
        @click="add()"
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

    & > .info-box {
      margin-bottom: 0;
    }
  }
}
</style>
