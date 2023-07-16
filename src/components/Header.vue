<template>
  <header class="header">
    <nav class="nav">
      <h4>
        <router-link to="/">Home</router-link> |
      </h4>
      <h4>
        <router-link to="/portfolio">Portfolio</router-link> |
      </h4>

      <h4>
        <router-link to="/medium">Medium</router-link>
      </h4>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'EthanOzHeader'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";

.header {
  width: 100%;
  text-align: center;
  line-height: 1em;
  padding: 30px 0;
  background-color: $color-dark-blue;
  align-items: flex-start;

  h4 {
    display: inline;
  }

  .router-link-active.router-link-exact-active {
    color: $color-white;
  }
}
</style>
