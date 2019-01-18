<template>
    <slick
        ref="slick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
        @beforeChange="handleBeforeChange"
        @breakpoint="handleBreakpoint"
        @destroy="handleDestroy"
        @edge="handleEdge"
        @init="handleInit"
        @reInit="handleReInit"
        @setPosition="handleSetPosition"
        @swipe="handleSwipe"
        @lazyLoaded="handleLazyLoaded"
        @lazyLoadError="handleLazeLoadError">
        <a href="http://placehold.it/2000x1000">222</a>
        <a href="http://placehold.it/2000x1000">3333</a>
        <a href="http://placehold.it/2000x1000">3333</a>
        <a href="http://placehold.it/2000x1000">444</a>
        <a href="http://placehold.it/2000x1000">5555</a>
    </slick>
</template>

<script>
import Slick from 'vue-slick';

export default {
 data: function() {
        return {
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
        };
    }, 
    components: { 
       "Slick": Slick 
    },
    methods: {
        next:function() {
            this.$refs.slick.next();
        },
 
        prev: function() {
            this.$refs.slick.prev();
        },
        reInit: function() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
 
        // Events listeners
        handleAfterChange: function(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange: function(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint: function(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy: function(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge: function(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit: function(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit: function(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition: function(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe: function(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded: function(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError: function(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    }
};
</script>
