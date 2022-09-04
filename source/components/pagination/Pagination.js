import 'paginationjs';
import getPaginationjsContainer from './getPaginationjsContainer';

class Pagination {
  constructor(el, options) {
    this.$el = getPaginationjsContainer(el);
    this.options = options;

    this.initPagination();
  }

  initPagination() {
    const dataContainer = document.querySelector(
      this.options.containerSelector
    );
    const { config } = this.options;
    const getTemplate = this.getTemplate.bind(this);
    const { event, eventCallback } = this.options;

    this.$el.pagination({
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
