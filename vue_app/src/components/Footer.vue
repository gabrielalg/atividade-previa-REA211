<template>
 <footer>
    <div class="content">
      <div id="copyright">
        <small>
          &copy; 2021 - All Rights Reserved
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

footer {
  background-color: var(--grey-a010);
  padding: 5px;
  margin-top: auto;
  height: 30px;
}

  footer div {
    text-align: center;
    margin: 0 auto;
  }

#copyright, #copyright a {
  color: var(--grey-a060);
}

</style>