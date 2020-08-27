<template>
	<div class="content">
		<el-container>
			<el-header style="height:120px">
				<div class="logoImg"><img src="../../assets/img/logo.png" alt /></div>
			</el-header>
			<main>
				<div class="bg">
							<div class="from_box">
					<h2 style="font-width:400">账号登录</h2>
					<el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
						<el-form-item prop="userName"><el-input v-model="dataForm.userName" placeholder="请输入登录账号"></el-input></el-form-item>
						<el-form-item prop="password"><el-input v-model="dataForm.password" type="password" placeholder="请输入密码"></el-input></el-form-item>
						<el-form-item prop="captcha">
							<el-row :gutter="20">
								<el-col :span="14"><el-input v-model="dataForm.captcha" placeholder="请输入附加码"></el-input></el-col>
								<el-col :span="10" class="login-captcha"><img :src="captchaPath" @click="getCaptcha()" alt /></el-col>
							</el-row>
						</el-form-item>
						<el-form-item prop="code">
							<el-row :gutter="20">
								<el-col :span="14"><el-input v-model="dataForm.code" placeholder="请输入验证码"></el-input></el-col>
								<el-col :span="10" class="login-captcha"><el-button style="margin:0" class="btn" type="primary">点击获取验证码</el-button></el-col>
							</el-row>
						</el-form-item>
						<el-form-item><el-button class="login-btn-submit" type="primary" @click="dataFormSubmit()">登录</el-button></el-form-item>
					</el-form>
				</div>
				</div>
		
			</main>
			<el-footer style="height:120px" class="footer-text">Copyright©2008 - 2020 庆瑞霖全球舆情监测分析系统 All Rights Reserved</el-footer>
		</el-container>
	</div>
</template>

<script>
import { getUUID } from '@/utils'
import { login } from '@/api'
export default {
  data () {
    return {
      dataForm: {
        userName: '',
        password: '',
        uuid: '',
        captcha: ''
      },
      dataRule: {
        userName: [
          { required: true, message: '帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      captchaPath: ''
    }
  },
  created () {
    this.getCaptcha()
  },
  methods: {
    // 提交表单
    dataFormSubmit () {
      console.log('111111111111111111111111111111')
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          let params = {
            username: this.dataForm.userName,
            password: this.dataForm.password,
            uuid: this.dataForm.uuid,
            captcha: this.dataForm.captcha
          }
          login(params).then(({ data }) => {
            if (data && data.code === 0) {
              this.$cookie.set('token', data.token)
              this.$router.replace({ name: 'home' })
            } else {
              this.getCaptcha()
              this.$message.error(data.msg)
            }
          })
        }
      })
    },
    // 获取验证码
    getCaptcha () {
      this.dataForm.uuid = getUUID()
      this.captchaPath = this.$http.adornUrl(
        `/captcha.jpg?uuid=${this.dataForm.uuid}`
      )
    }
  }
}
</script>

<style lang="scss" scoped>
// .site-wrapper.site-page--login {
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: rgba(38, 50, 56, .6);
//   overflow: hidden;
//   &:before {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     content: "";
//     background-image: url(~@/assets/img/login_bg.jpg);
//     background-size: cover;
//   }
//   .site-content__wrapper {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     padding: 0;
//     margin: 0;
//     overflow-x: hidden;
//     overflow-y: auto;
//     background-color: transparent;
//   }
//   .site-content {
//     min-height: 100%;
//     padding: 30px 500px 30px 30px;
//   }
//   .brand-info {
//     margin: 220px 100px 0 90px;
//     color: #fff;
//   }
//   .brand-info__text {
//     margin:  0 0 22px 0;
//     font-size: 48px;
//     font-weight: 400;
//     text-transform : uppercase;
//   }
//   .brand-info__intro {
//     margin: 10px 0;
//     font-size: 16px;
//     line-height: 1.58;
//     opacity: .6;
//   }
//   .login-main {
//     position: absolute;
//     top: 0;
//     right: 0;
//     padding: 150px 60px 180px;
//     width: 470px;
//     min-height: 100%;
//     background-color: #fff;
//   }
//   .login-title {
//     font-size: 16px;
//   }
//   .login-captcha {
//     overflow: hidden;
//     > img {
//       width: 100%;
//       cursor: pointer;
//     }
//   }
//   .login-btn-submit {
//     width: 100%;
//     margin-top: 38px;
//   }
// }
.content {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
	padding: 0;
	background: rgba(255, 255, 255, 1);
	color: #333;
	// text-align: center;
	line-height: 120px;
}
.footer-text {
  text-align: center;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.login-captcha {
  overflow: hidden;
  > img {
    width: 100%;
    cursor: pointer;
  }
}

main {
	.bg {
		height: 840px;
		background: url(../../assets/img/login_bg.png) no-repeat center;
		position: relative;
	}
	.from_box {
		position: absolute;
		width: 450px;
		// height: 500px;
		top: 50%;
		right: 8%;
		transform: translateY(-50%);
		background-color: #fff;
		padding: 50px 40px;
	}
}
.logoImg {
	width: 100%;
	height: 100%;
	img {
		width: 419px;
		height: 71px;
		margin-left: 320px;
	}
}
.el-button {
  width: 100%;
  margin-top: 20px;
  background: #409eff;
  border: 1px solid #409eff;
  &:hover {
    background: #66b1ff;
    border: 1px solid #66b1ff;
  }
}
.btn {
  background: #f6f6f6;
  border: 1px solid #dddd;
  color: #000;
  &:hover {
    background-color: #f4f4f4;
    border: 1px solid #dddd;
  }
}
</style>
