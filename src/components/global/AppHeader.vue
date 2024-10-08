<template>
    <div class="head">
        <h1>ToDo</h1>
        <input type="search" v-model="searchQuery" @input="filterNotes" placeholder="Search..." class="head-search"/>
        
            <RouterLink to="/Modal">
                <a>+</a>
            </RouterLink>
      
    </div>
</template>

<script>


export default{
    name: 'AppHeader',

    components:{
        
    },

    methods:{
    openModal(note = null) {
      this.currentNote = note;
      this.showModal = true;
    },
  }

}
</script>

<style lang="scss">
.head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
}
.head-search{
    width: 60%;
    height: 40px;
    border-radius: 15px;
    padding-left: 10px;
    border: 1px solid rgba(120, 119, 119, 0.822);
}
</style>


