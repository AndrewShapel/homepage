<template>
  <header class="header-image">
    <navigation
      :class="{ 'header-image__navigation_stick': isNavigationStick }"
      :links="navigationLinks"
      :activeLinkId="activeNavigationLinkId"
      :isColorsInverse="isNavigationStick"
    >
    </navigation>
    <information></information>
    <social-networks
      class="header-image__social-networks"
      :class="{ 'header-image__social-networks_offset': isNavigationStick }"
      :networks="socialNetworks"
    >
    </social-networks>
  </header>
</template>

<script>
  import { HEADER_IMAGE_NAVIGATION_LINKS, HEADER_IMAGE_SOCIAL_NETWORKS } from './header-image.constants';

  import Navigation from '../navigation/navigation.vue';
  import Information from '../information/information.vue';
  import SocialNetworks from '../social-networks/social-networks.vue';

  export default {
    data() {
      return {
        navigationLinks: HEADER_IMAGE_NAVIGATION_LINKS,
        socialNetworks: HEADER_IMAGE_SOCIAL_NETWORKS,
      };
    },
    props: {
      activeNavigationLinkId: String,
      isNavigationStick: Boolean,
    },
    components: {
      Navigation,
      Information,
      SocialNetworks,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .header-image {
    background-color: $color-black;
    height: 100vh;
    position: relative;
    width: 100vw;

    &__navigation {
      &_stick {
        border-bottom: 1px solid $color-gray;
        position: fixed !important;
      }
    }

    &__social-networks {
      position: fixed;
      right: 19px;
      top: 90px;
      transition: top 0.2s linear;

      @include respond-to('tablet') {
        right: 22px;
        top: 44px;
      }

      &_offset {
        @include respond-to('tablet') {
          top: 118px;
        }
      }
    }
  }
</style>