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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the LocationThresholdRuleCondition class.
 * @constructor
 * A rule condition based on a certain number of locations failing.
 *
 * @member {object} [dataSource] the resource from which the rule collects its
 * data.
 * 
 * @member {string} [dataSource.odatatype] Polymorhpic Discriminator
 * 
 * @member {moment.duration} [windowSize] the period of time (in ISO 8601
 * duration format) that is used to monitor alert activity based on the
 * threshold. If specified then it must be between 5 minutes and 1 day.
 * 
 * @member {number} failedLocationCount the number of locations that must fail
 * to activate the alert.
 * 
 */
function LocationThresholdRuleCondition() {
  LocationThresholdRuleCondition['super_'].call(this);
}

util.inherits(LocationThresholdRuleCondition, models['RuleCondition']);

/**
 * Defines the metadata of LocationThresholdRuleCondition
 *
 * @returns {object} metadata of LocationThresholdRuleCondition
 *
 */
LocationThresholdRuleCondition.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition',
    type: {
      name: 'Composite',
      className: 'LocationThresholdRuleCondition',
      modelProperties: {
        odatatype: {
          required: true,
          serializedName: 'odata\\.type',
          type: {
            name: 'String'
          }
        },
        dataSource: {
          required: false,
          serializedName: 'dataSource',
          type: {
            name: 'Composite',
            polymorphicDiscriminator: {
              serializedName: 'odata.type',
              clientName: 'odatatype'
            },
            uberParent: 'RuleDataSource',
            className: 'RuleDataSource'
          }
        },
        windowSize: {
          required: false,
          serializedName: 'windowSize',
          type: {
            name: 'TimeSpan'
          }
        },
        failedLocationCount: {
          required: true,
          serializedName: 'failedLocationCount',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = LocationThresholdRuleCondition;