/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
 
    {
      id: "P1",
      title: "Iceberg Lager 12x341ml",
      description: "One dozen bottles of the cleanest, smoothest lager this side of the Atlantic",
      price: 3989,
      discontinued: false,
      categories: ["c1","c5"],
      promo: 1
    },
    {
      id: "P2",
      title: "Oktoberfest Marzen 12x473ml",
      description: "An amber coloured German Lager with a toasty malt profile and hint of herbal bitterness",
      price: 4350,
      discontinued: false,
      categories: ["c5"],
      promo: 7
    },
    {
      id: "P3",
      title: "Half Nelson Lager 12x473ml",
      description: "This hopped lager will grasp hold of your sense with its vibrant muscat hop aroma and bracing",
      price: 4435,
      discontinued: false,
      categories: ["c5"],
      promo: 2
    },
    {
      id: "P4",
      title: "Half Nelson Sour Lager 12x473ml",
      description: "This hopped sour lager will grasp hold of your sense with its vibrant muscat hop aroma and bracing",
      price: 4435,
      discontinued: false,
      categories: ["c3","c5"],
      promo: 2
    },
    {
      id: "P5",
      title: "Yekim Lager 12x473ml",
      description: "all the flavours are reversed in this lager",
      price: 4550,
      discontinued: false,
      categories: ["c1","c5"],
      promo: 4
    },
    {
      id: "P6",
      title: "Iceberg Lager 12x473ml",
      description: "One dozen bottles of the cleanest, smoothest lager this side of the Atlantic",
      price: 3989,
      discontinued: true,
      categories: ["c5"],
      promo: 0
    },
    {
      id: "P7",
      title: "Overpass IPA 12x473ml",
      description: "The best IPA this side of the overpass",
      price: 4570,
      discontinued: false,
      categories: ["c1","c2"],
      promo: 3
    },
    {
      id: "P8",
      title: "British IPA 12x473ml",
      description: "Brewed with the upmost respect to the old-word style English IPA",
      price: 4625,
      discontinued: false,
      categories: ["c2"],
      promo: 4
    },
    {
      id: "P9",
      title: "Pitman's Strawberry IPA 12x473ml",
      description: "Using Newfoundland Strawberry created by using the old Pitman family secret recipe",
      price: 4950,
      discontinued: false,
      categories: ["c1", "c2"],
      promo: 1
    },
    {
      id: "P10",
      title: "Pitman's Strawberry IPA 12x550ml",
      description: "Using Newfoundland Strawberry created by using the old Pitman family secret recipe",
      price: 39.89,
      discontinued: true,
      categories: ["c2"],
      promo: 0
    },
    {
      id: "P11",
      title: "Squeezebox IPA",
      description: "Pours with a hazy orange-yellow body topped with a fluffy off white head, bubbling up smells of fragrant nectarine and poached peach.",
      price: 4550,
      discontinued: false,
      categories: ["c2"],
      promo: 6
    },
    {
      id: "P12",
      title: "In the Shed IPA 12x473ml",
      description: "The perfect IPA for the enjoy a shed party",
      price: 4785,
      discontinued: false,
      categories: ["c2"],
      promo: 3
    },
    {
      id: "P13",
      title: "Terra Nova Sound IPA 12x473ml",
      description: "The refreshing taste of relaxation.",
      price: 4785,
      discontinued: false,
      categories: ["c2"],
      promo: 2
    },
    {
      id: "P14",
      title: "Puffin Sour IPA 12x473ml",
      description: "Taste the this yum yum IPA and imagine yourself cruising around puffin island.",
      price: 4790,
      discontinued: false,
      categories: ["c2","c3"],
      promo: 1
    },
    {
      id: "P15",
      title: "Kraal's Partridge Berry Sour 12x473ml",
      description: "Design by our sour master Karl, made from hand picked partridge berries this sour will leave you wanting more",
      price: 4525,
      discontinued: false,
      categories: ["c3"],
      promo: 5
    },
    {
      id: "P16",
      title: "Kraal's Blueberry Sour 12x473ml",
      description: "Design by our sour master Karl, made from hand picked blueberries this sour will leave you wanting more",
      price: 4525,
      discontinued: false,
      categories: ["c1","c3"],
      promo: 4
    },
    {
      id: "P17",
      title: "Kraal's Blueberry Sour 12x550ml",
      description: "Design by our sour master Karl, made from hand picked blueberries this sour will leave you wanting more",
      price: 4525,
      discontinued: true,
      categories: ["c3"],
      promo: 0
    },
    {
      id: "P18",
      title: "Kraal's Sour Passion Fruit 12x473ml",
      description: "Design by our sour master Karl, made from passion fruit this sour will leave you wanting more",
      price: 4525,
      discontinued: false,
      categories: ["c3"],
      promo: 5
    },
    {
      id: "P19",
      title: "Kraal's Sour Cherry 12x473ml",
      description: "Design by our sour master Karl, made from cherry this sour will leave you wanting more",
      price: 4525,
      discontinued: false,
      categories: ["c3"],
      promo: 5
    },
    {
      id: "P20",
      title: "St.Croix Sour Bubbly 12x473ml",
      description: "From the original St.Croix family recipe this sour is the pride of Placentia",
      price: 4525,
      discontinued: false,
      categories: ["c3"],
      promo: 6
    },
    {
      id: "P21",
      title: "Preston's St.Anthony Ale 12x341ml",
      description: "This family recipe comes right from the Northern Pen. Rumors its origin dates back to the vikings",
      price: 3550,
      discontinued: false,
      categories: ["c4"],
      promo: 5
    },
    {
      id: "P22",
      title: "Stronger Together Ale",
      description: "Stronger Together",
      price: 3550,
      discontinued: false,
      categories: ["c4"],
      promo: 4
    },
    {
      id: "P23",
      title: "MP Blades Ale 12x341ml",
      description: "created by Mount Pearl Hockey Legend Paul Preston",
      price: 3550,
      discontinued: false,
      categories: ["c1","c4"],
      promo: 3
    },
    {
      id: "P24",
      title: "Newfie Ale 12x341ml",
      description: "A combination of great Newfoundland Favours.",
      price: 3550,
      discontinued: false,
      categories: ["c1", "c4"],
      promo: 5
    },
    {
      id: "P25",
      title: "Newfie Ale 12x473ml",
      description: "A combination of great Newfoundland Favours.",
      price: 3550,
      discontinued: true,
      categories: ["c4"],
      promo: 0
    },
    {
      id: "P26",
      title: "Squishy Kitty Ale 12/341ml",
      description: "Inspired by Brandon's stuff Kitty all proceeds for this ale is donate to the Autism Society of NL",
      price: 4025,
      discontinued: false,
      categories: ["c4"],
      promo: 8
    },
    {
      id: "P27",
      title: "RDL Lager 12x473ml",
      description: "An uncompromising, full-flavour lager that makes for the best of times no matter the weather",
      price: 4325,
      discontinued: false,
      categories: ["c1","c5"],
      promo: 2
    },
    {
      id: "P28",
      title: "RDL Lager 12x550ml",
      description: "An uncompromising, full-flavour lager that makes for the best of times no matter the weather",
      price: 4325,
      discontinued: true,
      categories: ["c5"],
      promo: 0
    },
    {
      id: "P29",
      title: "Arts & IPA 12x473ml",
      description: "Golden and very hazy, with bold hop aromas of lime, tangerine, mango and papaya",
      price: 4450,
      discontinued: false,
      categories: ["c2"],
      promo: 2
    },
    {
      id: "P30",
      title: "Emberly German Ale 12x473ml",
      description: "Originally created in the dungeons of Germany.",
      price: 4750,
      discontinued: false,
      categories: ["c4"],
      promo: 3
    },
  
];
