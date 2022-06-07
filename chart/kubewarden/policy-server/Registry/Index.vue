<script>
import { _CREATE } from '@/config/query-params';

import ArrayList from '@/components/form/ArrayList';
import Banner from '@/components/Banner';
import KeyValue from '@/components/form/KeyValue';

import Certificate from './Certificate';

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
    Banner,
    KeyValue,
    Certificate
  },

  data() {
    const descriptionLabel = 'The PolicyServer allows you to pull policies from OCI registries and HTTP servers, by default HTTPS is enforced with host TLS verification. You can interact with registries using untrusted certificates or even without TLS by using the `insecureSources` setting. This approach is highly discouraged in environments closer to production.';

    const defaultSourceAuthority = { uri: null, data: null };

    return {
      descriptionLabel,
      defaultSourceAuthority,

      configureRegistry: false,
      customRegistry:    null
    };
  },

  methods: {
    setAuthorities(val) {
      const all = this.value.sourceAuthorities || {};

      this.$set(this.value, 'sourceAuthorities', { ...all, ...val });
    },
  }
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
            v-model="value.insecureSources"
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
      <div class="row mb-20">
        <div class="col span-12">
          <Certificate v-model="value.sourceAuthorities" :mode="mode" />
          <!-- <ArrayListGrouped
            v-model="value.sourceAuthorities"
            :mode="mode"
            :default-add-value="defaultSourceAuthority"
            add-label="Add Source Authority"
          >
            <template v-for="(key, index) in value.sourceAuthorities">
              <Certificate :key="index" v-model="value.sourceAuthorities[index]" :mode="mode" />
            </template>
          </ArrayListGrouped> -->
          <!-- <KeyValue
            key="sourceAuthorities"
            :value="value.sourceAuthorities"
            add-label="Add Source Authority"
            :as-map="true"
            :mode="mode"
            title="Source Authorities"
            :read-allowed="true"
            :read-key-unique="true"
            :value-can-be-empty="false"
            @input="setAuthorities($event)"
          >
            <template #add>
              <Certificate v-model="value.sourceAuthorities" :mode="mode" />
            </template>
          </KeyValue> -->
        </div>
      </div>
    </template>
  </div>
</template>
