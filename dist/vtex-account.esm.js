
/*!!
 * VtexAccount.js v0.0.1
 * https://github.com/zeindelf/vtex-account
 *
 * Copyright (c) 2017-2018 Zeindelf
 * Released under the MIT license
 *
 * Date: 2018-09-05T21:44:32.855Z
 */

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

// import CONSTANTS from './vtex-account.constants.js';

var Private = function Private() {
  classCallCheck(this, Private);
};

var _private = new Private();

var vtexAccountMethods = {
    foo: function foo() {
        _private.foo();
    }
};

/**
 * Create a VtexAccount class
 * Vtex utilities methods
 */

var VtexAccount = function VtexAccount() {
  classCallCheck(this, VtexAccount);

  /**
   * Version
   * @type {String}
   */
  this.version = '0.0.1';

  /**
   * Package name
   * @type {String}
   */
  this.name = '@VtexAccount';

  /**
   * Extend public methods
   * @type {Method}
   */
  this.globalHelpers.extend(VtexAccount.prototype, vtexAccountMethods);
};

export default VtexAccount;
