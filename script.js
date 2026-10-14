// ✏️ EDIT THIS LIST: one entry per product.
//   name  - product name shown on the tag
//   note  - optional short note ("any colour", "size M")
//   store - shop name shown on the tag (also used for the Shop filter)
//   price - in rupees, just the number
//   link  - the product page URL (copy it from the shop's address bar)
//   image - optional: put a photo in the images folder and write "images/filename.jpg"
const WISHLIST = [
  { name: "Marquise Starfish Helix Hanging Earrings", note: "92.5 sterling silver, rhodium finish.", store: "Silverfied", price: 1449, link: "https://www.silverfied.in/products/rhodium-marquise-starfish-helix-hanging-earrings-92-5-silver", image: "https://cdn.shopify.com/s/files/1/0567/5984/4923/files/02_16_b96f0d2d-7729-46a2-a2bc-e7ce030d8352.png?v=1754050655&width=600" },
  { name: "Dangle Threaded Flat Back Screw Stud Earrings", note: "92.5 sterling silver, rhodium finish.", store: "Silverfied", price: 1249, link: "https://www.silverfied.in/products/rhodium-dangle-threaded-flat-back-screw-stud-earrings-92-5-silver", image: "https://cdn.shopify.com/s/files/1/0567/5984/4923/files/my1-04376_Edit_17fc055f-7a5e-40d5-ba5f-2c0a799662f9.jpg?v=1753875858&width=600" },
  { name: "कRAVE Crème Lipstick", note: "Shade 02 – Passion.", store: "MARS Cosmetics", price: 299, link: "https://marscosmetics.in/products/%E0%A4%95rave-creme-lipstick?variant=55109999329504", image: "https://cdn.shopify.com/s/files/1/0450/5069/1744/files/02_Shade_ob.jpg?v=1790233707&width=600" },
  { name: "कRAVE Crème Lipstick", note: "Shade 11 – Flirt.", store: "MARS Cosmetics", price: 299, link: "https://marscosmetics.in/products/%E0%A4%95rave-creme-lipstick?variant=55109999624416", image: "https://cdn.shopify.com/s/files/1/0450/5069/1744/files/11_Shade_ob.jpg?v=1790233708&width=600" },
  { name: "Mello Mousse Lip Tint", note: "Shade 02 – Cherry.", store: "MARS Cosmetics", price: 299, link: "https://marscosmetics.in/products/mello-mousse-lip-tint?variant=53783496884448", image: "https://cdn.shopify.com/s/files/1/0450/5069/1744/files/LT03_2_ws.jpg?v=1785829927&width=600" },
  { name: "Mello Mousse Lip Tint", note: "Shade 08 – Toast.", store: "MARS Cosmetics", price: 299, link: "https://marscosmetics.in/products/mello-mousse-lip-tint?variant=53783497081056", image: "https://cdn.shopify.com/s/files/1/0450/5069/1744/files/LT03_8_ws.jpg?v=1785830000&width=600" },
  { name: "Starlit Pot Eyeshadow", note: "Shade 01 – Starlit.", store: "MARS Cosmetics", price: 399, link: "https://marscosmetics.in/products/starlit-pot-eyeshadow?variant=47716878123232", image: "https://cdn.shopify.com/s/files/1/0450/5069/1744/files/1W_0946d804-8186-4401-9085-ef73fb874d23.jpg?v=1776146684&width=600" },
  { name: "Glitter Liquid Eyeshadow", note: "Shade Gravity.", store: "MARS Cosmetics", price: 249, link: "https://marscosmetics.in/products/glitter-liquid-eyeshadow?variant=37360002105504", image: "https://cdn.shopify.com/s/files/1/0450/5069/1744/products/Gravity.jpg?v=1766143760&width=600" },
  { name: "Alter Ego Starburst Shimmer Eyeshadow", note: "Shade Berry Beam. Water-resistant, longwear, 2g.", store: "LOVETC", price: 700, link: "https://lovetc.com/products/lovetc-alter-ego-starburst-water-resistant-shimmer-longwear-eyeshadow-2g?variant=52371621806354", image: "https://cdn.shopify.com/s/files/1/0928/6018/6898/files/berry_beam-1.jpg?v=1790848993&width=600" },
  { name: "PRO Daily Anti-Dandruff Shampoo", note: "For an itchy, flaky scalp. 225ml.", store: "Trigaine", price: 370, link: "https://trigaine.com/products/trigaine-pro-daily-anti-dandruff-shampoo", image: "https://cdn.shopify.com/s/files/1/0941/2850/5122/files/trigaine-pro-6acca53da014b.webp?v=1791796615&width=600" },
  { name: "Invisible Necklace Chain", note: "Gold tone with a green stone pendant.", store: "Meesho", price: 138, link: "https://www.meesho.com/s/p/fhmbtn", image: "images/meesho-1.jpg" },
  { name: "Green Lotus Kundan Invisible Necklace", note: "Gold plated, adjustable.", store: "Meesho", price: 148, link: "https://www.meesho.com/s/p/djfcr0", image: "images/meesho-2.jpg" },
  { name: "Invisible Lotus Chain", note: "Pink and green lotus pendant.", store: "Meesho", price: 131, link: "https://www.meesho.com/s/p/h2zs6t", image: "images/meesho-3.jpg" },
  { name: "Kembu Attigai Earrings", note: "One gram gold coated, with pearls.", store: "Meesho", price: 164, link: "https://www.meesho.com/s/p/69ovkx", image: "images/meesho-4.jpg" },
  { name: "Gold-Tone Heart Hoop Earrings", note: "Minimal heart-shaped hoops.", store: "Meesho", price: 152, link: "https://www.meesho.com/s/p/hl22b5", image: "images/meesho-5.jpg" },
  { name: "Silver Oxidised Long Pearl Earrings", note: "Handmade, 10 cm long.", store: "Meesho", price: 128, link: "https://www.meesho.com/s/p/bpqom1", image: "images/meesho-6.jpg" },
  { name: "Boho Black Filigree Danglers", note: "Vintage oxidised finish.", store: "Meesho", price: 166, link: "https://www.meesho.com/s/p/hfae3x", image: "images/meesho-7.jpg" },
  { name: "Oxidised Elephant Earrings", note: "Oxidised silver with pearl beads. Set of 2.", store: "Meesho", price: 164, link: "https://www.meesho.com/s/p/99dci8", image: "images/meesho-8.jpg" },
];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const tilts = [-2.5, 1.8, -1.2, 2.6, -1.9, 1.1];

