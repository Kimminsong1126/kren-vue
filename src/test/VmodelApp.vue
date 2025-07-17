<template>
  <input type="text" 
        v-model="msg"/>
  <button class="btn btn-primary"
        @click="modelHandler">Click</button>
</template>

<script>
import {ref} from "vue";
export default {
    setup(){
        const msg = ref("Kren");
        const modelHandler = () => {
            console.log("debug >>> ,", msg.value);
        }
        return {
            msg,
            modelHandler
        }
    }
}
</script>

<style>

</style>