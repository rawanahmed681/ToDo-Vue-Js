<template>
    <div class="main-filter">
                <div class="check">
                    <button class="button-filter" value="work" ><div class="filter-circle"></div> Work</button>
                </div>

                <div class="check">
                    <button class="button-filter" value="study" ><div class="filter-circle"></div> Study</button>
                </div>

                <div class="check">
                    <button class="button-filter" value="entertainment" ><div class="filter-circle"></div> Entertainment</button>
                </div>

                <div class="check">
                    <button class="button-filter" value="family" ><div class="filter-circle"></div> Family</button>
                </div>
                <div class="check margin-checkbox">
                    <input type="checkbox" name="doneTasks" id="doneTasks" value="hideDone">
                    <label for="doneTasks">Hide Done Tasks</label>
                </div>
                <div class="img">
                    <img src="" alt="for make notes">
                </div>

            </div>
</template>

<script>
import '../scss/main.scss'
export default{
    name: 'filterView',
    data(){
        
    }
}
</script>


<style lang="scss">


</style>