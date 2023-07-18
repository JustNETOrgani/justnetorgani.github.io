import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiArchiveResearch, AiGoogleScholarSquare, AiResearchgateSquare, FaUserCircle, BiGlobe, BiFacebook, BiInstagram, BiTwitter, BiLinkedin, CoLanguage, CoHappy, FaBirthdayCake, MdSocialdistanceRound, GiGrandPiano } from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'

addIcons(GiArchiveResearch, AiGoogleScholarSquare, AiResearchgateSquare, FaUserCircle, BiGlobe, BiFacebook, BiInstagram, BiTwitter, BiLinkedin, CoLanguage, CoHappy, FaBirthdayCake, MdSocialdistanceRound, GiGrandPiano);

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component("v-icon", OhVueIcon);


app.mount('#app')
