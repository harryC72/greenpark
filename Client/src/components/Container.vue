<script setup lang="ts"></script>
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style>
.container {
  width: 851px;
  padding: 36px 36px 0;
  background: var(--white);
  box-shadow: 0px 42px 76px rgba(0, 0, 0, 0.05),
    0px 27.2222px 44.5093px rgba(0, 0, 0, 0.037963),
    0px 16.1778px 24.2074px rgba(0, 0, 0, 0.0303704),
    0px 8.4px 12.35px rgba(0, 0, 0, 0.025),
    0px 3.42222px 6.19259px rgba(0, 0, 0, 0.0196296),
    0px 0.777778px 2.99074px rgba(0, 0, 0, 0.012037);
  border-radius: 8px;
}
@media only screen and (max-width: 600px) {
  .container {
    width: 331px;
  }
}
</style>
