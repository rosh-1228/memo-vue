<template>
  <div>
    <router-link
      @click="deleteNote(note)"
      to="/"
    >削除</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    deleteNote (note) {
      this.$store.state.note = {}
      this.$store.commit('deleteNote', note)
    }
  },
  props: {
    note: Object
  }
}
</script>
