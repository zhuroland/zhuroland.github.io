// ========================
// Level definitions
// ========================
interface Level {
  map: string[];
}

// W = Wall
// B = Box
// T = Target
// G = Box on Target
// P = Player

export const levels: Level[] = [
  {
    map: [
      "  WWW   ",
      "  WTW   ",
      "  W WWWW",
      "WWWB BTW",
      "WT BPWWW",
      "WWWWBW  ",
      "   WTW  ",
      "   WWW  ",
    ],
  },
  {
    map: [
      "WWWWWWWWWW",
      "W        W",
      "W  BTTB  W",
      "W   WW   W",
      "WWW WP WWW",
      "W   WW   W",
      "W  B  B  W",
      "W  T  T  W",
      "W        W",
      "WWWWWWWWWW",
    ],
  },
  {
    map: [
      "     WWWW   ",
      " WWWWW  WWWW",
      " W         W",
      " W WWW WW  W",
      "WW W T  W WW",
      "W  B BWB  W ",
      "W    WP   W ",
      "WW  BWB B W ",
      " W W  T W W ",
      " W WW WWW W ",
      " WWWWWWWWWW ",
    ],
  },
  {
    map: [
      "  WWWWW ",
      "WWW   W ",
      "WTPB  W ",
      "WWW BTW ",
      "WTWWB W ",
      "W W T WW",
      "WB GBBTW",
      "W   T  W",
      "WWWWWWWW",
    ],
  },
  {
    map: [
      "WWWWWW ",
      "W   WW ",
      "W   WWW",
      "W B B W",
      "W GPG W",
      "W W WTW",
      "W T   W",
      "WWWWWWW",
    ],
  },
  {
    map: [
      "WWWWWW ",
      "WT TTW ",
      "W  BTW ",
      "WW  BWW",
      " W  B W",
      " WBWW W",
      " W P  W",
      " WWWWWW",
    ],
  },
  {
    map: [
      "    WWWWW      ",
      "    W   W      ",
      "    W B W      ",
      "    W   W      ",
      "WWWWWW WW      ",
      "W   WW  W      ",
      "W B    TWWWWWWW",
      "W   WWT TWW   W",
      "WWWWWWWT    B W",
      "     WW  WW  PW",
      "      WW WWWWWW",
      "      W   W    ",
      "      W B W    ",
      "      W   W    ",
      "      WWWWW    ",
    ],
  },
];

levels.push({
  map: [
    "WWWWWWWWWWWWWWWWWWWW",
    "W W    W           W",
    "W WWGW W WWWWWWWWW W",
    "W W  W WWW     G W W",
    "W WB W     WWW WWW W",
    "W WWWW WWWWW W W   W",
    "W      W     W   WWW",
    "W WW WWW WWW W W W W",
    "W W  W   WTB W W W W",
    "W WWWW W WWW WWW W W",
    "W      W   W W   W W",
    "WWWWWW WWWWWWW WWW W",
    "W    W W    W  W   W",
    "WWWW W WWWW W WW W W",
    "W W    W    W W  W W",
    "WGWWWWWW WWWW WWWW W",
    "W        W     G W W",
    "WWWWWW WWWW WWWWWW W",
    "WP                 W",
    "WWWWWWWWWWWWWWWWWWWW",
  ],
});
