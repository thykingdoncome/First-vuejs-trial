<template>
  <div id="cardContainer">
     <div class="topCard">
        <h1>
          {{title}}
        </h1>

        <h4>
          {{branch}}
        </h4>

        <h5>
          {{taincy}}
        </h5>
    </div>

    <div class="image">
      {{images}}
    </div>

    <div class="bottomCard">
      
    </div> 

    
  </div>
</template>

<script>
export default {
  name: 'Card',
  data(){
    return {
      title: 'hghgcuhcuhuj',
      branch: '',
      taincy: '',
      period: '',
      images: '',
      dob: '',
      mail: '',
      phone: ''
    }
  }
};
</script>

<style scoped>
 #cardContainer {
  background-color: #ffffff;
  border: 1px solid #75c6ef;
  border-radius: 5px;
  width: 245px;
  height: 305.5px;
  margin: 1em;
  color: black;
}

.topCard {
  background-color: rgba(117, 198, 239, 0.34);
  border: 1px solid #75c6ef;
  opacity: 0.35;
  width: 245px;
  height: 128px;
}
/* 
.bottomCard {

}   */

.image{
  border: 5px solid rgb(179, 17, 17);
  border-radius: 100px;
  width: 80px;
  height: 82.12px;
  background: black;
  z-index: 10;
  position: relative;
  bottom: 40px;
  margin: 0 auto;
}
</style>