export function getImage(value) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const sanitizedValue = encodeURIComponent(value);
  const params = new URLSearchParams({
    key: '43098974-eee2e6d48134054f86f6d867e',
    q: sanitizedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
