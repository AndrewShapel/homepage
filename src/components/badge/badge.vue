<template>
  <a
    class="badge"
    :href="link"
    target="_blank"
  >
    <section class="badge__content">
      <img
        class="badge__image"
        :class="imageClass"
        :src="image"
      >
    </section>
    <footer class="badge__footer">
      {{ title }}
    </footer>
  </a>
</template>

<script>
  export default {
    props: {
      imageClass: String,
      title: String,
      link: String,
      image: String,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/center-flex';

  .badge {
    @include center-flex();

    color: $color-light-black;
    flex-direction: column;
    text-decoration: none;

    &__content {
      align-items: center;
      background-color: $color-light-black;
      border-radius: 96px;
      cursor: pointer;
      display: flex;
      height: 96px;
      justify-content: center;
      padding: 12px;
      transition: transform 0.1s linear;
      width: 96px;

      &:hover {
        transform: scale3d(1.05, 1.05, 1.05);
      }
    }

    &__image {
      height: 35px;
      width: 90px;
    }

    &__footer {
      height: 18px;
      margin-top: 10px;
      max-width: 116px;
      text-align: center;
    }
  }
</style>