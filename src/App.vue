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
        <!--        <router-link to="/error">Error</router-link> -->
      </div>

      <div class="sign_up">
        <h5>
          <a
            href="https://archive.org/download/adedokun-moses-cv-new_202208/Adedokun_Moses_CV_new.docx"
            >Resume</a
          >
        </h5>
      </div>
    </nav>
  </div>

  <div class="smallscreen">
    <div class="buttonMob">
      <span class="fa fa-bars fa-1x" @click="toggleBtn"></span>
      <span
        ><router-link to="/" class="concept" style="margin-left: 50px"
          >Harde_Concept</router-link
        ></span
      >
    </div>

    <nav
      v-if="mbnav == true"
      id="myNav"
      :class="{ 'navbar--hidden': !showNavbar }"  >
      <div class="mobile">
        <div class="router">
          <router-link to="/" @click="toggleBtn">Home</router-link>
          <router-link to="/about" @click="toggleBtn">About</router-link>
          <router-link to="/portfolio" @click="toggleBtn"
            >Portfolio</router-link
          >
          <router-link to="/blog" @click="toggleBtn">Blog</router-link>
          <router-link to="/contact" @click="toggleBtn">Contact</router-link>
          <!--  <router-link to="/error">Error</router-link> -->
        </div>

        <div class="sign_up">
          <h5>
            <a
              href="https://archive.org/download/adedokun-moses/Adedokun_Moses.docx"
              >Resume</a
            >
          </h5>
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
      showNavbar: true,
      lastScrollPosition: 0,
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

    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>





<style>
body {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
}
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
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

  /*  width: 100% */
}
nav.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
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

nav a:hover {
  font-weight: bold;
  font-size: 15px;
  color: black;
  padding: 10px;
  text-decoration: none;
  
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
