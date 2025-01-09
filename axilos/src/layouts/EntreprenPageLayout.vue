<template>
  <NavBar />
  <div class="dark:bg-gray-100 dark:text-gray-800">
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <!-- Filter section -->
      <div class="md:w-1/4 mr-8">
        <FilterSection :onFilterChange="handleFilterChange" />
      </div>

      <!-- Store section displaying filtered items -->
      <div class="md:w-3/4">
        <Store :items="filteredItems" :title="title" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/layout/LandingPageComponents/NavBar.vue';
import Store from '@/components/layout/SearchPageComponents/Store.vue';
import FilterSection from '@/components/layout/SearchPageComponents/FilterSection.vue';
import { http } from '@/utils/http.mjs';

export default {
  name: 'EntreprenPageLayout',
  components: { NavBar, Store, FilterSection },
  data() {
    return {
      items: [], // Raw items data from API
      filteredItems: [], // Filtered items to be passed to Store component
      filter: { // The filter criteria
        category: '',
        location: ''
      },
      title: 'Keresési eredmények' // Title for the filtered results
    };
  },
  mounted() {
    // Fetch items when the component is mounted
    this.fetchItems();
  },
  methods: {
    // Fetch items from the API
    async fetchItems() {
      try {
        const response = await http.get('/'); // Replace with your actual API endpoint
        this.items = response.data.data; // Save raw data
        this.filteredItems = this.items; // Show all items initially
        console.log('Fetched items:', this.items); // Debugging line
      } catch (error) {
        console.error("Hiba történt a lekérés során:", error);
        this.title = 'Hiba történt az adatok betöltésekor'; // Error message if fetch fails
      }
    },
    
    // Handle filter change and apply the new filters
    handleFilterChange(newFilter) {
      console.log('Filter changed:', newFilter); // Debugging line
      this.filter = newFilter; // Update filter data
      this.applyFilters(); // Apply the new filters
    },
    
    // Filter the items based on selected category and location
    applyFilters() {
      console.log('Applying filters:', this.filter); // Debugging line
      this.filteredItems = this.items.filter(item => {
        const categoryMatch = this.filter.category === '' || item.category === this.filter.category;
        const locationMatch = this.filter.location === '' || item.location === this.filter.location;
        return categoryMatch && locationMatch; // Only show items that match both filters
      });

      // Update title based on filtered items
      if (this.filteredItems.length === 0) {
        this.title = 'Nincs találat'; // No results message
        console.log('No results found'); // Debugging line
      } else {
        this.title = 'Keresési eredmények'; // Default title
        console.log('Filtered items:', this.filteredItems); // Debugging line
      }
    }
  }
};
</script>
