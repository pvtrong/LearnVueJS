<template>
	<div
		:class="{ isHide: isHide }"
		class="m-dialog dialog-detail"
		title="Thông tin nhân viên"
	>
		<div class="dialog-modal"></div>
		<div class="dialog-content">
			<div @mousedown="dragElement()" class="dialog-header">
				<div class="dialog-header-title">THÔNG TIN NHÂN VIÊN</div>
				<div class="dialog-header-close">
					<button v-on:click="btnCancelOnClick"><b>x</b></button>
				</div>
			</div>
			<form class="dialog-body">
				<div class=" m-flex">
					<div class="m-flex1">
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
							(Vui lòng chọn ảnh có định dạng <br /><b
								>.jpg, .jpeg, .png, .gif. </b
							>)
						</div>
					</div>
					<div class="m-col el-left  m-flex-2">
						<div class="m-row mg-top-0 m-flex">
							<div class="m-col m-flex-1">
								<div class="m-label">
									Mã nhân viên (<span class="label-required"
										>*</span
									>)
								</div>
								<div>
									<input
										id="txtEmployeeCode"
										name="EmployeeCode"
										fieldName="EmployeeCode"
										required
										type="text"
										v-model="employee.employeeCode"
									/>
								</div>
							</div>
							<div class="m-flex-1 mg-left-10px">
								<div class="m-label">
									Họ và tên (<span class="label-required"
										>*</span
									>)
								</div>
								<div>
									<input
										id="txtFullName"
										name="FullName"
										fieldName="FullName"
										required
										class="input-required"
										type="text"
										v-model="employee.fullName"
									/>
								</div>
							</div>
						</div>
						<div class="m-row m-flex">
							<div class="m-flex-1">
								<div class="m-label">Ngày sinh</div>
								<input
									class="m-combobox-input"
									type="date"
									v-model="employee.dateOfBirth"
									autocomplete="off"
								/>
							</div>
							<div class="m-flex-1 mg-left-10px">
								<BaseRadio
									v-model="setItemSelected"
									@setItemSelected="setItemSelected"
									:itemSelected="{
										genderId: this.employee.gender,
									}"
									:category="gender.category"
									:header="gender.header"
									:content="gender.genders"
								></BaseRadio>
							</div>
						</div>
						<div class="m-row m-flex">
							<div class="m-flex-1">
								<div
									class="m-label"
									title="Số chứng minh thư nhân dân hoặc căn cước công dân"
								>
									Số CMTND/ Căn cước (<span
										class="label-required"
										>*</span
									>)
								</div>
								<div>
									<input
										id="txtIdentityNumber"
										name="IdentifyNumber"
										fieldName="text"
										type="text"
										required
										v-model="employee.identifyNumber"
									/>
								</div>
							</div>
							<div class="m-flex-1 mg-left-10px">
								<div class="m-label">Ngày cấp</div>
								<input
									class="m-combobox-input"
									type="date"
									autocomplete="off"
									v-model="employee.dateOfIN"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="m-row m-flex">
					<div class=" m-flex-4">
						<div class="m-flex-4">
							<div class="m-label">Nơi cấp</div>
							<div>
								<input
									id="txtPlaceOfIN"
									name="PlaceOfIN"
									type="text"
									v-model="employee.placeOfIN"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="m-row m-flex">
					<div class="m-col m-flex-2">
						<div class="m-label">
							Email (<span class="label-required">*</span>)
						</div>
						<div>
							<input
								id="txtEmail"
								name="Email"
								fieldName="Email"
								type="email"
								required
								placeholder="example@domain.com"
								v-model="employee.email"
							/>
						</div>
					</div>
					<div class="m-flex-1 mg-left-10px">
						<div class="m-label">
							Số điện thoại (<span class="label-required">*</span
							>)
						</div>
						<div>
							<input
								id="txtPhoneNumber"
								name="PhoneNumber"
								type="text"
								required
								v-model="employee.phoneNumber"
							/>
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
					<div class="m-flex-2 ">
						<div class="m-label">Mức lương cơ bản</div>
						<div>
							<input
								id="txtSalary"
								fieldName="Salary"
								name="Salary"
								type="text"
								v-model="employee.salary"
								style="text-align:right; padding-right: 56px"
							/>
						</div>
					</div>
					<div class="m-flex-1 mg-left-10px">
						<div class="m-label">Vị trí</div>
						<Postions
							:end="true"
							:faCaretUp="false"
							:faCaretDown="true"
							:positionId2="employee.positionId"
							@setItemSelected="setPositionId"
							v-model="employee.positionId"
						>
						</Postions>
					</div>
				</div>
				<div class="m-row m-flex">
					<div class="m-flex-2 ">
						<div class="m-label">Mã số thuế cá nhân</div>
						<div>
							<input
								id="txtTaxCode"
								fieldName="TaxCode"
								name="TaxCode"
								type="text"
								v-model="employee.taxCode"
							/>
						</div>
					</div>
					<div class="m-flex-1 mg-left-10px">
						<div class="m-label">Phòng ban</div>
						<Department
							:end="true"
							:faCaretUp="false"
							:faCaretDown="true"
							:departmentId2="employee.departmentId"
							@setItemSelected="setDepartmentId"
						></Department>
					</div>
				</div>
				<div class="m-row m-flex">
					<div class="m-flex-2 ">
						<div class="m-label">Tình trạng công việc</div>
						<BaseCombobox
							:faCaretUp="false"
							:faCaretDown="true"
							v-model="setItemSelected"
							@setItemSelected="setItemSelected"
							:end="status.end"
							:itemSelected="{ statusId: this.employee.status }"
							:category="status.category"
							:header="status.header"
							:content="status.statuss"
						>
						</BaseCombobox>
					</div>
					<div class="m-flex-1 mg-left-10px">
						<div class="m-label">Ngày gia nhập</div>
						<input
							class="m-combobox-input"
							type="date"
							autocomplete="off"
							v-model="employee.dateOfBeginWork"
						/>
					</div>
				</div>
			</form>
		</div>
		<div class="dialog-footer">
			<button
				v-on:click="btnCancelOnClick"
				id="btnCancel"
				class="m-btn m-btn-default m-btn-cancel"
			>
				Hủy
			</button>
			<button
				@click="btnAddOnClick"
				id="btnSave"
				class="m-btn m-btn-default"
			>
				<i class="far fa-save"></i>
				<span class="btn-text">Lưu</span>
			</button>
		</div>
	</div>
