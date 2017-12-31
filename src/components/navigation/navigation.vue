<template>
  <nav
    class="navigation"
    :class="{ 'navigation_colors-inverse': isColorsInverse }"
  >
    <section
      class="navigation__links"
      v-if="isOpened"
      @click="toggle"
    >
      <a
        class="navigation__link"
        :class="{ 'navigation__link_colors-inverse': isColorsInverse, 'navigation__link_active': link.id === activeLinkId }"
        v-for="link in links"
        :href="link.href"
        :key="link.id"
      >
        {{ $t(link.title) }}
      </a>
    </section>
    <vector
      class="navigation__icon"
      :class="{ 'navigation__icon_close': isOpened }"
      :svg="icon"
      @click="toggle"
      ref="icon"
    >
    </vector>
  </nav>
</template>

<script>
  import verge from 'verge';

  import dom from '../../utils/dom';

  import breakpoints from '../../constants/breakpoints';
  import icons from '../../constants/icons';

  import Vector from '../vector/vector.vue';

  export default {
    data() {
      return {
        isOpened: verge.viewportW() >= breakpoints.TABLET,
      };
    },
    props: {
      links: Array,
      activeLinkId: String,
      isColorsInverse: Boolean,
    },
    components: {
      Vector,
    },
    computed: {
      /**
       * @returns {Boolean}
       */
      icon() {
        return (this.isOpened)
          ? icons.CLOSE
          : icons.MENU;
      },
    },
    methods: {
      toggle() {
        const isMobile = verge.viewportW() < breakpoints.TABLET;
        if (isMobile) {
          this.isOpened = !this.isOpened;
        }
      },

      /**
       * @param {Object} event
       */
      click(event) {
        const { $el, $refs, isOpened } = this;

        const target = event.target;
        const icon =  $refs.icon;

        if (isOpened && target && !dom.isDescendant($el, target) && target !== icon.$el) {
          this.toggle();
        }
      }
    },
    created() {
      window.addEventListener('click', this.click);
    },
    destroyed() {
      window.removeEventListener('click', this.click);
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .navigation {
    background-color: $color-black;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    justify-content: center;
    min-height: 66px;
    position: fixed;
    text-transform: uppercase;
    width: 100%;
    z-index: 2;

    @include respond-to('tablet') {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      font-size: 20px;
      min-height: initial;
      position: initial;
    }

    &_colors-inverse {
      background-color: $color-white;
    }

    &__links {
      display: flex;
      flex-direction: column;

      @include respond-to('tablet') {
        flex-direction: row;
      }
    }

    &__link {
      color: $color-white;
      cursor: pointer;
      display: block;
      padding: 25px;
      text-decoration: none;
      transition: color 0.2s linear;

      @include respond-to('tablet') {
        display: initial;
      }

      &:hover {
        color: $color-dark-gray;
      }

      &_colors-inverse {
        color: $color-black;
      }

      &_active {
        color: $color-dark-gray;
      }
    }

    &__icon {
      fill: $color-dark-gray;
      height: 35px;
      position: absolute;
      right: 15px;
      top: 15px;
      width: 35px;

      @include respond-to('tablet') {
        display: none;
      }

      &_close {
        height: 30px;
        right: 18px;
        top: 18px;
        width: 30px;
      }
    }
  }
</style>