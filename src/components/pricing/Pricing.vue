<script setup>
import Plans from "./Plans.vue";
import Benefits from "./Benefits.vue";
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto">
      <div class="flex flex-col items-center w-full sm:justify-center sm:pt-0">
        <!-- TITLE -->
        <div class="w-full p-5 mx-auto mt-10 md:max-w-7xl">
          <h2 class="mb-4 text-5xl font-bold text-center">
            <span class="block lg:mb-2">Friendly Pricing,</span>
            <span class="block">High Quality Design</span>
          </h2>
          <p class="mb-5 text-lg text-center text-gray-500">
            Working faster and better than before
          </p>
        </div>

        <!-- PLANS -->
        <Plans />

        <!-- BENEFIT LIST -->
        <Benefits />
      </div>
    </div>
  </div>
</template>
