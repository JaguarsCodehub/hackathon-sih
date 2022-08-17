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
  name: "College Gym",
  description: "Workout your body here",
  categories: [1],
  price: 10,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/gym.png"),
  track_order_status: [
    {
      id: 1,
      title: "Enter from the Gate",
      sub_title: "Walk 10 steps straight ahead",
    },
    {
      id: 2,
      title: "Turn towards your right",
      sub_title: "Walk straight ahead",
    },
    {
      id: 3,
      title: "Turn to your right",
      sub_title: "Open the door and enter inside",
    },
    {
      id: 4,
      title: "Rifle Shooting on your Left",
      sub_title: "You have stairs from the entry gate",
    },
  ],
};

const sportsDept = {
  id: 6,
  name: "Sports Department",
  description: "Grilled vegetables sandwich",
  categories: [1],
  price: 56,
  calories: 78,
  isFavourite: true,
  image: require("../assets/dummyData/sports.png"),
  track_order_status: [
    {
      id: 1,
      title: "Enter from the Gate",
      sub_title: "Walk 20 steps straight ahead",
    },
    {
      id: 2,
      title: "Turn towards your left",
      sub_title: "Walk 13 steps straight ahead",
    },
    {
      id: 3,
      title: "You have reached Sports Department",
      sub_title: "Knock the door and enter inside",
    },
    {
      id: 4,
      title: "Canteen is 40 steps straight",
      sub_title: "You have stairs from the entry gate",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Enter from the Gate",
      sub_title: "Show your ID Card",
    },
    {
      id: 2,
      title: "Walk straight",
      sub_title: "Walk 70 steps straight ahead",
    },
    {
      id: 3,
      title: "Check if the Auditorium is open",
      sub_title: "Enter if you have the permission to do so.",
    },
    {
      id: 4,
      title: "Gents and Ladies washroom",
      sub_title: "is on your left",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Enter from the door",
      sub_title: "Show your ID Card",
    },
    {
      id: 2,
      title: "Walk straight",
      sub_title: "for 40 steps ahead",
    },
    {
      id: 3,
      title: "Turn Left and",
      sub_title: "walk 50 steps straight ahead.",
    },
    {
      id: 4,
      title: "Turn Right and walk",
      sub_title: "10 steps ahead towards the counter",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the first floor",
    },
    {
      id: 2,
      title: "Walk 5 steps",
      sub_title: " straight ahead",
    },
    {
      id: 3,
      title: "Show your Id Card ",
      sub_title: "at the counter",
    },
    {
      id: 4,
      title: "On your right is the",
      sub_title: "staircase towards the second floor",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs to",
      sub_title: "the First Floor",
    },
    {
      id: 2,
      title: "Walk towards your left",
      sub_title: "10 steps ahead",
    },
    {
      id: 3,
      title: "Turn Right and Enter the Room",
      sub_title: "10 steps ahead",
    },
    {
      id: 4,
      title: "Ask for permission",
      sub_title: "to enter the AV Room",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the First Floor",
    },
    {
      id: 2,
      title: "Walk towards your left",
      sub_title: "30 steps ahead",
    },
    {
      id: 3,
      title: "Turn right and enter",
      sub_title: "the room with permission",
    },
    {
      id: 4,
      title: "Lift for staff members",
      sub_title: "is on the Left of AV Room",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the First Floor",
    },
    {
      id: 2,
      title: "Walk towards",
      sub_title: " your left 5 steps ahead",
    },
    {
      id: 3,
      title: "Do not Enter if you don't",
      sub_title: "have the permission from the co-ordinator",
    },
    {
      id: 4,
      title: "Lift for staff members",
      sub_title: "is 30 steps ahead then left",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the Second Floor",
    },
    {
      id: 2,
      title: "Walk straight 20 steps",
      sub_title: "ahead in forward direction",
    },
    {
      id: 3,
      title: "You can play Carrom, Table Tennis",
      sub_title: "and Chess in common room",
    },
    {
      id: 4,
      title: "There are 4 rooms on your Left",
      sub_title: "Room No : 203, 204, 205, 206",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the Second Floor",
    },
    {
      id: 2,
      title: "Walk straight 10 steps",
      sub_title: "ahead in forward direction",
    },
    {
      id: 3,
      title: "Turn Right and walk",
      sub_title: "5 steps to Women Development Cell",
    },
    {
      id: 4,
      title: "This room stays closed",
      sub_title: "from a long period of time",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the Second Floor",
    },
    {
      id: 2,
      title: "Turn towards your left",
      sub_title: "and walk 5 steps",
    },
    {
      id: 3,
      title: "Turn Left again",
      sub_title: "and walk 20 steps",
    },
    {
      id: 4,
      title: "From the classroom door",
      sub_title: "washroom is 10 steps ahead.",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the Third Floor",
    },
    {
      id: 2,
      title: "Turn towards your left",
      sub_title: "and walk 5 steps",
    },
    {
      id: 3,
      title: "Turn Left again",
      sub_title: "and walk 20 steps",
    },
    {
      id: 4,
      title: "From the Lab door",
      sub_title: "Technician's Office is 5 steps away.",
    },
    {
      id: 5,
      title: "There are 6 rooms on your Left",
      sub_title: "Room No: 302, 303, 304, 305, 306, 307.",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the Third Floor",
    },
    {
      id: 2,
      title: "Walk in forward direction",
      sub_title: "20 steps ahead",
    },
    {
      id: 3,
      title: "You have reached",
      sub_title: "Girls Common Room",
    },
    {
      id: 4,
      title: "There are 6 rooms on your Left",
      sub_title: "Room No: 302, 303, 304, 305, 306, 307.",
    },
  ],
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
  track_order_status: [
    {
      id: 1,
      title: "Climb 20 stairs",
      sub_title: "to the Fourth Floor",
    },
    {
      id: 2,
      title: "Turn Left and walk",
      sub_title: "20 steps ahead",
    },
    {
      id: 3,
      title: "Turn Right",
      sub_title: "and walk 5 steps ahead",
    },
    {
      id: 4,
      title: "Scan your ID Card on the scanner",
      sub_title: "Walk 10 steps ahead and turn Right.",
    },
  ],
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
