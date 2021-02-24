<template>
  <div>
    <div class="container-lg px-sm-0">
      <nav class="navbar px-sm-0">
        <button class="navbar-toggler collapsed border-0" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent">
               <span class="navbar-toggler-icon">
                    <i class="fa fa-navicon"></i>
                </span>
          <i class="fa fa-close close-icon" aria-hidden="true"></i>
        </button>
        <div class="text-right hr-line"></div>
      </nav>

      <div class="collapse  navbar-collapse" id="navbarToggleExternalContent">
        <div class="p-4">

          <div class="row">
            <div class="col-md-8">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                <li class="nav-item active">
                  <router-link to="/" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>About the film</router-link>

                </li>
                <li class="nav-item">
                  <router-link to="/watch-now" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>Watch Now</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/soundtrack" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>Soundtrack Album</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/movie-posters" class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" exact>Movie Posters</router-link>
                </li>
              </ul>
            </div>
            <div class="col-md-4 side-menu">
              <router-link to="/watch-now" data-toggle="collapse" data-target=".navbar-collapse.show">
                <h3>Watch Now</h3>
                <img :src="require('../../src/assets/img/flier.jpg')" class="img-fluid" alt="The american king flier">
              </router-link>
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>
