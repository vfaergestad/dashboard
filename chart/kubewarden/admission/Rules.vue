<script>
import { _CREATE } from '@/config/query-params';
import isEmpty from 'lodash/isEmpty';

import ArrayList from '@/components/form/ArrayList';
import LabeledSelect from '@/components/form/LabeledSelect';

export default {
  name: 'Rules',

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
    LabeledSelect,
  },

  async fetch() {
    this.apiGroups = await this.$store.dispatch('cluster/findAll', { type: 'apigroup' });

    if ( !!this.value.policy ) {
      this.rules = this.value.policy.spec.rules[0];
    }

    if ( this.rules.resources ) {
      this.resourceOptions = this.rules.resources;
    }

    if ( isEmpty(this.resourceOptions) ) {
      this.noResourceOptions = true;
    }
  },

  data() {
    const operationOptions = [
      'CREATE',
      'UPDATE',
      'DELETE'
    ];

    return {
      apiGroups:         [],
      rules:             null,

      noResourceOptions: false,
      resourceOptions:   [],
      operationOptions
    };
  },

  computed: {
    apiGroupOptions() {
      if ( this.apiGroups.length > 0 ) {
        const out = [];

        this.apiGroups.map(g => out.push(g.id));

        return out;
      }

      return this.apiGroups;
    }
  }
};
</script>

<template>
  <div v-if="rules" class="mt-40">
    <div class="row mb-20">
      <div class="col span-6">
        <h4>API Groups</h4>
        <LabeledSelect
          v-model="rules.apiGroups"
          label="API Group"
          :mode="mode"
          :multiple="true"
          :options="apiGroupOptions"
        />
      </div>
    </div>

    <div class="row mb-20">
      <div class="col span-6">
        <h4>API Versions</h4>
        <ArrayList
          v-model="rules.apiVersions"
          :mode="mode"
          :add-allowed="true"
          add-label="Add API Version"
          value-placeholder="v1"
        />
      </div>
    </div>

    <div class="row mb-20">
      <div class="col span-6">
        <h4>Operations</h4>
        <LabeledSelect
          v-model="rules.operations"
          label="Operation type"
          :mode="mode"
          :multiple="true"
          :options="operationOptions"
          tooltip="The type of operation to be validated."
        />
      </div>
    </div>

    <div class="row mb-20">
      <div class="col span-6">
        <h4>Resources</h4>
        <template v-if="!noResourceOptions">
          <LabeledSelect
            v-model="rules.resources"
            label="Resource type"
            :mode="mode"
            :multiple="true"
            :options="resourceOptions"
            tooltip="The targeted resources for the policy. Needs to be a resource that is supported by the policy, this is determined in the `metadata.yml` of the selected policy."
          />
        </template>

        <template v-else>
          <ArrayList
            v-model="rules.resources"
            :mode="mode"
            :add-allowed="true"
            add-label="Add Resource Target"
            value-placeholder="pods"
            protip="The targeted resources for the policy. Needs to be a resource that is supported by the policy, this is determined in the `metadata.yml` of the selected policy."
          />
        </template>
      </div>
    </div>
  </div>
</template>
