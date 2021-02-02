<template>

<!--  Phạm Văn Trọng MF710 -->

  <div id="app">
    <TheHeader></TheHeader>
     <TheNavbar></TheNavbar>
    <EmployeeList></EmployeeList>
  </div>
  
</template>

<script>
import TheHeader from './components/useOnly/TheHeader.vue'
import TheNavbar from './components/useOnly/TheNavbar.vue'
import EmployeeList from './views/dictionary/employee/EmployeeList.vue'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  name: 'App',
  components: {
    TheHeader,
    TheNavbar,
    EmployeeList,
  }
}
</script>


<style>
 @import './assets/css/common/main.css';
</style>
