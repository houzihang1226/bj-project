<template>
  <div class="content">
    <div class="cont" v-if="show">
      <!-- 搜索按钮 -->
      <div class="btn_main">
        <el-button type="primary">搜索</el-button>
        <el-button type="primary" @click="show = !show">新增</el-button>
      </div>
      <!-- 搜索框 -->
      <div class="tab_seach">
        <el-form ref="form" :model="form" label-width="70px">
          <el-form-item label="名称:">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="链接:">
            <el-select v-model="form.region" placeholder="请输入">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 一共多少数据 -->
      <div class="common">
        <span style="color:#656565">共搜索到 {{922}} 条数据</span>
      </div>
      <!-- 按钮组 -->
      <div class="btnList">
        <el-button type="primary">批量上移</el-button>
        <el-button type="primary">批量下移</el-button>
      </div>
      <!-- table -->
      <div class="tab_main">
        <el-table
          border
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" header-align="center" width="55"></el-table-column>
          <el-table-column label="封面图" header-align="center" width="140">
            <template slot-scope="scope">
              <el-image src="../../../assets/img/logo.png">
                <div slot="error">
                  <img src="../../../assets/img/logo.png" alt />
                </div>
              </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="名称" header-align="center" width="140"></el-table-column>
          <el-table-column prop="name" label="简介" header-align="center" width="473"></el-table-column>
          <el-table-column prop="name" label="链接" header-align="center" width="331"></el-table-column>
          <el-table-column prop="name" label="访问次数" header-align="center" width="140"></el-table-column>
          <el-table-column prop="name" label="收藏人数" header-align="center" width="140"></el-table-column>
          <el-table-column
            prop="address"
            label="操作"
            header-align="center"
            width="140"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <el-dropdown>
                <span class="el-dropdown-link">操作</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>编辑</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                  <el-dropdown-item>置顶</el-dropdown-item>
                  <el-dropdown-item>上移一位</el-dropdown-item>
                  <el-dropdown-item>下移一位</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <add-form v-else :show = 'show' @showForm='showForm'></add-form>
  </div>
</template>

<script>
import addForm from '@/components/add'
export default {
  data () {
    return {
      show: true,
      form: {
        name: '',
        region: ''
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎'
        }
      ],
      multipleSelection: []
    }
  },
  components: {
    addForm
  },
  methods: {
    showForm (e) {
      this.show = !e
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  .cont {
    position: relative;
    img {
      width: 60px;
      height: 60px;
    }

    .btn_main {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      button {
        margin: 0;
        border-radius: 0;
        color: #ffffff;
        background-color: #009dff;
        border-color: #009dff;
        &:hover {
          background-color: #66b1ff;
          border-color: #66b1ff;
        }
        &:nth-child(2) {
          margin-top: 20px;
        }
      }
    }

    .el-form {
      display: flex;
    }
    .common,
    .btnList,
    .tab_main {
      padding-left: 30px;
    }
    .btnList {
      margin-top: 20px;
      button {
        border-radius: 0;
        color: #009dff;
        background-color: #fff;
        border-color: #009dff;
        &:hover {
          background-color: #009dff;
          color: #fff;
        }
      }
    }
    .tab_main {
      margin-top: 20px;
      text-align: center;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>



