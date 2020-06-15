<template>
  <div class="app-instruments">
    <div v-for="data in getDatas.PrestationsChildrenProdInstrumentsComponent" :key="data.id">
      <p>{{ data.text }}</p>
    </div>
    <div class="bloc-background">
      <div
        class="bloc-background-children"
        v-for="data in getDatas.PrestationsChildrenProdInstrumentsComponent_bis"
        :key="data.id"
      >
        <div class="bloc-background-children-small">
          <h2>{{ data.subTitle }}</h2>
          <ul>
            <li>{{data.list}}</li>
            <li>{{data.list_bis}}</li>
            <li>{{data.list_ter}}</li>
            <li>{{data.list_four}}</li>
            <li>{{data.list_five}}</li>
            <li>{{data.list_six}}</li>
            <li>{{data.list_seven}}</li>
            <li>{{data.list_eight}}</li>
            <li>{{data.list_nine}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-for="data in getDatas.PrestationsChildrenProdInstrumentsComponent_modal" :key="data.id">
      <button class="button-modal" @click="show">{{data.buttonText}}</button>
      <modal name="prod-instruments-modal" width="85%" height="auto" :scrollable="true">
        <div class="title title-modal">
          <div class="title-modal-children">
            <h2>{{data.title}}</h2>
          </div>
          <div class="title-modal-children">
            <button class="button-close" @click="hide">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="bloc-prestation">
          <div class="bloc-prestation-children">
            <h3>{{data.subTitle_time}}</h3>
            <div
              class="bloc-prestation-children-bis"
              v-for="data in getDatas.PrestationsChildrenProdInstrumentsComponent_modal_times"
              :key="data.id"
            >
              <p>{{data.text}}</p>
            </div>
          </div>
          <div class="bloc-prestation-children">
            <h3>{{data.subTitle_price}}</h3>
            <div
              class="bloc-prestation-children-bis"
              v-for="data in getDatas.PrestationsChildrenProdInstrumentsComponent_modal_times"
              :key="data.id"
            >
              <p>{{data.price}}</p>
            </div>
          </div>
        </div>
        <button class="button-modal" @click="$router.push('/contact')">Contactez-nous</button>
      </modal>
    </div>
  </div>
</template>

<script>
import JsonData from "../../../data/data.json"
export default {
  name: "app-instruments",
  data() {
    return {
      getDatas: JsonData
    }
  },
  methods: {
    show() {
      this.$modal.show("prod-instruments-modal");
    },
    hide() {
      this.$modal.hide("prod-instruments-modal");
    }
  }
};
</script>


<style lang="scss">
@import "../../../styles/Variables.scss";
@import "../../../styles/Mixins.scss";
.app-instruments {
  @include childrenPrestationsPage();

  .bloc-background {
    &-children {
      @include backgroundPrestationsInstruments();
      @include posPrestationsChildrenPage();

      &-small {
        p:nth-child(3) {
          font-weight: bold;
        }
        ul {
          margin-left: 10px;
          text-align: center;

          li {
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>