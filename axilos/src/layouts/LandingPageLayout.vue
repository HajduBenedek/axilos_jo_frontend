<template>
    <NavBar/>
    <div class="bg-zinc-700">
        <Header/>
    </div>
</template>

<script>
  import NavBar from '@/components/layout/NavBar.vue';
  import Header from '@/components/layout/Header.vue';
  
  export default {
    name: 'LandingPageLayout',
    components: { NavBar, Header },
    props: {
    },
  };
</script>
  