// const siteUrl = '//127.0.0.1:8000/';
// const styleUrl = siteUrl + 'static/css/bookmarklet.css';
// const minWidth = 250;
// const minHeight = 250;


// // load CSS
// var head = document.getElementsByTagName('head')[0];
// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = styleUrl + '?r=' + Math.floor(Math.random()*9999999999999999);
// head.appendChild(link);
// // this will generate <link rel="stylesheet" type="text/css" href= "//127.0.0.1:8000/static/css/bookmarklet.css?r=1234567890123456"> on header

// // load HTML
// var body = document.getElementsByTagName('body')[0];
// boxHtml = `
//  <div id="bookmarklet">
//  <a href="#" id="close">&times;</a>
//  <h1>Select an image to bookmark:</h1>
//  <div class="images"></div>
//  </div>`;
// body.innerHTML += boxHtml;


// function bookmarkletLaunch() {
//     bookmarklet = document.getElementById('bookmarklet');
//     var imagesFound = bookmarklet.querySelector('.images');

//     // clear images found
//     imagesFound.innerHTML = '';
//     //display bookmarklet
//     bookmarklet.style.display = 'block';

//     // close event
//     bookmarklet.querySelector('#close').addEventListener('click', function() {
//         bookmarklet.style.display = 'none'
//     });

//     // find images in the DOM with the minimum dimensions
//     console.log('Bookmarklet: Find image in DOM')
//     images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
//     images.forEach(image => {
//         if (image.naturalWidth >= minWidth && image.naturalHeight >= minHeight) {
//             var imageFound = document.createElement('img');
//             imageFound.src = image.src;
//             imagesFound.append(imageFound);
//         }
//     })


// }

// // launch the bookmarklet
// bookmarkletLaunch();


const siteUrl = '//127.0.0.1:8000/';
const styleUrl = siteUrl + 'static/css/bookmarklet.css';
const minWidth = 250;
const minHeight = 250;

// load CSS
var head = document.getElementsByTagName('head')[0];
// The <head> element of the site is retrieved with document.getElementsByTagName(). This 
// function retrieves all HTML elements of the page with the given tag. By using [0] we access 
// the first instance found. We access the first element because all HTML documents should have 
// a single <head> element.
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = styleUrl + '?r=' + Math.floor(Math.random()*9999999999999999); 
// URL parameter to prevent the browser from loading the file from the cache
head.appendChild(link);


// This section loads the CSS stylesheet for the bookmarklet. 
// We use JavaScript to manipulate the Document Object Model (DOM). 
// The DOM represents an HTML document in memory and it is created 
// by the browser when a web page is loaded. The DOM is constructed as a tree of objects that comprise 
// the structure and content of the HTML document.


// load HTML
var body = document.getElementsByTagName('body')[0];
boxHtml = `
 <div id="bookmarklet">
 <a href="#" id="close">&times;</a>
 <h1>Select an image to bookmark:</h1>
 <div class="images"></div>
 </div>`;
body.innerHTML += boxHtml;


function bookmarkletLaunch() {
    bookmarklet = document.getElementById('bookmarklet');
    var imagesFound = bookmarklet.querySelector('.images');
    // clear images found
    imagesFound.innerHTML = '';
    // display bookmarklet
    bookmarklet.style.display = 'block';
    // close event
    bookmarklet.querySelector('#close').addEventListener('click', function() {
        bookmarklet.style.display = 'none'
    });

    // find images in the DOM with the minimum dimensions
  images = document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]');
  images.forEach(image => {
    if(image.naturalWidth >= minWidth
       && image.naturalHeight >= minHeight)
    {
      var imageFound = document.createElement('img');
      imageFound.src = image.src;
      imagesFound.append(imageFound);
    }
  })

  // select image event
  imagesFound.querySelectorAll('img').forEach(image => {
  image.addEventListener('click', function(event){
  imageSelected = event.target;
  bookmarklet.style.display = 'none';
  window.open(siteUrl + 'images/create/?url='
  + encodeURIComponent(imageSelected.src)
  + '&title='
  + encodeURIComponent(document.title),
  '_blank');
  })
  })
}
   // launch the bookmkarklet
   bookmarkletLaunch();