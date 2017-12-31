<template>
  <article class="format-table">
    <section
      class="format-table__column"
      v-for="headerColumn in data.HEADER_COLUMNS"
      :key="headerColumn.id"
    >
      <header class="format-table__header">
        <section class="format-table__header-column">
          {{ $t(headerColumn.title) }}
        </section>
      </header>
      <section
        class="format-table__content"
        v-for="contentColumn in data.CONTENT_COLUMNS[headerColumn.id]"
        :key="contentColumn.id"
      >
        <a
          v-if="contentColumn.link"
          :href="contentColumn.link.href"
          class="format-table__link"
        >
          {{ $t(contentColumn.link.title) }}
        </a>
        <span
          v-for="contentColumnInformation in contentColumn.text"
          :key="contentColumnInformation"
        >
          {{ $t(contentColumnInformation) }}
        </span>
      </section>
    </section>
  </article>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/colors';
  @import '../../assets/scss/mixins/respond-to';

  .format-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
    width: 100%;

    @include respond-to('tablet') {
      flex-direction: row;
    }

    &__column {
      padding: 15px;
    }

    &__header {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;

      &-column {
        display: block;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      justify-content: center;
      line-height: 24px;
      margin: 15px 0;
      width: 100%;

      @include respond-to('phone-large') {
        align-items: center;
        text-align: center;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__link {
      color: $color-red;
      text-decoration: none;
    }
  }
</style>