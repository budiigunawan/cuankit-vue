<script setup>
import LoginForm from "./Login/LoginForm.vue";
import BrandList from "./Login/BrandList.vue";
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0"
      >
        <LoginForm />
        <BrandList />
      </div>
    </div>
  </div>
</template>
