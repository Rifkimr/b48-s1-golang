// step:
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implements polymorphism by making class CompanyTestimonial and override get author(the key point is polymorhp implement and override)
// - refactor the code so it implements abstraction by making get testimonialHTML and get author throw error when the children didn't use it
// - refactor the code so it implements encapsulation, use setter and getter (key point is, encapsulation try to make app more secure by implementing restriction)

// Superclass
// class Testimonial {
//     #quote = "";
//     #image = "";
  
//     constructor(quote, image) {
//       this.#quote = quote;
//       this.#image = image;
//     }
  
//     get quote() {
//       return this.#quote;
//     }
  
//     get image() {
//       return this.#image;
//     }
  
//     // This is an abstract method that subclasses will implement
//     get author() {
//       throw new Error("getAuthor() method must be implemented");
//     }
  
//     // This is a polymorphic method that can take any subclasses of Testimonial
//     get testimonialHTML() {
//       return `<div class="tetimonial">
//       <img src="${this.image}">
//       <p class="content">${this.quote}</p>
//       <p class="author">-${this.author}</p>
//       </div>
//           `;
//     }
//   }
  
//   // Subclass
//   class AuthorTestimonials extends Testimonial {
//     #author = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#author = author;
//     }
  
//     get author() {
//       return this.#author;
//     }
//   }
  
//   // Subclass
//   class CompanyTestimonials extends Testimonial {
//     #company = "";
  
//     constructor(company, quote, image) {
//       super(quote, image);
//       this.#company = company;
//     }
  
//     get author() {
//       return this.#company + "";
//     }
//   }
  
//   const testimonial1 = new AuthorTestimonials(
//     "The jack",
//     "Macan Kemayoran 🐅🐅🐅",
//     "https://awsimages.detik.net.id/community/media/visual/2020/03/01/34f8b066-6d1f-4e21-a4da-63e69920e77f.jpeg?w=650&q=80"
//   );
//   const testimonial2 = new AuthorTestimonials(
//     "Indonesia",
//     "Garuda di dadaku 🦅🦅🦅",
//     "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/12/31/429370461.jpg"
//   );
//   const testimonial3 = new CompanyTestimonials(
//     "Viking",
//     "Maung Bandung  🐆🐆🐆",
//     "https://cdn0-production-images-kly.akamaized.net/853dxyWDQ7esH8WBAcmln6nC4UM=/0x0:2936x1651/1200x675/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/bola/watermark-color-landscape-new.png,1125,20,0)/kly-media-production/medias/3561503/original/053505600_1630776165-a20210409IQ_Persib_Bandung_Vs_Barito_Putra_06.jpg"
//   );
  
//   let testimonialData = [testimonial1, testimonial2, testimonial3];
//   let testimonialHTML = "";
  
//   for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
//   }
  
//   document.getElementById("testimonials").innerHTML = testimonialHTML;

// const testimonialData = 
// [
//   {
//     author : "Macan Kemayoran 🐅🐅🐅",
//     quote : "Persija dan Klok sama-sama mengumumkan berakhirnya kerja sama kedua pihak, kemarin, pukul 19.00 WIB. Hal itu menjadi kabar mengejutkan buat Jakmania di tengah hubungan yang mesra di antara Persija dan Klok.",
//     image : "https://awsimages.detik.net.id/community/media/visual/2020/03/01/34f8b066-6d1f-4e21-a4da-63e69920e77f.jpeg?w=650&q=80",
//     rating : 5,
//   },
//   {
//     author : "Garuda di dadaku 🦅🦅🦅",
//     quote : "Marc Klok mengaku sudah tidak sabar bertemu salah satu pemain Timnas Palestina, Mohammed Rashid",
//     image : "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/12/31/429370461.jpg",
//     rating : 4,
//   },
//   {
//     author : "Viking Maung Bandung",
//     quote : "Pada 30 Juni 2021, Klok bergabung ke Persib Bandung dengan menandatangani kontrak berdurasi empat tahun.",
//     image : "https://cdn0-production-images-kly.akamaized.net/853dxyWDQ7esH8WBAcmln6nC4UM=/0x0:2936x1651/1200x675/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/bola/watermark-color-landscape-new.png,1125,20,0)/kly-media-production/medias/3561503/original/053505600_1630776165-a20210409IQ_Persib_Bandung_Vs_Barito_Putra_06.jpg",
//     rating : 3,
//   },
//   {
//     author : "Timnas",
//     quote : "Selebrasi Marc Klok setelah sukses mencetak gol dalam laga FIFA Matchday antara Indonesia vs Curacao di Stadion Gelora Bandung Lautan Api, Sabtu (24/9/2022). Terdekat, Marc Klok bersama timnas Indonesia akan menghadapi Kamboja pada laga Grup A Piala AFF 2022, Jumat (23/12/2022)",
//     image : "https://img.okezone.com/content/2023/05/26/51/2820632/timnas-indonesia-vs-argentina-marc-klok-sebuah-mimpi-main-lawan-lionel-messi-cs-9VKJaAzfpR.jpg",
//     rating : 5,
//   },
//   {
//     author : "Scotlandia",
//     quote : "Klok menandatangani kontrak untuk klub Skotlandia Ross County pada Juni 2013 dan tampil perdana dalam kekalahan kandang 1–4 dari Celtic pada 9 November. Ia diputus kontrak pada Agustus 2014 setelah hanya melakoni enam penampilan",
//     image : "https://epicentrum.co.id/images/post/86458a2fd8d7e4c8-e1487077495437.jpg",
//     rating : 2,
//   },
//   {
//     author : "zee burgia",
//     quote : "Pada 13 Oktober 2014, setelah masa percobaan yang sukses, Klok menandatangani kontrak dengan klub Bulgaria Cherno More. Ia tampil perdana dalam kekalahan 0–2 melawan Razog Ludogorets pada 25 Oktober. Pada 23 September 2015,    ",
//     image : "https://upload.wikimedia.org/wikipedia/commons/5/52/Marc_klok.JPG",
//     rating : 2,
//   }
// ];

// function allTestimonials() {
//   let testimonialHTML = "";

//   testimonialData.forEach(function(item) {
//     testimonialHTML += `
//     <div class="tetimonial">
//       <img src="${item.image}">
//       <p class="content">${item.quote}</p>
//       <p class="author">-${item.author}</p>
//       <p class="author">${item.rating}<i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
//     </div>
//     `;
//   })

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }

// allTestimonials();

// function filterTestimonials(rating) {
//   let testimonialHTML = "";

//   const testimonialFiltered = testimonialData.filter(function(item) {
//     return item.rating === rating;
//   });

//   console.log(testimonialFiltered);

//   if (testimonialFiltered.length === 0) {
//     testimonialHTML += `<h1>Data Not Found!</h1>`;
//   } else {
//     testimonialFiltered.forEach(function(item){
//       testimonialHTML += `
//       <div class="tetimonial">
//       <img src="${item.image}">
//       <p class="content">${item.quote}</p>
//       <p class="author">-${item.author}</p>
//       <p class="author">${item.rating} <i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
//     </div>
//       `;
//     })
//   }

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }