
<template>
  <div id="App">

    <header>
      <AppHeader></AppHeader>
  
  
    </header>
    <main>
      <filter-view></filter-view>
      <ToDoList/>
        <RouterView/>
    </main>
  </div>
</template> 

<script>
import AppHeader from './components/global/AppHeader.vue';
import FilterView from './views/filterView.vue';
import ToDoList from './views/ToDoList.vue';





export default {
  components: {
   
    AppHeader,
    FilterView,
    ToDoList
    
  },
  
  
};
</script>

<style lang="scss" >

#app {
  $primary-color: #3498db;
  
  header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  

  
}
</style>
