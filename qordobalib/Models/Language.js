/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */
/**
 * Creates a instance of Language
 *
 * @constructor
 */
function Language() {
    this.id = null;     
    this.users = null;     
}

Language.prototype = new BaseModel();
Language.prototype.constructor = BaseModel;

/**
 * TODO: 
 *
 * @return {int}
 */
Language.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int} value 
 */
Language.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: 
 *
 * @return {array}
 */
Language.prototype.getUsers = function() {
    return this.users;
};

/**
 * Setter for Users
 * 
 * @param {array} value 
 */
Language.prototype.setUsers = function(value) {
    this.users = value;
};





