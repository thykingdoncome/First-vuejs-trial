<template>
  <div id="app">
   
       <!-- <router-link to='/'>Home</router-link> -->
        <!-- <router-link to='/profile'>Profile</router-link> -->
        <!-- <router-link to='/reset'>Reset Password</router-link> -->
        <!-- <router-link to='/createaccount'>Create Account</router-link> -->
   
    <router-view />
   <HomePage />
  </div>
</template>


<script>


export default {
  name: "app",
  components: {
    
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
