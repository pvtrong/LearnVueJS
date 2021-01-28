<template>
  <div class="header">
        <div class="department-info">
            <Combobox :faCaretUp="true" :faCaretDown="false"  icon="up" @setItemSelected="setItemSelected" :end="office.end" :itemSelected="office.itemSelected" :category="office.category"  :header="office.header" :content="office.offices"></Combobox>

        </div>
        <div class="account-info">
            <div class="account-avatar"></div>
            <div class="account-name">Phạm Văn Trọng</div>
            <div class="account-option icon-option-default-16"></div>
        </div>
    </div>
</template>

<script>
 import Combobox from "./common/Combobox.vue"
export default {
    methods: {
      setItemSelected(data){
          this.office.itemSelected = {officeId: data.id};
          
      }
  },
    components:{
         Combobox,
    },
    data() {
        return {
            office:{
                offices:[
                    {officeId: 1, officeName: 'Nhà hàng Biển Đông'},
                    {officeId: 2, officeName: 'Nhà hàng Cầu Giấy'},
                    {officeId: 3, officeName: 'Nhà hàng Đội Cấn'},
                ],
                itemSelected: {officeId: 1},
                category: 'office',
                end: false,
                header:'Tất cả nhà hàng',
            },
        }
    },

}
</script>

<style scope>
.header {
    position: absolute;
    top: 0;
    left: 221px;
    height: 60px;
}

.header {
    display: flex;
    align-items: center;
    width: calc(100% - 221px);
    height: 60px;
    border-bottom: 1px solid #bbbbbb;
}

    .header .department-info {
        padding: 16px;
        font-size: 16px;
        min-width: 230px;
    }
            .header .account-info {
                position: absolute;
                right: 24px;
                display: flex;
                align-items: center;
            }

        .header .account-info .account-avatar {
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 50%;
            background-image: url('../assets/content/icon/avatar-default.png');
            background-size:contain;
        }

        .header .account-info .account-name {
            padding: 10px;
        }

        .header .account-info .account-option {
            height: 16px;
            cursor: pointer
        }


</style>