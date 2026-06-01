const form = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviews");
const stars = document.querySelectorAll(".stars span");
const ratingInput = document.getElementById("rating");

// ⭐ GESTION DES ÉTOILES
stars.forEach(star => {
  star.addEventListener("click", () => {
    let value = star.getAttribute("data-value");
    ratingInput.value = value;

    stars.forEach(s => {
      s.classList.remove("active");
      if (s.getAttribute("data-value") <= value) {
        s.classList.add("active");
      }
    });
  });
});

// 📦 CHARGER AVIS
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviewsContainer.innerHTML = "";

  reviews.forEach(r => {
    const div = document.createElement("div");
    div.classList.add("review");

    div.innerHTML = `
      <strong>${r.name}</strong><br>
      ${"⭐".repeat(r.rating)}<br>
      <em>${r.service}</em>
      <p>${r.comment}</p>
    `;

    reviewsContainer.appendChild(div);
  });
}

// 📤 ENVOYER AVIS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const review = {
    name: document.getElementById("name").value,
    service: document.getElementById("service").value,
    rating: ratingInput.value,
    comment: document.getElementById("comment").value
  };

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.unshift(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  form.reset();
  stars.forEach(s => s.classList.remove("active"));
  ratingInput.value = 0;

  loadReviews();
});

loadReviews();