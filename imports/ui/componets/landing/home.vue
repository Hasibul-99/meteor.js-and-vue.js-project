<template>
    <main>
        <div id="full-slider-wrapper">
            <image-slider></image-slider>
        </div>

        <div class="container-fluid margin_80_0">
			<div class="main_title_2">
				<span><em></em></span>
				<h2>Our Popular Tours</h2>
				<p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
			</div>

            <slick-slider></slick-slider>
			<div id="reccomended" class="owl-carousel owl-theme">
			</div>
			<!-- /carousel -->
			<div class="container">
				<p class="btn_home_align"><a href="tours-grid-isotope.html" class="btn_1 rounded">View all Tours</a></p>
			</div>
			<!-- /container -->
			<hr class="large">
		</div>
		<!-- /container -->
    </main>
</template>

<script>

import imageSlider from '/imports/ui/componets/landing/image-slider.vue';
import slickSlider from '/imports/ui/componets/landing/slick-slider.vue';

export default {
     components: {
    "image-slider": imageSlider,
    "slick-slider": slickSlider
    }
}
</script>

