<template>
  <div>
    <div class="btns">
      <nuxt-link to='/admin'>
        <el-button type="info" icon="el-icon-close" plain>退出</el-button>
      </nuxt-link>
      <el-button type="primary" icon="el-icon-finished" plain @click="save">保存</el-button>
    </div>
    <el-form :model="article" :rules="rules" ref="articleForm" label-width="100px" label-position="left"
      class="demo-ruleForm">
      <el-row class="form-row">
        <el-col :span="5">
          <el-form-item label="标题" prop="title">
            <el-input v-model="article.title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-form-item label="类型" prop="type">
            <el-select v-model="article.type" placeholder="请选择文章类型">
              <el-option label="Css" value="Css"></el-option>
              <el-option label="Javascript" value="Javascript"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="1">
          <el-form-item label="简介" prop="introduce">
            <el-input v-model="article.introduce" placeholder="文章简介..."></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <mavon-editor v-model="article.content_md" ref=md @save="save" />
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      id: '',
      article: {
        _id: '',
        title: '',
        type: '',
        introduce: '',
        content_md: '',
        content_html: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, message: '长度需大于3', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择文章类型', trigger: 'change' }
        ],
        introduce: [
          { required: true, message: '请输入简介', trigger: 'blur' },
          { min: 10, message: '长度需大于10', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    save (value, render) {
      this.$refs.articleForm.validate((valid) => {
        if (valid) {
          this.$confirm('确定保存?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.article.content_html = render;
            this.$axios.post('http://localhost:3000/article/add', this.article).then(rst => {
              if (rst.status == 200) {
                this.$message({
                  type: 'success',
                  message: rst.data.msg
                });
              } else {
                this.$message({
                  type: 'warning',
                  message: '添加失败！'
                });
              }
            })
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '已取消保存'
            });
          });
        } else {
          return false;
        }

      });
    }
  },
  mounted () {
    this.id = this.$route.query.id || ''
    if (this.id) {
      this.$axios.get(`http://localhost:3000/article/getArticle?id=${this.id}`).then(rst => {
        if (rst.status === 200) {
          this.article = rst.data.article;
        }
      })
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

.form-row {
  padding-left: 20px;
  height: 60px;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;
  .el-textarea__inner {
    resize: none;
  }
}

.markdown-body {
  height: calc(100vh - 245px);
}
</style>