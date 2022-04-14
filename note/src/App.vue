<template>
  <div>
    <ul>
      <li
        v-for="note in notes"
        :key="note.id"
        class="note-list"
      >
        <router-link
          @click="passNote (note)"
          to="/edit"
        >{{firstLine(note.content)}}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default ({
  computed: {
    notes: function () {
      return this.$store.state.notes
    },
    firstLine: function () {
      return function (content) {
        return content.split(/\r\n|\r|\n/)[0]
      }
    }
  },
  methods: {
    passNote (note) {
      this.$store.commit('passNote', note)
    }
  }
})
</script>

<style>
  .note-list {
    list-style:none;
  }
</style>
