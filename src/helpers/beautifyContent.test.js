import React from 'react';
import { getGIFsFormat , getGIFsFormatTrend} from './beautifyContent';

let gifResultFromAPI;

beforeEach(() => {
    gifResultFromAPI = [{
        "type": "gif",
        "id": "SggILpMXO7Xt6",
        "slug": "sblobbery-clbarrr-idzz-SggILpMXO7Xt6",
        "url": "https://giphy.com/gifs/sblobbery-clbarrr-idzz-SggILpMXO7Xt6",
        "bitly_gif_url": "https://gph.is/2n1VsfF",
        "bitly_url": "https://gph.is/2n1VsfF",
        "embed_url": "https://giphy.com/embed/SggILpMXO7Xt6",
        "username": "",
        "source": "https://www.reddit.com/r/funny/comments/5zovkp/your_clbarrr_idzz_sblobbery/",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "https://www.reddit.com/r/funny/comments/5zovkp/your_clbarrr_idzz_sblobbery/",
        "is_indexable": 0,
        "is_sticker": 0,
        "import_datetime": "2017-03-16 06:12:42",
        "trending_datetime": "0000-00-00 00:00:00",
        "images":
        {
            "fixed_height_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/200_s.gif",
                "width": "366",
                "height": "200",
                "size": "44490"
            },
            "original_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy_s.gif",
                "width": "480",
                "height": "262",
                "size": "75251"
            },
            "fixed_width":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/200w.gif",
                "width": "200",
                "height": "109",
                "size": "293202",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/200w.mp4",
                "mp4_size": "13631",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/200w.webp",
                "webp_size": "61460"
            },
            "fixed_height_small_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/100_s.gif",
                "width": "183",
                "height": "100",
                "size": "13432"
            },
            "fixed_height_downsampled":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/200_d.gif",
                "width": "366",
                "height": "200",
                "size": "275573",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/200_d.webp",
                "webp_size": "66682"
            },
            "preview":
            {
                "width": "480",
                "height": "262",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-preview.mp4",
                "mp4_size": "45006"
            },
            "fixed_height_small":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/100.gif",
                "width": "183",
                "height": "100",
                "size": "255397",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/100.mp4",
                "mp4_size": "11805",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/100.webp",
                "webp_size": "55782"
            },
            "downsized_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-downsized_s.gif",
                "width": "480",
                "height": "262",
                "size": "75251"
            },
            "downsized":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-downsized.gif",
                "width": "480",
                "height": "262",
                "size": "1417303"
            },
            "downsized_large":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy.gif",
                "width": "480",
                "height": "262",
                "size": "1417303"
            },
            "fixed_width_small_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/100w_s.gif",
                "width": "100",
                "height": "55",
                "size": "5395"
            },
            "preview_webp":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-preview.webp",
                "width": "355",
                "height": "194",
                "size": "49642"
            },
            "fixed_width_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/200w_s.gif",
                "width": "200",
                "height": "109",
                "size": "15324"
            },
            "fixed_width_small":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/100w.gif",
                "width": "100",
                "height": "55",
                "size": "98118",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/100w.mp4",
                "mp4_size": "5933",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/100w.webp",
                "webp_size": "25830"
            },
            "downsized_small":
            {
                "width": "480",
                "height": "262",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-downsized-small.mp4",
                "mp4_size": "45006"
            },
            "fixed_width_downsampled":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/200w_d.gif",
                "width": "200",
                "height": "109",
                "size": "90808",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/200w_d.webp",
                "webp_size": "25098"
            },
            "downsized_medium":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy.gif",
                "width": "480",
                "height": "262",
                "size": "1417303"
            },
            "original":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy.gif",
                "width": "480",
                "height": "262",
                "size": "1417303",
                "frames": "18",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy.mp4",
                "mp4_size": "45652",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy.webp",
                "webp_size": "258172",
                "hash": "59ce667c5cb01232122c426168265bf2"
            },
            "fixed_height":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/200.gif",
                "width": "366",
                "height": "200",
                "size": "862411",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/200.mp4",
                "mp4_size": "29467",
                "webp": "https://media0.giphy.com/media/SggILpMXO7Xt6/200.webp",
                "webp_size": "138484"
            },
            "looping":
            {
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-loop.mp4",
                "mp4_size": "1229475"
            },
            "original_mp4":
            {
                "width": "480",
                "height": "262",
                "mp4": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy.mp4",
                "mp4_size": "45652"
            },
            "preview_gif":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/giphy-preview.gif",
                "width": "167",
                "height": "91",
                "size": "49935"
            },
            "480w_still":
            {
                "url": "https://media0.giphy.com/media/SggILpMXO7Xt6/480w_s.jpg",
                "width": "480",
                "height": "262"
            }
        },
        "title": "funny GIF"
    }];
});

it('beautifyContent function should return a determined format for search result', () => {
    const result = getGIFsFormat(gifResultFromAPI);

    const expectedResult = [{
        id: gifResultFromAPI[0].id,
        name: gifResultFromAPI[0].title,
        src: gifResultFromAPI[0].images.preview_gif.url,
        favorite: false
    }];

    expect(result).toEqual(expectedResult);
});

it('beautifyContent function should return a determined format for trend list', () => {
    const result = getGIFsFormatTrend(gifResultFromAPI);

    const expectedResult = [{
        id: gifResultFromAPI[0].id,
        name: gifResultFromAPI[0].title,
        src: gifResultFromAPI[0].images.preview_gif.url
    }];

    expect(result).toEqual(expectedResult);
});
