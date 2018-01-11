<template>
  <div>
    当前用户：{{name}}
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
