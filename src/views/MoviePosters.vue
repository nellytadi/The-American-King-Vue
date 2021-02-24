<template>
  <div class="content " id="content">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5 poster" >
          <h1>THE AMERICAN KING</h1>
          <div>
            <p>Click any of the images below to download</p>
            <hr>
          </div>
        </div>

        <div class="col-md-8 col-sm-12 mx-auto">

          <VueSlickCarousel v-bind="settings">
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster__GOLD.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_black.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_film.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_filmStrips.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_one-sheet.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_one-sheet1.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_one-sheet2.jpg')" class="d-block w-100" alt="American King Poster"  v-on:click="download($event.target.src)">

            </div>
            <div>
                <img :src="require('../../src/assets/img/posters/AmericanKingPoster_one-sheet22.jpg')" class="d-block w-100" alt="American King Poster" v-on:click="download($event.target.src)">
            </div>
          </VueSlickCarousel>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axios from 'axios';
export default {
  name: "MoviePosters",
  components: {VueSlickCarousel},
  data() {
    return {
      settings: {
        "dots": true,
        "infinite": true,
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": 3000,
        "pauseOnDotsHover": true,
        "pauseOnFocus": true,
        "pauseOnHover": true

      },
    }
  },
  methods: {
    download(src) {

      axios({
        url: src,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        let fileURL = window.URL.createObjectURL(new Blob([response.data]));
        let fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', this.getSecondPart(src));
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
    getSecondPart(str) {
      return str.split('img/')[1];
    }

  }
}
</script>

<style scoped>

</style>