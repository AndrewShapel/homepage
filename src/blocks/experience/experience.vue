<template>
  <group
    :title="$t('groups.experience.title')"
    :isTitleUnderlined="true"
  >
    <format-table :data="table"></format-table>
  </group>
</template>

<script>
  import { EXPERIENCE_TABLE } from './experience.constants';

  import Group from '../../components/group/group.vue';
  import FormatTable from '../../components/format-table/format-table.vue';

  export default {
    data() {
      return {
        table: EXPERIENCE_TABLE,
      };
    },
    components: {
      Group,
      FormatTable,
    },
  };
</script>