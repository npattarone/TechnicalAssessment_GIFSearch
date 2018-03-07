import {APIKey, baseUrlSearch, baseUrlTrend} from '../config';

export async function getGIFsByFilter(searchText) {

    const url = baseUrlSearch + '?q='+ searchText +'&api_key=' + APIKey + '&limit=20';

    const requestConfig = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch(url, requestConfig);
    const data = await response.json();

    if (response.status === 200) {
        return data;
    }
}

export async function getTrend() {

    const url = baseUrlTrend + '?api_key=' + APIKey + '&limit=10';

    const requestConfig = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch(url, requestConfig);
    const data = await response.json();

    if (response.status === 200) {
        return data;
    }
}