<template>
  <div class="menu" :class="opened && 'opened'">
    <div class="menu-item"><span class="mdi mdi-home"/></div>
    <div class="menu-item"><span class="mdi mdi-account-alert"/></div>
    <div class="menu-item"><span class="mdi mdi-email"/></div>
    <div class="menu-item"><span class="mdi mdi-arrow-up-drop-circle-outline"/></div>
    <div class="menu-item"><span class="mdi mdi-arrow-down-drop-circle-outline"/></div>
    <div class="menu-item flex-right"><span class="mdi mdi-arrow-up-thick"/></div>
    <div class="menu-item" @click="opened = false"><span class="mdi mdi-close"/></div>
  </div>
</template>
<style lang="scss" scoped>
@import "./_var.scss";
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
</style>
<script>
export default {
  name: 'ElMenu',
  data() {
    return {
      opened: false
    }
  },
  methods: {
    open() { this.opened = true },
    close() { this.opened = false },
    toggle() { this.opened = !this.opened }
  }
}
</script>
