<template>
  <div class="navbar navbar-expand-lg bg-body" style="background: transparent !important;">
    <div class="container" id="main-nav">
      <a class="navbar-brand nav-element" id="brand">
        <img src="@/assets/img/315538584_845756296844110_1443230941443896400_n.jpg" id="logo-img"/>
        justharveyy
      </a>
      <div id="navbar-content" class="nav-element">
        <a href="/">/home</a>
        <a href="/certs">/achievements</a>
        <a href="/contact">/contact</a>
      </div>
    </div>
  </div>
</template>
<style>
#main-nav{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px;
  background: transparent;
}
#brand{
  display: block;
  width: 100%;
}
#logo-img{
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
#navbar-content{
  display: block;
}
#navbar-content > a{
  padding: 20px;
  text-decoration: none;
  color: white;
}
#navbar-content > a:hover{
  transition: color 0.2s ease-in-out;
  color: rgba(255, 255, 255, 0.5);
}
.nav-element{
  padding: 20px;
}
@media (max-width: 900px){
  #main-nav{
    grid-template-columns: repeat(1, 1fr);
  }
  .nav-element{
    text-align: center;
  }
}
</style>