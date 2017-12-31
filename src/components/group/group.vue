<template>
  <article
    class="group"
    :class="{ 'group_center': isCenter, 'group_full': isFull }"
  >
    <header
      class="group__header"
      :class="{ 'group__header_secondary': isTitleSecondary }"
      v-if="title"
    >
      <section>
        {{ title }}
        <div class="group__header-underline" v-if="isTitleUnderlined"></div>
      </section>
    </header>
    <h4
      class="group__description"
      v-if="description"
      v-html="interpolatedDescription"
    >
    </h4>
    <slot></slot>
  </article>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      isTitleSecondary: Boolean,
      isTitleUnderlined: Boolean,
      isCenter: Boolean,
      isFull: Boolean,
    },
    computed: {
      /**
       * @returns {String}
       */
      interpolatedDescription() {
        const description = this.description;


        if (description) {
          const regExp = /\|\|(.+)\|\|/;

          const match = this.description.match(regExp);
          if (match && match.length > 1) {
            const linkValue = match[1];

            const link = `<a class="group__description-link" href="maito:${linkValue}">${linkValue}</a>`;

            return description.replace(regExp, link);
          }
        }

        return description;
      },
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .group {
    margin: 40px auto;
    position: relative;
    width: 85%;

    @include respond-to('desktop-large') {
      width: 60%;
    }

    &_center {
      text-align: center;
    }

    &_full {
      border-bottom: 1px solid $color-gray;
      border-top: 1px solid $color-gray;
      padding: 50px 0;
      width: 100%;
    }

    &__header {
      align-items: center;
      display: flex;
      font-size: 40px;
      font-weight: bold;
      justify-content: center;
      text-align: center;

      &_secondary {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }

      &-underline {
        background-color: $color-red;
        height: 4px;
        width: 48px;
      }
    }

    &__description {
      font-size: 20px;
      line-height: 26px;

      &-link {
        color: $color-light-black;
        text-decoration: none;
      }
    }
  }
</style>