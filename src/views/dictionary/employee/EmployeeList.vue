<template>
    <div class="content">
        <div class="header-content">
            <div class="title">Danh sách nhân viên</div>
            <div class="content-feature">
                <button @click='btnAddOnClick   ' id="btnAdd" class="m-btn m-btnIcon m-btn-default">
                    <div class="m-btn-icon icon-add"></div>
                    <div class="btn-text">Thêm nhân viên</div>
                </button>
                <EmployeeListDetail 
                    @closePopup="closePopup" 
                    :isHide="isHideParent"
                    :employee="this.dialog.employee"
                ></EmployeeListDetail>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input  
                    v-model="filter.keyword"
                    @change="changeInput()" 
                    id="txtSearchEmployee" 
                    class="icon-search input-search" 
                    type="text"
                    placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" 
                />
                <Postions 
                    :end="false" 
                    :faCaretUp="true" 
                    :faCaretDown="false"  
                    :positionId2="this.filter.positionId"   
                    @setItemSelected="setPositionId"
                ></Postions>
                <Departments  
                    :end="false" 
                    :faCaretUp="true" 
                    :faCaretDown="false"   
                    :departmentId2="this.filter.departmentId" 
                    @setItemSelected="setDepartmentId"
                ></Departments>
            </div>
            <div class="filter-right">

                <button id="btnDelete" class="m-second-button m-btn-delete"></button>
                <button @click="btnRefreshClick" id="btnRefresh" class="m-second-button m-btn-refresh">
                </button>
            </div>
        </div>
        <div
            class="grid grid-employee el-table el-table--fit el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition">
            <table id="tbListData" cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                style="min-width: 100%;">
                <thead >
                    <tr class="el-table__row">
                        <th colspan="1" rowspan="1" class="el-table_30_column_114 is-leaf" fieldName="">
                            <div class="cell">
                                <label class="input-container">
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_114 is-leaf" fieldName="EmployeeCode">
                            <div class="cell">Mã nhân viên</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_115 is-leaf" fieldName="FullName">
                            <div class="cell">Họ và tên</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="GenderName">
                            <div class="cell">Giới tính</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="DateOfBirth"
                            formatType="ddmmyyyy">
                            <div class="cell">Ngày sinh</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="PhoneNumber">
                            <div class="cell">Điện thoại</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="Email">
                            <div class="cell">Email</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="PositionName">
                            <div class="cell">Chức vụ</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="DepartmentName">
                            <div class="cell">Phòng ban</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="Salary"
                            formatType="Money">
                            <div class="cell">Mức lương cơ bản</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_30_column_116 is-leaf" fieldName="WorkStatusName">
                            <div class="cell">Tình trạng công việc</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="el-table__row"
                        v-for="employee in employees"
                        :key="employee.EmployeeId"
                        @dblclick="rowOnClick(employee)"
                    >
                        <td  style="width: 30px;">
                            <div class="cell">
                                
                                <label class="input-container">
                                    <input type="checkbox" :value="employee.employeeId">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.employeeCode !==null ? employee.employeeCode : '' }}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.fullName !==null ? employee.fullName : ''}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.gender !==null  ? formatGender(employee.gender) : 'Khác'}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.dateOfBirth !==null ?  formatDate(employee.dateOfBirth) : '' }}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.phoneNumber !==null ?  employee.phoneNumber : ''}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.email !==null ? employee.email : ''}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.positionName !== null ? employee.positionName : ''}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.departmentName !== null ? employee.departmentName : ''}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ employee.salary !== null ? formatCurrency(employee.salary) : ''}}</div>
                        </td>
                        <td>
                        <div class="cell">{{ (employee.status !== null) ? formatStatus(employee.status) : ''}}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="paging-bar">
            <div class="paging-record-info">
                Hiển thị <b></b> nhân viên
            </div>
            <div class="paging-option">
                <div @click="firstPage()" class="btn-select-page m-btn-firstpage"></div>
                <div @click="prevPage()" class="btn-select-page m-btn-prev-page"></div>
                <div  class="m-btn-list-page">
                    <button v-for="index in 4" :key="index" :id="'page' + Math.ceil(parseInt((offset + getLimit * (index)) / getLimit ))"  @click="changePage(Math.ceil(parseInt((offset + getLimit * (index )) / getLimit )))"  class="btn-pagenumber"> {{Math.ceil(parseInt((offset + getLimit * (index )) / getLimit))}}</button>
                </div>
                <div @click="nextPage()" class="btn-select-page m-btn-next-page"></div>
                <div @click="lastPage()" class="btn-select-page m-btn-lastpage"></div>
            </div>
            <div class="paging-record-option">
                <Combobox 
                    :faCaretUp="false" 
                    :faCaretDown="true"  
                    v-model="setItemSelected" 
                    @setItemSelected="setItemSelected" 
                    :end="pagi.end" 
                    :itemSelected="pagi.itemSelected" 
                    :category="pagi.category"  
                    :header="pagi.header" 
                    :content="pagi.pagis"
                >
                </Combobox>
            </div>
        </div>
    </div>
