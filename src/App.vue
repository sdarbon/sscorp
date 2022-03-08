<template>
  <nav>
      <div class="nav-link">
        <router-link to="/"> <font-awesome-icon icon="house" /></router-link> 
        <label>Home</label> 
      </div>
      <div class="nav-link">
        <router-link to="/skills"> <font-awesome-icon icon="bezier-curve" /></router-link> 
        <label>Skills</label> 
      </div>
  </nav>
  <div class="flex flex-c h-screen">
    <header>
      <div class="container flex">
        <div class="flex-1"><router-link to="#"> SSCORP > {{  $route.name  }}</router-link></div>
        <div class="flex">
       </div>
      </div>
    </header>
    <div class="container flex-1">
      <router-view/>
    </div>
    <footer>
      <div class="container">
        samsamcorp
      </div>
    </footer>
  </div>
</template>
<script>

</script>
<style>
#app{
  margin-left : 60px;
}
nav{
  position : fixed;
  top : 0;
  left : 0;
  width : 60px;
  height : 100vh;

  padding-top : 60px;

  background: var(--main-color);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
nav > div{
  position: relative;
  height : 40px;
  margin : 5px;
  margin-right : 0px;

  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  background: rgba(255,255,255,0);
}
nav > div:hover{
  background: rgba(255,255,255,1);

  transition: all 500ms ease;
}
nav > div:hover > a{  
  color: var(--main-color);
}
nav > div > label{
  position : absolute;
  top : 0;
  left : 100%;
  height : 100%;
  max-width : 25px;
  padding : 10px;
  overflow: hidden;
  display: 	none;

  text-align: center;

  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
nav > div:hover > label{  
  max-width : 250px;
  display: 	block;
  transition: all 500ms ease;
}
nav a{
  display: block;
  padding : 10px;
  padding-right: 15px;
  text-align: center;
  color: #ffffff;
}
header{
  background: #757575;
  color : #f4f4f4;
  padding : 10px 0;
}
footer{
  background: #212121  ;
  color : #f4f4f4;
  padding : 10px 0;
}
</style>
