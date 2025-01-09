<template>
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <!-- Check if items are available before rendering the list -->
      <div v-if="items.length === 0" class="text-center text-gray-500">
        <p>No results found for the applied filters.</p>
      </div>
      <div v-else>
        <div v-for="item in items" :key="item.id" class="flex flex-col md:flex-row rounded-lg bg-white shadow-md overflow-hidden my-8">
          <div class="md:flex-1 p-6">
            <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
            <p class="text-gray-600 mb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {{ item.location }}
              </span>
              <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700">
                {{ item.category }}
              </span>
            </p>
            <p class="text-gray-700 mb-4">{{ item.description }}</p>
          </div>
          <div class="md:w-1/3 h-48 md:h-auto relative">
            <img :src="getImageUrl(item.image)" :alt="item.name" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Store',
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      getImageUrl(imageName) {
        try {
          return new URL(`../../../assets/img/${imageName}`, import.meta.url).href;
        } catch (error) {
          console.error(`Error loading image: ${imageName}`, error);
          return new URL('../../../assets/img/placeholder.png', import.meta.url).href; // Provide a fallback image
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any specific styling for your store items here */
  </style>
  