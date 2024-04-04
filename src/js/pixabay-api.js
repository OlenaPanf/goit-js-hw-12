import axios from 'axios';

export async function getImage(query, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;
  const params = {
    key: '43098974-eee2e6d48134054f86f6d867e',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  const response = await axios.get(url, { params });
  return response.data;
}
