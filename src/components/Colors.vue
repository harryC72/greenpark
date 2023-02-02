<script lang="ts">
export default {
  props: ["selectedColor"],

  mounted() {
    console.log("FROM COLORS", this.selectedColor);
  },
};
</script>
<template>
  <div class="color-container">
    <div
      class="color-box blue"
      :class="selectedColor === 'blue' && 'selected'"
    ></div>
    <div
      class="color-box green"
      :class="selectedColor === 'green' && 'selected'"
    ></div>
    <div
      class="color-box beige"
      :class="selectedColor === 'beige' && 'selected'"
    ></div>
    <div
      class="color-box white"
      :class="selectedColor === 'white' && 'selected'"
    ></div>
    <div
      class="color-box black"
      :class="selectedColor === 'black' && 'selected'"
    ></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
}
.color-box {
  width: 16px;
  height: 16px;
}
.blue {
  background-color: var(--blue);
}
.green {
  background-color: var(--green);
}
.beige {
  background-color: var(--beige);
}
.white {
  background-color: var(--white-box);
}

.black {
  background-color: var(--black);
}

.selected {
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  left: 0px;
  top: 0px;
  border: 1.5px solid var(--border);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01);
}
</style>
