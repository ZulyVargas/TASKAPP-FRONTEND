let UseFetchGETUsingToken = async (requestParams) => {
  try {
    var error = "";
    const url = requestParams.url;

    const headerRequest = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + requestParams.token,
    });

    const requestOptions = {
      method: "GET",
      headers: headerRequest,
    };

    var res = await fetch(url, requestOptions);
    var data = await res.json();
  } catch (e) {
    error = e.message;
  }
  return { res, data, error };
};

let UseFetchGET = async (requestParams) => {
  try {
    var error = "";
    const url = requestParams.url;

    const headerRequest = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });

    const requestOptions = {
      method: "GET",
      headers: headerRequest,
    };

    var res = await fetch(url, requestOptions);
    var data = await res.json();
  } catch (e) {
    error = e.message;
  }
  return { res, data, error };
};

const getRequests = {
  UseFetchGETUsingToken,
  UseFetchGET,
};

export default getRequests;
