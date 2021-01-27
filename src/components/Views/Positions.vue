<template>
    <Combobox @setItemSelected="setItemSelected" :category="category" :itemSelected="itemSelected" :end="end" :header="header" :content="postions" ></Combobox>
</template>

<script>
 import * as axios from "axios";
 import Combobox from "../common/Combobox.vue"
export default {
  props: [
       'positionId2'
  ],
    async created () {
            const response  = await axios.get("https://localhost:44349/api/Positions/" );
            this.postions = response.data;
    },
    methods: {
        setItemSelected(data){
            this.$emit('setItemSelected', data);
        }
    },
    computed:{
        itemSelected: function(){
            return {positionId: this.positionId2};
        }
    },
    
    
    data() {
        return {
            postions:[

            ],
            category: 'position',
            end: false,
            header:'Tất cả vị trí',
        }
    },
    components: {
        Combobox,
    }

}
</script>

<style>

</style>