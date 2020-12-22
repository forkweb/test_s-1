<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">


      <ul class="right hide-on-med-and-down">
        <a href="#" class="black-text" @click.prevent="logout">
                Выйти
        </a>
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