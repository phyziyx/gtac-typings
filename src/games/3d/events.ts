interface ServerEvent {
  OnPedCrouch: (event: Event, ped: Ped) => void;
  onPedEnterVehicle: (
    event: Event,
    ped: Ped,
    vehicle: Vehicle,
    seat: number,
  ) => void;
  onPedExitVehicle: (event: Event, ped: Ped, vehicle: Vehicle) => void;
  OnPedFall: (
    event: Event,
    ped: Ped,
    unknown: number,
    anim: number,
    unknown2: number,
  ) => void;
  OnPedJump: (event: Event, ped: Ped) => void;
  OnPedUncrouch: (event: Event, ped: Ped) => void;
  OnPedWasted: (
    event: Event,
    wastedPed: Ped,
    attackerPed: Ped,
    weaponHash: number,
    bodyPart: number,
  ) => void;
  OnPickupCollected: (event: Event, pickup: Pickup, ped: Ped) => void;
}
