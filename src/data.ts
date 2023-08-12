export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "list",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
    ],
  },
  {
    id: 4,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Setting",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    amount: "$500",
    username: "soukphasone",
    email: "Bo@gmail.com",
  },
  {
    id: 2,
    img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    amount: "$400",
    username: "Nalongsit",
    email: "Bo@gmail.com",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    amount: "$700",
    username: "Xokthavy",
    email: "Bo@gmail.com",
  },
  {
    id: 4,
    img: "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
    amount: "$200",
    username: "Catty",
    email: "Bo@gmail.com",
  },
  {
    id: 5,
    img: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
    amount: "$900",
    username: "Jonh",
    email: "Bo@gmail.com",
  },
];

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  dataKey: "products",
  number: "238",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 500 },
    { name: "Tue", products: 600 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 450 },
    { name: "Sat", products: 500 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  dataKey: "revenue",
  number: "$56.432",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 500 },
    { name: "Tue", revenue: 600 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 450 },
    { name: "Sat", revenue: 500 },
  ],
};
export const chartConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  dataKey: "ratio",
  number: "2.6",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 500 },
    { name: "Tue", ratio: 600 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 450 },
    { name: "Sat", ratio: 500 },
  ],
};
export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total User",
  dataKey: "users",
  number: "11.238",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 500 },
    { name: "Tue", users: 600 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 450 },
    { name: "Sat", users: 500 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: "4000",
    },
    {
      name: "Mon",
      profit: "3000",
    },
    {
      name: "Tue",
      profit: "4000",
    },
    {
      name: "Wed",
      profit: "600",
    },
    {
      name: "Thu",
      profit: "500",
    },
    {
      name: "Fri",
      profit: "4000",
    },
    {
      name: "Sat",
      profit: "2000",
    },
  ],
};
export const baChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: "4000",
    },
    {
      name: "Mon",
      visit: "3000",
    },
    {
      name: "Tue",
      visit: "4000",
    },
    {
      name: "Wed",
      visit: "600",
    },
    {
      name: "Thu",
      visit: "500",
    },
    {
      name: "Fri",
      visit: "4000",
    },
    {
      name: "Sat",
      visit: "2000",
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "user1.jpg",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    createdAt: "2023-08-11T10:00:00Z",
    verified: true,
  },
  {
    id: 2,
    img: "user2.jpg",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    createdAt: "2023-08-10T15:30:00Z",
    verified: true,
  },
  {
    id: 3,
    img: "user3.jpg",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-123-4567",
    createdAt: "2023-08-09T09:15:00Z",
    verified: false,
  },
  {
    id: 4,
    img: "user4.jpg",
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
    phone: "789-456-1230",
    createdAt: "2023-08-08T18:45:00Z",
    verified: true,
  },
  {
    id: 5,
    img: "user5.jpg",
    firstName: "William",
    lastName: "Taylor",
    email: "william.taylor@example.com",
    phone: "222-333-4444",
    createdAt: "2023-08-07T12:20:00Z",
    verified: false,
  },
  {
    id: 6,
    img: "user6.jpg",
    firstName: "Olivia",
    lastName: "Wilson",
    email: "olivia.wilson@example.com",
    phone: "777-888-9999",
    createdAt: "2023-08-06T14:10:00Z",
    verified: true,
  },
  {
    id: 7,
    img: "user7.jpg",
    firstName: "James",
    lastName: "Miller",
    email: "james.miller@example.com",
    phone: "444-555-6666",
    createdAt: "2023-08-05T17:00:00Z",
    verified: false,
  },
  {
    id: 8,
    img: "user8.jpg",
    firstName: "Sophia",
    lastName: "Davis",
    email: "sophia.davis@example.com",
    phone: "666-777-8888",
    createdAt: "2023-08-04T09:30:00Z",
    verified: true,
  },
  {
    id: 9,
    img: "user9.jpg",
    firstName: "Liam",
    lastName: "Moore",
    email: "liam.moore@example.com",
    phone: "999-000-1111",
    createdAt: "2023-08-03T13:45:00Z",
    verified: false,
  },
  {
    id: 10,
    img: "user10.jpg",
    firstName: "Ava",
    lastName: "Johnson",
    email: "ava.johnson@example.com",
    phone: "123-987-6543",
    createdAt: "2023-08-02T11:20:00Z",
    verified: true,
  },
];

