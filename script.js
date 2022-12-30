
 let apikey='pub_14849739374daf41c2250dbb53d26a4ad9555'
 let newsContainer=document.querySelector('.news-container');
 let myQuery='india'
 async function fetchnews() {
 	// body...
	
 	let response=await fetch(`https:newsdata.io/api/1/news?apikey=${apikey}&q=${myQuery}`)
 	let responseJson=await response.json();
 	return responseJson;
 }
 let newsDeta=fetchnews();
 newsDeta.then((data)=>{
   let newsArray=data.results;
   newsArray.forEach((element)=>{
   	let news;
   	console.log(element)
       if(element.image_url==null){
       	  news =`<div class="news-card">
   		<img src="./download.jpg" alt="" >
   		<h5>${element.title}</h5>
   	             </div> 

      
   	` ;
       }
       else{
       	  news =`<div class="news-card">
   		<img src="${element.image_url}" alt="" >
   		<h5>${element.title}</h5>
   	             </div> 

      
   	` ;
       }
   
       newsContainer.innerHTML+=news;
   });
 })
