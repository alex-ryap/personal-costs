export default {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.prototype.$optionsPayment = {
      EventBus: new Vue(),

      show(settings) {
        console.log('showOptions', settings);
        this.EventBus.$emit('showOptions', settings);
      },

      hide() {
        console.log('hideOptions');
        this.EventBus.$emit('hideOptions');
      },
    };
  },
};
