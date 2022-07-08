<template>
  <Welcome :title="title" />

  <div class="portfolio_list">
    <h5>Projects we have done.</h5>
    <p>Explore some of the projects we've worked on.</p>
    <div class="portfolio">
      <div class="port_img">
        <div class="overlay">
          <a href="#">E Commerce <br> Shop for your favourite clothes and the likes</a>
        </div>
      </div>
      <div  class="port_img">
        <div class="overlay">
          <a href="#">Blog Site <br> Get Updated with the latest trend on the site</a>
        </div>
      </div>
      <div  class="port_img">
        <div class="overlay">
          <a href="#">E Commerce</a>
        </div>
      </div>

      
    </div>
  </div>

  <Footer />
</template>




<script>
import Welcome from "../components/welcome.vue";
import Footer from "../components/footer.vue";
export default {
  components: { Welcome, Footer },

  data() {
    return {
      title: "Portfolio",
    };
  },
};
</script>

<style scoped>
.portfolio_list {
  width: 70%;
  margin: 40px auto;
  text-align: center;
}
.portfolio_list h5 {
  font-size: 50px;
  text-align: center;
}

.portfolio {
  display: flex;
  margin: 50px 0px;
 
}
.portfolio > div {
  width: 100%;
  margin: 15px;
  border-radius: 10px;
   height: 400px;
}
.port_img {
  background: url(../assets/img.png);
  background-size: cover;
  transition: 0.3s ease-out;/* 
  height: ; */
}

/* .port_img:hover {
  background: rgba(0, 0, 0, 0.5);
}
 */
/* .port_img:hover::after {
  content: "E Commerce";
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 40px;
  height: 300px;

} */
.portfolio img {
  width: 100%;
  height: 400px;
  background: red;
  /*   height: max-content; */
}
.port_img:hover .overlay {
  display: block;
  overflow: hidden;
  width: 100%;
  height: inherit;
  background: rgba(0, 0, 0, 0.5);
  align-items: center ;
  justify-content: center;
  display: flex;
}

.overlay a{
  font-size: 30px;
  text-decoration: none;
  text-align: left;
  padding: 20px ;
  color: white;
  
}
.overlay {
  display: none;
}
.overlay:hover {
  overflow: hidden;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
}


@media only screen and (max-width: 600px) {
  .portfolio_list {
  width: 100%;
  margin: 0px;
  text-align: center;
}
.portfolio_list h5 {
  font-size: 50px;
  text-align: center;
  margin-top: 15px;
}
  .portfolio {
  display: flex;
  margin: 10px 0px;
  flex-direction: column;
}
.portfolio > div {
  width: 90%; 
  margin: 20px auto;
  border-radius: 10px;
   height: 400px;

}
}
</style>
