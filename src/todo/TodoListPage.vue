<template>
  <div class="container">
    <h2>To-List Page</h2>
    <form @submit.prevent="addHandler"
            class="d-flex">
        <div class="flex-grow-1 mr-2">
            <input
                class="form-control"
                placeholder="add new todo"
                v-model="todo" 
                type="text" />
        </div>
        <div>
            <button class="btn btn-primary"
                    type="submit">Add</button>
        </div>
    </form>
    <div v-show="hasError" style="color:red">
        This filed cannot be empty
    </div>
    <div  v-for="(data, idx) in todos"
            :key="data.id"
            class="card mt-2">
        <div class="card-body p-2 d-flex align-items-center">
            <div class="form-check flex-grow-1">
                <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="data.completed"
                >
                <label class="form-check-label">
                    {{data.subject}}
                </label>
            </div>
        </div>
        <div>
            <button class="btn btn-danger btn-sm"
                    @click="deleteHandler(idx)">Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
    setup() {
        const hasError = ref(false);

        const todo = ref('');
        const todos = ref([]);

        const addHandler = () => {
            if(todo.value === '') {
                hasError.value = true;
            } else {
                todos.value.push({id: Date.now(), subject: todo.value, completed: true});  
                hasError.value = false;
                todo.value='';
            }
            
        }

        const deleteHandler = (idx) => {
            todos.value.splice(idx,1);
        }
        
        return {
            todo,
            todos,
            addHandler,
            hasError,
            deleteHandler
        }
    }
}
</script>

<style>

</style>