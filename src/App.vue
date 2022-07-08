<template>
  <div class="bigscreen">
    <nav>
      <div class="logo">
        <h3><router-link to="/">Harde_Concept</router-link></h3>
      </div>

      <div class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="sign_up">
        <h5><a href="" download="resume">Resume</a></h5>
      </div>
    </nav>
  </div>

  <div class="smallscreen">
    <div class="buttonMob">
   
        <span class="fa fa-bars fa-1x" @click="toggleBtn"></span>
        <span><router-link to="/" class="concept" style="margin-left: 50px">Harde_Concept</router-link></span>     
    </div>

    <nav v-if="mbnav == true">
      <div class="mobile">
        <div class="router">
          <router-link to="/" @click="toggleBtn">Home</router-link>
          <router-link to="/about" @click="toggleBtn">About</router-link>
          <router-link to="/portfolio" @click="toggleBtn"
            >Portfolio</router-link
          >
          <router-link to="/blog" @click="toggleBtn">Blog</router-link>
          <router-link to="/contact" @click="toggleBtn">Contact</router-link>
        </div>

        <div class="sign_up">
          <h5><a href="https://docs.google.com/document/d/1yqpQKw7vquXc0048zswjtb3dCjOEdV1v/edit?usp=drivesdk&ouid=115438173640235744061&rtpof=true&sd=true" download="resume">Resume</a></h5>
        </div>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      mbnav: false,
    };
  },

  methods: {
    toggleBtn() {
      //alert(this.mbnav);
      //this.mbnav = true;
      if (this.mbnav == true) {
        return (this.mbnav = false);
      }
      return (this.mbnav = true);

      //alert("well");
    },
  },
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
.mobile {
  display: none;
}

nav {
  background: blue;
  padding: 20px;
  display: flex;
  top: 0px;
  z-index: 1;
  position: fixed;
  width: 100%;

  /*  width: 100% */
}
nav > div {
  width: 100%;
}

nav a {
  font-weight: bold;
  font-size: 15px;
  color: white;
  padding: 10px;
  text-decoration: none;

}

nav a.router-link-exact-active {
  color: #42b983;
}

.sign_up h5 {
  margin: 0px 150px;
  /* padding: 10px 0px; */
  border-radius: 10px;
}
.menubars {
  display: none;
}

.smallscreen {
  display: none;
}
/* .logo h3 a{
  font-size: 15px;
  color: white;
} */

@media only screen and (max-width: 600px) {
  .bigscreen {
    display: none;
  }
  .smallscreen {
    display: block;
  }
  nav {
    background: white;
    padding: 20px;
    display: block;
    top: 36px;
    z-index: 0;
    position: fixed;
    width: 100%;

    /*  width: 100% */
  }
  .sign_up h5 {
    margin: 0px;
    /* padding: 10px 0px; */
    border-radius: 10px;
  }
  .buttonMob {
    width: 100%;
    display: block;
    margin-bottom: 0px;
    top: 0px;
    z-index: 1;
    background: blue;
    height: 50px;
    position: fixed;
  }

  .buttonMob span {
    margin: 15px 25px;
    color: white;
  }
  .concept {
  
    font-size: 20px;
    text-decoration: none;
    text-align: right;
  }

  .buttonMob a {
    color: white;
    text-decoration: none;
    
  }

  .mobile {
    display: block;
  }

  nav a {
    font-weight: bold;
    font-size: 15px;
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
    width: 100%;
  }
}
</style>
