<template>
  <div>
    <template v-if="showHeader($route.name)">
      <Header></Header>
    </template>
    
    <router-view></router-view>
    
    <template v-if="showFooter($route.name)">
	    <footer-component></footer-component>
    </template>
  </div>
</template>

<script>
  import _ from 'lodash';

  import Header from '/imports/ui/componets/landing/header.vue';
  import footerComponent from '/imports/ui/componets/landing/footer.vue';
  
  export default {
    data: function() {
      return {
        hideHeaderPages: ['sign_in', 'register'],
        showHeader: function(pathName) {
          if (_.indexOf(this.hideHeaderPages, pathName) !== -1 ) {
              return false;
          } else return true;
        },
        showFooter: function(pathName) {
          if (_.indexOf(this.hideHeaderPages, pathName) !== -1 ) {
              return false;
          } else return true;
        }
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
          // console.info('App currentRoute:', instance.$router.currentRoute)
          // console.log("path", instance.$route.path);
          // console.log("name", instance.$route.name);

        })
    }
  }
</script>