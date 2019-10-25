<template>
  <div class="wrapper">
    <div class="head">
      <div class="text">
        <h2>Create Account</h2>
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

    <div class="formContainer">
      <form action>
        <div class>
          <Input type="text" placeholder="Firstname" autofocus required />
        </div>

        <div class>
          <Input type="text" placeholder="Lastname" required />
        </div>

        <div class>
          <Input type="email" placeholder="Email Address" required />
        </div>

        <div class>
          <Input type="password" placeholder="Password" required />
        </div>

        <div class>
          <Input type="password" placeholder="Confirm Password" required />
        </div>

        <div class="bellow">
          <router-link to="/">
            <Previous />
          </router-link>
          <CustomBtn value="Create Now" class="butt" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CustomBtn from "../CustomBtn";
import Input from "../Inputs";
import Previous from "../Previous";
export default {
  name: "Account",
  components: {
    CustomBtn,
    Input,
    Previous
  }
};
</script>

<style scoped>
.wrapper {
  background: url("https://marvel-live.freetls.fastly.net/canvas/2019/8/38e5882a2a9e4c74928f1bf216f93702?quality=95&fake=.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  opacity: 0.9;
}

.formContainer {
  background-color: #ffffff;
  border: 2px solid rgba(0, 166, 255, 0.45);
  border-radius: 5px;
  width: 600px;
  /* height: 606px; */
  margin: 0 auto;
  align-items: center;
  display: flex;
  padding: 3em 0;
}

.head {
  margin: 0 auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  top: 60px;
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

form {
  margin: 0 auto;
}

.butt {
  width: 50%;
  float: right;
  color: #74c5ed;
}

.below {
  display: flex;
}
</style>