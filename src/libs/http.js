class Http {
  static instance = new Http();

  get = async url => {
    try {
      let req = await fetch(url);
      let json = req.json();
      return json;
    } catch (error) {
      console.log(`http get method: ${error}`);
      throw Error(error);
    }
  };
  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = req.json();
      return json;
    } catch (error) {
      console.log(`http post method: ${error}`);
      throw Error(error);
    }
  };
  put = async (url, id, body) => {
    try {
      let req = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body,
      });
      let json = req.json();
      return json;
    } catch (error) {
      console.log(`http put method: ${error}`);
      throw Error(error);
    }
  };
  remove = async (url, id) => {
    try {
      let req = await fetch(`url/${id}`, {
        method: 'DELETE',
      });
      let json = req.json();
      return json;
    } catch (error) {
      console.log(`http put method: ${error}`);
      throw Error(error);
    }
  };
}

export default Http;