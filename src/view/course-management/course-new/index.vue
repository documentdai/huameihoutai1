<template>
  <div class="course-new">
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="课程名"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="课程编号"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="课程类型"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="授课老师"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p class="course-img">
      <span>课程图片</span><img src="">
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="课程标签"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="课程描述"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input type="textarea" :rows="4" placeholder="课程简介" v-model="textarea"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-select v-model="value">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </p>
    <p>
      <el-row>
        <el-col :span="12" :offset="2">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="排序号，越大越往前"></el-input>
          </div>
        </el-col>
      </el-row>
    </p>
  </div>
</template>

<script>
export default {
  name: 'course-new',
  data () {
    return {
      input: '',
      textarea: '',
      value: '上架',
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
