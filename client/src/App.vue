<template>
  <div class="container">
    <Nav>
      <router-link to="/">
        <i class = "fas fa-home fa-pull-left"></i>
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </Nav>
    <router-view/>
  </div>
</template>

<style lang = "scss">
</style>

<script>
import Nav from './components/Nav';

export default {
  components: {
    Nav
  }
}
</script>