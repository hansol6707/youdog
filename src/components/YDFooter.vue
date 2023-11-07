<template>
  <div class="footer">
    <div class="wrap">
      <div class="contact-text">
        <h2>contact us</h2>
        <p>Tel . 02-1234-4564</p>
        <p>Tel . 010-1234-1234</p>
        <p>Email<br />youdog_company@naver.com</p>
      </div>
      <div class="copy">
        <p>Copyright ⓒ WITHYOU. rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/style.css";

.footer {
  width: 100%;
  height: 500px;
  background: url(../assets/footer.png);
  background-size: cover;
  position: relative;
  color: #fff;
}
.contact-text {
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: right;
}
.contact-text > h2 {
  font-size: var(--font-mid-size);
  margin-bottom: 15px;
}
.contact-text > p:nth-child(3) {
  margin-bottom: 15px;
}
.copy {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
