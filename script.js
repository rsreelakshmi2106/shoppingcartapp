function additem() {
    item=shopitem.value;
    price=iprice.value;
    shobj=localStorage.getItem("cart")
    var cartarray
    if(shobj==null || shobj==undefined){
        cartarray=[]
    }
    else{
        cartarray=JSON.parse(shobj)
        if(!Array.isArray(cartarray)){
            cartarray=[]
        }
    }
    shcart={
        citem:item,
        iprice:price
    }
    cartarray.push(shcart)
    localStorage.setItem("cart",JSON.stringify(cartarray))
    alert("Item added !")
    dispaly()
}

function dispaly() {
    cartdetails = JSON.parse(localStorage.getItem("cart"));
    console.log(cartdetails);
    if (cartdetails == null || cartdetails.length == 0) {
        carttable.innerHTML = ``;
    } else {
        let totalAmount = 0;
        htmlContent = ``;
        cartdetails.forEach(ele => {
            totalAmount += parseFloat(ele.iprice);
            htmlContent += `
                <tr> 
                    <td>${ele.citem} </td>
                    <td>${ele.iprice} </td>
                    <td><button class="btn btn-light" onclick="removeitem('${ele.citem}')"><i class="fas fa-trash"></i></button></td>
                </tr>
            `;
        });
        htmlContent += `
            <tr>
                <td colspan="2" style="text-align: right; font-weight: bold;">Total:</td>
                <td>${totalAmount.toFixed(2)}</td>
            </tr>
        `;
        carttable.innerHTML = `<thead style="font-family: Madimi One;"><tr><th scope="col">Item</th><th scope="col">Price</th><th scope="col">Remove</th></tr></thead><tbody>${htmlContent}</tbody>`;
    }
}

function removeitem(item) {
    cartdet=JSON.parse(localStorage.getItem("cart"))
    for (i = 0; i < cartdet.length; i++) {
        if (cartdet[i].citem === item) {
            cartdet.splice(i, 1);
            break; 
        }
    }
    localStorage.setItem("cart", JSON.stringify(cartdet));
    dispaly()
}
// function dispaly() {
//     cartdetails=JSON.parse(localStorage.getItem("cart"))
//     console.log(cartdetails);
//     if(cartdetails == null || cartdetails.length==0){
//         carttable.innerHTML=``
//     }
//     else{
//         htmlContent=``
//         cartdetails.forEach(ele => {
//             htmlContent += `
//                 <tr> 
//                     <td>${ele.citem} </td>
//                     <td>${ele.iprice} </td>
//                     <td><button class="btn btn-light" onclick="removeTask('${ele.citem}')"><i class="fas fa-trash"></i></button></td>
//                 </tr>
//             `;
//         });
//         totalAmount+=ele.iprice
//         htmlContent += `
//         <tr>
//             <td colspan="2" style="text-align: right; font-weight: bold;">Total:</td>
//             <td>${totalAmount.toFixed(2)}</td>
//         </tr>
//     `;
//         carttable.innerHTML = `<thead style="font-family:Madimi One;"><tr><th scope="col">Item</th><th scope="col">Price</th><th scope="col">Remove</th></tr></thead><tbody>${htmlContent}</tbody>`;
//     }
// }
// localStorage.clear()