<script setup>
import { ref } from "vue";
import PlanCard from "./plans/PlanCard.vue";

const plans = ref([
  {
    price: 2000,
    title: "Basic Plan",
    subTitle: "Suitable for new team",
    features: [
      "Customizable layers",
      "Official documentation",
      "SVG icons",
      "SVG illustrations",
      "Pre-built design screen",
    ],
  },
  {
    price: 9000,
    title: "Gold Plan",
    subTitle: "Suitable for big company",
    features: [
      "Customizable layers",
      "Official documentation",
      "SVG icons",
      "SVG illustrations",
      "Pre-built design screen",
      "Coded template",
      "Support 24/7",
      "Private designer group",
      "Unlock cloning app",
    ],
  },
]);
</script>

<template>
  <div class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <PlanCard v-for="(plan, index) in plans" :key="index" :plan="plan" />
    </div>
  </div>
</template>
