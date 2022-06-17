import 'paginationjs';
import paginationConfig from './paginationConfig';
import getPaginationjsContainer from './getPaginationjsContainer';

class Pagination {
  constructor(el, options) {
    this.$el = getPaginationjsContainer(el);
    this.options = options;

    this.initPagination();
    console.log(this);
  }

  initPagination() {
    const dataContainer = document.querySelector(
      this.options.containerSelector
    );
    const template = this.template.bind(this);
    const { event, eventCallback } = this.options;

    this.$el.pagination({
      ...paginationConfig,
      dataSource: this.options.data,
      callback(data) {
        const html = template(data);
        dataContainer.innerHTML = html;
      },
      [event]: eventCallback,
    });
  }

  template(data) {
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
