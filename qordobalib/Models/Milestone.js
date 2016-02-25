/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */
/**
 * Creates a instance of Milestone
 *
 * @constructor
 */
function Milestone() {
    this.milestoneId = null;     
    this.name = null;     
    this.order = null;     
    //Append to variable dictionary
    this._variableDict['milestoneId'] = 'milestone_id';
}

Milestone.prototype = new BaseModel();
Milestone.prototype.constructor = BaseModel;

/**
 * TODO: 
 *
 * @return {int}
 */
Milestone.prototype.getMilestoneId = function() {
    return this.milestoneId;
};

/**
 * Setter for MilestoneId
 * 
 * @param {int} value 
 */
Milestone.prototype.setMilestoneId = function(value) {
    this.milestoneId = value;
};

/**
 * TODO: 
 *
 * @return {string}
 */
Milestone.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
Milestone.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: 
 *
 * @return {int}
 */
Milestone.prototype.getOrder = function() {
    return this.order;
};

/**
 * Setter for Order
 * 
 * @param {int} value 
 */
Milestone.prototype.setOrder = function(value) {
    this.order = value;
};





