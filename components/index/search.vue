<template>
  <el-row :gutter="0" class="search">
    <el-col :span="4">
      <div class="logo" @click="toHome">
        <img src="@/assets/logo.png" alt="">
      </div>
    </el-col>
    <el-col :span="12" @mouseleave.native="selected = ''" class="tab">
      <ul :class="{'menu':true,'over': selected}">
        <li :class="selected == item ? 'selected' : ''" v-for="(item,index) in menus" @mouseover="menuClick(item)"
          :key="index">{{item}}</li>
      </ul>

      <div class="main">
        <transition name="fade" v-for="(item,index) in mains" :key="index">
          <ul class="main-item" v-show="item.menu == selected">
            <li v-for="(childItem,childIndex) in item.childMenu" :key="childIndex" @click="changeType(childItem.menu)">
              <img :src="childItem.img" alt="">
              <div>{{childItem.menu}}</div>
            </li>
          </ul>
        </transition>
      </div>
    </el-col>
    <el-col :span="6" class="wrapper">
      <el-input v-model="search" placeholder="搜索" />
      <button class="el-button el-button--primary"><i class="el-icon-search" /></button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      selected: '',
      menus: ['前端', '后端', 'DB', '工具'],
      mains: [
        {          menu: '前端', childMenu: [
            { menu: 'Javascript', img: require('@/assets/img/logo_javascript.png') },
            { menu: 'Css', img: require('@/assets/img/logo_css.png') },
            { menu: 'Html', img: require('@/assets/img/logo_html.png') },
            { menu: 'Vue', img: require('@/assets/img/logo_vue.png') }
          ]
        },
        {          menu: '后端', childMenu: [
            { menu: 'Java', img: require('@/assets/img/logo_java.png') },
            { menu: 'Python', img: require('@/assets/img/logo_python.png') },
            { menu: 'Go', img: require('@/assets/img/logo_go.png') }
          ]
        },
        {          menu: 'DB', childMenu: [
            { menu: 'Sql Server', img: require('@/assets/img/logo_sqlserver.png') },
            { menu: 'MySql', img: require('@/assets/img/logo_mysql.png') },
            { menu: 'MongoDB', img: require('@/assets/img/logo_mongodb.png') }
          ]
        },
        {          menu: '工具', childMenu: [
            { menu: 'PhotoShop', img: require('@/assets/img/logo_ps.png') },
            { menu: 'Git', img: require('@/assets/img/logo_git.png') }
          ]
        }
      ]
    }
  },
  methods: {
    menuClick (menu) {
      this.selected = menu;
    },
    changeType (type) {
      type = type || '';
      this.$store.dispatch('change_type', type);
      this.$router.push('/');
      this.selected = '';
    },
    toHome () {
      this.$store.dispatch('change_type', '');
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scope>
.fade-enter-active {
  transition: opacity 1.5s; //类名：隐藏到显示过程所需要的时间
}
.fade-enter {
  // 类名:初始化状态
  opacity: 0;
}
.search {
  max-width: 1226px;
  min-width: 420px;
  width: 100%;
  padding: 0;
  margin: 30px auto;
  .logo {
    width: 150px;
    cursor: pointer;
    display: block;
    img {
      width: 150px;
    }
  }
  .tab {
    position: relative;
    .menu {
      display: flex;
      padding: 10px;
      position: relative;
      &.over::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #895022;
        left: 0;
        bottom: -12px;
        z-index: 98;
      }
      li {
        font-weight: 600;
        font-size: 20px;
        margin: 0 25px;
        cursor: default;
        position: relative;
        color: #222;
        &.selected {
          color: #895022;
          transition: all 0.6s;
          transform: scale(1.05);
          &::after {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            left: 0;
            right: 0;
            margin: auto;
            bottom: -28px;
            z-index: 99;
            background: #fff;
            border-left: 2px solid #895022;
            border-top: 2px solid #895022;
            transform: rotate(45deg);
          }
        }
      }
    }

    .main {
      padding: 5px;
      width: 100%;
      position: absolute;
      border-bottom: 2px solid rgba(125, 71, 33, 0.2);
      z-index: 97;
      background: #fff;
      .main-item {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        li {
          text-align: center;
          cursor: pointer;
          transition: 0.8s;
          &:hover {
            color: #895022;
            transform: scale(1.05);
            img {
              box-shadow: 0 0 2px rgba(125, 71, 33, 0.5);
            }
          }
          img {
            width: 50px;
            margin: 25px auto;
            margin-bottom: 10px;
            border-radius: 10px;
          }
          div {
            font-size: 16px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .wrapper {
    border: 1px solid #895022;
    // float: right;
    border-radius: 4px;
    width: 300px;
    right: 0;
    box-sizing: border-box;
    position: absolute;
    white-space: nowrap;
    .el-input {
      width: 210px;
      input {
        border: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    .el-button {
      width: 88px;
      border: none;
      background: #895022;
      font-size: 16px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      vertical-align: -1px;
      i {
        font-weight: bold;
      }
    }
  }
}
</style>