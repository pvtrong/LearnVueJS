<template>
	<div class="m-radio">
		<div class="m-label">{{ header }}</div>
		<div class="m-radio-group" id="rdGender">
			<div
				v-for="item in content"
				:key="item.index"
				class="m-radio-item"
				:class="{ 'mg-left-10px': item.index > 1 }"
			>
				<input
					type="radio"
					:fieldname="category"
					:value="item.value"
					:name="category"
					v-if="itemSelected[`${category}Id`] === item.value"
					checked=""
				/>
				<input
					type="radio"
					:fieldname="category"
					:value="item.value"
					:name="category"
					v-else
				/>
				<label for="rdMale">{{ item[category + "Name"] }}</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["header", "content", "itemSelected", "category"],
	computed: {},
	methods: {
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
			this.showCombobox();
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
.m-radio-group {
	display: flex;
	height: 40px;
}

.m-radio-group .m-radio-item {
	display: flex;
	align-items: center;
}

input[type="radio"]:after {
	width: 18px;
	height: 18px;
	border-radius: 18px;
	position: relative;
	/*background-color: white;*/
	background-size: contain;
	content: "";
	display: inline-block;
	visibility: visible;
	/*border: 1px solid #BBBBBB;*/
	cursor: pointer;
}

input[type="radio"]:checked:after {
	width: 20px;
	height: 20px;
	border-radius: 20px;
	position: relative;
	background-image: url("../../assets/content/icon/radio.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: auto;
	content: "";
	display: inline-block;
	visibility: visible;
	cursor: pointer;
}
</style>
