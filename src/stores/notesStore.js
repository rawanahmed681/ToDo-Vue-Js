
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {

  state:()=>({
    notes:JSON.parse(localStorage.getItem('notes')??[])
  }),
  actions:{ 
    setNote(note){
      this.notes.push(note)
      localStorage.setItem('notes',JSON.stringify(this.notes))
    }
  },
  getters:{ 
    getNotes:(state)=> state.notes
  } 

})
