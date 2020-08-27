<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand" @click="$router.push({ name: 'home' })">
        <a class="site-navbar__brand-lg" style="width:100%;height:100%" href="javascript:;">
          <img src="../assets/img/home_logo.png" width="145px" height="40px" alt />
        </a>
        <a class="site-navbar__brand-mini" href="javascript:;">人人</a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <el-breadcrumb separator="/" replace class="site-navbar__menu">
        <el-breadcrumb-item :to="{ path: '/' }" @click.native="removeClick">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="item in mainTabs"
          :key="item.name"
          :to="{ path: item.path }"
        >{{ item.title }}</el-breadcrumb-item>
        <!-- <el-breadcrumb-item  :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      </el-breadcrumb>
      <el-menu class="site-navbar__menu site-navbar__menu--right" mode="horizontal">
        <el-menu-item class="site-navbar__avatar" index="1">
          <el-dropdown :show-timeout="0" placement="bottom">
            <span class="el-dropdown-link">
              <img src="~@/assets/img/avatar.png" :alt="userName" />
              {{ userName }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>
  </nav>
</template>

<script>
import UpdatePassword from './main-navbar-update-password'
import { clearLoginInfo } from '@/utils'
export default {
  data () {
    return {
      updatePassowrdVisible: false
    }
  },
  components: {
    UpdatePassword
  },
  computed: {
    navbarLayoutType: {
      get () {
        return this.$store.state.common.navbarLayoutType
      }
    },
    // sidebarFold: {
    //   get () { return this.$store.state.common.sidebarFold },
    //   set (val) { this.$store.commit('common/updateSidebarFold', val) }
    // },
    mainTabs: {
      get () {
        return this.$store.state.common.mainTabs
      },
      set (val) {
        this.$store.commit('common/updateMainTabs', val)
      }
    },
    userName: {
      get () {
        return this.$store.state.user.name
      }
    }
  },
  methods: {
    removeClick () {
      console.log('111')
      this.$store.commit('common/updateMainTabs', [])
    },
    // 修改密码
    updatePasswordHandle () {
      this.updatePassowrdVisible = true
      this.$nextTick(() => {
        this.$refs.updatePassowrd.init()
      })
    },
    // 退出
    logoutHandle () {
      this.$confirm(`确定进行[退出]操作?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl('/sys/logout'),
            method: 'post',
            data: this.$http.adornData()
          }).then(({ data }) => {
            if (data && data.code === 0) {
              clearLoginInfo()
              this.$router.push({ name: 'login' })
            }
          })
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.site-navbar__menu {
  line-height: 50px;
  margin-left: 24px;
}
.site-navbar {
  background-color: #263238;
  // img{
  //   width: 145px;
  //   height: 40px;
  // }
}
.bread {
  line-height: 50px;
}
.site-navbar__brand {
  padding-left: 28px;
  text-align: left;
}
</style>
