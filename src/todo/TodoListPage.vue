<template>
  <div class="container">
    <h2>To-List Page</h2>
    <form @submit.prevent="addHandler"
            class="d-flex">
        <div>
            <input
                class="form-control"
                placeholder="add new todo"
                v-model="todo" 
                type="text" />
        </div>
        <div>
            <button calss="btn btn-primary"
                    type="submit">Add</button>
        </div>
    </form>
    {{todos}}
  </div>
</template>

<script>
import {ref} from "vue";

export default {
    setup() {
        const todo = ref('');
        const todos = ref([]);
        const addHandler = () => {
            todos.value.push({subject: todo.value});
        }
        
        return {
            todo,
            todos,
            addHandler
        }
    }
}
</script>

<style>

</style>