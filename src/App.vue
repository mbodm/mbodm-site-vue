<script setup>
import { lang } from './lang';
</script>

<template>
  <div class="layout">
    <header>
      <nav>
        <RouterLink to="/">{{ lang.entries.home }}</RouterLink>
        <RouterLink to="/about">{{ lang.entries.about }}</RouterLink>
        <RouterLink to="/contact">{{ lang.entries.contact }}</RouterLink>
      </nav>
      <div class="lang-switch">
        <button @click="lang.setLang('en')" :class="{ active: lang.code === 'en' }">EN</button>
        <button @click="lang.setLang('de')" :class="{ active: lang.code === 'de' }">DE</button>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>{{ lang.entries.footer }}</footer>
  </div>
</template>

<style scoped>
header {
  background: #eee;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: black;
}

nav a.router-link-exact-active {
  color: #0074d9;
}

.lang-switch button {
  margin-left: 5px;
  padding: 4px 6px;
  border: none;
  background: #ddd;
  cursor: pointer;
}

.lang-switch button.active {
  background: #0074d9;
  color: white;
}

main {
  padding: 20px;
}

footer {
  padding: 20px;
  text-align: center;
  color: #777;
  font-size: 0.9rem;
}
</style>
