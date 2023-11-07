import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBagShopping, } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faXTwitter, faFacebookF, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faHeart, faBagShopping, faXTwitter, faFacebookF, faInstagram, faPinterestP, faYoutube)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
