<template>
  <div class="wrap-transe">
    <Purchase v-if="purchase" />
    <Transfer v-if="transaction" />
    <Output v-if="output" />
    <Deduction v-if="deduction" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      purchase: false,
      transaction: false,
      output: false,
      deduction: false,
    };
  },
};
</script>

<style scoped>
.wrap-transe {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #343437;
}
</style>