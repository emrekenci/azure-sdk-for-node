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
 * Class representing a JobCollectionQuota.
 */
class JobCollectionQuota {
  /**
   * Create a JobCollectionQuota.
   * @member {number} [maxJobCount] Gets or set the maximum job count.
   * @member {number} [maxJobOccurrence] Gets or sets the maximum job
   * occurrence.
   * @member {object} [maxRecurrence] Gets or set the maximum recurrence.
   * @member {string} [maxRecurrence.frequency] Gets or sets the frequency of
   * recurrence (second, minute, hour, day, week, month). Possible values
   * include: 'Minute', 'Hour', 'Day', 'Week', 'Month'
   * @member {number} [maxRecurrence.interval] Gets or sets the interval
   * between retries.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobCollectionQuota
   *
   * @returns {object} metadata of JobCollectionQuota
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobCollectionQuota',
      type: {
        name: 'Composite',
        className: 'JobCollectionQuota',
        modelProperties: {
          maxJobCount: {
            required: false,
            serializedName: 'maxJobCount',
            type: {
              name: 'Number'
            }
          },
          maxJobOccurrence: {
            required: false,
            serializedName: 'maxJobOccurrence',
            type: {
              name: 'Number'
            }
          },
          maxRecurrence: {
            required: false,
            serializedName: 'maxRecurrence',
            type: {
              name: 'Composite',
              className: 'JobMaxRecurrence'
            }
          }
        }
      }
    };
  }
}

module.exports = JobCollectionQuota;
