<template>
    <div class="teacher-management">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-input v-model="input" placeholder="姓名"></el-input>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <el-input v-model="input" placeholder="时间"></el-input>
                </div>
            </el-col>
        </el-row>
        <p>
            <el-button type="primary" size="medium">新增</el-button>
            <el-button type="primary">修改</el-button>
            <el-button type="primary">删除</el-button>
        </p>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column v-for="(item,index) in titles" :key="index" :prop="item.id" :label="item.title">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'teacher-management',
  data () {
    return {
      input: '',
      titles: [
        { id: 'id', title: '缩略图' },
        { id: 'name', title: '课程名' },
        { id: 'amount1', title: '授课老师' },
        { id: 'amount2', title: '课程标签' },
        { id: 'amount3', title: '课程描述' },
        { id: '2', title: '课程类型' },
        { id: '3', title: '课程价格' },
        { id: '4', title: '是否上架' },
        { id: '5', title: '课程创建时间' },
        { id: '7', title: '课程关注' },
        { id: '9', title: '操作' }
      ],
      tableData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }
      ]
    }
  }
}
</script>

<style>
</style>
