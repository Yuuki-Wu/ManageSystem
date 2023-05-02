<template>
	<div>
		<div class="container">
			<el-table :data="userData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="userId" label="用户ID" width="55" align="center"></el-table-column>
				<el-table-column prop="weight" label="体重"></el-table-column>
				<el-table-column prop="height" label="身高"></el-table-column>
				<el-table-column prop="userRegisterTime" label="注册时间"></el-table-column>
				<el-table-column prop="info" label="用户反馈" align="center">
				</el-table-column>
			</el-table>	
		</div>
	</div>
</template>

<script setup lang="ts" name="basetable">
import { ref, reactive } from 'vue';
import { getUserInfo } from '../api/get-user-info';
const query = reactive({
	address: '',
	name: '',
	pageIndex: 1,
	pageSize: 10
});
interface Item{
	userId: string;
	weight: string;
	height: any;
	userRegisterTime: any;
	info: string;
	img: string;
}
const userData = ref<Item[]>([]);
const getInfo = () => {
	getUserInfo().then(res => {
		userData.value = res.data;	
	})
	 console.log(JSON.parse(JSON.stringify(userData.value)));
}
getInfo();
// 查询操作
const handleSearch = () => {
	getInfo();
};
</script>

<style scoped>
.table {
	width: 100%;
	font-size: 14px;
}

</style>
