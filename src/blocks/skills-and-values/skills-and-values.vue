<template>
  <group
    :title="$t('groups.skillsAndValues.title')"
    :isTitleSecondary="true"
    :isFull="true"
  >
    <section class="skills-and-values__progress-bars">
      <progress-bar
        class="skills-and-values__progress-bar"
        v-for="progressBar in progressBars"
        :title="$t(progressBar.title)"
        :percentage="progressBar.percentage"
        :isEmpty="progressBar.isEmpty"
        :key="progressBar.id"
      >
      </progress-bar>
    </section>
  </group>
</template>

<script>
  import { SKILLS_AND_VALUES_PROGRESS_BARS } from './skills-and-values.constants';

  import Group from '../../components/group/group.vue';
  import ProgressBar from '../../components/progress-bar/progress-bar.vue';

  export default {
    data() {
      return {
        isInViewport: false,
      };
    },
    components: {
      Group,
      ProgressBar,
    },
    methods: {
      showProgresses() {
        if (!this.isInViewport) {
          this.isInViewport = true;
        }
      },
    },
    computed: {
      /**
       * @returns {Array}
       */
      progressBars() {
        const isInViewport = this.isInViewport;

        return SKILLS_AND_VALUES_PROGRESS_BARS.map((progressBar) => {
          if (isInViewport && progressBar.isEmpty) {
            progressBar.isEmpty = false;
          }

          return progressBar;
        });
      }
    },
  };
</script>

<style lang="scss">
  @import '../../assets/scss/mixins/center-flex';

  .skills-and-values {
    &__progress-bars {
      @include center-flex();

      flex-direction: column;
      margin: 40px 20px 0;
    }

    &__progress-bar {
      margin-bottom: 20px;
      padding: 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>