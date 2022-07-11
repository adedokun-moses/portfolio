<template>
  <!--   <div class="clip">

  </div> -->
  <div class="about">
    <Welcome :title="title" />
  </div>
  <div class="team_details">
    <div class="office_detaails">
      <div class="office"></div>
      <div><h3>Office and Team</h3></div>
    </div>

    <div class="team">
      <div>
        <img src="../assets/office.jpg" style="width: 100%;" />
      </div>
      <div class="team_info">
        <h5>Our Office</h5>

        <h4>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. Far far away, behind the word
          mountains, far from the countries Vokalia and Consonantia, there live
          the blind texts.
        </h4>

        <h4>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </h4>

        <h4>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </h4>
      </div>
    </div>

    <div class="office_detaails" style="margin-top: 20px">
      <div class="office"></div>
      <div><h3>Our Team</h3></div>
    </div>
    <div class="team_member">
      <div>
        <img src="../assets/simplenew.jpg" class="team_image" />
        <h4>
          <b>Mr. Simple Abubakar</b> <br />
          Frontend Engineer
        </h4>
        <h3>
          With over five years experience in the tech world, Mr Simple has built
          various applicaions. Proficient with the use of HTML, CSS, Java
          Script, Vue JS, React, Phython, Node Js and other version control
          system like Github.
        </h3>

        <div class="team_icons">
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""> <i class="fa fa-instagram"></i></a>
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-github"></i> </a>
        </div>
      </div>
      <div>
        <img src="../assets/baby.jpg" class="team_image" />
        <h4>
          <b>Mr. Oluwole Babatomiwa</b> <br />
          Software Engineer
        </h4>
        <h3>
        With over five years experience in the tech world, Mr Oluwole has built various applicaions. 
          Proficient with the use of HTML, CSS, Java Script, Vue JS, React, Phython, Node Js and 
          other version control system like Github. 
        </h3>

        <div class="team_icons">
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""> <i class="fa fa-instagram"></i></a>
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-github"></i> </a>
        </div>
      </div>
      <div>
        <img src="../assets/segzy.jpeg" class="team_image" />
        <h4>
          <b>Mr. Segun Oluwole</b> <br />
          Full Stack Developer
        </h4>
        <h3>
          With over five years experience in the tech world, Mr Segun has built
          various applicaions. Proficient with the use of HTML, CSS, Java
          Script, Vue JS, React, Phython, Node Js and other version control
          system like Github.
        </h3>

        <div class="team_icons">
          <a href="https://twitter.com/segzyswitch"><i class="fa fa-twitter"></i></a>
          <a href="https://instagram.com/official_segzyswitch"> <i class="fa fa-instagram"></i></a>
          <a href="https://facebook.com/segzyswitch"><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-github"></i> </a>
        </div>
      </div>
      <div>
        <img src="../assets/moses.jpg" class="team_image" />
        <h4>
          <b>Mr. Adedokun Moses</b> <br />
          Frontend Engineer
        </h4>
        <h3>
          With over five years experience in the tech world, Mr Moses has built
          various applicaions. Proficient with the use of HTML, CSS, Java
          Script, Vue JS, React, Phython, Node Js and other version control
          system like Github.
        </h3>

        <div class="team_icons">
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""> <i class="fa fa-instagram"></i></a>
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-github"></i> </a>
        </div>
      </div>
    </div>
  </div>

  <div class="company">
    <h5>You'll be in good company.</h5>
    <p>
      A well known web platform that help you build fast and functional layouts.
      <br />
      Harde_Concept is perfect for building websites of almost any kind.
    </p>

    <h4>Meet Our Clients</h4>

    <div class="clientimg">
      <i class="fa fa-amazon fa-3x"></i>
      <i class="fa fa-cc-paypal fa-3x"></i>
      <i class="fa fa-paypal fa-3x"></i>
      <i class="fa fa-spotify fa-3x"></i>
      <i class="fa fa-stack-overflow fa-3x"></i>
      <i class="fa fa-windows fa-3x"></i>
      <i class="fa fa-youtube fa-3x"></i>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>



<script>
import Welcome from "../components/welcome.vue";
import Footer from "../components/footer.vue";
export default {
  components: { Welcome, Footer },
  data() {
    return {
      title: "About Us",
    };
  },
};
</script>

<style scoped>
.clip {
  width: 50%;
  margin: 20px auto;
  background: red;
  height: 400px;
  /* clip-path: polygon(16.75% 24.25%,84.31% 24.25%,84.31% 74.25%,35.52% 83.74%,16.75% 74.25%); */
  clip-path: polygon(
    16.75% 24.25%,
    84.31% 24.25%,
    84.31% 74.25%,
    35.52% 83.74%,
    16.75% 74.25%
  );
}

/* .about{
  margin-top: 300px;
} */
.office_detaails {
  display: flex;
}

.office {
  content: "";
  background: blue;
  height: 5px;
  width: 100px;
  margin-top: 40px;
}
.office_detaails h3 {
  font-size: 70px;
  margin: 0px 40px;
}

.team_details {
  width: 70%;
  margin: 50px auto;
}
/* .team_details p {
  font-size: 80px;
  padding: 20px;
} */

.team {
  display: flex;
  margin-top: 20px;
}
.team > div {
  width: 100%;
  margin: 10px;
}
.team_image {
  width: 100%;
  background-size: cover;
  height: 180px;
  border-radius: 10px;
}

.team_info h5 {
  font-size: 30px;
  margin-top: 20px;
}
.team_info h4 {
  margin: 20px 0px;
}
.team_member {
  display: flex;
  margin-top: 30px;
}
.team_member > div {
  width: 100%;
  margin: 10px;
  height: 400px;
  border-radius: 5px;
}
.team_member h3 {
  font-size: 15px;
  margin-top: 20px;
}

.team_icons i {
  margin: 20px 5px;
  padding: 12px;
  border: 2px solid red;
  border-radius: 20px;
  color: red;
}
.company {
  background: #212529;
  width: 100%;
  height: 330px;
  text-align: center;
  color: white;
  margin: 30px 0px 100px 0px;
}
.company h5 {
  font-size: 40px;
  padding: 20px 0px;
}
.company h4 {
  margin: 25px auto;
  background: blue;
  width: 15%;
  padding: 15px 0px;
  border-radius: 10px;
  font-weight: bold;
}

.clientimg i {
  margin: 30px 10px;
}

@media only screen and (max-width: 600px) {
  .office {
    content: "";
    background: blue;
    height: 5px;
    width: 100px;
    margin-top: 8px;
  }

  .office_detaails h3 {
    font-size: 18px;
    margin: 0px 20px;
  }
  .team {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
  }

  .team_member {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
  }
  .team_member > div {
    width: 100%;
    margin: 20px;
    height: 400px;
    border-radius: 5px;
  }
  .company {
    background: #212529;
    width: 100%;
    height: 500px;
    text-align: center;
    color: white;
    margin: 30px 0px 100px 0px;
  }

  .company h4 {
    margin: 25px auto;
    background: blue;
    width: 20%;
    padding: 15px 40px;
    border-radius: 10px;
    font-weight: bold;
  }

  .clientimg i {
    margin: 10px 10px;
  }
}
</style>