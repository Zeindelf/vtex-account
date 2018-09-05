
// import CONSTANTS from './vtex-account.constants.js';
import vtexAccountMethods from './vtex-account.methods.js';

/**
 * Create a VtexAccount class
 * Vtex utilities methods
 */
class VtexAccount {
    constructor() {
        /**
         * Version
         * @type {String}
         */
        this.version = '0.0.2';

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
    }
}

export default VtexAccount;
