<template>
  <div class="content" id="content">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-12 left-content">
          <div class="row">
            <div class="col-md-12 col-6">
              <div class="top-text">
                <div>
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <h2>
                  <b> The King</b><br> is here
                </h2>
                <div class="text-right">
                  <i class="fa fa-quote-right" aria-hidden="true"></i>
                </div>

              </div>
            </div>
            <div class="col-md-12  col-6">

              <img :src="require('../../src/assets/img/tak.png')"  class="img-fluid animate-lion" alt="The american king">
            </div>
          </div>


        </div>
        <div class="col-md-7 col-sm-12 right-content">
          <div>
            <h1 class="animate-from-up">The american king</h1>

            <div class="animate-from-bottom">
              <p>
                In 2020, a mysterious Priestess arrives in the USA to fulfill a 400 year old Prophecy: to
                choose
                an
                American King (Akon) who will rebuild an ancient African Kingdom .
              </p>
              <p>
                The CIA scrambles to find information for the President, leading to the unraveling of the
                most
                guarded Secret about the founding of the USA.
                The President running for re-election, has to decide if he can Make Africa Great Again.
              </p>
            </div>

            <div class="hr-line-white"></div>
          </div>


          <div class="row">
            <div class="col-6" style="margin-top: 10px;">
              <a href="https://youtu.be/LfjmnafJ-ys ">
                <button class="site-btn trailer-btn"><img :src="require('../../src/assets/img/icon.svg')" alt="trailer">
                </button>
              </a>
              <div class="trailer">
                <span>Trailer</span>
              </div>
            </div>
            <div class="col-6 trailer-side">
              <span>Written and directed by</span><br>
              <b>Adah Obekpa</b>
            </div>


          </div>

          <div class="text-center">
            <div class="row down-buttons">
              <div class="col-6">
                <router-link to="/watch-now">
                  <div class="where__watch">
                    <h3>Where to watch</h3>
                    <p class="text-center">STREAM ON YOUR<br>
                      FAVOURITE PLATFORMS</p>
                  </div>

                  <button class="site-btn watch-btn">Watch Now</button>
                </router-link>


              </div>
              <div class="col-6">
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=drscharity%40gmail.com&item_name=Doctors+charity&currency_code=USD">
                  <button class="site-btn donate-btn">Donate</button>
                </a>
              </div>
              <div class="col-6 soundtrack">
                <router-link to="/soundtrack">
                Get the
                  <div><b>soundtrack album</b></div>
                </router-link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home"

}
</script>

<style scoped>

</style>