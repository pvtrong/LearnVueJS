<template>
    <div class="content">
        <div class="header-content">
            <div class="title">Danh sách nhân viên</div>
            <div class="content-feature">
                <button id="btnAdd" class="m-btn m-btnIcon m-btn-default">
                    <div class="m-btn-icon icon-add"></div>
                    <div class="btn-text">Thêm nhân viên</div>
                </button>
            </div>
        </div>
        <div class="filter-bar">
            <div class="filter-left">
                <input id="txtSearchEmployee" class="icon-search input-search" type="text"
                    placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" />
                <select id="cbxDepartment" class="getDepartments filter" fieldName="CustomerGroupName"
                    fieldValue="CustomerGroupId" api="/api/customergroups">
                </select>
                <select class="getPositions filter" id="cbxPosition" fieldName="CustomerGroupName"
                    fieldValue="CustomerGroupId" api="/api/customergroups">
                </select>
            </div>
            <div class="filter-right">

                <button id="btnDelete" class="m-second-button m-btn-delete"></button>
                <button id="btnRefresh" class="m-second-button m-btn-refresh">
                </button>
            </div>
        </div>
        <div
            class="grid grid-employee el-table el-table--fit el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition">
            <table id="tbListData" cellspacing="0" cellpadding="0" border="0" class="el-table__body"
                style="min-width: 100%;">
                <thead class="has-gutter">
                    <tr class="el-table__row">
                        <th colspan="1" rowspan="1" class="el-table_30_column_114 is-leaf" fieldName="">
                            <div class="cell">
                                <div class="boxCheck">
                                    <input type="checkbox" class="checkboxIP" id="checkboxIP" name="">
                                    <div class="checkmark">
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_30_column_114 is-leaf" fieldName="EmployeeCode">
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

                </tbody>
            </table>
        </div>
        <div class="paging-bar">
            <div class="paging-record-info">
                Hiển thị <b></b> nhân viên
            </div>
            <div class="paging-option">
                <div class="btn-select-page m-btn-firstpage"></div>
                <div class="btn-select-page m-btn-prev-page"></div>
                <div class="m-btn-list-page">
                </div>
                <div class="btn-select-page m-btn-next-page"></div>
                <div class="btn-select-page m-btn-lastpage"></div>
            </div>
            <div class="paging-record-option">
                <select name="" id="cbxLimit">
                    <option value="10">10 nhân viên/trang</option>
                    <option value="20">20 nhân viên/trang</option>
                    <option value="50">50 nhân viên/trang</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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