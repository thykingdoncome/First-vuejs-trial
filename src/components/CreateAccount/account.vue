<template>
  <div class="wrapper">
    <div class="formContainer">
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

      <div>
        <span class="arrow">
          <img
            src="https://marvel-live.freetls.fastly.net/canvas/2019/8/aa126412cfef4d70b42b5cdf04205041?quality=95&fake=.png"
          />
        </span>

        <div>
          <CustomBtn value="Create Now" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account"
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
}

.formContainer {
  background-color: #ffffff;
  border: 2px solid rgba(0, 166, 255, 0.45);
  border-radius: 5px;
  width: 549px;
  height: 597.12px;
}

.arrow {
  background-color: rgba(150, 159, 170, 0.4);
  border: 1px solid #969faa;
  border-radius: 5px;
  width: 106px;
  height: 60px;
}

.arrow img {
  background-color: #ffffff;
  width: 49px;
  height: 49px;
}
</style>