import { createApp, ref } from "vue";
import "./style.css";
import App from "./App.vue";

const date = ref({
  date: {
    str: new Date(),
  },
});

createApp(App).mount("#app");
