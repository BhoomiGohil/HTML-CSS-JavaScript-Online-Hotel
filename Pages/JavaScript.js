var pic = 15, number = 12, start = 1, end = 12, repeation = pic / number;

var main = document.querySelector(".photo-box");

function clear(main) {
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
}

function display(start , end)
{
    for (i = start; i <= end; i++) {
        var div = document.createElement("div");
        div.className = "photo-image";
        div.setAttribute("id", "img" + [i]);
        document.querySelector(".photo-box").appendChild(div);

        var img = document.createElement("img");
        img.value = i;
        img.src = "../Images/Photo/"+ i +".JPG";
        img.setAttribute("class", "image");
        img.onclick = function() {largeimage(this.value)};
        document.querySelector("#img" + [i]).appendChild(img);
    }
}

display(start , end);

function numberButtonClick(text)
{
    clear(main);

    j = 1;

    for(i = 1 ; i <= text ; i++)
    {
      start = j ;
      j = j + 12;
      end = number * text;
      if(end > pic)
      {
        end = pic;
      }
    }

    display(start , end);
}

for (i = 0; i <= repeation; i++) {
    var button = document.createElement("button");
    button.innerHTML = i + 1;
    button.className = "div-click-number";
    button.onclick = function () { numberButtonClick(this.innerHTML); }
    document.querySelector(".image-click-number-box").appendChild(button);
}

function largeimage(value)
{
  document.getElementById("large-image").style.display = "block";
  document.getElementById("large-box").style.display = "block";
  document.getElementById("big-image").src = "../Images/Photo/"+[value]+".JPG";
}

function arrow()
{

}

function cancle()
{
  document.getElementById("large-image").style.display = "none";
  document.getElementById("large-box").style.display = "none";
}

function fullscreen()
{
  document.getElementById("fullscreen").style.display = "none";
  document.getElementById("smallscreen").style.display = "block";
  document.getElementById("large-box-middle").style.width = "70%";
  document.getElementById("large-box-middle").style.height = "800px";
}

function smallscreen()
{
  document.getElementById("fullscreen").style.display = "block";
  document.getElementById("smallscreen").style.display = "none";
  document.getElementById("large-box-middle").style.width = "50%";
  document.getElementById("large-box-middle").style.height = "600px";
}
