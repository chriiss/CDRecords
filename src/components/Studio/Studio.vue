<template>
  <section>
    <div class="app-studio">
      <div class="title" v-for="data in getDatas.StudioComponentHeader" :key="data.id">
        <h1>{{ data.title }}</h1>
      </div>
      <div class="bloc-studio" v-for="data in getDatas.StudioComponent" :key="data.id">
        <div class="bloc-studio-children">
          <img :src="require(`@/assets/${data.path}.png`)" :alt="data.path" />
        </div>
        <div class="bloc-studio-children">
          <p>{{ data.about }}</p>
        </div>
      </div>
      <div class="title" v-for="data in getDatas.StudioComponentFooter_title" :key="data.id">
        <h1>{{ data.title }}</h1>
      </div>
      <div class="bloc-studio-bis">
        <div
          class="bloc-studio-bis-children"
          v-for="data in getDatas.StudioComponentFooter"
          :key="data.id"
        >
          <img :src="require(`@/assets/${data.path}.png`)" :alt="data.path" />
          <p>{{data.title}}</p>
          <p>{{data.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JsonData from "../../data/data.json";
export default {
  name: "app-studio",
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

@mixin flex_method() {
  margin-top: $page_top;
  margin-bottom: $page_top;
  display: flex;
  width: $page_width;
  margin-left: auto;
  margin-right: auto;
}

.app-studio {
  .bloc-studio {
    @include flex_method();
    @include tablet_mobile_device();

    &-children {
        img {
          @include img_responsive();
        }
    }

    &-children:nth-child(2) {
      width: $page_width / 1.2;
      padding: 2px 0px 0px 19px;
      text-align: justify;
      font-size: 1.4rem;

      @media (max-width: $tablet_mobile_device) {
        margin-top: 10px;
        width: $page_width;
      }
    }
  }

  .bloc-studio-bis {
      @include flex_method();
      justify-content: space-around;
      @include tablet_mobile_device();

        &-children {
            width: $page_width / 3;
            @media(max-width: $tablet_mobile_device) {
                width: $page_width / 1.5;
                @include pos_center();
            }
            &:nth-child(2) {
                @media(max-width: $tablet_mobile_device) {
                    margin-top: $page_top;
                }
            }
            img {
                @include img_responsive(); 
            }

            p {
                margin-top: $page_top / 1.5;
                font-size: 1.4rem;
                text-align: justify;
            }

            p:nth-child(2) {
                text-align: center;
                 font-weight: bold;
                 color: $primary_color;
            }
        }
    }
}
</style>
