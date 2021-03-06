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
 * Defines the application health policy map used to evaluate the health of an
 * application or one of its children entities.
 *
 *
 */
class ApplicationHealthPolicies {
  /**
   * Create a ApplicationHealthPolicies.
   * @member {array} [applicationHealthPolicyMap]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationHealthPolicies
   *
   * @returns {object} metadata of ApplicationHealthPolicies
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationHealthPolicies',
      type: {
        name: 'Composite',
        className: 'ApplicationHealthPolicies',
        modelProperties: {
          applicationHealthPolicyMap: {
            required: false,
            serializedName: 'ApplicationHealthPolicyMap',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationHealthPolicyMapItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationHealthPolicyMapItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationHealthPolicies;
