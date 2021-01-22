<template>
  <div id="app">
    <Header></Header>
     <Navbar></Navbar>
    <Content></Content>
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  name: 'App',
  components: {
    Header,
    Navbar,
    Content,
  }
}
</script>


<style>
 @import './assets/css/common/main.css';
</style>
