<template>
  <footer class="footer-image" id="#A">
    <social-networks
      class="footer-image__social-networks"
      :networks="socialNetworks"
    >
    </social-networks>
    <span class="footer-image__text">
      © {{ year }}, {{ $t('footerImage.copyright') }}
    </span>
  </footer>
</template>

<script>
  import { HEADER_IMAGE_SOCIAL_NETWORKS } from '../header-image/header-image.constants';

  import SocialNetworks from '../social-networks/social-networks.vue';

  export default {
    data() {
      return {
        year: new Date().getFullYear(),
        socialNetworks: HEADER_IMAGE_SOCIAL_NETWORKS,
      };
    },
    components: {
      SocialNetworks,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .footer-image {
    align-items: center;
    background-color: $color-dark-black;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    padding: 30px;

    @include respond-to('tablet') {
      height: 300px;
    }

    &__social-networks {
      align-items: flex-start;
      flex-direction: row;

      .social-networks__link {
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }

      .vector {
        fill: $color-white;
      }
    }

    &__text {
      color: $color-light-black;
      font-size: 18px;
    }
  }
</style>