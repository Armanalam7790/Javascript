const cars = [
  {
    carName: "Tata Nexon",
    carType: "SUV",
    carColor: ["Blue", "White", "Red", "Black"],
    parentCompany: "Tata Motors",
    engine: "1.2L Turbo Petrol / 1.5L Diesel",
    price: "₹8L - ₹15L",
    pros: [
      "5-star safety rating",
      "Affordable SUV",
      "Good ground clearance",
      "Feature loaded",
      "Good resale value"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg",
    available: true
  },
  {
    carName: "Maruti Suzuki Swift",
    carType: "Hatchback",
    carColor: ["Red", "White", "Grey", "Blue"],
    parentCompany: "Maruti Suzuki",
    engine: "1.2L Petrol",
    price: "₹6L - ₹9L",
    pros: [
      "Fuel efficient",
      "Low maintenance",
      "Fun to drive",
      "Affordable",
      "Wide service network"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Hyundai Creta",
    carType: "SUV",
    carColor: ["White", "Black", "Silver", "Grey"],
    parentCompany: "Hyundai",
    engine: "1.5L Petrol / Diesel",
    price: "₹11L - ₹20L",
    pros: [
      "Premium interior",
      "Smooth engine",
      "Comfortable ride",
      "Loaded features",
      "Strong resale value"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Mahindra Thar",
    carType: "Off-road SUV",
    carColor: ["Black", "Red", "Silver", "Green"],
    parentCompany: "Mahindra",
    engine: "2.0L Petrol / 2.2L Diesel",
    price: "₹11L - ₹17L",
    pros: [
      "Best off-roader",
      "4x4 capability",
      "Strong road presence",
      "Durable build",
      "Adventure ready"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Honda City",
    carType: "Sedan",
    carColor: ["Silver", "White", "Red", "Brown"],
    parentCompany: "Honda",
    engine: "1.5L Petrol",
    price: "₹11L - ₹16L",
    pros: [
      "Spacious cabin",
      "Refined engine",
      "Comfortable ride",
      "Reliable",
      "Good mileage"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Toyota Fortuner",
    carType: "Full-size SUV",
    carColor: ["White", "Black", "Grey", "Silver"],
    parentCompany: "Toyota",
    engine: "2.7L Petrol / 2.8L Diesel",
    price: "₹33L - ₹51L",
    pros: [
      "Powerful engine",
      "Premium SUV",
      "High resale value",
      "Strong build quality",
      "Reliable"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Kia Seltos",
    carType: "SUV",
    carColor: ["Blue", "White", "Black", "Red"],
    parentCompany: "Kia",
    engine: "1.5L Petrol / Diesel",
    price: "₹10L - ₹20L",
    pros: [
      "Stylish design",
      "Feature rich",
      "Smooth drive",
      "Multiple engine options",
      "Comfortable"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141119/seltos-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "MG Hector",
    carType: "SUV",
    carColor: ["Black", "White", "Silver", "Red"],
    parentCompany: "MG Motor",
    engine: "1.5L Turbo Petrol / 2.0L Diesel",
    price: "₹14L - ₹22L",
    pros: [
      "Large touchscreen",
      "Spacious interior",
      "Premium feel",
      "Good safety features",
      "Comfortable"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141113/hector-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Tata Punch",
    carType: "Micro SUV",
    carColor: ["Orange", "White", "Grey", "Blue"],
    parentCompany: "Tata Motors",
    engine: "1.2L Petrol",
    price: "₹6L - ₹10L",
    pros: [
      "Affordable SUV",
      "High ground clearance",
      "Good safety",
      "Compact size",
      "Fuel efficient"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141865/punch-exterior-right-front-three-quarter.jpeg",
    available: true
  },
  {
    carName: "Hyundai i20",
    carType: "Premium Hatchback",
    carColor: ["Red", "White", "Black", "Blue"],
    parentCompany: "Hyundai",
    engine: "1.2L Petrol / 1.0L Turbo",
    price: "₹7L - ₹12L",
    pros: [
      "Premium interior",
      "Smooth performance",
      "Feature packed",
      "Stylish design",
      "Comfortable ride"
    ],
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40525/i20-exterior-right-front-three-quarter.jpeg",
    available: true
  }
];
cars.forEach((elem)=>{
console.log(elem.carName);
 
   

})

