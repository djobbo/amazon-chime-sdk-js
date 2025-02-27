// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import PrefetchOn from './PrefetchOn';

/**
 * [[MessagingSessionConfiguration]] contains the information necessary to start
 * a messaging session.
 */
/* eslint  @typescript-eslint/no-explicit-any: 0, @typescript-eslint/explicit-module-boundary-types: 0 */
export default class MessagingSessionConfiguration {
  /**
   * Maximum amount of time in milliseconds to allow for reconnecting.
   */
  reconnectTimeoutMs: number = 10 * 1000;

  /**
   * Fixed wait amount in milliseconds between reconnecting attempts.
   */
  reconnectFixedWaitMs: number = 0;

  /**
   * The short back off time in milliseconds between reconnecting attempts.
   */
  reconnectShortBackoffMs: number = 1 * 1000;

  /**
   * The long back off time in milliseconds between reconnecting attempts.
   */
  reconnectLongBackoffMs: number = 5 * 1000;

  /**
   * The enum to indicate if we want to turn on prefetch feature. Prefetch feature will send out CHANNEL_DETAILS event
   * upon websocket connection, which includes information about channel, channel messages, channel memberships etc.
   */
  prefetchOn: PrefetchOn | undefined = undefined;

  /**
   * Constructs a MessagingSessionConfiguration optionally with userArn, messaging session id, a messaging session
   * endpoint URL, and the chimeClient.
   * The messaging session id is to uniquely identify this messaging session for the userArn.
   * If messaging session id is passed in as null, it will be automatically generated.
   */
  constructor(
    public userArn: string,
    public messagingSessionId: string | null,
    public endpointUrl: string,
    public chimeClient: any
  ) {
    if (!this.messagingSessionId) {
      this.messagingSessionId = this.generateSessionId();
    }
  }

  private generateSessionId(): string {
    const num = new Uint32Array(1);
    const randomNum = window.crypto.getRandomValues(num);
    return randomNum[0].toString();
  }
}