document.querySelector(".bunting").innerHTML = "<span></span>".repeat(60);

function rupees(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function makeTag(item, i) {
  const li = document.createElement("li");
  li.style.setProperty("--tilt", tilts[i % tilts.length] + "deg");

  const a = document.createElement("a");
  a.className = "tag";
  a.href = item.link;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${item.name}, ${item.store}, opens in a new tab`);

  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "";
    a.appendChild(img);
  }

  const store = document.createElement("span");
  store.className = "store";
  store.textContent = item.store;

  const title = document.createElement("h2");
  title.textContent = item.name;

  const note = document.createElement("p");
  note.textContent = item.note || "";

  const foot = document.createElement("div");
  foot.className = "foot";
  foot.innerHTML = '<span class="price"></span><span class="go">View on site →</span>';
  foot.querySelector(".price").textContent = item.price ? rupees(item.price) : "";

  a.append(store, title, note, foot);
  li.appendChild(a);
  return li;
}

const priceSelect = document.getElementById("price");
const shopSelect = document.getElementById("shop");
const sortSelect = document.getElementById("sort");
const count = document.getElementById("count");
const empty = document.getElementById("empty");

// Fill the shop dropdown from the shops used in the list
[...new Set(WISHLIST.map(item => item.store))].sort().forEach(store => {
  shopSelect.add(new Option(store, store));
});

function render() {
  const [min, max] = priceSelect.value.split("-").map(Number);
  const shop = shopSelect.value;

  const items = WISHLIST.filter(item =>
    (shop === "All" || item.store === shop) &&
    item.price >= min && item.price < max
  );
  if (sortSelect.value === "low") items.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") items.sort((a, b) => b.price - a.price);

  grid.innerHTML = "";
  items.forEach((item, i) => grid.appendChild(makeTag(item, i)));

  count.textContent = `Showing ${items.length} of ${WISHLIST.length}`;
  empty.hidden = items.length > 0;
}

filters.addEventListener("change", render);
// "Clear filters" resets the dropdowns; wait for the reset to finish before redrawing
filters.addEventListener("reset", () => setTimeout(render));

render();
