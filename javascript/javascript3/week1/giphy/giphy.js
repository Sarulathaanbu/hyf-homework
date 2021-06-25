const gifSearchName = document.getElementById("gif-search");
const numOfGifs = document.getElementById("num-gif");
const getAlert = document.getElementById("alert");

function getGif() {
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = "";
  if (!gifSearchName.value) {
    getAlert.innerHTML = "Please enter word to search Gif!!";

  } else if (!numOfGifs.value) {
    getAlert.innerHTML = "Please enter number of Gifs!!";

  } else {
    fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=GBqVaF0BqJQ6cFmXKetzAu1SgA2HlFrA&q=${gifSearchName.value }&limit=${numOfGifs.value}&offset=0&rating=g&lang=en`
      )
      .then(response => response.json())
      .then(api => (api.data.map(item => {
        const gifImage = document.createElement("img");
        gifImage.src = item.images.original.url;
        resultDiv.appendChild(gifImage);
        document.body.appendChild(resultDiv);
      })));
  }
}
const btn = document.getElementById('button');
btn.addEventListener("click", getGif);
