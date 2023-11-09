import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faCircleInfo, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faXTwitter, faFacebookF, faInstagram, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faHeart, faCartShopping, faXTwitter, faFacebookF, faInstagram, faPinterestP, faYoutube, faCircleInfo, faCircleXmark)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
