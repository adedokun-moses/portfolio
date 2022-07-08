<template>

  <Welcome :title="title" />
<!--   <h5>Blog Detials{{ id}}</h5> -->

  <div class="details">
    <h4>Post Currently Not Available <br></h4>
    <p><router-link to="/"> Return To Home Page</router-link></p>
  
  </div>
  <!--   <p>The JOB id is {{ $route.params.id}}</p> -->
    <Footer/>
</template>

<script>
import Welcome from "../components/welcome.vue";
import Footer from "../components/footer.vue";
export default {
  
  components: { Welcome, Footer },
  data(){
    return{
        title: "Blog Details",
        id: this.$route.params.id
    }
  }
  
};
</script>

<style>
.details{
  text-align: center;
  margin: 200px 0px;
}
.details h4{
  font-size: 25px;
  margin: 40px;
}
.details a{
  font-size: 20px;
  margin: 20px;
  background: black;
  text-decoration: none;
  border-radius: 10px;
  color: white;
  padding: 20px;
}
</style>