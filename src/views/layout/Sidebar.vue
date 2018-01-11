<template>
  <scroll-bar>
    <div class="ham">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    </div>
    <el-menu
      ref="elMenu"
      mode="vertical"
      theme="dark"
      :default-active="curActive"
      :collapse="isCollapse"
    >
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
  </scroll-bar>

</template>

<script>
  import {mapGetters} from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'
  import Hamburger from '@/components/Hamburger'

  export default {
    components: {SidebarItem, ScrollBar, Hamburger},
    data(){
      return {
        curActive:this.$route.path
      }
    },
    methods: {
      open() {

      },
      close() {

      },
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')

        if (this.sidebar.opened) {
         this.curActive=this.$route.path
          //this.$refs.elMenu.closeMenu(this.$route.path)
        }
      },
    },
    computed: {
      ...mapGetters([
        'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }

  .ham {
    display: flex;
    padding: 10px 0;
    justify-content: center;
    background-color: #48576a;
    & .hamburger-container {

    }
  }
</style>
