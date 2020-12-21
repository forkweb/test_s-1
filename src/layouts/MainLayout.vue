<template>
  <div class="app-main-layout">
    
    <Navbar/>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

  </div>
</template>

<script>
import Navbar from '@/components/NavBar'
export default {
  name: 'main-layout',
  data: () => ({
    
  }),
  components: {
    Navbar
  }
}
</script>