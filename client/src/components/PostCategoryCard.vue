<template>
  <div>
    <v-runtime-template
      :template="template"
      :style="style"
    ></v-runtime-template>
    <div v-html="style"></div>
  </div>
</template>

<script >
import VRuntimeTemplate from "vue3-runtime-template";

export default {
  components: {
    VRuntimeTemplate,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      id: this.id,
      title: "",
      description: "",
      imageSrc: "",
      template: `
          <div class="card">
            <div class="card__header">
              <img alt="Post Card Image" :src="imageSrc" />
            </div>
            <div class="card__body">
              <h2 class="title">{{title}}</h2>
              <p class="description">{{description}}</p>
              <div class="button"><button>Button</button></div>
            </div>
          </div>
`,
      style: `
<style>
.card{
    width: 250px;
    padding: 10px;
    border: 1px solid #164477;
    border-radius: 10px;
}
.card__header img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.card__body .title {
    text-transform: capitalize;
    text-align: center;
}
.card__body .description {
    text-align: justify;
}

.card__body .button button {
    color: white;
    background: #164477;
}
</style>
`,
    };
  },
  methods: {
    getSamplePost: async function () {
      try {
        const res = await fetch("/api/get-post/" + this.id, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        this.title = data.title;
        this.description = data.description;
        this.imageSrc = data.imageSrc;
      } catch (error) {
        console.log(error);
      }
    },

    getOtherTemplate: async function () {
      try {
        const res = await fetch("/api/vue-sfc", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        if (data.template) {
          this.template = data.template;
        }
        if (data.style) {
          this.style = "<style>" + data.style + "</style>";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getOtherTemplate();
    this.getSamplePost();
  },
};
</script>

<style  lang='scss' >
</style>