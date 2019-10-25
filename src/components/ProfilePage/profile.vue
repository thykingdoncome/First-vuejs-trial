<template>
  <div class="contain">
    <section class="top">
      <div class="headnav">
        <nav class="header">
          <div class="logoBox">
            <img
              src="https://marvel-live.freetls.fastly.net/canvas/2019/8/f5dc93f207124dec838c455610b571d4?quality=95&fake=.png"
              alt="logo"
            />
          </div>

          <ul>
            <li>About</li>
            <li>Inbox</li>

            <li>
              <i class="fas fa-user"></i> Hi Admin!
            </li>

            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>
      </div>

      <div class="search">
        <div class="subSearch">
          <p>What are you lookin for?</p>

          <div class="searchFld">
            <Input type="text" placeholder="Type here to search" class="input" />
            <button class="search_btn">
              <i class="fas fa-search"></i>
            </button>
          </div>

          <p>Hit enter key to search</p>
        </div>
      </div>
    </section>

    <section class="profile">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </div>
</template>

<script>
import Card from '../Cards'
import Input from "../Inputs"

export default {
  name: "Profile",
  components: {
    Input,
    Card
  }
};
</script>

<style scoped>

.top {
  background: #e0f0f8;
  padding: 1.5em 5%;
  height: 561px;
  font-family: "Segoe UI";
  width: 100%;
}
.headnav {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
}

nav {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav ul {
  display: flex;
}

nav ul li {
  display: inline-flex;
  list-style: none;
  margin: 0 10px;
}

.logoBox {
  background-color: #ffffff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  text-align: center;
  padding: 0.25em 0;
}

.logoBox img {
  border-radius: 100%;
  height: 60px;
}

.search {
  display: flex;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  height: calc(100% - 80px);
} 
.subSearch {
  margin: 0 auto;
  width: 100%;
}

.subSearch p {
  font-weight: 700;
}

.subSearch p:nth-of-type(2) {
  float: right;
  color:  #D83629;
}

.input {
  width: calc(100% - 41px);
  border: 0;
  border-radius: 3px 0 0 3px;
  height: 90px;
}

.searchFld {
  width: 100%;
}

.search_btn {
  width: 40px;
  border: 0;
  height: 90px;
  background: #ffffff;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  color: #74C5ED;
}

.profile{
  flex-wrap: wrap;
  display: flex;
  padding: 3em 0;
  align-items: center;
  justify-content: space-evenly;
}
</style>