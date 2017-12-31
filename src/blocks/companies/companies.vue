<template>
  <group
    class="companies"
    :title="$t('groups.companies.title')"
    :isTitleSecondary="true"
    :isFull="true"
  >
    <section class="companies__badges">
      <badge
        class="companies__badge"
        v-for="company in companies"
        :imageClass="company.imageClass"
        :title="$t(company.title)"
        :link="company.homepage"
        :image="company.logo"
        :key="company.id"
      >
      </badge>
    </section>
  </group>
</template>

<script>
  import kebabCase from 'lodash/kebabCase';

  import companies from '../../constants/companies';

  import Group from '../../components/group/group.vue';
  import Badge from '../../components/badge/badge.vue';

  export default {
    data() {
      return {
        companies: [],
      };
    },
    components: {
      Group,
      Badge,
    },
    created() {
      const convertedCompanies = [];

      Object.keys(companies).forEach((companyKey, companyIndex) => {
        const company = companies[companyKey];

        convertedCompanies.push({
          ...company,
          id: companyIndex,
          imageClass: `companies__badge_${kebabCase(companyKey)}`,
        });
      });

      this.companies = convertedCompanies;
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/mixins/respond-to';
  @import '../../assets/scss/mixins/center-flex';

  .companies {
    &__badges {
      @include center-flex();

      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      list-style-type: none;
      margin: 40px auto 0;
      max-width: 600px;

      @include respond-to('desktop-large') {
        margin: 0 auto;
      }
    }

    &__badge {
      margin: 40px 15px 0;

      .companies__badge_dicoiner {
        height: 70px;
        margin-right: 10px;
      }

      .companies__badge_axamit {
        height: 20px;
      }

      .companies__badge_live-reach {
        height: 30px;
      }

      &_smart-vision-technologies {
        margin-left: 10px;
      }
    }
  }
</style>
