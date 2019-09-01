<template>
  <div>
    <div class="name-card">
      <div class="bg">
        <img src="@/assets/img/author.jpg" alt="">
      </div>
      <h2>张生</h2>
      <p>孤光自照，肝胆皆冰雪</p>
      <p>Ronnie，江西赣州人，某上市公司全栈工程师</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name-card {
  background: #fff;
  color: #454c52;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 350px;
  .bg {
    height: 120px;
    margin-bottom: 50px;
    position: relative;
    background-image: linear-gradient(to bottom, #454c52, #a8a8a8);
    img {
      width: 130px;
      height: 130px;
      border: 3px solid #fff;
      border-radius: 50%;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      bottom: -40px;
      transition: all 2s;
      &:hover {
        transform: rotate(360deg);
      }
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  p {
    color: #909090;
    padding: 0 20px 20px;
    text-align: center;
  }
}
</style>