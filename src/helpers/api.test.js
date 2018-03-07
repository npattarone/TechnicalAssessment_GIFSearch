import React from 'react';
import asyncFetch from '../../src/connectivity/async-fetch';

const fetchMock = require('fetch-mock');

it('getGIFsByFilter can fecht', async () => {
    const APIKey = 'JLEJHaQe82V89bFkMOGpMVJZgEQXRgxy';
    const searchText = 'funny';
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + searchText + '&api_key=' + APIKey + '&limit=20';

    fetchMock.get(url, { gifs: [] });

    const result = await asyncFetch(searchText);

    expect(result).toEqual({ gifs: [] });
});
