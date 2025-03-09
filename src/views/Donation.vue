<template>
  <section class="contact-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="contact-warp">
            <div class="section-title mb-0">
              <h2>{{ $t("donation.title") }}</h2>
            </div>
            <p>
              {{ $t("donation.text") }}
            </p>
            <ul>
              <li class="d-flex align-items-center justify-content-around">
                <div>
                  <div>
                    <img src="@/assets/imgs/pix.png" style="height: 50px" />
                  </div>
                  <div class="m-2">
                    <a href="mailto:contato@louvorja.com.br">
                      contato@louvorja.com.br
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <a
                      href="https://www.paypal.com/donate/?business=UA3MMHHS898G2&no_recurring=0&item_name=Software+LouvorJA&currency_code=BRL"
                      target="_blank"
                    >
                      <img
                        src="@/assets/imgs/paypal.png"
                        style="height: 50px"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  computed: {
    lang() {
      return this.$i18n.locale;
    },
  },
};
</script>
