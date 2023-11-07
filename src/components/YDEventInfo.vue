<template>
  <div class="event-info">
    <div class="wrap">
      <div class="sub-title">
        <h2>지난 이벤트 / 관련 소식</h2>
      </div>
      <div class="info-boxs">
        <div class="info-box">
          <div class="history">
            <p class="title">2023</p>
            <ul>
              <li><a href="#">2023 - 케이펫페어 송도컨벤시아</a></li>
              <li><a href="#">2023 - 케이펫페어 코엑스</a></li>
              <li><a href="#">2023 - 케이펫페어 일산 킨텍스</a></li>
              <li><a href="#">2023 - 케이펫페어 부산 백스코</a></li>
              <li><a href="#">2023 - 케이펫페어 세택</a></li>
            </ul>
          </div>
        </div>
        <div class="info-box">
          <div class="column">
            <p class="title">Pet related</p>
            <ul>
              <li><a href="#">[칼럼]반려동물도 감정이 있어요!</a></li>
              <li><a href="#">법무법인 청음 반려동물그룹변호사</a></li>
              <li><a href="#">반려동물과 슬기로운 산책 생활</a></li>
              <li><a href="#">반려동물,여생의 가족으로 주목받는 </a></li>
              <li><a href="#">반려동물과 교감하는 행복</a></li>
            </ul>
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
ul{list-style: inside;}
.event-info{
  width: 100%;
}
.sub-title > h2{
  color: var(--main-color);
  font-size: var(--font-sub-size);
  padding-left: 10px;
  margin-bottom: 50px;
  text-align: center;
}
.info-boxs{
  display: flex;
  justify-content: center;
}
.info-boxs > .info-box{
  padding: 0 100px;
}
.info-boxs > .info-box .title{
  margin-bottom: 10px;
  font-size: var(--font-sub-size);
}
.info-boxs > .info-box ul{
  line-height: 1.5rem;
  
}
</style>
