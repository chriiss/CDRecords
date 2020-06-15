<template>
  <div class="app-prodMusic">
    <div
      v-for="data in getDatas.PrestationsChildrenProdMusicComponent"
      :key="data.id"
    >
      <p>{{ data.text }}</p>
    </div>
    <div class="bloc-background">
      <div
        class="bloc-background-children"
        v-for="data in getDatas.PrestationsChildrenProdMusicComponent_bis"
        :key="data.id"
      >
        <div class="bloc-background-children-small">
          <h2>{{ data.subTitle }}</h2>
          <p>{{ data.text }}</p>
        </div>
      </div>
    </div>
    <div v-for="data in getDatas.PrestationsChildrenProdMusicComponent_modal" :key="data.id">
      <button class="button-modal" @click="show">{{data.buttonText}}</button>
      <modal name="prod-music-modal" width="85%" height="auto" :scrollable="true">
        <div class="title title-modal">
          <div class="title-modal-children">
            <h2>{{data.title}}</h2>
          </div>
          <div class="title-modal-children">
            <button class="button-close" @click="hide"><i class="fa fa-times" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="bloc-prestation">
          <div class="bloc-prestation-children">
            <h3>{{data.subTitle_time}}</h3>
            <div class="bloc-prestation-children-bis" v-for="data in getDatas.PrestationsChildrenProdMusicComponent_modal_times" :key="data.id">
              <p>{{data.text}}</p>
            </div>
          </div>
          <div class="bloc-prestation-children">
            <h3>{{data.subTitle_price}}</h3>
            <div class="bloc-prestation-children-bis" v-for="data in getDatas.PrestationsChildrenProdMusicComponent_modal_times" :key="data.id">
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
import JsonData from "../../../data/data.json";
export default {
  name: "app-prodMusic",
  data() {
    return {
      getDatas: JsonData,
    };
  },
  methods: {
    show(){
      this.$modal.show('prod-music-modal');
    },
    hide() {
      this.$modal.hide('prod-music-modal');
    }
  },
};
</script>

<style lang="scss">
@import "../../../styles/Variables.scss";
@import "../../../styles/Mixins.scss";
.app-prodMusic {
  @include childrenPrestationsPage();

  .bloc-background {
    &-children {
      @include backgroundPrestationsProdMusic();
      @include posPrestationsChildrenPage();
    }
  }
}
</style>
