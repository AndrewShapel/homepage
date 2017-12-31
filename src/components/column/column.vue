<template>
  <li class="column">
    <vector
      class="column__icon"
      :svg="icon"
    >
    </vector>
    <header class="column__header">
      {{ title }}
    </header>
    <span
      class="column__description"
      :class="descriptionClass"
    >
      {{ description }}
    </span>
  </li>
</template>

<script>
  import Vector from '../vector/vector.vue';

  export default {
    props: {
      descriptionClass: String,
      title: String,
      description: String,
      icon: String,
    },
    components: {
      Vector,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .column {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    text-align: center;

    @include respond-to('tablet') {
      margin-bottom: 0;
      width: 23%;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &__icon {
      margin-bottom: 15px;

      svg {
        height: 80px;
        width: 80px;

        @include respond-to('tablet') {
          height: 60px;
          width: 60px;
        }
      }
    }

    &__header {
      align-items: center;
      color: $color-black;
      display: flex;
      font-weight: bold;
      margin-bottom: 15px;
      text-transform: uppercase;

      @include respond-to('tablet') {
        min-height: 50px;
      }
    }

    &__description {
      color: $color-dark-gray;
      font-size: 16px;
    }
  }
</style>