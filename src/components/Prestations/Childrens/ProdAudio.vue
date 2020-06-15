<template>
  <div class="app-prodAudio">
    <div v-for="data in getDatas.PrestationsChildrenProdAudioComponent" :key="data.id">
      <p>{{ data.text }}</p>
    </div>
    <div class="bloc-background">
      <div
        class="bloc-background-children"
        v-for="data in getDatas.PrestationsChildrenProdAudioComponent_bis"
        :key="data.id"
      >
        <div class="bloc-background-children-small">
          <h2>{{ data.subTitle }}</h2>
          <p>{{ data.text }}</p>
          <p>{{data.text_pack}}</p>
          <ul>
            <li>{{data.list}}</li>
            <li>{{data.list_bis}}</li>
            <li>{{data.list_ter}}</li>
            <li>{{data.list_four}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-for="data in getDatas.PrestationsChildrenProdAudioComponent_modal" :key="data.id">
      <button class="button-modal" @click="show">{{data.buttonText}}</button>
      <modal name="prod-audio-modal" width="85%" height="auto" :scrollable="true">
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
              v-for="data in getDatas.PrestationsChildrenProdAudioComponent_modal_times"
              :key="data.id"
            >
              <p>{{data.text}}</p>
            </div>
          </div>
          <div class="bloc-prestation-children">
            <h3>{{data.subTitle_price}}</h3>
            <div
              class="bloc-prestation-children-bis"
              v-for="data in getDatas.PrestationsChildrenProdAudioComponent_modal_times"
              :key="data.id"
            >
              <p>{{data.price}}</p>
            </div>
          </div>
        </div>
        <button class="button-modal" @click="$router.push('/contact')">Contactez-nous</button>
      </modal>
    </div>
    <div class="project-custom">
      <h4>Je souhaite personnaliser mon projet</h4>
      <p>Vous avez un projet précis en tête ? Contacez-nous directement afin que nous puissions vous proposer un devis correspondant.</p>
      <button class="button-modal" @click="$router.push('/contact')">Nous contacter</button>
    </div>
  </div>
</template>

<script>
import JsonData from "../../../data/data.json"
export default {
  name: "app-prodAudio",
  data() {
    return {
      getDatas: JsonData
    }
  },
  methods: {
    show() {
      this.$modal.show("prod-audio-modal");
    },
    hide() {
      this.$modal.hide("prod-audio-modal");
    }
  }
};
</script>


<style lang="scss">
@import "../../../styles/Variables.scss";
@import "../../../styles/Mixins.scss";
.app-prodAudio {
  @include childrenPrestationsPage();

  .bloc-background {
    &-children {
      @include borderPrestationsProdAudio();
      @include posPrestationsChildrenPage();

      &-small {
        p:nth-child(3) {
          font-weight: bold;
        }
        ul {
          margin-left: 10px;
        }
      }
    }
  }

  .project-custom {
    margin-top: $page_top + 24;
    h4 {
      color: $primary_color;
      font-size: 24px;
      font-weight: bold;
    }
    p {
      margin-top: $page_top / 2;
    }
  }
}
</style>