<template>
  <footer class="footer">
    <h5>copyright © 2023 Ethan Ozelius.</h5>
    <h6>all photos and content created and owned by Ethan Ozelius</h6>
  </footer>
</template>

<script>
export default {
  name: 'EthanOzFooter'
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors.scss";

.footer {
  width: 100%;
  text-align: center;
  line-height: 1em;
  padding: 15px 0;
  background-color: $color-dark-blue;
  align-self: flex-end;
  margin-top: auto;

  h5 {
    margin-bottom: 10px;
  }
}
</style>
