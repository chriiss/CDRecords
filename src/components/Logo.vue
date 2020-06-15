<template>
  <header>
    <div v-for="data in getDatas.LogoComponent" :key="data.id" class="app-logo">
        <router-link :to="data.routerLink">
            <img :src="require(`@/assets/${data.path}.png`)" :alt="data.path" />
        </router-link>
    </div>
  </header>
</template>

<script>
import JsonData from "../data/data.json";
export default {
  name: "app-logo",
  data() {
    return {
      getDatas: JsonData
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/Variables.scss";
@import "../styles/Mixins.scss";
header {
  .app-logo {
    background-color: $background_logo;

    img {
      @include pos_center();
    }
  }
}
</style>