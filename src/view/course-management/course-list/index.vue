<template>
  <div class="course-list">
    <el-row :span="16" :offset='2'>
      <el-col :span="3" :offset="1">
        <div class="grid-content bg-purple-dark">
          <img src="../../../images/01.jpg">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">
          <div>
            <p>课程名</p>
            <p>课程详情</p>
          </div>

        </div>
      </el-col>
      <el-col :span="1" :offset="5">
        <div class="grid-content bg-purple-dark">
          <div>
            <el-button type="primary">编辑</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <p>
      <el-button type="primary">
        <router-link :to='`/course-new-item/${id}`'>
          添加课程
        </router-link>
      </el-button>
    </p>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="名称" width="400" class="name-img">
        <template slot-scope="scope">
          <img src="../../../images/01.jpg">
          <span class="time">
            <p>123</p>
            <p>创建时间：123</p>
          </span>
  </template>
  </el-table-column>

  <el-table-column label="排序（数字越大，显示越靠前）">
    <template slot-scope="scope">
      <input type="text">
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">确定</el-button>
    </template>
  </el-table-column>
  <el-table-column prop="address" label="状态">
  </el-table-column>
  <el-table-column label="操作）">
    <template slot-scope="scope">
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">编辑</el-button> |
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">下架</el-button>
    </template>
  </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'course-list',
  data () {
    return {
      id: null,
      input: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '在线'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '在线'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '在线'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '在线'
        }
      ]
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style lang="less">
.course-list {
  .el-row {
    border: 1px solid black;
    height: 200px;
    .grid-content {
      img {
        padding-top: 50px;
        width: 150px;
        height: 80px;
      }
    }
  }
  .el-row {
    .grid-content {
      div {
        padding-top: 50px;
      }
    }
  }
  .el-table {
    table {
      tr {
        td {
          .cell {
            img {
              width: 100px;
              height: 60px;
            }
           .time{
             position: absolute;
             top:0px;
             left: 24%;
           }
          }
        }
      }
    }
  }
}
</style>
