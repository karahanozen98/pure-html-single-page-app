export default async function XmlHttpReq(METHOD, URL) {
  const xhr = new XMLHttpRequest();

  var promise = new Promise((resolve, reject) => {
    xhr.onload = (request) => {
      if (request.target.status === 200) {
        resolve({
          data: request.target.response,
          status: request.target.status,
        });
      } else {
        reject({ data: null, status: request.target.status });
      }
    };
  });
  xhr.open(METHOD, URL);
  xhr.send();
  let result = await promise;
  return result;
}
