const URL='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=a9f16d506b853b628ad532fac39f89d7&format=json';
function getArtists(){
    return fetch(URL)
            .then(response => response.json())
            .then(data => data.topartists.artist)
            .then(artists => artists.map(artist => ({
                    name: artist.name,
                    image: artist.image[3]['#text'],
                    likes: 200,
                    comments: 140
            })))

}

export { getArtists } ;