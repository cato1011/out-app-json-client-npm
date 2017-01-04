/**
 * SIWIAT Out App - JSON
 * This is a description for the [Out App \"JSON\"](http://siwiat.com/app/view/?appname=json) for the SIWIAT App-Box.  This specification complies with the JSON App version 1.0.3 (Oct 2016)  [Learn more about SIWIAT](http://siwiat.com) 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Channel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Channel'));
  } else {
    // Browser globals (root is window)
    if (!root.SiwiatOutAppJson) {
      root.SiwiatOutAppJson = {};
    }
    root.SiwiatOutAppJson.GetChannelsResponse = factory(root.SiwiatOutAppJson.ApiClient, root.SiwiatOutAppJson.Channel);
  }
}(this, function(ApiClient, Channel) {
  'use strict';




  /**
   * The GetChannelsResponse model module.
   * @module model/GetChannelsResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetChannelsResponse</code>.
   * @alias module:model/GetChannelsResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetChannelsResponse} obj Optional instance to populate.
   * @return {module:model/GetChannelsResponse} The populated <code>GetChannelsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], [Channel]);
      }
      if (data.hasOwnProperty('errorno')) {
        obj['errorno'] = ApiClient.convertToType(data['errorno'], 'Number');
      }
      if (data.hasOwnProperty('errortype')) {
        obj['errortype'] = ApiClient.convertToType(data['errortype'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;
  /**
   * @member {Array.<module:model/Channel>} channels
   */
  exports.prototype['channels'] = undefined;
  /**
   * @member {Number} errorno
   */
  exports.prototype['errorno'] = undefined;
  /**
   * @member {String} errortype
   */
  exports.prototype['errortype'] = undefined;



  return exports;
}));


