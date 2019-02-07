/**
 * @fileoverview gRPC-Web generated client stub for data
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.data = require('./data_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.DataServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.data.DataServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.data.DataServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.data.DataServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ValueObjectRequest,
 *   !proto.data.ValueObject>}
 */
const methodInfo_DataService_RequestPO = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ValueObject,
  /** @param {!proto.data.ValueObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ValueObject.deserializeBinary
);


/**
 * @param {!proto.data.ValueObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ValueObject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ValueObject>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.DataServiceClient.prototype.requestPO =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.DataService/RequestPO',
      request,
      metadata,
      methodInfo_DataService_RequestPO,
      callback);
};


/**
 * @param {!proto.data.ValueObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ValueObject>}
 *     The XHR Node Readable Stream
 */
proto.data.DataServicePromiseClient.prototype.requestPO =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestPO(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.ValueObjectRequest,
 *   !proto.data.ValueObjectList>}
 */
const methodInfo_DataService_RequestPOList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.ValueObjectList,
  /** @param {!proto.data.ValueObjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.ValueObjectList.deserializeBinary
);


/**
 * @param {!proto.data.ValueObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.ValueObjectList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.ValueObjectList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.DataServiceClient.prototype.requestPOList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.DataService/RequestPOList',
      request,
      metadata,
      methodInfo_DataService_RequestPOList,
      callback);
};


/**
 * @param {!proto.data.ValueObjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.ValueObjectList>}
 *     The XHR Node Readable Stream
 */
proto.data.DataServicePromiseClient.prototype.requestPOList =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestPOList(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.data.CalloutRequest,
 *   !proto.data.CalloutResponse>}
 */
const methodInfo_DataService_RequestCallout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.data.CalloutResponse,
  /** @param {!proto.data.CalloutRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.data.CalloutResponse.deserializeBinary
);


/**
 * @param {!proto.data.CalloutRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.data.CalloutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.data.CalloutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.data.DataServiceClient.prototype.requestCallout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/data.DataService/RequestCallout',
      request,
      metadata,
      methodInfo_DataService_RequestCallout,
      callback);
};


/**
 * @param {!proto.data.CalloutRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.data.CalloutResponse>}
 *     The XHR Node Readable Stream
 */
proto.data.DataServicePromiseClient.prototype.requestCallout =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.requestCallout(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.data;
