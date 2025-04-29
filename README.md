# YouTube Video Summarizer

This project allows users to search for YouTube videos and view a summarized version of the content before watching. It helps users save time by quickly understanding video content, and encourages creators to produce higher-quality educational videos.

## Features

- Search for YouTube videos by topic
- Get AI-generated summaries of video content
- Preview video thumbnails with links

## Tech Stack

**Frontend:**
- React
- Axios (for API calls)

**Backend:**
- Python
- Flask (REST API)


## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/youtube-summarizer.git
cd web_interface
npm install 
npm start
```

Run the backend 

```bash 
cd search_engine 
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
cd .\RestController 
flask --app RestRunner run 
```

We will provide docker images in the future. 