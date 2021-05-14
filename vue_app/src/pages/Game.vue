<template>
  <section id="gameArea">
    <div class="flex-row action-bar">
      <Button @click="count = 0" >Resetar</Button>
      <p class="text-subtitle">Total de Cliques: <span id="counter">{{count}}</span></p>
    </div>
    <img class="game-img" alt="Desenho de uma maçã" src="../assets/img/apple.svg"
         :style="positionImg"
         @click="() => {
          ++count 
          changePositionImage()
         }" />
  </section>
</template>

<script>
import Button from '../elements/Button.vue'

export default {
  name: 'Game',
  components: {
    Button
  },
  data() {
    return { 
      count: 0, 
      positionImg: this.changePositionImage()
    }
  },
  methods: {
    changePositionImage: function() {
      let window_Height = window.innerHeight;
      let window_Width = window.innerWidth;

      let availSpace_V = window_Height - 240;
      let availSpace_H = window_Width - 100;

      let randNum_V = Math.round(Math.random() * availSpace_V) - 30;
      let randNum_H = Math.round(Math.random() * availSpace_H);

      if (randNum_V < 0) { 
        randNum_V = 0;
      } 

      return this.positionImg = {top: randNum_V + "px", left: randNum_H + "px"};
    }
  }
}
</script>

<style scoped>

#gameArea {
  background-color: var(--wine-a003);
  height: calc(100% - 100px);
}

.game-img {
  height: 100px;
  width: 100px;
  position: relative;
  cursor: pointer;
}

.action-bar {
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
}

</style>