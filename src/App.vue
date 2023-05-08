<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  font-family: 'Roboto', sans-serif;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  background-color: #edf2f4;
}

p,
h1,
h2,
h3,
a,
ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #2b2d42;
}

h2 {
  margin-bottom: 40px;
}

h3 {
  text-transform: capitalize;
  margin-bottom: 8px;
}
</style>
