<template>
  <header class="border-b border-[#F6F7F9] bg-white">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="mr-8">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy Logo"
              class="h-8"
            />
          </div>

          <nav class="hidden md:block">
            <ul class="flex space-x-6 text-sm font-medium">
              <li>
                <a href="#" class="hover:text-[#8D68E0]">Explore</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center space-x-2">
          <div class="hidden md:flex flex-1 max-w-2xl mx-4">
            <div class="relative flex-1">
              <input
                type="text"
                placeholder="Search for anything"
                class="w-full border border-black rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#8D68E0]"
              />
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="absolute left-3 top-2.5 text-[#b6b6b6]"
              />
            </div>
          </div>
          <nav class="hidden md:block">
            <ul class="flex space-x-6 text-sm font-medium">
              <li>
                <a href="#" class="hover:text-[#8D68E0]">Udemy Business</a>
              </li>
              <li>
                <a href="#" class="hover:text-[#8D68E0]">Teach on Udemy</a>
              </li>
            </ul>
          </nav>

          <UButton variant="ghost" class="p-2 md:hidden">
            <UIcon name="i-heroicons-magnifying-glass" class="w-6 h-6" />
          </UButton>

          <UButton variant="ghost" class="hidden md:flex items-center p-2">
            <UIcon name="i-heroicons-shopping-cart" class="w-6 h-6" />
          </UButton>
          <UButton
            block
            variant="ghost"
            class="bg-white border border-[#7E00D5] w-max text-[#7E00D5]"
          >
            Log in
          </UButton>

          <UButton block variant="solid" class="text-white w-max bg-[#7E00D5]">
            Sign up
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
