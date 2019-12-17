<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome ToDo app
        </v-card-title>
        <v-card-text>
          <p>ToDo app is design on Vuetify framework for Vue.js, using Nuxt.js.</p>
          <p>
            You can create and edit boards. Each board has to do lists where you can share with others.
          </p>
          <p>
            If you have questions, please contact <a
              href="mailto:ezostrauskas@gmail.com"
              target="_blank"
              title="chat"
            >
              ezostrauskas@gmail.com
            </a>.
          </p>
          <p>
            Find a bug? Want to improve? Report it on the  <a
              href="https://github.com/ezopas"
              target="_blank"
              title="contribute"
            >
              github
            </a>.
          </p>
          <p>Thank you for using beta ToDo app and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; Evaldas</small></em>
          </div>
          <hr class="my-3">
          <a
            href="#"
            target="_blank"
          >
            App Documentation
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    VuetifyLogo
  }
}
</script>
