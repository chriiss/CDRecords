<template>
  <nav class="app-navbar">
    <button type="button" @click="menuEvent">
      <i class="fa fa-times" aria-hidden="true" :class="{isActive}"></i>
      <i class="fa fa-bars" aria-hidden="true" :class="{menuFade}"></i>
    </button>
    <ul v-for="data in getDatas.NavbarComponent" :key="data.id" :class="{isActive}">
      <router-link :to="data.routerLink" tag="li">{{data.name}}</router-link>
    </ul>
  </nav>
</template>

<script>
import JsonData from "../data/data.json";
export default {
  name: "app-navbar",
  data() {
    return {
      getDatas: JsonData,
      isActive: true,
      menuFade: false
    };
  },
  methods: {
    menuEvent() {
      this.isActive = !this.isActive;
      this.menuFade = !this.menuFade;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/Variables.scss";
@import "../styles/Mixins.scss";
nav {
  display: flex !important;
  background-color: $primary_color;
  color: $secondary_color;
  justify-content: space-around;

  @include tablet_mobile_device();

  button {
    display: none;

    @media (max-width: $tablet_mobile_device) {
      display: block;
      background-color: $primary_color;
      color: $secondary_color;
      border: none;
      font-size: 1rem + 0.5;
      padding: calc(25px / 2);
      cursor: pointer;
      outline: none;
    }

    i {
      @media (max-width: $tablet_mobile_device) {
        float: right;
        margin-right: 25px;
      }
    }
  }

  ul {
    li {
      cursor: pointer;
      padding: 25px;
      font-size: 1rem;

      &:hover {
        background-color: $primary_color_hover;
        transition-duration: 0.5s;
        padding: 25px;
        color: $primary_color;
      }
    }
  }
}

.isActive,
.menuFade {
  @media (max-width: $tablet_mobile_device) {
    display: none;
  }
}

.router-link-exact-active {
  background-color: $primary_color_hover;
  color: $primary_color;
}
</style>