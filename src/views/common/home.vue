<template>
  <div class="mod-home" style="height:100%">
    <div class="user_profile" v-for="item in homeMain" :key="item.nm">
      <!-- 头部 -->
      <header class="header-text">{{item.nm}}</header>
      <!-- 内容 -->
      <main class="main-txt">
        <div class="txt_box" v-for=" (idx,index) in item.child" :key="index">
          <span style="color:#FF4545;">{{idx.num}}</span>
          <span style="color:#999999">{{idx.txt}}</span>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeMain: [
        {
          nm: '用户概括',
          child: [
            {
              num: 10,
              txt: '今日新增'
            },
            {
              num: 18,
              txt: '昨日新增'
            },
            {
              num: 24,
              txt: '认证待审核'
            },
            {
              num: 786,
              txt: 'VIP用户数'
            },
            {
              num: 6886,
              txt: '用户总数'
            }
          ]
        },
        {
          nm: '舆情概览',
          child: [
            {
              num: 12,
              txt: '今日新增'
            },
            {
              num: 26,
              txt: '昨日新增'
            },
            {
              num: 36,
              txt: '待审核'
            },
            {
              num: 8000,
              txt: '舆情总数'
            },
            {
              num: '',
              txt: ''
            }
          ]
        },
        {
          nm: '报告概览',
          child: [
            {
              num: 21,
              txt: '今日新增'
            },
            {
              num: 14,
              txt: '昨日新增'
            },
            {
              num: 16,
              txt: '认证待审核'
            },
            {
              num: 1263,
              txt: '报告总数'
            },
            {
              num: '',
              txt: ''
            }
          ]
        },
        {
          nm: '资讯概览',
          child: [
            {
              num: 12,
              txt: '今日新增'
            },
            {
              num: 32,
              txt: '昨日新增'
            },
            {
              num: 28,
              txt: '待审核'
            },
            {
              num: 3668,
              txt: '资讯总数'
            },
            {
              num: '',
              txt: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mod-home {
  line-height: 1.5;
  &:last-child{
    margin-bottom: 82px;
  }
  &:first-child{
    margin-top: 10px;
  }
}
.user_profile {
  width: 1200px;
  height: 200px;
  margin-left: 10px;
  margin-top: 21px;
  border: 1px solid #eee;
  .header-text {
    height: 50px;
    background-color: #f6faff;
    padding-left: 30px;
    line-height: 50px;
  }
  .main-txt {
    height: 150px;
    display: flex;
    .txt_box {
      // background-color: blue;
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 16px;
      font-family:PingFang SC;
      span:nth-child(1) {
        font-size: 30px;
      }
    }
  }
}
</style>

