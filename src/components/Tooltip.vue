<script lang="ts">
import TooltipIcon from "./icons/TooltipIcon.vue";
export default {
  components: {
    TooltipIcon,
  },
  props: ["text", "actionCall"],
};
</script>
<template>
  <div class="tooltip">
    <TooltipIcon />
    <span class="tooltip-content">
      <div>{{ text }}</div>
      <a
        class="link"
        target="_blank"
        href="https://www.linkedin.com/in/harald-carlsten-10a3b715/"
        ><div class="action-call">{{ actionCall }}</div></a
      >
    </span>
  </div>
</template>
<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip-content {
  font-size: 14px;
  line-height: 17px;
  visibility: hidden;
  width: 200px;
  background-color: var(--white-box);
  color: var(--black);
  text-align: center;
  padding: 24px 16px;
  position: absolute;
  z-index: 100;
  bottom: 100%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-content {
  visibility: visible;
  opacity: 1;
}

.action-call {
  padding-top: 12px;
  font-weight: 700;
  color: var(--green);
}

.link {
  text-decoration: none;
}
</style>
