<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Write</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/list">List</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-view/>
</template>

<script>
export default{
  setup(){
  //   const name = "Kren Web(feat. jslim)";

  //   const greeting = (name) => {
  //     return `Hello, ${name}`;
  //   }

  //   const greet = greeting(name);
  //   return {
  //     greet
  //   } //script의 문법을 쓰려면 꼭 반환을 해야함
  }
}
</script>

<style>

</style>