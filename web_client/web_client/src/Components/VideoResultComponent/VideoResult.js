import React from 'react'
import '../../Styles/VideoResult.css'
export default function VideoResult() {
  return (
    
    <>

        <div className='video-result-container'>
            <div className='video-result'>
                <img src="https://i.ytimg.com/vi/ewAOHCoIN9I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBajlR75dy6dkaDSR5RwzyRoLf7kw" 
                    alt="Video Thumbnail" 
                    className='video-thumbnail' />
                <div className='video-info'>
                    <h3 className='video-title'>Video Title</h3>
                    <p className='video-summary'>Summary</p>
                </div>
            </div>
            <div className='action'>
                    <button className='next-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
        </div>
    
    </>

  )
}