</template>

<script>
import * as axios from "axios";
import Department from "../../../components/common/Department.vue";
import Postions from "../../../components/common/Positions";
import BaseCombobox from "../../../components/base/BaseCombobox";
import BaseRadio from "../../../components/base/BaseRadio.vue";
export default {
	props: ["isHide", "employee", "mode"],

	// computed: {
	//     getItemSelected: function() {
	//         return this.employee.status;
	//     },
	// },
	data() {
		return {
			// * tọa độ của dialog
			position: {
				pos1: 0,
				pos2: 0,
				pos3: 0,
				pos4: 0,
			},

			filter: {
				keyword: "",
				departmentId: "",
				positionId: "",
			},

			status: {
				statuss: [
					{ statusId: 0, statusName: "Đang nghỉ việc", value: 0 },
					{ statusId: 1, statusName: "Đang làm việc", value: 1 },
					{ statusId: 2, statusName: "Đang thử việc", value: 2 },
				],
				category: "status",
				end: true,
				header: "Tất cả trạng thái",
			},

			gender: {
				header: "Giới tính",
				genders: [
					{ genderId: 0, genderName: "Nam", value: 0 },
					{ genderId: 1, genderName: "Nữ", value: 1 },
					{ genderId: 2, genderName: "Khác", value: 2 },
				],
				category: "gender",
			},

			dialog: false,
		};
	},
	computed: {},

	components: {
		Department,
		Postions,
		BaseCombobox,
		BaseRadio,
	},
	methods: {
		// * truyền departmentId để search từ component combobox
		setDepartmentId(data) {
			this.employee.departmentId = data.id;
		},

		// * hàm truyền positionId để filter từ component combobox
		setPositionId(data) {
			this.employee.positionId = data.id;
		},

		// * Hàm để lấy số nhân viên/1 trang từ component combobox
		setItemSelected(data) {
			this.employee.status = data.id;
		},

		// * Hàm nhấn di chuyển
		dragElement() {
			const elmnt = document.getElementsByClassName("m-dialog");
			if (elmnt[0]) {
				elmnt[0].onmousedown = this.dragMouseDown;
			} else {
				elmnt[0].onmousedown = this.dragMouseDown;
			}
		},

		// * Hàm nhấn chuột
		dragMouseDown(e) {
			e = e || window.event;
			// get the mouse cursor position at startup:
			this.position.pos3 = e.clientX;
			this.position.pos4 = e.clientY;
			document.onmouseup = this.closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = this.elementDrag;
		},

		// * Hàm thay đổi tọa độ của dialog
		elementDrag(e) {
			var elmnt = document.getElementsByClassName("m-dialog");
			e = e || window.event;
			// calculate the new cursor position:

			this.position.pos1 = this.position.pos3 - e.clientX;
			this.position.pos2 = this.position.pos4 - e.clientY;
			this.position.pos3 = e.clientX;
			this.position.pos4 = e.clientY;
			if (
				elmnt[0].offsetTop - this.position.pos2 >
				window.screen.availHeight - 794
			)
				elmnt[0].style.top = window.screen.availHeight - 794 + "px";
			else if (elmnt[0].offsetTop - this.position.pos2 < -80)
				elmnt[0].style.top = -80 + "px";
			else
				elmnt[0].style.top =
					elmnt[0].offsetTop - this.position.pos2 + "px";
			if (
				elmnt[0].offsetLeft - this.position.pos1 <
				-window.screen.availWidth + 180
			) {
				console.log(1);
				elmnt[0].style.left = -window.screen.availWidth + "px" + 180;
			} else if (elmnt[0].offsetLeft - this.position.pos1 > -520) {
				console.log(2);
				elmnt[0].style.left = -520 + "px";
			} else
				elmnt[0].style.left =
					elmnt[0].offsetLeft - this.position.pos1 + "px";
		},

		// * Hàm dừng di chuyển dialog
		closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
		},

		// * Hàm xử lý sự kiện khi nhấn nút click
		async btnAddOnClick() {
			if (this.mode === "add") {
				console.log(this.mode);
				let res = await axios.post(
					"https://localhost:44349/api/Employees/",
					this.employee
				);
				console.log(res);
			} else {
				let res1 = await axios.put(
					"https://localhost:44349/api/Employees/",
					this.employee
				);
				console.log(res1);
			}
			this.$emit("closePopup", true);
		},

		// * Hàm xử lý sự kiện khi bấm nút hủy
		btnCancelOnClick() {
			this.$emit("closePopup", true);
		},
	},
};
</script>

