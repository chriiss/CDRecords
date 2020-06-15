<template>
  <section>
    <div class="app-prestations">
      <div class="title" v-for="data in getDatas.PrestationsComponentHeader" :key="data.id">
        <h1>{{data.title}}</h1>
        <p>{{data.text}}</p>
      </div>
      <nav>
        <ul v-for="data in getDatas.PrestationsComponentNavbar" :key="data.id">
          <router-link :to="data.routerLink" tag="li">{{data.name}}</router-link>
        </ul>
      </nav>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import JsonData from "../../data/data.json";
export default {
  name: "app-prestations",
  data() {
    return {
      getDatas: JsonData
    };
  }
};
</script>

<style lang="scss">
@import "../../styles/Variables.scss";
@import "../../styles/Mixins.scss";
.app-prestations {
  nav {
    background-color: $background_logo;
    margin-top: $page_top;
    width: $page_width;
    margin-left: auto;
    margin-right: auto;

    ul {
      width: $page_width / 3 + 5;
      @media(max-width: $tablet_mobile_device) {
        width: $page_width + 5;
      }
      li {
        text-align: center;
        &:hover {
          background-color: $router_children_hover;
          color: $secondary_color;
        }
      }
    }
  }

  .router-link-exact-active {
    background-color: $router_children_hover;
    color: $secondary_color;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 0.35s;
  }
  .page-enter {
    transform: translateX(-20px);
    opacity: 0;
  }
  .page-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
