<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '/imports/ui/componets/landing/header.vue';
  import '/imports/ui/componets/themes/stylesheet/style.css';
  import '/imports/ui/componets/themes/stylesheet/vendors.css';
  export default {
    components: {
    "Header": Header
    }
  }
</script>