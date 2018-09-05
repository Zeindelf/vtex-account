
// import CONSTANTS from './vtex-account.constants.js';
import Private from './vtex-account.private.js';

const _private = new Private();

export default {
    foo() {
        _private.foo();
    },
};
