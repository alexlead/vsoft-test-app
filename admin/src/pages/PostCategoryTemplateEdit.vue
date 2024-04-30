<template>
  <div class="edit-block">
    <div class="edit-block__form">
      <SFCEdit @updater="updater"/>
    </div>
    <div class="edit-block__view">
      <PostCategoryCard id="1" :key="updateKey"/>
    </div>
  </div>
</template>

<script>
import PostCategoryCard from "../components/PostCategoryCard.vue";
import SFCEdit from "../components/SFCEdit.vue";

export default {
  components: {
    PostCategoryCard,
    SFCEdit,
  },
  data() {
    return{
      updateKey: 0
    }
  },
  methods: {
    updater: function () {
      this.updateKey++;
    }
  }
};
</script>
<style lang='scss' scoped>
.edit-block {
  display: flex;
  max-width: 1200px;
  margin: 10px auto;
  justify-content: center;
  gap: 10px;
  .edit-block {
    &__form{
      width: 70%;

    }
    &__view{

      width: 400px;
    }
  }
}
</style>