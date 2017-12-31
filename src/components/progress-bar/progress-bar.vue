<template>
  <article class="progress-bar">
    <section class="progress-bar__content">
      <header class="progress-bar__header">
        {{ title }}
      </header>
      <span class="progress-bar__value">
          {{ `${percentage}%` }}
        </span>
    </section>
    <section class="progress-bar__bar">
      <div
        class="progress-bar__bar-value"
        :style="{ 'width': valueWidth }"
      >
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    props: {
      title: String,
      percentage: Number,
      isEmpty: Boolean,
    },
    computed: {
      /**
       * @returns {String|Number}
       */
      valueWidth() {
        const { percentage, isEmpty } = this;

        return (isEmpty)
          ? 0
          : `${percentage}%`;
      }
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';

  .progress-bar {
    max-width: 556px;
    width: 100%;

    &__content {
      display: flex;
      justify-content: space-between;
    }

    &__header {
      font-weight: bold;
      text-transform: uppercase;
    }

    &__value {
      color: $color-dark-gray;
      font-size: 14px;
    }

    &__bar {
      background-color: $color-gray;
      height: 4px;
      margin-top: 6px;
      width: 100%;

      &-value {
        background-color: $color-red;
        height: 100%;
        transition: width 0.2s linear;
      }
    }
  }
</style>