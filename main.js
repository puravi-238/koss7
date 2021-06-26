var after =''

function fetchImages()
{
	  if(document.getElementById("images"))
	  {
		   document.getElementById("images").remove()
	  }
	  
	  let parentdiv = document.createElement('div');
	  parentdiv.id = "images";
	  
	  fetch("https://www.reddit.com/r/pics.json?after=${after}")
	  .then(response => response.json())
	  .then(body => {
		  after = body.data.after
		  
		  for(let index =0 ;index<body.data.children.length;index++)
		  {
			   if(body.data.children[index].data.post_hint === 'image')
			   {
				    let div = document.createElement('div');
					let image = document.createElement('img');
					image.src = body.data.children[index].data.url_overridden_by_dest
					div.appendChild(image);
					parentdiv.appendChild(div);
					
			   }
		  }
		  document.body.appendChild(parentdiv);
	  })
}
