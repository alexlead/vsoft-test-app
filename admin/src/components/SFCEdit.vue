<template>
  <div class="form">
    <form @submit.prevent="saveFormValues">
      <div>
        <label>
          <h3>Template</h3>
          <p>Tags:</p>
          <p><span class="tag">id</span> <span class="tag">title</span> <span class="tag">description</span> <span class="tag">imageSrc</span></p>
          <CodeEditor  :languages="[['html']]" theme="vs" v-model="template" key="template"></CodeEditor>
        </label>
      </div>
      <div>
        <label>
          <h3>Style</h3>
          <CodeEditor  :languages="[['css']]" theme="vs" v-model="style" key="style"></CodeEditor>
        </label>
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
      <div :class="{'server-response': true, 'error': err}">
        {{ resp }}
      </div>
    </form>
  </div>
</template>
<script>
import hljs from 'highlight.js';
import CodeEditor from "simple-code-editor";
export default {
  components: {
    CodeEditor,
  },
  data() {
    return {
      template: "",
      style: "",
      err: false,
      resp: "",
    };
  },
  methods: {
    saveFormValues: async function () {
      try {
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
      this.err = false;
      this.$emit('updater', true );
    } catch (error) {
        console.log(error);
      }
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
.tag{
  display: inline-block;
  padding: 5px 10px;
  margin: 2px 3px;
  border: 1px solid green;
  border-radius: 5px;
}
.form {
  text-align: left;
  .code-editor {
    border: 1px solid black;
    border-radius: 10px;
  }
  input[type="submit"] {
    margin: 20px 0;
    font-size: 15px;
    border: none;
    border-radius: 10px ;
    background: green;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
  }
}
.server-response{
  color: green;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  &.error{
    color: red;
  }
}
</style>