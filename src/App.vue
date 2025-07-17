<template>
  <div class="name">{{greet}}</div>
</template>

<script>
export default{
  setup(){
    const name = "Kren Web(feat. jslim)";

    const greeting = (name) => {
      return `Hello, ${name}`;
    }

    const greet = greeting(name);
    return {
      greet
    } //script의 문법을 쓰려면 꼭 반환을 해야함
  }
}
</script>

<style>
  .name{
    color : red;
  }
</style>