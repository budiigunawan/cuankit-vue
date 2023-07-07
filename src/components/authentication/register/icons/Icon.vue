<script setup>
import StackIcon from "./StackIcon.vue";
import MedalIcon from "./MedalIcon.vue";
import BookIcon from "./BookIcon.vue";

defineProps({
  icon: String,
});
</script>

<template>
  <StackIcon v-if="icon === 'stack'" />
  <MedalIcon v-else-if="icon === 'medal'" />
  <BookIcon v-else />
</template>
