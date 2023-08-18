<template>
  <navbar></navbar>
  <div class="app container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import MinesweeperGame from '@/components/UI/MinesweeperGame.vue';

export default {
  components: {
    Navbar,
    MinesweeperGame,
  }

}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

img {
  max-width: 100%;
}

body {
  min-width: 320px;
  font-style: normal;
  font-weight: 400;
  background-color: #FFFFFF;
}

.container {
  margin: 0 auto;
  padding: 0 85px;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1280px;
  width: 100%;
}

.btn-reset {
  padding: 0;
  border: none;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
}

.list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
