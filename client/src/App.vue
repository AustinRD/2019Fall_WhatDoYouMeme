<template>
  <div class="container">
    <Header>

    </Header>
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

    <Footer>

    </Footer>
  </div>
</template>

<style lang = "scss">
</style>

<script>
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>