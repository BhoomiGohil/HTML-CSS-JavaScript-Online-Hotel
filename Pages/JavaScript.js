var pic = 15; // Collection of all images from database.
var number = 12; // Only Display 12 images in website.
var start = 1, end = number;
var repeation = pic / number; // Total images divided by 12 Images.

var photobox = document.querySelector(".photo-box"); // Take parent division for delete it firstchild.
var imagedisplay = document.querySelector(".image-display");

function clearSmallImage(photobox) { // Clear AppendChild for display new images.
  while (photobox.hasChildNodes()) {
    photobox.removeChild(photobox.firstChild);
  }
}

function clearBigImage(largeboxmiddle){
  while(largeboxmiddle.hasChildNodes()){
    largeboxmiddle.removeChild(largeboxmiddle.firstChild);
  }
}

function display(start, end) { // Display Images in small container of page.
  for (i = start; i <= end; i++) {
    var div = document.createElement("div"); // Create div element
    div.className = "photo-image";
    div.setAttribute("id", "img" + [i]);
    document.querySelector(".photo-box").appendChild(div);

    var img = document.createElement("img"); // Create img element
    img.value = i;
    img.src = "../Images/Photo/" + i + ".JPG";
    img.setAttribute("class", "image");
    img.onclick = function () { largeimage(this.value) };
    document.querySelector("#img" + [i]).appendChild(img);
  }
}

function defaultdisplay()
{
  display(start, end); // Display image by default.
}

function numberButtonClick(text) { // Display image by clicking below number buttons.
  clearSmallImage(photobox);
  j = 1;

  for (i = 1; i <= text; i++) {
    start = j;
    j = j + 12;
    end = number * text;
    if (end > pic) {
      end = pic;
    }
  }

  display(start, end); // Display images by clicking number buttons.
}

function numberbuttondisplay()
{
  for (i = 0; i <= repeation; i++) { // Display number buttons to handle images.
    var button = document.createElement("button");
    button.innerHTML = i + 1;
    button.className = "div-click-number";
    button.onclick = function () { numberButtonClick(this.innerHTML); }
    document.querySelector(".image-click-number-box").appendChild(button);
  }
}

function largeimage(value) { // Display image in large box when you click on particular small images.
  clearBigImage(imagedisplay);

  document.getElementById("large-image").style.display = "block";
  document.getElementById("large-box").style.display = "block";

  var bigimage = document.createElement("img");
  bigimage.setAttribute("class","image");
  bigimage.setAttribute("id","big-image");
  bigimage.value = value;
  bigimage.alt = "No Image Available";
  bigimage.src = "../Images/Photo/" + [value] + ".JPG";
  document.querySelector(".image-display").appendChild(bigimage);
}

function arrow(value) // Use for image slider
{
  var bigimage = document.querySelector("#big-image"); // To slide images
  if(value === "left")
  {
    bigimage.value = bigimage.value - 1;
    if(bigimage.value === 0)
    {
      bigimage.value = pic;
    }
    imageloop(bigimage.value);
  }
  else {
    bigimage.value = bigimage.value + 1;
    if(bigimage.value === pic + 1)
    {
      bigimage.value = start;
    }
    imageloop(bigimage.value);
  }
}

function imageloop(value)
{
  var bigimage = document.querySelector("#big-image"); // To slide images
  for(i = start ; i <= pic ; i++)
  {
    if(value === i)
    {
      bigimage.src = "../Images/Photo/" + [value] + ".JPG";
    }
  }
}

function cancle() { // Close the big image window
  document.getElementById("large-image").style.display = "none";
  document.getElementById("large-box").style.display = "none";
}

function fullscreen() { // Change the size to big of large image window.
  document.getElementById("fullscreen").style.display = "none";
  document.getElementById("smallscreen").style.display = "block";
  document.getElementById("image-button").style.width = "1110px";
  document.getElementById("image-button").style.left = "15%";
  document.getElementById("large-box-middle").style.width = "1110px";
  document.getElementById("large-box-middle").style.height = "800px";
}

function smallscreen() { // Change the size to small of large image window.
  document.getElementById("fullscreen").style.display = "block";
  document.getElementById("smallscreen").style.display = "none";
  document.getElementById("image-button").style.width = "795px";
  document.getElementById("image-button").style.left = "25%";
  document.getElementById("large-box-middle").style.width = "795px";
  document.getElementById("large-box-middle").style.height = "600px";
}


function colorchange()
{
  document.querySelector("head-menu-links").innerHTML.style.color = "red";
}
