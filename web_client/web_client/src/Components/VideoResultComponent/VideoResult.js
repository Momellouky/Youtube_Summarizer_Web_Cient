import React from 'react'
import '../../Styles/VideoResult.css'

export default function VideoResult(props) {    

    const [videoId, setVideoId] = React.useState('video_0');

    const updateVideoId = () => {
        // Get the number of videos in the props
        const videoKeys = Object.keys(props.videos);
        const videoCount = videoKeys.length;
        console.log('Video count:', videoCount);
        // Get the current index of the videoId
        const currentIndex = videoId.split('_')[1]; 
        
        if (parseInt(currentIndex) == parseInt(videoCount) - 1) {
            setVideoId('video_0');            
            return;
        }

        console.log('Current index:', currentIndex);
        // Calculate the next index
        const nextIndex = 'video_' + (currentIndex + 1) % videoCount;
        console.log('Next index:', nextIndex);
        // Set the videoId to the next index
        setVideoId(nextIndex);
    }

    console.log('VideoResult props:', props.videos);
    console.log('VideoResult props video_0 keys:', Object.keys(props.videos['video_0']));
    console.log('Video Result props video_0 video thumbnail:', props.videos['video_0']['video_thumbnail']);
    console.log('Video Result props video_0 video title:', props.videos['video_0']['video_title']);
    console.log('Video Result props video_0 summary:', props.videos['video_0']['summary']);

  return (
    
    <>

        <div className='video-result-container'>
            <div className='video-result'>
                <img src={props.videos[videoId]['video_thumbnail']} 
                    alt="Video Thumbnail" 
                    className='video-thumbnail' />
                <div className='video-info'>
                    <h3 className='video-title'>{props.videos[videoId]['video_title']}</h3>
                    <p className='video-summary'>{props.videos[videoId]['summary']}</p>
                </div>
            </div>
            <div className='action'>
                    <button className='next-btn' onClick={updateVideoId}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
        </div>
    
    </>

  )
}
