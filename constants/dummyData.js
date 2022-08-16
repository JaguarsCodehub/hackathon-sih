const myProfile = {
  name: "ByProgrammers",
  profile_image: require("../assets/images/profile.jpg"),
  address: "No. 88, Jln Padungan, Kuching",
};

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

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description: "Indian Vegetable Biryani",
  categories: [],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const gymnasium = {
  id: 5,
  name: "Gymansium",
  description: "Workout your body here",
  categories: [1],
  price: 10,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/gym.png"),
};

const sportsDept = {
  id: 6,
  name: "Sports Dept",
  description: "Grilled vegetables sandwich",
  categories: [1],
  price: 56,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/sports.png"),
};

const auditorium = {
  id: 7,
  name: "Auditorium",
  description: "Reserved for Events",
  categories: [1],
  price: 50,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/audi.png"),
};

const canteen = {
  id: 8,
  name: "Canteen",
  description: "Delicious Fast Foods here",
  categories: [1],
  price: 110,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/canteen.png"),
};

const adminOffice = {
  id: 9,
  name: "Admin Office",
  description: "Official processes",
  categories: [2],
  price: 10,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/admin.png"),
};

const avRoom = {
  id: 10,
  name: "AV Room",
  description: "Projector Room",
  categories: [2],
  price: 43,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/avroom.png"),
};

const staffRoom = {
  id: 11,
  name: "Staff Room",
  description: "Reserved for Events",
  categories: [2],
  price: 26,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/staff.jpg"),
};

const principalRoom = {
  id: 12,
  name: "Principal's Room",
  description: "Head of College",
  categories: [2],
  price: 12,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/principal.png"),
};

const boysCommonRoom = {
  id: 13,
  name: "Boys Common Room",
  description: "Only Boys Space",
  categories: [3],
  price: 52,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/carrom.png"),
};

const womenDevCell = {
  id: 14,
  name: "Women Dev Cell",
  description: "Reserved for Events",
  categories: [3],
  price: 56,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/women.png"),
};

const classroom201 = {
  id: 15,
  name: "201 Classroom",
  description: "Reserved for Events",
  categories: [3],
  price: 18,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/classroom.png"),
};

const itLab = {
  id: 16,
  name: "IT Lab",
  description: "Reserved for Events",
  categories: [4, 5],
  price: 16,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/it.png"),
};

const girlsCommonRoom = {
  id: 17,
  name: "Girls Common Room",
  description: "Reserved for Events",
  categories: [4],
  price: 60,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/girls.png"),
};

const library = {
  id: 18,
  name: "Library",
  description: "Reserved for Events",
  categories: [5],
  price: 33,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/library.png"),
};

// Ground floor : Gymnasium, Auditorium, Canteen, Sports Dept
// First Floor: Admin Office, AV Room, Staff Room, Principal's Office
// Second Floor: Boys Common Room, Women Development Cell, 201 Classroom
// Third Floor: IT Lab, Girls Common Room
// Fourth Lab: Library, IT Lab

const menu = [
  {
    id: 1,
    name: "Entry Gate",
    list: [gymnasium, auditorium, canteen],
  },
  {
    id: 2,
    name: "Popular",
    list: [
      hamburger,
      hotTacos,
      wrapSandwich,
      sportsDept,
      gymnasium,
      auditorium,
      canteen,
      adminOffice,
      avRoom,
      staffRoom,
      principalRoom,
      boysCommonRoom,
      womenDevCell,
      classroom201,
      itLab,
      girlsCommonRoom,
      library,
    ],
  },
  {
    id: 3,
    name: "Workout",
    list: [gymnasium],
  },
  {
    id: 4,
    name: "Events",
    list: [auditorium],
  },
  {
    id: 5,
    name: "Recommended",
    list: [canteen, library, itLab, principalRoom, boysCommonRoom],
  },
];

export default {
  myProfile,
  categories,
  menu,
};
