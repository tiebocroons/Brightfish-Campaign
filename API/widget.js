// widget.js
// Include this script in your HTML after the chat container div

(function() {
  // Dynamically load the Web Conversations script
  const script = document.createElement('script');
  script.type = 'module';
  script.crossOrigin = 'anonymous';
  script.src = 'https://webchat.digitalcx.com/webchat.js'; // Use the official Web Conversations script URL ([developers.cm.com](https://developers.cm.com/conversational-ai-cloud/docs/web-conversations-20-javascript-api?utm_source=chatgpt.com))

  script.onload = function() {
    // Initialize the chat when the script has loaded
    // Replace 'YOUR_CONFIG_ID' with your Web Conversations configuration ID
    // Replace 'YOUR_PRODUCT_TOKEN' with your generated product token
    cmwc.add('YOUR_CONFIG_ID', null, {
      productToken: 'dd57c655-b6dd-409b-aa02-6ac382947243',
      container: '#halo-chat-container',
      // Optional settings:
      welcomeMessage: 'Hi there! How can I help you today?',
      bubblePosition: 'right'
    }).install();
  };

  document.head.appendChild(script);
})();
