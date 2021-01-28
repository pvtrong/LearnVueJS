<template>
  <div id="app">
    <Header></Header>
     <Navbar></Navbar>
    <EmployeeList></EmployeeList>
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import EmployeeList from './components/Views/EmployeeList.vue'
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
    EmployeeList,
  }
}
</script>
    

<style>
 @import './assets/css/common/main.css';
</style>
