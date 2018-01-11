<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <navbar></navbar>
    <div class="sidebar-wrapper">
      <sidebar class="sidebar-container"></sidebar>
    </div>
    <div class="main-container">
      <levelbar></levelbar>
      <app-main></app-main>
    </div>
  </div>
</template>


<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout'
import Levelbar from './Levelbar'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Levelbar
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
