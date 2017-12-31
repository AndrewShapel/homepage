<template>
  <button
    class="button"
    :class="{ 'button_full': isFull, 'button_disabled': isDisabled }"
    :disabled="isDisabled"
  >
    {{ title }}
  </button>
</template>

<script>
  export default {
    props: {
      title: String,
      isFull: Boolean,
      isDisabled: Boolean,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .button {
    background-color: $color-white;
    border: 2px solid $color-black;
    border-radius: 0;
    color: $color-black;
    cursor: pointer;
    display: block;
    font-size: 20px;
    padding: 12px 52px;
    transition: all 0.2s linear;

    &:focus {
      outline: none;
    }

    &:hover {
      border-color: $color-dark-gray;
      color: $color-dark-gray;
    }

    &_disabled {
      border-color: $color-dark-gray;
      color: $color-dark-gray;
    }

    &_full {
      width: 100%;

      @include respond-to('tablet') {
        width: initial;
      }
    }
  }
</style>