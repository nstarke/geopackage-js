/**
 * SpatialReferenceSystem module.
 * @module dao/spatialReferenceSystem
 * @see module:dao/dao
 */

var Dao = require('../../dao/dao');
var util = require('util');

/**
 * Spatial Reference System object. The coordinate reference system definitions it contains are referenced by the GeoPackage Contents and GeometryColumns objects to relate the vector and tile data in user tables to locations on the earth.
 * @class SpatialReferenceSystem
 */
var SpatialReferenceSystem = function() {
  /**
   * Human readable name of this SRS
   * @member {string}
   */
  this.srsName;
  /**
   * Unique identifier for each Spatial Reference System within a GeoPackage
   * @member {Number}
   */
  this.srsId;

  /**
   * Case-insensitive name of the defining organization e.g. EPSG or epsg
   * @member {string}
   */
  this.organization;

  /**
   * Numeric ID of the Spatial Reference System assigned by the organization
   * @member {Number}
   */
  this.organizationCoordsysId;

  /**
   * Well-known Text [32] Representation of the Spatial Reference System
   * @member {string}
   */
  this.definition;

  /**
   * Human readable description of this SRS
   * @member {string}
   */
  this.description;
};

SpatialReferenceSystem.prototype.populateFromResult = function (result) {
  this.srsName = result.srs_name;
  this.srsId = result.srs_id;
  this.organization = result.organization;
  this.organizationCoordsysId = result.organization_coordsys_id;
  this.definition = result.definition;
};

  // /**
  //  * Contents
  //  */
  // @ForeignCollectionField(eager = false)
  // private ForeignCollection<Contents> contents;
  //
  // /**
  //  * Geometry Columns
  //  */
  // @ForeignCollectionField(eager = false)
  // private ForeignCollection<GeometryColumns> geometryColumns;
  //
  // /**
  //  * Matrix Tile Set
  //  */
  // @ForeignCollectionField(eager = false)
  // private ForeignCollection<TileMatrixSet> tileMatrixSet;



/**
 * Spatial Reference System Data Access Object
 * @class SpatialReferenceSystemDao
 * @extends {module:dao/dao~Dao}
 */
var SpatialReferenceSystemDao = function(connection) {
  Dao.call(this, connection);
}

util.inherits(SpatialReferenceSystemDao, Dao);

/**
 * Get the Spatial Reference System for the provided id
 * @param  {Number}   srsId Absolute path to the GeoPackage to open
 * @param {callback} callback called with an error if one occurred and the SpatialReferenceSystem if one exists in this GeoPackage with the id
 */
SpatialReferenceSystemDao.prototype.getBySrsId = function(srsId, callback) {
  this.queryForIdObject(srsId, function(err, result) {
    if (err) return callback(err);
    var srs = new SpatialReferenceSystem();
    srs.populateFromResult(result);
    return callback(err, srs);
  });
};

/**
 * Creates the required EPSG WGS84 Spatial Reference System (spec
 * Requirement 11)
 *
 * @param {callback} callback called with an error if one occurred and the wgs84 srs
 */
SpatialReferenceSystemDao.prototype.createWgs84 = function(callback) {
  callback(new Error("not implemented"));
}

/**
 * Creates the required Undefined Cartesian Spatial Reference System (spec
 * Requirement 11)
 *
 * @param {callback} callback called with an error if one occurred and the undefined cartesian srs
 */
SpatialReferenceSystemDao.prototype.createUndefinedCartesian = function(callback) {
  callback(new Error("not implemented"));
}

/**
 * Creates the required Undefined Geographic Spatial Reference System (spec
 * Requirement 11)
 *
 * @param {callback} callback called with an error if one occurred and the undefined Geographic srs
 */
SpatialReferenceSystemDao.prototype.createUndefinedGeographic = function(callback) {
  callback(new Error("not implemented"));
}

/**
 * Creates the Web Mercator Spatial Reference System if it does not already
 * exist
 *
 * @param {callback} callback called with an error if one occurred and the Web Mercator srs
 */
