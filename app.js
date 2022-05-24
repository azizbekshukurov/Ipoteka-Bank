fetch('https://cors-anywhere.herokuapp.com/https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
    .then((response) => {
        return response.json();
    })
    .then((currency) => {
        var text = "";
        var diff;
        for(var i in currency) {
            diff = (currency[i]['Diff']>=0)?"up":"down" 
            text += `
            <div class="middle">
                <div class="col-4 mid">
                    <img title="${currency[i]['Ccy']}" src="../Currency/flags/${currency[i]['Ccy']}.svg" alt="">
                    <div class="item item-text">${currency[i]['CcyNm_UZ']}, ${currency[i]['Ccy']}</div>
                </div>
                <div class="col-1">
                    <i class="bi bi-bar-chart-line icon-chart"></i>
                </div>
                <div class="col-3 mid">
                    <div class="item diff">${currency[i]['Diff']}
                      <img style="width: 24px;" src="../about_Bank/image/icon__chart_${diff}.svg">
                    </div>
                </div>
                <div class="col-2 mid">
                    <div class="item item-text">${currency[i]['Rate']}</div>
                </div>
            </div>
            `;
        }
        document.getElementById('root').innerHTML = text;

        var opt = "";
        opt += `<option value="1">UZS</option>`;
        for(var i in currency) {
            opt += `<option value="${currency[i]['Rate']}">${currency[i]['Ccy']}</option>`;
        }
        document.getElementById('current_unit').innerHTML = opt;
        document.getElementById('another_unit').innerHTML = opt;
    });
    function Convert() {
        var value = parseFloat(document.querySelector("#current_value").value);
        var current = parseFloat(document.querySelector("#current_unit").value);
        var another = parseFloat(document.querySelector("#another_unit").value);
        document.querySelector("#another_value").value = current / another * value;
    }
    
    $(document).ready(function () {
      $(".button-open").click(function(){
          $(".section-box").fadeIn(500);
          $("body").css({position: "fixed", top: 0, left: 0, bottom: 0, right: 0})
      });
      $(".close-icon").click(function(){
          $(".section-box").fadeOut(600);
          $("body").css({position: "initial"})
      });
  });

  function darkMode(){
      var elm=document.body;
      elm.classList.toggle('dark-mode');
  }

  function ShowHide() {
      if(document.getElementById("pass").type == "text") {
        document.getElementById("pass").type = "password";
        document.getElementById("but").innerHTML = '<i class="bi-eye-slash"></i>';
      }
      else {
        document.getElementById("pass").type = "text";
        document.getElementById("but").innerHTML = '<i class="bi-eye"></i>';
      }
    }

// $(document).ready(function () {
//     $("#open-informat-chat").click(function(){
//         $(".chats").fadeIn(500);
//     });
//     $("#close-informat-chat").click(function(){
//         $(".chats").fadeOut(600);
//     });
// });

// Loader Section
// $(window).on('load', function() {
//     $('#status').fadeOut();
//     $('#preloader').delay(850).fadeOut('slow');
//     $('body').delay(0).css({'overflow':'none'});
// })


// // Slick Slider
// $('. useful-slider-item').slick({
//     slidesToScroll: 1,
//     // dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     variableWidth: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });