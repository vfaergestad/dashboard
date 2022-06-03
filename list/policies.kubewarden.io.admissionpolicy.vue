<script>
import Banner from '@/components/Banner';
import Loading from '@/components/Loading';
import ResourceTable from '@/components/ResourceTable';

export default {
  components: {
    Banner, Loading, ResourceTable
  },

  props: {
    resource: {
      type:     String,
      required: true,
    },

    schema: {
      type:     Object,
      required: true,
    },
  },

  async fetch() {
    this.rows = await this.$store.dispatch('cluster/findAll', { type: this.resource });
  },

  data() {
    return { rows: null };
  },

  computed: {
    headers() {
      return this.$store.getters['type-map/headersFor'](this.schema);
    }
  }
};
</script>

<template>
  <Loading v-if="$fetchState.pending" />
  <div v-else>
    <Banner
      class="type-banner mb-20 mt-0"
      color="info"
      label="AdmissionPolicy is a namespace-wide resource. These policies will process only the requests that are targeting the Namespace where the AdmissionPolicy is defined."
    />
    <ResourceTable :schema="schema" :rows="rows" :headers="headers">
      <template #col:mode="{ row }">
        <td>
          <span class="policy__mode">
            <span class="text-capitalize">{{ row.spec.mode }}</span>
          </span>
        </td>
      </template>
    </ResourceTable>
  </div>
</template>
