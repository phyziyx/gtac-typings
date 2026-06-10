import { Client } from "../shared";

interface ServerEvents {
  /**
   * @games III, VC, SA, IV
   */
  OnElementDestroy: (event: Event, client: Client, element: Element) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnElementStreamIn: (event: Event, client: Client, element: Element) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnElementStreamOut: (event: Event, client: Client, element: Element) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnPedSpawn: (event: Event, ped: Ped) => void;
  /**
   * @games III, VC, SA, IV
   */
  onPlayerChat: (event: Event, client: Client, message: string) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnPlayerCommand: (
    event: Event,
    client: Client,
    command: string,
    parameters: string,
  ) => void;
  /**
   * @games III, VC, SA, IV
   */
  onPlayerConnect: (event: Event, IP: string) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnPlayerJoin: (event: Event, client: Client) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnPlayerJoined: (event: Event, client: Client) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnPlayerQuit: (event: Event, client: Client, reason: string) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnProcess: (event: Event, deltaTime: number) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnResourceStart: (event: Event, resource: Resource) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnResourceStop: (event: Event, resource: Resource) => void;
  /**
   * @games III, VC, SA, IV
   */
  OnServerStart: () => void;
}
