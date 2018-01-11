<template>
  <div>
    <router-view key="aaaa"></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name:'person',
    computed:{
      ...mapGetters(['name','roles'])
    }
  }
</script>

<style lang='scss'>

</style>
