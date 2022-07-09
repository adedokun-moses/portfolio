<template>
  <Welcome :title="title" />
  <div class="blog">
    <div class="blogdiv">
      <div v-for="blog in blogpost" :key="blog.id" class="blogpage">
        <img v-bind:src="blog.image" alt="image" />
        <router-link :to="{ name: 'blogdetails', params:{ id: blog.id} }">
              <h5>{{ blog.title }}</h5>
        </router-link>
      
        <p>{{ blog.contetnt }}</p>
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
      title: "Blog",

      blogpost: [
        {
          title: "Learn how to buid your next website",
          id: 1,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          image: "http://localhost:8080/img/team.3b1357ff.jpg",
        },
        {
          title: "Google inks pact for new 35-storey office",
          id: 2,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying. ",
          image: "http://localhost:8080/img/team.3b1357ff.jpg",
        },

        {
          title: "SEO, the next big thing",
          id: 3,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          image: "http://localhost:8080/img/team.3b1357ff.jpg",
        },
        {
          title: "Google inks pact for new 35-storey office",
          id: 4,
          contetnt:
            "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
          image: "http://localhost:8080/img/team.3b1357ff.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.blog {
  width: 50%;
  margin: 30px auto;
  align-items: stretch;
  
}
.blog > div {
  margin: 10px;
}
.blogpage {
  display: block;
  background: grey;
  width: 100%;
  height: 300px;
  margin: 0px 0px 20px 0px;
  text-align: left;
}  

.blogpage h5 {
  font-size: 30px;
  text-align: center;
}
.blogpage img {
  width: 100%;
  height: 200px;
}
.blogpage p {
  font-size: 15px;
  margin: 10px 10px;
}
.blogpage a{
  text-decoration: none;
  color: black;
}
.blogpage a:hover{
  color: white;
}

@media only screen and (max-width: 600px) {
  .blog {
    display: flex;
    width: 80%;
    margin: 30px auto;
    flex-direction: column;
  }

  .blog > div {
    width: 100%;
    margin: 10px 0px;
  }
  .blogpage h5 {
  font-size: 15px;
  text-align: center;
}

.blogpage img {
  width: 100%;
  height: 200px;
}
.blogpage p {
  font-size: 13px;
  margin: 10px 10px;
}
}
</style>