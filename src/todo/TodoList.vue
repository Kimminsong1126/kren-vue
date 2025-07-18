<template>
   <div  v-for="(data, idx) in todos"
            :key="data.id"
            class="card mt-2">
        <div class="card-body p-2 d-flex align-items-center">
            <div class="form-check flex-grow-1">
                <input
                    class="form-check-input"
                    type="checkbox"
                    :value="data.completed"
                    @change="toggleChk(idx)"
                >
                <label class="form-check-label" :class="{todo: data.completed}">
                    {{data.subject}}
                </label>
            </div>
        </div>
        <div>
            <button class="btn btn-danger btn-sm"
                    @click="deleteHandler(idx)">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        todos: {
            type: Array,
            required : true
        }
    },
    setup(props, context){
        const deleteHandler = (idx) => {
            context.emit('delete-todo', idx);
        }
        const toggleChk = (idx) => {
            context.emit('toggle-todo', idx);
        }
        return {
            deleteHandler,
            toggleChk
        }
    }
}
</script>

<style>

</style>