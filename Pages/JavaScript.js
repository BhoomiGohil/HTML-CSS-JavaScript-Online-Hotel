var pic = 15; // Collection of all images from database.
var number = 12; // Only Display 12 images in website.
var start = 1, end = 12;
var repeation = pic / number; // Total images divided by 12 Images.

var main = document.querySelector(".photo-box"); // Take parent division for delete it firstchild.

function clear(main) { // Clear AppendChild for display new images.
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
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

display(start, end); // Display image by default.

function numberButtonClick(text) { // Display image by clicking below number buttons.
  clear(main);

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

for (i = 0; i <= repeation; i++) { // Display number buttons to handle images.
  var button = document.createElement("button");
  button.innerHTML = i + 1;
  button.className = "div-click-number";
  button.onclick = function () { numberButtonClick(this.innerHTML); }
  document.querySelector(".image-click-number-box").appendChild(button);
}

function largeimage(value) { // Display image in large box when you click on particular small images.
  document.getElementById("large-image").style.display = "block";
  document.getElementById("large-box").style.display = "block";
  document.getElementById("big-image").src = "../Images/Photo/" + [value] + ".JPG";
}

function arrow() { // Use to slide images 

}

function cancle() { // Close the big image window
  document.getElementById("large-image").style.display = "none";
  document.getElementById("large-box").style.display = "none";
}

function fullscreen() { // Change the size to big of large image window. 
  document.getElementById("fullscreen").style.display = "none";
  document.getElementById("smallscreen").style.display = "block";
  document.getElementById("large-box-middle").style.width = "70%";
  document.getElementById("large-box-middle").style.height = "800px";
}

function smallscreen() { // Change the size to small of large image window. 
  document.getElementById("fullscreen").style.display = "block";
  document.getElementById("smallscreen").style.display = "none";
  document.getElementById("large-box-middle").style.width = "50%";
  document.getElementById("large-box-middle").style.height = "600px";
}
