<template>
  <div>
    <h1>Список задач</h1>

    <div class="row">
      <div class="input-field col s6 ">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Выбрать фильтр</option>
          <option value="active">В процессе</option>
          <option value="outdated">В архиве</option>
          <option value="completed">Завершено</option>
        </select>
        <label>Фильтрr</label>
      </div>
    </div>

    <button v-if="filter" class="btn btn-small red" @click="filter = null">Очистить фильтр</button>

    <hr>

    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Заголовок</th>
        <th>Дата</th>
        <th>Описание</th>
        <th>Статус</th>
        <th>Открыть</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(task, idx) of displayTasks"
          :key="task.id"
      >
        <td>{{idx + 1}}</td>
        <td>{{task.title}}</td>
        <td>{{new Date(task.date).toLocaleDateString()}}</td>
        <td class="td">
          <div class="text">{{task.description}}</div>
        </td>
        <td>{{task.status}}</td>
        <td>
          <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
            Открыть
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>Нет задач</p>
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