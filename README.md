# Kickresume iframe renderer example    
This repository serves as an example implementation of our iframe-based renderer for our API partners. You can find 
this example deployed at []()https://kickresume.github.io/kickresume-iframe-example/ 

## API specification
We host our iframes on `https://www.kickresume.com/render-preview/<your-iframe-id>/`. Every registered iframe can only 
be served from one origin as per standard cross-origin iframe security rules. 

Once an iframe is loaded on a valid origin, it will send a message with the following data to the parent window:
```json
{
  "type": "preview_loaded"
}
```

You can listen for this message on window like this: `window.addEventListener("message", receiveMessage, false);`

Once initialized, the iframe listens for messages of the following structure:
```json
{
  "type": "cv_data",
  "data": {} // Valid CV data object. You can find more details in our API documentation.
}
```

You can send this message using the `postMessage` API like this:
```javascript
document.getElementById("kickresume-preview-iframe").contentWindow.postMessage({
    type: "cv_data",
    data: cv_data,
}, "https://www.kickresume.com");
```
