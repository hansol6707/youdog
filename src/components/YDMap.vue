<template>
  <div class="search">
    <img
      src="../assets/map/gyeonggido.jpg"
      alt=""
      width="613"
      height="729"
      usemap="#search"
      id="mapImg"
    />
    <map name="search" id="search">
      <area
        shape="poly"
        coords="250, 0, 300, 0, 300, 150 ,150, 150"
        href="#"
        alt="yeoncheon"
        id="map1"
      />
      <area
        shape="poly"
        coords="310,70, 450,100, 430,120, 350,230, 350,270, 270,270, 300,210, 270,160 "
        href="#"
        alt="pocheon"
        id="map2"
      />
      <area
        shape="poly"
        coords="420,130, 500,180, 500,220, 450,240, 490,350, 450,380, 440,350, 350,250"
        href="#"
        alt="Gapyeong"
        id="map3"
      />
      <area
        shape="poly"
        coords="230,150, 280,150, 300,220, 230,220"
        href="#"
        alt="Dongducheon"
        id="map4"
      />
      <area
        shape="poly"
        coords="80,150, 230,150, 180,300, 80,300"
        href="#"
        alt="Paju"
        id="map5"
      />
      <area
        shape="poly"
        coords="210,180, 250,220, 280,230, 280,250, 270,270, 220,270, 220,300, 190,320, 180,250"
        href="#"
        alt="yangju"
        id="map6"
      />
      <area
        shape="rect"
        coords="230, 270, 290, 300"
        href="#"
        alt="Uijeongbu"
        id="map7"
      />
      <area
        shape="poly"
        coords="5,270, 70,270, 70,330, 150,360, 100,370, 5,350"
        href="#"
        alt="gimpo"
        id="map8"
      />
      <area
        shape="poly"
        coords="60,310, 190,280, 180,320, 230,300, 220,350, 180,350, 150,350"
        href="#"
        alt="Goyang"
        id="map9"
      />
      <area
        shape="poly"
        coords="290,280, 370,270, 400,320, 350,400, 260,310 "
        href="#"
        alt="Namyangju"
        id="map10"
      />
      <area
        shape="poly"
        coords="410,320, 450,370, 500,350, 480,320, 600,370, 600,480, 420,440, 380,380"
        href="#"
        alt="yangpyeong"
        id="map11"
      />
      <area
        shape="rect"
        coords="270, 330, 310, 380"
        href="#"
        alt="Guri"
        id="map12"
      />
      <area
        shape="rect"
        coords="280, 370, 350, 420"
        href="#"
        alt="Hanam"
        id="map13"
      />
      <area
        shape="rect"
        coords="110, 380, 150, 420"
        href="#"
        alt="Bucheon"
        id="map14"
      />
      <area
        shape="rect"
        coords="140, 400, 180, 450"
        href="#"
        alt="Gwangmyeong"
        id="map14"
      />
      <area
        shape="rect"
        coords="170, 430, 210, 470"
        href="#"
        alt="Anyang"
        id="map15"
      />
      <area
        shape="rect"
        coords="200, 420, 250, 450"
        href="#"
        alt="Gwacheon"
        id="map16"
      />
      <area
        shape="rect"
        coords="200, 450, 240, 490"
        href="#"
        alt="Uiwang"
        id="map17"
      />
      <area
        shape="rect"
        coords="240, 420, 320, 490"
        href="#"
        alt="Seongnam"
        id="map17"
      />
      <area
        shape="poly"
        coords="330,430, 390,380, 420,500, 360,530, 360,480, 280,480"
        href="#"
        alt="Gwangju"
        id="map18"
      />
      <area
        shape="rect"
        coords="400, 430, 580, 600"
        href="#"
        alt="yeoju"
        id="map19"
      />
      <area
        shape="rect"
        coords="80, 430, 170, 490"
        href="#"
        alt="Siheung"
        id="map20"
      />
      <area
        shape="rect"
        coords="160, 470, 200, 500"
        href="#"
        alt="Gunpo"
        id="map21"
      />
      <area
        shape="rect"
        coords="110, 470, 170, 520"
        href="#"
        alt="Ansan"
        id="map22"
      />
      <area
        shape="rect"
        coords="200, 490, 250, 550"
        href="#"
        alt="Suwon"
        id="map23"
      />
      <area
        shape="rect"
        coords="260, 480, 400, 600"
        href="#"
        alt="Yongin"
        id="map24"
      />
      <area
        shape="rect"
        coords="370, 490, 520, 630"
        href="#"
        alt="icheon"
        id="map25"
      />
      <area
        shape="rect"
        coords="80, 520, 240, 630"
        href="#"
        alt="Hwaseong"
        id="map26"
      />
      <area
        shape="rect"
        coords="230, 560, 260, 600"
        href="#"
        alt="Osan"
        id="map27"
      />
      <area
        shape="rect"
        coords="140, 600, 280, 700"
        href="#"
        alt="Pyeongtaek"
        id="map28"
      />
      <area
        shape="rect"
        coords="280, 600, 450, 700"
        href="#"
        alt="Anseong"
        id="map29"
      />
    </map>

    <div class="mapSearchArea">
      <div class="mapSearch">
        <ul>
          <li>
            <label for="jiyuk">시/군</label>
            <select name="jiyuk" id="jiyuk">
              <option value="" selected>전체</option>
              <option value="연천">연천군</option>
              <option value="포천">포천시</option>
              <option value="가평">가평군</option>
              <option value="동두천">동두천시</option>
              <option value="파주">파주시</option>
              <option value="양주">양주시</option>
              <option value="의정부">의정부시</option>
              <option value="김포">김포시</option>
              <option value="고양">고양시</option>
              <option value="남양주">남양주시</option>
              <option value="구리">구리시</option>
              <option value="하남">하남시</option>
              <option value="부천">부천시</option>
              <option value="광명">광명시</option>
              <option value="안양">안양시</option>
              <option value="과천">과천시</option>
              <option value="의왕">의왕시</option>
              <option value="성남">성남시</option>
              <option value="광주">광주시</option>
              <option value="여주">여주시</option>
              <option value="시흥">시흥시</option>
              <option value="군포">군포시</option>
              <option value="안산">안산시</option>
              <option value="용인">용인시</option>
              <option value="이천">이천시</option>
              <option value="화성">화성시</option>
              <option value="오산">오산시</option>
              <option value="평택">평택시</option>
              <option value="안성">안성시</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};

