<template>
    <div class="m-dialog dialog-detail" title="Thông tin nhân viên">
        <div class="dialog-content">
            <form class="dialog-body">

                <div class=" m-flex">
                    <div class="m-flex-5">
                        <div class="group-label-info">
                            A. Thông tin chung:
                        </div>
                        <hr class="hr-group-label" />
                    </div>
                </div>
                <div class="m-row m-flex">

                    <div class=" m-col el-avatar-employee m-flex-1">

                        
                        <div class="el-avatar"></div>
                        <div class="el-avatar-note text-align-center">
                            (Vui lòng chọn ảnh có định dạng <br><b>.jpg, .jpeg, .png, .gif. </b>)
                        </div>
                    </div>
                    <div class="m-col el-left  m-flex-4">


                        <div class="m-row mg-top-0 m-flex">
                            <div class="m-col m-flex-1">
                                <div class="m-label">Mã nhân viên (<span class="label-required">*</span>)</div>
                                <div><input id="txtEmployeeCode" name="EmployeeCode" fieldName="EmployeeCode" required
                                        type="text" /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Họ và tên (<span class="label-required">*</span>)</div>
                                <div>
                                    <input id="txtFullName" name="FullName" fieldName="FullName" required
                                        class="input-required" type="text" required />
                                </div>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <m-date-picker name="DateOfBirth" id="dtDateOfBirth" label="Ngày sinh"
                                    label-cls="m-label" input-cls="m-control" format="dd/mm/yyyy" fieldName=""
                                    placeholder="_ _/ _ _/ _ _ _ _" />
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <div class="m-label">Giới tính</div>
                                <div class="m-radio-group" id="rdGender">
                                    <div class="m-radio-item">
                                        <input type="radio" id="rdMale" fieldname="Gender" value="" name="gender" checked="">
                                        <label for="rdMale">Nam</label>
                                    </div>
                                    <div class="m-radio-item mg-left-10px">
                                        <input type="radio" id="rdFemale" fieldname="Gender" value="" name="gender">
                                        <label for="rdMale">Nữ</label>
                                    </div>
                                    <div class="m-radio-item mg-left-10px">
                                        <input type="radio" id="rdOther" fieldname="Gender" value="" name="gender">
                                        <label for="rdOther">Khác</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-row m-flex">
                            <div class="m-flex-1">
                                <div class="m-label" title="Số chứng minh thư nhân dân hoặc căn cước công dân">Số CMTND/
                                    Căn cước (<span class="label-required">*</span>)</div>
                                <div><input id="txtIdentityNumber" name="IdentifyNumber" fieldName="text" type="text"
                                        required /></div>
                            </div>
                            <div class="m-flex-1 mg-left-10px">
                                <m-date-picker name="DateOfIN" id="dtDateOfIN" label="Ngày cấp" label-cls="m-label"
                                    input-cls="m-control" format="dd/mm/yyyy" fieldName=""
                                    placeholder="_ _/ _ _/ _ _ _ _" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-row m-flex">
                    <div class=" m-flex-4">
                        <div class="m-flex-4">
                            <div class="m-label">Nơi cấp</div>
                            <div><input id="txtPlaceOfIN" name="PlaceOfIN" type="text" /></div>
                        </div>
                    </div>
                </div>
                <div class="m-row m-flex">
                    <div class="m-flex-5">
                        <div class="m-flex">
                            <div class="m-col m-flex-3">
                                <div class="m-label">Email (<span class="label-required">*</span>)</div>
                                <div><input id="txtEmail" name="Email" fieldName="Email" type="email" required
                                        placeholder="example@domain.com" /></div>
                            </div>
                            <div class="m-flex-2 mg-left-10px">
                                <div class="m-label">Số điện thoại (<span class="label-required">*</span>)</div>
                                <div>
                                    <input id="txtPhoneNumber" name="PhoneNumber" type="text" required />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div class=" m-flex">
                    <div class="m-flex-5">
                        <div class="group-label-info" style="margin-top:30px">
                            B. Thông tin công việc:
                        </div>
                        <hr class="hr-group-label" />
                    </div>
                </div>
                <div class="m-row m-flex">
                    <div class=" m-flex-5">
                        <div class="m-flex">
                            <div class="m-flex-2">
                                <div class="m-label">Vị trí</div>
                                <select class="getPositions" id="cbnPosition" fieldName="PositionName"
                                    name="PositionName" fieldValue="CustomerGroupId">
                                </select>
                            </div>
                            <div class="m-flex-3 mg-left-10px">
                                <div class="m-label">Mức lương cơ bản</div>
                                <div><input id="txtSalary" fieldName="Salary" name="Salary" type="text"
                                        style="text-align:right; padding-right: 56px" /><span
                                        class="currency-for-input">(VNĐ)</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-row m-flex">
                    <div class=" m-flex-5">
                        <div class="m-flex">
                            <div class="m-flex-2 ">
                                <div class="m-label">Phòng ban</div>
                                <select class="getDepartments" id="cbnDepartment" fieldName="DepartmentName"
                                    name="DepartmentName" fieldValue="DepartmentId">
                                </select>
                            </div>
                            <div class="m-flex-3 mg-left-10px">
                                <div class="m-label">Mã số thuế cá nhân</div>
                                <div><input id="txtTaxCode" fieldName="TaxCode" name="TaxCode" type="text" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-row m-flex">
                    <div class=" m-flex-5">
                        <div class="m-flex">
                            <div class="m-flex-2 ">
                                <m-date-picker name="DateOfBeginWork" id="dtDateOfBeginWork" label="Ngày gia nhập"
                                label-cls="m-label" input-cls="m-control" format="dd/mm/yyyy" fieldName=""
                                placeholder="_ _/ _ _/ _ _ _ _" />
                            </div>
                            <div class="m-flex-3 mg-left-10px">
                                <div class="m-label">Tình trạng công việc</div>
                                <select id="txtStatus" name="Status" fieldName="Status" fieldValue="status"
                                    api="/api/customergroups">
                                    <option value="1" selected>Đang làm việc</option>
                                    <option value="2">Đang thử việc</option>
                                    <option value="0">Đang nghỉ việc</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        <div class="dialog-footer">
            <button id="btnCancel" class="m-btn m-btn-default m-btn-cancel">Hủy</button>
            <button id="btnSave" class="m-btn m-btn-default">
                <i class="far fa-save"></i>
                <span class="btn-text">Lưu</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scope>

    .m-dialog .dialog-modal {
        opacity:.5;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        z-index: 999;
    }

    .m-dialog .dialog-content {
        background-color: #ffffff;
        z-index: 1000;
        border-radius: 5px;
    }

    .m-dialog .dialog-header {
        display: flex;
        padding: 24px 24px 0px 24px;
        cursor: move;
    }

        .m-dialog .dialog-header .dialog-header-close{
            position: absolute;
            right: 0;
            top: 0;
        }

            .m-dialog .dialog-header .dialog-header-close:hover {
                border-radius: 5px;
            }

            .m-dialog .dialog-header .dialog-header-close button {
                width: 40px;
                height: 40px;
                border-radius: 0 5px 0 0;
                border: none;
                outline: none;
                cursor: pointer;
                background-color: #ffffff;
                background-image: url('../../content/icon/x.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: 20px;
                opacity:.7;
            }

                .m-dialog .dialog-header .dialog-header-close button:hover {
                    background-color: #ccc;
                }

/*Tiêu đề của dialog*/

        .m-dialog .dialog-header .dialog-header-title{
            font-size: 20px;
            text-transform: uppercase;
            font-weight: bold;
        }

.dialog-content .dialog-body {
    padding: 0px 24px 24px;
}


.dialog-footer {
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #e9ebee;
    border-radius: 0 0 5px 5px;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 24px;
    box-sizing: border-box;
}

.dialog-footer button{
    margin-left:16px;
}

.required-error, .required-error:focus{
    border: 1px solid #ff0000;
}
</style>