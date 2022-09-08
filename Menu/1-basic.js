const menu = [
  {
    id: 1,
    title: "Garlic Knots",
    category: "Appetizers",
    price: 7.99,
    img: "../menu/img/garlic-knots.jpg",
    desc: `(4) Fresh hand-tied knots, baked and tossed in olive oil and garlic, topped with Romano cheese and fresh-cut basil. Served with a side of warm marinara `,
  },
  {
    id: 2,
    title: "Classic Ceasar",
    category: "Salads",
    price: 6.5,
    img: "./images/ceasar.jpg",
    desc: `Romaine lettuce, Caesar dressing, croutons, and shaved parmesan. Add grilled chicken for $4 `,
  },
  {
    id: 3,
    title: "The Italian",
    category: "Sandwiches",
    price: 10.0,
    img: "./images/italian-sandwich.jpg",
    desc: `Smoked provolone, pepperoni, salami, and capicola. Baked and drizzled with Italian dressing. Served with a small salad.`,
  },
  {
    id: 4,
    title: "Hot Honey Melt",
    category: "Sandwiches",
    price: 11.0,
    img: "./images/italian-sandwich2.jpg",
    desc: `Sharp cheddar, smoked provolone, mozzarella, and smoked gouda with a touch of local Honey Couple "Fire in the Hive" Thai chili-infused honey. Served with a cup of San Marzano tomato soup. `,
  },
  {
    id: 5,
    title: "The Bianco",
    category: "Pizza",
    price: 17.0,
    img: "./images/no-sauce.jpg",
    desc: `No sauce, fresh mozzarella, ricotta, and whole-roasted garlic. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Encore",
    price: 8.99,
    img: "./images/oreo.jpg",
    desc: `A decadent shake made with crushed Oreos and real cream.`,
  },
  {
    id: 7,
    title: "Death by Pepperoni",
    category: "Pizza",
    price: 8.99,
    img: "./images/pizza1.jpg",
    desc: `Pepperoni, Rosa Grande pepperoni, and Cup n Char pepperoni with smoked provolone, topped with two stripes of marinara. `,
  },
  {
    id: 8,
    title: "Canoli",
    category: "Encore",
    price: 7.0,
    img: "./images/cannoli.jpg",
    desc: `Filled with sweetened ricotta and chocolate chips, topped with powdered sugar. `,
  },
  {
    id: 9,
    title: "The Nona House",
    category: "Salads",
    price: 6.99,
    img: "./images/house-salad.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Detroit Red Top",
    category: "Pizza",
    price: 22.99,
    img: "./images/deep-dish.jpg",
    desc: `Mozzarella and brick cheeses topped with two stripes of marinara.`,
  },
  {
    id: 11,
    title: "The Street Car",
    category: "Pizza",
    price: 20.0,
    img: "./img/street-car.jpg",
    desc: `Roasted cherry tomatoes, ricotta, whole-roasted garlic, and roasted red peppers.`,
  },
  {
    id: 11,
    title: "Grilled Caprese",
    category: "Appetizers",
    price: 10.0,
    img: "./img/caprese.jpg",
    desc: `Our Spin on a classic. Cherry tomatoes and fresh mozzarella-ball skewers lightly grilled and served with fresh basil and balsamic drizzle, seasoned with sea salt.`,
  },
  {
    id: 11,
    title: "GiGi/'s Monster Cookie",
    category: "Encore",
    price: 7.0,
    img: "./img/cookie.jpg",
    desc: `These flourless cookies are a family tradition. Oats mixed with chunky peanut butter, M&M/'s, chocolate chips, local “The Honey Couple” honey and brown sugar, then baked to perfection. If you don/'t love them, we/'ll have Great Grandma throw you out!`,
  },
  {
    id: 11,
    title: "Margherita",
    category: "Pizza",
    price: 20.0,
    img: "./img/pizza-cheese.jpg",
    desc: `San Marzano tomatoes, fresh mozzarella, olive oil and fresh basil. Winner of the 2011 “Best pizza in America” at the American Pizza Championship.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
