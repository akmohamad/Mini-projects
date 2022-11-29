fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=200').then((data)=> {
            // console.log(data)
            return data.json();
        }).then((completedata)=> {
            // console.log(completedata[2].title)
            let data1 = "";
            completedata.map((values)=>{
                data1 += `
                <div class="card">
                    <h1 class="title"></h1>
                    <img class="images" src=${values.images} alt="img">
                    <p>${values.title}</p>
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