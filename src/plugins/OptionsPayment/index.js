export default {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.prototype.$optionsPayment = {
      EventBus: new Vue(),

      show(settings) {
        this.EventBus.$emit('showOptions', settings);
      },

      removeItem(id) {
        console.log(id);
        this.EventBus.$emit('removeItem', id);
      },

      hide() {
        this.EventBus.$emit('hideOptions');
      },
    };
  },
};
