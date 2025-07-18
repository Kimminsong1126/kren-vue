import { createApp } from 'vue'
//import App from './App.vue'

// import App from './test/TextApp.vue'
// createApp(App).mount('#app')

// import VmodelApp from './test/VmodelApp.vue'
// createApp(VmodelApp).mount('#app')

//import TodoListPage from './todo/TodoListPage.vue';
import App from './App.vue';
import router from './router';
createApp(App).use(router).mount('#app')