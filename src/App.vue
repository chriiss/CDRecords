<template>
  <div id="app">
    <div class="header">
      <app-logo />
      <app-navbar />
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer />
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    "app-logo": Logo,
    "app-navbar": Navbar,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
@import "./styles/Reset.scss";
@import "./styles/Variables.scss";
@import "./styles/Mixins.scss";

body {
  font-family: 'Raleway', serif;
}

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  width: 100%;
}


h1,
h2,
h3 {
  @include titleStyle();
}

h1 {
  @include titleSize();
}

h2 {
  @include titleSize_bis();
}

h3 {
  @include titleSize_ter();
}

section {
  @include pageStyle();

  .title {
    @include pageStyle_bis();
    p {
      @include pageStyle_ter();
    }
  }
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
</style>
