import axios from 'axios';

export async function getImage(value, page, perPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const sanitizedValue = encodeURIComponent(value);
  const params = new URLSearchParams({
    key: '43098974-eee2e6d48134054f86f6d867e',
    q: sanitizedValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const response = await axios.get(url, params);
  return response.data;
}
