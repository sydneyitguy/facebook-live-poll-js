# The Simplest Scripts for Facebook Live Poll

 - Portable, JS only implementation
 - Serverless, you can use your own PC or Mac to stream the live poll
 - Easy, you only need to change 2 lines of code
 - Free


## Usage

### 1. Clone or Download this repo

`git clone git@github.com:sydneyitguy/facebook-live-poll-js.git`

### 2. Get your Facebook Access token

https://developers.facebook.com/tools/access_token

### 3. Download OBS (Open Broadcaster Software)

https://obsproject.com/download

### 4. Create a live stream with a local browser source

Select `BrowserSource` from OBS, and `index.html` file you donwloaded from `Step 1.`

![Create Live Stream with a BrowserSource](https://raw.githubusercontent.com/sydneyitguy/facebook-live-poll-js/master/tutorials/fb-poll-create.png)

### 5. Create Live Poll on Facebook and connect to your OBS stream source

![Create Live Poll on Facebook](https://raw.githubusercontent.com/sydneyitguy/facebook-live-poll-js/master/tutorials/obs-create.png)

(You can find a [detailed tutorial here](https://obsproject.com/forum/resources/how-to-stream-to-facebook-live.391))

### 6. Get Video ID from the video URL

![Get Facebook Video ID](https://raw.githubusercontent.com/sydneyitguy/facebook-live-poll-js/master/tutorials/fb-get-video-url.png)

### 7. Lastly, edit `live-poll.js` with your configuration

```
  var ACCESS_TOKEN = '1234567890|WHATEVERblahblah'; // Access token from `Step 2`
  var VIDEO_ID = '1234567890'; // Video ID from `Step 7`
```

 - Don't forget you refresh your BrowserSource on your OBS
 - You can change the images whatever you like (just replace `left.jpg` and `right.jpg` in `/images` directory)


## License

This project is licensed under the terms of the MIT license.
