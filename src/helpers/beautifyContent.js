
export function getGIFsFormat(result) {

    return result.map(r => {
        return {
            id: r.id,
            name: r.title,
            src: r.images.preview_gif.url,
            favorite: false
        }
    });
}

export function getGIFsFormatTrend(result) {

    return result.map(r => {
        return {
            id: r.id,
            name: r.title,
            src: r.images.preview_gif.url
        }
    });
}