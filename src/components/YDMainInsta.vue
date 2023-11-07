<template>
  <div class="main-insta">
    <div class="wrap">
      <h1>INSTAGRAM</h1>
      <p>!다양한 유저들의 생생한 후기 확인!</p>
      <div class="slide-show">
        <div class="slide-list">
          <div class="slide">
            <img src="../assets/insta1.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta2.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta3.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta4.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta5.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta6.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta7.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta8.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta9.png" alt="이미지" />
          </div>
          <div class="slide">
            <img src="../assets/insta10.png" alt="이미지" />
          </div>
        </div>
      </div>
      <button @click="prev()" class="prev">
        <i class="fas fa-chevron-circle-left"></i>
      </button>
      <button @click="next()" calss="next">
        <i class="fas fa-chevron-circle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowImg: 1,
    };
  },
  methods: {
    prev() {
      const slideList = document.querySelector(".slide-list");
      if (this.nowImg < 1) {
        this.nowImg = 5
        slideList.style.transform = `translateX(-${this.nowImg * 240}px)`;
      } else if(this.nowImg > 1) {
        this.nowImg--;
        slideList.style.transform = `translateX(-${this.nowImg *240}px)`;
      }else{
        this.nowImg--;
        slideList.style.transform = 'translateX(0px)';
        
      }

      console.log(this.nowImg);
    },
    next() {
      const slideList = document.querySelector(".slide-list");
      if (this.nowImg < 6) {
        slideList.style.transform = `translateX(-${this.nowImg * 240}px)`;
        this.nowImg++
      } else {
        this.nowImg = 1;
        slideList.style.transform = 'translateX(0px)';

      }
      console.log(this.nowImg);
    },
  },
};
</script>

<style>
@import "../assets/style.css";
.main-insta {
  width: 100%;
  text-align: center;
  padding: 80px 0;
  background-color: var(--accent-color);
}
.main-insta > .wrap > h1 {
  font-size: var(--font-title-size);
  letter-spacing: var(--letter-title-spacing);
  color: var(--white-color);
  margin: 20px 0;
}
.main-insta > .wrap > p {
  font-size: 20px;
  color: var(--white-color);
  font-weight: 600;
}
.main-insta > .wrap > .slide-show {
  width: 1200px;
  background-color: aqua;
  /* overflow: hidden; */
}
.main-insta > .wrap .slide-list {
  display: flex;
  justify-content: space-between;
  width: 2200px;
  transition: all 0.3s;
}

.main-insta > .wrap > .slide-show img {
  width: 200px;
  height: 200px;
  margin: 30px 20px 20px;
  border-radius: 20px;
  transition: all 0.5s;
  cursor: pointer;
}
.main-insta > .wrap > .slide-show img:hover {
  transform: scale(1.2);
}

.main-insta button {
  font-size: 30px;
  background-color: transparent;
  border: none;
  padding: 20px 10px;
  color: rgb(70, 70, 70);
  cursor: pointer;
}
</style>
