<template>
  <div class="name">
    {{name}}
  </div>
  <button 
    class="btn btn-primary"
    @click="updateHandler">Click</button>
</template>

<script>
import {ref} from "vue";

export default {
    setup(){
        let name = ref({
            id : "jslim",
            pwd: "jslim"
        });
        const updateHandler = () => {
            name.value.id = "kren";
            name.value.pwd = "kren";
            console.log("debug >>> ", name);
        };
        return{
            name,
            updateHandler
        }
    }
}
</script>

<style>

</style>