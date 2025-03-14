# Openapi validation
Validate your openapi specification with your API

* Input > Openapi specification, and an endpoint for the API.
* Output > A list of things in the API that does not match the specification.

The Openapi specification will be translated to HTTP calls to be used against the endpoint.

The returned response from the API call will be stored and compared with the examples in the specification.
