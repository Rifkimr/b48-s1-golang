const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/2f8a68257da051aa7d54", true);
  console.log(xhr);
  xhr.onload = () => {
    if (xhr.status === 200) {
      // We parsing it so it is easier to read in console
      // response vs responseText, the differences are, responseText is an older version, when response is more newer, but the output is still the same/similiar.
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading data.");
    }
  };
  xhr.onerror = () => {
    reject("Network error test");
  };
  xhr.send();
});

async function getAllTestimonials() {
  const response = await promise;
  // console.log(response)
  let testimonialHTML = "";
  response.forEach(function (item) {
    testimonialHTML += `
                            <div class="tetimonial">
                                <img src="${item.image}">
                                <p class="content">${item.quote}</p>
                                <p class="author">-${item.author}</p>
                                <p class="author">${item.rating}<i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
                            </div>
                            `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

getAllTestimonials();

async function getFilteredTestimonial(rating) {
  const response = await promise;

  const testimonialsFiltered = response.filter((item) => {
    return item.rating === rating;
  });

  // console.log(testimonialsFiltered)
  let testimonialHTML = "";

  if (testimonialsFiltered.length === 0) {
    testimonialHTML = `<h1>Data Not Found!</h1>`;
  } else {
    testimonialsFiltered.forEach((item) => {
      testimonialHTML += `
       <div class="tetimonial">
       <img src="${item.image}">
       <p class="content">${item.quote}</p>
       <p class="author">-${item.author}</p>
       <p class="author">${item.rating} <i class="fa-solid fa-star" style="color: #f2be22;"></i></p>
       </div>
       `;
    });
  }
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
