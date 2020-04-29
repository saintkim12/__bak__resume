<template>
  <div id="page">
    <div class="menu" :class="opened && 'opened'">
      <div class="menu-item"><span class="mdi mdi-home"/></div>
      <div class="menu-item"><span class="mdi mdi-account-alert"/></div>
      <div class="menu-item"><span class="mdi mdi-email"/></div>
      <div class="menu-item"><span class="mdi mdi-arrow-up-drop-circle-outline"/></div>
      <div class="menu-item"><span class="mdi mdi-arrow-down-drop-circle-outline"/></div>
      <div class="menu-item flex-right"><span class="mdi mdi-arrow-up-thick"/></div>
      <div class="menu-item" @click="opened = false"><span class="mdi mdi-close"/></div>
    </div>
    <section>
      <h1 style="text-align: center;">Hello!</h1>
      <div @click="opened = true">
        Bob lives in a .
      </div>
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
    display: none;
    // transform: translateY(-100%);
    // transition: all 0.5s ease-in-out;
    flex-wrap: nowrap;
    padding: 2px;
    &.opened {
      display: flex;
      // transform:translateY(0%);
      // transition: all 0.5s ease-in-out;
    }
    .menu-item {
      font-size: 1.5rem;
      -moz-user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      margin: 2px;
      padding: 2px;
      border: 1px solid #666;
      border-radius: 2px;
      color: #bbb;
      &:hover {
        transition-duration: .4s;
        border: 1px solid #eee;
        background-color: #ddd;
        color: #000;
      }
      &.flex-right {
        margin-left: auto;
      }
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
  name: 'App',
  data() {
    return {
      opened: false
    }
  }
}
</script>
