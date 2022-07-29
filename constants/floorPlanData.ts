import Room from "../models/Room";
import Wall from "../models/Wall";

export const buildingData = [
  {
    points: [
      [0, 0],
      [990, 0],
    ],
  },
  {
    points: [
      [0, 0],
      [0, 100],
    ],
  },
  {
    points: [
      [0, 100],
      [270, 100],
    ],
  },
  {
    points: [
      [270, 100],
      [270, 260],
    ],
  },
  {
    points: [
      [270, 260],
      [460, 260],
    ],
  },
  {
    points: [
      [460, 470],
      [460, 780],
    ],
  },
  {
    points: [
      [460, 100],
      [460, 400],
    ],
  },
  {
    points: [
      [370, 260],
      [370, 520],
    ],
  },
  {
    points: [
      [370, 520],
      [460, 520],
    ],
  },
  {
    points: [
      [460, 360],
      [490, 360],
    ],
  },
  {
    points: [
      [550, 360],
      [910, 360],
    ],
  },
  {
    points: [
      [970, 360],
      [990, 360],
    ],
  },
  {
    points: [
      [990, 0],
      [990, 780],
    ],
  },
  {
    points: [
      [460, 520],
      [490, 520],
    ],
  },
  {
    points: [
      [550, 520],
      [830, 520],
    ],
  },
  {
    points: [
      [890, 360],
      [890, 520],
    ],
  },
  {
    points: [
      [870, 520],
      [898, 520],
    ],
  },
  {
    points: [
      [650, 520],
      [650, 780],
    ],
  },
  {
    points: [
      [460, 780],
      [998, 780],
    ],
  },
] as Wall[];

export const roomsData = [
  {
    properties: {
      id: "Hall 1",
      name: "Hall 1",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [0, 0],
          [0, 100],
          [270, 0],
          [270, 100],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Kitchen",
      name: "Kitchen",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [270, 0],
          [270, 260],
          [460, 0],
          [460, 260],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Living",
      name: "Living",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [460, 0],
          [460, 360],
          [990, 0],
          [990, 360],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Empty 1",
      name: "Empty 1",
      isLightOn: false,
      empty: true,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [370, 260],
          [370, 330],
          [460, 260],
          [460, 330],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Bath 1",
      name: "Bath 1",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [370, 330],
          [370, 520],
          [460, 330],
          [460, 520],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Hall 2",
      name: "Hall 2",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [460, 360],
          [460, 520],
          [560, 360],
          [560, 520],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Empty 2",
      name: "Empty 2",
      isLightOn: false,
      empty: true,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [560, 360],
          [560, 520],
          [650, 360],
          [650, 520],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Empty 3",
      name: "Empty 3",
      isLightOn: false,
      empty: true,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [650, 360],
          [650, 380],
          [890, 360],
          [890, 380],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Bath 2",
      name: "Bath 2",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [650, 380],
          [650, 520],
          [890, 380],
          [890, 520],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Office",
      name: "Office",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [460, 520],
          [460, 780],
          [650, 520],
          [650, 780],
        ],
      ],
    },
  },
  {
    properties: {
      id: "Room",
      name: "Room",
      isLightOn: false,
      empty: false,
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [890, 360],
          [890, 520],
          [990, 360],
          [990, 520],
        ],
        [
          [650, 520],
          [650, 780],
          [990, 520],
          [990, 780],
        ],
      ],
    },
  },
] as Room[];
