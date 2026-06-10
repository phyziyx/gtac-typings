// =====================
// CHAT TYPES
// =====================
export declare const CHAT_TYPE: {
  readonly NONE: 0;
  readonly CHAT: 1;
  readonly INFO: 2;
  readonly DEBUG: 3;
};

export type ChatType = (typeof CHAT_TYPE)[keyof typeof CHAT_TYPE];

// =====================
// COLOURS
// =====================
export declare const COLOUR: {
  readonly AQUA: 4278255615;
  readonly BLACK: 4278190080;
  readonly BLUE: 4278190335;
  readonly FUCHSIA: 4294902015;
  readonly GREEN: 4278222592;
  readonly LIME: 4278255360;
  readonly ORANGE: 4294934272;
  readonly RED: 4294901760;
  readonly SILVER: 4291019715;
  readonly SKYBLUE: 4284927231;
  readonly TRANSPARENT: 0;
  readonly WHITE: 4294967295;
  readonly YELLOW: 4294967040;
};

export type Colour = (typeof COLOUR)[keyof typeof COLOUR];

// =====================
// ELEMENTS
// =====================
export declare const ELEMENT: {
  readonly ELEMENT: 0;
  readonly TRANSFORMABLE: 2;
  readonly ENTITY: 6;
  readonly PHYSICAL: 14;
  readonly PED: 30;
  readonly CIVILIAN: 62;
  readonly PLAYER: 94;
  readonly BUILDING: 1030;
  readonly VEHICLE: 142;
  readonly TRAIN: 2190;
  readonly PICKUP: 4098;
  readonly MARKER: 8194;
  readonly OBJECT: 526;
  readonly BLIP: 258;
};

export type Element = (typeof ELEMENT)[keyof typeof ELEMENT];

// =====================
// GAME
// =====================
export declare const GAME: {
  readonly UNKNOWN: 0;
  readonly GTA_III: 1;
  readonly GTA_VC: 2;
  readonly GTA_SA: 3;
  readonly GTA_UG: 4;
  readonly GTA_IV: 5;
  readonly GTA_IV_EFLC: 6;
  readonly BULLY: 7;
};

export type Game = (typeof GAME)[keyof typeof GAME];

// =====================
// GARAGES
// =====================
export declare const GARAGE: {
  readonly COMMERCE_MISSION_GARAGE: 0;
  readonly ELCORONA_AZTECAS_GARAGE: 1;
  readonly ELCORONA_BOMBSHOP_GARAGE: 2;
  readonly ELCORONA_CESAR_GARAGE: 3;
  readonly ELCORONA_PLAYER_GARAGE: 4;
  readonly SEVILLE_BURGLARY_GARAGE: 5;
  readonly WILLOWFIELD_LOWRIDER_GARAGE: 6;
  readonly IDLEWOOD_PAYNSPRAY_GARAGE: 7;
  readonly GROVESTREET_PLAYER_GARAGE: 8;
  readonly TEMPLE_TRANSFENDER_GARAGE: 9;
  readonly TEMPLE_PAYNSPRAY_GARAGE: 10;
  readonly LSBEACH_PAYNSPRAY_GARAGE: 11;
  readonly LSBEACH_PLAYER_GARAGE: 12;
  readonly MULHOLLAND_PLAYER_GARAGE: 13;
  readonly OCEANFLATS_VEHICLEMOD_GARAGE: 14;
  readonly OCEANFLATS_TBONE_GARAGE: 15;
  readonly HASHBURY_PLAYER_GARAGE: 16;
  readonly DOHERTY_TRANSFENDER_GARAGE: 17;
  readonly DOWNTOWN_PAYNSPRAY_GARAGE: 18;
  readonly DOHERTY_BURGLARY_GARAGE: 19;
  readonly DOHERTY_PLAYER_GARAGE: 20;
  readonly DOHERTY_MISSION_GARAGE: 21;
  readonly DOWNTOWN_MICHELLE_GARAGE: 22;
  readonly CALTONHEIGHT_PLAYER_GARAGE: 23;
  readonly JUNIPERHOLLOW_PAYNSPRAY_GARAGE: 24;
  readonly PARADISO_PLAYER_GARAGE: 25;
  readonly LVAIRPORT_HANGAR_GARAGE: 26;
  readonly PILGRIM_BURGLARY_GARAGE: 27;
  readonly COMEALOT_TRANSFENDER_GARAGE: 28;
  readonly ROCKSHOREWEST_PLAYER_GARAGE: 29;
  readonly REDSANDSEAST_BOMBSHOP_GARAGE: 30;
  readonly REDSANDSEAST_PAYNSPRAY_GARAGE: 31;
  readonly REDSANDSWEST_PLAYER_GARAGE: 32;
  readonly PRICKLEPINE_PLAYER_GARAGE: 33;
  readonly WHITEWOODESTATES_PLAYER_GARAGE: 34;
  readonly ELQUEBRADOS_PAYNSPRAY_GARAGE: 35;
  readonly FORTCARSON_PAYNSPRAY_GARAGE: 36;
  readonly FORTCARSON_PLAYER_GARAGE: 37;
  readonly VERDANTMEADOWS_PLAYER_GARAGE: 38;
  readonly ELCASTILLO_MISSION_GARAGE: 39;
  readonly OLDAIRFIELD_HANGAR_GARAGE: 40;
  readonly ANGELPINE_MISSION_GARAGE: 41;
  readonly DILLIMORE_PAYNSPRAY_GARAGE: 42;
  readonly PALOMINO_PLAYER_GARAGE: 43;
  readonly DILLIMORE_PLAYER_GARAGE: 44;
};

