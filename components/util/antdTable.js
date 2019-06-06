export class Pagination {
  constructor(size = 'middle', pageSize = 20, current = 1) {
    Object.assign(this, {
      size,
      pageSize,
      current,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`
    });
  }

  get pageInfo() {
    return {
      pageSize: this.pageSize,
      pageNumber: this.current
    };
  }

  setPageInfo({ total, pageNumber, pageSize }) {
    return Object.assign(this, {
      total, current: pageNumber, pageSize
    });
  }
}
