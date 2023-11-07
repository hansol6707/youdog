<template>
  <div class="rec-container">
    <div class="wrap">
      <div class="rec-page">
        <div class="rec-boxs">
          <div class="rec-box">
            <img src="../assets/rec1.png" />
            <div class="rec-text">
              <span>@dog.hotple</span>
              <p>
                애견핫플 | 애견동반<br />
                카페 식당 숙소 <br />모든정보❣️
              </p>
            </div>
          </div>

          <div class="rec-box">
            <img src="../assets/rec2.png" />
            <div class="rec-text">
              <span>@nagaza.app</span>
              <p>
                애견핫플 | 애견동반<br />
                카페 식당 숙소 <br />모든정보❣️
              </p>
            </div>
          </div>

          <div class="rec-box">
            <img src="../assets/rec3.png" />
            <div class="rec-text">
              <span>@geanolja_official</span>
              <p>
                애견핫플 | 애견동반<br />
                카페 식당 숙소 <br />모든정보❣️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/style.css";
.rec-container {
  width: 100%;
  padding: 100px 0;
  position: relative;
  background-color: var(--white-color);
}
.rec-container .rec-boxs {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -30%);
}
.rec-container .rec-page {
  width: 1200px;
  height: 600px;
  background: url(../assets/recpage.jpg);
  background-size: cover;
  margin: auto;
}
.rec-box {
  width: 200px;
  margin: 0 50px;
  text-align: center;
}
.rec-box > img {
  width: 140px;
  height: 140px;
  margin-bottom: 60px;
}
.rec-text {
  background-color: #efefb9;
  padding: 15px;
  border-radius: 30px;
  line-height: 20px;
  position: relative;
  letter-spacing: 0;
}
.rec-text::after {
  content: "";
  width: 0;
  height: 0;
  border-bottom: 25px solid #efefb9;
  border-top: 25px solid transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  position: absolute;
  top: -49px;
  left: 50%;
  transform: translateX(-50%);
}
.rec-text > span {
  display: block;
  margin-bottom: 10px;
  color: var(--text-color);
}
</style>
