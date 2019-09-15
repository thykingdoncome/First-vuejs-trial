<template>
  <input class="btn" type="button" value={label} />
</template>

<script>
export default {
  name: "CustomBtn",
  props: ["label"]
};
</script>

<style scoped>
.btn {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #76c4f1;
  border-radius: 5px;
  cursor: pointer;
  margin: 2em 0 5em;
  transition: 0.5s;
  color: white;
  width: 400px;
  height: 60px;
  font-weight: 600;
}

.btn:hover {
  background: #74c5ed;
  color: white;
}
</style>