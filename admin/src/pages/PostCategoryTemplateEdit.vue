<template>
  <div class="edit-block">
    <div class="edit-block__form">
      <SFCEdit />
    </div>
    <div class="edit-block__view">
      <PostCategoryCard id="1" />
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
};
</script>
<style lang='scss' scoped>
.edit-block {
  display: flex;
  max-width: 1200px;
  margin: 10px auto;
  justify-content: center;
  gap: 10px;
  div {
    width: 400px;
  }
}
</style>