<template>
    <div class="todo-list">
      <ToDoItem
        v-for="(note, index) in notes"
        :key="index"
        :note="note"
      />
    </div>
  </template>
  
  <script>
  import ToDoItem from './ToDoItem.vue';
  
  export default {
    props: {
      notes: Array
    },
    components: {
      ToDoItem
    },
    methods: {
     
    }
  };
  </script>
  
  <style scoped lang="scss">
  .todo-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  </style>