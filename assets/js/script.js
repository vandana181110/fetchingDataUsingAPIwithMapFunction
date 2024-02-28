window.onload = async function(){
    try{
      var product= document.getElementById("product");
      var spinner = document.getElementById("spinner");
      spinner.style.display="block";
      let res= await fetch("https://fakestoreapi.com/products" , {method:'GET'});
      let data = await res.json();
          data.map((item , index) =>{
            console.log(key=index)
            let pcard = `<div class='col-md-3'>
                          <div class='card'>
                            <img src='${item.image}' class='img-fluid'>
                            <div class='card-body'>
                              <h5 class='card-title'>${item.title}</h5>
                              <p class='card-text'>${item.description}</p>
                            </div>
                          </div>
                        </div>`
                        product.innerHTML +=pcard;
                        spinner.style.display='none';
          })
         }
     catch(err){
        console.log(err.msg)
     }
}