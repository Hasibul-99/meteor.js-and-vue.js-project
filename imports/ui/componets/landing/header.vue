<template>
    <header class="header menu_fixed" :class="{'sticky': scrolled}">
        <div class="logo">
            <router-link :to="{ name:'home' }" exact>
                <img src="/img/logo.png" width="150" height="36" data-retina="true" alt="" class="logo_normal">
                <img src="/img/logo_sticky.png" width="150" height="36" data-retina="true" alt="" class="logo_sticky">
            </router-link>
            <ul class="header-toolbar" id="top_menu">
                <li>
                    <router-link :to="{name: 'cart'}" class="header-toolbar__item" title="Cart"><i class="fa fa-bookmark-o header-toolbar-icon"></i><strong class="count">4</strong></router-link>
                </li>
                <li>
                    <router-link :to="{name: 'sign_in'}" class="header-toolbar__item" title="Sign In"><i class="fa fa-sign-in header-toolbar-icon"></i></router-link>
                </li>
                <li>
                    <router-link :to="{name: 'wishlist'}" class="header-toolbar__item" title="Your wishlist"><i class="fa fa-heart-o header-toolbar-icon"></i></router-link>
                </li>
            </ul>
    
            <!-- /top_menu -->
            <a href="#menu" class="btn_mobile">
                <div class="hamburger hamburger--spin" id="hamburger">
                    <div class="hamburger-box">
                        <div class="hamburger-inner"></div>
                    </div>
                </div>
            </a>
    
            <nav id="menu" class="main-menu">
                <ul>
                    <li><span><router-link :to="{ name:'home' }">Home</router-link></span></li>
                    <li><span><a href="#0">Tours</a></span>
                        <ul>
                            <li>
                                <router-link :to="{ name:'toursGrid' }">Tours-grid</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'toursList' }">Tours-list</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'toursDetail' }">Tour-detail</router-link>
                            </li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Hotels</a></span>
                        <ul>
                            <li>
                                <router-link :to="{ name:'hotelsGrid' }">Hotels-grid</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'hotelsList' }">Hotels-list</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'hotelsDetail' }">Hotel-detail</router-link>
                            </li>
                        </ul>
                    </li>
                    <li><span><a href="#0">Eat &amp; Drink</a></span>
                        <ul>
                            <li>
                                <router-link :to="{ name:'restaurentsGrid' }">Restaurents-grid</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'restaurentsList' }">Restaurents-list</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'restaurentsDetail' }">Restaurent-detail</router-link>
                            </li>
                        </ul>
                    </li>
                    <li><span><router-link :to="{ name:'gallery' }">Gallery</router-link></span></li>
                    <li><span><router-link :to="{ name:'contacts' }">Contacts</router-link></span></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        data: function() {
            return {
                scrolled: false
            }
        },
        components: {
    
        },
        methods: {
            handleScroll() {
             this.scrolled = window.scrollY
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>