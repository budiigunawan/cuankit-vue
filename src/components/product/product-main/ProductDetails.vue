<script setup>
defineProps({
  description: String,
});
</script>

<template>
  <section class="" id="orders">
    <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
    <div class="text-gray-500">
      <p class="pb-4">
        {{ description }}
      </p>
      <!-- <p class="pb-4">
        Suitable for : <br />
        - Sport App <br />
        - Fitness & GYM App <br />
        - Workout App <br />
        - Trainer & Tracker App <br />
        - And many more <br />
      </p> -->
    </div>
  </section>
</template>
