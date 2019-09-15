<template>
  
    <input :type='inputType' :placeholder='inputPlace' />
  
</template>

<script>
export default {
  name: "Input",
  props: [
    {inputType: 'type'},
     {inputPlace: 'placeholder'}
  ]
};
</script>

<style scoped>
input {
  border-radius: 3px;
  width: 400px;
  height: 60px;
  font-weight: 600;
  background-color: #ffffff;
  border: 1px solid #74c5ed;
  margin: 1.5em 0;
  padding: 1em;
}
</style>