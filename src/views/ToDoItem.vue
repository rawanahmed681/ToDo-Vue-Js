<template>
    <div class="note">
      <h2 :title="note.title"></h2>
      <p :description="note.description"> </p>
      <div class="tags">
        <button >tag </button>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      note: Object
    }
  };
  </script>
  
  <style scoped lang="scss">
  .note {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
  }
  
  .tags {
    display: flex;
    gap: 10px;
  
    .tag {
      background-color: #eee;
      padding: 5px 10px;
      border-radius: 20px;
    }
  }
  </style>
  