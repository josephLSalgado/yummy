import { createStore } from 'vuex';

var speechConfig;
var synthesizer;

export default createStore({
  state: {
    sections: {
      categories: {
        1: {
          name: 'Ensaladas',
          path: '#/proximamente',
          image: require('@/assets/ensalada.png')
        },
        2: {
          name: 'Postres',
          path: '#/proximamente',
          image: require('@/assets/postre.png'),
        },
        3: {
          name: 'Bebidas',
          path: '#/proximamente',
          image: require('@/assets/bebidas-sin-alcohol.png')
        },
        4: {
          name: 'Comida rápida',
          path: '#/fastfood',
          image: require('@/assets/comida-chatarra.png'),
          products: {
            1: {
              name: 'Hamburguesa Bacon Swiss Big Chicken Fillet',
              image: require('@/assets/bacon-swiss.jpg'),
              price: '$45.00'
            },
            2: {
              name: 'Pizza Pepperoni especial',
              image: require('@/assets/pepperoni-especial.png'),
              price: '$120.00'
            },
            3: {
              name: 'Pizza Cuatro Quesos',
              image: require('@/assets/cuatro-quesos.png'),
              price: '$99.00'
            },
            4: {
              name: 'Subway Pollo Parmesano',
              image: require('@/assets/pollo-parmesano.jpg'),
              price: '$55.00'
            },
            5: {
              name: 'Subway Pollo Teriyaki',
              image: require('@/assets/pollo-teriyaki.jpg'),
              price: '$65.00'
            }
          }
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
    },
    getFastFood(state) {
      return state.sections.categories[4].products;
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
    },
    speechDetails(state, {name, price}) {
      let text = name + " a " + price;
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
    },
    speechAdd(state, name) {
      let text = "¿Quieres comprar " + name + "?";
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
