Vue.component("todo-item", {
  props: ["item"],
  template: `
    <li class="text-2xl" v-bind:class="{
        ['hidden']: item.completed
      }">
      {{item.title}}
      <button v-on:click="item.completed = !item.completed">✅</button>
    </li>
  `,
});

Vue.component("todo-item-completed", {
  props: ["item"],
  template: `
    <li class="text-2xl" v-bind:class="{
        ['line-through opacity-30']: item.completed
      }">
      {{item.title}}
    </li>
  `,
});

let app = new Vue({
  el: "#root",
  data: {
    newTodo: "",
    todos: [],
  },
  methods: {
    addTodo: function () {
      if (this.newTodo) {
        this.todos.push({ title: this.newTodo, completed: false });
        this.newTodo = "";
      }
    },
  },
  computed: {
    completedTodos: function () {
      return this.todos.filter((todo) => todo.completed);
    },
  },
});
