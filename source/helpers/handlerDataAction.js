const handlerDataAction = {
  handlerDataAction(evt) {
    const { action } = evt.target.dataset;

    if (action && this[action]) {
      this[action](evt.target);
    }
  },

  addDataActionListener() {
    this.handlerDataAction = this.handlerDataAction.bind(this);

    this.el.addEventListener('click', this.handlerDataAction);
  },
};

export default handlerDataAction;
