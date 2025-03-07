<template>
  <section class="how-section spad set-bg">
    <div class="container text-white">
      <div class="row">
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-music"></i>
            </div>
            <h4>{{ $t("about.card1.title") }}</h4>
            <p>{{ $t("about.card1.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-book"></i>
            </div>
            <h4>{{ $t("about.card2.title") }}</h4>
            <p>{{ $t("about.card2.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-youtube"></i>
            </div>
            <h4>{{ $t("about.card3.title") }}</h4>
            <p>{{ $t("about.card3.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-list"></i>
            </div>
            <h4>{{ $t("about.card4.title") }}</h4>
            <p>{{ $t("about.card4.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-television"></i>
            </div>
            <h4>{{ $t("about.card5.title") }}</h4>
            <p>{{ $t("about.card5.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-play"></i>
            </div>
            <h4>{{ $t("about.card6.title") }}</h4>
            <p>{{ $t("about.card6.text") }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="how-item">
            <div class="hi-icon">
              <i class="fa fa-puzzle-piece"></i>
            </div>
            <h4>{{ $t("about.card7.title") }}</h4>
            <p>{{ $t("about.card7.text") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
