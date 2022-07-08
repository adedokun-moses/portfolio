<template>
  <Welcome :title="title" />

  <div class="contact_">
    <div class="map">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
           style="width:100%; height:500px;"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=9,%20ogundipe%20street%20igbogbo&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://123movies-to.org"></a><br />

          <a href="https://www.embedgooglemap.net">google map plugin html</a>
        </div>
      </div>
    </div>
    <div class="form_det">
      <div class="formbar">
        <form>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter Your Name"
          ></textarea>
          <div class="imputtext">
            <input type="text" placeholder="Enter Your Name " />
            <input type="email" placeholder="Enter Your Email " class="sec" />
          </div>

          <input type="text" placeholder="Enter Your Subjecct " />

          <button>Send</button>
        </form>
      </div>
      <div class="addressbar">
        <div class="address">
          <div>
            <i class="fa fa-user fa-2x"></i>
          </div>
          <div>
            <b>Lagos, Nigeria.</b><br />
            CA 91770
          </div>
        </div>

        <div class="address">
          <div>
            <i class="fa fa-phone fa-2x"></i>
          </div>
          <div>
            <b>09029768539</b><br />
            Mon to Sat 9am to 6pm
          </div>
        </div>

        <div class="address">
          <div>
            <i class="fa fa-envelope-open fa-2x"></i>
          </div>
          <div>
            <b>adedokunmoses.1450@gmail.com</b><br />
            Send us your query anytime!
          </div>
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
      title: "Contact Us",
      center: { lat: 51.093048, lng: 6.84212 },
    };
  },
};
</script>

<style scoped>
.map{
  width: 100%;
}
.mapouter {
  position: relative;
  height: 500px;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 100%;
}
.contact_ {
  width: 80%;
  margin: 50px auto;
}
.form_det {
  display: flex;
  align-items: stretch;
}
.form_det > div {
  margin: 10px;
}
.formbar {
  flex-grow: 7;
}
.formbar textarea,
input {
  width: 85%;
  outline: none;
  padding: 10px;
  margin: 10px;
}
.imputtext {
  display: flex;
}
.imputtext input {
  width: 40%;
  outline: none;
  padding: 10px 10px;
  margin: 10px 10px;
}

.addressbar {
  flex-grow: 3;
}
.formbar button {
  padding: 25px 0px;
  margin: 10px;
  width: 20%;
  cursor: pointer;
  background: white;
  color: blue;
  border: blue solid 1px;
  font-weight: bold;
  transition: all ease-in-out 1s;
}
.formbar button:hover {
  color: white;
  background: blue;
}

.address {
  display: flex;
}
.address > div {
  margin: 10px;
}

@media only screen and (max-width: 600px) {
  .form_det {
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }
  .formbar button {
    width: 50%;
  }
}
</style>
