const BASE_URL = 'https://faceid-admin-dev.theable.tech';

const $request = {
  post: async (url, payload) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  },
};

export default $request;
