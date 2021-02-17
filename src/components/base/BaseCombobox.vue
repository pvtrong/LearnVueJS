<template>
	<div @click="showCombobox()" class="m-combobox cbb">
		<div class="input cbb" v-if="itemSelected[`${category}Id`] === ''">
			{{ header }}
		</div>
		<div class="input cbb" v-else>
			{{ getItemSelected()[0][`${category}Name`] }}
		</div>

		<div
			:class="{
				reverse: isHide,
				'fa-angle-up': faCaretUp,
				'fa-angle-down': faCaretDown,
			}"
			class="comboboxBtn fas cbb"
		>
			<div></div>
		</div>
		<div
			class="m-combobox-data"
			:style="end ? 'top:-' + content.length * 39 + 'px' : 'top:41px;'"
			:class="{ isHide: isHide }"
		>
			<div
				@click="setItemSelected(item)"
				:id="item[`${category}Id`]"
				v-for="item in content"
				:class="{ itSelected: itSelect(item) }"
				:key="item[`${category}Id`]"
				class="m-combobox-item"
			>
				<div class="checkmark2">
					<div></div>
				</div>
				<div class="textCbx">{{ item[`${category}Name`] }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		window.addEventListener("click", this.documentClick);
	},
	props: [
		"header",
		"content",
		"itemSelected",
		"end",
		"category",
		"faCaretUp",
		"faCaretDown",
	],
	computed: {},
	methods: {
		documentClick(event) {
			if (event.target.className.includes("cbb")) {
				event.target.isHide = false;
			} else this.isHide = true;
		},
		itSelect(item) {
			return (
				item[`${this.category}Id`] ===
				this.itemSelected[`${this.category}Id`]
			);
		},
		showCombobox() {
			this.isHide = !this.isHide;
		},
		getItemSelected() {
			let temp = this.content.filter(
				(item) =>
					item[`${this.category}Id`] ===
					this.itemSelected[`${this.category}Id`]
			);
			return temp;
		},
		setItemSelected(item) {
			this.isHide = false;
			let data = { id: item[`${this.category}Id`] };
			this.$emit("setItemSelected", data);
		},
	},

	data() {
		return {
			isHide: true,
		};
	},
};
</script>

<style>
/* Combobox */
.m-combobox {
	cursor: pointer;
	position: relative;
	display: flex;
	border-radius: 4px;
	min-width: 100px;
	height: 38px;
	border: 1px solid #bbb;
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer */
	-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
	-webkit-user-select: none; /* Chrome, Safari, and Opera */
	-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}

.m-combobox .input {
	width: calc(100% - 48px);
	height: 38px;
	outline: none;
	margin: 0 56px 0 16px;
	border-style: hidden;
	line-height: 38px;
	text-align: left;
}

.m-combobox .input::placeholder {
	font-size: 11px;
}
.m-combobox .comboboxBtn {
	position: absolute;
	right: 0;
	width: 38px;
	height: 37px;
	outline: none;
	cursor: pointer;
	background-color: #fff;
	font-size: 20px;
	line-height: 37px;
	font-weight: 400;
	text-align: center;
}

.checkmark2 {
	width: 38px;
	height: 38px;
	display: flex;
}

.m-combobox-item.itSelected .checkmark2 div {
	width: 5px;
	height: 10px;
	border: solid #fff;
	border-width: 0 2px 2px 0;
	margin: 12px auto;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
.m-combobox .m-combobox-data {
	position: absolute;
	top: 39px;
	background-color: #ffffff;
	width: 100%;
	z-index: 3;
	border-radius: 5px;
	border: 1px solid #bbb;
}

.m-combobox.end .m-combobox-data {
	top: -120px;
}

.isHide {
	display: none;
}
.reverse {
	transform: rotate(180deg);
}

.m-combobox .m-combobox-data .m-combobox-item {
	display: flex;
	height: 38px;
	width: 100%;
	line-height: 38px;
	border-radius: 4px;
}

.m-combobox .m-combobox-data .m-combobox-item .textCbx {
	width: calc(100% - 38px);
}

.m-combobox .m-combobox-data .m-combobox-item:hover {
	background-color: #e9ebee;
	cursor: pointer;
}

.m-combobox .m-combobox-data .itSelected {
	background-color: #019160 !important;
	color: #ffffff;
}
</style>
