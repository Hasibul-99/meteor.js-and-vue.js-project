// Import the router
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
  });

import Home from '/imports/ui/componets/landing/home.vue';
import Cart from '/imports/ui/componets/cart/cart.vue';
import signIn from '/imports/ui/componets/signIn/signIn.vue';
import wishlist from '/imports/ui/componets/wishlist/wishlist.vue';
import toursGrid from '/imports/ui/componets/tours/tours-grid.vue';
import toursList from '/imports/ui/componets/tours/tours-list.vue';
import toursDetail from '/imports/ui/componets/tours/tours-detail.vue';
import hotelsGrid from '/imports/ui/componets/hotels/hotels-grid.vue';
import hotelsDetail from '/imports/ui/componets/hotels/hotels-detail.vue';
import hotelsList from '/imports/ui/componets/hotels/hotels-list.vue';
import restaurentsGrid from '/imports/ui/componets/restaurent/restaurent-grid.vue';
import restaurentsDetail from '/imports/ui/componets/restaurent/restaurent-details.vue';
import restaurentsList from '/imports/ui/componets/restaurent/restaurent-list.vue';
import contacts from '/imports/ui/componets/pages/contacts.vue';
import gallery from '/imports/ui/componets/pages/gallery.vue';

RouterFactory.configure(factory => {
    // Simple routes
    factory.addRoutes([
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: wishlist,
        },
        {
            path: '/tours-grid',
            name: 'toursGrid',
            component: toursGrid,
        },
        {
            path: '/tours-list',
            name: 'toursList',
            component: toursList,
        },
        {
            path: '/tours-detail',
            name: 'toursDetail',
            component: toursDetail,
        },
        {
            path: '/hotels-grid',
            name: 'hotelsGrid',
            component: hotelsGrid,
        },
        {
            path: '/hotels-detail',
            name: 'hotelsDetail',
            component: hotelsDetail,
        },
        {
            path: '/hotels-list',
            name: 'hotelsList',
            component: hotelsList,
        },
        {
            path: '/restaurents-grid',
            name: 'restaurentsGrid',
            component: restaurentsGrid,
        },
        {
            path: '/restaurents-detail',
            name: 'restaurentsDetail',
            component: restaurentsDetail,
        },
        {
            path: '/restaurents-list',
            name: 'restaurentsList',
            component: restaurentsList,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: contacts,
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: gallery,
        },
        {
            path: '/sign-in',
            name: 'sign_in',
            component: signIn,
        }
    ])
  })

export default routerFactory;