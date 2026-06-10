/**
 * GTAC does not have support for BigInt (?)
 */
export type Primitive = string | number | boolean | null | undefined;

export namespace gta {
  /**
   * @param enabled Whether civilians are to move around on internal path data for the local client.
   * @version 1.0.0 (Client)
   * @note The civilians are not synchronised.
   */
  function setCiviliansEnabled(enabled: boolean): void;
  function setPlanesEnabled(enabled: boolean): void;
  function setTrafficEnabled(enabled: boolean): void;
  function getTrafficDensity(): number;
}

export interface Client {
  /**
   * fetch the status of whether the client is the server console
   * @remarks the status of whether the client is server console
   * Due to the universal design of the server and client (internally called "net machines"), the server itself is a client. Since the server window/console accepts input, this property is available to check if the client is indeed the server. This is useful if you want to make a command only usable by the server console. Just add a command handler, and a simple check if the command was typed into the server console (instead of a player using the chatbox). See example on this page. It also works anywhere you want to check if a client object is the server.
   */
  readonly console: boolean;
  /**
   * fetch the game that the client is running
   * @remarks an integer representing a game
   * Server Game Defines
   */
  readonly game: number;
  /**
   * fetch the index for a client
   * @remarks an integer which is unique per client, representing a client
   */
  readonly index: number;
  /**
   * fetch the name of the client (the player username)
   * @remarks a string containing the client name
   */
  readonly name: string;
  /**
   * fetch the player object for a client
   * @remarks a handle to the player
   * See this page for more information on the difference between a client and player.
   */
  readonly player: Player;
  /**
   * disconnect a client from the server
   */
  disconnect(): void;
  /**
   * fetch custom data associated with a specified key for a client
   * @param key - The string name of the data to fetch the value for.
   * @returns the custom data associated with the specified key for the client
   */
  getData(key: string): any | null;
  /**
   * remove all custom data for a client
   */
  removeAllData(): void;
  /**
   * remove custom data associated with a specified key for a client
   * @param key - The string name of the data to remove.
   */
  removeData(key: string): void;
  /**
   * set custom data associated with a specified key for a client
   * @param key - The string name of the data to be set for the client.
   * @param value - The value of the data to be set for the client.
   * @param syncWithClientsNow - Whether the data is sent to clients immediately. Note that all element data will be sent to a client when the element streams in. This argument only applies when the method is used
   */
  setData(key: string, value: any, syncWithClientsNow: boolean): void;
}
