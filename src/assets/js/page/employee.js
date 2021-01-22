$(document).ready(function () {
    // Thực  hiện load dữ liệu:
    debugger;
    dialog = $(".m-dialog").dialog({
        autoOpen: false,
        width: 700,
        height: 550,
        modal: true
    });

    loadData();
    // 1. Lấy dữ liệu:
    loadDepartments();
    loadPositions();

    //Hàm xử lý các sự kiện
    initEvents();





});
var offsetParam = 0;
var limitParam = 10;

function loadPositions() {
    debugger;
    $.ajax({
        url: 'https://localhost:44349/api/Positions/',
        method: 'GET',
        data: null,
        dataType: 'json',
        contentType: 'application/json'
    }).done(function (response) {
        var trHtml2 = `<option value="">Tất cả vị trí</option>`;

        $('.getPositions').find('option').remove().end();
        $('.getPositions.filter').append(trHtml2);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);
            debugger;
            var trHtml = `
                        <option value="${response[i].positionId}">${response[i].positionName}</option>
                        `;

            $('.getPositions').append(trHtml);


        }
    }).fail(function (response) {

    })
}
function loadDepartments() {
    debugger;
    $.ajax({
        url: 'https://localhost:44349/api/Departments/',
        method: 'GET',
        data: null,
        dataType: 'json',
        contentType: 'application/json'
    }).done(function (response) {
        var trHtml2 = `<option value="">Tất cả phòng ban</option>`;
        debugger;
        $('.getDepartments').find('option').remove().end();
        $('.getDepartments.filter').append(trHtml2);
        for (var i = 0; i < response.length; i++) {
            console.log(response[i]);
            debugger;
            var trHtml = `
                        <option value="${response[i].departmentId}">${response[i].departmentName}</option>
                        `;

            $('.getDepartments').append(trHtml);


        }
    }).fail(function (response) {

    })
}
var length;

function render(response) {
    $('#tbListData tbody').empty();
    for (var i = 0; i < response.length; i++) {
        var DOB = (response[i].dateOfBirth) ? formatDate(response[i].dateOfBirth) : "";
        var departmentName = (response[i].departmentName == null) ? "" : response[i].departmentName;
        var positionName = (response[i].positionName == null) ? "" : response[i].positionName;

        debugger;
        var trHtml = `<tr EmployeeId='${response[i].employeeId}' class="el-table__row first">
                   <td rowspan="1" colspan="1" style="width: 30px;">
                       <div class="cell">
                            <div class="boxCheck">
                                <input type="checkbox" class="checkboxIP" id="" name="" value="${response[i].employeeId}">
                                <div class="checkmark">
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                           
                       </div>
                   </td>
                    <td rowspan="1" colspan="2" style="width: 140px;">
                        <div class="cell">${response[i].employeeCode}</div>
                    </td>
                    <td rowspan="1" colspan="1" style="width: 143px;">
                        <div class="cell">${response[i].fullName}</div>
                    </td>
                    <td rowspan="1" colspan="1" style="width: 58px;"><div class="cell">${formatGender(response[i].gender)}</div></td>
                    <td rowspan="1" colspan="1" style="width: 100px;"><div class="cell ">${DOB}</div></td>
                    <td rowspan="1" colspan="1" style="width: 119px;"><div class="cell">${response[i].phoneNumber}</div></td>
                    <td rowspan="1" colspan="1" style="width: 192px;"><div class="cell">${response[i].email}</div></td>
                    <td rowspan="1" colspan="1" style="width: 232px;"><div class="cell">${positionName}</div></td>
                    <td rowspan="1" colspan="1" style="width: 172px;"><div class="cell">${departmentName}</div></td>
                    
                    
                    <td rowspan="1" colspan="1"  style="width:200px;"><div class="cell">${formatCurrency(response[i].salary)}</div></td>
                    <td rowspan="1" colspan="1" style="width: 198px;"><div class="cell">${formatStatus(response[i].status)}</div></td>
                </tr>`;
        $('#tbListData >tbody:last-child').append(trHtml);


    }
    length = response[0].totalEmployees;
    $(".m-btn-list-page").empty();
    var current = offsetParam;
    var i = 0;


    while (current <= length && i < 4) {
        $(".m-btn-list-page").append(`<button id="page` + parseInt(current / limitParam + 1) + `" class="btn-pagenumber">` + parseInt(current / limitParam + 1) + `</button>`)
        i++;
        current += limitParam;
    }
    var offsetNew = offsetParam + 1;
    if (offsetParam + limitParam < length)
        var str = (offsetNew) + "-" + (offsetParam + limitParam) + "/" + length;
    else str = (offsetNew) + "-" + length + "/" + length;
    $(".paging-record-info").children().text(str);
    var numberPage = parseInt(offsetParam / limitParam + 1)
    numberPageSelect($("#page" + numberPage));
}



