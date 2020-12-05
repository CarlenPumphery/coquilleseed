<template>
  <v-container fluid fill-height>
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-card class="mx-auto card" max-width="1000">
          <h1 class="signin-header">Sign In</h1>
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              label="password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>

            <v-btn class="mr-4" @click="submit">
              submit
            </v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-style: oblique;
  color: #00c853;
}
.card {
  padding: 2%;
}
</style>
