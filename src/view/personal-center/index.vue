<template>
    <div class="personal-center">
        <p>
        <el-row :gutter="20">
            <el-col :span="8" :offset="4">
                <div class="grid-content bg-purple personal-img">
                   <img src="../../images/01.jpg" alt="头像">
                </div>
            </el-col>
        </el-row>
        </p>
        <p>
           <el-row :gutter="20">
            <el-col :span="8" :offset="4">
                <div class="grid-content bg-purple">
                    <span>张文 语文</span>
                </div>
            </el-col>
            <el-col :span="4" >
                <div class="grid-content bg-purple">
                    <el-button type="primary">绑定微信</el-button>
                </div>
            </el-col>
        </el-row>
        </p>
        <p>
        <el-row :gutter="20">
            <el-col :span="8" :offset="4">
                <div class="grid-content bg-purple">
                    <el-input v-model="input" placeholder="擅长领域以，隔开"></el-input>
                </div>
            </el-col>
        </el-row>
        </p>

    </div>
</template>

<script>
export default {
  name: 'personal-center',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less">
.personal-center{
    p{
       .personal-img{
        img{
            width: 100px;
            height: 100px;
            border: 1px solid gray;
            border-radius: 50%;
        }
    }
    }

}
</style>
