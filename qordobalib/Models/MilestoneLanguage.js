/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */
/**
 * Creates a instance of MilestoneLanguage
 *
 * @constructor
 */
function MilestoneLanguage() {
    this.milestone = null;     
    this.languages = null;     
}

MilestoneLanguage.prototype = new BaseModel();
MilestoneLanguage.prototype.constructor = BaseModel;

/**
 * TODO: 
 *
 * @return {Milestone}
 */
MilestoneLanguage.prototype.getMilestone = function() {
    return this.milestone;
};

/**
 * Setter for Milestone
 * 
 * @param {Milestone} value 
 */
MilestoneLanguage.prototype.setMilestone = function(value) {
    this.milestone = value;
};

/**
 * TODO: 
 *
 * @return {array}
 */
MilestoneLanguage.prototype.getLanguages = function() {
    return this.languages;
};

/**
 * Setter for Languages
 * 
 * @param {array} value 
 */
MilestoneLanguage.prototype.setLanguages = function(value) {
    this.languages = value;
};





