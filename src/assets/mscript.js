
const surchmap = document.querySelector(".suchmap")
const mapImg = document.getElementById("mapImg");
surchmap.addEventListener("mouseover", (e) => {
    console.log(e.target.getAttribute("alt"))
    const src = e.target.getAttribute("alt")
    if(src == '' || src == null){
        mapImg.src = "gyeonggido.jpg";
        
    }else{
        mapImg.src = src+".jpg";
    }
    //mapImg.addEventListener('click', handleImageClick);
})
//surchmap.addEventListener('click', (e) => {})

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
const areas = document.querySelectorAll('#surchmap > area')
areas.forEach((area,i) => area.addEventListener("click",()=>{
    console.log(i)    
    
}))
