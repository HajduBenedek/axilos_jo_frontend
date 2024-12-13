<template>
    <div class="bg-zinc-800 min-h-screen">
      <NavBar />
      <main class="container mx-auto py-8">
        <header>
          <h1 class="text-center text-white text-2xl font-bold">{{ title }}</h1>
        </header>
        <section class="mt-4">
          <slot></slot>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/layout/NavBar.vue';
  
  export default {
    name: 'BaseLayout',
    components: { NavBar },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  