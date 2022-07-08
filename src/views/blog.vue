<template>
  <Welcome :title="title" />
  <div class="blog">
    <div v-for="blog in blogpost" :key="blog.id" class="blogpage">
      {{ blog.image }} <br>
      {{blog.title}}
    </div>

    <div >2</div>
  </div>


  <Footer/>
</template>






<script>
import Welcome from "../components/welcome.vue";

import Footer from "../components/footer.vue";

export default {
  components: { Welcome, Footer },
  data() {
    return {
      title: "Blog",

      blogpost: [
        {
          title: "Google inks pact for new 35-storey office",
          id: 1,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },
        {
          title: "Google inks pact for new 35-storey office",
          id: 1,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        },

        {
          title: "Google inks pact for new 35-storey office",
          id: 1,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
                image:  "../assets/home.jpeg" 
        },
      ],
    };
  },
};
</script>

<style>
.blog{
    display: flex;
    width: 80%;
    margin: 30px auto;
}
.blog > div{
    width: 100%;
}
.blogpage {
    display: block;
  background: grey;
  height: 300px;
  width: 100%;
  margin: 0px 10px;
}


@media only screen and (max-width: 600px){
  .blog{
    display: flex;
    width: 80%;
    margin: 30px auto;
    flex-direction: column;
}

.blog > div{
    width: 100%;
    margin: 10px 0px;
}
}


</style>