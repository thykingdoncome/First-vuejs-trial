<template>
  <div class="body-bg">
    <div class="selector">
      <div class="logo-wrapper">
        <div class="logo-cont">
          <div class="logoBox">
            <img
              src="https://marvel-live.freetls.fastly.net/canvas/2019/8/f5dc93f207124dec838c455610b571d4?quality=95&fake=.png"
              alt="logo"
            />
          </div>

          <div class="logoText">
            <h4>
              DIOCESE OF KWARA
              <br />(ANGLICAN COMMUNION)
            </h4>
          </div>
        </div>
      </div>

      <div class="form-wrapper">
        <div>
          <form>
            <div class="formData">
              <Input type="email" placeholder="Email Address" autofocus required/>
             
            </div>

            <div class="formData">
             <Input type="password" placeholder="Password" required/>
            </div>

            <div>
              <CustomBtn value="Login" />
            </div>
          </form>

          <hr />
        </div>

        <div class="createAcc">
          <div>
            <span>
              Forget password?
              <a href="#">Click here</a>
            </span>
          </div>

          <div>
            <span>
              <a href="#">Create Account</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import CustomBtn from '../CustomBtn'
import Input from '../Inputs'


export default {
  name: "HomePage",
  components: {
     CustomBtn,
         Input
  }
};
</script>

<style scoped>

.body-bg {
  background: url("https://marvel-live.freetls.fastly.net/canvas/2019/8/5405bc61642a4a2cbca38d39aff72a90?quality=95&fake=.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  display: flex;
}
.body-bg:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #283146, #0f0300);
  opacity: 0.6;
}

.selector {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.21);
  border: 2px solid #76c4f1;
  border-radius: 5px;
  width: 900px;
  height: 606px;
  margin: 0 auto;
  padding: 2em;
}
.logo-wrapper,
.form-wrapper {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.logo-wrapper {
  text-align: center;
  position: relative;
  bottom: 5em;
}

.form-wrapper {
  flex-wrap: wrap;
  position: relative;
  top: 2em;
}

.logoBox {
  background-color: #ffffff;
  border-radius: 100%;
  width: 169px;
  height: 166px;
  margin: 3em auto;
  padding: 0.7em 0;
}

.logoBox img {
  width: 76.6px;
  border-radius: 6px;
}

.logoText {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 23px;
  text-align: center;
  line-height: 30px;
}
/* 
.form-wrapper input {
  border-radius: 3px;
  width: 400px;
  height: 60px;
  font-weight: 600;
}

.formData input {
  background-color: #ffffff;
  border: 1px solid #74c5ed;
  margin: 1.5em 0;
  padding: 1em;
}  */

.createAcc {
  display: flex;
  position: relative;
  bottom: 3em;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5em 0 0;
  color: white;
}

a {
  text-decoration: none;
  color: #f0f3f1;
  font-weight: 900;
}

a:hover {
  text-decoration: underline;
}

br {
  border: 1px solid rgba(150, 159, 170, 0.46);
}
</style>