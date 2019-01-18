<template>
    <div id="app-slider">
        <div class="slider">
            <ul class="slides" :style="style">
            <li v-for="(slide,i) in playslides" :key="i">
                <div class="img" :style="{ backgroundImage: `url(${slide.img})` }"></div>
            </li>
            </ul>
            <ul class="indicators">
            <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
                <div class="item">
                <span class="title">{{slide.title}}</span>
                <span class="progress">
                    <div class="fill" :style="{ width: `${percent}%`}"></div>
                    <div class="dot"></div>
                </span>
                <p class="mark">{{slide.mark}}</p>
                </div>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            slides: [
                {
                    img: "/img/home_slider/slide_1.jpg",
                    title: "Give Your Home a Little Responsibility",
                    mark: "Convenience"
                },
                {
                    img: "/img/home_slider/slide_2.jpg",
                    title: "Always Be In The Know",
                    mark: "Monitoring & Safety"
                },
                {
                    img: "/img/home_slider/slide_3.jpg",
                    title: "Smarter Home Security",
                    mark: "Security"
                },
                {
                    img: "/img/home_slider/slide_1.jpg",
                    title: "Experience Lighting in a New Way",
                    mark: "Lighting"
                }
            ],
            current: 0,
            percent: 0,
            timer: 0,
            interval: 0,
            progress: 0,
            duration: 5000,
            playslides: []
        }
  },
  computed: {
    style() {
      switch (this.current % 2) {
        case 0:
          return { top: "0" };
        case 1:
          return { top: "-100%" };
      }
    }
  },
  methods: {
    selectSlide(i) {
      this.current = i;
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    process() {
      this.current++;
      if (this.current >= this.slides.length) {
        this.current = 0;
      }
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    going() {
      let time = new Date().getTime();
      this.percent = Math.floor(100 * (time - this.timer) / this.duration);
    },
    resetPlay() {
      clearInterval(this.interval);
      clearInterval(this.progress);
      this.play();
    },
    stop() {
      clearInterval(this.interval);
      clearInterval(this.progress);
    },
    play() {
      this.timer = new Date().getTime();
      this.progress = setInterval(this.going, this.duration / 100);
      this.interval = setInterval(this.process, this.duration);
    }
  },
  created: function() {
      let instance = this;
        this.$nextTick(function () {
            this.playslides[0] = this.slides[0];
            this.playslides[1] = this.slides[1];
            this.play();
        })
  }
}
</script>

