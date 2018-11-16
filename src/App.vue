<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
      var lImg = document.getElementById("app");
      var screenHeight = window.screen.height;
      lImg.style.height = screenHeight+"px";
  },
}
</script>

<style lang="scss">
body{
  position: relative;
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  width: 100%;
  background-image: url("assets/images/bg_01@2x.jpg");
  background-attachment:fixed;
  background-size: 100% 100%;
  overflow: hidden;
}
</style>