export const products = [
  {
    id: 1,
    img: "product1.jpg",
    title: "Widget X",
    color: "Blue",
    producer: "TechCo",
    price: 19.99,
    createdAt: "2023-08-11",
    inStock: true,
  },
  {
    id: 2,
    img: "product2.jpg",
    title: "Gizmo Y",
    color: "Red",
    producer: "Innovate Inc.",
    price: 29.99,
    createdAt: "2023-08-10",
    inStock: false,
  },
  {
    id: 3,
    img: "product3.jpg",
    title: "Thingamajig Z",
    color: "Green",
    producer: "MegaCorp",
    price: 14.99,
    createdAt: "2023-08-09",
    inStock: true,
  },
  {
    id: 4,
    img: "product4.jpg",
    title: "Doodad A",
    color: "Black",
    producer: "Inventron",
    price: 39.99,
    createdAt: "2023-08-08",
    inStock: true,
  },
  {
    id: 5,
    img: "product5.jpg",
    title: "Whatchamacallit B",
    color: "Silver",
    producer: "NexTech",
    price: 24.99,
    createdAt: "2023-08-07",
    inStock: false,
  },
  {
    id: 6,
    img: "product6.jpg",
    title: "Doohickey C",
    color: "Yellow",
    producer: "WidgetMakers",
    price: 9.99,
    createdAt: "2023-08-06",
    inStock: true,
  },
  {
    id: 7,
    img: "product7.jpg",
    title: "Thingummy D",
    color: "Purple",
    producer: "MegaWidgets",
    price: 49.99,
    createdAt: "2023-08-05",
    inStock: true,
  },
  {
    id: 8,
    img: "product8.jpg",
    title: "Contraption E",
    color: "White",
    producer: "Innovative Designs",
    price: 79.99,
    createdAt: "2023-08-04",
    inStock: false,
  },
  {
    id: 9,
    img: "product9.jpg",
    title: "Apparatus F",
    color: "Gold",
    producer: "TechGenius",
    price: 59.99,
    createdAt: "2023-08-03",
    inStock: true,
  },
  {
    id: 10,
    img: "product10.jpg",
    title: "Gadget G",
    color: "Orange",
    producer: "GizmoTech",
    price: 34.99,
    createdAt: "2023-08-02",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe ",
  img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  info: {
    username: "jonhdoe99",
    fullname: "John Doe",
    email: "jonh@gmail.com",
    phone: "123 234 456",
    status: "verified",
  },
  chart: {
    dataKey: [
      {
        name: "visits",
        color: "#8884d8",
      },
      {
        name: "clicks",
        color: "#82ca9d",
      },
    ],
    data: [
      { name: "Sun", visits: 1000, clicks: 3550 },
      { name: "Mon", visits: 7568, clicks: 2250 },
      { name: "Tue", visits: 1200, clicks: 4010 },
      { name: "Wed", visits: 8500, clicks: 2800 },
      { name: "Thu", visits: 6000, clicks: 1980 },
      { name: "Fri", visits: 2000, clicks: 9700 },
      { name: "Sat", visits: 1400, clicks: 5000 },
    ],
  },
  activities: [
    { text: "Morning Jog", time: "6:00 AM" },
    { text: "Breakfast", time: "7:30 AM" },
    { text: "Work Meeting", time: "9:00 AM" },
    { text: "Lunch", time: "12:30 PM" },
    { text: "Gym Session", time: "3:00 PM" },
    { text: "Read a Book", time: "4:30 PM" },
    { text: "Read a Book", time: "4:30 PM" },
  
  ],
};

export const singleProduct = {
  id: 1,
  title: "Play station",
  img: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  info: {
    productId: "65789ds",
    color: "white",
    price: "$567",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKey: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 1088,
        orders: 300,
      },
      {
        name: "Mon",
        visits: 9784,
        orders: 763,
      },
      {
        name: "Tue",
        visits: 2342,
        orders: 882,
      },
      {
        name: "Wed",
        visits: 20,
        orders: 8,
      },
      {
        name: "Thu",
        visits: 5097,
        orders: 9981,
      },
      {
        name: "Fri",
        visits: 5000,
        orders: 3000,
      },
      {
        name: "Sat",
        visits: 800,
        orders: 2886,
      },
    ],
  },
  activities: [
    { text: "Morning Jog", time: "6:00 AM" },
    { text: "Breakfast", time: "7:30 AM" },
    { text: "Work Meeting", time: "9:00 AM" },
    { text: "Lunch", time: "12:30 PM" },
    { text: "Gym Session", time: "3:00 PM" },
    { text: "Read a Book", time: "4:30 PM" },
    { text: "Cook Dinner", time: "6:00 PM" },
  ],
};
