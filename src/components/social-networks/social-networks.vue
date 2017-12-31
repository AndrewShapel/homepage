<template>
  <aside class="social-networks">
    <a
      class="social-networks__link"
      v-for="network in networks"
      :href="network.href"
      :key="network.key"
    >
      <vector :svg="network.icon"></vector>
    </a>
  </aside>
</template>

<script>
  import Vector from '../vector/vector.vue';

  export default {
    props: {
      networks: Array,
    },
    components: {
      Vector,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';

  .social-networks {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    z-index: 1;

    &__link {
      cursor: pointer;
      fill: $color-dark-gray;
      height: 30px;
      margin-bottom: 15px;
      width: 30px;

      &:hover {
        fill: $color-dark-black;
        transition: fill 0.2s linear;
      }
    }
  }
</style>