function loadData() {

    debugger;
    $.ajax({
        url: 'https://localhost:44349/api/Employees/?limitParam=' + limitParam + "&offsetParam=" + offsetParam,
        method: 'GET',
        data: null,
        dataType: 'json',
        contentType: 'application/json'
    }).done(function (response) {
        debugger;
        firstPage();
        render(response);
    }).fail(function (response) {

    })

}

function initEvents() {
    $('#btnAdd').click(this.add.bind(this));
    $('#btnSave').click(this.save.bind(this));
    $('#btnCancel').click(this.cancel.bind(this));
    $(".ui-dialog-titlebar-close").click(this.cancel.bind(this));
    $("input[required]").blur(this.checkRequired);
    $('#tbListData tbody').on('dblclick', 'tr', this.edit);
    $('.m-btn-list-page').on('click', ".btn-pagenumber", this.changePage);
    $('#tbListData tbody').on("change", ".checkboxIP", this.showBtnDelete)
    $('#btnDelete').click(this.deleteEmployee.bind(this));
    $('#btnRefresh').click(this.refresh);
    $('#txtSearchEmployee').change(this.filter);
    $('#cbxDepartment').change(this.filter);
    $('#cbxPosition').change(this.filter);
    $("#txtSalary").change(function () {
        $("#txtSalary").val(formatCurrency($("#txtSalary").val()));
    })
    $('.m-btn-prev-page').click(this.prevPage);
    $('.m-btn-next-page').click(this.nextPage);
    $('.m-btn-firstpage').click(this.firstPage);
    $('.m-btn-lastpage').click(this.lastPage);
    $("#cbxLimit").change(function () {
        debugger;
        limitParam = parseInt($("#cbxLimit").val());
        filter();
    })
    checkboxIP
    $("#checkboxIP").change(function () {

        if ($("#checkboxIP").is(':checked')) {
            debugger;
            $(".checkboxIP").prop("checked", true);

        } else $(".checkboxIP").prop("checked", false);
        showBtnDelete();
    })


}

function firstPage() {
    debugger;
    offsetParam = 0;
    filter();
}


function lastPage() {
    debugger;
    if (parseInt(length / limitParam) == length / limitParam) offsetParam = length - limitParam;
    else offsetParam = length - 1 - (length - (parseInt(length / limitParam, 10) * limitParam));
    filter();
}

function nextPage() {
    if (offsetParam + limitParam < length) offsetParam = offsetParam + limitParam;
    filter();
}

function prevPage() {
    if (offsetParam > limitParam) offsetParam = offsetParam - limitParam;
    else offsetParam = 0;
    filter();
}

function changePage() {
    debugger;
    offsetParam = (this.innerText - 1) * limitParam;
    filter();
}


function refresh() {
    $('#txtSearchEmployee').val("");
    loadDepartments();
    loadPositions();
    loadData();

}



function filter() {
    debugger;

    var keyword = $('#txtSearchEmployee').val();

    var departmentId = $('#cbxDepartment').val();
    var positionId = $('#cbxPosition').val();

    $.ajax({
        url: "https://localhost:44349/api/Employees/search?keyword=" + keyword + "&departmentId=" + departmentId + "&positionId=" + positionId + "&limitParam=" + limitParam + "&offsetParam=" + offsetParam,
        method: "GET"
    }).done(function (res) {
        debugger;
        render(res);

    }).fail(function (res) {
        debugger;

    })

}

function deleteEmployee() {
    debugger;
    var accept = confirm("Bạn có chắc chắn xóa nhân viên này không?");
    if (accept) {
        var numberChoosen = $(".checkboxIP:checked");
        var numberChoosens = [];
        for (var i of numberChoosen) {
            numberChoosens.push(i.value);
        }
        console.log(numberChoosens);
        $.ajax({
            url: "https://localhost:44349/api/Employees/",
            method: "DELETE",
            data: JSON.stringify(numberChoosens),
            contentType: "application/json",
            dataType: "json"
        }).done(function (res) {
            debugger;
            showBtnDelete();
            loadData();

        }).fail(function (res) {
            debugger;
            $("#btnDelete").hide();
            loadData();

        })
    }

}

