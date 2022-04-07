<template>
  <div>
    <router-link
      @click="addNote(note)"
      to="/"
    >編集</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    addNote (note) {
      this.$store.state.note = {}
      if (note.doEdit) {
        this.$store.commit('updateNote', note)
      } else {
        this.$store.commit('addNote', note.content)
      }
    }
  },
  props: {
    note: String
  }
}
</script>
