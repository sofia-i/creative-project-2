<template>
  <div class="home">
    <div class="page-title">
      <h1>Fun with Numbers</h1>
    </div>
    <img src="/images/multiplication.jpg">
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
* {
  font-family: 'Ubunto Mono', monospace;
}
.page-title {
  border: 1px solid #000;
  border-radius: 20px;
  max-width: 50%;
  margin: 15px auto;
}

</style>

<style scoped>
img {
  max-width: 90%;
}
</style>
