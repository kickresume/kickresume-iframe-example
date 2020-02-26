function postData() {
  const cv_data = window.EMPTY_CV_DATA;
  cv_data['general']['lastNameValue'] = document.getElementById("last_name").value;
  cv_data['general']['firstNameValue'] = document.getElementById("first_name").value;

  document.getElementById("kickresume-preview-iframe").contentWindow.postMessage({
    type: "cv_data",
    data: cv_data,
  }, "https://api.kickresume.com");
}

function receiveMessage(event) {
  if (event.data && event.data.type && event.data.type === "preview_loaded") {
    console.debug("sending data");
    postData();

    console.debug("registering button handler");
    document.getElementById("submit").onclick = function (e) {
      e.preventDefault();
      postData();
    };
  }
}

window.addEventListener("message", receiveMessage, false);
