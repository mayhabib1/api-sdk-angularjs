/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */
/**
 * Creates a instance of Project
 *
 * @constructor
 */
function Project() {
    this.name = null;     
    this.sourceLanguage = null;     
    this.contentType = null;     
    this.organizationId = null;     
    this.targetLanguages = null;     
    this.milestones = null;     
    this.stringFiles = null;     
    //Append to variable dictionary
    this._variableDict['sourceLanguage'] = 'source_language';
    this._variableDict['contentType'] = 'content_type';
    this._variableDict['organizationId'] = 'organization_id';
    this._variableDict['targetLanguages'] = 'target_languages';
    this._variableDict['stringFiles'] = 'string_files';
}

Project.prototype = new BaseModel();
Project.prototype.constructor = BaseModel;

/**
 * TODO: 
 *
 * @return {string}
 */
Project.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
Project.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: 
 *
 * @return {int}
 */
Project.prototype.getSourceLanguage = function() {
    return this.sourceLanguage;
};

/**
 * Setter for SourceLanguage
 * 
 * @param {int} value 
 */
Project.prototype.setSourceLanguage = function(value) {
    this.sourceLanguage = value;
};

/**
 * TODO: 
 *
 * @return {int}
 */
Project.prototype.getContentType = function() {
    return this.contentType;
};

/**
 * Setter for ContentType
 * 
 * @param {int} value 
 */
Project.prototype.setContentType = function(value) {
    this.contentType = value;
};

/**
 * TODO: 
 *
 * @return {string}
 */
Project.prototype.getOrganizationId = function() {
    return this.organizationId;
};

/**
 * Setter for OrganizationId
 * 
 * @param {string} value 
 */
Project.prototype.setOrganizationId = function(value) {
    this.organizationId = value;
};

/**
 * TODO: 
 *
 * @return {array}
 */
Project.prototype.getTargetLanguages = function() {
    return this.targetLanguages;
};

/**
 * Setter for TargetLanguages
 * 
 * @param {array} value 
 */
Project.prototype.setTargetLanguages = function(value) {
    this.targetLanguages = value;
};

/**
 * TODO: 
 *
 * @return {array}
 */
Project.prototype.getMilestones = function() {
    return this.milestones;
};

/**
 * Setter for Milestones
 * 
 * @param {array} value 
 */
Project.prototype.setMilestones = function(value) {
    this.milestones = value;
};

/**
 * TODO: 
 *
 * @return {array}
 */
Project.prototype.getStringFiles = function() {
    return this.stringFiles;
};

/**
 * Setter for StringFiles
 * 
 * @param {array} value 
 */
Project.prototype.setStringFiles = function(value) {
    this.stringFiles = value;
};





