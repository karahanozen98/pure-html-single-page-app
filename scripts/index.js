import XmlHttpReq from "./XmlHttpRequest.js";
const contentDiv = document.getElementById("content");

// fetch top panel
const topPanelDiv = document.getElementById("top-panel");
const topPanelContent = XmlHttpReq("GET", "../html/top-panel.html");
topPanelContent.then((response) => (topPanelDiv.innerHTML = response.data));

// fetch left panel
const leftPanelDiv = document.getElementById("left-panel");
const leftPanelContent = XmlHttpReq("GET", "../html/left-panel.html");
leftPanelContent.then((response) => (leftPanelDiv.innerHTML = response.data));

// Read current location and draw the related html file in the content div
function DrawPage(){
    const hash = location.hash.split("#")[1];
    const content = XmlHttpReq("GET", `../html/${hash}.html`);
  
    content.then((response) => {
      if (response.data) {
        contentDiv.innerHTML = response.data;
      }
    });
}

// Draw when page load
window.addEventListener("load", function () {
 DrawPage();
});

// Draw when page location change
window.addEventListener("hashchange", function () {
 DrawPage();
});
