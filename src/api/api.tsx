import axios from 'axios';

export const getAnime = (year: String, cour: String) => {
    return axios.get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${cour}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};