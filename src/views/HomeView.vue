<script setup>
import 'animate.css';
</script>

<template>
  <div class="container animate__animated animate__fadeIn animate__delay-0.5s" id="hello">
    <div id="intro">
      <div id="intro-content">
        <h3>Hello, world!</h3>
        <p><i>Look mom, I can code!</i></p>
        <p>
          My name is Bui Bao Hoang (Harvey). I'm a 17-year-old student currently studying in Vinschool Imperia Hai Phong.
        </p>
        <p>
          I like to develop cooking recipes in my free time.
        </p>
        <p>I code in Python (FastAPI, Flask, Discord.py), JavaScript (Vue.js) and Arduino C</p>
      </div>
    </div>
    <div id="myself" class="animate__animated animate__fadeIn animate__delay-0.7s">
      <div class="container-fluid" style="text-align: center">
        <img id="myself-pic" src="@/assets/img/myself.png" class="bg-body-tertiary"/>
        <p style="margin-top: 10px; text-align: center">Hey look its me!</p>
      </div>
    </div>
  </div>
</template>
<style>
#hello{
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
#intro{
  display: block;
  width: 100%;
  text-align: left;
  padding: 30px;
}
#intro-content h3 {
  display: inline-block;
  position: relative;
  padding-bottom: 3px;
}
@keyframes border {
    from {width: 0px;}
    to {width:100%;}
}
#intro{
  display: flex;
  align-items: center;
  justify-content: center;
}
#intro-content h3:after {
  content: '';
  display: block;
  height: 3px;
  width: 0;
  background: white;  
  animation-name: border;
  animation-duration: 0.2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
@media (max-width: 900px){
  #hello{
    grid-template-columns: repeat(1, 1fr);
  }
}
#myself{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#myself-pic{
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
