document.addEventListener('DOMContentLoaded', function () {
  function getCurrentTab(callback) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    },
      (tabs) => {
        callback(tabs[0]);
      });
  }

  document.querySelector('#config').addEventListener('click', function() {
    window.open(chrome.runtime.getURL("options.html"));
  });
  
  // document.querySelector('#about').addEventListener('click', function() {
  //   window.open("https://github.com/igrigorik/videospeed");
  // });
  // document.querySelector('#fpass').addEventListener('click', function() {
  //   console.log("first pass button clicked");
  //   getCurrentTab((tab) => {
  //     chrome.tabs.sendMessage(tab.id, {type: "btn-press", btn: 'fpass'}, function(response) {
  //       console.log(`${tab.id}`);
  //       console.log(response);
  //     });
  //   })
  // });

  // document.querySelector('#feedback').addEventListener('click', function() {
  //   window.open("https://github.com/igrigorik/videospeed/issues");
  // });
});
