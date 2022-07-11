<template>
  <div class="main_foot">
    <div class="foot_det">
      <div class="trialpage">
        <div class="cont_space">
          <h5>Create your amazing website with Harde_Concept</h5>
          <p>
            We offer the best
          </p>
        </div>
        <div class="btn_space">
          <button>Start Free Trial</button>
        </div>
      </div>
    </div>

    <div class="foot_links">
      <div class="foot_links_details">
        <div>
          <h5>Harde_Concept</h5>
        </div>
        <div class="links_det">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="">Quick Liks</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Mentorship</a></li>
          </ul>
        </div>
        <div class="links_det">
          <h5>Support</h5>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="">Submit Ticket</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div class="news">
          <h5>News Letter</h5>

          <p>Subscribe newsletter to get updates..</p>

          <form class="form_foot">

            <input type="email" name="" id="" placeholder="Enter Your Mail"/>
            <button><i class="fa fa fa-hand-o-right"></i></button>
          </form>

          <div class="social_media">
            <a href="https://twitter.com/uplifte_harde"><i class="fa fa-twitter fa-2x"></i></a>
            <a href="https://www.facebook.com/adedokunmoses1"><i class="fa fa-facebook fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/adedokun-moses-703aa1209"><i class="fa fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/adedokun-moses"> <i class="fa fa-github fa-2x"></i></a>
    
          </div>
        </div>
      </div>
    </div>

    <div class="copy">
        <h5>Copyright ©2022 All rights reserved | This website is designed by Moses</h5>
    </div>
  </div>
</template>


<style scoped>
.main_foot {
  background: #212529;
}
.foot_det {
  width: 80%;
  margin: auto;
  border-bottom: 1px solid black;
}

.trialpage {
  display: flex;
  align-items: stretch;
  color: white;
  /*   background-color: #f1f1f1; */
}
.trialpage > div {
  margin: 50px 0px;
}
.cont_space {
  flex-grow: 9;
}
.cont_space h5 {
  color: white;
  font-size: 30px;
  font-weight: 800;
}
.cont_space p {
  margin-top: 13px;
  font-size: 20px;
}
.btn_space {
  flex-grow: 1;
}
.btn_space button {
  margin-left: 200px;
  padding: 20px 40px;
  background: blue;
  color: white;
  outline: none;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.5s;
}

.btn_space button:hover {
  background: white;
  color: blue;
  -webkit-transform: scale(1.2);
}

.foot_links {
  width: 80%;
  margin: auto;
  border-bottom: 1px solid rgba(255,255,255,.09);;
}
.foot_links_details {
  display: flex;
  margin: 50px 20px;
}
.foot_links_details > div {
  width: 100%;
}
.foot_links_details h5 {
  color: white;
  font-size: 20px;
}
.links_det ul {
  list-style: none;
}
.links_det li {
  padding: 13px 0px;
}
.links_det li a {
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: bolder;
}

.news p {
  margin-top: 30px;
  color: white;
}

.form_foot input, button {
    padding: 20px 15px;
    margin: 20px 0px;
    outline: none;
    border: none;
    border-radius: 2px;

}
.form_foot button{
    background: blue;
    cursor: pointer;
}

.social_media {
    margin-top: 35px ;
}
.social_media a{
    text-decoration: none;
    color: black;
}
.social_media a:hover{
    text-decoration: none;
    color: white;

}

.social_media i {
    padding: 0px 15px;
      text-decoration: none;
}

.copy{
    text-align: center;
    padding: 30px;
    color: white;
}

@media only screen and (max-width: 600px) {

.foot_det {
  width: 100%;
  border-bottom: 1px solid black;
}

.trialpage {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
  margin: auto;
  color: white;
  /*   background-color: #f1f1f1; */
}

.trialpage > div {
  margin: 15px 20px;
}


.btn_space button {
  margin: 0px auto;
  padding: 20px 40px;
  background: blue;
  color: white;
  outline: none;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.5s;
}


.foot_links {
  width: 80%;
  margin: auto;
  border-bottom: 1px solid rgba(255,255,255,.09);;
}
.foot_links_details {
  display: flex;
  flex-direction: column;
  margin: 50px 20px;
}
  
}
</style>