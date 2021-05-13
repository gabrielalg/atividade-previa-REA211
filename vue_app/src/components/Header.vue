<template>
  <header class="flex-column justify-align-center">
    <h1 class="text-subtitle game-title">Jogo da Maçã (Vue)</h1>
    <p class="text-body"> Clique na maçã para alterar o contador.</p>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

header {
  background-color: var(--wine);
  color: var(--white);
  height: 70px;
}

header .game-title{
  margin-bottom: 5px;
}

</style>