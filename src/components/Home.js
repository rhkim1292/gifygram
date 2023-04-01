import '../styles/Home.css';
import { useState, useEffect } from 'react';
import Search from './Search.js';

function Home() {
    const [res, setRes] = useState([]);
    // url Async requesting function
    function httpGetAsync(theUrl, callback) {
        // create the request object
        var xmlHttp = new XMLHttpRequest();

        // set the state change callback to capture when the response comes in
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                callback(xmlHttp.responseText);
            }
        };

        // open as a GET call, pass in the url and set async = True
        xmlHttp.open('GET', theUrl, true);

        // call send with no params as they were passed in on the url string
        xmlHttp.send(null);

        return;
    }

    // callback for the top 8 GIFs of search
    function tenorCallback_search(responsetext) {
        // Parse the JSON response
        var response_objects = JSON.parse(responsetext);

        var top_10_gifs = response_objects['results'];
        console.log(top_10_gifs);

        // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (gif)

        document.getElementById('preview_gif').src =
            top_10_gifs[0]['media_formats']['nanogif']['url'];

        document.getElementById('share_gif').src =
            top_10_gifs[0]['media_formats']['gif']['url'];

        return;
    }

    // function to call the trending and category endpoints
    function grab_data() {
        // set the apikey and limit
        var apikey = 'AIzaSyBJOOwPOsBC3X1eeG_DphyGLUbxexnyzqU';
        var clientkey = 'my_test_app';
        var lmt = 8;

        // test search term
        var search_term = 'excited';

        // using default locale of en_US
        var search_url =
            'https://tenor.googleapis.com/v2/search?q=' +
            search_term +
            '&key=' +
            apikey +
            '&client_key=' +
            clientkey +
            '&limit=' +
            lmt;

        httpGetAsync(search_url, tenorCallback_search);

        // data will be loaded by each call's callback
        return;
    }

    // SUPPORT FUNCTIONS ABOVE
    // MAIN BELOW

    // start the flow
    useEffect(() => {
        grab_data();
    });

    return (
        <div className="home-container">
            <Search />
            <div className="results-container">
                <h2># 1 GIF loaded - preview image</h2>
                <img
                    id="preview_gif"
                    src=""
                    alt=""
                    style={{ width: '220px', height: '164px' }}
                />
                <h2># 1 GIF loaded - share image</h2>
                <img
                    id="share_gif"
                    src=""
                    alt=""
                    style={{ width: '498px', height: '372px' }}
                />
            </div>
        </div>
    );
}

export default Home;
