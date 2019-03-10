<template>
    <div id="carousel">
        <carousel-3d :autoplay="true" :autoplay-timeout="3000" :display="5">
            <slide v-for="(slide, i) in slides" :index="i" :key="slide.id">
                <div class="single-owl">
                    <div class="images">
                        <div class="image-frame">
                            <img :src="slide.src" height="170" width="170">
                        </div>
                    </div>
                    <div class="owl-details">
                        <h3>{{slide.title}}</h3>
                        <span>{{slide.desc}}</span>
                    </div>
                </div>
            </slide> 
        </carousel-3d>
    </div>
</template>

<script>
import Vue from 'vue';
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    data: function() {
        return {
              slides: [{
                id: '1',
                title: 'Julia Holmes',
                src: '/img/1_carousel.jpg',
                desc: 'CEO'
                }, 
                {
                id: '2',
                title: 'Lucas Smith',
                src: '/img/2_carousel.jpg',
                desc: 'Marketing'
                }, 
                {
                id: '3', 
                title: 'Paul Stephens',
                src: '/img/3_carousel.jpg',
                desc: 'Business strategist'
                }, 
                {
                id: '4',
                title: 'Pablo Himenez',
                src: '/img/4_carousel.jpg',
                desc: 'Customer Service'
                }, 
                {
                id: '5',
                title: 'Andrew Stuttgart',
                src: '/img/5_carousel.jpg',
                desc: 'Admissions'
            }]
        }
    },    
    components: {
      "Carousel3d": Carousel3d,
      "Slide": Slide
    },
}
</script>

