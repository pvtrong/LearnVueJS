<template>
  <div class="navbar">
        <div class="logo-site">
            <div class="logo-box">
                <div class="toggle-icon"></div>
                <div class="amis-logo"></div>
            </div>
        </div>
        <div class="navbar-content">
            <a class="nav-item">
                <div class="nav-item-icon nav-item-dashboard"></div>
                <div class="nav-item-text">Tổng quan</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-report"></div>
                <div class="nav-item-text">Báo cáo</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-dashboard"></div>
                <div class="nav-item-text">Mua hàng</div>
            </a>
            <a class="nav-item" href="employee.html">
                <div class="nav-item-icon nav-item-dic"></div>
                <div class="nav-item-text">Danh mục nhân viên</div>
            </a>
            <a class="nav-item" href="customer.html">
                <div class="nav-item-icon nav-item-dic"></div>
                <div class="nav-item-text">Danh mục khách hàng</div>
            </a>
            <a class="nav-item">
                <div class="nav-item-icon nav-item-setting"></div>
                <div class="nav-item-text">Thiết lập hệ thống</div>
            </a>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scope>

    .navbar {
    position: relative;
    float: left;
    width: 220px;
    height: 100vh;
    background-color: #ffffff;
    border-right: 1px solid #bbbbbb;
}

    .navbar .logo-site {
        display: flex;
        align-items:center;
        width: 100%;
        height: 60px;
    }
    .navbar .logo-box {
        display: flex;
        position: absolute;
        width: 100%;
        left: 24px;
        cursor:pointer;
    }

        /*Logo page*/
        .navbar .logo-box .toggle-icon {
            width: 30px;
            height: 30px;
            background-image: url('../assets/content/img/toggle.png');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        .navbar .logo-box .amis-logo {
            width: 100%;
            height: 30px;
            margin-left: 10px;
            /*background-image: url('/content/img/amis-logo.png');*/
            background-image: url('../assets/content/img/cukcuk-logo.png');
            background-position: 0 center;
            background-size: contain;
            background-repeat: no-repeat;
        }

    .navbar .navbar-content {
        width: 100%;
    }

        .navbar .navbar-content .nav-item{
            display:flex;
            padding-left:24px;
            height:44px;
            cursor:pointer;
            line-height:44px;
        }

        .navbar .navbar-content .nav-item:active{
            background-color: #019160;
        }

        .navbar .navbar-content .nav-item:focus{
            background-color: #019160;
        }

            .navbar .navbar-content .nav-item:hover {
                background-color: #e5e5e5;
                color: #000000;
                cursor: pointer;
            }

            .nav-item .nav-item-icon {
                width: 20px;
                height: 20px;
                align-self: center;
                margin-right: 10px;
                background-size: contain;
            }

/*Tổng quan*/
.nav-item-dashboard {
    background-image: url('../assets/content/icon/dashboard.png');
}

/*Báo cáo*/
.nav-item-report {
    background-image: url("../assets/content/icon/report.png");
}

/*Cài đặt hệ thống*/
.nav-item-setting {
    background-image: url("../assets/content/icon/setting.png");
}

/*Danh mục*/
.nav-item-dic {
    background-image: url("../assets/content/icon/dic-employee.png");
}


</style>