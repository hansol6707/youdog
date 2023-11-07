<template>
  <header>
    <div class="hot-news">
      <p>> 가장 인기있는 소식을 확인하세요</p>
    </div>
    <div class="wrap">
      <div class="gnb">
        <ul>
          <li><router-link to="/cafe">카페</router-link></li>
          <li><router-link to="/local">지역별</router-link></li>
          <li><router-link to="/event">이벤트</router-link></li>
        </ul>
        <div class="main-logo">
          <router-link to="/">
            <img src="../assets/logo_black.png" />
          </router-link>
        </div>
        <ul>
          <li><router-link to="/notice">공지사항</router-link></li>
          <li><router-link to="/about">about us</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/style.css";

header {
  width: 100%;
  text-align: center;
  margin: auto;
}
.hot-news {
  height: 40px;
  background-color: var(--main-color);
  line-height: 40px;
  color: #f2f2f2;
  letter-spacing: 0.6rem;
}
.gnb {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 40px;
}
.gnb > ul {
  display: flex;
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color);
  transform: translateY(5px);
}
.gnb > ul > li {
  margin: 0 30px;
}
.gnb > .main-logo {
  margin: 0 100px;
  width: 220px;
}
</style>
