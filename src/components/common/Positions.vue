<template>
    <BaseCombobox :faCaretUp="faCaretUp" :faCaretDown="faCaretDown"  @setItemSelected="setItemSelected" :category="category" :itemSelected="itemSelected" :end="end" :header="header" :content="postions" ></BaseCombobox>
</template>

<script>
 import * as axios from "axios";
 import BaseCombobox from "../base/BaseCombobox.vue"
export default {
  props: [
       'positionId2',
       'end',
      'faCaretUp',
      'faCaretDown'
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
            header:'Tất cả vị trí',
        }
    },
    components: {
        BaseCombobox,
    }

}
</script>

<style>

</style>