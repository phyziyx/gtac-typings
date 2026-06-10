/** src: https://public.sannybuilder.com/GTA4/blips/ */
declare enum eBlipSprite {
  /** BLIP_0 */
  Destination = 0,
  /** BLIP_1 */
  Destination2 = 1,
  /** BLIP_2 */
  Destination3 = 2,
  /** BLIP_3 */
  Objective = 3,
  /** BLIP_4 */
  Objective2 = 4,
  /** BLIP_5 */
  Objective3 = 5,
  /** BLIP_6 */
  Player = 6,
  /** BLIP_7 */
  North = 7,
  /** BLIP_8 */
  Waypoint = 8,
  /** BLIP_9. Blank in-game, does nothing. */
  Pistol = 9,
  /** BLIP_10. Blank in-game, does nothing. */
  Shotgun = 10,
  /** BLIP_11. Blank in-game, does nothing. */
  SMG = 11,
  /** BLIP_12. Blank in-game, does nothing. */
  Rifle = 12,
  /** BLIP_13. Blank in-game, does nothing. */
  Rocket = 13,
  /** BLIP_14. Blank in-game, does nothing. */
  Grenade = 14,
  /** BLIP_15. Blank in-game, does nothing. */
  Molotov = 15,
  /** BLIP_16. Blank in-game, does nothing. */
  Sniper = 16,
  /** BLIP_17. Blank in-game, does nothing. */
  BaseballBat = 17,
  /** BLIP_18. Blank in-game, does nothing. */
  Knife = 18,
  /** BLIP_19 */
  Health = 19,
  /** BLIP_20 */
  Armor = 20,
  /** BLIP_21 */
  BurgerShot = 21,
  /** BLIP_22 */
  CluckinBell = 22,
  /** BLIP_23 */
  Vlad = 23,
  /** BLIP_24 */
  Internet = 24,
  /** BLIP_25 */
  Manny = 25,
  /** BLIP_26 */
  LittleJacob = 26,
  /** BLIP_27 */
  Roman = 27,
  /** BLIP_28 */
  Faustin = 28,
  /** BLIP_29 */
  Safehouse = 29,
  /** BLIP_30 */
  TaxiRank = 30,
  /** BLIP_31 */
  Bernie = 31,
  /** BLIP_32 */
  Brucie = 32,
  /** BLIP_33 */
  UnknownContact = 33,
  /** BLIP_34 */
  Dwayne = 34,
  /** BLIP_35 */
  Elizabeta = 35,
  /** BLIP_36 */
  Gambetti = 36,
  /** BLIP_37 */
  JimmyPegorino = 37,
  /** BLIP_38 */
  Derrick = 38,
  /** BLIP_39 */
  Francis = 39,
  /** BLIP_40 */
  Gerry = 40,
  /** BLIP_41 */
  Katie = 41,
  /** BLIP_42 */
  Packie = 42,
  /** BLIP_43 */
  PhilBell = 43,
  /** BLIP_44 */
  PlayboyX = 44,
  /** BLIP_45 */
  RayBoccino = 45,
  /** BLIP_46 */
  EightBall = 46,
  /** BLIP_47 */
  Bar = 47,
  /** BLIP_48 */
  BoatTour = 48,
  /** BLIP_49 */
  Bowling = 49,
  /** BLIP_50 */
  ClothesShop = 50,
  /** BLIP_51 */
  Club = 51,
  /** BLIP_52 */
  Darts = 52,
  /** BLIP_53 */
  Dwayne2 = 53,
  /** BLIP_54 */
  Date = 54,
  /** BLIP_55 */
  PlayboyX2 = 55,
  /** BLIP_56 */
  Helitour = 56,
  /** BLIP_57 */
  Restaurant = 57,
  /** BLIP_58 */
  Station = 58,
  /** BLIP_59 */
  Weapons = 59,
  /** BLIP_60 */
  PoliceStation = 60,
  /** BLIP_61 */
  FireStation = 61,
  /** BLIP_62 */
  Hospital = 62,
  /** BLIP_63 */
  Male = 63,
  /** BLIP_64 */
  Female = 64,
  /** BLIP_65 */
  FinishLine = 65,
  /** BLIP_66 */
  StripClub = 66,
  /** BLIP_67. Blank in-game, does nothing. */
  ConsoleGame = 67,
  /** BLIP_68. Blank in-game, does nothing. */
  CopCar = 68,
  /** BLIP_69 */
  Dimitri = 69,
  /** BLIP_70 */
  ComedyClub = 70,
  /** BLIP_71 */
  CabaretClub = 71,
  /** BLIP_72 */
  Ransom = 72,
  /** BLIP_73. Blank in-game, does nothing. */
  CopChopper = 73,
  /** BLIP_74 */
  Michelle = 74,
  /** BLIP_75 */
  PayNSpray = 75,
  /** BLIP_76 */
  Assassin = 76,
  /** BLIP_77 */
  Revenge = 77,
  /** BLIP_78 */
  Deal = 78,
  /** BLIP_79 */
  Garage = 79,
  /** BLIP_80 */
  Lawyer = 80,
  /** BLIP_81 */
  Trophy = 81,
  /** BLIP_82 */
  MultiplayerTutorial = 82,
  /** BLIP_83 */
  Station3 = 83,
  /** BLIP_84 */
  Station8 = 84,
  /** BLIP_85 */
  StationA = 85,
  /** BLIP_86 */
  StationB = 86,
  /** BLIP_87 */
  StationC = 87,
  /** BLIP_88 */
  StationE = 88,
  /** BLIP_89 */
  StationJ = 89,
  /** BLIP_90 */
  StationK = 90,
  /** BLIP_91 */
  CarWash = 91,
  /** BLIP_92 */
  UnitedLibertyPaper = 92,
  /** BLIP_93. Blank in-game, does nothing. */
  Boss = 93,
  /** BLIP_94. Blank in-game, does nothing. */
  Base = 94,
}

