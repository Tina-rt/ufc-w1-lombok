import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faBars, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faFacebook, faTwitter, faPinterest, faBars, faArrowUp)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
