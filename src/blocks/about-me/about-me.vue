<template>
  <group
    :title="$t('groups.aboutMe.title')"
    :description="$t('groups.aboutMe.description')"
    :isTitleUnderlined="true"
  >
    <columns class="about-me__columns">
      <column
        v-for="column in columns"
        descriptionClass="about-me__column-description"
        :title="$t(column.title)"
        :description="$t(column.description)"
        :icon="column.icon"
        :key="column.key"
      >
      </column>
    </columns>
    <form-button
      class="about-me__columns-button"
      :title="$t('groups.aboutMe.button.downloadCV')"
      :isFull="true"
    >
    </form-button>
  </group>
</template>

<script>
  import { ABOUT_ME_COLUMNS } from './about-me.constants';

  import Group from '../../components/group/group.vue';
  import Columns from '../../components/columns/columns.vue';
  import Column from '../../components/column/column.vue';
  import FormButton from '../../components/form/form-button.vue';
  import ProgressBar from '../../components/progress-bar/progress-bar.vue';

  export default {
    data() {
      return {
        columns: ABOUT_ME_COLUMNS,
      };
    },
    components: {
      Group,
      Columns,
      Column,
      FormButton,
      ProgressBar,
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/mixins/respond-to';

  .about-me {
    &__columns {
      @include respond-to('tablet') {
        margin-top: 30px;
      }

      &-button {
        margin: 35px auto;
      }
    }

    &__column-description {
      min-height: 108px;
    }
  }
</style>
