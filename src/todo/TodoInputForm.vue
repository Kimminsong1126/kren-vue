<template>
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
</template>

<script>
import {ref} from "vue";

export default {
    setup(props, context){
        const hasError = ref(false);
        const todo = ref('');

         const addHandler = () => {
            if(todo.value === '') {
                hasError.value = true;
            } else {
                context.emit('add-todo', {
                    id: Date.now(),
                    subject: todo.value,
                    completed: true
                })
                hasError.value = false;
                todo.value='';
            }
            
        };

        return {
            todo,
            hasError,
            addHandler
        }
    }
}
</script>

<style>

</style>