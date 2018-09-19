
<template>
    <div class="home">
            <el-container style=" border: 1px solid #eee">
                <el-aside width=200px style="background-color: rgb(238, 241, 246)">
                    <el-header></el-header>
                    <el-row :gutter="20">
                        <el-col :span="20" :offset="2">
                            <div class="grid-content bg-purple">
                                <el-input v-model="input" placeholder="Search"></el-input>
                            </div>
                        </el-col>
                    </el-row>

                    <el-menu
                        @select="menuSelect"
                        :router="true"
                        :default-active="checked"
                    >
                        <el-submenu
                            v-for="route in routes"
                            v-if="route.children"
                            :key="route.path"
                            :index="route.path"
                        >
                            <template slot="title">{{route.meta.title}}</template>
                            <el-menu-item-group
                                style="background-color: rgb(238, 241, 246)"
                            >
                                <el-menu-item
                                    v-show="!item.meta.hide"
                                    v-for="item in route.children"
                                    :key="item.path"
                                    :index="item.path"
                                >
                                    {{item.meta.title}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item
                            v-else
                            v-show="!route.meta.hide"
                            :key="route.path"
                            :index="route.path"
                        >
                            {{route.meta.title}}
                        </el-menu-item>
                    </el-menu>
                </el-aside>

                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
    </div>

</template>
<script>
import routes from '@/router/routes'
export default {
  name: 'home',
  props: {},
  data () {
    return {
      routes,
      checked: '',
      input: ''
    }
  },
  created () {
    this.checked = this.$route.path
  },
  updated () {
    if (this.$route.path !== this.checked) {
      this.checked = this.$route.path
    }
  },
  methods: {
    menuSelect (index) {
      this.checked = index
    }
  }

}
</script>
<style>

</style>
