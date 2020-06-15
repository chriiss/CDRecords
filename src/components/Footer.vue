<template>
  <footer>
    <div class="app-footer">
      <div class="footer-bloc">
        <div class="footer-bloc-children" v-for="data in getDatas.footerComponent" :key="data.id">
          <h3>{{ data.title }}</h3>
          <ul>
            <li>
              <a :href="data.routerLink">{{ data.list }}</a>
            </li>
            <li>
              <a :href="data.routerLink_bis">{{ data.list_bis }}</a>
            </li>
            <li>
              <a :href="data.routerLink_ter">{{ data.list_ter }}</a>
            </li>
            <li>
              <a :href="data.routerLink_four">{{ data.list_four }}</a>
            </li>
            <li>
              <a :href="data.routerLink_five">{{ data.list_five }}</a>
            </li>
            <li>
              <a :href="data.routerLink_six">{{ data.list_six }}</a>
            </li>
            <li>
              <a :href="data.routerLink_map" target="_blank">
                {{
                data.list_seven
                }}
              </a>
            </li>
            <li>
              <a :href="data.routerLink_map" target="_blank">
                {{
                data.list_eight
                }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="footer-bloc-copyright"
        v-for="data in getDatas.footerComponent_copyright"
        :key="data.id"
      >
        <p>&#169; {{ data.text }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import JsonData from "../data/data.json";
export default {
  name: "app-footer",
  data() {
    return {
      getDatas: JsonData
    };
  }
};
</script>

<style lang="scss">
@import "../styles/Variables.scss";
@import "../styles/Mixins.scss";
footer {
  background-color: $background_logo;
  position: relative;

  .app-footer {
    padding: $page_top 0px $page_top 0px;
    margin-top: $page_top;
    .footer-bloc {
      display: flex;
      justify-content: space-around;
      @include tablet_mobile_device();
      &-children {
        color: $secondary_color;
        margin-left: $page_top / 2;
        h3 {
          text-align: left !important;
        }
        ul {
          margin-top: $page_top / 2;
          margin-bottom: $page_top / 2;
          a {
            color: $secondary_color;
            text-decoration: none;
            cursor: pointer;
            background: none;
            line-height: $page_top / 2;
          }
        }
      }
    }
    .footer-bloc-copyright {
      color: $secondary_color;
      text-align: center;
      margin-top: $page_top / 2;
    }
  }
}
</style>
