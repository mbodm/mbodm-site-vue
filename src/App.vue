<script setup>
import { useRoute } from 'vue-router';
import { lang } from '@/lang/state';
const route = useRoute();
</script>

<template>
  <div class="layout debug">
    <header>
      <nav>
        <template v-if="route.path === '/'">
          <a href="https://github.com/mbodm">GitHub</a>
          <RouterLink to="/contact">{{ lang.entries.contactLabel }}</RouterLink>
          <RouterLink to="/about">{{ lang.entries.aboutLabel }}</RouterLink>
        </template>
        <RouterLink v-else to="/">{{ lang.entries.homeLabel }}</RouterLink>
      </nav>
      <aside>
        <button @click="lang.setLang('en')" :class="{ active: lang.code === 'en' }">EN</button>
        <button @click="lang.setLang('de')" :class="{ active: lang.code === 'de' }">DE</button>
      </aside>
    </header>
    <main>
      <RouterView />
    </main>
    <footer v-if="route.path === '/'">
      {{ lang.entries.footerMessage }}
    </footer>
  </div>
</template>

<style scoped>
div.layout {
  /* reason for next 2 lines -> content from "top to bottom" -> header - main (remaining space) - footer */
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
}

div.layout>header,
div.layout>main,
div.layout>footer {
  /* reason for next line -> cause Vue use scoped styles the sections not fill the app container's width */
  width: 100%;
}

div.layout>header {
  /* reason for next 3 lines -> content from "left to right" -> nav - remaining space - aside */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: small;
  /* width: 100%; */
  background-color: royalblue;
  ;
}

div.layout>main {
  /* reason for next line -> fill remaining space inside layout container ("top to bottom") */
  flex: 1;
  width: 100%;
}

div.layout>footer {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: small;
  color: var(--separator-color);
}

div.layout>header>nav,
div.layout>header>aside {
  padding: 10px;
}

div.layout>header>nav>img,
div.layout>header>aside>img {
  margin-right: 10px;
  /* reason for next line -> baseline differs for <img> and <a> and <button> */
  vertical-align: middle;
}

div.layout>header>nav>a,
div.layout>header>aside>button {
  color: var(--primary-color);
  /* reason for next line -> baseline differs for <img> and <a> and <button> */
  vertical-align: middle;
}

div.layout>header>nav>a {
  text-decoration: none;
}

div.layout>header>aside>button {
  /* reason for next 5 lines -> reset default button style */
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  font: inherit;
  /* reason for next line -> apply the <a> cursor style to <button> */
  cursor: pointer;
}

div.layout>header>nav>a+a,
div.layout>header>aside>button+button {
  /* reason for this code block -> create separator (but only between of 2 header elements) */
  border-left: 2px solid var(--separator-color);
  margin-left: 10px;
  padding-left: 10px;
}

/* debug colors */

.layout.debug {
  background-color: yellow;
}

.layout.debug>header {
  background-color: lightgreen;
}

.layout.debug>main {
  background-color: lightblue;
}

.layout.debug>footer {
  background-color: lightyellow;
}

.layout.debug>header>nav,
.layout.debug>header>aside {
  background-color: red;
}

.layout.debug>header>nav>img,
.layout.debug>header>aside>img {
  background-color: green;
}

.layout.debug>header>nav>a,
.layout.debug>header>aside>button {
  background-color: blue;
}

.layout.debug>header>nav>a+a,
.layout.debug>header>aside>button+button {
  border-left: 2px solid yellow;
}
</style>
