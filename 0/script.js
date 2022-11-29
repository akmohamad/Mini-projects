// fetch('http://192.168.0.35:8000/products/')
//     .then(res=>res.json())
//     .then(json=>document.getElementById('cards').innerHTML = `
//         <div class="card">
//             <h1 class="title">${json.name}</h1>
//             <p class="price">${json.price}$</p>
//         </div>
//         `
//     )

fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=4').then((data)=> {
            // console.log(data)
            return data.json();
        }).then((completedata)=> {
            // console.log(completedata[2].title)
            let data1 = "";
            completedata.map((values)=>{
                data1 += `
                <div class="card">
                    <h1 class="title"></h1>
                    <img class="images" width:"200px" src=${values.images} alt="img">
                    <p class="pvalue">${values.title}</p>
                    <p class="category">${values.price} $</p>
                    <p class="price">${values.category}</p>
                    <p class="price">${values.description}</p>
                </div>
                `
            });
            document.getElementById('cards').innerHTML = data1;
        }).catch((err)=> {
            console.log(err)
        });


// const form = document.querySelector('#upload');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let text = this.querySelector(`input[name='name']`).texts;
//     console.log(text)
// })