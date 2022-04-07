<template>
  <div>
    <textarea
      v-model="note.content"
      placeholder="ここにメモを入力"
      class="enter-textarea"
    ></textarea>
  </div>
  <EditButton
    :note="note"
    class="editButton"
  ></EditButton>
  <DeleteButton
    :note="note"
    class="deleteButton"
  ></DeleteButton>
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

<style>
  .editButton {
    background-color: #42b983;
    border-bottom: solid 2px #095f1a;
    border-right: solid 2px #095f1a;
    border-radius: 20px;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
  }
  .deleteButton {
    background-color: #f80303;
    border-bottom: solid 2px #340303;
    border-right: solid 2px #340303;
    border-radius: 20px;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
  }
  .enter-textarea {
    width:50%;
    height:200px;
  }
</style>
