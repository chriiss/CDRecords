<template>
  <section>
    <div class="app-material">
      <div class="title" v-for="data in getDatas.MaterialComponentHeader" :key="data.id">
        <h1>{{data.title}}</h1>
        <p>{{data.text}}</p>
      </div>
      <div class="bloc-material">
        <div
          class="bloc-material-children"
          v-for="data in getDatas.MaterialComponent"
          :key="data.id"
        >
          <img :src="require(`@/assets/${data.path}.png`)" :alt="data.path" />
          <p>{{data.text}}</p>
        </div>
      </div>
      <div class="title" v-for="data in getDatas.MaterialComponentFooter" :key="data.id">
        <h1>{{data.title}}</h1>
        <p>{{data.text}}</p>
        <div class="bloc-partners">
          <div class="bloc-partners-children" v-for="data in getDatas.MaterialComponentFooter_logo" :key="data.id">
            <img :src="require(`@/assets/${data.path}.png`)" :alt="data.path" />
          </div>
        </div>
        <div v-for="data in getDatas.MaterialComponentFooter_text" :key="data.id">
          <p>{{data.text}}</p>
          <button @click="$router.push(data.routerLink)">{{data.buttonText}}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JsonData from "../../data/data.json";
export default {
  name: "app-material",
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
.app-material {
  .bloc-material {
    margin-top: $page_top;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 59px;
    width: $page_width;
    margin-left: auto;
    margin-right: auto;

    @include tablet_mobile_device();
    &-children {
      @media(max-width: $tablet_mobile_device) {
        margin-top: $page_top;
      }
      img {
        @include img_responsive();
      }
      p {
        margin-top: $page_top / 2;
        text-align: center;
        color: $router_children_hover;
        font-weight: bold;
        margin-bottom: $page_top / 2; 
        font-size: 1.15rem;
      }
    }
  }
  .bloc-partners {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  button {
    @include button_customize();
    @include button_pos();
  }
}
</style>