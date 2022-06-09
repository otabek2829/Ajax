//             ============ Personal Code Type ============

window.addEventListener('load', function (e) {
    function ajax() {
        const server = new XMLHttpRequest()
        // console.log(server);

        // XML - bu serverga bo'lgan so'rov 
        // HTTP - online so'rov tashish

        server.open('GET', 'http://localhost:3000/shop')
        // Get so'rovi orqali malumotlarni qabul qilish  <server ulandi>

        server.setRequestHeader("Content-type", 'application/json; charset = utf-8')
        //Serverni Header qismiga o'rnatish / Browserni ogohlantirish

        server.send()
        // Ishlatib Beryabdi Loading Bo'laybdi


        // readystatechange - bu metod bosqichma-bosqich tekshiruvdan o'tkazadi
        // load metodi srazi ekran yangilanganda 

        server.addEventListener('load', () => {
            if (server.status == 200) {

                // console.log(typeof server.response) // Serverdan Kelayotgan Ma'lumot Server.response

                var data = JSON.parse(server.response) // server.response (hozirgi holatida 'string') ma'lumot turini 'object ma'lumot turiga aylantirish parse() funksiyasi orqali

                // console.log(data); // Ma'lumot turi Massiv bo'lyabdi

                data.forEach((element) => { // Massivni Yoyib Yuboramiz Massivni Object.ga aylantiramiz
                    // console.log(element);
                    let divs = document.createElement('div') // createElement - JavaScript ichidan div ochish 
                    divs.classList.add('box') // classList - class qo'shish
                    // ${} - tilda usulida ma'lumotlarni tortib olish
                    // Ma'lumotlarni ekranga chiqarish
                    divs.innerHTML = `

                    <div class="box_img">
                    <img src="${element.photo}" alt=""> 
                     </div>
                     <div class="box_text">
                         <h2>${element.name}</h2>
                         <p>Price <span>${element.price} </span></p>
                     </div>

                     <div class="box_contact">
                         <button >Phone</button>
                         </div>
                         `
                    document.querySelector('.cards').appendChild(divs);
                })
            } else {
                console.log('xatolik bor')
            }
            this.remove()
            let btnPhone = document.querySelectorAll('.box_contact button');
            for (let i = 0; i < btnPhone.length; i++) {
                btnPhone[i].addEventListener('click',()=> {
                    data.forEach(element =>{
                        btnPhone[i].textContent = `${element.tel}`
                    } )
                })
            }
        })
    }
    document.querySelector('.btn').addEventListener('click', ajax)

})





































// " window.addEventListener('load', function (e) {
//      function ajax () {
//          const server = new XMLHttpRequest()
//         //  console.log(server);
//         server.open("GET" ,  'http://localhost:3000/shop')
//         server.setRequestHeader("Content-type", 'application/json; charset = utf-8')
//         server.send()
//         server.addEventListener('load' , () => {
//             if( server.status == 200){
//                 console.log(typeof server.response);
//                 let data = JSON.parse(server.response)
//                 data.forEach((element) => {
//                     console.log(element);
//                     let divs = document.createElement('div')
//                     divs.classList.add('box')
//                     divs.innerHTML = `
//                             <div class="box_img">
//                                 <img src="${element.photo}" alt="">
//                             </div>
//                             <div class="box_text">
//                                 <h2>${element.name}</h2>
//                                 <p>Price <span>${element.price} </span></p>
//                             </div>
//                             <div class="box_contact">
//                                 <button>${element.tel}</button>
//                             </div>
//                     `
//                     document.querySelector('.cards').appendChild(divs)
//                 });
//             }else{
//                 console.log('xatolik bor');
//             }
//         })
//         this.remove()
//      }
//      let btn = document.querySelector('button');
//      btn.addEventListener('click' , ajax , {once : true})


// });
