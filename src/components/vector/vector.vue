<template>
  <article
    class="vector"
    v-html="svg"
    @click="click"
  >
  </article>
</template>

<script>
  export default {
    props: {
      svg: String,
    },
    methods: {
      click() {
        this.$emit('click');
      },
    },
  };
</script>
