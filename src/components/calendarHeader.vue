<script setup>
import chevron from "../assets/chevron.png"; // importing chevron image
</script>

<template>
  <div class="header">
    <div class="wrapper">
      <div class="left-chevron chevron">
        <img :src="chevron" alt="left-chevron" />
      </div>
      <div class="year">
        <p>2023</p>
      </div>
      <div class="month">
        <h2>February</h2>
      </div>
      <div class="right-chevron chevron">
        <img :src="chevron" alt="right-chevron" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgb(206, 206, 206);
  border-radius: 5px 5px 0 0;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .month {
      h2 {
        font-size: 32px;
        font-weight: bolder;
        letter-spacing: 5.5px;
      }
    }
    .chevron {
      user-select: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.5s;
      &:hover {
        background-color: rgb(182, 182, 182);
      }
      img {
        width: 100%;
        height: auto;
        transform: translateX(2px);
      }
    }
    .left-chevron {
      transform: rotate(180deg);
    }
  }
}
</style>
