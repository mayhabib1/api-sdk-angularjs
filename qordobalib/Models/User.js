/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */
/**
 * Creates a instance of User
 *
 * @constructor
 */
function User() {
    this.id = null;     
}

User.prototype = new BaseModel();
User.prototype.constructor = BaseModel;

/**
 * TODO: 
 *
 * @return {int}
 */
User.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {int} value 
 */
User.prototype.setId = function(value) {
    this.id = value;
};





