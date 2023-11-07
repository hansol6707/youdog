<template>
  <div class="event-container">
    <div class="wrap">
      <div class="title"><h1>NEW EVENT</h1></div>
      <div class="event-box">
        <div class="event-img">
          <div class="event-txt">
            <h1>GROW GREEN<br />SHARE GREEN</h1>
            <p>나의 소중한 반려견과 함께하는 GREEN!한 식생활</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>강아지 건강에<br />좋은 과일</h1>
            <p>강아지 건강에 좋은<br />과일을 알아봅시다</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>WALK<br />with your dog</h1>
            <p>반려인들의 산책 이벤트</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>캠핑<br />아웃도어</h1>
            <p>
              초보자들을 위한 반려견<br />
              캠핑가이드
            </p>
            <a href="#">&#62;자세히 보기</a>
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
.event-container {
  width: 100%;
  padding: 120px 0;
}

.event-container > .wrap > .title > h1 {
  color: #e29658;
  font-size: 40px;
  font-family: var(--font-title);
  text-align: center;
  margin-bottom: 30px;
}
.event-container > .wrap .event-box {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.event-container > .wrap .event-img {
  width: 270px;
  height: 230px;
  outline: 5px dashed rgba(83, 83, 83, 0.7);
  background-size: cover;
}
.event-container > .wrap .event-img:nth-child(1) {
  background-image: url(../assets/event1.png);
}
.event-container > .wrap .event-img:nth-child(2) {
  background-image: url(../assets/event2.png);
}
.event-container > .wrap .event-img:nth-child(3) {
  background-image: url(../assets/event3.png);
}
.event-container > .wrap .event-img:nth-child(4) {
  background-image: url(../assets/event4.png);
}

.event-container > .wrap .event-txt {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 40px 20px;
}
.event-container > .wrap .event-txt > h1 {
  font-size: 26px;
  letter-spacing: 0.1rem;
  line-height: 2rem;
}
.event-container > .wrap .event-txt > p {
  display: block;
  margin: 15px 0;
  font-size: 16px;
}
.event-container > .wrap .event-txt {
  display: none;
}
.event-img:nth-child(1):hover > .event-txt,
.event-img:nth-child(2):hover > .event-txt,
.event-img:nth-child(3):hover > .event-txt,
.event-img:nth-child(4):hover > .event-txt {
  display: block;
}
</style>
