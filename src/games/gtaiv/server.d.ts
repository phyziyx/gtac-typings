import { Client } from "../../shared";

interface ServerEvents {
  OnAddIVNetworkEvent: (
    event: Event,
    client: Client,
    type: number,
    Name: string,
    Data1: number,
    Data2: number,
  ) => void;
  OnRequestSession: (event: Event, client: Client, Episode: number) => void;
}
