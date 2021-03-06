import ajax from '@deadlyjack/ajax';

export default function Api(pageSize = 10) {
  // const apiUrl = 'http://192.168.0.156:3256';
  const apiUrl = 'https://wallpaper.foxdebug.com';
  function requestObj(url) {
    return {
      url: `${apiUrl}/${url}`,
    };
  }

  return {
    async all(page) {
      const request = requestObj(`images/all?page=${page}&count=${pageSize}`);
      const response = await ajax(request);
      return response;
    },
    async collections() {
      const request = requestObj('collections');
      const response = await ajax(request);
      return response;
    },
    /**
     *
     * @param {String} id ID of the collection
     * @param {Number} page Page number
     */
    async collection(id, page = 1) {
      const request = requestObj(`collection/${id}?search=on&page=${page}&count=${pageSize}`);
      const response = await ajax(request);
      return response;
    },
    /**
     * @returns {Number}
     */
    get PER_PAGE() {
      return pageSize;
    },
  };
}
