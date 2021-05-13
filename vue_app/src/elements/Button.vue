<template>
  <button class="button fill-btn">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>

.button {
  font-family: var(--font-roboto);
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
  border-radius: 5px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  position: relative;
  cursor: pointer;
  border: none;
} 

.fill-btn {
  height: 40px;
  color: var(--white);
  background-color: var(--red);
}

.fill-btn:hover {
  filter: brightness(120%);
}

.fill-btn:visited, .fill-btn:active, .fill-btn:link {
  color: var(--white);
}

</style>