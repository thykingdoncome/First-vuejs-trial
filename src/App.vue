<template>
  <div id="app">
   <HomePage />
  </div>
</template>


<script>
import HomePage from "./components/HomePage";

export default {
  name: "app",
  components: {
    HomePage
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
