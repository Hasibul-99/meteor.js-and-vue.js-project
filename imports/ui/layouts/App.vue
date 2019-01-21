<template>
  <div>
    <template v-if="showHeader">
      <Header></Header>
    </template>
    
    <router-view></router-view>
    
    <template v-if="showFooter">
	    <footer-component></footer-component>
    </template>
  </div>
</template>

<script>
  import _ from 'lodash';

  import Header from '/imports/ui/componets/landing/header.vue';
  import '/imports/ui/componets/themes/stylesheet/style.css';
  import '/imports/ui/componets/themes/stylesheet/vendors.css';
  import footerComponent from '/imports/ui/componets/landing/footer.vue';
  export default {
    data: function() {
      return {
        showHeader: true,
        showFooter: true,
        hideHeaderPages: ['sign_in', 'register']
      }
    },
    components: {
    "Header": Header,
	  "footer-component": footerComponent
    },
    created: function () {
        let instance = this;
        this.$nextTick(function () {

          // console.info('App this router:', instance.$router)
          console.info('App currentRoute:', instance.$router.currentRoute)

          let currentRouteInfo = instance.$router.currentRoute,
              currentRouteName = currentRouteInfo && currentRouteInfo.name ? currentRouteInfo.name : '';

          if (!currentRouteName || _.indexOf(instance.hideHeaderPages, currentRouteName) !== -1 ) {

            console.log("instance.showHeader")
            instance.showHeader = false;
            instance.showFooter = false;
          }

        })
    }
  }
</script>