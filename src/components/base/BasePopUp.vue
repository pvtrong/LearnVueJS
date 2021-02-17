<template>
	<div :class="{ isHide: isHide }" class="m-pop-up pop-up-detail">
		<div class="pop-up-modal"></div>
		<div class="pop-up-content">
			<div class="pop-up-header">
				<div class="pop-up-header-title">{{ this.header }}</div>
				<div class="pop-up-header-close">
					<button v-on:click="btnCancelOnClick"><b>x</b></button>
				</div>
			</div>
			<form class="pop-up-body">{{ this.content }}</form>
		</div>
		<div v-if="this.type === 'danger'" class="pop-up-footer">
			<button
				v-on:click="btnCancelOnClick"
				id="btnCancel"
				class="m-btn m-btn-default m-btn-cancel "
			>
				Hủy
			</button>
			<button
				@click="btnAddOnClick"
				id="btnSave"
				class="m-btn m-btn-default danger"
			>
				<span class="">Xóa</span>
			</button>
		</div>
		<div v-else-if="this.type === 'notify'" class="pop-up-footer">
			<button @click="btnAddOnClick" id="btnSave" class="m-btn ">
				<span class="">Đóng</span>
			</button>
		</div>
		<div v-else class="pop-up-footer">
			<button
				@click="btnCancelOnClick"
				id="btnSave"
				class="m-btn m-btn-default m-btn-cancel"
			>
				<span class="">Tiếp tục nhập</span>
			</button>
			<button
				v-on:click="btnAddOnClick"
				id="btnCancel"
				class="m-btn m-btn-default "
			>
				Đóng
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["isHide", "header", "type", "content"],

	data() {
		return {};
	},

	computed: {},

	components: {},
	methods: {
		// * Hàm xử lý sự kiện khi nhấn nút click
		async btnAddOnClick() {
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
.m-pop-up {
	z-index: 1000;
	position: fixed;
	top: 0;
	right: 50%;
	width: 400px;
	height: 137px;
	left: 565px;
	top: 0px;
}

.pop-up-modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: black;
	opacity: 0.4;
	z-index: -1;
}

.m-pop-up .pop-up-content {
	background-color: #ffffff;
	z-index: 1000;
	border-radius: 5px 5px 0 0px;

	width: 100%;
	height: 100%;
}

.m-pop-up .pop-up-content .pop-up-body {
	width: calc(100% - 48px);
	height: calc(100% - 90px);
}

.m-pop-up .pop-up-header {
	display: flex;
	padding: 24px 24px 0px 24px;
}

.m-pop-up .pop-up-header .pop-up-header-close {
	position: absolute;
	right: 0;
	top: 0;
}

.danger {
	background-color: red !important;
}

.m-pop-up .pop-up-header .pop-up-header-close:hover {
	border-radius: 5px;
}

.m-pop-up .pop-up-header .pop-up-header-close button {
	width: 40px;
	height: 40px;
	border-radius: 0 5px 0 0;
	border: none;
	outline: none;
	cursor: pointer;
	background-color: #ffffff;
	background-image: url("../../assets/content/icon/x.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 20px;
	opacity: 0.7;
}

.m-pop-up .pop-up-header .pop-up-header-close button:hover {
	background-color: #ccc;
}

/*Tiêu đề của pop-up*/

.m-pop-up .pop-up-header .pop-up-header-title {
	font-size: 15px;
	font-weight: bold;
}

.pop-up-content .pop-up-body {
	padding: 24px;
}

.pop-up-footer {
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

.pop-up-footer button {
	margin-left: 16px;
}
.pop-up-footer button span {
	text-align: center;
}
</style>