<style scope>
.isHide {
	display: none;
}
.m-dialog {
	z-index: 999;
	position: absolute;
	top: 0;
	right: 50%;
	width: 700px;
	height: 587px;
	left: -1100px;
	top: -25px;
}

.dialog-modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: black;
	opacity: 0.4;
	z-index: -1;
}

.m-dialog .dialog-content {
	background-color: #ffffff;
	z-index: 1000;
	border-radius: 5px 5px 0 0px;

	width: 100%;
	height: 100%;
}

.m-dialog .dialog-content .dialog-body {
	overflow: auto;
	width: calc(100% - 50px);
	height: calc(100% - 63px);
}

.m-dialog .dialog-header {
	display: flex;
	padding: 24px 24px 0px 24px;
	cursor: move;
}

.m-dialog .dialog-header .dialog-header-close {
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
	background-image: url("../../../assets/content/icon/x.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 20px;
	opacity: 0.7;
}

.m-dialog .dialog-header .dialog-header-close button:hover {
	background-color: #ccc;
}

/*Tiêu đề của dialog*/

.m-dialog .dialog-header .dialog-header-title {
	font-size: 20px;
	text-transform: uppercase;
	font-weight: bold;
}

.dialog-content .dialog-body {
	padding: 0px 24px;
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

.dialog-footer button {
	margin-left: 16px;
}

.required-error,
.required-error:focus {
	border: 1px solid #ff0000;
}

.el-left {
	width: calc(100% - 180px);
}

.el-avatar-employee .el-avatar {
	border: 1px solid #ccc;
	width: 160px;
	height: 160px;
	margin: 0 auto;
	border-radius: 50%;
	cursor: pointer;
	background-image: url("../../../assets/content/img/default-avatar.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}

.el-avatar-note {
	font-size: 12px;
}
.filter-left {
	display: flex;
}
.filter-left .m-combobox {
	margin-left: 10px;
	margin-right: 10px;
}

#txtSearchEmployee {
	min-width: 300px;
}
</style>
