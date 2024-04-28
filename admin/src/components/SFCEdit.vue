<template>
  <div class="form">
    <form @submit.prevent="saveFormValues">
      <div>
        <label>
          <h3>Template</h3>
          <p>Tags:</p>
          <p><u>title</u> - post title</p>
          <p><u>description</u> - post description</p>
          <p><u>imageSrc</u> - url to image</p>
          <textarea name="template" v-model="template"></textarea>
        </label>
      </div>
      <div>
        <label>
          <h3>Style</h3>
          <textarea name="style" v-model="style"></textarea>
        </label>
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
      <div class="server-response">
        {{ resp }}
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      template: "",
      style: "",
      resp: "",
    };
  },
  methods: {
    saveFormValues: async function () {
      const res = await fetch("/api/vue-sfc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: this.template,
          style: this.style,
        }),
      });
      const data = await res.json();
      this.resp = data.message;
    },

    getFormValues: async function () {
      try {
        const res = await fetch("/api/vue-sfc", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        this.template = data.template;
        this.style = data.style;
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getFormValues();
  },
};
</script>
<style lang='scss' scoped>
.form {
  text-align: left;
  textarea {
    width: 90%;
    height: 180px;
    resize: none;
    border-radius: 10px;
    padding: 10px;
  }
}
</style>