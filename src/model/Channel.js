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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SiwiatOutAppJson) {
      root.SiwiatOutAppJson = {};
    }
    root.SiwiatOutAppJson.Channel = factory(root.SiwiatOutAppJson.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Channel model module.
   * @module model/Channel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Channel</code>.
   * @alias module:model/Channel
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Channel} obj Optional instance to populate.
   * @return {module:model/Channel} The populated <code>Channel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('channelmetaid')) {
        obj['channelmetaid'] = ApiClient.convertToType(data['channelmetaid'], 'Number');
      }
      if (data.hasOwnProperty('valueid')) {
        obj['valueid'] = ApiClient.convertToType(data['valueid'], 'String');
      }
      if (data.hasOwnProperty('app')) {
        obj['app'] = ApiClient.convertToType(data['app'], 'String');
      }
      if (data.hasOwnProperty('deviceid')) {
        obj['deviceid'] = ApiClient.convertToType(data['deviceid'], 'Number');
      }
      if (data.hasOwnProperty('devicecaption')) {
        obj['devicecaption'] = ApiClient.convertToType(data['devicecaption'], 'String');
      }
      if (data.hasOwnProperty('channelno')) {
        obj['channelno'] = ApiClient.convertToType(data['channelno'], 'Number');
      }
      if (data.hasOwnProperty('interval')) {
        obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
      }
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('measurementname')) {
        obj['measurementname'] = ApiClient.convertToType(data['measurementname'], 'String');
      }
      if (data.hasOwnProperty('unitname')) {
        obj['unitname'] = ApiClient.convertToType(data['unitname'], 'String');
      }
      if (data.hasOwnProperty('valuemin')) {
        obj['valuemin'] = ApiClient.convertToType(data['valuemin'], 'Number');
      }
      if (data.hasOwnProperty('valuemax')) {
        obj['valuemax'] = ApiClient.convertToType(data['valuemax'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} channelmetaid
   */
  exports.prototype['channelmetaid'] = undefined;
  /**
   * deviceid-channelno
   * @member {String} valueid
   */
  exports.prototype['valueid'] = undefined;
  /**
   * @member {String} app
   */
  exports.prototype['app'] = undefined;
  /**
   * @member {Number} deviceid
   */
  exports.prototype['deviceid'] = undefined;
  /**
   * @member {String} devicecaption
   */
  exports.prototype['devicecaption'] = undefined;
  /**
   * @member {Number} channelno
   */
  exports.prototype['channelno'] = undefined;
  /**
   * @member {Number} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * @member {String} caption
   */
  exports.prototype['caption'] = undefined;
  /**
   * @member {String} measurementname
   */
  exports.prototype['measurementname'] = undefined;
  /**
   * @member {String} unitname
   */
  exports.prototype['unitname'] = undefined;
  /**
   * @member {Number} valuemin
   */
  exports.prototype['valuemin'] = undefined;
  /**
   * @member {Number} valuemax
   */
  exports.prototype['valuemax'] = undefined;



  return exports;
}));


