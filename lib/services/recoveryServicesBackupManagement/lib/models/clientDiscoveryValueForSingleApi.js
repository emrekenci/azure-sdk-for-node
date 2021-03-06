/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Available operation details.
 *
 */
class ClientDiscoveryValueForSingleApi {
  /**
   * Create a ClientDiscoveryValueForSingleApi.
   * @member {string} [name] Name
   * @member {object} [display] Contains the localized display information for
   * this particular operation
   * @member {string} [display.provider] Name of the provider for display
   * purposes
   * @member {string} [display.resource] Name of the resource type for display
   * purposes
   * @member {string} [display.operation] Name of the operation for display
   * purposes
   * @member {string} [display.description] Description of the operation for
   * display purposes
   * @member {string} [origin] The intended executor of the operation;governs
   * the display of the operation in the RBAC UX and the audit logs UX
   * @member {object} [properties] Properties
   * @member {object} [properties.serviceSpecification] Operation properties.
   * @member {array} [properties.serviceSpecification.logSpecifications] List
   * of log specifications of this operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ClientDiscoveryValueForSingleApi
   *
   * @returns {object} metadata of ClientDiscoveryValueForSingleApi
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ClientDiscoveryValueForSingleApi',
      type: {
        name: 'Composite',
        className: 'ClientDiscoveryValueForSingleApi',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'Display',
            type: {
              name: 'Composite',
              className: 'ClientDiscoveryDisplay'
            }
          },
          origin: {
            required: false,
            serializedName: 'Origin',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'Properties',
            type: {
              name: 'Composite',
              className: 'ClientDiscoveryForProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = ClientDiscoveryValueForSingleApi;
