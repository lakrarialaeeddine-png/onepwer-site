// Countdown Timer
let time = 600;

const timerElement = document.getElementById("timer");

if (timerElement) {
  setInterval(() => {
    if (time <= 0) {
      timerElement.innerText = "00:00";
      return;
    }

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerElement.innerText =
      minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

    time--;
  }, 1000);
}

// Checkout Total
const qtySelect = document.getElementById("qty");
const totalElement = document.getElementById("total");

function updateTotal() {
  if (!qtySelect || !totalElement) return;

  const prices = {
    1: 199,
    2: 379,
    3: 579
  };

  const qty = qtySelect.value;
  totalElement.innerText = "المجموع: " + prices[qty] + " درهم";
}

if (qtySelect) {
  qtySelect.addEventListener("change", updateTotal);
}

// Order Form
const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const order = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
      qty: document.getElementById("qty").value,
      date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "success.html";
  });
}const names = ["محمد", "سميرة", "يوسف", "نادية", "أمين"];
const cities = ["الدار البيضاء", "الرباط", "مراكش", "طنجة"];

function showFakeOrder() {
  const box = document.getElementById("liveOrder");
  if (!box) return;

  const name = names[Math.floor(Math.random() * names.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];

  box.innerText = `🛒 ${name} من ${city} طلب المنتج الآن`;

  box.style.display = "block";

  setTimeout(() => {
    box.style.display = "none";
  }, 4000);
}

setInterval(showFakeOrder, 8000);
// Scroll Animation
const animatedElements = document.querySelectorAll(
  ".section, .premium-about, .explain-section, .reviews-section, .offer-section, .feature-card, .explain-card, .review-card"
);

animatedElements.forEach((element) => {
  element.classList.add("fade-up");
});

function revealOnScroll() {
  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();