function showBtnDelete() {
    debugger;
    var numberChoosen = $(".checkboxIP").is(":checked");
    if (numberChoosen > 0) $("#btnDelete").show();
    else $("#btnDelete").hide();
}

function checkRequired() {
    var value = this.value;
    if (!value) {
        $(this).addClass('required-error');
        $(this).attr('title', "Bạn phải nhật thông tin này");
    } else {
        $(this).removeClass('required-error');
        $(this).removeAttr('title');
    }

    return;
}

function add() {
    this.dialog.Mode = "add";
    dialog.dialog('open');
    $.ajax({
        url: "https://localhost:44349/api/Employees/EmployeeCodeMax",
        method: "GET"
    }).done(function (res) {
        debugger;
        var str = "NV";
        for (var i = 0; i < 5 - parseInt(res.employeeCode.slice(2, 7) + 1).toString().length; i++) {
            str += "0";
        }
        var str1 = parseInt(res.employeeCode.slice(2, 7)) + 1;
        str += str1;
        $("#txtEmployeeCode").val(str);

    }).fail(function (res) {
        debugger;

    })
    $("#txtFullName").val("");
    $("#dtDateOfBirth").val("");
    $("#txtIdentityNumber").val("");
    $("#dtDateOfIN").val("");
    $("#txtPlaceOfIN").val("");
    $("#txtEmail").val("");
    $("#txtTaxCode").val("");
    $("#txtSalary").val("");
    $("#dtDateOfBeginWork").val("");


}

