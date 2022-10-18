const handlerDataAction = {
  handleDataAction(evt) {
    const { action } = evt.target.dataset;

    if (action && this[action]) {
      this[action](evt.target);
    }
  },

  addDataActionListener() {
    this.handleDataAction = this.handleDataAction.bind(this);

    this.element.addEventListener('click', this.handleDataAction);
  },
};

export default handlerDataAction;
