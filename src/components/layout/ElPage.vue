<template>
  <section>
    <slot/>
  </section>
</template>
<style lang="scss" scoped>
@import "./_var.scss";
section {
  width: calc(100% - #{$section-padding * 2});
  height: calc(100% - #{$section-padding * 2});
  min-height: 400px - ($section-padding * 2);
  padding: $section-padding;
  background-color: #eee;
}
</style>
<script>
export default {
  name: 'ElPage'
}
</script>