SpatialReferenceSystemDao.prototype.createWebMercator = function(callback) {
  callback(new Error("not implemented"));
}

/**
 *  Delete the Spatial Reference System, cascading
 *
 *  @param {SpatialReferenceSystem} srs
 *  @param {callback} callback called with an error if one occurred and rows deleted
 */
SpatialReferenceSystemDao.prototype.deleteCascade = function (srs, callback) {
  callback(new Error("not implemented"));
};

/**
 *  Delete the Spatial Reference System where, cascading
 *
 *  @param {string}     where clause
 *  @param {string} where args
 *  @param {callback} callback called with an error if one occurred and rows deleted
 */
SpatialReferenceSystemDao.prototype.deleteCascadeWhere = function (where, whereArgs, callback) {
  callback(new Error("not implemented"));
};

/**
 *  Delete the Spatial Reference System by id, cascading
 *
 *  @param {Number} id
 *  @param {callback} callback called with an error if one occurred and rows deleted
 */
SpatialReferenceSystemDao.prototype.deleteByIdCascade = function (id, callback) {
  callback(new Error("not implemented"));
};

/**
 *  Delete the Spatial Reference System by ids, cascading
 *
 *  @param {Array} ids
 *  @param {callback} callback called with an error if one occurred and rows deleted
 */
SpatialReferenceSystemDao.prototype.deleteByIdsCascade = function (id, callback) {
  callback(new Error("not implemented"));
};

/**
 *  Get Contents referencing the SRS
 *
 *  @param {SpatialReferenceSystem} srs
 *  @param {callback} callback called with an error if one occurred and the {Contents}
 */
SpatialReferenceSystemDao.prototype.getContents = function (srs, callback) {
  callback(new Error("not implemented"));
};

/**
 *  Get Geometry Columns referencing the SRS
 *
 *  @param {SpatialReferenceSystem} srs
 *  @param {callback} callback called with an error if one occurred and the {module:dao/geometryColumns~GeometryColumns}
 */
SpatialReferenceSystemDao.prototype.getGeometryColumns = function (srs, callback) {
  callback(new Error("not implemented"));
};

/**
 *  Get Tile Matrix Sets referencing the SRS
 *
 *  @param {SpatialReferenceSystem} srs
 *  @param {callback} callback called with an error if one occurred and the {TileMatrixSet}
 */
SpatialReferenceSystemDao.prototype.getTileMatrixSet = function (srs, callback) {
  callback(new Error("not implemented"));
};

/**
 * Table Name
 * @type {String}
 */
SpatialReferenceSystemDao.prototype.tableName = 'gpkg_spatial_ref_sys';

/**
 * srsName field name
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_SRS_NAME = "srs_name";

/**
 * srsId field name
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_SRS_ID = "srs_id";

/**
 * id field name, srsId
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_ID = SpatialReferenceSystemDao.COLUMN_SRS_ID;

/**
 * organization field name
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_ORGANIZATION = "organization";

/**
 * organizationCoordsysId field name
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_ORGANIZATION_COORDSYS_ID = "organization_coordsys_id";

/**
 * definition field name
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_DEFINITION = "definition";

/**
 * description field name
 * @type {String}
 */
SpatialReferenceSystemDao.COLUMN_DESCRIPTION = "description";

SpatialReferenceSystemDao.prototype.idColumns = [SpatialReferenceSystemDao.COLUMN_SRS_ID];
SpatialReferenceSystemDao.prototype.colunns =
  [SpatialReferenceSystemDao.COLUMN_SRS_NAME, SpatialReferenceSystemDao.COLUMN_SRS_ID, SpatialReferenceSystemDao.COLUMN_ORGANIZATION, SpatialReferenceSystemDao.COLUMN_ORGANIZATION_COORDSYS_ID, SpatialReferenceSystemDao.COLUMN_DEFINITION, SpatialReferenceSystemDao.COLUMN_DESCRIPTION];

module.exports.SpatialReferenceSystemDao = SpatialReferenceSystemDao;
module.exports.SpatialReferenceSystem = SpatialReferenceSystem;