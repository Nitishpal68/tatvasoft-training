import request from "./request";

const ENDPOINT = 'api/book';

const searchBook = async (searchText) => {
    const url = `${ENDPOINT}/search?keyword=${searchText}`;
    return request.get(url).then((res) => {
        return res;
    });
};

const getAll = async (params) => {
    const url = `${ENDPOINT}`;
    return request.get(url, { params }).then((res) => {
        return res;
    })
}

const getById = async (id) => {
  const url = `${ENDPOINT}/byId?id=${id}`;
  return request.get(url).then((res) => {
    // alert(JSON.stringify(res))
    return res;
  });
}

const save = async (data) => {
    if (data.id) {
      const url = `${ENDPOINT}`;
      return request.put(url, data).then((res) => {
        return res;
      });
    } else {
      const url = `${ENDPOINT}`;
      return request.post(url, data).then((res) => {
        return res;
      });
    }
};

const deleteBook = async (id) => {
    const url = `${ENDPOINT}?id=${id}`;
    return request.delete(url).then((res) => {
      return res;
    });
};


const bookService = {
    searchBook,
    getAll,
    getById,
    save,
    deleteBook,
}

export default bookService;