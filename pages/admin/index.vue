<template>
  <div>
    <div class="btns">
      <nuxt-link to='/admin/article?action=add'>
        <el-button type="success" icon="el-icon-plus" plain>新增</el-button>
      </nuxt-link>
      <el-button type="primary" icon="el-icon-edit" plain @click="editArticle" v-show="currentId">编辑</el-button>
      <el-button type="danger" icon="el-icon-delete" plain @click="deleteArticle" v-show="currentId">删除</el-button>
      <el-button @click="refresh" type="info" icon="el-icon-refresh" plain>刷新</el-button>
    </div>
    <el-table ref="singleTable" :data="articleList" highlight-current-row @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column type="index" width="100" label="序号"></el-table-column>
      <el-table-column property="title" label="标题" width="300"></el-table-column>
      <el-table-column property="type" label="类型" width="150"></el-table-column>
      <el-table-column property="introduce" label="简介" width="500"></el-table-column>
      <el-table-column property="date" label="发布日期"></el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  layout: 'admin',
  data () {
    return {
      articleList: [],
      currentRow: null,
      currentId: ''
    }
  },
  created () {
    this.$axios.get('/data/articleList.json').then(rst => {
      this.articleList = rst.data.list;
    })
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange (val) {
      this.currentRow = val;
      if (val) {
        this.currentId = val.id;
      } else {
        this.currentId = ''
      }
    },
    editArticle () {
      if (this.currentId) {
        this.$router.push(`/admin/article/?id=${this.currentId}&action=edit`);
      }
    },
    deleteArticle () {
      if (this.currentId) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'warning',
            message: '已取消删除'
          });
        });
      }
    },
    refresh () {
      this.$refs.singleTable.setCurrentRow();
      this.$message({
        type: 'success',
        message: '刷新成功'
      });
    }
  }
}
</script>


<style lang="scss" scoped>
.btns {
  font-size: 12px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  margin-top: 5px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(69, 76, 82, 0.2);
  }
  button {
    padding: 8px 10px;
  }
}
</style>