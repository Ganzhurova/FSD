import Pagination from './Pagination';

class RoomPagination extends Pagination {
  constructor(el, options) {
    super(el, options);
    this.footerSelector = '.js-footer';

    this.initFooter();
  }

  initFooter() {
    this.setFooterText(this.getFooterText());

    this.$el.addHook('afterPaging', () => {
      this.setFooterText(this.getFooterText());
    });
  }

  setFooterText(txt) {
    const footerEl = this.$el[0].querySelector(this.footerSelector);
    footerEl.textContent = txt;
  }

  getFooterText() {
    const pageNum = this.$el.pagination('getSelectedPageNum');
    const dataPageTotal = this.$el.pagination('getSelectedPageData').length;
    const { pageSize } = this.options.config;
    const dataTotal = this.options.data.length;

    const startNum = (pageNum - 1) * pageSize + 1;
    const endNum = (pageNum - 1) * pageSize + dataPageTotal;

    const getTextOfTotal = () => {
      const lastNum = dataTotal % 10;
      return lastNum > 1 || dataTotal === 11
        ? `${dataTotal} вариантов`
        : `${dataTotal} варианта`;
    };
    const textOfTotal = dataTotal > 100 ? '100+ вариантов' : getTextOfTotal();

    return `${startNum} - ${endNum} из ${textOfTotal} аренды`;
  }
}

export default RoomPagination;
