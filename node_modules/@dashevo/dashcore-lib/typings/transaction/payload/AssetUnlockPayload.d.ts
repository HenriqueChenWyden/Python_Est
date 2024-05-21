/**
 * @typedef {Object} AssetUnlockPayloadJSON
 * @property {number} version
 * @property {number} index
 * @property {number} fee
 * @property {number} requestHeight
 * @property {string} quorumHash
 * @property {string} quorumSig
 */
export type AssetUnlockPayloadJSON = {
  version: number;
  index: number,
  fee: number,
  requestHeight: number,
  quorumHash: string,
  quorumSig: string,
};

/**
 * @class AssetUnlockPayload
 * @property {number} version
 * @property {number} index
 * @property {number} fee
 * @property {number} requestHeight
 * @property {string} quorumHash
 * @property {string} quorumSig
 */
export class AssetUnlockPayload {
  /**
   * Parse raw transition payload
   * @param {Buffer} rawPayload
   * @return {AssetUnlockPayload}
   */
  static fromBuffer(rawPayload: Buffer): AssetUnlockPayload;

  /**
   * Create new instance of payload from JSON
   * @param {string|AssetUnlockPayloadJSON} payloadJson
   * @return {AssetUnlockPayload}
   */
  static fromJSON(payloadJson: string | AssetUnlockPayloadJSON): AssetUnlockPayload;

  /**
   * Validates payload data
   * @return {boolean}
   */
  validate(): boolean;

  /**
   * Serializes payload to JSON
   * @return {AssetUnlockPayloadJSON}
   */
  toJSON(): AssetUnlockPayloadJSON;

  /**
   * Serialize payload to buffer
   * @return {Buffer}
   */
  toBuffer(): Buffer;

  /**
   * Copy payload instance
   * @return {AssetUnlockPayload}
   */
  copy(): AssetUnlockPayload;

  version: number;
  index: number;
  fee: number;
  requestHeight: number;
  quorumHash: string;
  quorumSig: string;
}
