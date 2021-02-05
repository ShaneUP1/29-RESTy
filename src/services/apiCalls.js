
export const fetchEndpoints = (url, method, body) => {
  if(method === 'GET'){
    return fetch(url, {
      method: 'GET'
    })
      .then(res => res.json());
  } 
  else if(method === 'PUT' || method === 'POST') {
    return fetch(url, {
      method: `${method}`,
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  }
  else {
    return fetch(url, {
      method: 'DELETE'
    });
  }
};
