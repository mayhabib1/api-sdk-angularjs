/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */
/**
 * Creates a instance of StringFile
 *
 * @constructor
 */
function StringFile() {
    this.id = null;     
    this.fileName = null;     
    this.fileType = null;     
    this.sourceColumns = null;     
    //Append to variable dictionary
    this._variableDict['fileName'] = 'file_name';
    this._variableDict['fileType'] = 'file_type';
    this._variableDict['sourceColumns'] = 'source_columns';
}

StringFile.prototype = new BaseModel();
StringFile.prototype.constructor = BaseModel;

/**
 * TODO: 
 *
 * @return {string}
 */
StringFile.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
StringFile.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: 
 *
 * @return {string}
 */
StringFile.prototype.getFileName = function() {
    return this.fileName;
};

/**
 * Setter for FileName
 * 
 * @param {string} value 
 */
StringFile.prototype.setFileName = function(value) {
    this.fileName = value;
};

/**
 * TODO: 
 *
 * @return {string}
 */
StringFile.prototype.getFileType = function() {
    return this.fileType;
};

/**
 * Setter for FileType
 * 
 * @param {string} value 
 */
StringFile.prototype.setFileType = function(value) {
    this.fileType = value;
};

/**
 * TODO: 
 *
 * @return {array}
 */
StringFile.prototype.getSourceColumns = function() {
    return this.sourceColumns;
};

/**
 * Setter for SourceColumns
 * 
 * @param {array} value 
 */
StringFile.prototype.setSourceColumns = function(value) {
    this.sourceColumns = value;
};





