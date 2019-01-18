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
        <div class="item">
            <div class="box_grid">
                    <figure>
                        <a href="#0" class="wish_bt"></a>
                        <a href="tour-detail.html"><img src="/img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                        <small>Historic</small>
                    </figure>
                    <div class="wrapper">
                        <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span class="price">From <strong>$54</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i class='far fa-clock'></i> 1h 30min</li>
                        <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                    </ul>
                </div>
            </div>
            <!-- /item -->
            <div class="item">
                <div class="box_grid">
                    <figure>
                        <a href="#0" class="wish_bt"></a>
                        <a href="tour-detail.html"><img src="/img/tour_2.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                        <small>Churches</small>
                    </figure>
                    <div class="wrapper">
                        <h3><a href="tour-detail.html">Notredam</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span class="price">From <strong>$124</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i class='far fa-clock'></i> 1h 30min</li>
                        <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                    </ul>
                </div>
            </div>
            <!-- /item -->
            <div class="item">
                <div class="box_grid">
                    <figure>
                        <a href="#0" class="wish_bt"></a>
                        <a href="tour-detail.html"><img src="/img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                        <small>Historic</small>
                    </figure>
                    <div class="wrapper">
                        <h3><a href="tour-detail.html">Versailles</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span class="price">From <strong>$25</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i class='far fa-clock'></i> 1h 30min</li>
                        <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                    </ul>
                </div>
            </div>
            <!-- /item -->
            <div class="item">
                <div class="box_grid">
                    <figure>
                        <a href="#0" class="wish_bt"></a>
                        <a href="tour-detail.html"><img src="/img/tour_3.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                        <small>Historic</small>
                    </figure>
                    <div class="wrapper">
                        <h3><a href="tour-detail.html">Versailles</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span class="price">From <strong>$25</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i class='far fa-clock'></i> 1h 30min</li>
                        <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                    </ul>
                </div>
            </div>
            <!-- /item -->
            <div class="item">
                <div class="box_grid">
                    <figure>
                        <a href="#0" class="wish_bt"></a>
                        <a href="tour-detail.html"><img src="/img/tour_4.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                        <small>Museum</small>
                    </figure>
                    <div class="wrapper">
                        <h3><a href="tour-detail.html">Pompidue Museum</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span class="price">From <strong>$45</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i class='far fa-clock'></i> 2h 30min</li>
                        <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>9.0</strong></div></li>
                    </ul>
                </div>
            </div>
            <!-- /item -->
            <div class="item">
                <div class="box_grid">
                    <figure>
                        <a href="#0" class="wish_bt"></a>
                        <a href="tour-detail.html"><img src="/img/tour_5.jpg" class="img-fluid" alt="" width="800" height="533"><div class="read_more"><span>Read more</span></div></a>
                        <small>Walking</small>
                    </figure>
                    <div class="wrapper">
                        <h3><a href="tour-detail.html">Tour Eiffel</a></h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                        <span class="price">From <strong>$65</strong> /per person</span>
                    </div>
                    <ul>
                        <li><i class='far fa-clock'></i> 1h 30min</li>
                        <li><div class="score"><span>Good<em>350 Reviews</em></span><strong>7.5</strong></div></li>
                    </ul>
                </div>
            </div>
            <!-- /item -->
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
