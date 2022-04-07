<template>
  <div>
    <textarea
      v-model="note.content"
      placeholder="ここにメモを入力"
    ></textarea>
  </div>
  <EditButton :note="note"></EditButton>
  <DeleteButton :note="note"></DeleteButton>
</template>

<script>
import EditButton from '@/components/EditButton.vue'
import DeleteButton from '@/components/DeleteButton.vue'

export default {
  computed: {
    note: function () {
      return this.$store.state.note || {}
    }
  },
  components: {
    EditButton,
    DeleteButton
  }
}
</script>
