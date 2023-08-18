<template>
  <div class="navbar">
    <my-button @click="$router.push('/')">На главную</my-button>
    <h2 class="title">MINESWEEPER</h2>
    <my-button @click="$router.push('/leaderboards')">Таблица лидеров</my-button>
  </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 15px;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 4px gray;
}
.title {
  margin: 0;
color: rgb(150, 81, 199);
}

</style>