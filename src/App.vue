<template>
  <div id="app">
     <nav>
       <router-link to='/'>Home</router-link>
        <router-link to='/profile'>Profile</router-link>
        <router-link to='/reset'>Reset Password</router-link>
        <router-link to='/createaccount'>Create Account</router-link>
    </nav>
    <router-view />
   <HomePage />
  </div>
</template>


<script>
// import HomePage from "./components/HomePage";

export default {
  name: "app",
  components: {
    // HomePage
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
