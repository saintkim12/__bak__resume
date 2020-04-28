<template>
  <div id="page">
    <div class="menu">
      <div class="menu-item">ha</div>
      <div class="menu-item">ha</div>
      <div class="menu-item">ho</div>
      <div class="menu-item">huuuuuu</div>
    </div>
    <section>
      <h1 style="text-align: center;">Hello!</h1>
    </section>
    <section>
      <h1>Hello!</h1>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#page {
  $section-padding: 10px;
  $menubar-width: 400px;
  section {
    width: calc(100% - #{$section-padding * 2});
    height: calc(100% - #{$section-padding * 2});
    min-height: 400px - ($section-padding * 2);
    padding: $section-padding;
    background-color: #eee;
  }
  .menu {
    position: fixed;
    top: 0;
    background-color: #666;
    width: $menubar-width;
    left: calc((100% - #{$menubar-width}) / 2);
    // opacity: 0.6;
    display: flex;
    flex-wrap: nowrap;
    padding: 5px;
    .menu-item {
      margin: 2px;
      padding: 2px;
      // display: inline-block;
    }
  }
}
</style>
<style lang="scss">
html, body, #page {
  width: 100%;
  height: 100%;
}
</style>
<script>
import 'reset-css/reset.css'
export default {
  name: 'App'
}
</script>
