<template>
  <v-container>
    <v-form @submit.prevent="submit">

      <v-text-field
        label="E-mail"
        v-model.trim="form.email"
        type="email"
        required
      ></v-text-field>
      <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small>
      <v-text-field
        label="Password"
        v-model.trim="form.password"
        type="password"
        required
      ></v-text-field>
      <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small>
      <v-btn
        color="green"
        type="submit"
      >Login</v-btn>

      <router-link to="/signup">
        <v-btn color="blue">Sign Up</v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    middleware: ['guest'],
    data(){
      return {
        form :{
          email: null,
          password: null
        }
      }
    },
    methods:{

      async submit() {
        await this.$auth.loginWith("local", {
          data: this.form
        });

        this.$router.push({
          path: this.$route.query.redirect || "/board"
        });
      }
    }
  }
</script>

<style>
</style>
