<template>
  <div>

    <template v-for="item in routes">
      <router-link  :name= "'a'"
                    v-if="!item.hidden&&item.noDropdown&&item.children.length>0"
                    :to="item.path+'/'+item.children[0].path"
      >
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <icon-svg v-if='item.icon' :icon-class="item.icon" /> <span>{{item.children[0].name}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu :index="item.path" :name="item.name" ref="cao"    v-if="!item.noDropdown&&!item.hidden">
        <template slot="title">
          <icon-svg v-if='item.icon' :icon-class="item.icon" /> <span>{{item.name}}</span>
        </template>
        <template v-for="child in item.children" v-if='!child.hidden'>
          <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
          <router-link v-else  class="menu-indent" :to="item.path+'/'+child.path" >
            <el-menu-item :index="item.path+'/'+child.path">
             <span> {{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
this.$ne
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.svg-icon {
  margin-right: 10px;
}
.hideSidebar .menu-indent{
  display: block;
  text-indent: 10px;
}
</style>

