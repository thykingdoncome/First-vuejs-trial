<template>
  <div class="container">
    <div class="section">
      <div>
          <p>
              Please enter a valid email, we will send you a reset password link
          </p>

 <Input type="email" placeholder="Email Address" required autofocus />          
      </div>

      <div>
 <span class="arrow">
          <img
            src="https://marvel-live.freetls.fastly.net/canvas/2019/8/aa126412cfef4d70b42b5cdf04205041?quality=95&fake=.png"
          />
        </span>

        <div>
          <CustomBtn value="Reset Password" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword"
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
}

.section {
  background-color: #ffffff;
  border: 2px solid rgba(0, 166, 255, 0.45);
  border-radius: 5px;
  width: 549px;
  height: 329.56px;
}
</style>