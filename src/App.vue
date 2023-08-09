<script>

import Separator from './components/Separator.vue';
import Card from './components/Card.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Separator,
    Card,
    About,
    Contact,
    Footer
  },
  data() {
    return {
      isSticky: false,
      scrolly_pr: 0,
      nav_show: false,
      show_btn_up: false
    }
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 10
      this.scrolly_pr = window.scrollY
      this.nav_show = false
      this.show_btn_up = window.scrollY > 200

    },
    layerStyle(layer) {
      return {
        transform: `translateY(${this.scrolly_pr / layer}px)`
      }
    },
    scroll_to_start() {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<template>
  <div class="btn-back-home" :class="{ 'btn-show': show_btn_up }" @click="scroll_to_start">
    <font-awesome-icon icon="fa-solid fa-arrow-up"></font-awesome-icon>
  </div>
  <div class="screen parallax-container bg-special border-white">
    <div class="banniere" :style="layerStyle(2)">
      <header>
        <div class="logo">LO</div>
        <nav :class="{ show_nav: nav_show, hide_nav: !nav_show }">
          <div class="nav-item"><a href="#about">A B O U T</a></div>
          <div class="nav-item"><a href="#article">A R T I C L E S</a></div>
          <div class="nav-item btn-subs"><a href="#subscribe">S U B S C R I B E</a></div>
        </nav>
        <div class="menu-bars" @click="nav_show = !nav_show">
          <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
        </div>
      </header>
      <div class="title">LOMBOK</div>
      <div class="subtitle">HOLISTIC HEALTH</div>
      <Separator :width=100 :height=8 />
    </div>
    <div class="image_bg">
      <img src="./assets/bg_plant.png" alt="img">
    </div>
  </div>
  <div class=" bg-special latest-article" id="article">
    <div class="screen-title">
      <h1>LATEST ARTICLES</h1>
      <Separator :width=100 :height=8></Separator>
    </div>
    <div class="screen-list">
      <Card img="./image/aloevera.jpg" title="How to use mindfullness in your every day life" />
      <Card img="./image/walking.png" title="What are the best walking meditation" />
      <Card img="./image/plant silver.jpg" title="How to go deep into the mind of hope" />

    </div>
  </div>

  <div class="" id="about">
    <About></About>
  </div>

  <div class=" center bg-special" id="subscribe">
    <Contact />
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<style scoped>
.btn-submit {}

.btn-back-home {
  transform: translateX(120%);
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 99999;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 5px grey;
  cursor: pointer;
}

.btn-show {
  transform: translateX(0%);
}

.center {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.latest-article {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-bars {
  display: none;
  margin-right: 20px;
  font-size: 30px;
}


.parallax-container {
  position: relative;
}

.bg-special {
  background-color: #dae0d6;

}

.border-white {
  border: 20px solid white;

}

.screen {

  /* padding: 20px; */
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.image_bg {
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 50%;
  display: flex;

}

.image_bg img {
  width: 100%;
  height: 100%;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 10px;
  /* margin-right: 10px; */

  /* padding: 20px; */

  /* padding-inline: 20px; */
  transition: all 0.5s ease-in-out;
  background-color: #dae0d6;
  z-index: 400;
}


.sticky {
  position: fixed;
  top: 0px;
  box-shadow: 0px 0px 10px grey;

}

.logo {
  font-size: 2em;
  font-weight: bold;
  margin-inline: 50px;
}

nav {

  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;

  /* z-index: 200; */

}

nav a {
  text-decoration: none;
  color: black;
}

@keyframes animate_from_right {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes animate_to_right {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
    display: none;
  }
}

.show_nav {
  display: flex;
  animation: animate_from_right 0.5s ease;
  transform: translateX(0);
  position: fixed;
}

.hide_nav {
  animation: animate_to_right 0.5s ease;
  /* display: none; */
}


.btn-subs {
  border: 2px solid black;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  background: rgb(218,224,214);
background: linear-gradient(90deg, rgba(218,224,214,1) 0%, rgba(255,255,255,1) 51%, rgba(218,224,214,1) 95%);
  background-size: 400%;
  cursor: pointer;
}

.btn-subs:hover {
  background-position-x: -50%;
  transform: scale(1.1);
}

.banniere {
  /* background-color: grey; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Reemkufi;
  position: relative;
}

.title {
  font-size: 6vw;
  padding: 20px;
}

.subtitle {
  font-size: 2vw;
  color: rgb(62, 80, 73);
  transition: all 0.2s ease-in-out;
}

.screen-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screen-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}

.screen-list .card {
  margin: 20px;
}

@media (max-width : 1070px) {
  .latest-article {
    height: 100%;
  }

  .menu-bars {
    display: block;
    position: absolute;
    right: 0;
  }

  nav {
    /* display: none; */
    transform: translateX(100%);
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: absolute;
    right: 0px;
    top: -10px;
    background-color: white;
    height: 100vh;
    padding: 10px;


  }

  .nav-item {
    margin: 10px 20px;
  }

  .title {
    font-size: 10vw;
  }

  .subtitle {
    font-size: 5vw;

  }

  .image_bg {
    width: 100%;
  }
}</style>