export type Garage = (typeof GARAGE)[keyof typeof GARAGE];

// =====================
// INVALID
// =====================
export declare const INVALID: {
  readonly CLIENT_ID: -1;
  readonly NETWORK_ID: -1;
};

export type Invalid = (typeof INVALID)[keyof typeof INVALID];

// =====================
// KEYSTATE
// =====================
export declare const KEYSTATE: {
  readonly UP: 0;
  readonly DOWN: 1;
  readonly BOTH: 2;
};

export type KeyState = (typeof KEYSTATE)[keyof typeof KEYSTATE];

// =====================
// KMOD
// =====================
export declare const KMOD: {
  readonly NONE: 0;
  readonly LSHIFT: 1;
  readonly RSHIFT: 2;
  readonly SHIFT: 3;
  readonly LCTRL: 64;
  readonly RCTRL: 128;
  readonly CTRL: 192;
  readonly LALT: 256;
  readonly RALT: 512;
  readonly ALT: 768;
  readonly LGUI: 1024;
  readonly RGUI: 2048;
  readonly GUI: 3072;
  readonly NUM: 4096;
  readonly CAPS: 8192;
  readonly MODE: 16384;
  readonly RESERVED: 32768;
};

export type KMod = (typeof KMOD)[keyof typeof KMOD];

// =====================
// STATUS
// =====================
export declare const STATUS: {
  readonly PLAYER: 0;
  readonly PLAYER_PLAYBACKFROMBUFFER: 1;
  readonly SIMPLE: 2;
  readonly PHYSICS: 3;
  readonly ABANDONED: 4;
  readonly WRECKED: 5;
  readonly TRAIN_MOVING: 6;
  readonly TRAIN_NOT_MOVING: 7;
  readonly HELI: 8;
  readonly PLANE: 9;
  readonly PLAYER_REMOTE: 10;
  readonly PLAYER_DISABLED: 11;
};

export type Status = (typeof STATUS)[keyof typeof STATUS];

// =====================
// VEHICLE SUBTYPE
// =====================
export declare const VEHICLE_SUBTYPE: {
  readonly AUTOMOBILE: 0;
  readonly BOAT: 1;
  readonly TRAIN: 2;
  readonly HELI: 3;
  readonly PLANE: 4;
  readonly BIKE: 5;
};

export type VehicleSubType =
  (typeof VEHICLE_SUBTYPE)[keyof typeof VEHICLE_SUBTYPE];

// =====================
// SEEK
// =====================
export declare const SEEK: {
  readonly SET: 0;
  readonly CUR: 1;
  readonly END: 2;
};

export type Seek = (typeof SEEK)[keyof typeof SEEK];

// =====================
// SDL LOG PRIORITY
// =====================
export declare const SDL_LOG_PRIORITY: {
  readonly VERBOSE: 1;
  readonly DEBUG: 2;
  readonly INFO: 3;
  readonly WARN: 4;
  readonly ERROR: 5;
  readonly CRITICAL: 6;
};

export type SDLLogPriority =
  (typeof SDL_LOG_PRIORITY)[keyof typeof SDL_LOG_PRIORITY];

// =====================
// RESOURCE ERROR MODE
// =====================
export declare const RESOURCE_ERROR_MODE: {
  readonly DEFAULT: 0;
  readonly STRICT: 1;
};

export type ResourceErrorMode =
  (typeof RESOURCE_ERROR_MODE)[keyof typeof RESOURCE_ERROR_MODE];
