import axios from 'axios';

const url = "https://restcountries.com/v3.1/all";

export const getAllCountries = async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}