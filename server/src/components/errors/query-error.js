
class QueryError extends Error {
  constructor(message, code, status, uri) {
    super(message);
    this.message = message || 'There is an error due to database query';
    this.code = code || 'Server Error';
    this.uri = uri || '';
    this.status = status || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default QueryError;
