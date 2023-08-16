<script setup>
import Logo from "./Logo.vue";
import AuthButton from "./AuthButton.vue";
import UserInfo from "./UserInfo.vue";
import NavigationLinks from "./NavigationLinks.vue";

import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const { isLoggedIn, user } = storeToRefs(userStore);
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <Logo />
      <NavigationLinks />
      <AuthButton v-if="!isLoggedIn" />
      <UserInfo v-else :user="user" />
    </div>
  </nav>
</template>
