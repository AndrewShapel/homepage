<template>
  <textarea
    class="text-area"
    :class="{ 'text-area_invalid': isInvalid }"
  >
  </textarea>
</template>

<script>
  export default {
    props: {
      isInvalid: Boolean,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/invalid';

  .text-area {
    border: 2px solid $color-black;
    color: $color-black;
    font-size: 18px;
    padding: 13px 20px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $color-dark-gray;
    }

    &_invalid {
      @include invalid();
    }
  }
</style>
