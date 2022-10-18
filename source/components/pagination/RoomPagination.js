import Pagination from './Pagination';

class RoomPagination extends Pagination {
  constructor(element, options) {
    super(element, options);
    this.footerSelector = '.js-pagination__footer';

    this.initializeFooter();
  }

  initializeFooter() {
    this.setFooterText(this.getFooterText());

    this.paginationElement.addHook('afterPaging', () => {
      this.setFooterText(this.getFooterText());
    });
  }

  setFooterText(txt) {
    const footerElement = this.paginationElement[0].querySelector(
      this.footerSelector
    );
    footerElement.textContent = txt;
  }

  getFooterText() {
    const pageNum = this.paginationElement.pagination('getSelectedPageNum');
    const dataPageTotal = this.paginationElement.pagination(
      'getSelectedPageData'
    ).length;
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
