import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/'
const API_KEY = '&key=36775781-ef40f42b03ba5b079902920a8'

export const getImg = async searchText => {
  const options = {
    method: 'get',
    image_type: '&image_type=photo',
    orientation: '&orientation=horizontal',
    searchText: `?q=${searchText}`,
    page: `&page=1`,
    per_page: `&per_page=100`,
  };
  return axios(`${BASEURL}${options.searchText}${options.page}${API_KEY}${options.image_type}${options.orientation}${options.per_page}`)
    .then(rep => {
      console.log(rep.data.hits );
      return rep.data.hits 
    })
    .catch(error => {
    console.log(error.message);
    // Notiflix.Notify.failure('Bad request')
  });
}

export default {
  getImg,
};