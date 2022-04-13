import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: JSON.parse(localStorage.getItem(process.env.VUE_APP_STORAGE_KEY)) || [],
    editingNote: {}
  },
  mutations: {
    addNote (state, note) {
      if (!note.trim()) { return }
      const noteId = state.notes.length ? state.notes.slice(-1)[0].id + 1 : 1
      state.notes.push({
        id: noteId,
        content: note,
        doEdit: true
      })
      localStorage.setItem(process.env.VUE_APP_STORAGE_KEY, JSON.stringify(state.notes))
    },
    deleteNote (state, deleteNote) {
      const deleteIndex = state.notes.findIndex(note => {
        return note === deleteNote
      })
      state.notes = state.notes.filter((_, index) =>
        index !== deleteIndex
      )
      localStorage.setItem(process.env.VUE_APP_STORAGE_KEY, JSON.stringify(state.notes))
    },
    passNote (state, updateNote) {
      state.editingNote = updateNote
      return state.editingNote
    },
    updateNote (state, updateNote) {
      if (updateNote.content === '') { this.deleteNote(state, updateNote) }
      localStorage.setItem(process.env.VUE_APP_STORAGE_KEY, JSON.stringify(state.notes))
    }
  }
})
