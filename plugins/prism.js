import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import the default Prism theme
import 'dracula-prism/dist/css/dracula-prism.min.css'; // Import the Dracula theme


Vue.use({
  install(Vue) {
    Vue.prototype.$prism = Prism;
  },
});

// You may also need to include the language-specific plugins you intend to use.
import 'prismjs/components/prism-javascript';
// Import other language plugins as needed


onMounted(() => {
  Prism.highlightAll();
});


