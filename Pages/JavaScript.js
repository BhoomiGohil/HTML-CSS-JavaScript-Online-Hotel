var pic = 12 , start = 1 ;

var img , div , i ;

for(i = start ; i <= pic ; i++)
  {
    div = document.createElement("div");
    div.setAttribute("class","photo-image");
    div.setAttribute("id","img"+i);
    div.setAttribute("style","cursor:pointer");
    div.onclick = function() {largeimage(this.id)};
    document.querySelector(".photo-box").appendChild(div);

    img = document.createElement("img");
    img.setAttribute("src", "../Images/Photo/"+ i +".JPG");
    img.setAttribute("class" , "image");
    document.querySelector("#img"+[i]).appendChild(img);
  }

function largeimage(id)
{
  for(i = 1 ; i <= pic ; i++)
  {
    if("img"+[i] === id)
    {
      id = i;
      break;
    }
  }
  document.getElementById("large-image").style.display = "block";
  document.getElementById("large-box").style.display = "block";
  document.getElementById("big-image").src = "../Images/Photo/"+id+".JPG";
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
