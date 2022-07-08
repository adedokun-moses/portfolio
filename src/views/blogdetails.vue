<template>

  <Welcome :title="title" />
<!--   <h5>Blog Detials{{ id}}</h5> -->

  <div class="details">
    <h4>Not Available <br> Return To Home Page</h4>
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
.details h4{
  text-align: center;
  font-size: 30px;
  margin: 30px 0px;
}
</style>