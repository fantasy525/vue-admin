<template>
    <div>
<transition name="fade" mode="out-in">
  <router-view :key="key" name="com"></router-view>
</transition>
    </div>
</template>

<script>
    export default {
      name:'commonRouterView',
      computed:{
        key(){
          return this.$route.name!==undefined?this.$route.name+ +new Date(): this.$route + +new Date()
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