</template>

<script>




import * as axios from "axios";
import Combobox from "../../../components/base/BaseCombobox.vue"
import Departments from "../../../components/common/Department.vue" ;
import Postions from "../../../components/common/Positions.vue" ;
import EmployeeListDetail from "./EmployeeListDetail.vue";
export default {
    data() {
        return {
            /// * bộ dữ liệu để filter
            filter:{
                keyword: '',
                departmentId: '',
                positionId: ''
            },

            
            isHideParent: true, /// * trạng thái dialog
            offset: 0, /// * offset trang

            /// * Dữ liệu nhân viên
            employees:[
                {totalEmployees : 1},
            ],

            /// * Dữ liệu phân trang
            pagi:{
                pagis:[
                {pagiId: 1, pagiName: '10 nhân viên/trang', value: 10},
                 {pagiId: 2, pagiName: '20 nhân viên/trang', value: 20},
                  {pagiId: 3, pagiName: '50 nhân viên/trang', value: 50},
                ],
                itemSelected: {pagiId: 1},
                category: 'pagi',
                end: true,
                header:'Số nhân viên/trang',
            },

            // Dữ liệu của dialog
            dialog: {
                mode: "add",
                employee: {
                    positionId: '',
                    departmentId: '',
                    status: ''
                }
            }
            
        }
    },

    /// * Cập nhật lại dữ liệu nhân viên trên trang khi tìm kiếm.
     updated() {
        
    },

    async created () {
            const response = await axios.get("https://localhost:44349/api/Employees/search?keyword=" + this.filter.keyword + "&departmentId=" + this.filter.departmentId + "&positionId=" + this.filter.positionId + "&limitParam=" +  this.getLimit + "&offsetParam=" + this.offset);    
            this.employees = response.data;
            this.paging();
        
       
    },

    props: {

    },

    name: "Employees",

    components: {
        EmployeeListDetail,
        Combobox,
        Departments,
        Postions,
    },


    methods: {
        convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
        },

        ///Hàm đúp vào đê hiện dialog sửa
        async rowOnClick(employee){
            this.dialog.employee = await employee;
            this.dialog.employee.dateOfIN = this.convert(this.dialog.employee.dateOfIN);
            this.dialog.employee.dateOfBirth = this.convert(this.dialog.employee.dateOfBirth);
            this.dialog.employee.dateOfBeginWork = this.convert(this.dialog.employee.dateOfBeginWork);
            this.dialog.mode = "edit"
            this.isHideParent = false;
            
        },

        /// *Hàm xử lý sự kiện khi click vào button refresh
        btnRefreshClick(){
            this.filter.keyword = '';
            this.filter.departmentId = '';
            this.filter.positionId = ''
            this.firstPage();
            this.render();
        },

        // * truyền departmentId để search từ component combobox
        setDepartmentId(data){
            this.filter.departmentId = data.id;
            this.render();
        },

        // * hàm truyền positionId để filter từ component combobox
        setPositionId(data){
            this.filter.positionId = data.id;
            this.render();
        },

        // * Hàm để lấy số nhân viên/1 trang từ component combobox
        setItemSelected(data){
          this.pagi.itemSelected = {pagiId: data.id};
          this.render();
        },
     
        // * Hàm fomart lại status
        formatStatus(status) {
            if (status === 1) {
                return "Đang làm việc";
            }
            if (status === 0) return "Đang nghỉ việc";
            return "Đang thử việc";
        },

        //* Hàm format lại giới tính
        formatGender(gender) {
            if (gender === 1) {
                return "Nữ";
            }
            if (gender === 0) return "Nam";
            return "Khác";
        },

        // * Hàm format lại tiền tệ
        formatCurrency(salary) {
            if (!salary) return "";
            return salary.split(/(?=(?:\d{3})+(?:\.|$))/g).join(".");
        },

        // * Hàm format lại ngày
        formatDate(date) {
            var date2 = new Date(date);
            var year = date2.getFullYear();
            if (year < 1000) return "";
            // lấy ngày:
            var day = date2.getDate();
            if (day < 10) day = "0" + day;

            // lấy tháng:
            var month = date2.getMonth() + 1;
            if (month < 10) month = "0" + month;
            // lấy năm:

            return day + '/' + month + '/' + year;
        },

        // * Hàm xử lý sự kiện thêm
        async btnAddOnClick(){
            this.dialog.employee = {
                positionId: '',
                departmentId: '',
                status: ''
            };
            this.dialog.employee.employeeCode = await this.getNextCode(); 
            this.isHideParent = false;
            
            
        },
        /// * Hàm lấy mã số nhân viên lớn nhất
        async getNextCode(){
            let response =  await axios.get("https://localhost:44349/api/Employees/EmployeeCodeMax");   
            console.log(response.data.employeeCode);
            return response.data.employeeCode; 
        },

        //* Hàm mở dialog detail
        closePopup(value){
            this.isHideParent = value;
        },

        /*   
        * ! Phân trang
        *
        */ 
        paging(){
            if (this.offset + this.getLimit < this.getLength)
                var str = `${this.getOffsetNew}-${this.offset + this.getLimit}/${this.getLength}`;
            else str = `${this.getOffsetNew}-${this.getLength}/${this.getLength}`;
            document.getElementsByClassName("paging-record-info")[0].children[0].innerHTML = str;
            this.numberPageSelect(parseInt((this.offset) / this.getLimit + 1));
        },

        /// * Hàm xử lý sự kiện trở về trang đầu
        firstPage() {
            this.offset = 0;
            this.render();
        },

        /// Hàm xử lý sự kiện trở về trang cuối
        lastPage() {
            if (parseInt(this.getLength / this.getLimit) === this.getLength / this.getLimit) {
                this.offset = this.getLength - this.getLimit;
            }
            else{
                 this.offset = this.getLength  - (this.getLength - (parseInt(this.getLength / this.getLimit, 10) * this.getLimit));
                 console.log("offset" + this.offset);
            }
            this.render();
        },

        /// * Hàm xử lý sự kiện next trang
        nextPage() {
            if ( this.offset + this.getLimit < this.getLength)  this.offset =  this.offset + this.getLimit;
            this.render();
        },

        /// * Hàm xử lý sự kiện back trang
        prevPage() {
            if ( this.offset > this.getLimit)  this.offset =  this.offset - this.getLimit;
            else  this.offset = 0;
            this.render();
        },

        /// * Hàm xử lý sự kiện khi click vào trang số number
        changePage(number) {
            
            this.offset = (number - 1) * this.getLimit;
            this.render();
        },

        /// * Hàm tô xanh trang hiện tại
        numberPageSelect(a) {
            let elm = document.getElementById("page" + a);
            var parent = document.getElementsByClassName("m-btn-list-page")[0].children;
            parent.forEach(element => {
                element.classList.remove("btn-pagenumber-selected");
                
            });
            elm.classList.add("btn-pagenumber-selected");
        },
        /// * Phân trang


        /// * Hàm render lại dữ liệu khi click sự kiện
        async render(){
            
            console.log("render");
            const response = await axios.get("https://localhost:44349/api/Employees/search?keyword=" + this.filter.keyword + "&departmentId=" + this.filter.departmentId + "&positionId=" + this.filter.positionId + "&limitParam=" +  this.getLimit + "&offsetParam=" + this.offset);    
            this.employees = response.data;
            this.paging()
        },

        /// * Hàm render lại dữ liệu khi ấn search
        changeInput(){
            this.render();
        }
        
        
    },
    
    
    computed: {

        /// * Hàm lấy độ dài dữ liệu
        getLength: function(){
            return this.employees[0].totalEmployees;
        },

        /// * Hàm lấy số nhân viên/trang
        getLimit: function (){
            return this.pagi.pagis.filter(item => item.pagiId === this.pagi.itemSelected.pagiId)[0].value;
        
        },

        /// * Hàm lấy offset mới của trang
        getOffsetNew: function (){
            return this.offset + 1;
        }
    },
}


</script>

<style scope>

/*Page tile*/
    .content .header-content {
        padding: 8px 0 16px 0;
        display: flex;
        align-items: center;
    }

        .content .header-content .title {
            font-size: 20px;
            font-weight: bold;
        }

        .content .header-content .content-feature{
            position: absolute;
            right: 16px;
        }


/* Paging */
.content .paging-bar{
    height: 56px;
}




</style>