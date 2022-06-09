window.addEventListener('load', function (e) {

    function ajax() {

        scanner('  http://localhost:3000/shop')
            // .then(data => data.json()) // Massiv ko'rinishiga keltirib oldik 
            .then(data => card(data.data)) //bitta o'zgaruvchini ichiga oldik ma'lumotlarni va ekranga chiqaryabmiz 
        // data ichidagi data qilib o'zgartirishimiz kerak bo'ladi
        this.remove()
    }

    function card(response) {
        response.forEach(element => {
            let divs = document.createElement('div')
            divs.classList.add('box')
            divs.innerHTML = `
        <div class="box_img">
            <img src="${element.photo}" alt="">
        </div>
        <div class="box_text">
            <h2>${element.name}</h2>
            <p>Price <span>${element.price} </span></p>
        </div>
        <div class="box_contact">
           <button>Number</button>
        </div>
                `
            document.querySelector('.cards').appendChild(divs)
        })
    }

    async function scanner(url) { // async - ma'lumot kelishini kutib turishini ta'minlab beradi
        let res = await axios(url) // await - ma'lumot kelib tushmaguncha kutib turgin degan buyruq bradi
        if (res.status == 200) {
            return await res // agar muvafaqiyatli amalgha oshirilsa ma'lumotni .json formatiga o'zgaririb qaytarib bergin devotti
        } else {
            throw new Error('serverda xatolik bor') // throw new Error- xatoliklarni ushab qoluvchi qanaqadur funksiya  
        }
    }
    var btn = document.querySelector('button');
    btn.addEventListener('click', ajax)
    var pak = document.querySelector('.cards button');
    pak.addEventListener('click', ajax, function () {
        console.log('salom');
    })

});