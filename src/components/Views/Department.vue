<template>
    <Combobox  v-model="itemSelected"  @setItemSelected="setItemSelected" :itemSelected="itemSelected" :category="category" :end="false" :header="header" v-bind:content="departments" ></Combobox>
</template>

<script>
 import * as axios from "axios";
 import Combobox from "../common/Combobox.vue"
export default {
  props: [
       'departmentId2'
  ],

    async created () {
          const response  = await axios.get("https://localhost:44349/api/Departments/" );
          this.departments = response.data;
            
    },
    mounted() {
    },
    methods: {
        setItemSelected(data){
            this.$emit('setItemSelected', data);
        },
        
    },
    computed:{
        itemSelected: function(){
            return {departmentId: this.departmentId2};
        }
    },
    
  
  data() {
    return {
        departments:[

        ],
        category: 'department',
        end: false,
        header:'Tất cả phòng ban',
        }
    },
    components: {
        Combobox,
    }

}
</script>

<style>

</style>