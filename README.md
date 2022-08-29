
# Project MBS (Marketo Browser Support)

A [Google Chrome Extension](https://chrome.google.com/webstore/detail/marketo-local-browser-sup/iinigaojmcejccagokaolgdfhelkemap?hl=en&authuser=0) for supporting Marketo Guided/Email Templates locally in the browser.

<image src="https://lh3.googleusercontent.com/ViDKK5NlB_IwQPh15yzeeRSyksev_CPGfRTAySf7JhJvhadnsp7dvL3Y8AQDQoC9V1VuEwes66rK5waeL0VlhbOq=w640-h400-e365-rj-sc0x00ffffff" />

## FAQ

#### What does this extension do?

This extension helps speed up the development process for Marketo Guided/Email Templates by automatically populating Marketo Variables in their correct places based on their Default Value in the Meta Tag when viewing the file locally. It will also recognize True/False Values in Boolean Meta Tags and populate the Value within the document accordingly.

You are no longer having to copy and paste your code within the Marketo Instance Template Editor and clicking on 'preview' to see your template's changes - you can now see your changes instantly within your browser!

- This extension works best when 'Live Previewing' your code using your favourite text editor or opening the file with the Google Chrome browser directly from your local folder.

- This extension will not interfere with the Marketo Software and does not make any changes to your local documents. The extension will only provide a 'preview' when viewing documents locally containing Marketo Variables within Google Chrome browsers.

#### How can I install it?

You can install it from the official [Google Chrome Webstore](https://chrome.google.com/webstore/detail/marketo-local-browser-sup/iinigaojmcejccagokaolgdfhelkemap?hl=en&authuser=0).

If you would like cross-browser support or you'd rather not install the extension - you can paste this script directly within your project:

```
<script src="https://tyrellcurry.github.io/projectMBS/chrome-extension/mbs.js"></script>
```

## Author

- Created by: [Tyrell Curry](https://tyrellcurry.io)

