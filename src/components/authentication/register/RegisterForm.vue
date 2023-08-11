<script setup>
import { ref, inject } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../../../stores/auth";
import { useUserStore } from "../../../stores/user";

const api = inject("$api");
const router = useRouter();

const authStore = useAuthStore();
const userStore = useUserStore();

const { setAuthData } = authStore;
const { fetchUser } = userStore;

const form = ref({
  name: "",
  email: "",
  password: "",
});

function handleSubmit() {
  const { name, email, password } = form.value;

  api.post(
    "register",
    {
      name,
      email,
      password,
      title: "developer",
    },
    async (resp) => {
      const token = resp.data.data.access_token;
      const tokenType = resp.data.data.token_type;

      if (token && tokenType) {
        setAuthData(tokenType, token);
        const isUserFetched = await fetchUser(tokenType, token);
        if (isUserFetched) router.push({ name: "home" });
      }
    }
  );
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block mb-1" for="name">Name</label>
        <input
          placeholder="Type your full name"
          id="name"
          type="text"
          name="name"
          v-model="form.name"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email Address</label>
        <input
          placeholder="Type your email"
          id="email"
          type="email"
          name="email"
          v-model="form.email"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input
          placeholder="Type your password"
          id="password"
          type="password"
          name="password"
          v-model="form.password"
          class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div class="mt-6">
        <button
          type="submit"
          class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
        >
          Continue Sign Up
        </button>
        <RouterLink
          to="/login"
          class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
        >
          Sign In
        </RouterLink>
      </div>
    </form>
  </div>
</template>
