<template>
  <section class="information">
    <h2 class="information__text information__text_bold">
      {{ $t('information.greeting') }}
    </h2>
    <span class="information__text information__text_plain">
      {{ $t('information.iAm') }}
      <a class="information__link">
        {{ $t('information.jobTitle') }}
      </a>
    </span>
    <span class="information__text information__text_plain">
      {{ $t('information.basedIn') }}
      <a
        href="https://www.google.com/maps/place/New+York,+NY/@40.6971494,-74.2598655,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"
        class="information__link"
        target="_blank"
      >
        {{ $t('information.cityAndCountry') }}
      </a>
    </span>
  </section>
</template>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';
  @import '../../assets/scss/mixins/center';

  .information {
    @include center();

    width: 85%;

    &__text {
      color: $color-white;
      font-weight: bold;

      &_bold {
        font-size: 36px;
        margin: 0 0 5px;
      }

      &_plain {
        display: block;
        font-size: 28px;
        line-height: 38px;
      }
    }

    &__link {
      color: $color-gray;
      cursor: pointer;
      text-decoration: none;
    }
  }
</style>