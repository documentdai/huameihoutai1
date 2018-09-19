<template>
  <div class="course-details-list">
    <p>
      <el-button type="primary">
        <router-link to="/course-new">
          新增课程
        </router-link>
        </el-button>
      <el-button type="primary">删除课程</el-button>
    </p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        v-for="(item,index) in titles"
        :key="index"
        :prop="item.id"
        :label="item.title"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini">
            <router-link :to='`/course-details-list/${scope.row.id}`'>
              详情
            </router-link>
            </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'course-details-list',
  data () {
    return {
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
        { id: '7', title: '课程关注' }
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
  },
  methods: {

  }
}
</script>

<style lang="less">

</style>
