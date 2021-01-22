<template>
  <div class="header">
        <div class="department-info">
            <select>
                <option>Nhà hàng Biển Đông</option>
                <option>Nhà hàng Hải Dương</option>
                <option>Nhà hàng Đội Cấn</option>
                <option>Nhà hàng Cầu Giấy</option>
            </select>

        </div>
        <div class="account-info">
            <div class="account-avatar"></div>
            <div class="account-name">Phạm Văn Trọng</div>
            <div class="account-option icon-option-default-16"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scope>
.header {
    position: relative;
    display: flex;
    align-items: center;
    width: calc(100% - 221px);
    height: 60px;
    border-bottom: 1px solid #bbbbbb;
}

    .header .department-info {
        padding: 16px;
        font-size: 16px;
        
    }

        .header .department-info select {
            height: 40px;
            min-width: 20px;
            border: none;
            outline: none;
            cursor: pointer;
            font-weight: bold;
            font-size: 15px;
        }

            .header .department-info option{
                cursor: pointer;
                
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