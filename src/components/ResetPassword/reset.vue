<template>
  <div class="container">

<div class="head">
      <div class="text">
        <h2>Reset Password</h2>
      </div>

      <router-link to="/">
        <div class="logoBox">
          <img
            src="https://marvel-live.freetls.fastly.net/canvas/2019/8/f5dc93f207124dec838c455610b571d4?quality=95&fake=.png"
            alt="logo"
          />
        </div>
      </router-link>
    </div>

    <div class="section">
      <p>Please enter a valid email, we will send you a reset password link</p>
      <div>
        <Input type="email" placeholder="Email Address" required autofocus />
      </div>

      <div class="bellow">
        <router-link to="/">
          <Previous />
        </router-link>

        <CustomBtn value="Reset Password" class="butt" />
      </div>
    </div>
  </div>
</template>


<script>
import Input from "../Inputs";
import CustomBtn from "../CustomBtn";
import Previous from "../Previous";

export default {
  name: "Reset",
  components: {
    Input,
    CustomBtn,
    Previous
  }
};
</script>

<style scoped>
.container {
  background: url("https://marvel-live.freetls.fastly.net/canvas/2019/8/38e5882a2a9e4c74928f1bf216f93702?quality=95&fake=.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  color: black;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  opacity: 0.9; 
}

.section {
  background-color: #ffffff;
  border: 2px solid rgba(0, 166, 255, 0.45);
  border-radius: 5px;
  width: 549px;
  height: 329.56px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 100px;
}

.section p{
  font-weight: 550;
}

.butt {
   width: 50%;
  float: right;
  color: #74c5ed;
}

.bellow {
  width: 400px;
} 

.head {
  margin: 0 auto;
  width: 580px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  top: 160px;
  left: 35px;
  z-index: 10;
}

.text {
  color: rgb(250, 19, 19);
}

.logoBox {
  background-color: #ffffff;
  border-radius: 100%;
  width: 169px;
  height: 166px;
  border: 1px solid #74c5ed;
  padding: 0.7em 0;
}

.logoBox img {
  width: 76.6px;
  border-radius: 6px;
}
</style>