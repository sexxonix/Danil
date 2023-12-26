<template>
    <div id="app">
      <Header />
      <router-view />
      <Footer />
    </div>
  </template>
  
  <script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    
  }
  *{
    margin: 0px;
    text-decoration: none;
    
  }
  </style>
  
  <!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  * {
    margin: 0;
    text-decoration: none;
  }
}
</style> -->