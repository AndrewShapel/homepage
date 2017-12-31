<template>
  <group
    class="contact-me__form"
    :title="$t('groups.contactMe.title')"
    :description="$t('groups.contactMe.description')"
    :isTitleUnderlined="true"
    :isCenter="true"
  >
    <form class="contact-me__form-content" @submit.prevent="submit">
      <form-input
        class="contact-me__form-input"
        name="name"
        :placeholder="$t('groups.contactMe.form.inputs.name.placeholder')"
        :isInvalid="validationErrors && !!validationErrors.first('name')"
      >
      </form-input>
      <form-input
        class="contact-me__form-input"
        name="subject"
        :placeholder="$t('groups.contactMe.form.inputs.subject.placeholder')"
        :isInvalid="validationErrors && !!validationErrors.first('subject')"
      >
      </form-input>
      <form-input
        class="contact-me__form-input"
        name="company"
        :placeholder="$t('groups.contactMe.form.inputs.company.placeholder')"
        :isInvalid="validationErrors && !!validationErrors.first('company')"
      >
      </form-input>
      <form-input
        class="contact-me__form-input"
        name="city"
        :placeholder="$t('groups.contactMe.form.inputs.city.placeholder')"
      >
      </form-input>
      <form-text-area
        class="contact-me__form-text-area"
        name="message"
        :placeholder="$t('groups.contactMe.form.textArea.message.placeholder')"
        :isInvalid="validationErrors && !!validationErrors.first('message')"
      >
      </form-text-area>
      <form-button
        class="contact-me__form-button"
        :title="$t('groups.contactMe.form.button.send')"
        :type="sendButtonType"
        :isFull="true"
      >
      </form-button>
    </form>
  </group>
</template>

<script>
  import { Validator } from 'vee-validate';

  import { BUTTON_TYPES } from '../../constants/form';

  import Group from '../../components/group/group.vue';
  import FormInput from '../../components/form/form-input.vue';
  import FormTextArea from '../../components/form/form-text-area.vue';
  import FormButton from '../../components/form/form-button.vue';
  
  export default {
    data() {
      return {
        validator: null,
        validationErrors: null,
        sendButtonType: BUTTON_TYPES.SUBMIT,
      };
    },
    components: {
      Group,
      FormInput,
      FormTextArea,
      FormButton,
    },
    methods: {
      /**
       * @param {Object} event
       */
      async submit(event) {
        const validator = this.validator;

        const targets = event.target;
        if (targets) {
          const toValidate = Object
            .keys(targets)
            .map((targetKey) => targets[targetKey])
            .reduce((total, target) => {
              total[target.name] = target.value;

              return total;
            }, {});

          const isValid = await validator.validateAll(toValidate);
          if (isValid) {
            const { name, subject, company, city, message } = toValidate;

            const location = window.location;
            if (location) {
              window.location = `mailto:hh@andrewshapel.com?subject=${subject} | [${name}] [${company}] [${city}}]&body=${message}`;
            }
          }
        }
      },
    },
    mounted() {
      this.validator = new Validator({
        name: 'required',
        subject: 'required',
        company: 'required',
        message: 'required',
      });

      this.$set(this, 'validationErrors', this.validator.errors);
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/mixins/respond-to';

  .contact-me {
    &__form {
      .input {
        @include respond-to(556px) {
          width: initial;
        }
      }

      &-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 504px;
      }

      &-input {
        margin-bottom: 20px;
        max-width: 100%;

        @include respond-to(556px) {
          max-width: 340px;
        }
      }

      &-text-area {
        max-width: 440px;
      }

      &-button {
        margin: 20px auto;
      }
    }
  }
</style>