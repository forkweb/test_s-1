<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="right hide-on-med-and-down">
        <router-link
          tag="li"
          to="/create"
          exact
          active-class="active"
        >
          <a href="#">Создать задачу</a>
        </router-link>
        <router-link
          tag="li"
          to="/list"
          active-class="active"
        >
          <a href="#">Список задач</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/?message=logout')
    }
  },
  mounted() {
    this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  },
  beforeDestroy() {
    // clearInterval(this.interval)
    // if (this.dropdown && this.dropdown.destroy) {
    //   this.dropdown.destroy()
    // }
  }
}
</script>