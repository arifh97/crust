import Vue from 'vue';
import 'prismjs';
import 'prismjs/themes/prism.css'; // Optional: Include the default Prism.js theme
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import Prism from 'prismjs';  // Import Prism.js library

Vue.use({
  install(Vue) {
    Vue.prototype.$prism = Prism;
  },
});

onMounted(() => {
  Prism.highlightAll();
});
