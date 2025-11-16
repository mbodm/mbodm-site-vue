<script setup>
import { lang } from '@/lang/state';
</script>

<template>
  <div class="container">
    <p>{{ lang.entries.contactMessage }}</p>
    <a href="mailto:marcel.beck@mbodm.com">marcel.beck@mbodm.com</a>

  </div>
</template>

<style>
div.container {
  /* fill the layout's main container (height AND width cause Vue use scoped styles) */
  /* min-height: 100%;
  width: 100%; */
  /* this container is a flexbox container which centers its own content horizontally and vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

div.container>a {
  text-decoration: none;
  color: var(--primary-color);
}
</style>
