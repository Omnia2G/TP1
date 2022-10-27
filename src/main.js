import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import { initializeApp } from "firebase/app";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const firebase = initializeApp({
  apiKey: "AIzaSyAJ6faCPX1moHLNXEsAwhTKX9gOmQGrsZ4",
  authDomain: "vue-uploader-a41ff.firebaseapp.com",
  projectId: "vue-uploader-a41ff",
  storageBucket: "vue-uploader-a41ff.appspot.com",
  messagingSenderId: "326946061346",
  appId: "1:326946061346:web:9c018f3defaa77d0701e7b",
  measurementId: "G-4S549XTGV0"
});

const app = createApp(App);
app.use(router);
app.use(firebase);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount("#app");
