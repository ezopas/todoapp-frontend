<template>
  <v-container>
    <v-form @submit.prevent="submit">

      <v-text-field
        label="E-mail"
        v-model="form.email"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        label="Password"
        v-model="form.password"
        type="password"
        required
      ></v-text-field>

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
          email:null,
          password:null
        }
      }
    },
    created(){
      // if(User.loggedIn()){
      //   this.$router.push({name:'forum'})
      // }
    },
    methods:{
      // login(){

      //   //User.login(this.form)
      // }

      async submit() {
        await this.$auth.loginWith("local", {
          data: this.form
        })

        this.$router.push({
          path: this.$route.query.redirect || "/"
        })
      // submit() {
      //   console.log("darau");
      //     axios.post('http://127.0.0.1:9000/api/auth/login', this.form)
      //     .then(res => console.log(res.data))
      //     .error(error => console.log(error.response.data));
      }
    }
  }
</script>

<style>
</style>
