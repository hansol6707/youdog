<template>
  <div class="event-page">
    <div class="wrap">
      <div class="title-box">
        <div class="title"><h1>EVENT</h1></div>
        <div class="sub-title">> 따끈따끈한 NEW 이벤트 소식 &lt;</div>
      </div>
      <div class="event-box">
        <div class="event-img">
          <div class="event-txt">
            <h1>GROW GREEN SHARE GREEN</h1>
            <p>나의 소중한 반려견과 함께하는 GREEN!한 식생활</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>강아지 건강에 좋은 과일</h1>
            <p>강아지 건강에 좋은 과일을 알아봅시다</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>WALK with your dog</h1>
            <p>반려인들의 산책 이벤트</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>캠핑 아웃도어</h1>
            <p>초보자들을 위한 반려견 캠핑가이드</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>댕댕런</h1>
            <p>엄빠와 같이 달려보자!</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>

        <div class="event-img">
          <div class="event-txt">
            <h1>케이펫페어 대구</h1>
            <p>반려인들을 위한 반려동물 관람회 in 대구</p>
            <a href="#">&#62;자세히 보기</a>
          </div>
        </div>
      </div>
      <div class="eventpage-ad">
        <img src="../assets/eventpagead1.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/style.css";
.event-page {
  width: 100%;
  padding: var(--padding-basic) 0;
}
.event-page > .wrap > .title-box{
  text-align: center;
  font-family: var(--font-title);
}
.event-page > .wrap > .title-box > .title > h1 {
  color: var(--accent-color);
  font-size: var(--font-title-size);
  margin-bottom: 100px;
  letter-spacing: var(--letter-title-spacing)
}
.event-page > .wrap > .title-box > .sub-title{
  font-size: var(--font-sub-size);
  margin-bottom: 50px;
  color: var(--main-color);
} 
.event-page > .wrap .event-box {
  width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.event-page > .wrap .event-img {
  width: 550px;
  height: 500px;
  background-size: cover;
  margin-bottom: 80px;
}
.event-page > .wrap .event-img:nth-child(1) {
  background-image: url(../assets/event1.png);
}
.event-page > .wrap .event-img:nth-child(2) {
  background-image: url(../assets/event2.png);
}
.event-page > .wrap .event-img:nth-child(3) {
  background-image: url(../assets/event3.png);
}
.event-page > .wrap .event-img:nth-child(4) {
  background-image: url(../assets/event4.png);
}
.event-page > .wrap .event-img:nth-child(5) {
  background-image: url(../assets/event5.png);
}
.event-page > .wrap .event-img:nth-child(6) {
  background-image: url(../assets/event6.png);
}

.event-page > .wrap .event-txt {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 330px 50px 50px;
}
.event-page > .wrap .event-txt > h1 {
  font-size: 26px;
  letter-spacing: 0.1rem;
  line-height: 2rem;
}
.event-page > .wrap .event-txt > p {
  display: block;
  margin: 15px 0;
  font-size: 16px;
}
.event-page > .wrap .event-txt {
  display: none;
}
.event-img:hover > .event-txt {
  display: block;
}

.event-page > .wrap > .eventpage-ad {
  width: 100%;
}
</style>
