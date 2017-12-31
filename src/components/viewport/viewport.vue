<template>
  <article class="viewport">
    <slot></slot>
  </article>
</template>

<script>
  import verge from 'verge';

  import throttle from 'lodash/throttle';

  export default {
    props: {
      name: String,
      fireOffset: Number,
      throttleTimeout: Number,
    },
    methods: {
      onScroll: throttle(function() {
        const { $slots, fireOffset } = this;

        const slots = $slots.default;
        if (slots && slots.length > 0) {
          slots.forEach((slot) => {
            const slotElement = slot.elm;

            if (slotElement) {
              const inViewPort = verge.inViewport(slotElement, fireOffset || -150);

              if (inViewPort) {
                this.$emit('inViewport', slotElement.id);
              }
            }
          });
        }
      }, this.throttleTimeout || 300),
    },
    created() {
      window.addEventListener('scroll', this.onScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.onScoll);
    },
  };
</script>
