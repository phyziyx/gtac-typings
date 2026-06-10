type Camera = number;

type NativeBlipHandle = number & { __brand: "NativeBlipHandle" };
type NativeObjectHandle = number & { __brand: "NativeObjectHandle" };
type NativePedHandle = number & { __brand: "NativePedHandle" };
type NativePickupHandle = number & { __brand: "NativePickupHandle" };
type NativePlayerHandle = number & { __brand: "NativePlayerHandle" };
type NativeTrainHandle = number & { __brand: "NativeTrainHandle" };
type NativeVehicleHandle = number & { __brand: "NativeVehicleHandle" };

type NativeBlip = Blip | NativeBlipHandle;
type NativeObject = GameObject | NativeObjectHandle;
type NativePed = Ped | NativePedHandle;
type NativePickup = Pickup | NativePickupHandle;
type NativePlayer = Player | NativePlayerHandle;
type NativeTrain = Train | NativeTrainHandle;
type NativeVehicle = Vehicle | NativeVehicleHandle;

declare namespace natives {
  function abortAllGarageActivity(): void;
  function abortScriptedConversation(toggle: boolean): void;
  function absf(value: number): number;
  function absi(value: number): number;
  function acos(value: number): number;
  function activateCheat(value: number): void;
  function activateFrontend(): void;
  function activateHeliSpeedCheat(vehicle: NativeVehicle, value: number): void;
  function activateInterior(value: number, toggle: boolean): void;
  function activateMenuItem(
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function activateNetworkSettingsMenu(): void;
  function activateReplayMenu(): void;
  function activateSaveMenu(): void;
  function activateScriptedCams(toggle: boolean, toggle2: boolean): void;
  function activateScriptPopulationZone(): void;
  function activateViewport(value: number, toggle: boolean): void;
  function addAdditionalPopulationModel(value: number): void;
  function addAmmoToChar(ped: NativePed, value: number, value2: number): void;
  function addArmourToChar(ped: NativePed, value: number): void;
  function addBlipForCar(vehicle: NativeVehicle): NativeBlipHandle;
  function addBlipForChar(ped: NativePed): NativeBlipHandle;
  function addBlipForContact(coords: Vec3): NativeBlipHandle;
  function addBlipForCoord(coords: Vec3): NativeBlipHandle;
  function addBlipForGangTerritory(
    coords: Vec2,
    coords2: Vec2,
    value: number,
  ): NativeBlipHandle;
  function addBlipForRadius(coords: Vec3, value: number): NativeBlipHandle;
  function addBlipForWeapon(coords: Vec3): NativeBlipHandle;
  function addCamSplineNode(value: number, value2: number): void;
  function addCarToMissionDeletionList(vehicle: NativeVehicle): void;
  function addCharDecisionMakerEventResponse(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
  ): void;
  function addExplosion(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
    toggle2: boolean,
    value3: number,
  ): void;
  function addFirstNCharactersOfStringToHtmlScriptObject(
    value: number,
    text: string,
    value2: number,
  ): void;
  function addGroupDecisionMakerEventResponse(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
  ): void;
  function addGroupToNetworkRestartNodeGroupList(value: number): void;
  function addHospitalRestart(
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function addLineToMobilePhoneCall(
    value: number,
    text: string,
    text2: string,
  ): void;
  function addLineToScriptedConversation(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function addNavmeshRequiredRegion(coords: Vec3): void;
  function addNeededAtPosn(coords: Vec3): void;
  function addNewConversationSpeaker(value: number, value2: number): void;
  function addNewFrontendConversationSpeaker(
    value: number,
    value2: number,
  ): void;
  function addNextMessageToPreviousBriefs(toggle: boolean): void;
  function addPedToCinematographyAi(value: number, ped: NativePed): void;
  function addPedToMissionDeletionList(ped: NativePed, toggle: boolean): void;
  function addPointToGpsRaceTrack(): void;
  function addPoliceRestart(coords: Vec3, value: number, value2: number): void;
  function addScenarioBlockingArea(coords: Vec3, coords2: Vec3): void;
  function addScore(value: number, value2: number): void;
  function addStringToHtmlScriptObject(value: number, text: string): void;
  function addStringToNewsScrollbar(text: string): void;
  function addStringWithThisTextLabelToPreviousBrief(text: string): void;
  function addStuckCarCheck(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function addStuckCarCheckWithWarp(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
  ): void;
  function addStuntJump(
    coords: Vec3,
    coords2: Vec3,
    coords3: Vec3,
    coords4: Vec3,
    coords5: Vec3,
    value: number,
  ): void;
  function addToHtmlScriptObject(value: number, text: string): void;
  function addToPreviousBrief(text: string): void;
  function addToPreviousBriefWithUnderscore(text: string): void;
  function addUpsidedownCarCheck(vehicle: NativeVehicle): void;
  function allocateScriptToObject(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function allocateScriptToRandomPed(
    text: string,
    value: number,
    value2: number,
    toggle: boolean,
  ): unknown;
  function allowAutoConversationLookats(handle: number, toggle: boolean): void;
  function allowEmergencyServices(toggle: boolean): void;
  function allowGameToPauseForStreaming(toggle: boolean): void;
  function allowGangRelationshipsToBeChangedByNextCommand(
    toggle: boolean,
  ): void;
  function allowLockonToFriendlyPlayers(value: number, toggle: boolean): void;
  function allowLockonToRandomPeds(value: number, toggle: boolean): void;
  function allowMultipleDrivebyPickups(toggle: boolean): void;
  function allowOneTimeOnlyCommandsToRun(): void;
  function allowPlayerToCarryNonMissionObjects(
    value: number,
    toggle: boolean,
  ): void;
  function allowReactionAnims(handle: number, toggle: boolean): void;
  function allowScenarioPedsToBeReturnedByNextCommand(toggle: boolean): void;
  function allowStuntJumpsToTrigger(toggle: boolean): void;
  function allowTargetWhenInjured(handle: number, toggle: boolean): void;
  function allowThisScriptToBePaused(toggle: boolean): void;
  function alterWantedLevel(value: number, value2: number): void;
  function alterWantedLevelNoDrop(value: number, value2: number): void;
  function alwaysUseHeadOnHornAnimWhenDeadInCar(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): unknown;
  function ambientAudioBankNoLongerNeeded(): unknown;
  function anchorBoat(vehicle: NativeVehicle, toggle: boolean): void;
  function applyForceToCar(
    vehicle: NativeVehicle,
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
  ): void;
  function applyForceToPed(
    ped: NativePed,
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
  ): void;
  function applyWantedLevelChangeNow(value: number): void;
  function areAllNavmeshRegionsLoaded(): boolean;
  function areAnyCharsNearChar(ped: NativePed, value: number): boolean;
  function areCreditsFinished(): boolean;
  function areEnemyPedsInArea(
    ped: NativePed,
    coords: Vec3,
    value: number,
  ): boolean;
  function areTaxiLightsOn(vehicle: NativeVehicle): boolean;
  function areWidescreenBordersActive(): boolean;
  function asciiIntToString(value: number): unknown;
  function asin(value: number): number;
  function atan(value: number): number;
  function atan2(value: number, value2: number): number;
  function attachAnimsToModel(value: number, text: string): void;
  function attachCamToPed(camera: number, ped: NativePed): void;
  function attachCamToVehicle(camera: number, vehicle: NativeVehicle): void;
  function attachCamToViewport(value: number, value2: number): void;
  function attachCarToCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    coords: Vec3,
    coords2: Vec3,
  ): void;
  function attachCarToCarPhysically(
    value: number,
    value2: number,
    toggle: boolean,
    value3: number,
    coords: Vec3,
    coords2: Vec3,
    coords3: Vec2,
    value4: number,
    value5: number,
    value6: number,
  ): void;
  function attachPedToCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function attachPedToCarPhysically(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function attachPedToShimmyEdge(
    ped: NativePed,
    coords: Vec3,
    value: number,
  ): void;
  function awardPlayerMissionRespect(value: number): void;
  function beginCamCommands(): void;
  function beginCharSearchCriteria(): void;
  function blendFromNmWithAnim(
    handle: number,
    text: string,
    text2: string,
    value: number,
    coords: Vec3,
  ): unknown;
  function blendOutCharMoveAnims(ped: NativePed): unknown;
  function blockCharAmbientAnims(ped: NativePed, toggle: boolean): void;
  function blockCharGestureAnims(ped: NativePed, toggle: boolean): void;
  function blockCharHeadIk(ped: NativePed, toggle: boolean): void;
  function blockCharVisemeAnims(ped: NativePed, toggle: boolean): void;
  function blockCoweringInCover(handle: number, toggle: boolean): void;
  function blockPedWeaponSwitching(ped: NativePed, toggle: boolean): void;
  function blockPeekingInCover(handle: number, toggle: boolean): void;
  function blockStatsMenuActions(value: number): void;
  function breakCarDoor(
    vehicle: NativeVehicle,
    value: number,
    toggle: boolean,
  ): void;
  function burstCarTyre(vehicle: NativeVehicle, value: number): void;
  function calculateTravelDistanceBetweenNodes(
    coords: Vec3,
    coords2: Vec3,
  ): unknown;
  function camIsSphereVisible(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): boolean;
  function camProcess(value: number): unknown;
  function camRestore(): unknown;
  function camRestoreJumpcut(): unknown;
  function camSequenceClose(): unknown;
  function camSequenceGetProgress(value: number): unknown;
  function camSequenceOpen(value: number): unknown;
  function camSequenceRemove(value: number): unknown;
  function camSequenceStart(value: number): unknown;
  function camSequenceStop(value: number): unknown;
  function camSequenceWait(value: number, value2: number): unknown;
  function camSetCinematic(handle: number, toggle: boolean): void;
  function camSetDollyZoomLock(value: number, toggle: boolean): void;
  function camSetInterpGraphPos(value: number, value2: number): void;
  function camSetInterpGraphRot(value: number, value2: number): void;
  function camSetInterpolationDetails(value: number): void;
  function camSetInterpStateSrc(value: number, value2: number): void;
  function canBeDescribedAsACar(vehicle: NativeVehicle): boolean;
  function cancelCurrentlyPlayingAmbientSpeech(handle: number): boolean;
  function cancelOverrideRestart(): boolean;
  function canCharSeeDeadChar(ped: NativePed, ped2: NativePed): boolean;
  function canCreateRandomChar(toggle: boolean, toggle2: boolean): boolean;
  function canFontBeLoaded(value: number): boolean;
  function canPedShimmyInDirection(ped: NativePed, value: number): boolean;
  function canPhoneBeSeenOnScreen(): boolean;
  function canPlayerStartMission(value: number): boolean;
  function canRegisterMissionObject(): boolean;
  function canRegisterMissionPed(): boolean;
  function canRegisterMissionVehicle(): boolean;
  function canStartMissionPassedTune(): boolean;
  function canTheStatHaveString(value: number): boolean;
  function ceil(value: number): number;
  function cellCamActivate(toggle: boolean, toggle2: boolean): unknown;
  function cellCamIsCharVisible(ped: NativePed): unknown;
  function cellCamIsCharVisibleNoFaceCheck(ped: NativePed): unknown;
  function cellCamSetCentrePos(coords: Vec2): unknown;
  function cellCamSetColourBrightness(
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function cellCamSetZoom(value: number): unknown;
  function changeBlipAlpha(value: number, value2: number): void;
  function changeBlipColour(value: number, value2: number): void;
  function changeBlipDisplay(value: number, value2: number): void;
  function changeBlipNameFromAscii(value: number, text: string): void;
  function changeBlipNameFromTextFile(value: number, text: string): void;
  function changeBlipNameToPlayerName(value: number, value2: number): void;
  function changeBlipPriority(value: number, value2: number): void;
  function changeBlipRotation(value: number, value2: number): void;
  function changeBlipScale(value: number, value2: number): void;
  function changeBlipSprite(value: number, value2: number): void;
  function changeBlipTeamRelevance(value: number, value2: number): void;
  function changeCarColour(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function changeGarageType(value: number, value2: number): void;
  function changePickupBlipColour(value: number): void;
  function changePickupBlipDisplay(value: number): void;
  function changePickupBlipPriority(value: number): void;
  function changePickupBlipScale(value: number): void;
  function changePickupBlipSprite(value: number): void;
  function changePlaybackToUseAi(handle: number): void;
  function changePlayerModel(value: number, value2: number): void;
  function changePlayerPhoneModel(value: number, value2: number): void;
  function changePlayerPhoneModelOffsets(
    value: number,
    coords: Vec3,
    coords2: Vec3,
  ): void;
  function changeTerritoryBlipScale(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function cheatHappenedRecently(value: number, value2: number): unknown;
  function checkNmFeedback(
    handle: number,
    value: number,
    toggle: boolean,
  ): unknown;
  function checkStuckTimer(
    handle: number,
    value: number,
    value2: number,
  ): unknown;
  function clearAdditionalText(value: number, toggle: boolean): void;
  function clearAllCharProps(ped: NativePed): void;
  function clearAllCharRelationships(ped: NativePed, value: number): void;
  function clearAngledAreaOfCars(
    coords: Vec3,
    coords2: Vec3,
    value: number,
  ): void;
  function clearArea(coords: Vec3, value: number, toggle: boolean): void;
  function clearAreaOfCars(coords: Vec3, value: number): void;
  function clearAreaOfChars(coords: Vec3, value: number): void;
  function clearAreaOfCops(coords: Vec3, value: number): void;
  function clearAreaOfObjects(coords: Vec3, value: number): void;
  function clearBit(value: number): void;
  function clearBrief(): void;
  function clearCarLastDamageEntity(vehicle: NativeVehicle): void;
  function clearCarLastWeaponDamage(vehicle: NativeVehicle): void;
  function clearCharLastDamageBone(ped: NativePed): void;
  function clearCharLastDamageEntity(ped: NativePed): void;
  function clearCharLastWeaponDamage(ped: NativePed): void;
  function clearCharProp(ped: NativePed, toggle: boolean): void;
  function clearCharRelationship(
    ped: NativePed,
    value: number,
    value2: number,
  ): void;
  function clearCharSecondaryTask(ped: NativePed): void;
  function clearCharTasks(ped: NativePed): void;
  function clearCharTasksImmediately(ped: NativePed): void;
  function clearCutscene(): void;
  function clearGroupDecisionMakerEventResponse(
    value: number,
    value2: number,
  ): void;
  function clearHelp(): void;
  function clearNamedCutscene(text: string): void;
  function clearNetworkRestartNodeGroupList(): void;
  function clearNewsScrollbar(): void;
  function clearOnscreenCounter(value: number): void;
  function clearOnscreenTimer(value: number): void;
  function clearPedNonCreationArea(): void;
  function clearPedNonRemovalArea(): void;
  function clearPlayerHasDamagedAtLeastOnePed(value: number): void;
  function clearPlayerHasDamagedAtLeastOneVehicle(value: number): void;
  function clearPrints(): void;
  function clearRelationship(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function clearRoomForCar(vehicle: NativeVehicle): void;
  function clearRoomForChar(ped: NativePed): void;
  function clearRoomForViewport(value: number): void;
  function clearScriptArrayFromScratchpad(value: number): void;
  function clearScriptedConversionCentre(): void;
  function clearSequenceTask(value: number): void;
  function clearShakePlayerpadWhenControllerDisabled(): void;
  function clearSmallPrints(): void;
  function clearTextLabel(text: string): void;
  function clearThisBigPrint(text: string): void;
  function clearThisPrint(text: string): void;
  function clearThisPrintBigNow(toggle: boolean): void;
  function clearTimecycleModifier(): void;
  function clearWantedLevel(value: number): void;
  function cloneCam(value: number): unknown;
  function closeAllCarDoors(vehicle: NativeVehicle): void;
  function closeDebugFile(): void;
  function closeGarage(text: string): void;
  function closeMicPed(value: number, ped: NativePed): void;
  function closeSequenceTask(value: number): void;
  function codeWantsMobilePhoneRemoved(): unknown;
  function codeWantsMobilePhoneRemovedForWeaponSwitching(): unknown;
  function compareString(text: string, text2: string): unknown;
  function compareTwoDates(
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function controlCarDoor(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
  ): unknown;
  function convertIntToPlayerindex(value: number): unknown;
  function convertMetresToFeet(value: number): unknown;
  function convertMetresToFeetInt(value: number): unknown;
  function convertThenAddStringToHtmlScriptObject(
    value: number,
    text: string,
  ): unknown;
  function copyAnimations(
    handle: number,
    handle2: number,
    value: number,
  ): unknown;
  function copyCharDecisionMaker(value: number): unknown;
  function copyCombatDecisionMaker(value: number): unknown;
  function copyGroupCharDecisionMaker(value: number): unknown;
  function copyGroupCombatDecisionMaker(value: number): unknown;
  function copySharedCharDecisionMaker(value: number): unknown;
  function copySharedCombatDecisionMaker(value: number): unknown;
  function cos(value: number): number;
  function countPickupsOfType(value: number): number;
  function countScriptCams(): number;
  function countScriptCamsByTypeAndOrState(
    value: number,
    value2: number,
    value3: number,
  ): number;
  function createCam(value: number): Camera;
  function createCar(
    value: number,
    coords: Vec3,
    toggle: boolean,
  ): NativeVehicleHandle;
  function createCarGenerator(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    toggle: boolean,
    toggle2: boolean,
  ): NativeVehicleHandle;
  function createCarsOnGeneratorsInArea(
    coords: Vec3,
    coords2: Vec3,
  ): NativeVehicleHandle;
  function createChar(
    value: number,
    value2: number,
    coords: Vec3,
    toggle: boolean,
  ): NativePedHandle;
  function createCharAsPassenger(
    ped: NativePed,
    value: number,
    value2: number,
    value3: number,
  ): NativePedHandle;
  function createCharInsideCar(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
  ): NativeVehicleHandle;
  function createCheckpoint(
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
  ): void;
  function createEmergencyServicesCar(
    value: number,
    coords: Vec3,
  ): NativeVehicleHandle;
  function createEmergencyServicesCarReturnDriver(
    value: number,
    coords: Vec3,
  ): NativeVehicleHandle;
  function createEmergencyServicesCarThenWalk(
    value: number,
    coords: Vec3,
  ): NativeVehicleHandle;
  function createGroup(toggle: boolean, toggle2: boolean): void;
  function createHtmlScriptObject(text: string): NativeObjectHandle;
  function createHtmlViewport(): void;
  function createMissionTrain(
    value: number,
    coords: Vec3,
    toggle: boolean,
  ): NativeTrainHandle;
  function createMobilePhone(value: number): void;
  function createMoneyPickup(
    coords: Vec3,
    value: number,
    toggle: boolean,
  ): NativePickupHandle;
  function createNmMessage(toggle: boolean, value: number): void;
  function createObject(
    value: number,
    coords: Vec3,
    toggle: boolean,
  ): NativeObjectHandle;
  function createObjectNoOffset(
    value: number,
    coords: Vec3,
    toggle: boolean,
  ): NativeObjectHandle;
  function createPickup(
    value: number,
    value2: number,
    coords: Vec3,
    toggle: boolean,
  ): NativePickupHandle;
  function createPickupRotate(
    value: number,
    value2: number,
    value3: number,
    coords: Vec3,
    value4: number,
    value5: number,
    value6: number,
  ): NativePickupHandle;
  function createPickupWithAmmo(
    value: number,
    value2: number,
    value3: number,
    coords: Vec3,
  ): NativePickupHandle;
  function createPlayer(value: number, coords: Vec3): NativePlayerHandle;
  function createRandomCarForCarPark(
    coords: Vec3,
    value: number,
  ): NativeVehicleHandle;
  function createRandomChar(coords: Vec3): NativePedHandle;
  function createRandomCharAsDriver(ped: NativePed): NativePedHandle;
  function createRandomCharAsPassenger(
    ped: NativePed,
    value: number,
  ): NativePedHandle;
  function createRandomFemaleChar(coords: Vec3): NativePedHandle;
  function createRandomMaleChar(coords: Vec3): NativePedHandle;
  function createTemporaryRadarBlipsForPickupsInArea(
    coords: Vec3,
    value: number,
    value2: number,
  ): NativePickupHandle;
  function createViewport(): void;
  function damageCar(
    vehicle: NativeVehicle,
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
  ): unknown;
  function damageChar(ped: NativePed, value: number, toggle: boolean): unknown;
  function damagePedBodyPart(
    ped: NativePed,
    value: number,
    value2: number,
  ): unknown;
  function deactivateFrontend(): void;
  function deactivateNetworkSettingsMenu(): void;
  function deactivateScriptPopulationZone(): void;
  function debugOff(): unknown;
  function decrementFloatStat(value: number, value2: number): unknown;
  function decrementIntStat(value: number, value2: number): unknown;
  function definePedGenerationConstraintArea(
    coords: Vec3,
    value: number,
  ): unknown;
  function deleteAllHtmlScriptObjects(): unknown;
  function deleteAllTrains(): unknown;
  function deleteCar(): unknown;
  function deleteCarGenerator(value: number): unknown;
  function deleteChar(): unknown;
  function deleteCheckpoint(value: number): unknown;
  function deleteHtmlScriptObject(value: number): unknown;
  function deleteMenu(value: number): unknown;
  function deleteMissionTrain(): unknown;
  function deleteMissionTrains(): unknown;
  function deleteObject(): unknown;
  function deletePlayer(): unknown;
  function destroyAllCams(): void;
  function destroyAllScriptViewports(): void;
  function destroyCam(value: number): void;
  function destroyMobilePhone(): void;
  function destroyPedGenerationConstraintArea(): void;
  function destroyThread(value: number): void;
  function destroyViewport(value: number): void;
  function detachCamFromViewport(value: number): void;
  function detachCar(vehicle: NativeVehicle): void;
  function detachPed(ped: NativePed, toggle: boolean): void;
  function didSaveCompleteSuccessfully(): boolean;
  function dimBlip(value: number, toggle: boolean): unknown;
  function disableCarGenerators(toggle: boolean, toggle2: boolean): void;
  function disableCarGeneratorsWithHeli(toggle: boolean): void;
  function disableEndCreditsFade(): void;
  function disableFrontendRadio(): void;
  function disableGps(toggle: boolean): void;
  function disableHeliChaseCamBonnetNitroFix(): void;
  function disableHeliChaseCamThisUpdate(): void;
  function disableIntermezzoCams(): void;
  function disableLocalPlayerPickups(toggle: boolean): void;
  function disablePauseMenu(toggle: boolean): void;
  /**
   * @added 1.8.0/1.8.1
   * @description This native will disable the player exiting a vehicle automatically when another player enters the vehicle.
   * @param toggle If true, player will no longer exit automatically. If false, player will exit automatically as normal.
   */
  function disablePlayerAutoVehicleExit(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function disablePlayerLockon(value: number, toggle: boolean): void;
  function disablePlayerSprint(value: number, toggle: boolean): void;
  function disablePlayerVehicleEntry(value: number, toggle: boolean): void;
  function disablePoliceScanner(): void;
  function disableStickyBombActiveSound(handle: number, toggle: boolean): void;
  function displayAltimeterThisFrame(): void;
  function displayAmmo(toggle: boolean): void;
  function displayAreaName(toggle: boolean): void;
  function displayCash(toggle: boolean): void;
  function displayFrontendMapBlips(toggle: boolean): void;
  function displayGrimeThisFrame(): void;
  function displayHelpTextThisFrame(text: string, toggle: boolean): void;
  function displayHud(toggle: boolean): void;
  function displayLoadingThisFrameWithScriptSprites(): void;
  function displayNonMinigameHelpMessages(toggle: boolean): void;
  function displayNthOnscreenCounterWithString(
    value: number,
    value2: number,
    value3: number,
    text: string,
  ): void;
  function displayOnscreenTimerWithString(
    value: number,
    toggle: boolean,
    text: string,
  ): void;
  /**
   * @added 1.8.0/1.8.1
   * @description This native is used to toggle player names above heads.
   * @param toggle If true, player names will be displayed above heads. If false, player names will not be displayed.
   */
  function displayPlayerNames(toggle: boolean): void;
  /**
   * @added 1.8.0/1.8.1
   * @description This native is used to toggle player icons above heads.
   * @param toggle If true, player icons will be displayed above heads. If false, player icons will not be displayed.
   */
  function displayPlayerIcons(toggle: boolean): void;
  function displayRadar(toggle: boolean): void;
  function displaySniperScopeThisFrame(): void;
  function displayText(coords: Vec2, text: string): void;
  function displayTextWith2Numbers(
    coords: Vec2,
    text: string,
    value: number,
    value2: number,
  ): void;
  function displayTextWith3Numbers(
    coords: Vec2,
    text: string,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function displayTextWithBlipName(
    coords: Vec2,
    text: string,
    value: number,
  ): void;
  function displayTextWithFloat(
    coords: Vec2,
    text: string,
    value: number,
    value2: number,
  ): void;
  function displayTextWithLiteralString(
    coords: Vec2,
    text: string,
    text2: string,
  ): void;
  function displayTextWithNumber(
    coords: Vec2,
    text: string,
    value: number,
  ): void;
  function displayTextWithString(
    coords: Vec2,
    text: string,
    text2: string,
  ): void;
  function displayTextWithStringAndInt(
    coords: Vec2,
    text: string,
    text2: string,
    value: number,
  ): void;
  function displayTextWithSubstringGivenHashKey(
    coords: Vec2,
    text: string,
    value: number,
  ): void;
  function displayTextWithTwoLiteralStrings(
    coords: Vec2,
    text: string,
    text2: string,
    text3: string,
  ): void;
  function displayTextWithTwoStrings(
    coords: Vec2,
    text: string,
    text2: string,
    text3: string,
  ): void;
  function displayTextWithTwoSubstringsGivenHashKeys(
    coords: Vec2,
    text: string,
    value: number,
    value2: number,
  ): void;
  function doAutoSave(): void;
  function doesBlipExist(value: number): boolean;
  function doesCamExist(value: number): boolean;
  function doesCarHaveHydraulics(vehicle: NativeVehicle): boolean;
  function doesCarHaveRoof(vehicle: NativeVehicle): boolean;
  function doesCarHaveStuckCarCheck(vehicle: NativeVehicle): boolean;
  function doesCharExist(ped: NativePed): boolean;
  function doesDecisionMakerExist(value: number): boolean;
  function doesGameCodeWantToLeaveNetworkSession(): boolean;
  function doesGroupExist(value: number): boolean;
  function doesObjectExistWithNetworkId(value: number): boolean;
  function doesObjectOfTypeExistAtCoords(
    coords: Vec3,
    value: number,
    value2: number,
  ): boolean;
  function doesPedExistWithNetworkId(value: number): boolean;
  function doesPlayerHaveControlOfNetworkId(
    value: number,
    value2: number,
  ): boolean;
  function doesScriptExist(text: string): boolean;
  function doesScriptFireExist(value: number): boolean;
  function doesTextLabelExist(text: string): boolean;
  function doesThisMinigameScriptAllowNonMinigameHelpMessages(): boolean;
  function doesVehicleExist(vehicle: NativeVehicle): boolean;
  function doesVehicleExistWithNetworkId(value: number): boolean;
  function doesViewportExist(value: number): boolean;
  function doesWebPageExist(text: string): boolean;
  function dontAbortCarConversations(toggle: boolean, toggle2: boolean): void;
  function dontDispatchCopsForPlayer(value: number, toggle: boolean): void;
  function dontDisplayLoadingOnFadeThisFrame(): void;
  function dontRemoveChar(ped: NativePed): void;
  function dontSuppressAnyCarModels(): void;
  function dontSuppressAnyPedModels(): void;
  function dontSuppressCarModel(value: number): void;
  function dontSuppressPedModel(value: number): void;
  function doScreenFadeIn(value: number): void;
  function doScreenFadeInUnhacked(value: number): void;
  function doScreenFadeOut(value: number): void;
  function doScreenFadeOutUnhacked(value: number): void;
  function drawCheckpoint(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function drawCheckpointWithAlpha(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function drawColouredCylinder(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): void;
  function drawCurvedWindow(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function drawCurvedWindowNotext(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function drawCurvedWindowText(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    text: string,
    text2: string,
    value6: number,
  ): void;
  function drawDebugSphere(coords: Vec3, value: number): void;
  function drawFrontendHelperText(
    text: string,
    text2: string,
    toggle: boolean,
  ): void;
  function drawLightWithRange(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function drawMovie(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
  ): void;
  function drawRect(
    coords: Vec2,
    coords2: Vec2,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function drawSphere(coords: Vec3, value: number): void;
  function drawSprite(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
  ): void;
  function drawSpriteFrontBuff(
    coords: Vec2,
    coords2: Vec2,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function drawSpritePhoto(
    coords: Vec2,
    coords2: Vec2,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function drawSpriteWithFixedRotation(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
  ): void;
  function drawSpriteWithUv(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
  ): void;
  function drawSpriteWithUvCoords(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
    value11: number,
    value12: number,
    value13: number,
    value14: number,
  ): void;
  function drawToplevelSprite(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
  ): void;
  function drawWindow(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    text: string,
    value5: number,
  ): void;
  function drawWindowText(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    text: string,
    value5: number,
  ): void;
  function dropObject(handle: number, toggle: boolean): unknown;
  function enableAllPedHelmets(toggle: boolean): void;
  function enableCamCollision(value: number, toggle: boolean): void;
  function enableChaseAudio(toggle: boolean): void;
  function enableDebugCam(toggle: boolean): void;
  function enableDeferredLighting(toggle: boolean): void;
  function enableEndCreditsFade(): void;
  function enableFancyWater(toggle: boolean): void;
  function enableFovLodMultiplier(toggle: boolean): void;
  function enableFrontendRadio(): void;
  function enableGpsInVehicle(vehicle: NativeVehicle, toggle: boolean): void;
  function enableMaxAmmoCap(toggle: boolean): void;
  function enablePedHelmet(ped: NativePed, toggle: boolean): void;
  function enablePoliceScanner(): void;
  function enableSaveHouse(value: number, toggle: boolean): void;
  function enableSceneStreaming(toggle: boolean): void;
  function enableScriptControlledMicrophone(): void;
  function enableShadows(toggle: boolean): void;
  function endCamCommands(): void;
  function endCharSearchCriteria(): void;
  function endWidgetGroup(): void;
  function evolvePtfx(value: number, text: string, value2: number): unknown;
  function exp(value: number): unknown;
  function explodeCar(
    vehicle: NativeVehicle,
    toggle: boolean,
    toggle2: boolean,
  ): unknown;
  function explodeCarInCutscene(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): unknown;
  function explodeCarInCutsceneShakeAndBit(
    vehicle: NativeVehicle,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): unknown;
  function explodeCharHead(ped: NativePed): unknown;
  function extinguishCarFire(vehicle: NativeVehicle): unknown;
  function extinguishCharFire(ped: NativePed): unknown;
  function extinguishFireAtPoint(coords: Vec3, value: number): unknown;
  function failKillFrenzy(): unknown;
  function fakeDeatharrest(): unknown;
  function findMaxNumberOfGroupMembers(): unknown;
  function findNearestCollectableBinBags(coords: Vec3): unknown;
  function findNearestEntitiesWithSpecialAttribute(coords: Vec3): unknown;
  function findNetworkKillerOfPlayer(value: number): unknown;
  function findPositionInRecording(handle: number): unknown;
  function findPrimaryPopulationZoneGroup(): unknown;
  function findStaticEmitterIndex(text: string): unknown;
  function findStreetNameAtPosition(
    value: number,
    value2: number,
    value3: number,
  ): [number, number];
  function findTimePositionInRecording(handle: number): unknown;
  function findTrainDirection(vehicle: NativeVehicle): unknown;
  function finishStreamingRequestList(): unknown;
  function firePedWeapon(ped: NativePed, coords: Vec3): unknown;
  function fireSingleBullet(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function fixAmbienceOrientation(toggle: boolean): void;
  function fixCar(vehicle: NativeVehicle): void;
  function fixCarTyre(vehicle: NativeVehicle, value: number): void;
  function fixScriptMicToCurrentPosisition(): void;
  function flashBlip(value: number, toggle: boolean): unknown;
  function flashBlipAlt(value: number, toggle: boolean): unknown;
  function flashRadar(toggle: boolean): unknown;
  function flashRoute(toggle: boolean): unknown;
  function flashWeaponIcon(toggle: boolean): unknown;
  function floor(value: number): number;
  function flushAllOutOfDateRadarBlipsFromMissionCleanupList(): unknown;
  function flushAllPlayerRespawnCoords(): unknown;
  function flushAllSpawnBlockingAreas(): unknown;
  function flushCoverBlockingAreas(): unknown;
  function flushPatrolRoute(): unknown;
  function flushScenarioBlockingAreas(): unknown;
  function forceAirDragMultForPlayersCar(value: number, value2: number): void;
  function forceAllVehicleLightsOff(toggle: boolean): void;
  function forceCarLights(vehicle: NativeVehicle, value: number): void;
  function forceCharToDropWeapon(ped: NativePed): void;
  function forceFullVoice(handle: number): void;
  function forceGameTelescopeCam(toggle: boolean): void;
  function forceGenerateParkedCarsTooCloseToOthers(toggle: boolean): void;
  function forceHighLod(toggle: boolean): void;
  function forceInitialPlayerStation(text: string): void;
  function forceInteriorLightingForPlayer(value: number, toggle: boolean): void;
  function forceLoadingScreen(toggle: boolean): void;
  function forceNoCamPause(toggle: boolean): void;
  function forceNoiseOff(toggle: boolean): void;
  function forcePedPinnedDown(
    ped: NativePed,
    toggle: boolean,
    value: number,
  ): void;
  function forcePedToFleeWhilstDrivingVehicle(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): void;
  function forcePedToLoadCover(ped: NativePed, toggle: boolean): void;
  function forcePopulationInit(): void;
  function forceRadioTrack(
    text: string,
    text2: string,
    value: number,
    value2: number,
  ): void;
  function forceRandomCarModel(value: number): void;
  function forceRandomPedType(value: number): void;
  function forceSpawnScenarioPedsInArea(
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function forceTimeOfDay(value: number, value2: number): void;
  function forceWeather(value: number): void;
  function forceWeatherNow(value: number): void;
  function forceWind(value: number): void;
  function forwardToTimeOfDay(value: number, value2: number): unknown;
  function freezeCarPosition(vehicle: NativeVehicle, toggle: boolean): void;
  function freezeCarPositionAndDontLoadCollision(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function freezeCharPosition(ped: NativePed, toggle: boolean): void;
  function freezeCharPositionAndDontLoadCollision(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function freezeOnscreenTimer(toggle: boolean): void;
  function freezePositionOfClosestObjectOfType(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function freezeRadioStation(text: string): void;
  function generateDirections(coords: Vec3): unknown;
  function generateRandomFloat(): number;
  function generateRandomFloatInRange(value: number, value2: number): number;
  function generateRandomInt(): number;
  function generateRandomIntInRange(value: number, value2: number): number;
  function getAcceptButton(): unknown;
  function getAmmoInCharWeapon(ped: NativePed, value: number): unknown;
  function getAmmoInClip(handle: number, value: number): number;
  function getAngleBetween2dVectors(coords: Vec2, coords2: Vec2): number;
  function getAnimGroupFromChar(ped: NativePed): unknown;
  function getAsciiJustPressed(value: number, value2: number): unknown;
  function getAsciiPressed(value: number): unknown;
  function getAspectRatio(): number;
  function getAudibleMusicTrackTextId(): string;
  function getAudioRoomId(): number;
  function getBitsInRange(
    value: number,
    value2: number,
    value3: number,
  ): number;
  function getBlipAlpha(value: number): number;
  function getBlipColour(value: number): number;
  function getBlipCoords(value: number): Vec3;
  function getBlipInfoIdCarIndex(value: number): number;
  function getBlipInfoIdDisplay(value: number): number;
  function getBlipInfoIdObjectIndex(value: number): number;
  function getBlipInfoIdPedIndex(value: number): number;
  function getBlipInfoIdPickupIndex(value: number): number;
  function getBlipInfoIdRotation(value: number): number;
  function getBlipInfoIdType(value: number): number;
  function getBlipSprite(value: number): number;
  function getBufferedAscii(value: number): unknown;
  function getCameraFromNetworkId(value: number): Camera;
  function getCamFarClip(value: number): number;
  function getCamFarDof(value: number): number;
  function getCamFov(value: number): number;
  function getCamMotionBlur(value: number): unknown;
  function getCamNearClip(value: number): number;
  function getCamNearDof(value: number): number;
  function getCamPos(value: number): number[];
  function getCamRot(value: number): number[];
  function getCamState(value: number): number;
  function getCarAnimCurrentTime(
    vehicle: NativeVehicle,
    text: string,
    text2: string,
  ): number;
  function getCarAnimTotalTime(
    vehicle: NativeVehicle,
    text: string,
    text2: string,
  ): number;
  function getCarBlockingCar(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarCharIsUsing(ped: NativePedHandle): Vehicle;
  function getCarColours(vehicle: NativeVehicle): number;
  function getCarCoordinates(vehicle: NativeVehicle): Vec3;
  function getCarDeformationAtPos(
    vehicle: NativeVehicle,
    coords: Vec3,
  ): NativeVehicleHandle;
  function getCarDoorLockStatus(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarForwardVector(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarForwardX(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarForwardY(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarHeading(vehicle: NativeVehicle): number;
  function getCarHealth(vehicle: NativeVehicle): number;
  function getCarLivery(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarMass(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarModel(vehicle: NativeVehicle): number;
  function getCarModelValue(vehicle: NativeVehicle): number;
  function getCarPitch(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarRoll(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCarSirenHealth(vehicle: NativeVehicle): number;
  function getCarSpeed(vehicle: NativeVehicle): number;
  function getCarSpeedVector(vehicle: NativeVehicle, toggle: boolean): number;
  function getCarUprightValue(vehicle: NativeVehicle): NativeVehicleHandle;
  function getCellphoneRanked(): number;
  function getCharAllowedToRunOnBoats(vehicle: NativeVehicle): unknown;
  function getCharAnimBlendAmount(
    ped: NativePed,
    text: string,
    text2: string,
  ): number;
  function getCharAnimCurrentTime(
    ped: NativePed,
    text: string,
    text2: string,
  ): number;
  function getCharAnimIsEvent(
    ped: NativePed,
    text: string,
    text2: string,
    toggle: boolean,
  ): unknown;
  function getCharAnimTotalTime(
    ped: NativePed,
    text: string,
    text2: string,
  ): number;
  function getCharArmour(ped: NativePed): number;
  function getCharCoordinates(ped: NativePed): number[];
  function getCharDrawableVariation(ped: NativePed, value: number): number;
  function getCharExtractedDisplacement(
    ped: NativePed,
    toggle: boolean,
  ): unknown;
  function getCharExtractedVelocity(ped: NativePed, toggle: boolean): unknown;
  function getCharGravity(ped: NativePed): unknown;
  function getCharHeading(ped: NativePed): number;
  function getCharHealth(ped: NativePed): number;
  function getCharHeightAboveGround(ped: NativePed): number;
  function getCharHighestPriorityEvent(ped: NativePed): unknown;
  function getCharInCarPassengerSeat(
    vehicle: NativeVehicle,
    value: number,
  ): NativePedHandle;
  function getCharMaxMoveBlendRatio(ped: NativePed): unknown;
  function getCharMeleeActionFlag0(ped: NativePed): unknown;
  function getCharMeleeActionFlag1(ped: NativePed): unknown;
  function getCharMeleeActionFlag2(ped: NativePed): unknown;
  function getCharModel(ped: NativePed): number;
  function getCharMoney(ped: NativePed): number;
  function getCharMoveAnimSpeedMultiplier(ped: NativePed): number;
  function getCharMovementAnimsBlocked(ped: NativePed): unknown;
  function getCharPropIndex(ped: NativePed, toggle: boolean): number;
  function getCharReadyToBeExecuted(ped: NativePed): unknown;
  function getCharReadyToBeStunned(ped: NativePed): unknown;
  function getCharSpeed(ped: NativePed): number;
  function getCharSwimState(ped: NativePed): number;
  function getCharTextureVariation(ped: NativePed, value: number): number;
  function getCharVelocity(ped: NativePed): unknown;
  function getCharWalkAlongsideLeaderWhenAppropriate(ped: NativePed): number;
  function getCharWeaponInSlot(ped: NativePed, value: number): number;
  function getCharWillCowerInsteadOfFleeing(ped: NativePed): number;
  function getCharWillTryToLeaveBoatAfterLeader(
    vehicle: NativeVehicle,
  ): unknown;
  function getCharWillTryToLeaveWater(ped: NativePed): unknown;
  function getCinematicCam(): unknown;
  function getClosestCar(
    coords: Vec3,
    value: number,
    toggle: boolean,
    value2: number,
  ): NativeVehicleHandle;
  function getClosestCarNode(coords: Vec3): NativeVehicleHandle;
  function getClosestCarNodeFavourDirection(
    value: number,
    coords: Vec3,
  ): NativeVehicleHandle;
  function getClosestCarNodeWithHeading(coords: Vec3): number;
  function getClosestChar(
    coords: Vec3,
    value: number,
    toggle: boolean,
    toggle2: boolean,
  ): unknown;
  function getClosestMajorCarNode(coords: Vec3): NativeVehicleHandle;
  function getClosestRoad(coords: Vec3, value: number, value2: number): unknown;
  function getClosestStealableObject(coords: Vec3, value: number): unknown;
  function getConsoleCommandToken(): string;
  function getControlValue(value: number, value2: number): unknown;
  function getCoordinatesForNetworkRestartNode(value: number): Vec3;
  function getCorrectedColour(
    value: number,
    value2: number,
    value3: number,
  ): number;
  function getCreateRandomCops(): unknown;
  function getCurrentBasicCopModel(): number;
  function getCurrentBasicPoliceCarModel(): number;
  function getCurrentCharWeapon(ped: NativePed): unknown;
  function getCurrentCopModel(): number;
  function getCurrentDate(): unknown;
  function getCurrentDayOfWeek(): unknown;
  function getCurrentEpisode(): number;
  function getCurrentLanguage(): unknown;
  function getCurrentPlaybackNumberForCar(vehicle: NativeVehicle): number;
  function getCurrentPoliceCarModel(): number;
  function getCurrentPopulationZoneType(): number;
  function getCurrentScriptedConversationLine(): unknown;
  function getCurrentStackSize(): unknown;
  function getCurrentStationForTrain(value: number): number;
  function getCurrentTaxiCarModel(): number;
  function getCurrentWeather(): unknown;
  function getCurrentWeatherFull(): unknown;
  function getCurrentZoneScumminess(): unknown;
  function getCutsceneAudioTimeMs(): number;
  function getCutscenePedPosition(value: number): Vec3;
  function getCutsceneSectionPlaying(): unknown;
  function getCutsceneTime(): number;
  function getDamageToPedBodyPart(
    ped: NativePed,
    value: number,
  ): NativePedHandle;
  function getDeadCarCoordinates(vehicle: NativeVehicle): Vec3;
  function getDeadCharPickupCoords(ped: NativePed): Vec3;
  function getDebugCam(): unknown;
  function getDestroyerOfNetworkId(value: number, value2: number): number;
  function getDisplayNameFromVehicleModel(value: number): string;
  function getDistanceBetweenCoords2d(coords: Vec2, coords2: Vec2): Vec3;
  function getDistanceBetweenCoords3d(coords: Vec3, coords2: Vec3): Vec3;
  function getDoorAngleRatio(handle: NativeVehicle, value: number): unknown;
  function getDriverOfCar(vehicle: NativeVehicle): NativePedHandle;
  function getEngineHealth(handle: number): number;
  function getEpisodeIndexFromSummons(): number;
  function getEpisodeName(value: number): string;
  function getExtraCarColours(vehicle: NativeVehicle): string;
  function getFilterMenuOn(): unknown;
  function getFilterSaveSetting(value: number): unknown;
  function getFirstBlipInfoId(value: number): number;
  function getFirstNCharactersOfLiteralString(
    text: string,
    value: number,
  ): string;
  function getFirstNCharactersOfString(text: string, value: number): string;
  function getFloatStat(value: number): unknown;
  function getFollowVehicleCamSubmode(): number;
  function getFragmentDamageHealthOfClosestObjectOfType(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
  ): number;
  function getFrameCount(): number;
  function getFrameTime(): number;
  function getFreeCam(): Camera;
  function getFrontendDesignValue(value: number): unknown;
  function getGameCam(): Camera;
  function getGameCamChild(): Camera;
  function getGamerNetworkScore(
    value: number,
    value2: number,
    value3: number,
  ): number;
  function getGameTimer(): number;
  function getGameViewportId(): number;
  function getGfwlHasSafeHouse(): unknown;
  function getGfwlIsReturningToSinglePlayer(): unknown;
  function getGroupCharDucksWhenAimedAt(ped: NativePed): unknown;
  function getGroupFormation(value: number): unknown;
  function getGroupFormationSpacing(value: number): unknown;
  function getGroupLeader(value: number): unknown;
  function getGroupMember(value: number, value2: number): unknown;
  function getGroupSize(value: number): unknown;
  function getHashKey(text: string): number;
  function getHeadingFromVector2d(coords: Vec2): number;
  function getHeightOfVehicle(
    vehicle: NativeVehicle,
    coords: Vec3,
    toggle: boolean,
    toggle2: boolean,
  ): number;
  function getHelpMessageBoxSize(): unknown;
  function getHostId(): number;
  function getHostMatchOn(): unknown;
  function getHoursOfDay(): number;
  function getHudColour(value: number): [number, number, number, number];
  function getIdOfThisThread(): number;
  function getInteriorAtCoords(coords: Vec3): Vec3;
  function getInteriorFromCar(vehicle: NativeVehicle): number;
  function getInteriorFromChar(ped: NativePed): number;
  function getInteriorHeading(value: number): number;
  function getIntStat(value: number): unknown;
  function getIsAutosaveOff(): unknown;
  function getIsDepositAnimRunning(): unknown;
  function getIsDisplayingsavemessage(): number;
  function getIsHidef(): number;
  function getIsProjectileTypeInArea(
    coords: Vec3,
    coords2: Vec3,
    value: number,
  ): number;
  function getIsStickyBombStuckToVehicle(
    vehicle: NativeVehicle,
  ): NativeVehicleHandle;
  function getIsWidescreen(): number;
  function getKeyboardMoveInput(): Vec2;
  function getKeyForCarInRoom(vehicle: NativeVehicle): number;
  function getKeyForCharInRoom(ped: NativePed): number;
  function getKeyForViewportInRoom(value: number): number;
  function getLatestConsoleCommand(): string;
  function getLeftPlayerCashToReachLevel(value: number): number;
  function getLengthOfLiteralString(text: string): string;
  function getLengthOfStringWithThisHashKey(value: number): string;
  function getLengthOfStringWithThisTextLabel(text: string): string;
  function getLineHeight(): number;
  function getLocalGamerlevelFromProfilesettings(): number;
  function getLocalPlayerMpCash(): number;
  function getLocalPlayerWeaponStat(value: number, value2: number): unknown;
  function getMapAreaFromCoords(coords: Vec3): Vec3;
  function getMaxAmmo(handle: number, value: number): number;
  function getMaxAmmoInClip(handle: number, value: number): number;
  function getMaximumNumberOfPassengers(handle: NativeVehicle): number;
  function getMaxWantedLevel(): number;
  function getMenuItemAccepted(value: number): unknown;
  function getMenuItemSelected(value: number): unknown;
  function getMenuPosition(value: number): Vec3;
  function getMinutesOfDay(): number;
  function getMinutesToTimeOfDay(value: number, value2: number): number;
  function getMissionFlag(): unknown;
  function getMobilePhoneRenderId(): number;
  function getMobilePhoneScale(): unknown;
  function getMobilePhoneTaskSubTask(handle: number): unknown;
  function getModelDimensions(value: number): [Vec3, Vec3];
  function getModelNameForDebug(value: number): string;
  function getModelPedIsHolding(ped: NativePed): number;
  function getMouseInput(): unknown;
  function getMousePosition(): Vec3;
  function getMouseSensitivity(): unknown;
  function getMouseWheel(): unknown;
  function getNameOfInfoZone(coords: Vec3): string;
  function getNameOfZone(coords: Vec3): string;
  function getNavmeshRouteResult(value: number): unknown;
  function getNearestCableCar(coords: Vec3, value: number): NativeVehicleHandle;
  function getNetworkIdFromPed(ped: NativePed): number;
  function getNetworkIdFromVehicle(vehicle: NativeVehicle): number;
  function getNetworkJoinFail(): number;
  function getNetworkTimer(): number;
  function getNextBlipInfoId(value: number): number;
  function getNextClosestCarNode(coords: Vec3): NativeVehicleHandle;
  function getNextClosestCarNodeFavourDirection(
    coords: Vec3,
  ): NativeVehicleHandle;
  function getNextClosestCarNodeWithHeading(coords: Vec3): number;
  function getNextClosestCarNodeWithHeadingOnIsland(coords: Vec3): number;
  function getNextStationForTrain(value: number): number;
  function getNoLawVehiclesDestroyedByLocalPlayer(): number;
  function getNoOfPlayersInTeam(value: number): number;
  function getNthClosestCarNode(
    coords: Vec3,
    value: number,
  ): NativeVehicleHandle;
  function getNthClosestCarNodeFavourDirection(
    value: number,
    coords: Vec3,
    value2: number,
  ): NativeVehicleHandle;
  function getNthClosestCarNodeWithHeading(coords: Vec3, value: number): number;
  function getNthClosestCarNodeWithHeadingOnIsland(
    coords: Vec3,
    value: number,
    value2: number,
  ): number;
  function getNthClosestWaterNodeWithHeading(
    coords: Vec3,
    toggle: boolean,
    toggle2: boolean,
  ): number;
  function getNthGroupMember(value: number, value2: number): unknown;
  function getNthIntegerInString(text: string, value: number): string;
  function getNumberLines(value: number, value2: number, text: string): number;
  function getNumberLinesWithLiteralStrings(
    value: number,
    value2: number,
    text: string,
    text2: string,
    text3: string,
  ): string;
  function getNumberLinesWithSubstrings(
    value: number,
    value2: number,
    text: string,
    text2: string,
    text3: string,
  ): string;
  function getNumberOfActiveStickyBombsOwnedByPed(ped: NativePed): number;
  function getNumberOfCharDrawableVariations(
    ped: NativePed,
    value: number,
  ): number;
  function getNumberOfCharTextureVariations(
    ped: NativePed,
    value: number,
    value2: number,
  ): number;
  function getNumberOfFiresInArea(coords: Vec3, coords2: Vec3): number;
  function getNumberOfFiresInRange(coords: Vec3, value: number): number;
  function getNumberOfFollowers(handle: number): number;
  function getNumberOfInjuredPedsInRange(coords: Vec3, value: number): number;
  function getNumberOfInstancesOfStreamedScript(text: string): number;
  function getNumberOfPassengers(handle: NativeVehicle): number;
  function getNumberOfPlayers(): number;
  function getNumberOfStickyBombsStuckToVehicle(vehicle: NativeVehicle): number;
  function getNumberOfWebPageLinks(value: number): number;
  function getNumCarColours(vehicle: NativeVehicle): number;
  function getNumCarLiveries(vehicle: NativeVehicle): number;
  function getNumOfModelsKilledByPlayer(value: number, value2: number): number;
  function getNumStreamingRequests(): number;
  function getObjectFromNetworkId(value: number): NativeObjectHandle;
  function getObjectPedIsHolding(ped: NativePed): NativeObjectHandle;
  function getOffsetFromCarGivenWorldCoords(
    vehicle: NativeVehicle,
    coords: Vec3,
  ): Vec3;
  function getOffsetFromCarInWorldCoords(
    vehicle: NativeVehicle,
    coords: Vec3,
  ): Vec3;
  function getOffsetFromCharInWorldCoords(ped: NativePed, coords: Vec3): Vec3;
  function getOffsetFromInteriorInWorldCoords(
    value: number,
    coords: Vec3,
  ): Vec3;
  function getOffsetsForAttachCarToCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): [Vec3, Vec3];
  function getOnlineLan(): number;
  function getOnlineScore(value: number): number;
  function getPadPitchRoll(value: number): Vec2;
  function getPadState(value: number, value2: number): number;
  function getPedBonePosition(
    ped: NativePed,
    bone: ePedBone,
    coords: Vec3,
  ): Vec3;
  function getPedClimbState(ped: NativePed): number;
  function getPedFromNetworkId(value: number): NativePedHandle;
  function getPedGroupIndex(ped: NativePed): number;
  function getPedModelFromIndex(value: number): number;
  function getPedPathMayDropFromHeight(ped: NativePed): number;
  function getPedPathMayUseClimbovers(ped: NativePed): NativePedHandle;
  function getPedPathMayUseLadders(ped: NativePed): NativePedHandle;
  function getPedPathWillAvoidDynamicObjects(ped: NativePed): number;
  function getPedSteersAroundObjects(ped: NativePed): NativePedHandle;
  function getPedSteersAroundPeds(ped: NativePed): NativePedHandle;
  function getPedType(ped: NativePed): number;
  function getPetrolTankHealth(handle: number): number;
  function getPhysicalScreenResolution(): Vec2;
  function getPlaneUndercarriagePosition(vehicle: NativeVehicle): Vec3;
  function getPlayerChar(value: number): NativePedHandle;
  function getPlayerColour(value: number): number;
  function getPlayerGroup(value: number): unknown;
  function getPlayerHasTracks(): unknown;
  function getPlayerId(): NativePlayerHandle;
  function getPlayerIdForThisPed(ped: NativePed): number;
  function getPlayerMaxArmour(value: NativePlayer): number;
  function getPlayerMaxHealth(value: NativePlayer): number;
  function getPlayerName(value: number): string;
  function getPlayerRadioMode(): number;
  function getPlayerRadioStationIndex(): number;
  function getPlayerRadioStationName(): string;
  function getPlayerRadioStationNameRoll(): string;
  function getPlayerRankLevelDuringMp(value: number): number;
  function getPlayerRgbColour(value: number): [number, number, number];
  function getPlayersettingsModelChoice(): number;
  function getPlayersLastCarNoSave(): NativeVehicleHandle;
  function getPlayerTeam(value: number): number;
  function getPlayerWantedLevelIncrement(value: number): number;
  function getPositionOfAnalogueSticks(value: number): [Vec2, Vec2];
  function getPositionOfCarRecordingAtTime(value: number, value2: number): Vec3;
  function getProfileSetting(value: number): number;
  function getProgressPercentage(): number;
  function getRadarViewportId(): number;
  function getRadioName(value: number): string;
  function getRandomCarBackBumperInSphere(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): NativeVehicleHandle;
  function getRandomCarFrontBumperInSphereNoSave(
    coords: Vec3,
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): NativeVehicleHandle;
  function getRandomCarInSphere(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): NativeVehicleHandle;
  function getRandomCarInSphereNoSave(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
  ): NativeVehicleHandle;
  function getRandomCarModelInMemory(toggle: boolean): number;
  function getRandomCarNode(
    coords: Vec3,
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): NativeVehicleHandle;
  function getRandomCarNodeIncludeSwitchedOffNodes(
    coords: Vec3,
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): number;
  function getRandomCarOfTypeInAngledAreaNoSave(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): number;
  function getRandomCarOfTypeInAreaNoSave(
    coords: Vec2,
    coords2: Vec2,
    value: number,
  ): number;
  function getRandomCharInAreaOffsetNoSave(coords: Vec3, coords2: Vec3): Vec3;
  function getRandomWaterNode(
    coords: Vec3,
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
  ): unknown;
  function getReturnToFilterMenu(): unknown;
  function getRoomKeyFromPickup(value: number): number;
  function getRootCam(): unknown;
  function getRouteSize(): unknown;
  function getSafePickupCoords(coords: Vec3): Vec3;
  function getSafePositionForChar(coords: Vec3, toggle: boolean): Vec3;
  function getScreenFadeAlpha(): number;
  function getScreenResolution(): unknown;
  function getScreenViewportId(): number;
  function getScriptCam(): unknown;
  function getScriptDrawCam(): unknown;
  function getScriptFireCoords(value: number): Vec3;
  function getScriptRendertargetRenderId(): number;
  function getScriptTaskStatus(handle: number, value: number): unknown;
  function getSequenceProgress(value: number): number;
  function getServerId(): number;
  function getSimpleBlipId(): number;
  function getSoundId(): number;
  function getSoundLevelAtCoords(handle: number, coords: Vec3): Vec3;
  function getSpeechForEmergencyServiceCall(): unknown;
  function getStartFromFilterMenu(): unknown;
  function getStateOfClosestDoorOfType(value: number, coords: Vec3): number;
  function getStatFrontendDisplayType(value: number): number;
  function getStatFrontendVisibility(value: number): unknown;
  function getStaticEmitterPlaytime(value: number): number;
  function getStationName(value: number, value2: number): string;
  function getStreamBeatInfo(): unknown;
  function getStreamPlaytime(): number;
  function getStringFromHashKey(value: number): string;
  function getStringFromString(
    text: string,
    value: number,
    value2: number,
  ): string;
  function getStringFromTextFile(text: string): string;
  function getStringWidth(text: string): string;
  function getStringWidthWithNumber(text: string, value: number): string;
  function getStringWidthWithString(text: string, text2: string): string;
  function getStringWidthWithTextAndInt(
    text: string,
    text2: string,
    value: number,
  ): string;
  function getTaskPlaceCarBombUnsuccessful(): NativeVehicleHandle;
  function getTeamRgbColour(value: number): [number, number, number];
  function getTextInputActive(): string;
  function getTexture(value: number, text: string): string;
  function getTextureFromStreamedTxd(text: string, text2: string): string;
  function getTextureResolution(value: number): Vec2;
  function getTimeOfDay(): [number, number];
  function getTimeSinceLastArrest(): number;
  function getTimeSinceLastDeath(): number;
  function getTimeSincePlayerDroveAgainstTraffic(value: number): number;
  function getTimeSincePlayerDroveOnPavement(value: number): number;
  function getTimeSincePlayerHitBuilding(value: number): number;
  function getTimeSincePlayerHitCar(value: number): number;
  function getTimeSincePlayerHitObject(value: number): number;
  function getTimeSincePlayerHitPed(value: number): number;
  function getTimeSincePlayerRanLight(value: number): number;
  function getTimeTilNextStation(handle: number): number;
  function getTotalDurationOfCarRecording(value: number): number;
  function getTotalNumberOfStats(): number;
  function getTrainCaboose(vehicle: NativeVehicle): NativeTrainHandle;
  function getTrainCarriage(
    vehicle: NativeVehicle,
    value: number,
  ): NativeTrainHandle;
  function getTrainPlayerWouldEnter(value: number): unknown;
  function getTxd(text: string): unknown;
  function getVehicleComponentInfo(
    vehicle: NativeVehicle,
    value: number,
    toggle: boolean,
  ): number;
  function getVehicleDirtLevel(vehicle: NativeVehicle): number;
  function getVehicleEngineRevs(vehicle: NativeVehicle): number;
  function getVehicleFromNetworkId(value: number): NativeVehicleHandle;
  function getVehicleGear(vehicle: NativeVehicle): number;
  function getVehicleModelFromIndex(value: number): number;
  function getVehiclePlayerWouldEnter(value: number): number;
  function getVehicleQuaternion(
    vehicle: NativeVehicle,
  ): [number, number, number, number];
  function getVehicleTypeOfModel(value: number): number;
  function getViewportPosAndSize(value: number): [Vec2, Vec2];
  function getViewportPositionOfCoord(coords: Vec3, value: number): Vec2;
  function getWaterHeight(coords: Vec3): number | false;
  function getWaterHeightNoWaves(coords: Vec3): number | false;
  function getWeapontypeModel(value: number): number;
  function getWeapontypeSlot(value: number): number;
  function getWebPageHeight(value: number): number;
  function getWebPageLinkAtPosn(value: number, coords: Vec2): unknown;
  function getWebPageLinkHref(value: number, value2: number): string;
  function getWebPageLinkPosn(value: number, value2: number): Vec2;
  function getWidthOfLiteralString(text: string): string;
  function giveDelayedWeaponToChar(
    ped: NativePed,
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function givePedAmbientObject(ped: NativePed, value: number): void;
  function givePedFakeNetworkName(
    ped: NativePed,
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function givePedHelmet(ped: NativePed): void;
  function givePedHelmetWithOpts(ped: NativePed, toggle: boolean): void;
  function givePlayerRagdollControl(value: number, toggle: boolean): void;
  function giveWeaponToChar(
    ped: NativePed,
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function grabNearbyObjectWithSpecialAttribute(value: number): void;
  function handleAudioAnimEvent(handle: number, text: string): unknown;
  function handVehicleControlBackToPlayer(vehicle: NativeVehicle): unknown;
  function hasAchievementBeenPassed(value: number): boolean;
  function hasAdditionalTextLoaded(value: number): boolean;
  function hasCarBeenDamagedByCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function hasCarBeenDamagedByChar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function hasCarBeenDamagedByWeapon(
    vehicle: NativeVehicle,
    value: number,
  ): boolean;
  function hasCarBeenDroppedOff(vehicle: NativeVehicle): boolean;
  function hasCarBeenResprayed(vehicle: NativeVehicle): boolean;
  function hasCarRecordingBeenLoaded(value: number): boolean;
  function hasCarStoppedBecauseOfLight(vehicle: NativeVehicle): boolean;
  function hasCharAnimFinished(
    ped: NativePed,
    text: string,
    text2: string,
  ): boolean;
  function hasCharBeenArrested(ped: NativePed): boolean;
  function hasCharBeenDamagedByCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function hasCharBeenDamagedByChar(
    ped: NativePed,
    otherPed: NativePed,
    checkDamagerVehicle: boolean,
  ): boolean;
  function hasCharBeenDamagedByWeapon(ped: NativePed, value: number): boolean;
  function hasCharBeenPhotographed(ped: NativePed): boolean;
  function hasCharGotWeapon(ped: NativePed, value: number): boolean;
  function hasCharSpottedChar(ped: NativePed, ped2: NativePed): boolean;
  function hasCharSpottedCharInFront(ped: NativePed, ped2: NativePed): boolean;
  function hasClosestObjectOfTypeBeenDamagedByCar(
    coords: Vec3,
    value: number,
    value2: number,
    vehicle: NativeVehicle,
  ): boolean;
  function hasClosestObjectOfTypeBeenDamagedByChar(
    coords: Vec3,
    value: number,
    value2: number,
    ped: NativePed,
  ): boolean;
  function hasCollisionForModelLoaded(value: number): boolean;
  function hasControlOfNetworkId(value: number): boolean;
  function hasCutsceneFinished(): boolean;
  function hasCutsceneLoaded(): boolean;
  function hasDeatharrestExecuted(): boolean;
  function hasFragmentRootOfClosestObjectOfTypeBeenDamaged(
    coords: Vec3,
    value: number,
    value2: number,
  ): boolean;
  function hasGamerChangedNetworkModelSettings(): boolean;
  /**
   * Returns true if the model has loaded and is available to use.
   * @param {number} hash The model hash.
   * @returns {boolean} True if the model has loaded, false otherwise.
   */
  function hasModelLoaded(hash: number): boolean;
  function hasNetworkPlayerLeftGame(value: number): boolean;
  function hasOverridenSitIdleAnimFinished(handle: number): boolean;
  function hasPlayerDamagedAtLeastOnePed(value: number): boolean;
  function hasPlayerDamagedAtLeastOneVehicle(value: number): boolean;
  function hasReloadedWithMotionControl(value: number): boolean;
  function hasResprayHappened(): boolean;
  function hasScriptLoaded(text: string): boolean;
  function hasSoundFinished(value: number): boolean;
  function hasStreamedTxdLoaded(text: string): boolean;
  function hasThisAdditionalTextLoaded(text: string, value: number): boolean;
  function haveAnimsLoaded(text: string): boolean;
  function haveRequestedPathNodesBeenLoaded(value: number): boolean;
  function heliAudioShouldSkipStartup(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): unknown;
  function hideCharWeaponForScriptedCutscene(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function hideHelpTextThisFrame(): void;
  function hideHudAndRadarThisFrame(): void;
  function highFallScream(handle: number): unknown;
  function highlightMenuItem(
    value: number,
    value2: number,
    toggle: boolean,
  ): unknown;
  function hintCam(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function howLongHasNetworkPlayerBeenDeadFor(value: number): unknown;
  function improveLowPerformanceMissionPerFrameFlag(): unknown;
  function increasePlayerMaxArmour(value: number, value2: number): unknown;
  function increasePlayerMaxHealth(value: number, value2: number): unknown;
  function incrementFloatStat(value: number, value2: number): unknown;
  function incrementFloatStatNoMessage(value: number, value2: number): unknown;
  function incrementIntStat(value: number, value2: number): unknown;
  function incrementIntStatNoMessage(value: number, value2: number): unknown;
  function initCutscene(text: string): unknown;
  function initDebugWidgets(): unknown;
  function initFrontendHelperText(): unknown;
  function isAmbientSpeechDisabled(handle: number): boolean;
  function isAmbientSpeechPlaying(handle: number): boolean;
  function isAnyCharShootingInArea(
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): boolean;
  function isAnyPickupAtCoords(coords: Vec3): boolean;
  function isAnySpeechPlaying(handle: number): boolean;
  function isAreaOccupied(
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
    toggle5: boolean,
  ): boolean;
  function isAutoAimingOn(): boolean;
  function isAutoSaveInProgress(): boolean;
  function isBigVehicle(vehicle: NativeVehicle): boolean;
  function isBitSet(value: number, value2: number): boolean;
  function isBlipShortRange(value: number): boolean;
  function isBulletInArea(
    coords: Vec3,
    value: number,
    toggle: boolean,
  ): boolean;
  function isBulletInBox(coords: Vec3, coords2: Vec3, toggle: boolean): boolean;
  function isButtonJustPressed(value: number, value2: number): boolean;
  function isButtonPressed(value: number, value2: number): boolean;
  function isCamActive(value: number): boolean;
  function isCamHappy(value: number): boolean;
  function isCamInterpolating(): boolean;
  function isCamPropagating(value: number): boolean;
  function isCamSequenceComplete(value: number): boolean;
  function isCamShaking(): boolean;
  function isCarAMissionCar(vehicle: NativeVehicle): boolean;
  function isCarAttached(vehicle: NativeVehicle): boolean;
  function isCarDead(vehicle: NativeVehicle): boolean;
  function isCarDoorDamaged(vehicle: NativeVehicle, value: number): boolean;
  function isCarDoorFullyOpen(vehicle: NativeVehicle, value: number): boolean;
  function isCarHealthGreater(vehicle: NativeVehicle, value: number): boolean;
  function isCarInAirProper(vehicle: NativeVehicle): boolean;
  function isCarInArea2d(
    vehicle: NativeVehicle,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): boolean;
  function isCarInArea3d(
    vehicle: NativeVehicle,
    coords: Vec3,
    coords2: Vec3,
    value: number,
  ): boolean;
  function isCarInGarageArea(text: string, vehicle: NativeVehicle): boolean;
  function isCarInWater(vehicle: NativeVehicle): boolean;
  function isCarLowRider(vehicle: NativeVehicle): boolean;
  function isCarModel(vehicle: NativeVehicle, value: number): boolean;
  function isCarOnFire(vehicle: NativeVehicle): boolean;
  function isCarOnScreen(vehicle: NativeVehicle): boolean;
  function isCarPassengerSeatFree(
    vehicle: NativeVehicle,
    value: number,
  ): boolean;
  function isCarPlayingAnim(
    vehicle: NativeVehicle,
    text: string,
    text2: string,
  ): boolean;
  function isCarSirenOn(vehicle: NativeVehicle): boolean;
  function isCarStopped(vehicle: NativeVehicle): boolean;
  function isCarStoppedAtTrafficLights(vehicle: NativeVehicle): boolean;
  function isCarStreetRacer(vehicle: NativeVehicle): boolean;
  function isCarStuck(vehicle: NativeVehicle): boolean;
  function isCarStuckOnRoof(vehicle: NativeVehicle): boolean;
  function isCarTouchingCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function isCarTyreBurst(vehicle: NativeVehicle, value: number): boolean;
  function isCarUpright(vehicle: NativeVehicle): boolean;
  function isCarUpsidedown(vehicle: NativeVehicle): boolean;
  function isCarWaitingForWorldCollision(vehicle: NativeVehicle): boolean;
  function isCharArmed(ped: NativePed, value: number): boolean;
  function isCharDead(ped: NativePed): boolean;
  function isCharDucking(ped: NativePed): boolean;
  function isCharFacingChar(
    ped: NativePed,
    ped2: NativePed,
    value: number,
  ): boolean;
  function isCharFatallyInjured(ped: NativePed): boolean;
  function isCharGesturing(ped: NativePed): boolean;
  function isCharGettingInToACar(vehicle: NativeVehicle): boolean;
  function isCharGettingUp(ped: NativePed): boolean;
  function isCharHealthGreater(ped: NativePed, value: number): boolean;
  function isCharInAir(ped: NativePed): boolean;
  function isCharInAngledArea2d(
    ped: NativePed,
    coords: Vec2,
    coords2: Vec2,
    value: number,
    toggle: boolean,
  ): boolean;
  function isCharInAngledArea3d(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec3,
    value: number,
    toggle: boolean,
  ): boolean;
  function isCharInAnyBoat(ped: NativePed): boolean;
  function isCharInAnyCar(ped: NativePed): boolean;
  function isCharInAnyHeli(ped: NativePed): boolean;
  function isCharInAnyPlane(ped: NativePed): boolean;
  function isCharInAnyPoliceVehicle(ped: NativePed): boolean;
  function isCharInAnyTrain(ped: NativePed): boolean;
  function isCharInArea2d(
    ped: NativePed,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): boolean;
  function isCharInArea3d(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): boolean;
  function isCharInAreaOnFoot2d(
    ped: NativePed,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): boolean;
  function isCharInCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function isCharInFlyingVehicle(vehicle: NativeVehicle): boolean;
  function isCharInjured(ped: NativePed): boolean;
  function isCharInMeleeCombat(ped: NativePed): boolean;
  function isCharInModel(ped: NativePed, value: number): boolean;
  function isCharInTaxi(vehicle: NativeVehicle): boolean;
  function isCharInWater(ped: NativePed): boolean;
  function isCharInZone(ped: NativePed, text: string): boolean;
  function isCharMale(ped: NativePed): boolean;
  function isCharModel(ped: NativePed, value: number): boolean;
  function isCharOnAnyBike(vehicle: NativeVehicle): boolean;
  function isCharOnFire(ped: NativePed): boolean;
  function isCharOnFoot(ped: NativePed): boolean;
  function isCharOnScreen(ped: NativePed): boolean;
  function isCharPlayingAnim(
    ped: NativePed,
    text: string,
    text2: string,
  ): boolean;
  function isCharRespondingToAnyEvent(ped: NativePed): boolean;
  function isCharRespondingToEvent(ped: NativePed, value: number): boolean;
  function isCharShooting(ped: NativePed): boolean;
  function isCharShootingInArea(
    ped: NativePed,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): boolean;
  function isCharSittingIdle(ped: NativePed): boolean;
  function isCharSittingInAnyCar(ped: NativePed): boolean;
  function isCharSittingInCar(
    ped: NativePedHandle,
    vehicle2: NativeVehicle,
  ): boolean;
  function isCharStopped(ped: NativePed): boolean;
  function isCharStuckUnderCar(vehicle: NativeVehicle): boolean;
  function isCharSwimming(ped: NativePed): boolean;
  function isCharTouchingChar(ped: NativePed, ped2: NativePed): boolean;
  function isCharTouchingVehicle(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function isCharTryingToEnterALockedCar(vehicle: NativeVehicle): boolean;
  function isCharUsingAnyScenario(ped: NativePed): boolean;
  function isCharUsingMapAttractor(ped: NativePed): boolean;
  function isCharUsingScenario(ped: NativePed, text: string): boolean;
  function isCharVisible(ped: NativePed): boolean;
  function isCharWaitingForWorldCollision(ped: NativePed): boolean;
  function isClosestObjectOfTypeSmashedOrDamaged(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
    toggle2: boolean,
  ): boolean;
  function isControlJustPressed(value: number, value2: number): boolean;
  function isControlPressed(value: number, value2: number): boolean;
  function isCopPedInArea3dNoSave(coords: Vec3, coords2: Vec3): boolean;
  function isCopVehicleInArea3dNoSave(coords: Vec3, coords2: Vec3): boolean;
  function isDebugCameraOn(): boolean;
  function isEmergencyServicesVehicle(vehicle: NativeVehicle): boolean;
  function isEpisodeAvailable(value: number): boolean;
  function isEpisodicDiscBuild(): boolean;
  function isExplosionInArea(
    value: number,
    coords: Vec3,
    coords2: Vec3,
  ): boolean;
  function isExplosionInSphere(
    value: number,
    coords: Vec3,
    value2: number,
  ): boolean;
  function isFollowVehicleCamOffsetActive(): boolean;
  function isFontLoaded(value: number): boolean;
  function isFrontendFading(): boolean;
  function isGameInControlOfMusic(): boolean;
  function isGameKeyboardKeyJustPressed(value: number): boolean;
  function isGameKeyboardKeyPressed(value: number): boolean;
  function isGameKeyboardNavDownPressed(toggle: boolean): boolean;
  function isGameKeyboardNavLeftPressed(toggle: boolean): boolean;
  function isGameKeyboardNavRightPressed(toggle: boolean): boolean;
  function isGameKeyboardNavUpPressed(toggle: boolean): boolean;
  function isGarageClosed(text: string): boolean;
  function isGarageOpen(text: string): boolean;
  function isGroupLeader(handle: number, value: number): boolean;
  function isGroupMember(handle: number, value: number): boolean;
  function isHeliPartBroken(
    vehicle: NativeVehicle,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): boolean;
  function isHelpMessageBeingDisplayed(): boolean;
  function isHintRunning(): boolean;
  function isHudPreferenceSwitchedOn(): boolean;
  function isHudReticuleComplex(): boolean;
  function isInCarFireButtonPressed(): boolean;
  function isInLanMode(): boolean;
  function isInPlayerSettingsMenu(): boolean;
  function isInSpectatorMode(): boolean;
  function isInteriorScene(): boolean;
  function isJapaneseVersion(): boolean;
  function isKeyboardKeyJustPressed(value: number): boolean;
  function isKeyboardKeyPressed(value: number): boolean;
  function isLazlowStationLocked(): boolean;
  function isLcpdDataValid(): boolean;
  function isLookInverted(): boolean;
  function isMemoryCardInUse(): boolean;
  function isMessageBeingDisplayed(): boolean;
  function isMinigameInProgress(): boolean;
  function isMissionCompletePlaying(): boolean;
  function isMobilePhoneCallOngoing(): boolean;
  function isMobilePhoneRadioActive(): boolean;
  function isModelInCdimage(value: number): boolean;
  function isMoneyPickupAtCoords(coords: Vec3): boolean;
  function isMouseButtonJustPressed(value: number): boolean;
  function isMouseButtonPressed(value: number): boolean;
  function isMouseUsingVerticalInversion(): boolean;
  function isNetworkGamePending(): boolean;
  function isNetworkGameRunning(): boolean;
  function isNetworkPlayerActive(value: number): boolean;
  function isNetworkSession(): boolean;
  function isNextStationAllowed(handle: number): boolean;
  function isNonFragObjectSmashed(
    coords: Vec3,
    value: number,
    value2: number,
  ): boolean;
  function isNumlockEnabled(): boolean;
  function isObjectReassignmentInProgress(): boolean;
  function isOurPlayerHigherPriorityForCarGeneration(value: number): boolean;
  function isPainPlaying(handle: number): boolean;
  function isPartyMode(): boolean;
  function isPauseMenuActive(): boolean;
  function isPayNSprayActive(): boolean;
  function isPcUsingJoypad(): boolean;
  function isPcVersion(): boolean;
  function isPedAMissionPed(ped: NativePed): boolean;
  function isPedAttachedToAnyCar(vehicle: NativeVehicle): boolean;
  function isPedBeingJacked(ped: NativePed): boolean;
  function isPedClimbing(ped: NativePed): boolean;
  function isPedDoingDriveby(ped: NativePed): boolean;
  function isPedFleeing(ped: NativePed): boolean;
  function isPedHoldingAnObject(ped: NativePed): boolean;
  function isPedInCombat(ped: NativePed): boolean;
  function isPedInCover(ped: NativePed): boolean;
  function isPedInCutsceneBlockingBounds(ped: NativePed): boolean;
  function isPedInGroup(ped: NativePed): boolean;
  function isPedJacking(ped: NativePed): boolean;
  function isPedLookingAtCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): boolean;
  function isPedLookingAtPed(ped: NativePed, ped2: NativePed): boolean;
  function isPedPinnedDown(ped: NativePed): boolean;
  function isPedRagdoll(ped: NativePed): boolean;
  function isPedRetreating(ped: NativePed): boolean;
  function isPedsVehicleHot(vehicle: NativeVehicle): boolean;
  function isPlaceCarBombActive(): boolean;
  function isPlaybackGoingOnForCar(vehicle: NativeVehicle): boolean;
  function isPlayerBeingArrested(): boolean;
  function isPlayerClimbing(value: number): boolean;
  function isPlayerControlOn(value: number): boolean;
  function isPlayerDead(value: number): boolean;
  function isPlayerFreeAimingAtChar(value: number, ped: NativePed): boolean;
  function isPlayerFreeForAmbientTask(value: number): boolean;
  function isPlayerInRemoteMode(value: number): boolean;
  function isPlayerOnline(): boolean;
  function isPlayerPerformingStoppie(value: number): boolean;
  function isPlayerPerformingWheelie(value: number): boolean;
  function isPlayerPlaying(value: number): boolean;
  function isPlayerPressingHorn(value: number): boolean;
  function isPlayerReadyForCutscene(value: number): boolean;
  function isPlayerScriptControlOn(value: number): boolean;
  function isPlayerSignedInLocally(): boolean;
  function isPlayerTargettingAnything(value: number): boolean;
  function isPlayerTargettingChar(value: number, ped: NativePed): boolean;
  function isPlayerVehicleEntryDisabled(value: number): boolean;
  function isPointObscuredByAMissionEntity(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): boolean;
  function isPosInCutsceneBlockingBounds(coords: Vec3): boolean;
  function isProjectileInArea(coords: Vec3, coords2: Vec3): boolean;
  function isRadioHudOn(): boolean;
  function isRadioRetuning(): boolean;
  function isRelationshipSet(
    value: number,
    value2: number,
    value3: number,
  ): boolean;
  function isReplaySaving(): boolean;
  function isReplaySystemSaving(): boolean;
  function isScoreGreater(value: number, value2: number): boolean;
  function isScreenFadedIn(): boolean;
  function isScreenFadedOut(): boolean;
  function isScreenFading(): boolean;
  function isScreenFadingIn(): boolean;
  function isScreenFadingOut(): boolean;
  function isScriptedConversationOngoing(): boolean;
  function isScriptedSpeechPlaying(handle: number): boolean;
  function isScriptFireExtinguished(value: number): boolean;
  function isSittingObjectNear(coords: Vec3, value: number): boolean;
  function isSniperInverted(): boolean;
  function isSpecificCamInterpolating(value: number): boolean;
  function isStreamingAdditionalText(value: number): boolean;
  function isStreamingPriorityRequests(): boolean;
  function isStreamingThisAdditionalText(
    text: string,
    value: number,
    value2: number,
  ): boolean;
  function isStringNull(text: string): boolean;
  function isSystemUiShowing(): boolean;
  function isThisAMinigameScript(): boolean;
  function isThisHelpMessageBeingDisplayed(text: string): boolean;
  function isThisHelpMessageWithNumberBeingDisplayed(
    text: string,
    value: number,
  ): boolean;
  function isThisHelpMessageWithStringBeingDisplayed(
    text: string,
    text2: string,
  ): boolean;
  function isThisMachineTheServer(): boolean;
  function isThisModelABike(value: number): boolean;
  function isThisModelABoat(value: number): boolean;
  function isThisModelACar(value: number): boolean;
  function isThisModelAHeli(value: number): boolean;
  function isThisModelAPed(value: number): boolean;
  function isThisModelAPlane(value: number): boolean;
  function isThisModelATrain(value: number): boolean;
  function isThisModelAVehicle(value: number): boolean;
  function isThisPedAPlayer(ped: NativePed): boolean;
  function isThreadActive(value: number): boolean;
  function isUsingController(): boolean;
  function isVehDriveable(handle: number): boolean;
  function isVehicleExtraTurnedOn(
    vehicle: NativeVehicle,
    value: number,
  ): boolean;
  function isVehicleOnAllWheels(vehicle: NativeVehicle): boolean;
  function isVehStuck(
    handle: number,
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): boolean;
  function isVehWindowIntact(handle: number, value: number): boolean;
  function isViewportActive(value: number): boolean;
  function isWantedLevelGreater(value: number, value2: number): boolean;
  function isWorldPointWithinBrainActivationRange(): boolean;
  function isXbox360Version(): boolean;
  function knockPedOffBike(vehicle: NativeVehicle): unknown;
  function launchLocalPlayerInNetworkGame(): unknown;
  function limitAngle(value: number): unknown;
  function limitTwoPlayerDistance(value: number): unknown;
  function line(coords: Vec3, coords2: Vec3): unknown;
  function listenToPlayerGroupCommands(
    handle: number,
    toggle: boolean,
  ): unknown;
  function loadAdditionalText(text: string, value: number): void;
  function loadAllObjectsNow(): void;
  function loadAllPathNodes(toggle: boolean): void;
  function loadCharDecisionMaker(value: number): void;
  function loadCombatDecisionMaker(value: number): void;
  function loadPathNodesInArea(coords: Vec3, value: number): void;
  function loadScene(coords: Vec3): void;
  function loadSceneForRoomByKey(value: number, value2: number): void;
  function loadSettings(): void;
  function loadTextFont(value: number): void;
  function loadTxd(text: string): void;
  function loadWebPage(value: number, text: string): void;
  function localPlayerIsReadyToStartPlaying(): unknown;
  function locateCar2d(
    vehicle: NativeVehicle,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCar3d(
    vehicle: NativeVehicle,
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharAnyMeans2d(
    ped: NativePed,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharAnyMeans3d(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharAnyMeansCar2d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharAnyMeansCar3d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharAnyMeansChar2d(
    ped: NativePed,
    ped2: NativePed,
    coords: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharAnyMeansChar3d(
    ped: NativePed,
    ped2: NativePed,
    coords: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharInCar2d(
    vehicle: NativeVehicle,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharInCar3d(
    vehicle: NativeVehicle,
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharInCarCar2d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharInCarCar3d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharInCarChar2d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharInCarChar3d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharOnFoot2d(
    ped: NativePed,
    coords: Vec2,
    coords2: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharOnFoot3d(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharOnFootCar2d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharOnFootCar3d(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec3,
    toggle: boolean,
  ): unknown;
  function locateCharOnFootChar2d(
    ped: NativePed,
    ped2: NativePed,
    coords: Vec2,
    toggle: boolean,
  ): unknown;
  function locateCharOnFootChar3d(
    ped: NativePed,
    ped2: NativePed,
    coords: Vec3,
    toggle: boolean,
  ): unknown;
  function locateDeadCar3d(
    vehicle: NativeVehicle,
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): unknown;
  function lockCarDoors(vehicle: NativeVehicle, value: number): void;
  function lockLazlowStation(): void;
  function lockPlayerSettingsGenreChange(value: number): void;
  function loopRaceTrack(toggle: boolean): unknown;
  function m(value: number, value2: number): unknown;
  function maintainFlashingStarAfterOffence(
    value: number,
    toggle: boolean,
  ): unknown;
  function makePlayerFireProof(value: number, toggle: boolean): unknown;
  function makePlayerGangDisappear(): unknown;
  function makePlayerGangReappear(): unknown;
  function makePlayerSafeForCutscene(value: number): unknown;
  function markCarAsConvoyCar(vehicle: NativeVehicle, toggle: boolean): void;
  function markCarAsNoLongerNeeded(): void;
  function markCharAsNoLongerNeeded(): void;
  function markMissionTrainAsNoLongerNeeded(value: number): void;
  function markMissionTrainsAsNoLongerNeeded(): void;
  function markModelAsNoLongerNeeded(value: number): void;
  function markObjectAsNoLongerNeeded(): void;
  function markRoadNodeAsDontWander(coords: Vec3): void;
  function markScriptAsNoLongerNeeded(text: string): void;
  function markStreamedTxdAsNoLongerNeeded(text: string): void;
  function missionAudioBankNoLongerNeeded(): unknown;
  function modifyCharMoveState(ped: NativePed, value: number): unknown;
  function mpGetAmountOfAnchorPoints(handle: number, value: number): unknown;
  function mpGetAmountOfVariationComponent(
    handle: number,
    value: number,
  ): unknown;
  function mpGetPreferenceValue(value: number): unknown;
  function mpGetPropSetup(
    handle: number,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function mpGetVariationSetup(
    handle: number,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function mpSetPreferenceValue(value: number, value2: number): unknown;
  function muteGameworldAndPositionedRadioForTv(toggle: boolean): unknown;
  function muteGameworldAudio(toggle: boolean): unknown;
  function mutePositionedRadio(toggle: boolean): unknown;
  function muteStaticEmitter(value: number, toggle: boolean): unknown;
  function newMobilePhoneCall(): unknown;
  function newScriptedConversation(): unknown;
  function obfuscateInt(value: number, value2: number): unknown;
  function obfuscateString(text: string): unknown;
  function onFireScream(handle: number): unknown;
  function openCarDoor(vehicle: NativeVehicle, value: number): void;
  function openDebugFile(): void;
  function openGarage(text: string): void;
  function openSequenceTask(): void;
  function overrideFreezeFlags(toggle: boolean): unknown;
  function overrideNextRestart(coords: Vec3, value: number): unknown;
  function overrideNumberOfParkedCars(value: number): unknown;
  function panicScream(handle: number): unknown;
  function pauseGame(): void;
  function pausePlaybackRecordedCar(vehicle: NativeVehicle): void;
  function pauseScriptedConversation(toggle: boolean): void;
  function pedQueueConsiderPedsWithFlagFalse(value: number): unknown;
  function pedQueueConsiderPedsWithFlagTrue(value: number): unknown;
  function pedQueueRejectPedsWithFlagFalse(value: number): unknown;
  function pedQueueRejectPedsWithFlagTrue(value: number): unknown;
  function pickupsPassTime(value: number): unknown;
  function planeStartsInAir(vehicle: NativeVehicle): unknown;
  function playAudioEvent(text: string): void;
  function playAudioEventFromPed(text: string, ped: NativePed): void;
  function playAudioEventFromVehicle(
    text: string,
    vehicle: NativeVehicle,
  ): void;
  function playCarAnim(
    vehicle: NativeVehicle,
    text: string,
    text2: string,
    value: number,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function playerHasChar(value: number): bool;
  function playerHasFlashingStarsAboutToDrop(value: number): void;
  function playerHasGreyedOutStars(value: number): void;
  function playerIsInteractingWithGarage(): void;
  function playerIsNearFirstPigeon(coords: Vec3): void;
  function playerIsPissedOff(value: number): void;
  function playerWantsToJoinNetworkGame(value: number): void;
  function playFireSoundFromPosition(value: number, coords: Vec3): void;
  function playMovie(): void;
  function playScriptedConversationFrontend(toggle: boolean): void;
  function playSound(value: number, text: string): void;
  function playSoundFromPed(value: number, text: string, ped: NativePed): void;
  function playSoundFromPosition(
    value: number,
    text: string,
    coords: Vec3,
  ): void;
  function playSoundFromVehicle(
    value: number,
    text: string,
    vehicle: NativeVehicle,
  ): void;
  function playSoundFrontend(value: number, text: string): void;
  function playstatsCheat(value: number): void;
  function playstatsFloat(value: number, value2: number): void;
  function playstatsMissionCancelled(value: number): void;
  function playstatsMissionFailed(value: number): void;
  function playstatsMissionPassed(text: string): void;
  function playstatsMissionStarted(value: number): void;
  function playStreamFromPed(ped: NativePed): void;
  function playStreamFrontend(): void;
  function pointCamAtCam(value: number, value2: number): void;
  function pointCamAtCoord(value: number, coords: Vec3): void;
  function pointCamAtPed(value: number, ped: NativePed): void;
  function pointCamAtVehicle(value: number, vehicle: NativeVehicle): void;
  function pointFixedCam(coords: Vec3, value: number): void;
  function pointFixedCamAtPed(ped: NativePed, value: number): void;
  function pointFixedCamAtPos(coords: Vec3, value: number): void;
  function pointFixedCamAtVehicle(vehicle: NativeVehicle, value: number): void;
  function popCarBoot(vehicle: NativeVehicle): unknown;
  function populateNow(): unknown;
  function pow(value: number, value2: number): unknown;
  function preloadStream(text: string): unknown;
  function preloadStreamWithStartOffset(text: string, value: number): unknown;
  function previewRingtone(value: number): unknown;
  function print(text: string, value: number, toggle: boolean): unknown;
  function printBig(text: string, value: number, toggle: boolean): unknown;
  function printBigQ(text: string, value: number, value2: number): unknown;
  function printfloat(value: number): unknown;
  function printHelp(text: string): unknown;
  function printHelpForever(text: string): unknown;
  function printHelpForeverWithNumber(text: string, value: number): unknown;
  function printHelpForeverWithString(text: string, text2: string): unknown;
  function printHelpForeverWithStringNoSound(
    text: string,
    text2: string,
  ): unknown;
  function printHelpForeverWithTwoNumbers(
    text: string,
    value: number,
    value2: number,
  ): unknown;
  function printHelpOverFrontend(text: string): unknown;
  function printHelpWithNumber(text: string, value: number): unknown;
  function printHelpWithString(text: string, text2: string): unknown;
  function printHelpWithStringNoSound(text: string, text2: string): unknown;
  function printHelpWithTwoNumbers(
    text: string,
    value: number,
    value2: number,
  ): unknown;
  function printint(value: number): unknown;
  function printnl(): unknown;
  function printNow(text: string, value: number, toggle: boolean): unknown;
  function printstring(text: string): unknown;
  function printStringInString(
    text: string,
    text2: string,
    value: number,
    toggle: boolean,
  ): unknown;
  function printStringInStringNow(
    text: string,
    text2: string,
    value: number,
    toggle: boolean,
  ): unknown;
  function printStringWithLiteralString(
    text: string,
    text2: string,
    value: number,
    value2: number,
  ): unknown;
  function printStringWithLiteralStringNow(
    text: string,
    text2: string,
    value: number,
    toggle: boolean,
  ): unknown;
  function printStringWithSubstringGivenHashKeyNow(
    text: string,
    value: number,
    value2: number,
    value3: number,
  ): unknown;
  function printStringWithTwoLiteralStrings(
    text: string,
    text2: string,
    text3: string,
    value: number,
    value2: number,
  ): unknown;
  function printStringWithTwoLiteralStringsNow(
    text: string,
    text2: string,
    text3: string,
    value: number,
    value2: number,
  ): unknown;
  function printvector(coords: Vec3): unknown;
  function printWith2Numbers(
    text: string,
    value: number,
    value2: number,
    value3: number,
    toggle: boolean,
  ): unknown;
  function printWith2NumbersBig(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): unknown;
  function printWith2NumbersNow(
    text: string,
    value: number,
    value2: number,
    value3: number,
    toggle: boolean,
  ): unknown;
  function printWith3Numbers(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): unknown;
  function printWith3NumbersNow(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): unknown;
  function printWith4Numbers(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): unknown;
  function printWith4NumbersNow(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): unknown;
  function printWith5Numbers(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
  ): unknown;
  function printWith5NumbersNow(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
  ): unknown;
  function printWith6Numbers(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
  ): unknown;
  function printWith6NumbersNow(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
  ): unknown;
  function printWithNumber(
    text: string,
    value: number,
    value2: number,
    toggle: boolean,
  ): unknown;
  function printWithNumberBig(
    text: string,
    value: number,
    value2: number,
    toggle: boolean,
  ): unknown;
  function printWithNumberNow(
    text: string,
    value: number,
    value2: number,
    toggle: boolean,
  ): unknown;
  function prioritizeStreamingRequest(): unknown;
  function processMissionDeletionList(): unknown;
  function prostituteCamActivate(toggle: boolean): unknown;
  function readKillFrenzyStatus(): unknown;
  function registerBestPosition(value: number, value2: number): void;
  function registerFloatStat(value: number, value2: number): void;
  function registerHatedTargetsAroundPed(ped: NativePed, value: number): void;
  function registerHatedTargetsInArea(
    handle: number,
    coords: Vec3,
    value: number,
  ): void;
  function registerIntStat(value: number, value2: number): void;
  function registerKillInMultiplayerGame(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function registerMissionPassed(text: string): void;
  function registerMultiplayerGameWin(value: number, toggle: boolean): void;
  function registerNetworkBestGameScores(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function registerOddjobMissionPassed(): void;
  function registerPlayerRespawnCoords(value: number, coords: Vec3): void;
  function registerSaveHouse(
    coords: Vec3,
    value: number,
    text: string,
    value2: number,
  ): void;
  function registerScriptWithAudio(toggle: boolean): void;
  function registerStringForFrontendStat(value: number, text: string): void;
  function registerTarget(handle: number, handle2: number): void;
  function registerTrackNumber(value: number): void;
  function registerWorldPointScriptBrain(text: string, value: number): void;
  function releaseMovie(): void;
  function releasePathNodes(): void;
  function releaseScriptControlledMicrophone(): void;
  function releaseSoundId(value: number): void;
  function releaseTexture(value: number): void;
  function releaseTimeOfDay(): void;
  function releaseWeather(): void;
  function reloadWebPage(value: number): unknown;
  function removeAdditionalPopulationModel(value: number): void;
  function removeAllCharWeapons(ped: NativePed): void;
  function removeAllInactiveGroupsFromCleanupList(): void;
  function removeAllPickupsOfType(value: number): void;
  function removeAnims(text: string): void;
  function removeBlip(value: number): void;
  function removeBlipAndClearIndex(value: number): void;
  function removeCarRecording(value: number): void;
  function removeCarsFromGeneratorsInArea(coords: Vec3, coords2: Vec3): void;
  function removeCarWindow(vehicle: NativeVehicle, value: number): void;
  function removeCharDefensiveArea(ped: NativePed): void;
  function removeCharElegantly(ped: NativePed): void;
  function removeCharFromCarMaintainPosition(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): void;
  function removeCharFromGroup(ped: NativePed): void;
  function removeCloseMicPed(ped: NativePed): void;
  function removeCoverPoint(value: number): void;
  function removeDecisionMaker(value: number): void;
  function removeFakeNetworkNameFromPed(ped: NativePed): void;
  function removeGroup(value: number): void;
  function removeIpl(text: string): void;
  function removeIplDiscreetly(text: string): void;
  function removeNavmeshRequiredRegion(value: number, value2: number): void;
  function removePedHelmet(ped: NativePed, toggle: boolean): void;
  function removePlayerHelmet(value: number, toggle: boolean): void;
  function removeProjtexInRange(coords: Vec3, value: number): void;
  function removePtfx(value: number): void;
  function removePtfxFromPed(ped: NativePed): void;
  function removePtfxFromVehicle(vehicle: NativeVehicle): void;
  function removeScriptFire(value: number): void;
  function removeScriptMic(): void;
  function removeStuckCarCheck(vehicle: NativeVehicle): void;
  function removeTemporaryRadarBlipsForPickups(): void;
  function removeTxd(value: number): void;
  function removeUpsidedownCarCheck(vehicle: NativeVehicle): void;
  function removeWeaponFromChar(ped: NativePed, value: number): void;
  function renderRaceTrack(toggle: boolean): void;
  function renderWeaponPickupsBigger(toggle: boolean): void;
  function reportCrime(coords: Vec3, text: string): unknown;
  function reportDispatch(value: number, coords: Vec3): unknown;
  function reportPoliceSpottingSuspect(handle: number): unknown;
  function reportSuspectArrested(): unknown;
  function reportSuspectDown(): unknown;
  function reportTaggedRadioTrack(value: number): unknown;
  function requestAdditionalText(text: string, value: number): void;
  function requestAllSlodsInWorld(): void;
  function requestAmbientAudioBank(text: string): void;
  function requestAnims(text: string): void;
  function requestCarRecording(value: number): void;
  function requestCollisionAtPosn(coords: Vec3): void;
  function requestCollisionForModel(value: number): void;
  function requestControlOfNetworkId(value: number): void;
  function requestInteriorModels(value: number, text: string): void;
  function requestIpl(text: string): void;
  function requestMissionAudioBank(text: string): void;
  function requestModel(value: number): void;
  function requestScript(text: string): void;
  function requestStreamedTxd(text: string, toggle: boolean): void;
  function reserveNetworkMissionObjectsForHost(value: number): unknown;
  function reserveNetworkMissionPedsForHost(value: number): unknown;
  function reserveNetworkMissionVehicles(value: number): unknown;
  function reserveNetworkMissionVehiclesForHost(value: number): unknown;
  function resetAchievementsAward(): void;
  function resetCamInterpCustomSpeedGraph(): void;
  function resetCamSplineCustomSpeedGraph(): void;
  function resetCarWheels(vehicle: NativeVehicle, toggle: boolean): void;
  function resetLocalPlayerWeaponStat(value: number, value2: number): void;
  function resetNoLawVehiclesDestroyedByLocalPlayer(): void;
  function resetNumOfModelsKilledByPlayer(value: number): void;
  function resetStuckTimer(handle: number, value: number): void;
  function resetVisiblePedDamage(ped: NativePed): void;
  function restartScriptedConversation(): unknown;
  function resurrectNetworkPlayer(
    value: number,
    coords: Vec3,
    value2: number,
  ): void;
  function retuneRadioDown(): unknown;
  function retuneRadioToStationIndex(value: number): unknown;
  function retuneRadioToStationName(text: string): unknown;
  function retuneRadioUp(): unknown;
  function reviveInjuredPed(ped: NativePed): unknown;
  function round(value: number): number;
  function saveNewlineToDebugFile(): void;
  function saveSettings(): void;
  function sayAmbientSpeech(
    handle: number,
    text: string,
    toggle: boolean,
    toggle2: boolean,
    value: number,
  ): unknown;
  function sayAmbientSpeechWithVoice(
    handle: number,
    text: string,
    text2: string,
    toggle: boolean,
    toggle2: boolean,
    value: number,
  ): unknown;
  function scriptAssert(text: string): unknown;
  function scriptIsMovingMobilePhoneOffscreen(toggle: boolean): unknown;
  function scriptIsUsingMobilePhone(toggle: boolean): unknown;
  function searchCriteriaConsiderPedsWithFlagFalse(value: number): unknown;
  function searchCriteriaConsiderPedsWithFlagTrue(value: number): unknown;
  function searchCriteriaRejectPedsWithFlagFalse(value: number): unknown;
  function searchCriteriaRejectPedsWithFlagTrue(value: number): unknown;
  function securomSpotCheck1(): unknown;
  function securomSpotCheck2(): unknown;
  function securomSpotCheck3(): unknown;
  function securomSpotCheck4(): unknown;
  function selectWeaponsForVehicle(
    vehicle: NativeVehicle,
    value: number,
  ): unknown;
  function sendClientBroadcastVariablesNow(): unknown;
  function sendNmMessage(handle: number): unknown;
  function setAdvancedBoolInDecisionMaker(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    toggle: boolean,
  ): void;
  function setAllCarGeneratorsBackToActive(): void;
  function setAllCarsCanBeDamaged(toggle: boolean): void;
  function setAllowDummyConversions(toggle: boolean): void;
  function setAllPickupsOfTypeCollectableByCar(
    value: number,
    toggle: boolean,
  ): void;
  function setAllRandomPedsFlee(value: number, toggle: boolean): void;
  function setAlwaysDisplayWeaponPickupMessage(toggle: boolean): void;
  function setAmbientPlanesSpeedMultiplier(value: number): void;
  function setAmbientVoiceName(handle: number, text: string): void;
  function setAnimGroupForChar(ped: NativePed, text: string): void;
  function setArmourPickupNetworkRegenTime(value: number): void;
  function setBikeRiderWillPutFootDownWhenStopped(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setBit(value: number): void;
  function setBitsInRange(value: number, value2: number, value3: number): void;
  function setBlipAsFriendly(value: number, toggle: boolean): void;
  function setBlipAsShortRange(value: number, toggle: boolean): void;
  function setBlipCoordinates(value: number, coords: Vec3): void;
  function setBlipMarkerLongDistance(value: number, toggle: boolean): void;
  function setBlipThrottleRandomly(handle: number, toggle: boolean): void;
  function setBlockCameraToggle(toggle: boolean): void;
  function setBlockingOfNonTemporaryEvents(
    handle: number,
    toggle: boolean,
  ): void;
  function setBriansMood(value: number): void;
  function setCamActive(value: number, toggle: boolean): void;
  function setCamAttachOffset(value: number, coords: Vec3): void;
  function setCamAttachOffsetIsRelative(value: number, toggle: boolean): void;
  function setCamBehindPed(ped: NativePed): void;
  function setCamComponentShake(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    coords: Vec3,
  ): void;
  function setCamDofFocuspoint(
    value: number,
    coords: Vec3,
    value2: number,
  ): void;
  function setCameraAutoScriptActivation(toggle: boolean): void;
  function setCameraBeginCamCommandsRequired(toggle: boolean): void;
  function setCameraControlsDisabledWithPlayerControls(toggle: boolean): void;
  function setCameraState(value: number, value2: number): void;
  function setCamFarClip(value: number, value2: number): void;
  function setCamFarDof(value: number, value2: number): void;
  function setCamFov(value: number, value2: number): void;
  function setCamInFrontOfPed(ped: NativePed): void;
  function setCamInheritRollPed(value: number, ped: NativePed): void;
  function setCamInheritRollVehicle(
    value: number,
    vehicle: NativeVehicle,
  ): void;
  function setCamInterpCustomSpeedGraph(value: number): void;
  function setCamInterpDetailRotStyleAngles(value: number): void;
  function setCamInterpDetailRotStyleQuats(value: number): void;
  function setCamInterpStyleCore(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    toggle: boolean,
  ): void;
  function setCamInterpStyleDetailed(
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
  ): void;
  function setCamMotionBlur(value: number, value2: number): void;
  function setCamName(value: number, text: string): void;
  function setCamNearClip(value: number, value2: number): void;
  function setCamNearDof(value: number, value2: number): void;
  function setCamPointDampingParams(value: number, coords: Vec3): void;
  function setCamPointOffset(value: number, coords: Vec3): void;
  function setCamPointOffsetIsRelative(value: number, toggle: boolean): void;
  function setCamPos(camera: number, x: number, y: number, z: number): void;
  function setCamPropagate(value: number, toggle: boolean): void;
  function setCamRoll(value: number, value2: number): void;
  function setCamRot(
    camera: number,
    rotX: number,
    rotY: number,
    rotZ: number,
  ): void;
  function setCamShake(value: number, toggle: boolean, value2: number): void;
  function setCamSplineCustomSpeedGraph(value: number): void;
  function setCamSplineDuration(value: number, value2: number): void;
  function setCamSplineProgress(value: number, value2: number): void;
  function setCamSplineSpeedConstant(value: number, toggle: boolean): void;
  function setCamSplineSpeedGraph(value: number, value2: number): void;
  function setCamTargetPed(value: number, ped: NativePed): void;
  function setCanBurstCarTyres(vehicle: NativeVehicle, toggle: boolean): void;
  function setCanResprayCar(vehicle: NativeVehicle, toggle: boolean): void;
  function setCanTargetCharWithoutLos(ped: NativePed, toggle: boolean): void;
  function setCarAllowedToDrown(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarAlwaysCreateSkids(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCarAnimCurrentTime(
    vehicle: NativeVehicle,
    text: string,
    text2: string,
    value: number,
  ): void;
  function setCarAnimSpeed(
    vehicle: NativeVehicle,
    text: string,
    text2: string,
    value: number,
  ): void;
  function setCarAsMissionCar(vehicle: NativeVehicle): void;
  function setCarCanBeDamaged(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarCanBeVisiblyDamaged(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCarCollision(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarColourCombination(vehicle: NativeVehicle, value: number): void;
  function setCarCoordinates(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setCarCoordinatesNoOffset(
    vehicle: NativeVehicle,
    coords: Vec3,
  ): void;
  function setCarDensityMultiplier(value: number): void;
  function setCarDistanceAheadMultiplier(
    vehicle: NativeVehicle,
    value: number,
  ): void;
  function setCarDoorLatched(
    vehicle: NativeVehicle,
    value: number,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function setCarEngineOn(
    vehicle: NativeVehicle,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function setCarExistsOnAllMachines(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCarForwardSpeed(vehicle: NativeVehicle, value: number): void;
  function setCarFovFadeMult(value: number): void;
  function setCarFovMax(value: number): void;
  function setCarFovMin(value: number): void;
  function setCarFovRate(value: number): void;
  function setCarFovStartSpeed(value: number): void;
  function setCarFovStartSpeedBoat(value: number): void;
  function setCarGeneratorsActiveInArea(
    coords: Vec3,
    coords2: Vec3,
    toggle: boolean,
  ): void;
  function setCarHeading(vehicle: NativeVehicle, value: number): void;
  function setCarHealth(vehicle: NativeVehicle, value: number): void;
  function setCarInCutscene(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarLaneShift(vehicle: NativeVehicle, value: number): void;
  function setCarLightMultiplier(vehicle: NativeVehicle, value: number): void;
  function setCarLivery(vehicle: NativeVehicle, value: number): void;
  function setCarMotionBlurEffectBoat(value: number): void;
  function setCarNotDamagedByRelationshipGroup(
    vehicle: NativeVehicle,
    toggle: boolean,
    value: number,
  ): void;
  function setCarOnlyDamagedByPlayer(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCarOnlyDamagedByRelationshipGroup(
    vehicle: NativeVehicle,
    toggle: boolean,
    value: number,
  ): void;
  function setCarProofs(
    vehicle: NativeVehicle,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
    toggle5: boolean,
  ): void;
  function setCarRandomRouteSeed(vehicle: NativeVehicle, value: number): void;
  function setCarStayInFastLane(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarStayInSlowLane(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarStrong(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarTraction(vehicle: NativeVehicle, value: number): void;
  function setCarVisible(vehicle: NativeVehicle, toggle: boolean): void;
  function setCarWatertight(vehicle: NativeVehicle, toggle: boolean): void;
  function setCellphoneRanked(toggle: boolean): void;
  function setCharAccuracy(ped: NativePed, value: number): void;
  function setCharAllAnimsSpeed(ped: NativePed, value: number): void;
  function setCharAllowedToDuck(ped: NativePed, toggle: boolean): void;
  function setCharAllowedToRunOnBoats(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharAmmo(ped: NativePed, value: number, value2: number): void;
  function setCharAngledDefensiveArea(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec3,
    value: number,
  ): void;
  function setCharAnimBlendOutDelta(
    ped: NativePed,
    text: string,
    text2: string,
    value: number,
  ): void;
  function setCharAnimCurrentTime(
    ped: NativePed,
    text: string,
    text2: string,
    value: number,
  ): void;
  function setCharAnimPlayingFlag(
    ped: NativePed,
    text: string,
    text2: string,
    toggle: boolean,
  ): void;
  function setCharAnimSpeed(
    ped: NativePed,
    text: string,
    text2: string,
    value: number,
  ): void;
  function setCharAsEnemy(ped: NativePed, toggle: boolean): void;
  function setCharAsMissionChar(ped: NativePed): void;
  function setCharBleeding(ped: NativePed, toggle: boolean): void;
  function setCharBulletproofVest(ped: NativePed, toggle: boolean): void;
  function setCharCanBeKnockedOffBike(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharCanBeShotInVehicle(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharCanSmashGlass(ped: NativePed, toggle: boolean): void;
  function setCharCantBeDraggedOut(ped: NativePed, toggle: boolean): void;
  function setCharClimbAnimRate(ped: NativePed, value: number): void;
  function setCharCollision(ped: NativePed, toggle: boolean): void;
  function setCharComponentVariation(
    ped: NativePed,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setCharCoordinates(ped: NativePed, coords: Vec3): void;
  function setCharCoordinatesDontClearPlayerTasks(
    ped: NativePed,
    coords: Vec3,
  ): void;
  function setCharCoordinatesDontWarpGang(ped: NativePed, coords: Vec3): void;
  function setCharCoordinatesDontWarpGangNoOffset(
    ped: NativePed,
    coords: Vec3,
  ): void;
  function setCharCoordinatesNoOffset(ped: NativePed, coords: Vec3): void;
  function setCharCurrentWeaponVisible(ped: NativePed, toggle: boolean): void;
  function setCharDecisionMaker(ped: NativePed, value: number): void;
  function setCharDecisionMakerToDefault(ped: NativePed): void;
  function setCharDefaultComponentVariation(ped: NativePed): void;
  function setCharDefensiveAreaAttachedToPed(
    ped: NativePed,
    ped2: NativePed,
    coords: Vec3,
    coords2: Vec3,
    value: number,
    value2: number,
  ): void;
  function setCharDesiredHeading(ped: NativePed, value: number): void;
  function setCharDiesInstantlyInWater(ped: NativePed, toggle: boolean): void;
  function setCharDropsWeaponsWhenDead(ped: NativePed, toggle: boolean): void;
  function setCharDrownsInSinkingVehicle(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharDrownsInWater(ped: NativePed, toggle: boolean): void;
  function setCharDruggedUp(ped: NativePed, toggle: boolean): void;
  function setCharDuckingTimed(ped: NativePed, value: number): void;
  function setCharFireDamageMultiplier(ped: NativePed, value: number): void;
  function setCharForceDieInCar(vehicle: NativeVehicle, toggle: boolean): void;
  function setCharGestureGroup(ped: NativePed, text: string): void;
  function setCharGetOutUpsideDownCar(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharGravity(ped: NativePed, value: number): void;
  function setCharHeading(ped: NativePed, value: number): void;
  function setCharHealth(ped: NativePed, value: number): void;
  function setCharInCutscene(ped: NativePed, toggle: boolean): void;
  function setCharInvincible(ped: NativePed, toggle: boolean): void;
  function setCharIsTargetPriority(ped: NativePed, toggle: boolean): void;
  function setCharKeepTask(ped: NativePed, toggle: boolean): void;
  function setCharMaxHealth(ped: NativePed, value: number): void;
  function setCharMaxMoveBlendRatio(ped: NativePed, value: number): void;
  function setCharMaxTimeInWater(ped: NativePed, value: number): void;
  function setCharMaxTimeUnderwater(ped: NativePed, value: number): void;
  function setCharMeleeActionFlag0(ped: NativePed, toggle: boolean): void;
  function setCharMeleeActionFlag1(ped: NativePed, toggle: boolean): void;
  function setCharMeleeActionFlag2(ped: NativePed, toggle: boolean): void;
  function setCharMeleeMovementConstaintBox(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec3,
  ): void;
  function setCharMoney(ped: NativePed, value: number): void;
  function setCharMoveAnimSpeedMultiplier(ped: NativePed, value: number): void;
  function setCharMovementAnimsBlocked(ped: NativePed, toggle: boolean): void;
  function setCharNameDebug(ped: NativePed, text: string): void;
  function setCharNeverLeavesGroup(ped: NativePed, toggle: boolean): void;
  function setCharNeverTargetted(ped: NativePed, toggle: boolean): void;
  function setCharNotDamagedByRelationshipGroup(
    ped: NativePed,
    value: number,
    toggle: boolean,
  ): void;
  function setCharOnlyDamagedByPlayer(ped: NativePed, toggle: boolean): void;
  function setCharOnlyDamagedByRelationshipGroup(
    ped: NativePed,
    toggle: boolean,
    value: number,
  ): void;
  function setCharProofs(
    ped: NativePed,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
    toggle5: boolean,
  ): void;
  function setCharPropIndex(
    ped: NativePed,
    value: number,
    value2: number,
  ): void;
  function setCharPropIndexTexture(
    ped: NativePed,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setCharProvideCoveringFire(ped: NativePed, toggle: boolean): void;
  function setCharRandomComponentVariation(ped: NativePed): void;
  function setCharReadyToBeExecuted(ped: NativePed, toggle: boolean): void;
  function setCharReadyToBeStunned(ped: NativePed, toggle: boolean): void;
  function setCharRelationship(
    ped: NativePed,
    value: number,
    value2: number,
  ): void;
  function setCharRelationshipGroup(ped: NativePed, value: number): void;
  function setCharRotation(ped: NativePed, coords: Vec3): void;
  function setCharShootRate(ped: NativePed, value: number): void;
  function setCharSignalAfterKill(ped: NativePed, toggle: boolean): void;
  function setCharSphereDefensiveArea(
    ped: NativePed,
    coords: Vec3,
    value: number,
  ): void;
  function setCharStayInCarWhenJacked(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharSuffersCriticalHits(ped: NativePed, toggle: boolean): void;
  function setCharUsesDeafultAnimGroupWhenFleeing(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setCharUsesUpperbodyDamageAnimsOnly(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setCharVelocity(ped: NativePed, coords: Vec3): void;
  function setCharVisible(ped: NativePed, toggle: boolean): void;
  function setCharWalkAlongsideLeaderWhenAppropriate(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setCharWantedByPolice(ped: NativePed, toggle: boolean): void;
  function setCharWatchMelee(ped: NativePed, toggle: boolean): void;
  function setCharWeaponSkill(ped: NativePed, value: number): void;
  function setCharWillCowerInsteadOfFleeing(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setCharWillDoDrivebys(ped: NativePed, toggle: boolean): void;
  function setCharWillFlyThroughWindscreen(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setCharWillLeaveCarInCombat(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharWillMoveWhenInjured(ped: NativePed, toggle: boolean): void;
  function setCharWillOnlyFireWithClearLos(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setCharWillRemainOnBoatAfterMissionEnds(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharWillTryToLeaveBoatAfterLeader(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharWillTryToLeaveWater(ped: NativePed, toggle: boolean): void;
  function setCharWillUseCarsInCombat(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setCharWillUseCover(ped: NativePed, toggle: boolean): void;
  function setCinematicButtonEnabled(toggle: boolean): void;
  function setClearHelpInMissionCleanup(toggle: boolean): void;
  function setClearManifolds(toggle: boolean): void;
  function setCollectable1Total(value: number): void;
  function setCollideWithPeds(toggle: boolean): void;
  function setCombatDecisionMaker(handle: number, value: number): void;
  function setConvertibleRoof(handle: number, toggle: boolean): void;
  function setCreateRandomCops(toggle: boolean): void;
  function setCreditsToRenderBeforeFade(toggle: boolean): void;
  function setCurrentCharWeapon(
    ped: NativePed,
    value: number,
    toggle: boolean,
  ): void;
  function setCurrentMovie(text: string): void;
  function setCutsceneExtraRoomPos(coords: Vec3): void;
  function setDanceShakeActiveThisUpdate(value: number): void;
  function setDanceShakeInactiveImmediately(): void;
  function setDeadCharCoordinates(ped: NativePed, coords: Vec3): void;
  function setDeadPedsDropWeapons(toggle: boolean): void;
  function setDeathWeaponsPersist(handle: number, toggle: boolean): void;
  function setDebugTextVisible(toggle: boolean): void;
  function setDecisionMakerAttributeCanChangeTarget(
    value: number,
    toggle: boolean,
  ): void;
  function setDecisionMakerAttributeCaution(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeFireRate(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeLowHealth(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeMovementStyle(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeNavigationStyle(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeRetreatingBehaviour(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeSightRange(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeStandingStyle(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeTargetInjuredReaction(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeTargetLossResponse(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeTeamwork(
    value: number,
    value2: number,
  ): void;
  function setDecisionMakerAttributeWeaponAccuracy(
    value: number,
    value2: number,
  ): void;
  function setDefaultGlobalInstancePriority(): void;
  function setDisablePlayerShoveAnimation(
    handle: number,
    toggle: boolean,
  ): void;
  function setDisplayPlayerNameAndIcon(value: number, toggle: boolean): void;
  function setDitchPoliceModels(toggle: boolean): void;
  function setDoNotSpawnParkedCarsOnTop(value: number, toggle: boolean): void;
  function setDontActivateRagdollFromPlayerImpact(
    handle: number,
    toggle: boolean,
  ): void;
  function setDrawPlayerComponent(value: number, toggle: boolean): void;
  function setDriveTaskCruiseSpeed(handle: number, value: number): void;
  function setDrunkCam(value: number, value2: number, value3: number): void;
  function setEnableNearClipScan(toggle: boolean): void;
  function setEnableRcDetonate(toggle: boolean): void;
  function setEnableRcDetonateOnContact(toggle: boolean): void;
  function setEngineHealth(handle: number, value: number): void;
  function setEveryoneIgnorePlayer(value: number, toggle: boolean): void;
  function setExtraCarColours(
    vehicle: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function setExtraHospitalRestartPoint(
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function setExtraPoliceStationRestartPoint(
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function setFadeInAfterLoad(toggle: boolean): void;
  function setFakeWantedCircle(coords: Vec2, value: number): void;
  function setFakeWantedLevel(value: number): void;
  function setFilterMenuOn(toggle: boolean): void;
  function setFilterSaveSetting(value: number, value2: number): void;
  function setFixedCamPos(coords: Vec3): void;
  function setFloatStat(value: number, value2: number): void;
  function setFollowPedPitchLimitDown(value: number): void;
  function setFollowPedPitchLimitUp(value: number): void;
  function setFollowVehicleCamOffset(toggle: boolean, coords: Vec3): void;
  function setFollowVehicleCamSubmode(value: number): void;
  function setFollowVehiclePitchLimitDown(value: number): void;
  function setFollowVehiclePitchLimitUp(value: number): void;
  function setForceLookBehind(toggle: boolean): void;
  function setForcePlayerToEnterThroughDirectDoor(
    handle: number,
    toggle: boolean,
  ): void;
  function setFovChannelScript(toggle: boolean): void;
  function setFreebiesInVehicle(vehicle: NativeVehicle, toggle: boolean): void;
  function setFreeHealthCare(value: number, toggle: boolean): void;
  function setFreeResprays(toggle: boolean): void;
  function setGameCameraControlsActive(toggle: boolean): void;
  function setGameCamHeading(value: number): void;
  function setGameCamPitch(value: number): void;
  function setGangCar(vehicle: NativeVehicle, toggle: boolean): void;
  function setGarageLeaveCameraAlone(text: string, toggle: boolean): void;
  function setGfwlHasSafeHouse(value: number): void;
  function setGlobalInstancePriority(value: number): void;
  function setGlobalRenderFlags(
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
  ): void;
  function setGpsRemainsWhenTargetReachedFlag(toggle: boolean): void;
  function setGpsTestIn3dFlag(toggle: boolean): void;
  function setGpsVoiceForVehicle(vehicle: NativeVehicle, value: number): void;
  function setGravityOff(toggle: boolean): void;
  function setGroupCharDecisionMaker(value: number, value2: number): void;
  function setGroupCharDucksWhenAimedAt(ped: NativePed, toggle: boolean): void;
  function setGroupCombatDecisionMaker(value: number, value2: number): void;
  function setGroupFollowStatus(value: number, value2: number): void;
  function setGroupFormation(value: number, value2: number): void;
  function setGroupFormationSpacing(value: number, value2: number): void;
  function setGroupLeader(value: number, handle: number): void;
  function setGroupMember(value: number, handle: number): void;
  function setGroupSeparationRange(value: number, value2: number): void;
  function setGunshotSenseRangeForRiot2(value: number): void;
  function setHasBeenOwnedByPlayer(handle: number, toggle: boolean): void;
  function setHasBeenOwnedForCarGenerator(value: number, toggle: boolean): void;
  function setHeadingLimitForAttachedPed(
    ped: NativePed,
    value: number,
    value2: number,
  ): void;
  function setHeadingOfClosestObjectOfType(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setHealthPickupNetworkRegenTime(value: number): void;
  function setHeliBladesFullSpeed(vehicle: NativeVehicle): void;
  function setHeliForceEngineOn(vehicle: NativeVehicle, toggle: boolean): void;
  function setHeliStabiliser(vehicle: NativeVehicle, toggle: boolean): void;
  function setHelpMessageBoxSize(value: number): void;
  function setHelpMessageBoxSizeF(value: number): void;
  function setHideWeaponIcon(toggle: boolean): void;
  function setHintAdvancedParams(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    toggle: boolean,
  ): void;
  function setHintFov(value: number): void;
  function setHintMoveInDist(value: number): void;
  function setHintMoveInDistDefault(): void;
  function setHintTimes(value: number, value2: number, value3: number): void;
  function setHintTimesDefault(): void;
  function setHostMatchOn(toggle: boolean): void;
  function setHotWeaponSwap(toggle: boolean): void;
  function setIgnoreLowPriorityShockingEvents(
    handle: number,
    toggle: boolean,
  ): void;
  function setIgnoreNoGpsFlag(toggle: boolean): void;
  function setIkDisabledForNetworkPlayer(value: number, toggle: boolean): void;
  function setInformRespectedFriends(
    handle: number,
    value: number,
    value2: number,
  ): void;
  function setInMpTutorial(toggle: boolean): void;
  function setInSpectatorMode(toggle: boolean): void;
  function setInstantWidescreenBorders(toggle: boolean): void;
  function setInterpFromGameToScript(toggle: boolean, value: number): void;
  function setInterpFromScriptToGame(toggle: boolean, value: number): void;
  function setInterpInOutVehicleEnabledThisFrame(toggle: boolean): void;
  function setIntStat(value: number, value2: number): void;
  function setKillstreak(): void;
  function setLoadCollisionForCarFlag(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setLoadCollisionForCharFlag(ped: NativePed, toggle: boolean): void;
  function setLobbyMuteOverride(toggle: boolean): void;
  function setLocalPlayerPainVoice(text: string): void;
  function setLocalPlayerVoice(text: string): void;
  function setLoudVehicleRadio(vehicle: NativeVehicle, toggle: boolean): void;
  function setMask(
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function setMaxFireGenerations(value: number): void;
  function setMaxWantedLevel(value: number): void;
  function setMenuColumnOrientation(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setMenuColumnWidth(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setMenuItemWith2Numbers(
    value: number,
    value2: number,
    value3: number,
    text: string,
    value4: number,
    value5: number,
  ): void;
  function setMenuItemWithNumber(
    value: number,
    value2: number,
    value3: number,
    text: string,
    value4: number,
  ): void;
  function setMessageFormatting(
    toggle: boolean,
    value: number,
    value2: number,
  ): void;
  function setMessagesWaiting(toggle: boolean): void;
  function setMinigameInProgress(toggle: boolean): void;
  function setMinMaxPedAccuracy(
    ped: NativePed,
    value: number,
    value2: number,
  ): void;
  function setMissionFlag(toggle: boolean): void;
  function setMissionPassedCash(
    toggle: boolean,
    value: number,
    value2: number,
  ): void;
  function setMissionPickupSound(value: number, text: string): void;
  function setMissionRespectTotal(value: number): void;
  function setMissionTrainCoordinates(
    vehicle: NativeVehicle,
    coords: Vec3,
  ): void;
  function setMobilePhonePosition(coords: Vec3): void;
  function setMobilePhoneRadioState(toggle: boolean): void;
  function setMobilePhoneRotation(coords: Vec3): void;
  function setMobilePhoneScale(value: number): void;
  function setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
  function setMobileRingType(value: number): void;
  function setMoneyCarriedByAllNewPeds(value: number): void;
  function setMoneyCarriedByPedWithModel(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setMovieTime(value: number): void;
  function setMovieVolume(value: number): void;
  function setMsgForLoadingScreen(text: string): void;
  function setMultiplayerHudCash(value: number): void;
  function setMultiplayerHudTime(text: string): void;
  function setNeedsToBeHotwired(handle: number, toggle: boolean): void;
  function setNetworkIdCanMigrate(value: number, toggle: boolean): void;
  function setNetworkIdExistsOnAllMachines(
    value: number,
    toggle: boolean,
  ): void;
  function setNetworkIdStopCloning(value: number, toggle: boolean): void;
  function setNetworkJoinFail(toggle: boolean): void;
  function setNetworkPedUsingParachute(ped: NativePed): void;
  function setNetworkPlayerAsVip(value: number, toggle: boolean): void;
  function setNetworkVehicleRespotTimer(value: number, value2: number): void;
  function setNextDesiredMoveState(value: number): void;
  function setNmAnimPose(
    handle: number,
    text: string,
    text2: string,
    value: number,
  ): void;
  function setNmMessageBool(value: number, toggle: boolean): void;
  function setNmMessageFloat(value: number, value2: number): void;
  function setNmMessageInt(value: number, value2: number): void;
  function setNmMessageString(value: number, text: string): void;
  function setNmMessageVec3(value: number, coords: Vec3): void;
  function setNoResprays(toggle: boolean): void;
  function setOnlineLan(toggle: boolean): void;
  function setOnscreenCounterFlashWhenFirstDisplayed(
    value: number,
    toggle: boolean,
  ): void;
  function setOverrideNoSprintingOnPhoneInMultiplayer(toggle: boolean): void;
  function setParkedCarDensityMultiplier(value: number): void;
  function setPedAllowMissionOnlyDrivebyUse(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedAlpha(ped: NativePed, value: number): void;
  function setPedComponentsToNetworkPlayersettingsModel(ped: NativePed): void;
  function setPedDensityMultiplier(value: number): void;
  function setPedDiesWhenInjured(ped: NativePed, toggle: boolean): void;
  function setPedDontDoEvasiveDives(ped: NativePed, toggle: boolean): void;
  function setPedDontUseVehicleSpecificAnims(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setPedEnableLegIk(ped: NativePed, toggle: boolean): void;
  function setPedExistsOnAllMachines(ped: NativePed, toggle: boolean): void;
  function setPedFallOffBikesWhenShot(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setPedFireFxLodScaler(value: number): void;
  function setPedForceFlyThroughWindscreen(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedForceVisualiseHeadDamageFromBullets(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedGeneratesDeadBodyEvents(ped: NativePed, toggle: boolean): void;
  function setPedHeedsTheEveryoneIgnorePlayerFlag(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedHeliPilotRespectsMinimummHeight(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setPedHelmetTextureIndex(ped: NativePed, value: number): void;
  function setPedInstantBlendsWeaponAnims(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedIsBlindRaging(ped: NativePed, toggle: boolean): void;
  function setPedIsDrunk(ped: NativePed, toggle: boolean): void;
  function setPedMobileRingType(ped: NativePed, value: number): void;
  function setPedMotionBlur(ped: NativePed, toggle: boolean): void;
  function setPedNonCreationArea(coords: Vec3, coords2: Vec3): void;
  function setPedNonRemovalArea(coords: Vec3, coords2: Vec3): void;
  function setPedPathMayDropFromHeight(ped: NativePed, toggle: boolean): void;
  function setPedPathMayUseClimbovers(ped: NativePed, toggle: boolean): void;
  function setPedPathMayUseLadders(ped: NativePed, toggle: boolean): void;
  function setPedPathWillAvoidDynamicObjects(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedSkipsComplexCoverCollisionChecks(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedSteersAroundObjects(ped: NativePed, toggle: boolean): void;
  function setPedSteersAroundPeds(ped: NativePed, toggle: boolean): void;
  function setPedWindyClothingScale(ped: NativePed, value: number): void;
  function setPedWithBrainCanBeConvertedToDummyPed(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPedWontAttackPlayerWithoutWantedLevel(
    ped: NativePed,
    toggle: boolean,
  ): void;
  function setPetrolTankHealth(handle: number, value: number): void;
  function setPetrolTankWeakpoint(handle: number, toggle: boolean): void;
  function setPhoneHudItem(value: number, text: string, value2: number): void;
  function setPhysCcdHandlesRotation(toggle: boolean): void;
  function setPickupsFixCars(toggle: boolean): void;
  function setPlaneThrottle(vehicle: NativeVehicle, value: number): void;
  function setPlaneUndercarriageUp(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setPlaybackSpeed(handle: number, value: number): void;
  function setPlayerAsCop(value: number, toggle: boolean): void;
  function setPlayerAsDamagedPlayer(
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function setPlayerCanBeHassledByGangs(value: number, toggle: boolean): void;
  function setPlayerCanDoDriveBy(value: number, toggle: boolean): void;
  function setPlayerCanDropWeaponsInCar(toggle: boolean): void;
  function setPlayerCanUseCover(value: number, toggle: boolean): void;
  function setPlayerControl(value: number, toggle: boolean): void;
  function setPlayerControlAdvanced(
    value: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): void;
  function setPlayerControlForAmbientScript(
    value: number,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function setPlayerControlForNetwork(
    value: number,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function setPlayerControlForTextChat(value: number, toggle: boolean): void;
  function setPlayerControlOnInMissionCleanup(toggle: boolean): void;
  function setPlayerDisableCrouch(value: number, toggle: boolean): void;
  function setPlayerDisableJump(value: number, toggle: boolean): void;
  function setPlayerFastReload(value: number, toggle: boolean): void;
  function setPlayerForcedAim(value: number, toggle: boolean): void;
  function setPlayerGroupRecruitment(value: number, toggle: boolean): void;
  function setPlayerGroupToFollowAlways(value: number, toggle: boolean): void;
  function setPlayerGroupToFollowNever(value: number, toggle: boolean): void;
  function setPlayerIconColour(value: number): void;
  function setPlayerInvincible(value: number, toggle: boolean): void;
  function setPlayerInvisibleToAi(toggle: boolean): void;
  function setPlayerIsInStadium(toggle: boolean): void;
  function setPlayerKeepsWeaponsWhenRespawned(toggle: boolean): void;
  function setPlayerMayOnlyEnterThisVehicle(
    value: number,
    vehicle: NativeVehicle,
  ): void;
  function setPlayerMoodNormal(value: number): void;
  function setPlayerMoodPissedOff(value: number, value2: number): void;
  function setPlayerMpModifier(
    value: number,
    value2: number,
    value3: number,
  ): void;
  function setPlayerNeverGetsTired(value: number, toggle: boolean): void;
  function setPlayerPainRootBankName(text: string): void;
  function setPlayerPlayerTargetting(toggle: boolean): void;
  function setPlayersDropMoneyInNetworkGame(toggle: boolean): void;
  function setPlayerSettingsGenre(handle: number): void;
  function setPlayersettingsModelVariationsChoice(value: number): void;
  function setPlayerTeam(value: number, value2: number): void;
  function setPoliceFocusWillTrackCar(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setPoliceIgnorePlayer(
    value: NativePlayerHandle,
    toggle: boolean,
  ): void;
  function setPoliceRadarBlips(toggle: boolean): void;
  function setPtfxCamInsideVehicle(toggle: boolean): void;
  function setRadarAsInteriorThisFrame(): void;
  function setRadarScale(value: number): void;
  function setRadarZoom(value: number): void;
  function setRailtrackResistanceMult(value: number): void;
  function setRandomCarDensityMultiplier(value: number): void;
  function setRandomSeed(value: number): void;
  function setRecordingToPointNearestToCoors(
    handle: number,
    coords: Vec3,
  ): void;
  function setReducePedModelBudget(toggle: boolean): void;
  function setReduceVehicleModelBudget(toggle: boolean): void;
  function setRelationship(value: number, value2: number, value3: number): void;
  function setRenderTrainAsDerailed(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setReturnToFilterMenu(toggle: boolean): void;
  function setRichPresenceTemplatefilter(): void;
  function setRichPresenceTemplatemp3(value: number, value2: number): void;
  function setRichPresenceTemplateparty(): void;
  function setRichPresenceTemplatesp2(value: number): void;
  function setRocketLauncherFreebieInHeli(toggle: boolean): void;
  function setRomansMood(value: number): void;
  function setRoomForCarByKey(vehicle: NativeVehicle, value: number): void;
  function setRoomForCarByName(vehicle: NativeVehicle, text: string): void;
  function setRoomForCharByKey(ped: NativePed, value: number): void;
  function setRoomForCharByName(ped: NativePed, text: string): void;
  function setRoomForViewportByKey(value: number, value2: number): void;
  function setRoomForViewportByName(value: number, text: string): void;
  function setRotationForAttachedPed(ped: NativePed, coords: Vec3): void;
  function setRotOrder(value: number): void;
  function setRoute(value: number, toggle: boolean): void;
  function setScenarioPedDensityMultiplier(value: number, value2: number): void;
  function setScreenFade(
    value: number,
    value2: number,
    value3: number,
    toggle: boolean,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
  ): void;
  function setScriptedAnimSeatOffset(handle: number, value: number): void;
  function setScriptedConversionCentre(coords: Vec3): void;
  function setScriptLimitToGangSize(value: number): void;
  function setScriptMicLookAt(coords: Vec3): void;
  function setScriptMicPosition(coords: Vec3): void;
  function setSelectedMenuItem(value: number, value2: number): void;
  function setSenseRange(handle: number, value: number): void;
  function setSequenceToRepeat(value: number, value2: number): void;
  function setServerId(value: number): void;
  function setSirenWithNoDriver(handle: number, toggle: boolean): void;
  function setSleepModeActive(toggle: boolean): void;
  function setSniperZoomFactor(value: number): void;
  function setSpecificPassengerIndexToUseInGroups(
    handle: number,
    value: number,
  ): void;
  function setSpritesDrawBeforeFade(toggle: boolean): void;
  function setStartFromFilterMenu(toggle: boolean): void;
  function setStateOfClosestDoorOfType(
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
  ): void;
  function setStatFrontendAlwaysVisible(toggle: boolean): void;
  function setStatFrontendDisplayType(value: number, value2: number): void;
  function setStatFrontendNeverVisible(value: number): void;
  function setStatFrontendVisibility(value: number, toggle: boolean): void;
  function setStatFrontendVisibleAfterIncremented(value: number): void;
  function setStreamingRequestListTime(value: number): void;
  function setStreamParams(value: number, value2: number): void;
  function setSuppressHeadlightSwitch(toggle: boolean): void;
  function setSwimSpeed(handle: number, value: number): void;
  function setSyncWeatherAndGameTime(toggle: boolean): void;
  function setTargetCarForMissionGarage(
    value: number,
    vehicle: NativeVehicle,
  ): void;
  function setTaxiGarageRadioState(toggle: boolean): void;
  function setTaxiLights(vehicle: NativeVehicle, toggle: boolean): void;
  function setTelescopeCamAngleLimits(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): void;
  function setTextBackground(toggle: boolean): void;
  function setTextCentre(toggle: boolean): void;
  function setTextCentreWrapx(value: number): void;
  function setTextColour(
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function setTextDrawBeforeFade(toggle: boolean): void;
  function setTextDropshadow(
    toggle: boolean,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function setTextEdge(
    toggle: boolean,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function setTextFont(value: number): void;
  function setTextInputActive(toggle: boolean): void;
  function setTextJustify(toggle: boolean): void;
  function setTextLineDisplay(value: number, value2: number): void;
  function setTextLineHeightMult(value: number): void;
  function setTextProportional(toggle: boolean): void;
  function setTextRenderId(value: number): void;
  function setTextRightJustify(toggle: boolean): void;
  function setTextScale(value: number, value2: number): void;
  function setTextToUseTextFileColours(toggle: boolean): void;
  function setTextUseUnderscore(toggle: boolean): void;
  function setTextViewportId(value: number): void;
  function setTextWrap(value: number, value2: number): void;
  function setThisMachineRunningServerScript(toggle: boolean): void;
  function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;
  function setTimeCycleFarClipDisabled(toggle: boolean): void;
  function setTimecycleModifier(text: string): void;
  function setTimeOfDay(value: number, value2: number): void;
  function setTimeOfNextAppointment(value: number): void;
  function setTimeOneDayBack(): void;
  function setTimeOneDayForward(): void;
  function settimera(value: number): void;
  function settimerb(value: number): void;
  function setTimerBeepCountdownTime(value: number, value2: number): void;
  function settimerc(value: number): void;
  function setTimeScale(value: number): void;
  function setTotalNumberOfMissions(value: number): void;
  function setTrainAudioRolloff(vehicle: NativeVehicle, value: number): void;
  function setTrainCruiseSpeed(vehicle: NativeVehicle, value: number): void;
  function setTrainForcedToSlowDown(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setTrainIsStoppedAtStation(vehicle: NativeVehicle): void;
  function setTrainSpeed(vehicle: NativeVehicle, value: number): void;
  function setTrainStopsForStations(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setUpsidedownCarNotDamaged(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setUseHighdof(toggle: boolean): void;
  function setUseLegIk(value: number, toggle: boolean): void;
  function setUsePoolGamePhysicsSettings(toggle: boolean): void;
  function setUsesCollisionOfClosestObjectOfType(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function setVariableOnSound(
    value: number,
    text: string,
    value2: number,
  ): void;
  function setVehAlarm(handle: number, toggle: boolean): void;
  function setVehAlarmDuration(handle: number, value: number): void;
  function setVehHasStrongAxles(handle: number, toggle: boolean): void;
  function setVehHazardlights(handle: NativeVehicle, toggle: boolean): void;
  function setVehicleAlpha(vehicle: NativeVehicle, value: number): void;
  function setVehicleAlwaysRender(vehicle: NativeVehicle): void;
  function setVehicleCanBeTargetted(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setVehicleDeformationMult(
    vehicle: NativeVehicle,
    value: number,
  ): void;
  function setVehicleDirtLevel(vehicle: NativeVehicle, value: number): void;
  function setVehicleExplodesOnHighExplosionDamage(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setVehicleIsConsideredByPlayer(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setVehicleQuaternion(
    vehicle: NativeVehicle,
    coords: Vec3,
    value: number,
  ): void;
  function setVehicleRenderScorched(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): void;
  function setVehicleSteerBias(vehicle: NativeVehicle, value: number): void;
  function setVehIndicatorlights(handle: number, toggle: boolean): void;
  function setVehInteriorlight(handle: number, toggle: boolean): void;
  function setViewport(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function setViewportDestination(
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function setViewportMirrored(value: number, toggle: boolean): void;
  function setViewportPriority(value: number, value2: number): void;
  function setViewportShape(value: number, value2: number): void;
  function setVisibilityOfClosestObjectOfType(
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function setVisibilityOfNearbyEntityWithSpecialAttribute(
    value: number,
    toggle: boolean,
  ): void;
  function setVoiceIdFromHeadComponent(
    handle: number,
    value: number,
    toggle: boolean,
  ): void;
  function setWantedMultiplier(value: number): void;
  function setWeaponPickupNetworkRegenTime(value: number, value2: number): void;
  function setWebPageLinkActive(
    value: number,
    value2: number,
    toggle: boolean,
  ): void;
  function setWebPageScroll(value: number, value2: number): void;
  function setWidescreenBorders(toggle: boolean): void;
  function setWidescreenFormat(value: number): void;
  function setZoneNoCops(text: string, toggle: boolean): void;
  function setZonePopulationType(text: string, value: number): void;
  function setZoneScumminess(text: string, value: number): void;
  function shakePad(value: number, value2: number, value3: number): unknown;
  function shakePadInCutscene(
    value: number,
    value2: number,
    value3: number,
  ): unknown;
  function shakePlayerpadWhenControllerDisabled(): unknown;
  function shiftLeft(value: number, value2: number): unknown;
  function shiftRight(value: number, value2: number): unknown;
  function showBlipOnAltimeter(value: number, toggle: boolean): unknown;
  function showSigninUi(): unknown;
  function showUpdateStats(toggle: boolean): unknown;
  function shutCarDoor(vehicle: NativeVehicle, value: number): unknown;
  function shutdownAndLaunchNetworkGame(value: number): void;
  function shutdownAndLaunchSinglePlayerGame(): void;
  function simulateUpdateLoadScene(): unknown;
  function sin(value: number): number;
  function skipInPlaybackRecordedCar(
    vehicle: NativeVehicle,
    value: number,
  ): unknown;
  function skipRadioForward(): unknown;
  function skipTimeInPlaybackRecordedCar(
    value: number,
    value2: number,
  ): unknown;
  function skipToEndAndStopPlaybackRecordedCar(vehicle: NativeVehicle): unknown;
  function skipToNextAllowedStation(handle: number): unknown;
  function skipToNextScriptedConversationLine(): unknown;
  function smashCarWindow(vehicle: NativeVehicle, value: number): unknown;
  function smashGlassOnObject(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): unknown;
  function snapshotCam(value: number, value2: number): unknown;
  function soundCarHorn(vehicle: NativeVehicle, value: number): unknown;
  function specifyScriptPopulationZoneArea(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): unknown;
  function specifyScriptPopulationZoneGroups(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): unknown;
  function specifyScriptPopulationZoneNumCars(value: number): unknown;
  function specifyScriptPopulationZoneNumParkedCars(value: number): unknown;
  function specifyScriptPopulationZoneNumPeds(value: number): unknown;
  function specifyScriptPopulationZoneNumScenarioPeds(value: number): unknown;
  function specifyScriptPopulationZonePercentageCops(value: number): unknown;
  function spotCheck5(): unknown;
  function spotCheck6(): unknown;
  function spotCheck7(): unknown;
  function spotCheck8(): unknown;
  function sqrt(value: number): number;
  function startCarFire(vehicle: NativeVehicle): void;
  function startCharFire(ped: NativePed): void;
  function startCredits(): void;
  function startCustomMobilePhoneRinging(value: number): void;
  function startCutscene(): void;
  function startCutsceneNow(text: string): void;
  function startEndCreditsMusic(): void;
  function startFiringAmnesty(): void;
  function startGpsRaceTrack(value: number): void;
  function startKillFrenzy(
    text: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    toggle: boolean,
  ): void;
  function startLoadScene(coords: Vec3): void;
  function startMobilePhoneCall(
    handle: number,
    text: string,
    handle2: number,
    text2: string,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function startMobilePhoneCalling(): void;
  function startMobilePhoneRinging(): void;
  function startNewScript(text: string, value: number): void;
  function startNewWidgetCombo(): void;
  function startPedMobileRinging(ped: NativePed, value: number): void;
  function startPlaybackRecordedCar(
    vehicle: NativeVehicle,
    value: number,
  ): void;
  function startPlaybackRecordedCarLooped(
    vehicle: NativeVehicle,
    value: number,
  ): void;
  function startPlaybackRecordedCarUsingAi(
    vehicle: NativeVehicle,
    value: number,
  ): void;
  function startPlaybackRecordedCarWithOffset(
    vehicle: NativeVehicle,
    value: number,
    coords: Vec3,
  ): void;
  function startPtfx(
    text: string,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function startPtfxOnPed(
    text: string,
    ped: NativePed,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function startPtfxOnPedBone(
    text: string,
    ped: NativePed,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function startPtfxOnVeh(
    text: string,
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function startScriptConversation(toggle: boolean, toggle2: boolean): void;
  function startScriptFire(coords: Vec3, value: number, value2: number): void;
  function startStreamingRequestList(text: string): void;
  function stopCarBreaking(vehicle: NativeVehicle, toggle: boolean): void;
  function stopCredits(): void;
  function stopCutscene(): void;
  function stopEndCreditsMusic(): void;
  function stopMobilePhoneRinging(): void;
  function stopMovie(): void;
  function stopPedDoingFallOffTestsWhenShot(ped: NativePed): void;
  function stopPedMobileRinging(ped: NativePed): void;
  function stopPedSpeaking(ped: NativePed, toggle: boolean): void;
  function stopPedWeaponFiringWhenDropped(ped: NativePed): void;
  function stopPlaybackRecordedCar(vehicle: NativeVehicle): void;
  function stopPreviewRingtone(): void;
  function stopPtfx(value: number): void;
  function stopSound(value: number): void;
  function stopStream(): void;
  function stopSyncingScriptAnimations(toggle: boolean): void;
  function stopVehicleAlwaysRender(vehicle: NativeVehicle): void;
  function storeCarCharIsInNoSave(vehicle: NativeVehicle): void;
  function storeScore(value: number): void;
  function storeWantedLevel(value: number): void;
  function streamCutscene(): unknown;
  function stringDifference(text: string, text2: string): unknown;
  function stringString(text: string, text2: string): unknown;
  function stringToInt(text: string): unknown;
  function suppressCarModel(value: number): unknown;
  function suppressFadeInAfterDeathArrest(toggle: boolean): unknown;
  function suppressPedModel(value: number): unknown;
  function swapNearestBuildingModel(
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): unknown;
  function switchAmbientPlanes(toggle: boolean): void;
  function switchArrowAboveBlippedPickups(toggle: boolean): void;
  function switchCarGenerator(value: number, value2: number): void;
  function switchCarSiren(vehicle: NativeVehicle, toggle: boolean): void;
  function switchGarbageTrucks(toggle: boolean): void;
  function switchMadDrivers(toggle: boolean): void;
  function switchObjectBrains(value: number, toggle: boolean): void;
  function switchOffWaypoint(): void;
  function switchPedPathsOff(coords: Vec3, coords2: Vec3): void;
  function switchPedPathsOn(coords: Vec3, coords2: Vec3): void;
  function switchPedRoadsBackToOriginal(coords: Vec3, coords2: Vec3): void;
  function switchPedToAnimated(ped: NativePed, toggle: boolean): void;
  function switchPedToRagdoll(
    ped: NativePed,
    value: number,
    value2: number,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
    toggle4: boolean,
  ): void;
  function switchPedToRagdollWithFall(
    ped: NativePed,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
    value11: number,
    value12: number,
    value13: number,
  ): void;
  function switchPoliceHelis(toggle: boolean): void;
  function switchRandomBoats(toggle: boolean): void;
  function switchRandomTrains(toggle: boolean): void;
  function switchRoadsBackToOriginal(coords: Vec3, coords2: Vec3): void;
  function switchRoadsOff(coords: Vec3, coords2: Vec3): void;
  function switchRoadsOn(coords: Vec3, coords2: Vec3): void;
  function switchStreaming(toggle: boolean): void;
  function synchAmbientPlanes(value: number, value2: number): unknown;
  function synchRecordingWithWater(): unknown;
  function takeCarOutOfParkedCarsBudget(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): unknown;
  function tan(value: number): number;
  function taskAchieveHeading(handle: number, value: number): void;
  function taskAimGunAtChar(
    ped: NativePed,
    ped2: NativePed,
    value: number,
  ): void;
  function taskAimGunAtCoord(
    handle: number,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function taskCarDriveToCoord(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
  ): void;
  function taskCarDriveWander(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function taskCarMission(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): void;
  function taskCarMissionCoorsTarget(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function taskCarMissionCoorsTargetNotAgainstTraffic(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function taskCarMissionNotAgainstTraffic(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): void;
  function taskCarMissionPedTarget(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    vehicle3: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function taskCarTempAction(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function taskCharArrestChar(ped: NativePed, ped2: NativePed): void;
  function taskChatWithChar(
    ped: NativePed,
    ped2: NativePed,
    toggle: boolean,
    toggle2: boolean,
  ): void;
  function taskClearLookAt(handle: number): void;
  function taskClimb(handle: number, toggle: boolean): void;
  function taskCombat(handle: number, handle2: number): void;
  function taskCombatHatedTargetsAroundChar(
    ped: NativePed,
    value: number,
  ): void;
  function taskCombatHatedTargetsAroundCharTimed(
    ped: NativePed,
    value: number,
    value2: number,
  ): void;
  function taskCombatTimed(
    handle: number,
    handle2: number,
    value: number,
  ): void;
  function taskCower(handle: number): void;
  function taskDead(handle: number): void;
  function taskDestroyCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): void;
  function taskDie(handle: number): void;
  function taskDriveBy(
    handle: number,
    handle2: number,
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
    toggle: boolean,
    value4: number,
  ): void;
  function taskDrivePointRoute(
    handle: number,
    value: number,
    value2: number,
  ): void;
  function taskEnterCarAsDriver(
    ped: NativePed,
    vehicle: NativeVehicle,
    value: number,
  ): void;
  function taskEnterCarAsPassenger(
    ped: NativePed,
    vehicle: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function taskEveryoneLeaveCar(vehicle: NativeVehicle): void;
  function taskFlushRoute(): void;
  function taskFollowNavMeshAndSlideToCoord(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function taskFollowNavMeshAndSlideToCoordHdgRate(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function taskFollowNavMeshToCoord(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function taskFollowNavMeshToCoordNoStop(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function taskGetOffBoat(vehicle: NativeVehicle, value: number): void;
  function taskGoStraightToCoord(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function taskGotoCharOffset(
    ped: NativePed,
    ped2: NativePed,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function taskGuardCurrentPosition(
    handle: number,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function taskHandsUp(handle: number, value: number): void;
  function taskHeliMission(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
    value11: number,
  ): void;
  function taskJump(handle: number, toggle: boolean): void;
  function taskLeaveAnyCar(vehicle: NativeVehicle): void;
  function taskLeaveCar(vehicle: NativeVehicle, vehicle2: NativeVehicle): void;
  function taskLeaveCarDontCloseDoor(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): void;
  function taskLeaveCarImmediately(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): void;
  function taskLeaveCarInDirection(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    toggle: boolean,
  ): void;
  function taskLeaveGroup(handle: number): void;
  function taskLookAtChar(
    ped: NativePed,
    ped2: NativePed,
    value: number,
    value2: number,
  ): void;
  function taskLookAtCoord(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function taskLookAtVehicle(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
    value2: number,
  ): void;
  function taskOpenDriverDoor(
    handle: number,
    handle2: number,
    value: number,
  ): void;
  function taskOpenPassengerDoor(
    handle: number,
    handle2: number,
    value: number,
    value2: number,
  ): void;
  function taskPause(handle: number, value: number): void;
  function taskPerformSequence(handle: number, value: number): void;
  function taskPlayAnimNonInterruptable(
    handle: Ped,
    text: string,
    text2: string,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
  ): void;
  function taskPlayAnimWithFlags(
    handle: number,
    text: string,
    text2: string,
    value: number,
    value2: number,
    value3: number,
  ): void;
  function taskSetCharDecisionMaker(ped: NativePed, value: number): void;
  function taskSetCombatDecisionMaker(handle: number, value: number): void;
  function taskSetIgnoreWeaponRangeFlag(handle: number, toggle: boolean): void;
  function taskShakeFist(handle: number): void;
  function taskShimmyClimbUp(handle: number): void;
  function taskShimmyLetGo(handle: number): void;
  function taskShootAtChar(
    ped: NativePed,
    ped2: NativePed,
    value: number,
    value2: number,
  ): void;
  function taskSmartFleeChar(
    ped: NativePed,
    ped2: NativePed,
    value: number,
    value2: number,
  ): void;
  function taskSmartFleeCharPreferringPavements(
    ped: NativePed,
    ped2: NativePed,
    value: number,
    value2: number,
  ): void;
  function taskSmartFleePoint(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function taskSmartFleePointPreferringPavements(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
  ): void;
  function taskStandGuard(
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    toggle: boolean,
    value3: number,
  ): void;
  function taskStandStill(handle: number, value: number): void;
  function taskSwapWeapon(handle: number, value: number): void;
  function taskSwimToCoord(handle: number, coords: Vec3): void;
  function taskTired(handle: number, value: number): void;
  function taskToggleDuck(handle: number, value: number): void;
  function taskTogglePedThreatScanner(
    ped: NativePed,
    toggle: boolean,
    toggle2: boolean,
    toggle3: boolean,
  ): void;
  function taskTurnCharToFaceChar(ped: NativePed, ped2: NativePed): void;
  function taskTurnCharToFaceCoord(ped: NativePed, coords: Vec3): void;
  function taskUseMobilePhone(handle: number, toggle: boolean): void;
  function taskUseMobilePhoneTimed(handle: number, value: number): void;
  function taskWanderStandard(handle: number): void;
  function taskWarpCharIntoCarAsDriver(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): void;
  function taskWarpCharIntoCarAsPassenger(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
  ): void;
  function tellNetPlayerToStartPlaying(value: number, toggle: boolean): unknown;
  function terminateAllScriptsForNetworkGame(): void;
  function terminateAllScriptsWithThisName(text: string): void;
  function terminateThisScript(): void;
  function thisScriptIsSafeForNetworkGame(): unknown;
  function thisScriptShouldBeSaved(): unknown;
  function timera(): unknown;
  function timerb(): unknown;
  function timerc(): unknown;
  function timestep(): unknown;
  function timestepunwarped(): unknown;
  function toFloat(value: number): unknown;
  function toggleToplevelSprite(toggle: boolean): unknown;
  function trainLeaveStation(vehicle: NativeVehicle): unknown;
  function triggerLoadingMusicOnNextFade(): void;
  function triggerMissionCompleteAudio(value: number): void;
  function triggerPoliceReport(text: string): void;
  function triggerPtfx(
    text: string,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function triggerPtfxOnPed(
    text: string,
    ped: NativePed,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function triggerPtfxOnPedBone(
    text: string,
    ped: NativePed,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function triggerPtfxOnVeh(
    text: string,
    handle: number,
    coords: Vec3,
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function triggerVehAlarm(handle: number): void;
  function triggerVigilanteCrime(value: number, coords: Vec3): void;
  function turnCarToFaceCoord(vehicle: NativeVehicle, coords: Vec2): unknown;
  function turnOffRadiohudInLobby(): unknown;
  function turnOffVehicleExtra(
    vehicle: NativeVehicle,
    value: number,
    toggle: boolean,
  ): unknown;
  function unattachCam(value: number): unknown;
  function unfreezeRadioStation(text: string): unknown;
  function uninheritCamRoll(value: number): unknown;
  function unloadTextFont(): unknown;
  function unlockGenericNewsStory(value: number): unknown;
  function unlockLazlowStation(): unknown;
  function unlockMissionNewsStory(value: number): unknown;
  function unlockRagdoll(handle: number, toggle: boolean): unknown;
  function unmarkAllRoadNodesAsDontWander(): unknown;
  function unobfuscateInt(value: number): unknown;
  function unobfuscateString(text: string): unknown;
  function unpauseGame(): unknown;
  function unpausePlaybackRecordedCar(vehicle: NativeVehicle): unknown;
  function unpauseRadio(): unknown;
  function unpointCam(value: number): void;
  function unregisterScriptWithAudio(): unknown;
  function unsetCharMeleeMovementConstaintBox(ped: NativePed): unknown;
  function updateLoadScene(): void;
  function updateNetworkStatistics(
    value: number,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function updatePedPhysicalAttachmentPosition(
    ped: NativePed,
    coords: Vec3,
    coords2: Vec2,
  ): void;
  function updatePtfxOffsets(
    value: number,
    coords: Vec3,
    value2: number,
    value3: number,
    value4: number,
  ): void;
  function updatePtfxTint(
    value: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
  ): void;
  function useMask(toggle: boolean): void;
  function usePlayerColourInsteadOfTeamColour(toggle: boolean): void;
  function usePreviousFontSettings(): void;
  function usingStandardControls(): unknown;
  function vdist(coords: Vec3, coords2: Vec3): number;
  function vdist2(coords: Vec3, coords2: Vec3): number;
  function vehicleCanBeTargettedByHsMissile(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): unknown;
  function vehicleDoesProvideCover(
    vehicle: NativeVehicle,
    toggle: boolean,
  ): unknown;
  function vmag(coords: Vec3): number;
  function vmag2(coords: Vec3): number;
  function wait(value: number): void;
  function wantedStarsAreFlashing(): unknown;
  function warpCharFromCarToCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
  ): unknown;
  function warpCharFromCarToCoord(
    vehicle: NativeVehicle,
    coords: Vec3,
  ): unknown;
  function warpCharIntoCar(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
  ): unknown;
  function warpCharIntoCarAsPassenger(
    vehicle: NativeVehicle,
    vehicle2: NativeVehicle,
    value: number,
  ): unknown;
  function wasCutsceneSkipped(): boolean;
  function washVehicleTextures(vehicle: NativeVehicle, value: number): boolean;
  function wasPedKilledByHeadshot(ped: NativePed): boolean;
  function wasPedSkeletonUpdated(ped: NativePed): boolean;
  function whatWillPlayerPickup(value: number): unknown;

  namespace network {
    function acceptInvite(value: number): unknown;
    function advertiseSession(toggle: boolean): unknown;
    function allPartyMembersPresent(): boolean;
    function amIBlockedByPlayer(value: number): boolean;
    function amIMutedByPlayer(value: number): boolean;
    function changeGameMode(
      value: number,
      value2: number,
      value3: number,
      value4: number,
    ): void;
    function changeGameModePending(): boolean;
    function changeGameModeSucceeded(): boolean;
    function checkInviteArrival(): unknown;
    function clearInviteArrival(): void;
    function clearSummons(): void;
    function didInviteFriend(text: string): boolean;
    function endSession(): void;
    function endSessionPending(): boolean;
    function expandTo32Players(): unknown;
    function findGame(
      value: number,
      toggle: boolean,
      value2: number,
      value3: number,
    ): unknown;
    function findGamePending(): boolean;
    function finishExtendedSearch(): unknown;
    function getFriendCount(): number;
    function getFriendName(value: number): string;
    function getGameMode(): number;
    function getHealthReticuleOption(): number;
    function getHostAverageRank(value: number): number;
    function getHostLatency(value: number): number;
    function getHostMatchProgress(value: number): number;
    function getHostServerName(value: number): string;
    function getLanSession(): number;
    function getMaxPrivateSlots(): number;
    function getMaxSlots(): number;
    function getNextTextChat(): string;
    function getNumberOfGames(): number;
    function getNumOpenPublicSlots(): number;
    function getNumPartyMembers(): number;
    function getNumPlayersMet(): number;
    function getNumUnacceptedInvites(): number;
    function getNumUnfilledReservations(): number;
    function getPlayerIdOfNextTextChat(): number;
    function getRendezvousHostPlayerId(): number;
    function getServerName(): string;
    function getUnacceptedInviteEpisode(value: number): number;
    function getUnacceptedInviterName(value: number): string;
    function hasStrictNat(): boolean;
    function haveAcceptedInvite(): boolean;
    function haveOnlinePrivileges(): boolean;
    function haveSummons(): boolean;
    function hostGameE1(
      value: number,
      toggle: boolean,
      value2: number,
      value3: number,
      value4: number,
      value5: number,
    ): unknown;
    function hostGamePending(): boolean;
    function hostGameSucceeded(): boolean;
    function hostRendezvousE1(
      value: number,
      value2: number,
      value3: number,
    ): unknown;
    function inviteFriend(text: string, text2: string): unknown;
    function isBeingKicked(): boolean;
    function isCommonEpisode(value: number): boolean;
    function isFindResultUpdated(value: number): boolean;
    function isFindResultValid(value: number): boolean;
    function isFriendInSameTitle(text: string): boolean;
    function isFriendOnline(text: string): boolean;
    function isGameRanked(): boolean;
    function isInviteeOnline(): boolean;
    function isNetworkAvailable(): boolean;
    function isOperationPending(): boolean;
    function isPlayerBlockedByMe(value: number): boolean;
    function isPlayerMutedByMe(value: number): boolean;
    function isPlayerTalking(value: number): boolean;
    function isPlayerTyping(value: number): boolean;
    function isRendezvous(): boolean;
    function isRendezvousHost(): boolean;
    function isRockstartSessionIdValid(): boolean;
    function isSessionAdvertise(): boolean;
    function isSessionInvitable(): boolean;
    function isSessionStarted(): boolean;
    function isTvt(): boolean;
    function joinGamePending(): boolean;
    function joinGameSucceeded(): boolean;
    function joinSummons(): unknown;
    function kickPlayer(value: number, toggle: boolean): unknown;
    function leaveGame(): unknown;
    function leaveGamePending(): boolean;
    function limitTo16Players(): unknown;
    function playerHasCommPrivs(): void;
    function playerHasDiedRecently(value: number): void;
    function playerHasHeadset(value: number): void;
    function playerHasKeyboard(value: number): void;
    function resultMatchesSearchCriteria(value: number): unknown;
    function returnToRendezvous(): unknown;
    function returnToRendezvousPending(): boolean;
    function returnToRendezvousSucceeded(): boolean;
    function setHealthReticuleOption(toggle: boolean): void;
    function setLanSession(toggle: boolean): void;
    function setLocalPlayerIsTyping(value: number): void;
    function setMatchProgress(value: number): void;
    function setPlayerMuted(value: number, toggle: boolean): void;
    function setServerName(text: string): void;
    function setSessionInvitable(toggle: boolean): void;
    function setTeamOnlyChat(toggle: boolean): void;
    function showMetPlayerFeedbackUi(value: number): unknown;
    function showPlayerFeedbackUi(value: number): unknown;
    function showPlayerProfileUi(value: number): unknown;
    function startSession(): void;
    function startSessionPending(): boolean;
    function startSessionSucceeded(): boolean;
    function stringVerifyPending(): boolean;
    function stringVerifySucceeded(): boolean;
  }
}
