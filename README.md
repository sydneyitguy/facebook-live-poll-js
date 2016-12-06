# Simplest Scripts for Facebook Live Poll

 - Portable, JS only implementation
 - Serverless, you can use your own PC or Mac to stream the live poll
 - Free


## Usage

1. Clone this repo: `git clone git@github.com:sydneyitguy/facebook-live-poll-js.git`

2. Get your Facebook Access token [Here](https://developers.facebook.com/tools/access_token)

3. Download OBS Studio [Here](https://obsproject.com/download)

4. Create a live stream with a local browser source (the `index.html` file you donwloaded from `Step 1.`)
![Create Live Stream with a BrowserSource](https://raw.githubusercontent.com/sydneyitguy/facebook-live-poll-js/master/tutorials/fb-poll-create.png)

5. Create Live Poll on Facebook and connect with your OBS stream source
![Create Live Poll on Facebook](https://raw.githubusercontent.com/sydneyitguy/facebook-live-poll-js/master/tutorials/obs-create.png)

- You can find a good tutorial on [Here](https://obsproject.com/forum/resources/how-to-stream-to-facebook-live.391)

6. Connect your OBS live stream with the Facebook post

7. Get Video ID from the video URL
![Get Facebook Video ID](https://raw.githubusercontent.com/sydneyitguy/facebook-live-poll-js/master/tutorials/fb-get-video-url.png)

8. Edit `live-poll.js` with your configuration
```
  var ACCESS_TOKEN = ''; // Access token from `Step 2`
  var VIDEO_ID = ''; // Video ID from `Step 7`
```

## License

This project is licensed under the terms of the MIT license.
