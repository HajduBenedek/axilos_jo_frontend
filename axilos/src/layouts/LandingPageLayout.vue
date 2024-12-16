<template>
    <NavBar/>
    <div class="dark:bg-gray-100 dark:text-gray-800">
        <Header/>
        <Content/>
        <ContentList/>
        <ContentIMG/>
        <CTA/>
        <Footer/>
    </div>
</template>

<script>
  import NavBar from '@/components/layout/LandingPageComponents/NavBar.vue';
  import Header from '@/components/layout/LandingPageComponents/Header.vue';
  import Content from '@/components/layout/LandingPageComponents/Content.vue';
  import Footer from '@/components/layout/LandingPageComponents/Footer.vue';
  import ContentList from '@/components/layout/LandingPageComponents/ContentList.vue';
  import ContentIMG from '@/components/layout/LandingPageComponents/ContentImg.vue';
  import CTA from '@/components/layout/LandingPageComponents/CTA.vue';
  
  export default {
    name: 'LandingPageLayout',
    components: { NavBar, Header, Content, Footer, ContentList, ContentIMG, CTA },
    props: {
    },
  };
</script>
  