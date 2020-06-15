<template>
  <section>
    <div class="app-contact">
      <div class="title" v-for="data in getDatas.contactComponentHeader" :key="data.id">
        <h1>{{ data.title }}</h1>
        <p>{{ data.text }}</p>
      </div>
      <form name="contact-form" method="post" @submit.prevent="sendForm">
        <div class="form-star">
          <p>* Champs obligatoires</p>
        </div>
        <div class="form-group" v-for="data in getDatas.contactComponentForms" :key="data.id">
          <label :for="data.lastname">{{ data.label_lastname }}</label>
          <input
            type="text"
            :id="data.lastname"
            :placeholder="data.placeholder_lastname"
            :class="{
              'is-invalid': $v.lastname.$error,
              'is-valid': !$v.lastname.$invalid,
            }"
            v-model="lastname"
          />

          <label :for="data.firstname">{{ data.label_firstname }}</label>
          <input
            type="text"
            :id="data.firstname"
            :placeholder="data.placeholder_firstname"
            :class="{
              'is-invalid': $v.firstname.$error,
              'is-valid': !$v.firstname.$invalid,
            }"
            v-model="firstname"
          />

          <label :for="data.compagnie">{{ data.label_compagnie }}</label>
          <input
            type="text"
            :id="data.compagnie"
            :placeholder="data.placeholder_compagnie"
            v-model="compagnie"
          />

          <label :for="data.mail">{{ data.label_mail }}</label>
          <input
            type="email"
            :id="data.mail"
            :placeholder="data.placeholder_mail"
            :class="{
              'is-invalid': $v.firstname.$error,
              'is-valid': !$v.firstname.$invalid,
            }"
            v-model="mail"
          />

          <label :for="data.phone">{{ data.label_phone }}</label>
          <input
            type="text"
            :id="data.phone"
            :placeholder="data.placeholder_phone"
            :class="{
              'is-invalid': $v.firstname.$error,
              'is-valid': !$v.firstname.$invalid,
            }"
            v-model.number="phone"
          />
        </div>

        <div class="form-group" v-for="data in getDatas.contactComponentForms_bis" :key="data.id">
          <label :for="data.name">{{ data.label }}</label>
          <select :id="data.name" v-model="selectEvent" required>
            <option
              v-for="data in getDatas.contactComponentForms_select"
              :key="data.id"
              :value="data.id"
            >{{ data.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <div
            v-for="data in getDatas.contactComponentForms_bis_children"
            :key="data.id"
            :class="{ isActive }"
          >
            <label :for="data.name">{{ data.label }}</label>
            <select :id="data.name">
              <option
                v-for="data in getDatas.contactComponentForms_select_children"
                :key="data.id"
              >{{ data.name }}</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div
            v-for="data in getDatas.contactComponentForms_bis_children"
            :key="data.id"
            :class="{ isActive_bis }"
          >
            <label :for="data.name">{{ data.label }}</label>
            <select :id="data.name">
              <option
                v-for="data in getDatas.contactComponentForms_select_children_bis"
                :key="data.id"
              >{{ data.name }}</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div
            v-for="data in getDatas.contactComponentForms_bis_children"
            :key="data.id"
            :class="{ isActive_ter }"
          >
            <label :for="data.name">{{ data.label }}</label>
            <select :id="data.name">
              <option
                v-for="data in getDatas.contactComponentForms_select_children_ter"
                :key="data.id"
              >{{ data.name }}</option>
            </select>
          </div>
        </div>

        <div class="form-group" v-for="data in getDatas.contactComponentForms_ter" :key="data.id">
          <label :for="data.name">{{ data.label }}</label>
          <textarea rows="10" :id="data.name" :placeholder="data.placeholder" v-model="description"></textarea>

          <button type="submit" :class="{ invalid: $v.$invalid }">{{ data.send }}</button>
        </div>
        <div class="valid-form" v-for="validation in validations" :key="validation">
          {{validation}} <i class="fa fa-check-circle-o" aria-hidden="true"></i>
        </div>
        <div class="error-form" v-for="error in errors" :key="error">
          {{error}} <i class="fa fa-times-circle-o" aria-hidden="true"></i>
        </div>
      </form>
    </div>
    <div class="title" v-for="data in getDatas.contactComponentMail_footer" :key="data.id">
      <h1>{{data.title}}</h1>
      <p>{{data.text}} <span><a href="mailto:partenariat@cd-records.com">{{data.mail}}</a></span></p>
      <p>{{data.text_bis}} <span><a href="mailto:événement@cd-records.com">{{data.mail_bis}}</a></span></p>
      <p>{{data.text_ter}} <span><a href="mailto:revente@cd-records.com">{{data.mail_ter}}</a></span></p>
    </div>
  </section>
</template>

<script>
import JsonData from "../../data/data";
import { required, alpha, email, numeric } from "vuelidate/lib/validators";
export default {
  name: "app-contact",
  data() {
    return {
      getDatas: JsonData,
      selectEvent: 0,
      isActive: true,
      isActive_bis: true,
      isActive_ter: true,
      lastname: null,
      firstname: null,
      compagnie: null,
      mail: null,
      phone: null,
      description: null,
      validations: [],
      errors: []
    };
  },
  validations: {
    lastname: { required, alpha },
    firstname: { required, alpha },
    mail: { required, email },
    phone: { required, numeric },
    description: { required, alpha }
  },
  watch: {
    selectEvent(value) {
      if (value === 59) {
        this.isActive = false;
        this.isActive_bis = true;
        this.isActive_ter = true;
      }
      if (value === 60) {
        this.isActive = true;
        this.isActive_bis = false;
        this.isActive_ter = true;
      }
      if (value === 61) {
        this.isActive = true;
        this.isActive_bis = true;
        this.isActive_ter = false;
      }
    }
  },
  methods: {
    sendForm() {
      if (this.$v.$invalid) {
        this.errors.push('Champs incorect rentrer les conditions dans les champs designé')
        this.validations.splice(0);
      } else {
        this.validations.push('Votre demande à bien été envoyée')
        this.errors.splice(0);
        this.isValid = true;
        this.lastname = null;
        this.firstname = null;
        this.compagnie = null;
        this.mail = null;
        this.phone = null;
        this.description = null;
        this.selectEvent = 0;
        this.isActive = true;
        this.isActive_bis = true;
        this.isActive_ter = true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../styles//Variables.scss";
@import "../../styles/Mixins.scss";

.app-contact {
  form {
    margin-top: $page_top;
    margin-bottom: $page_top;
    width: $page_width;
    background-color: $modal_color;
    padding-bottom: $page_top;
    @include pos_center();

    .form-star {
      text-align: right;
      padding-top: $page_top / 2;
      padding-right: 15%;
    }

    .form-group {
      width: $page_width - 25;
      @include pos_center();
      margin-top: $page_top / 2;

      $fields: "input", "select", "textarea";

      @each $field in $fields {
        #{$field} {
          width: $page_width + 5;
          padding: 12px 0px 12px 0px;
          border: none;
          outline: none;
          background-color: $secondary_color;
          border-radius: 4px;
          margin-top: 16px;
          margin-bottom: 16px;
          resize: vertical;

          &:focus {
            border: 2px solid $primary_color;
          }
        }
      }
    }

    button {
      @include button_customize();
      @include button_pos();
    }
  }

  .invalid {
    opacity: 0.4;
    cursor: not-allowed !important;
  }

  @mixin theme-colors($background-theme: true) {
    @if $background-theme {
      background-color: #19A73D;;
      color: $secondary_color;
    } @else {
      background-color: #B91111;
      color: $secondary_color;
    }
  }

  @mixin valid-error-pos() {
    font-weight: bold;
    text-align: center;
    padding: $page_top / 3;
    width: 50%;
    @include button_pos();
  }

  .valid-form {
    @include theme-colors($background-theme: true);
    @include valid-error-pos();
  }

  .error-form {
    @include theme-colors($background-theme: false);
    @include valid-error-pos();
  }

  $actives: "Active", "Active_bis", "Active_ter";

  @each $active in $actives {
    .is#{$active} {
      display: none;
    }
  }
}


.title {
  p {
    text-align: jusitfy;
  }
}
</style>
