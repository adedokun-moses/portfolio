<template>
  <div class="weclcome">
    <h5>
      We Help You To <br />
      Grow Your Business
    </h5>
    <button><router-link to="/contact"> Contact Us</router-link></button>
    <!--  <h3>With Us You're Assured Of Quality Services </h3> -->
  </div>

  <section class="featurespage">
    <h3>
      Harde_Concept helps you to spruk your product’s <br />
      features.
    </h3>

    <div class="first_feature">
      <div>
        <h5>Unlimited Components</h5>
        <i class="fa fa-link fa-5x" style="margin-top: 13px"></i>
        <p>
          Combine sections from Olla's vast <br />
          component library and create beautiful.
        </p>
      </div>
      <div>
        <h5>Unlimited Components</h5>
        <i class="fa fa-laptop fa-5x" style="margin-top: 13px"></i>
        <p>
          Combine sections from Olla's vast <br />
          component library and create beautiful.
        </p>
      </div>
      <div>
        <h5>Unlimited Components</h5>
        <i class="fa fa-bell fa-5x" style="margin-top: 13px"></i>
        <p>
          Combine sections from Olla's vast <br />
          component library and create beautiful.
        </p>
      </div>
    </div>

    <div class="secondfeature">
      <div>
        <img src="../assets/myimage.webp" alt="image" class="img_feature" />
      </div>
      <div>
        <div class="featureeails">
          <h5>
            All the features <br />
            you’d expect.
          </h5>
          <p>
            <b>Tons of pre-made sections</b> <br />
            Combine sections from Olla's vast component library and create
            beautiful.
          </p>
          <hr />
        </div>
        <div class="featureeails">
          <p>
            <b>Tons of pre-made sections</b> <br />
            Combine sections from Olla's vast component library and create
            beautiful.
          </p>
          <hr />
        </div>
        <div class="featureeails">
          <p>
            <b>Tons of pre-made sections</b> <br />
            Combine sections from Olla's vast component library and create
            beautiful.
          </p>
        </div>
      </div>
    </div>
    <div class="project">
      <h5>Projects we have done.</h5>

      <p>
        <b
          >Below are top projects we've worked on <br />
          take time to explore</b
        >
      </p>

      <div class="portfolio">
        <div class="port_img">
          <div class="overlay">
            <a href="#"
              >E Commerce <br />
              Shop for your favourite clothes and the likes <br />
              Click HERE To Explore</a
            >
          </div>
        </div>
        <div class="port_img_2">
          <div class="overlay">
            <a href="https://mptvclone.netlify.app/index.html"
              >Cloned Decoder Site <br />
              A Site that allow users to perform various transactions. <br>Click To Explore</a
            >
          </div>
        </div>
        <div class="port_img">
          <div class="overlay">
            <a href="#">E Commerce</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <Footer />
  </footer>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/footer.vue";

export default {
  name: "HomeView",
  components: { Footer },
};
</script>

<style scoped>
.weclcome {
  background: url(../assets/home.jpeg) fixed;
  background-size: cover;
  height: 400px;
  width: 100%;
  margin-top: 62px;
}

.weclcome h5 {
  /*   text-align: center; */
  font-size: 70px;
  padding: 70px 0px 0px 70px;
}
.weclcome button {
  outline: none;
  border: none;
  font-weight: 800;
  background: blue;
  padding: 20px 70px;
  margin: 30px 75px;
  border-radius: 30px;
  cursor: pointer;
}
.weclcome button a{
  text-decoration: none;
  color: white;
  font-size: 20px;
}

.featurespage {
  width: 80%;
  /*   background: red; */
  margin: 30px auto;
}
.featurespage h3 {
  text-align: center;
  padding-top: 40px;
  font-size: 30px;
}

.first_feature {
  display: flex;
}
.first_feature > div {
  width: 100%;
  margin: 40px 10px;
  background: #f0f3ff;
  height: 350px;
  text-align: center;
  border-radius: 8px;
}
.first_feature h5 {
  margin-top: 60px;
  font-size: 30px;
}
.first_feature p {
  margin: 40px 0px;
  font-size: 18px;
}
.first_feature > div:hover {
  background: #e9fffd;
  -webkit-transition: all 0.4s ease-out 0s;
}

.secondfeature {
  display: flex;
}
.secondfeature > div {
  width: 100%;
  margin: 40px 10px;
  border-radius: 8px;
  height: 400px;
}

.img_feature {
  width: 100%;
}

.featureeails h5 {
  font-size: 50px;
}

.featureeails p {
  margin-top: 30px;
  font-size: 15px;
}
.featureeails hr {
  margin: 20px 0px;
}
.project {
  text-align: center;
}
.project h5 {
  font-size: 50px;
}
.project p {
  font-size: 20px;
  margin-top: 20px;
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
  transition: 0.3s ease-out; /* 
  height: ; */
}

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
  align-items: center;
  justify-content: center;
  display: flex;
}

.overlay a {
  font-size: 30px;
  text-decoration: none;
  text-align: left;
  padding: 20px;
  color: white;
  line-height: 60px;
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
.port_img_2 {
  background: url(../assets/mp.png);
  background-size: cover;
  transition: 0.3s ease-out; /* 
  height: ; */
}

.port_img_2:hover .overlay {
  display: block;
  overflow: hidden;
  width: 100%;
  height: inherit;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  display: flex;
}

@media only screen and (max-width: 600px) {
  .weclcome {
    background: url(../assets/home.jpeg) fixed;
    background-size: cover;
    height: 400px;
    width: 100%;
    margin-top: 35px;
  }

  .weclcome button {
    outline: none;
    border: none;
    font-weight: 800;
    background: blue;
    padding: 20px 70px;
    margin: 30px 50px;
    border-radius: 30px;
    cursor: pointer;
  }
  .weclcome button:hover {
    color: white;
  }

  .weclcome h5 {
    /*   text-align: center; */
    font-size: 40px;
    padding: 80px 0px 0px 50px;
  }

  .featurespage {
    width: 90%;
    /*   background: red; */
    margin: 30px auto;
  }
  .first_feature {
    display: flex;
    flex-direction: column;
  }

  .first_feature > div {
    width: 100%;
    margin: 40px 0px;
    background: #f0f3ff;
    height: 350px;
    text-align: center;
    border-radius: 8px;
  }
  .secondfeature {
    display: flex;
    flex-direction: column;
  }
  .secondfeature > div {
    width: 100%;
    margin: 0px 0px;
    border-radius: 8px;
    height: auto;
  }
  .img_feature {
    width: 100%;
  }
  .project {
    text-align: center;
    margin-top: 150px;
  }

  .portfolio {
    display: flex;
    margin: 50px 0px;
    flex-direction: column;
  }

  .portfolio > div {
  width: 100%;
  margin: 15px auto;
  border-radius: 10px;
  height: 400px;
  box-shadow: 1.3px 5px 4px 5px black;
}

  
}
</style>
