<script setup>
import { lang } from '@/lang/state';
import avatar from '@/assets/avatar.jpg';
</script>

<template>
  <div class="container">
    <img :src="avatar" alt="avatar-image">
    <p>{{ lang.entries.aboutMessage }}</p>
  </div>
</template>

<style>
div.container {
  margin-top: 15px;
  margin-left: 15px;
}
</style>
