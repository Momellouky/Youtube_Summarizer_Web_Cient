import React from 'react'
import '../../Styles/SearchBar.css' 
import { getYoutubeVideos } from '../Services/ApiCaller';
import VideoResult from '../VideoResultComponent/VideoResult';
import MakeSearchWarning from '../MakeSearchWarning/MakeSearchWarning';


function searchVideos() {

    
} 

export default function SearchBar() {
  
  const [videoResults, setVideoResults] = React.useState(null);

  const searchVideos = () => {
    const searchInput = document.querySelector('.search-bar input').value;

    if (searchInput) {
        console.log('Searching for videos with keyword:', searchInput);
        // Call the API to get videos based on the search input
        getYoutubeVideos(searchInput).then((response) => {
            console.log('API response:', response.data); 
            console.log('Video results keys: ', Object.keys(response.data));
            setVideoResults(response.data); 
        }).catch((error) => {
            console.error('Error fetching videos:', error);
        });
        
    } else {
        alert('Please enter a keyword to search.');
    }
  }

  return (


    <>
    
        <div className="search-bar-container">
            <div className="search-bar">
                <input type="text" placeholder="Search By Keyword" />
                <button id='search-btn' onClick={searchVideos}>Search</button>
            </div>

            {
                /* This is where the video results will be displayed. */ 
                videoResults ? <VideoResult videos={videoResults} /> : <MakeSearchWarning />
            }
        </div>
    
    </>
  )
}
