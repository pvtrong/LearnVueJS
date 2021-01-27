<template>
    <div class="m-combobox" >
        <div class="input" v-if="itemSelected[`${category}Id`] ==='' " >{{header}}</div>
        <div  class="input" v-else >{{getItemSelected().shift()[`${category}Name`]}}</div>
        
        
        <div :class="{reverse: isHide}" @click="showCombobox()" class="comboboxBtn fas fa-caret-down">
            <div></div>
        </div>
        <div  class="m-combobox-data" :style="end?  'top:-'+ content.length* 40 + 'px':'top:41px'" :class="{isHide: isHide}">
            <div @click="setItemSelected(item)"  :id="item[`${category}Id`]" v-for="item in content" :class="{itSelected: itSelect(item, itemSelected, category)}"  :key="item[`${category}Id`]" class="m-combobox-item">
                <div  class="checkmark2">
                    <div></div>
                </div>
                <div class="textCbx">{{item[`${category}Name`]}}</div>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  props: [
      'header',
      'content',
      'itemSelected',
      'end',
      'category',
  ],
  computed: {
        
  },
  methods:{
      itSelect(item){
          return item[`${this.category}Id`] === this.itemSelected[`${this.category}Id`];
      },
      showCombobox(){
          this.isHide = !this.isHide;
      },
      getItemSelected(){
          let temp = (this.content.filter(item=> item[`${this.category}Id`] === this.itemSelected[`${this.category}Id`]));
          return temp;
          
      },
      setItemSelected(item){
          this.showCombobox();
          let data = {id:  item[`${this.category}Id`]};
            this.$emit('setItemSelected', data);
      }
  },
  
    data() {
        return {
             isHide: true,
        }
    },
    
}
</script>

<style>

</style>