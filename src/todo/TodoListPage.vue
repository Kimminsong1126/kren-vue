<template>
  <div class="container">
    <h2>Todo Home </h2>

    <TodoInputForm @add-todo="inputHandler"/>
    <TodoList :todos="todos"
                @delete-todo="removeHandler"/>

  </div>
</template>

<script>
import {ref} from "vue";
import TodoInputForm from './TodoInputForm.vue';
import TodoList from './TodoList.vue';

export default {
    components : {
        TodoInputForm,
        TodoList
    },
    setup() {

        const todos = ref([]);

        const inputHandler = (todo) => {
            todos.value.push(todo);
        }

        const removeHandler = (idx) => {
            todos.value.splice(idx,1);
        }
        
        return {
            todos,
            removeHandler,
            inputHandler
        }
    }
}
</script>

<style>

</style>