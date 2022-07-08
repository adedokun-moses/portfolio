<template>
  <div class="welcomePpage">
 
      <p>
        {{ title }}
      </p>


   
  </div>
</template>

<script>
export default {
/*   data() {
    return {
     
    };
  },
 */
  props: ["title"]


};
</script>



<style scoped>
.welcomePpage {
  background: url(../assets/home.jpeg) fixed;
  background-size: cover ;
  width: 100%;
  text-align: center;
  height: 400px;
}
.welcomePpage p {
  font-size: 120px;
  padding: 150px 0px;

}

@media only screen and (max-width: 600px) {
  .welcomePpage {
  background: url(../assets/home.jpeg) fixed;
  background-size: cover ;
  width: 100%;
  text-align: center;
  height: 400px;
}
.welcomePpage p {
  font-size: 80px;
  display: flex;
 align-items: center;
 justify-content: center;

}

}
</style>