/**
 * Things to clarify:
 *
 * Can there be > 1 `currency` condition?
 */

import { AddressZero } from "@ethersproject/constants";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { PublicMintCondition } from "../types/claim-conditions/PublicMintCondition";
import ClaimConditionPhase from "./ClaimConditionPhase";

/**
 * Expecations:
 *
 * 1. Ability to set a currency used to pay for the drop
 * 2. Configurable price
 * 3. *N* number of merkle conditions
 * 4. Configurable `quantityLimitPerTransaction
 *
 */

class ClaimConditionFactory {
  private conditions: ClaimConditionPhase[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  /**
   * Used internally when creating a drop module/updating
   * the claim conditions of a drop module.
   *
   * @internal
   *
   * @returns - The claim conditions that will be used when validating a users claim transaction.
   */
  protected buildConditions(): PublicMintCondition[] {
    const publicClaimConditions = this.conditions.map((c) =>
      c.buildPublicClaimCondition(),
    );

    // TODO: write test to ensure they're sorted by start time, earliest first
    const sorted = publicClaimConditions.sort((a, b) => {
      if (a.startTimestamp.eq(b.startTimestamp)) {
        return 0;
      } else if (a.startTimestamp.gt(b.startTimestamp)) {
        return 1;
      } else {
        return -1;
      }
    });

    return sorted;
  }

  /**
   * Currently supports loading:
   *
   * 1. The currency address, if set
   * 2. The price per token, if set
   *
   * @param conditions - The conditions to load, should be returned directly from the contract.
   * @returns - The loaded claim condition factory.
   */
  public fromPublicMintConditions(conditions: PublicMintCondition[]) {
    for (const condition of conditions) {
      const phase = new ClaimConditionPhase();

      // If there's a price, there must also be an associated currency
      if (condition.pricePerToken) {
        phase.setPrice(condition.pricePerToken, condition.currency);
      }

      if (condition.maxMintSupply) {
        phase.setMaxQuantity(condition.maxMintSupply);
      }

      // TODO: write a test to make sure the start time is parsed correctly
      phase.setConditionStartTime(
        new Date(condition.startTimestamp.toString()),
      );
    }
    return this;
  }

  /**
   * Creates a new claim 'phase' with its own set of claim conditions
   *
   * @param startTime - The start time of the phase in epoch seconds or a `Date` object.
   * @param maxQuantity - The max quantity of the phase. By default, this is set to be infinite. In most cases, if your drop only
   has a single phase, you don't need to override this value. If your drop has multiple phases, you should override this value and specify how many tokens are available for each specific phase.
   *
   * @returns - The claim condition builder.
   */
  public newClaimPhase({
    startTime,
    maxQuantity = ethers.constants.MaxUint256,
  }: {
    startTime: Date | number;
    maxQuantity?: BigNumberish;
  }): ClaimConditionPhase {
    const condition = new ClaimConditionPhase();

    condition.setConditionStartTime(startTime);
    condition.setMaxQuantity(maxQuantity);

    this.conditions.push(condition);
    return condition;
  }
}

export default ClaimConditionFactory;
