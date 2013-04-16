4sqFetch
========

This javascript script will fetch the last 12 months of your Foursquare checkins from the "Your Year in Check-ins" page (https://foursquare.com/infographics/4sqday) 

To use the script, create a new bookmarklet in your browser with the following code:

```javascript
javascript:var d=new Date();r=d.getTime();var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('src','https://raw.github.com/cmenscher/4sqFetch/master/bookmarklet.js?r='+r);document.body.appendChild(e);void(0);
```

Then navigate to https://foursquare.com/infographics/4sqday and click the bookmarklet.  The script will do its thing and then write the JSON out to the window.  You will either be prompted with a file save dialog to save the text of your JSON data, or the JSON will be written out to a text area for you to copy and paste from. (Special thanks to Jeffrey Tierney (https://github.com/jeffreytierney) for the Blob code, originally from the http://github.com/nflx repo.
