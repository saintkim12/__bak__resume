<template>
  <fragment>
    <div class="menu" :class="opened && 'opened'">
      <div class="menu-item"><span class="mdi mdi-home"/></div>
      <div class="menu-item"><span class="mdi mdi-account-alert"/></div>
      <div class="menu-item"><span class="mdi mdi-email"/></div>
      <div class="menu-item" @click="scroll({ to: 'prev' })"><span class="mdi mdi-arrow-up-drop-circle-outline"/></div>
      <div class="menu-item" @click="scroll({ to: 'next' })"><span class="mdi mdi-arrow-down-drop-circle-outline"/></div>
      <div class="menu-item flex-right" @click="scroll({ to: 'top' })"><span class="mdi mdi-arrow-up-thick"/></div>
      <div class="menu-item" @click="opened = false"><span class="mdi mdi-close"/></div>
    </div>
    <div class="menu-closed" :class="opened && 'opened'">
      <div class="menu-item flex-right" @click="opened = true"><span class="mdi mdi-menu-down"/></div>
    </div>
  </fragment>
</template>
<style lang="scss" scoped>
@import "./_var.scss";
.menu, .menu-closed {
  position: fixed;
  width: $menubar-width;
  left: calc((100% - #{$menubar-width}) / 2);
  display: flex;
  flex-wrap: nowrap;
  transition: all .2s ease-in-out;
  .menu-item {
    font-size: 1.5rem;
    -moz-user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    border: 1px solid #666;
    border-radius: 2px;
    color: #bbb;
    &.flex-right {
      margin-left: auto;
    }
  }
}
.menu {
  padding: 2px;
  background-color: #666;
  transform: translateY(-100%);
  z-index: 20;
  &.opened {
    transform:translateY(0%);
  }
  .menu-item {  
    margin: 2px;
    padding: 2px;
    &:hover {
      transition-duration: .4s;
      border: 1px solid #eee;
      background-color: #ddd;
      color: #000;
    }
  }
}
.menu-closed {
  padding: 0 2px;
  background-color: transparent;
  transform: translateY(0%);
  z-index: 10;
  pointer-events: none;
  &.opened {
    transform: translateY(-100%);
    // opacity: 0;
  }
  .menu-item {
    margin: 0 2px;
    padding: 0 2px;
    background-color: #666;
    pointer-events: initial;
  }
}
</style>
<script>
export default {
  name: 'ElMenu',
  props: ['pageLength'],
  data() {
    return {
      opened: false
    }
  },
  methods: {
    open() { this.opened = true },
    close() { this.opened = false },
    toggle() { this.opened = !this.opened },
    scroll({ to }) {
      const checkFalseExceptZero = (v, w) => v || v === 0 ? v : w
      const pageLength = this.pageLength
      const totalHeight = document.body.scrollHeight
      const vh100 = window.innerHeight
      const waypoint = Array(pageLength).fill(0).map((_, i) => i * vh100)
      const currentPoint = window.pageYOffset

      switch (to) {
        case 'prev':
          window.scrollTo({ top: checkFalseExceptZero(waypoint.slice().reverse().find(px => px < currentPoint), currentPoint), behavior: 'smooth' })
          break
        case 'next':
          window.scrollTo({ top: checkFalseExceptZero(waypoint.find(px => px > currentPoint), currentPoint), behavior: 'smooth' })
          break
        case 'top':
          window.scrollTo({ top: 0 })
          break
        case 'bottom':
          window.scrollTo({ top: totalHeight })
          break
      }
    }
  }
}
</script>
