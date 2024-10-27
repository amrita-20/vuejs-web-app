

<template>
  <NavBar />
  <div class="page-wrap">
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>