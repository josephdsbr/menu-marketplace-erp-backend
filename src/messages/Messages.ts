class Messages {
  // validation errors
  static ENTITY_NOT_FOUND = '001#Operation failed. %s not found'
  static TYPE_MISMATCH_REQUEST = '002#Invalid %s: Type mismatch (%s).'
  static REQUEST_METHOD_NOT_SUPPORTED =
    "003#Request method '%s' not supported or path parameter not found."
  static MALFORMED_JSON_REQUEST = '004#Malformed JSON request.'
  static DEFAULT_ERROR =
    '005#Internal error. If problem persists, contact support.'
  static PRODUCT_ALREADY_EXISTS = '006#Product name already exists.'
}

export default Messages
