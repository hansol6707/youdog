<template>
  <div class="container">
    <div class="mapContainer">
      <div class="mapImage">
        <img src="../assets/search.png" />
      </div>
      <div class="mapSearch">
        <h1>지역 별 검색</h1>
        <div class="search">
          <!-- v-model="search" -->
          <input @keyup="checkEnter($event)" v-model="searchText" type="text" placeholder="검색"/>
          <button @click="doSearch" type="submit"><i class="fas fa-search"></i></button>
        </div>
        <h2>검색 기록</h2>
        <div class="tags">
          <p># {{ searchText[0] }} <i class="fas fa-times"></i></p>
          <p v-for="(search,i) in searchText" :key="i"># {{ searchText[i] }} <i class="fas fa-times"></i></p>
          <p># 산책 <i @click="deleteList" class="fas fa-times"></i></p>
        </div>
        <div class="ad">
          <img src="../assets/eventpagead1.png" width="600" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     searchText: [개, 산책, 강아지]
  //   }
  // },
  methods: {
    doSearch() {
      this.searchText.push(this.searchText.value)
      console.log(this.searchText)
    },
    checkEnter(evt) {
      console.log(evt.key)
      // key가 enter면 doSearch 실행
      if (evt.key === 'Enter') {
        // method도 this 사용
        this.doSearch()
      }
    },
    deleteList(e){
      e.target.remove()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  width:1920px;
}
.mapContainer {
  width: 1200px;
  display: flex;
  margin: auto;
  justify-content: space-around;
}
.mapImage {
  width: 600px;
}
.mapImage > img {
  width: 400px;
  height: 400px;
}
.mapSearch {
  width: 600px;
}
.mapSearch > .search {
  margin: 10px auto;
  display: flex;
  width: 420px;
  border: 2px solid transparent;
  border-bottom-color: var(--main-color);
}
.mapSearch input {
  padding: 10px;
  margin: 10px 0 0;
  width: 400px;
  outline: none;
  border: 1px solid transparent;
}
.mapSearch > .search > button {
  padding: 10px;
  font-size: 16px;
  margin: 10px 0 0;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}
.mapSearch > .tags {
  display: flex;
  width: 600px;
  justify-content: center;
  flex-wrap: wrap;
}

.mapSearch > .tags > p {
  margin: 5px 10px;
  padding: 5px 10px;
  border: 1px solid var(--main-color);
  border-radius: 20px;
}

.mapSearch > h2 {
  text-align: left;
  padding: 10px 20px;
}

.mapSearch > .ad {
  margin: 40px 0;
}
</style>