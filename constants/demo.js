const categories = [
  {
    id: 1,
    name: "Ground Floor",
    icon: require("../assets/icons/floor.png"),
  },
  {
    id: 2,
    name: "First Floor",
    icon: require("../assets/icons/staff.png"),
  },
  {
    id: 3,
    name: "Second Floor",
    icon: require("../assets/icons/techy.png"),
  },
  {
    id: 4,
    name: "Third Floor",
    icon: require("../assets/icons/device.png"),
  },
  {
    id: 5,
    name: "Fourth Floor",
    icon: require("../assets/icons/library.png"),
  },
];

// Ground floor : Gymnasium, Auditorium, Canteen, Sports Dept
// First Floor: Admin Office, AV Room, Staff Room, Principal's Office
// Second Floor: Boys Common Room, Women Development Cell, 201 Classroom
// Third Floor: IT Lab, Girls Common Room
// Fourth Lab: Library, IT Lab

const gymnasium = {
  id: 1,
  name: "Gymansium",
  description: "Workout your body here",
  categories: [1],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const auditorium = {
  id: 2,
  name: "Auditorium",
  description: "Reserved for Events",
  categories: [1],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const canteen = {
  id: 3,
  name: "Canteen",
  description: "Delicious Fast Foods here",
  categories: [1],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const sportsDept = {
  id: 4,
  name: "Sports Dept",
  description: "Enroll in sports today",
  categories: [1],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const adminOffice = {
  id: 5,
  name: "Admin Office",
  description: "Official processes",
  categories: [2, 1],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const avRoom = {
  id: 6,
  name: "AV Room",
  description: "Projector Room",
  categories: [1, 2, 3],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const staffRoom = {
  id: 7,
  name: "Staff Room",
  description: "Reserved for Events",
  categories: [2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const principalRoom = {
  id: 8,
  name: "Principal's Room",
  description: "Head of College",
  categories: [2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const boysCommonRoom = {
  id: 9,
  name: "Boys Common Room",
  description: "Only Boys Space",
  categories: [3],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const womenDevCell = {
  id: 10,
  name: "Women Development Cell",
  description: "Reserved for Events",
  categories: [3],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const classroom201 = {
  id: 11,
  name: "201 Classroom",
  description: "Reserved for Events",
  categories: [3],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const itLab = {
  id: 12,
  name: "IT Lab",
  description: "Reserved for Events",
  categories: [3, 4, 5],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const girlsCommonRoom = {
  id: 13,
  name: "Girls Common Room",
  description: "Reserved for Events",
  categories: [4, 5],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const library = {
  id: 14,
  name: "Library",
  description: "Reserved for Events",
  categories: [5],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};
