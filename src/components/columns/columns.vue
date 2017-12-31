<template>
  <ul class="columns">
    <slot></slot>
  </ul>
</template>

<script>
  import Column from '../column/column.vue';

  export default {
    components: {
      Column,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .columns {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    list-style-type: none;
    padding: 0;

    @include respond-to('tablet') {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>