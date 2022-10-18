import getPaginationjs from '../../libs/paginationjs/getPaginationjs';

class Pagination {
  constructor(element, options) {
    this.options = options;

    this.initializePagination(element);
  }

  initializePagination(element) {
    const dataContainer = document.querySelector(
      this.options.containerSelector
    );
    const { config } = this.options;
    const getTemplate = this.getTemplate.bind(this);
    const { event, eventCallback } = this.options;

    this.paginationElement = getPaginationjs(element, {
      ...config,
      dataSource: this.options.data,
      callback(data) {
        const html = getTemplate(data);
        dataContainer.innerHTML = html;
      },
      [event]: eventCallback,
    });
  }

  getTemplate(data) {
    let html = '';

    data.forEach((options) => {
      const locals = {
        options,
      };
      html += this.options.template(locals);
    });

    return html;
  }
}

export default Pagination;
