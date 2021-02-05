<template>
	<BaseCombobox
		:faCaretUp="faCaretUp"
		:faCaretDown="faCaretDown"
		v-model="itemSelected"
		@setItemSelected="setItemSelected"
		:itemSelected="itemSelected"
		:category="category"
		:end="end"
		:header="header"
		v-bind:content="departments"
	></BaseCombobox>
</template>

<script>
import * as axios from "axios";
import BaseCombobox from "../base/BaseCombobox.vue";
export default {
	props: ["departmentId2", "end", "faCaretUp", "faCaretDown"],

	async created() {
		const response = await axios.get(
			"https://localhost:44349/api/Departments/"
		);
		this.departments = response.data;
	},
	mounted() {},
	methods: {
		setItemSelected(data) {
			this.$emit("setItemSelected", data);
		},
	},
	computed: {
		itemSelected: function() {
			return { departmentId: this.departmentId2 };
		},
	},

	data() {
		return {
			departments: [],
			category: "department",
			header: "Tất cả phòng ban",
		};
	},
	components: {
		BaseCombobox,
	},
};
</script>

<style></style>
