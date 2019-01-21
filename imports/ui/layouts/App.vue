<template>
  <div>
    <Header></Header>
    <router-view></router-view>
	  <footer-component></footer-component>
  </div>
</template>

<script>
  import Header from '/imports/ui/componets/landing/header.vue';
  import '/imports/ui/componets/themes/stylesheet/style.css';
  import '/imports/ui/componets/themes/stylesheet/vendors.css';
  import footerComponent from '/imports/ui/componets/landing/footer.vue';
  export default {
    components: {
    "Header": Header,
	  "footer-component": footerComponent
    }
  }
</script>