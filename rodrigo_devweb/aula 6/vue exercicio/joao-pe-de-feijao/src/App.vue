<script setup></script>

<template>
  <main>
    <header>
      <h1>Ola mundo</h1>
    </header>
    <main class="pichau">
      <a><h1>Adeus</h1></a>
      <h5 class="rowley">rowley</h5>
      <h6 class="heffley">greg heffley</h6>
      <div class="separadorsupremo"></div>
      <h5 class="fregley">fregley</h5>
    </main>
    <div></div>
    <footer>
      <img src="./montando-um-pc-gamer-para-hitma-2-capa.jpg">
    </footer>
  </main>
</template>

<style>
header {
  background-color: fuchsia;
  padding: 30px;
}
.pichau{
  padding:20%;
}
main{
  margin-bottom:200px;
}
footer {
  background-color: aqua;
  padding-bottom:1000px;
  border:30px solid cadetblue;
  border-radius:300px;
}
h1{
  color:navy;
  text-align: center;
}
.rowley{
  float:left;
}
.heffley{
  float:right;
}
.separadorsupremo{
  line-break: auto;
  border:30px solid royalblue;
}
img{
  margin-left:300px;
}

.fregley{
  float:left;
  padding:5px;
  background-color:red;
  margin-left:50px;
  border:3px solid cyan;
  border-radius:50px;
}
</style>
