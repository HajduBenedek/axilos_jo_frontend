<template>
    <NavBar/>
    <div class="dark:bg-gray-100 dark:text-gray-800">
        <Header/>
        <Content/>
        <Footer/>
    </div>
</template>

<script>
  import NavBar from '@/components/layout/NavBar.vue';
  import Header from '@/components/layout/Header.vue';
  import Content from '@/components/layout/Content.vue';
  import Footer from '@/components/layout/Footer.vue';
  
  export default {
    name: 'LandingPageLayout',
    components: { NavBar, Header, Content, Footer },
    props: {
    },
  };
</script>
  