import { createStore } from 'vuex';

var speechConfig;
var synthesizer;

export default createStore({
  state: {
    sections: {
      categories: {
        1: {
          name: 'Ensaladas',
          image: require('@/assets/ensalada.png')
        },
        2: {
          name: 'Postres',
          image: require('@/assets/postre.png'),
        },
        3: {
          name: 'Bebidas',
          image: require('@/assets/bebidas-sin-alcohol.png')
        },
        4: {
          name: 'Comida rápida',
          image: require('@/assets/comida-chatarra.png')
        }
      }
    },
    social: {
      0: {
        name: 'facebook',
        image: require('@/assets/facebook-circular-logo.png')
      },
      1: {
        name: 'twitter',
        image: require('@/assets/twitter.png')
      },
      2: {
        name: 'instagram',
        image: require('@/assets/instagram.png')
      }
    }
  },
  getters: {
    getCategories(state) {
      return state.sections.categories;
    },
    getSocial(state) {
      return state.social;
    }
  },
  mutations: {
  },
  actions: {
    textToSpeech(state, text) {
      synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);
      synthesizer.speakTextAsync(
        text,
        function (result) {
          window.console.log(result);
          synthesizer.close();
          synthesizer = undefined;
        },
        function (err) {
          window.console.log(err);
          synthesizer.close();
          synthesizer = undefined;
        }
      );
    }
  },
  modules: {
  }
})

// Esperamos a que cargue todo el DOM para llamar a mandar esta función
// automáticamente
document.addEventListener("DOMContentLoaded", function () {
  const subscriptionKey = "5fd4b985039e4f29ad59870812c5cbd1";
  const serviceRegion = "eastus";
  const voiceName = "es-MX-DaliaNeural";

  // Retorna instancia estática de SpeechConfig
  speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey,
    serviceRegion);

  // Setea la voz del sintetizador
  speechConfig.speechSynthesisVoiceName = voiceName;
});