/** src: https://gtamods.com/wiki/CHANGE_BLIP_COLOUR */
declare enum eBlipColour {
  White,
  /** Changes blip text to "Friend" */
  Blue,
  Black,
  Magenta,
  Orange,
  Violet,
  BrightGreen,
  BrightRed,
  DarkPink,
  DarkOrange,
  Teal,
  Cyan,
  LightYellow,
  DarkGreen,
  Purple,
  LightPurple,
  LightOrange,
  Yellow,
}

/** src: https://gtamods.com/wiki/CHANGE_BLIP_DISPLAY */
declare enum eBlipDisplay {
  None,
  None2,
  RadarAndMap,
  MapOnly,
  RadarWorldAndMap,
  RadarOnly,
}

declare enum ePedBone {
  BONE_ROOT = 0,
  BONE_PELVIS = 0x1a1,
  BONE_SPINE = 0x4b2,
  BONE_SPINE1 = 0x4b3,
  BONE_SPINE2 = 0x36a0,
  BONE_SPINE3 = 0x36a1,
  BONE_NECK = 0x4b4,
  BONE_HEAD = 0x4b5,
  BONE_NECKROLL = 0x37a0,
  BONE_R_CLAVICLE = 0x4c7,
  BONE_R_UPPERARM = 0x4c8,
  BONE_R_FOREARM = 0x4c9,
  BONE_R_HAND = 0x4d0,
  BONE_R_FINGER0 = 0x35b0,
  BONE_R_FINGER01 = 0x35b1,
  BONE_R_FINGER02 = 0x35b2,
  BONE_R_FINGER1 = 0x35b3,
  BONE_R_FINGER11 = 0x35b4,
  BONE_R_FINGER12 = 0x35b5,
  BONE_R_FINGER2 = 0x35b6,
  BONE_R_FINGER21 = 0x35b7,
  BONE_R_FINGER22 = 0x35b8,
  BONE_R_FINGER3 = 0x35b9,
  BONE_R_FINGER31 = 0x35c0,
  BONE_R_FINGER32 = 0x35c1,
  BONE_R_FINGER4 = 0x35c2,
  BONE_R_FINGER41 = 0x35c3,
  BONE_R_FINGER42 = 0x35c4,
  BONE_R_FORETWIST = 0x39a1,
  BONE_R_FORETWIST1 = 0x39a2,
  BONE_R_UPPPERARMROLL = 0x39a0,
  BONE_R_ARMROLL = 0x3e01,
  BONE_L_CLAVICLE = 0x4c0,
  BONE_L_UPPERARM = 0x4c1,
  BONE_L_FOREARM = 0x4c2,
  BONE_L_HAND = 0x4c3,
  BONE_L_FINGER0 = 0x35d0,
  BONE_L_FINGER01 = 0x35d1,
  BONE_L_FINGER02 = 0x35d2,
  BONE_L_FINGER1 = 0x35d3,
  BONE_L_FINGER11 = 0x35d4,
  BONE_L_FINGER12 = 0x35d5,
  BONE_L_FINGER2 = 0x35d6,
  BONE_L_FINGER21 = 0x35d7,
  BONE_L_FINGER22 = 0x35d8,
  BONE_L_FINGER3 = 0x35d9,
  BONE_L_FINGER31 = 0x35e0,
  BONE_L_FINGER32 = 0x35e1,
  BONE_L_FINGER4 = 0x35e2,
  BONE_L_FINGER41 = 0x35e3,
  BONE_L_FINGER42 = 0x35e4,
  BONE_L_FORETWIST = 0x38a1,
  BONE_L_FORETWIST1 = 0x38a2,
  BONE_L_UPPPERARMROLL = 0x38a0,
  BONE_L_ARMROLL = 0x3df1,
  BONE_L_THIGH = 0x1a2,
  BONE_L_CALF = 0x1a3,
  BONE_L_FOOT = 0x1a4,
  BONE_L_TOE = 0x1a5,
  BONE_L_CALFROLL = 0x38b0,
  BONE_R_THIGH = 0x1a7,
  BONE_R_CALF = 0x1a8,
  BONE_R_FOOT = 0x1a9,
  BONE_R_TOE = 0x4b0,
  BONE_R_CALFROLL = 0x39b0,
  BONE_L_BROWAJNT = 0x78f7,
  BONE_L_BROWBJNT = 0x78f8,
  BONE_L_LIDJNT = 0x78f9,
  BONE_C_LOWLIDJNT = 0x78fa,
  BONE_L_CHEEKJNT = 0x78fb,
  BONE_L_EYEJNT = 0x78fc,
  BONE_L_CORNERAJNT = 0x7903,
  BONE_L_CORNERBJNT = 0x79f4,
  BONE_L_JAWAJNT = 0x7904,
  BONE_L_JAWBJNT = 0x7905,
  BONE_L_LIPUPAJNT = 0x7906,
  BONE_R_BROWAJNT = 0x7907,
  BONE_R_BROWBJNT = 0x7908,
  BONE_R_LIDJNT = 0x7909,
  BONE_R_CHEEKJNT = 0x790a,
  BONE_R_EYEJNT = 0x790b,
  BONE_R_CORNERAJNT = 0x790c,
  BONE_R_CORNERBJNT = 0x79f3,
  BONE_R_JAWAJNT = 0x7913,
  BONE_R_JAWBJNT = 0x7914,
  BONE_R_LIPUPAJNT = 0x7915,
  BONE_C_JAWAJNT = 0x7916,
  BONE_FB_C_BROW = 0x7f94,
  BONE_FB_C_JAW = 0x7f9b,
  BONE_FB_L_LIPLOWER = 0x7fa7,
  BONE_FB_R_LIPLOWER = 0x7fa6,
  BONE_FB_L_BROW = 0x7f9a,
  BONE_FB_L_CRN_MOUTH = 0x7fa5,
  BONE_FB_L_EYEBALL = 0x7f98,
  BONE_FB_L_EYELID = 0x7f99,
  BONE_FB_L_LIPUPPER = 0x7f9d,
  BONE_FB_R_BROW = 0x7f95,
  BONE_FB_R_CRN_MOUTH = 0x7fa4,
  BONE_FB_R_EYEBALL = 0x7f97,
  BONE_FB_R_EYELID = 0x7f96,
  BONE_FB_R_LIPUPPER = 0x7f9c,
  BONE_FB_L_BROWBJNT = 0x0a917,
  BONE_FB_L_BROWAJNT = 0x0a905,
  BONE_FB_C_FOREHEAD = 0x0a8f6,
  BONE_FB_L_EYEJNT = 0x0a8f7,
  BONE_FB_L_UPPCHEEKJNT = 0x0a8f8,
  BONE_FB_L_CORNERLIPJNT = 0x0a8f9,
  BONE_FB_L_LOCHEEKJNT = 0x0a8fa,
  BONE_FB_L_UPPLIPJNT = 0x0a8fb,
  BONE_FB_L_UPPLIDJNT = 0x0a8fc,
  BONE_FB_L_LOLIDJNT = 0x0a903,
  BONE_FB_R_BROWAJNT = 0x0a904,
  BONE_FB_R_EYEJNT = 0x0a916,
  BONE_FB_R_UPPLIDJNT = 0x0a906,
  BONE_FB_R_LOLIDJNT = 0x0a907,
  BONE_FB_R_BROWBJNT = 0x0a908,
  BONE_FB_R_UPPCHEEKJNT = 0x0a909,
  BONE_FB_R_UPPLIPJNT = 0x0a90a,
  BONE_FB_R_CORNERLIPJNT = 0x0a90b,
  BONE_FB_R_LOCHEEKJNT = 0x0a90c,
  BONE_FB_C_JAWJNT = 0x0a913,
  BONE_FB_R_LOLIPJNT = 0x0a914,
  BONE_FB_L_LOLIPJNT = 0x0a915,
  BONE_FB_C_TONGUE_A_JNT = 0x0a8f5,
  BONE_FB_C_TONGUE_B_JNT = 0x0a8f4,
  BONE_POINTFB_C_JAW = 0x0c944,
  BONE_POINTFB_R_LIPLOWER = 0x0c947,
  BONE_POINTFB_L_LIPLOWER = 0x0c948,
  BONE_POINTFB_L_LIPUPPER = 0x0c946,
  BONE_POINTFB_R_LIPUPPER = 0x0c945,
  BONE_EXTRA1 = 0x0b064,
  BONE_EXTRA2 = 0x0b065,
  BONE_EXTRA3 = 0x0b066,
  BONE_UNKNOWN = 0x0ffffffff,
}

declare enum eVehicleDoor {
  DOOR_LEFT_FRONT = 0,
  DOOR_RIGHT_FRONT = 1,
  DOOR_LEFT_REAR = 2,
  DOOR_RIGHT_REAR = 3,
  BONNET = 4,
  TRUNK = 5,
}
