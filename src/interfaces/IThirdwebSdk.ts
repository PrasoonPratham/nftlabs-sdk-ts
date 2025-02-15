import { Snapshot } from "../types/snapshots";

/* eslint-disable semi */
export default interface IThirdwebSdk {
  /**
   * Creates a snapshot from a list of leafs. The leafs could be addresses,
   * hashes, etc.
   *
   * @beta - This method is still in beta and the API is subject to change.
   *
   * @param leafs - The list of leafs to create a snapshot from (e.g. addresses)
   * @returns - An object containing the snapshot URI (which is uploaded to storage) and the merkle root (which can be used in a Claim Condition)
   */
  createSnapshot(leafs: string[]): Promise<{
    merkleRoot: string;
    snapshotUri: string;
    snapshot: Snapshot;
  }>;
}
