

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<i class='far fa-arrow-left'></i>","<i class='far fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//pro
window.onresize = function(event) {
    reloadSlider();
};

//Banner Swiper

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


//khi ấn vào nút giỏ hàng thì tăng thêm đơn vị
var giohang = new Array();

        function themvaogiohang(x) {
            var pro = x.parentElement.children;
            var hinh = pro[0].src;
            var tensp = pro[1].children[1].innerText;
            var gia = x.parentElement.querySelector('h4 span').innerText; //lấy ra chuỗi 250.000
            var giasp = gia.replace(/[^\d]/g, ''); // lấy ra số 250000
           // var soluong = 1;
            var sp = new Array(hinh, tensp, giasp); //soluong);

            //ktra trong giỏ hàng
        var kt=0;
        for (let i=0;i<giohang.length;i++){
        if(giohang[i][1]==tensp){
        kt=1;
        break;
        }
        }
        if(kt==0){
            //thêm mới
            giohang.push(sp);
        }


           // console.log(giohang);
            showcountsp();

            //lưu giỏ hàng lên sesionStorage 

            sessionStorage.setItem("giohang",JSON.stringify(giohang));
        }

        function showcountsp() {
            document.getElementById("countsp").innerHTML = giohang.length;
        }