const search = document.querySelector(".search")
const mapImg = document.getElementById("mapImg");
search.addEventListener("mouseover", (e) => {
    console.log(e.target.getAttribute("alt"))
    const src = e.target.getAttribute("alt")
    if(src == '' || src == null){
        mapImg.src = "gyeonggido.jpg";
        
    }else{
        mapImg.src = src+".jpg";
    }
    //mapImg.addEventListener('click', handleImageClick);
})
//search.addEventListener('click', (e) => {})

// 이미지 클릭 이벤트를 처리하는 함수
// function handleImageClick(e) {
//     // 클릭된 이미지 요소를 가져옴
//     const clickedImage = e.target;

//     // data-input 속성에서 입력값을 가져옴
//     const input = clickedImage.getAttribute('data-input');

//     // 결과를 출력할 요소를 가져옴
//     const outputElement = document.getElementById('output');

//     // 결과를 표시
//     outputElement.textContent = '클릭한 이미지에서 나온 입력값: ' + input;
// }

// 이미지 요소를 찾아 클릭 이벤트 핸들러를 연결
// const imageA = document.getElementById('imageA');
// const imageB = document.getElementById('imageB');

// imageA.addEventListener('click', handleImageClick);
// imageB.addEventListener('click', handleImageClick);

//aa
const areas = document.querySelectorAll('#search > area')
areas.forEach((area,i) => area.addEventListener("click",()=>{
    console.log(i)    
    
}))

</script>

<style></style>
