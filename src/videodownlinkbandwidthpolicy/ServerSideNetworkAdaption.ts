// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

/**
 * [[ServerSideNetworkAdaption]] represents additional server side features that can be enabled for network adaption.
 */
export enum ServerSideNetworkAdaption {
  /**
   * No features enabled.
   */
  None,

  /**
   * Disable the existing client side bandwidth probing methods of waiting and unpausing,
   * or waiting and upgrading simulcast streams (which can be large increases of bitrates
   * and may lead to periodic oversubscription over network capacity
   * and resulting video freezes) and replace it with more gradual server
   * side probing of increasing amounts padding packets until the
   * bandwidth estimate safely reaches the value needed to resume the
   * next video source, or upgrade to the next higher simulcast stream.
   *
   * When this is enabled, any policy 'probing' for bandwidth headroom
   * should be disabled. This may also enable pacing of some media packets from the server
   * side, and may also enable packet burst probing.
   *
   * End users should overall see reduced video freezes, reduced broken audio,
   * and reduced packet loss.
   */
  EnableBandwidthProbing,
}

export default ServerSideNetworkAdaption;
