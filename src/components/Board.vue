<template>
  <div>
    <h1>Список задач</h1>


  </div>
</template>

<script>
export default {
  data: () => ({
    filter: null,
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.select)
  }
}
</script>

<style lang="scss" scoped>
  .td {
    max-width: 400px;
  }
  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>