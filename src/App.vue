<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
@import "@/assets/styles/index.css";
@import "@/assets/styles/fonts.css";
</style>
