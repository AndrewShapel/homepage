<template>
  <main class="home">
    <view-port @inViewport="triggerViewportAction">
      <header-image
        :id="homeAnchor"
        :activeNavigationLinkId="activeViewportId"
        :isNavigationStick="isNavigationStick"
      >
      </header-image>
      <about-me :id="aboutMeAnchor"></about-me>
      <skills-and-values
        :id="skillsAndValuesAnchor"
        ref="skillsAndValues"
      >
      </skills-and-values>
      <section :id="experienceAnchor">
        <experience></experience>
        <companies></companies>
      </section>
      <section :id="contactMeAnchor">
        <contact-me></contact-me>
        <footer-image></footer-image>
      </section>
    </view-port>
  </main>
</template>

<script>
  import SmoothScroll from 'smooth-scroll';

  import anchors from '../../constants/anchors';

  import ViewPort from '../../components/viewport/viewport.vue';
  import HeaderImage from '../../components/header-image/header-image.vue';
  import FooterImage from '../../components/footer-image/footer-image.vue';
  import AboutMe from '../../blocks/about-me/about-me.vue';
  import SkillsAndValues from '../../blocks/skills-and-values/skills-and-values.vue';
  import Experience from '../../blocks/experience/experience.vue';
  import Companies from '../../blocks/companies/companies.vue';
  import ContactMe from '../../blocks/contact-me/contact-me.vue';

  export default {
    data() {
      return {
        activeViewportId: anchors.HOME.id,
        homeAnchor: anchors.HOME.id,
        aboutMeAnchor: anchors.ABOUT_ME.id,
        skillsAndValuesAnchor: anchors.SKILLS_AND_VALUES.id,
        experienceAnchor: anchors.EXPERIENCE.id,
        contactMeAnchor: anchors.CONTACT_ME.id,
      };
    },
    components: {
      ViewPort,
      HeaderImage,
      FooterImage,
      AboutMe,
      SkillsAndValues,
      Experience,
      Companies,
      ContactMe,
    },
    computed: {
      /**
       * @returns {Boolean}
       */
      isNavigationStick() {
        return this.activeViewportId !== anchors.HOME.id;
      },
    },
    methods: {
      /**
       * @param {String} id
       */
      triggerViewportAction(id) {
        const skillsAndValuesRef = this.$refs.skillsAndValues;

        if (id === anchors.SKILLS_AND_VALUES.id && skillsAndValuesRef && skillsAndValuesRef.showProgresses) {
          skillsAndValuesRef.showProgresses();
        }

        this.activeViewportId = id;
      },
    },
    created() {
      new SmoothScroll('a[href*="#"]', {
        offset: 80,
      });
    },
  };
</script>
