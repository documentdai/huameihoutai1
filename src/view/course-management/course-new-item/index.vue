<template>
  <div class="course-new-item">
    <p>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="课程名"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="排序号，越大越往前"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-select v-model="value">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </p>
    <p>
      <el-radio v-model="radio" label="1">音频</el-radio>
      <el-radio v-model="radio" label="2">视频</el-radio>
    </p>
    <p class="course-new-item-video">
      <span>上传视频</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'course-new-item',
  data () {
    return {
      input: '',
      value: '上架',
      radio: '1',
      options: [
        {
          value: '选项1',
          label: '上架'
        },
        {
          value: '选项2',
          label: '下架'
        }
      ]
    }
  }
}
</script>

<style>

</style>
