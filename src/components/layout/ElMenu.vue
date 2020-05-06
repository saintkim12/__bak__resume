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
  width: $menubar-width;
  left: calc((100% - #{$menubar-width}) / 2);
  padding: 2px;
  display: flex;
  flex-wrap: nowrap;
  background-color: #666;
  transform: translateY(-100%);
  transition: all .2s ease-in-out;
  &.opened {
    transform:translateY(0%);
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