function save() {
    debugger;
    var isValid = true;
    var id = getID();


    var inputRequired = $("[required]");
    $.each(inputRequired, function (index, input) {
        var valid = $(input).trigger("blur");
        if (valid.hasClass('required-error')) {
            isValid = false;
        }
    })
    if (isValid) {
        var minDate = new Date("1/1/0001 12:00:00");
        var employee = {};
        employee.employeeId = id;
        employee.employeeCode = $("#txtEmployeeCode").val();
        employee.fullName = $("#txtFullName").val();
        if ($("#dtDateOfBirth").val() == "") {
            employee.dateOfBirth = minDate;
        }
        else employee.dateOfBirth = new Date("'" + $("#dtDateOfBirth").val() + "'");
        employee.gender = parseInt($("#gender").val());
        employee.identifyNumber = $("#txtIdentityNumber").val();

        if ($("#dtDateOfIN").val() == "") {
            employee.dateOfIN = minDate;
        } else employee.dateOfIN = new Date("'" + $("#dtDateOfIN").val() + "'");
        employee.placeOfIN = $("#txtPlaceOfIN").val();
        employee.email = $("#txtEmail").val();

        employee.phoneNumber = $("#txtPhoneNumber").val();
        if (!$("#cbnPosition").val()) {
            employee.positionId = "00000000-0000-0000-0000-000000000000";
        }
        else employee.positionId = $("#cbnPosition").val();
        if (!$("#cbnDepartment").val()) {
            employee.departmentId = "00000000-0000-0000-0000-000000000000";
        }
        else employee.departmentId = $("#cbnDepartment").val();
        employee.taxCode = $("#txtTaxCode").val();
        employee.salary = $("#txtSalary").val().split(".").join("");
        if (employee.status != NaN)
            employee.status = parseInt($("#txtStatus").val());
        else employee.status = null;
        if ($("#dtDateOfBeginWork").val() == "") {
            employee.dateOfBeginWork = minDate;
        }
        else employee.dateOfBeginWork = new Date("'" + $("#dtDateOfBeginWork").val() + "'");
        var method = "PUT";
        if (dialog.Mode == "add") {
            method = "POST";
        }
        if (method == "POST") {
            $.ajax({
                url: "https://localhost:44349/api/Employees/CheckEmployeeCode?employeeCode=" + employee.employeeCode,
                method: "GET",
                contentType: "application/json",
                dataType: "json"
            }).done(function (res) {
                debugger;
                if (res == undefined) {
                    if (validateEmail(employee.email)) {

                        $.ajax({
                            url: "https://localhost:44349/api/Employees/",
                            method: method,
                            data: JSON.stringify(employee),
                            contentType: "application/json",
                            dataType: "json"
                        }).done(function (res) {
                            debugger;
                            dialog.dialog("close");
                            $('#tbListData tbody').children().removeClass("row-selected");
                            loadData();


                        }).fail(function (res) {
                            debugger;
                            dialog.dialog("close");
                            $('#tbListData tbody').children().removeClass("row-selected");
                            loadData();

                        })

                    } else {
                        alert("Bạn nhập không đúng định dạng email");
                        return;
                    }
                } else alert("Mã nhân viên này đã có trong hệ thống")


            }).fail(function (res) {
                debugger;
                alert("Mã nhân viên này đã có trong hệ thống")

            })
        } else {
            if (validateEmail(employee.email)) {

                $.ajax({
                    url: "https://localhost:44349/api/Employees/",
                    method: method,
                    data: JSON.stringify(employee),
                    contentType: "application/json",
                    dataType: "json"
                }).done(function (res) {
                    debugger;
                    dialog.dialog("close");
                    $('#tbListData tbody').children().removeClass("row-selected");
                    loadData();


                }).fail(function (res) {
                    debugger;
                    dialog.dialog("close");
                    $('#tbListData tbody').children().removeClass("row-selected");
                    loadData();

                })

            } else {
                alert("Bạn nhập không đúng định dạng email");
                return;
            }
        }




    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function cancel() {
    var inputRequired = $("[required]");
    $.each(inputRequired, function (index, input) {
        var valid = $(input).trigger("blur");
        if (valid.hasClass('required-error')) {
            valid.removeClass('required-error');
        }
    })
    dialog.dialog('close');
    $('#tbListData tbody').children().removeClass("row-selected");
}
var MODE = "";

function edit() {
    // load dữ liệu chi tiết:
    console.log(this);
    rowOnSelect(this);
    var id = getID();
    // Hiển thị dialog thông tin chi tiết:
    if (id) {
        dialog.dialog('open');
        $.ajax({
            url: "https://localhost:44349/api/Employees/" + id,
            method: "GET"
        }).done(function (res) {
            if (!res) {
                alert("Không có khách hàng với mã tương ứng")
            } else {
                debugger;
                // Bindding các thông tin của khách hàng lên form:
                $("#txtEmployeeCode").val(res["employeeCode"]);
                $("#txtFullName").val(res["fullName"]);
                $("#dtDateOfBirth").val(convert(new Date(res["dateOfBirth"])));
                $("#gender").val(res["gender"]);
                $("#txtIdentityNumber").val(res["identifyNumber"]);
                $("#txtDateOfIN").val(convert(new Date(res["dateOfIN"])));
                $("#txtPlaceOfIN").val(res["placeOfIN"]);
                $("#txtEmail").val(res["email"]);
                $("#txtPhoneNumber").val(res["phoneNumber"]);

                $("#cbnPosition").val(res["positionId"]);
                $("#cbnDepartment").val(res["departmentId"]);
                $("#txtTaxCode").val(res["taxCode"]);
                ($("#txtSalary").val(formatCurrency(res["salary"])));
                $("#txtStatus").val(res["status"]);
                $("#dtDateOfBeginWork").val(convert(new Date(res["dateOfBeginWork"])));
                $("#txtTaxcode").val(res["Taxcode"]);


                debugger;
            }
        }).fail(function (res) {

        })
    }
    else {
        alert("Bạn chưa chọn khách hàng nào!");
    }

    dialog.Mode = "edit";

}

function formatDate(date) {

    var date = new Date(date);
    var year = date.getFullYear();
    if (year < 1000) return "";
    // lấy ngày:
    var day = date.getDate();
    if (day < 10) day = "0" + day;

    // lấy tháng:
    var month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;
    // lấy năm:

    return day + '/' + month + '/' + year;
}

function formatStatus(status) {
    if (status == 1) {
        return "Đang làm việc";
    }
    if (status == 0) return "Đang nghỉ việc";
    return "Đang thử việc";
}

function formatGender(gender) {
    if (gender == 1) {
        return "Nữ";
    }
    if (gender == 0) return "Nam";
    return "Khác";
}

function formatCurrency(salary) {
    if (!salary) return "";
    return salary.split(/(?=(?:\d{3})+(?:\.|$))/g).join(".");

}


function getID() {
    debugger;
    var id = $("#tbListData >tbody tr.row-selected[EmployeeId]");
    return id.attr("EmployeeId");
}

function rowOnSelect(a) {
    debugger;
    $(a).siblings().removeClass("row-selected");
    if ($(a).hasClass("row-selected")) {
        $(a).removeClass("row-selected");
    }
    else $(a).addClass("row-selected");
}

function numberPageSelect(a) {
    debugger;
    $(a).siblings().removeClass("btn-pagenumber-selected");
    $(a).addClass("btn-pagenumber-selected");
}

function convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}