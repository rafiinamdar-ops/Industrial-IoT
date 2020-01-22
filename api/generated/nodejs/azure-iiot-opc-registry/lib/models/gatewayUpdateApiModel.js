/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Gateway registration update request
 *
 */
class GatewayUpdateApiModel {
  /**
   * Create a GatewayUpdateApiModel.
   * @property {string} [siteId] Site of the Gateway
   */
  constructor() {
  }

  /**
   * Defines the metadata of GatewayUpdateApiModel
   *
   * @returns {object} metadata of GatewayUpdateApiModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GatewayUpdateApiModel',
      type: {
        name: 'Composite',
        className: 'GatewayUpdateApiModel',
        modelProperties: {
          siteId: {
            required: false,
            serializedName: 'siteId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GatewayUpdateApiModel;