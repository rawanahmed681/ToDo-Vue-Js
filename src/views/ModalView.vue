<template>
  <div class="modal-container">
    <form action="">
    <div class="form-actions">
      <button  @click="$emit('closeModal')">close</button>
      <button type="submit" @click="submitNote()">add</button>
    </div>
    <div class="form-inputs">
      <label for="title">Title</label>
      <input type="text" name="form-title" id="title"  v-model="title">
    </div>
    <div class="form-inputs">
      <label for="description">description</label>
      <textarea name="form-description" id="description" cols="30" rows="10" v-model="description"></textarea>
    </div>
    <div class="tag-label">
      <label for="tags">Tags</label>
    </div>
    <div class="form-tags">

    </div>
  </form>
  </div>
</template>

<script>
import { useNotesStore } from '../stores/notesStore';

export default{
  name: 'ModalView',

  props: {
    currentNote: Object,

  },
  data() {
    return {
      title: '',
      description: '',
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      // currentNote: null,
      
    };
  },
  methods:{
    submitNote() {
      const note= {
        title: this.title,
        description: this.description,
      };
      this.addNote(note);
    },
    addNote(note) {
     
        this.notes.push(note);
  
        useNotesStore().setNote(note)
      // this.saveNotes();
      this.$emit('closeModal');
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    // closeModal(){
    //   this.$router.push('/')
    // },


   
  }}
</script>

<style>
.modal-container{
  position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

form{
  background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 8px;
    width: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

</style>
  