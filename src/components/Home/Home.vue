<template>
  <section>
    <div class="app-home">
      <div v-for="data in getDatas.HomeComponent" :key="data.id">
        <div class="title">
          <h1>{{data.title}}</h1>
          <p>{{data.title_text}}</p>
        </div>
        <div class="bloc-home-one">
          <div class="bloc-home-one-children">
            <img
              :src="require(`@/assets/${data.img_path_prod_music}.png`)"
              :alt="data.img_path_prod_music"
            />
          </div>
          <div class="bloc-home-one-children">
            <p>{{data.text_prod_music}}</p>
            <button type="button" @click="$router.push(data.router_prod_music)">{{data.buttonText}}</button>
          </div>

          <div class="bloc-home-one-children">
            <p>{{data.text_prod_audio}}</p>
            <button type="button" @click="$router.push(data.router_prod_audio)">{{data.buttonText}}</button>
          </div>
          <div class="bloc-home-one-children">
            <img
              :src="require(`@/assets/${data.img_path_prod_audio}.png`)"
              :alt="data.img_path_prod_music"
            />
          </div>

          <div class="bloc-home-one-children">
            <img
              :src="require(`@/assets/${data.img_path_instruments}.png`)"
              :alt="data.img_path_prod_music"
            />
          </div>
          <div class="bloc-home-one-children">
            <p>{{data.text_instruments}}</p>
            <button type="button" @click="$router.push(data.router_instruments)">{{data.buttonText}}</button>
          </div>
        </div>
        <div class="bloc-home-two">
          <div class="title">
            <h2>{{data.subTitle}}</h2>
            <p>{{data.text_material}}</p>
          </div>
          <img
            :src="require(`@/assets/${data.img_path_material}.png`)"
            :alt="data.img_path_prod_music"
          />
          <button type="button" @click="$router.push(data.router_more)">{{data.buttonTextTwo}}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JsonData from "../../data/data.json";
export default {
  name: "app-home",
  data() {
    return {
      getDatas: JsonData
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../styles/Variables.scss";
@import "../../styles/Mixins.scss";
section {
  .app-home {
    .bloc-home-one {
      margin-top: $page_top;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 3px;
      grid-row-gap: 10px;
      font-size: 22px;

      @include tablet_mobile_device();

      &-children {
        width: $page_width - 5;
        @include pos_center();
        text-align: center;
        @media (max-width: $tablet_mobile_device) {
          padding: $nav_hover_active 0px $nav_hover_active 0px;
          width: $page_width;
        }
        img {
          @include img_responsive();
        }

        p {
          margin-top: 74.5px;

          @media(max-width: $tablet_mobile_device) {
            margin-top: 0;
          }
        }

        button {
          margin-top: 71px;
          @include button_customize();
        }

        @for $i from 1 through 2 {
          &:nth-child(#{$i}) {
            @media (max-width: $tablet_mobile_device) {
              order: #{$i};
            }
          }
        }

        &:nth-child(3) {
          @media (max-width: $tablet_mobile_device) {
            order: 4;
          }
        }
        &:nth-child(4) {
          @media (max-width: $tablet_mobile_device) {
            order: 3;
          }
        }

        @for $i from 5 through 6 {
          &:nth-child(#{$i}) {
            @media (max-width: $tablet_mobile_device) {
              order: #{$i};
            }
          }
        }
      }
    }

    .bloc-home-two {
      margin-top: $page_top;

      img {
        width: $page_width;
        height: auto;
        margin-top: $page_top;
        @include pos_center();
      }

      button {
        @include button_customize();
        @include button_pos();
      }
    }
  }
}
</style>
