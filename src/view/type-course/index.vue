<template>
  <div class="type-course">
    <p>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">修改</el-button>
    </p>

    <p>
      <el-tree :data="data"  @node-click="handleNodeClick"></el-tree>
    </p>

  </div>
</template>

<script>
export default {
  name: 'type-course',
  props: [],
  data () {
    return {
      data: [
        {
          label: '课程',
          children: [
            {
              label: '0~3岁'
            },
            {
              label: '3~6岁'
            },
            {
              label: '6~10岁'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

<style>
</style>
