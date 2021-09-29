const images = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg',
	'8.jpg',
	'9.jpg',
	'10.jpg',
	'11.jpg',
	'12.jpg',
	'13.jpg',
	'14.jpg',
	'15.jpg',
	'16.jpg',
	'17.jpg',
	'18.jpg',
	'19.jpg',
	'20.jpg',
	'21.jpg',
	'22.jpg',
	'23.jpg',
	'24.jpg',
	'25.jpg',
	'26.jpg',
	'27.jpg',
	'28.jpg',
	'29.jpg',
	'30.jpg',
	'31.jpg',
	'32.jpg',
	'33.jpg',
	'34.jpg',
	'35.jpg',
	'36.jpg',
	'37.jpg',
	'38.jpg',
	'39.jpg',
	'40.jpg',
	'41.jpg',
	'42.jpg',
	'43.jpg',
	'44.jpg',
	'45.jpg',
	'46.jpg',
	'47.jpg',
	'48.jpg',
	'49.jpg',
	'50.jpg',
	'51.jpg',
	'52.jpg',
	'53.jpg',
	'54.jpg'
];

let   img   = document.querySelector('.round-bag-img'),
			range = document.querySelector('input');

range.value = 0;
range.max   = images.length - 1;
img.src     = '/img/360/' + images[0];

range.oninput = function(){
	img.src = '/img/360/' + images[range.value]
}

let tab = function () {
  let tabCard    = document.querySelectorAll(".tabs__header-card"),
			tabPoint   = document.querySelectorAll(".tabs__header-card__pointer"),
      tabImg     = document.querySelectorAll(".tabs__slider-bag"),
      tabPointer = document.querySelectorAll(".point"),
      tabTitle   = document.querySelectorAll(".tabs__slide__description-title"),
      tabName;

  tabCard.forEach(function(item) {
    item.addEventListener("click", function () {
      tabPoint.forEach(function(item) {
        item.classList.remove('active')
      });
      
      tabName = this.getAttribute("data-tab-name")

      function selectTabPoint(tabName) {
        tabPoint.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add("active"):
            item.classList.remove("active")
        })
      }		

      selectTabPoint(tabName);

      function selectTabImg (tabName) {
        tabImg.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add("active"):
            item.classList.remove("active")
        })
      }	

      selectTabImg(tabName);

      function selectTabPointer (tabName) {
        tabPointer.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add("active"):
            item.classList.remove("active")
        })
      }	

      selectTabPointer(tabName);

      function selectTabTitle (tabName) {
        tabTitle.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add("active"):
            item.classList.remove("active")
        })
      }	

      selectTabTitle(tabName);
    });
  });
}

tab()


