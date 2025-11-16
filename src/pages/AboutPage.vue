<script setup>
import { lang } from '@/lang/state';
</script>

<template>
  <div class="container">
    <!-- <img src={avatar} alt="avatar-image" /> -->
    <p>{{ lang.entries.aboutMessage }}</p>
  </div>
</template>

<style>
.container {
  height: 100%;
  margin-top: 15px;
  margin-left: 15px;
}
</style>
