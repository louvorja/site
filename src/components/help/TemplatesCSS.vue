<template>
  <div class="row" v-for="(item, index) in list" :key="index">
    <div>
      <LyricLayout :css="item.style" />
    </div>
    <div class="my-3">
      <a
        v-if="item.font"
        :href="'/fonts/' + item.font"
        class="site-btn p-2 px-5"
      >
        {{ $t("help.download_font") }}
      </a>
      <code>
        <pre class="m-3">{{ item.style }}</pre>
      </code>
    </div>
    <hr />
  </div>
</template>

<script>
import LyricLayout from "../LyricLayout.vue";

export default {
  name: "TemplatesCSSComponent",
  components: { LyricLayout },
  computed: {
    list() {
      return [
        {
          font: "BebasNeue-Regular.ttf",
          style: `*{
    font-size:75px;
    font-family:"Bebas Neue Regular"; 
    letter-spacing: 0.03em;
    text-shadow: black 0.1em 0.1em 0.3em;
}
.quadro{
    background-color:rgba(0, 0, 0, 0);
}
table td{
    vertical-align:bottom !important;
}`,
        },
        {
          style: `
*{
    font-size:30px;
    font-family:"Open Sans", Verdana, Arial, Helvetica, sans-serif; 
    letter-spacing: 0.03em;
    text-shadow: black 0.1em 0.1em 0.3em;
}
.quadro{
    background-image: linear-gradient(to right, #751ab6c2, #247980b6, #899207b7, #69bfb6b9,#7f1e928a );
    border-radius: 5%;
    padding:10px 40px;
    color:#FFFFFF;
    font-weight:bold;
    transition: opacity 600ms, visibility 600ms;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}`,
        },
      ];
    },
  },
};
</script>
