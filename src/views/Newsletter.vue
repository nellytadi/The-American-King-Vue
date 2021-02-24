<template>
  <div class="content my-10" id="content">
    <div class="container">
      <div class="row news-page">
        <div class="col-12 mx-sm-5">
          <div>
            <h2>Get Email updates for<br> <b>The American King</b></h2>
          </div>
          <form class="form-inline" action="mail/mail.php" method="post">

            <div class="form-group mb-2">

              <input type="email" class="input-email" id="email" placeholder="Email address">
            </div>
            <input type="submit" class="submit-btn mb-2" value="submit">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsletter"
}
</script>

<style scoped>

</style>