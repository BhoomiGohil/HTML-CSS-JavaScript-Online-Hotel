for(var i = 1; i <= 12 ; i++)
{
   var div = document.createElement("div");
   div.setAttribute("class","photo-image");
   div.setAttribute("id","img"+i);
   div.setAttribute("style","cursor:pointer");
   document.querySelector(".photo-box").appendChild(div);

  var img = document.createElement("img");
  img.setAttribute("src", "../Images/Photo/"+ i +".JPG");
  img.setAttribute("class" , "image");
  document.querySelector("#img"+[i]).appendChild(img);

  var main = document.querySelector("#img"+[i]);
  main.addEventListener("click",function(event){
    console.log(event.target.innerHTML);
    document.getElementById("large-image").style.display = "block";
    document.getElementById("large-box").style.display = "block";
    document.getElementById("big-image").src = "../Images/Photo/"+event.target.innerHTML+".JPG";
  })
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