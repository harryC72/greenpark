<script>
export default {
  props: [
    "action",
    "active",
    "amount",
    "id",
    "linked",
    "selectedColor",
    "type",
  ],

  mounted() {
    console.log(
      "FROM Product",
      this.action,
      this.active,
      this.amount,
      this.id,
      this.linked,
      this.selectedColor,
      this.type
    );
  },
};
</script>
<template>
  <div class="top-box">
    <div></div>
  </div>
</template>
<style scoped></style>
