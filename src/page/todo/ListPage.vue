<template>
  <div class="container">
    <h2>Todo Home </h2>

    <TodoInputForm @add-todo="inputHandler"/>
    <TodoList :todos="todos"
                @delete-todo="removeHandler"
                @toggle-todo="toggleHandler"/>

  </div>
</template>

<script>
import {ref} from "vue";
import TodoInputForm from '@/todo/TodoInputForm.vue';
import TodoList from '@/todo/TodoList.vue';
import axios from 'axios';

export default {
    components : {
        TodoInputForm,
        TodoList
    },
    setup() {

        const todos = ref([]);

        const toggleHandler = (idx) => {
          todos.value[idx].completed = !todos.value[idx].completed
        }

        const getTodos = async() => {
          const response = await axios.get('http://localhost:3000/todos');
          todos.value = response.data;
        }

        getTodos();

        // insert into table
        const inputHandler = async (todo) => {
            // todos.value.push(todo);
            const response = await axios.post('http://localhost:3000/todos', todo);
            todos.value.push(response.data);
        }

        const removeHandler = async (idx) => {
          const id = todos.value[idx].id;
            try {
              // backend 개발 시 사용
              // await axios.delete(`http://localhost:3000/todos`,{data:{id:id}});
              await axios.delete(`http://localhost:3000/todos/${id}`);
              todos.value.splice(idx,1);
            } catch(err){
              console.log(`delete ${err}`);
            }
        }
        
        return {
            todos,
            removeHandler,
            inputHandler,
            toggleHandler
        }
    }
}
</script>

<style>
  .todo{
    color: gray;
    text-decoration: line-through;
  }
</style>