<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const form = ref({
  email: "",
  password: "",
});

function handleSubmit() {
  console.log(form.value, "payload login");
}
</script>

<template>
  <div class="w-full p-5 mx-auto sm:max-w-md">
    <h2 class="mb-20 text-5xl font-bold text-center">Welcome Back</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="form.email"
          placeholder="Type your email"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="form.password"
          placeholder="Type your password"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div class="mt-6">
        <button
          type="submit"
          class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
        >
          Sign In
        </button>

        <RouterLink
          to="/register"
          class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
        >
          Create New Account
        </RouterLink>
      </div>
    </form>
  </div>
</template>
