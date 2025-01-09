<template>
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4">Szűrők</h2>
      <div class="space-y-4">
        <!-- Kategória kiválasztása -->
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700 mb-1">
            Kategória
          </label>
          <select
            id="category"
            v-model="category"
            class="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Minden Kategória</option>
            <option value="Masszázs">Masszázs</option>
            <option value="Személyiedző">Személyiedző</option>
            <option value="Körmös">Körmös</option>
            <option value="Kozmetikus">Kozmetikus</option>
            <option value="Sminkes">Sminkes</option>
            <option value="Fodrászat">Fodrászat</option>
          </select>
        </div>
  
        <!-- Szűrők alkalmazása gomb -->
        <button
          @click="handleFilterChange"
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Szűrők Alkalmazása
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterSection',
    props: {
      onFilterChange: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        category: '',
        location: ''
      };
    },
    methods: {
      handleFilterChange() {
        const newFilter = {
          category: this.category,
          location: this.location
        };
        this.onFilterChange(newFilter); // Emit filter changes to parent
      }
    }
  };
  </script>
  