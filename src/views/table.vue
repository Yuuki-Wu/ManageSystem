<template>
	<div>
		<div class="container">
			<el-table :data="userData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
				<el-table-column prop="uIndex" label="处理索引"></el-table-column>
				<el-table-column prop="userId" label="用户ID" width="55" align="center"></el-table-column>
				<el-table-column prop="weight" label="体重"></el-table-column>
				<el-table-column prop="height" label="身高"></el-table-column>
				<el-table-column prop="userRegisterTime" label="注册时间"></el-table-column>
				<el-table-column prop="uploadTime" label="反馈时间"></el-table-column>
				<el-table-column prop="state" label="状态"></el-table-column>
				<el-table-column prop="info" label="用户反馈" align="center">
				</el-table-column>
				<el-table-column prop="operate" label="操作">
					<template #default="scope">
						<el-button text :icon="Edit" @click="handleEdit(scope.row.uIndex, scope.row.state)" v-permiss="15">
							编辑
						</el-button>
						<el-button text :icon="Delete" class="red" @click="handleDelete(scope.row.uIndex, scope.row.state)" v-permiss="16">
							删除
						</el-button>
					</template>			
				</el-table-column>
			</el-table>	
		</div>
	</div>
</template>

<script setup lang="ts" name="basetable">
import { ref, reactive } from 'vue';
import { getUserInfo } from '../api/get-user-info';
import { Delete, Edit } from '@element-plus/icons-vue';
import { deleteContact } from '../api/delete-contact'; 
import { editContact } from '../api/edit-contact';
interface Item{
	uIndex: any;
	userId: string;
	weight: string;
	height: any;
	userRegisterTime: any;
	uploadTime: any;
	info: string;
	img: string;
	state: any;
	operate: boolean;
}
const userData = ref<Item[]>([]);
const getInfo = () => {
	getUserInfo().then(res => {
		userData.value = res.data;	
		console.log(res.data)
	})
	 console.log(JSON.parse(JSON.stringify(userData)));
}
getInfo();
// 查询操作
const handleDelete = (index: any,state: any) => {
	if (state === "已处理") {
		deleteContact(index);
		location.reload()
	}
	
};
const handleEdit = (index: any,state: any) => {
	if (state === "未处理") {
		editContact(index);
		location.reload()
	}
	
}
</script>

<style scoped>
.table {
	width: 100%;
	font-size: 14px;
}

</style>
