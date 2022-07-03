// @ts-nocheck
export default [
  {
    "openapi": "3.0.0",
    "info": {
      "description": "\nOpenAPI 2.0 document for fission controller\n* ObjectMeta (v1.ObjectMeta) should be empty when creating a CRD resource. Kubernetes will assign it automatically.\n* Following semantic errors are known issues and won't affect the API accessibility.\n  - Operations must have unique operationIds.\n  - All scale semantic errors. (Due to go-restful exposes inner fields of k8s struct).\n",
      "title": "Fission OpenAPI 2.0",
      "version": "v1"
    },
    "paths": {
      "/proxy/storage/v1/archive": {
        "get": {
          "tags": [
            "StorageServiceProxy"
          ],
          "summary": "Get archive",
          "operationId": "getArchives",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "post": {
          "tags": [
            "StorageServiceProxy"
          ],
          "summary": "Create archive",
          "operationId": "createArchives",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        },
        "delete": {
          "tags": [
            "StorageServiceProxy"
          ],
          "summary": "Delete archive",
          "operationId": "deleteArchives",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/v2/canaryconfigs": {
        "get": {
          "tags": [
            "CanaryConfig"
          ],
          "summary": "List all canary configs",
          "operationId": "getCanaryConfigs",
          "parameters": [
            {
              "description": "Namespace of canaryConfig",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of canaryConfigs",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.CanaryConfig"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "CanaryConfig"
          ],
          "summary": "Create canary config",
          "operationId": "createCanaryConfigs",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.CanaryConfig"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created canaryConfig",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/canaryconfigs/{canaryConfig}": {
        "get": {
          "tags": [
            "CanaryConfig"
          ],
          "summary": "Get detail of canary config",
          "operationId": "getCanaryConfig",
          "parameters": [
            {
              "description": "CanaryConfig name",
              "name": "canaryConfig",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of canaryConfig",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A canaryConfig",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.CanaryConfig"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "CanaryConfig"
          ],
          "summary": "Update canary config",
          "operationId": "updateCanaryConfig",
          "parameters": [
            {
              "description": "CanaryConfig name",
              "name": "canaryConfig",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.CanaryConfig"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated canaryConfig",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "CanaryConfig"
          ],
          "summary": "Delete canary config",
          "operationId": "deleteCanaryConfig",
          "parameters": [
            {
              "description": "CanaryConfig name",
              "name": "canaryConfig",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of canaryConfig",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/environments": {
        "get": {
          "tags": [
            "Environment"
          ],
          "summary": "List all environments",
          "operationId": "getEnvironments",
          "parameters": [
            {
              "description": "Namespace of environment",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of environments",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.Environment"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "Environment"
          ],
          "summary": "Create environment",
          "operationId": "createEnvironments",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.Environment"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created environment",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/environments/{environment}": {
        "get": {
          "tags": [
            "Environment"
          ],
          "summary": "Get detail of environment",
          "operationId": "getEnvironment",
          "parameters": [
            {
              "description": "Environment name",
              "name": "environment",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of environment",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A environment",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.Environment"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "Environment"
          ],
          "summary": "Update environment",
          "operationId": "updateEnvironment",
          "parameters": [
            {
              "description": "Environment name",
              "name": "environment",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.Environment"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated environment",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "Environment"
          ],
          "summary": "Delete environment",
          "operationId": "deleteEnvironment",
          "parameters": [
            {
              "description": "Environment name",
              "name": "environment",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of environment",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/functions": {
        "get": {
          "tags": [
            "Function"
          ],
          "summary": "List all functions",
          "operationId": "getFunctions",
          "parameters": [
            {
              "description": "Namespace of function",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of functions",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.Function"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "Function"
          ],
          "summary": "Create function",
          "operationId": "createFunctions",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.Function"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of created function",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/functions/{function}": {
        "get": {
          "tags": [
            "Function"
          ],
          "summary": "Get detail of function",
          "operationId": "getFunction",
          "parameters": [
            {
              "description": "Function name",
              "name": "function",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of function",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A function",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.Function"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "Function"
          ],
          "summary": "Update function",
          "operationId": "updateFunction",
          "parameters": [
            {
              "description": "Function name",
              "name": "function",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.Function"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated function",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "Function"
          ],
          "summary": "Delete function",
          "operationId": "deleteFunction",
          "parameters": [
            {
              "description": "Function name",
              "name": "function",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of function",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/packages": {
        "get": {
          "tags": [
            "Package"
          ],
          "summary": "List all packages",
          "operationId": "getPackages",
          "parameters": [
            {
              "description": "Namespace of package",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of packages",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.Package"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "Package"
          ],
          "summary": "Create package",
          "operationId": "createPackages",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.Package"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created package",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/packages/{package}": {
        "get": {
          "tags": [
            "Package"
          ],
          "summary": "Get detail of package",
          "operationId": "getPackage",
          "parameters": [
            {
              "description": "Package name",
              "name": "package",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of package",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A package",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.Package"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "Package"
          ],
          "summary": "Update package",
          "operationId": "updatePackage",
          "parameters": [
            {
              "description": "Package name",
              "name": "package",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.Package"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated package",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "Package"
          ],
          "summary": "Delete package",
          "operationId": "deletePackage",
          "parameters": [
            {
              "description": "Package name",
              "name": "package",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of package",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/triggers/http": {
        "get": {
          "tags": [
            "HTTPTrigger"
          ],
          "summary": "List all HTTP triggers",
          "operationId": "getHttps",
          "parameters": [
            {
              "description": "Namespace of httpTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of httpTriggers",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.HTTPTrigger"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "HTTPTrigger"
          ],
          "summary": "Create HTTP trigger",
          "operationId": "createHttps",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.HTTPTrigger"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created httpTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/triggers/http/{httpTrigger}": {
        "get": {
          "tags": [
            "HTTPTrigger"
          ],
          "summary": "Get detail of HTTP trigger",
          "operationId": "getHttp",
          "parameters": [
            {
              "description": "HTTPTrigger name",
              "name": "httpTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of httpTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A httpTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.HTTPTrigger"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "HTTPTrigger"
          ],
          "summary": "Update HTTP trigger",
          "operationId": "updateHttp",
          "parameters": [
            {
              "description": "HTTPTrigger name",
              "name": "httpTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.HTTPTrigger"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated httpTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "HTTPTrigger"
          ],
          "summary": "Delete HTTP trigger",
          "operationId": "deleteHttp",
          "parameters": [
            {
              "description": "HTTPTrigger name",
              "name": "httpTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of httpTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/triggers/messagequeue": {
        "get": {
          "tags": [
            "MessageQueueTrigger"
          ],
          "summary": "List all message queue triggers",
          "operationId": "getMessagequeues",
          "parameters": [
            {
              "description": "Namespace of messageQueueTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of messageQueueTriggers",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.MessageQueueTrigger"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "MessageQueueTrigger"
          ],
          "summary": "Create message queue trigger",
          "operationId": "createMessagequeues",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.MessageQueueTrigger"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created messageQueueTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/triggers/messagequeue/{mqTrigger}": {
        "get": {
          "tags": [
            "MessageQueueTrigger"
          ],
          "summary": "Get detail of message queue trigger",
          "operationId": "getMessagequeue",
          "parameters": [
            {
              "description": "MessageQueueTriggers name",
              "name": "mqTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of messageQueueTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A messageQueueTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.MessageQueueTrigger"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "MessageQueueTrigger"
          ],
          "summary": "Update message queue trigger",
          "operationId": "updateMessagequeue",
          "parameters": [
            {
              "description": "MessageQueueTrigger name",
              "name": "mqTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.MessageQueueTrigger"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated messageQueueTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "MessageQueueTrigger"
          ],
          "summary": "Delete message queue trigger",
          "operationId": "deleteMessagequeue",
          "parameters": [
            {
              "description": "MessageQueueTrigger name",
              "name": "mqTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of messageQueueTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/triggers/time": {
        "get": {
          "tags": [
            "TimeTrigger"
          ],
          "summary": "List all time trigger",
          "operationId": "getTimes",
          "parameters": [
            {
              "description": "Namespace of timeTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of timeTriggers",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.TimeTrigger"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "TimeTrigger"
          ],
          "summary": "Create time trigger",
          "operationId": "createTimes",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.TimeTrigger"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created timeTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/triggers/time/{timeTrigger}": {
        "get": {
          "tags": [
            "TimeTrigger"
          ],
          "summary": "Get detail of time trigger",
          "operationId": "getTime",
          "parameters": [
            {
              "description": "TimeTrigger name",
              "name": "timeTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of timeTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A timeTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.TimeTrigger"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "TimeTrigger"
          ],
          "summary": "Update time trigger",
          "operationId": "updateTime",
          "parameters": [
            {
              "description": "TimeTrigger name",
              "name": "timeTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.TimeTrigger"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated timeTrigger",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "TimeTrigger"
          ],
          "summary": "Delete time trigger",
          "operationId": "deleteTime",
          "parameters": [
            {
              "description": "TimeTrigger name",
              "name": "timeTrigger",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of timeTrigger",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      },
      "/v2/watches": {
        "get": {
          "tags": [
            "KubernetesWatch"
          ],
          "summary": "List all kubernetes watch",
          "operationId": "getWatches",
          "parameters": [
            {
              "description": "Namespace of kubernetesWatch",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "List of kubernetesWatchs",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/v1.KubernetesWatchTrigger"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": [
            "KubernetesWatch"
          ],
          "summary": "Create kubernetes watch",
          "operationId": "createWatches",
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.KubernetesWatchTrigger"
          },
          "responses": {
            "201": {
              "description": "ObjectMeta of created kubernetesWatch",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        }
      },
      "/v2/watches/{watch}": {
        "get": {
          "tags": [
            "KubernetesWatch"
          ],
          "summary": "Get detail of kubernetes watch",
          "operationId": "getWatch",
          "parameters": [
            {
              "description": "KubernetesWatch name",
              "name": "watch",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of kubernetesWatch",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A kubernetesWatch",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.KubernetesWatchTrigger"
                  }
                }
              }
            }
          }
        },
        "put": {
          "tags": [
            "KubernetesWatch"
          ],
          "summary": "Update kubernetes watch",
          "operationId": "updateWatch",
          "parameters": [
            {
              "description": "KubernetesWatch name",
              "name": "watch",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "$ref": "#/components/requestBodies/v1.KubernetesWatchTrigger"
          },
          "responses": {
            "200": {
              "description": "ObjectMeta of updated kubernetesWatch",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/v1.ObjectMeta"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": [
            "KubernetesWatch"
          ],
          "summary": "Delete kubernetes watch",
          "operationId": "deleteWatch",
          "parameters": [
            {
              "description": "KubernetesWatch name",
              "name": "watch",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "description": "Namespace of kubernetesWatch",
              "name": "namespace",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Only HTTP status returned"
            }
          }
        }
      }
    },
    "tags": [
      {
        "description": "Environment Operation",
        "name": "Environment"
      },
      {
        "description": "Function Operation",
        "name": "Function"
      },
      {
        "description": "HTTPTrigger Operation",
        "name": "HTTPTrigger"
      },
      {
        "description": "MessageQueueTrigger Operation",
        "name": "MessageQueueTrigger"
      },
      {
        "description": "Package Operation",
        "name": "Package"
      },
      {
        "description": "KubernetesWatch Operation",
        "name": "KubernetesWatch"
      },
      {
        "description": "TimeTrigger Operation",
        "name": "TimeTrigger"
      },
      {
        "description": "CanaryConfig Operation",
        "name": "CanaryConfig"
      },
      {
        "description": "StorageServiceProxy Operation",
        "name": "StorageServiceProxy"
      }
    ],
    "components": {
      "requestBodies": {
        "v1.Package": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.Package"
              }
            }
          },
          "required": true
        },
        "v1.HTTPTrigger": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.HTTPTrigger"
              }
            }
          },
          "required": true
        },
        "v1.Environment": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.Environment"
              }
            }
          },
          "required": true
        },
        "v1.CanaryConfig": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.CanaryConfig"
              }
            }
          },
          "required": true
        },
        "v1.Function": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.Function"
              }
            }
          },
          "required": true
        },
        "v1.MessageQueueTrigger": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.MessageQueueTrigger"
              }
            }
          },
          "required": true
        },
        "v1.TimeTrigger": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.TimeTrigger"
              }
            }
          },
          "required": true
        },
        "v1.KubernetesWatchTrigger": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/v1.KubernetesWatchTrigger"
              }
            }
          },
          "required": true
        }
      },
      "schemas": {
        "big.Int": {
          "required": [
            "neg",
            "abs"
          ],
          "properties": {
            "abs": {
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "neg": {
              "type": "boolean"
            }
          }
        },
        "inf.Dec": {
          "required": [
            "unscaled",
            "scale"
          ],
          "properties": {
            "scale": {
              "type": "integer",
              "format": "int32"
            },
            "unscaled": {
              "$ref": "#/components/schemas/big.Int"
            }
          }
        },
        "resource.Quantity": {
          "required": [
            "i",
            "d",
            "s",
            "Format"
          ],
          "properties": {
            "Format": {
              "type": "string"
            },
            "d": {
              "$ref": "#/components/schemas/resource.infDecAmount"
            },
            "i": {
              "$ref": "#/components/schemas/resource.int64Amount"
            },
            "s": {
              "type": "string"
            }
          }
        },
        "resource.infDecAmount": {
          "required": [
            "Dec"
          ],
          "properties": {
            "Dec": {
              "$ref": "#/components/schemas/inf.Dec"
            }
          }
        },
        "resource.int64Amount": {
          "required": [
            "value",
            "scale"
          ],
          "properties": {
            "scale": {
              "type": "integer",
              "format": "int32"
            },
            "value": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "v1.AWSElasticBlockStoreVolumeSource": {
          "description": "Represents a Persistent Disk resource in AWS.\n\nAn AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.",
          "required": [
            "volumeID"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
              "type": "string"
            },
            "partition": {
              "description": "The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty).",
              "type": "integer",
              "format": "int32"
            },
            "readOnly": {
              "description": "Specify \"true\" to force and set the ReadOnly property in VolumeMounts to \"true\". If omitted, the default is \"false\". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
              "type": "boolean"
            },
            "volumeID": {
              "description": "Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
              "type": "string"
            }
          }
        },
        "v1.Affinity": {
          "description": "Affinity is a group of affinity scheduling rules.",
          "properties": {
            "nodeAffinity": {
              "$ref": "#/components/schemas/v1.NodeAffinity"
            },
            "podAffinity": {
              "$ref": "#/components/schemas/v1.PodAffinity"
            },
            "podAntiAffinity": {
              "$ref": "#/components/schemas/v1.PodAntiAffinity"
            }
          }
        },
        "v1.Archive": {
          "description": "Archive contains or references a collection of sources or binary files.",
          "properties": {
            "checksum": {
              "$ref": "#/components/schemas/v1.Checksum"
            },
            "literal": {
              "description": "Literal contents of the package. Can be used for encoding packages below TODO (256 KB?) size.",
              "type": "string"
            },
            "type": {
              "description": "Type defines how the package is specified: literal or URL. Available value:\n - literal\n - url",
              "type": "string"
            },
            "url": {
              "description": "URL references a package.",
              "type": "string"
            }
          }
        },
        "v1.AzureDiskVolumeSource": {
          "description": "AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.",
          "required": [
            "diskName",
            "diskURI"
          ],
          "properties": {
            "cachingMode": {
              "description": "Host Caching mode: None, Read Only, Read Write.",
              "type": "string"
            },
            "diskName": {
              "description": "The Name of the data disk in the blob storage",
              "type": "string"
            },
            "diskURI": {
              "description": "The URI the data disk in the blob storage",
              "type": "string"
            },
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.",
              "type": "string"
            },
            "kind": {
              "description": "Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared",
              "type": "string"
            },
            "readOnly": {
              "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            }
          }
        },
        "v1.AzureFileVolumeSource": {
          "description": "AzureFile represents an Azure File Service mount on the host and bind mount to the pod.",
          "required": [
            "secretName",
            "shareName"
          ],
          "properties": {
            "readOnly": {
              "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            },
            "secretName": {
              "description": "the name of secret that contains Azure Storage Account Name and Key",
              "type": "string"
            },
            "shareName": {
              "description": "Share Name",
              "type": "string"
            }
          }
        },
        "v1.Builder": {
          "description": "Builder is the setting for environment builder.",
          "properties": {
            "command": {
              "description": "(Optional) Default build command to run for this build environment.",
              "type": "string"
            },
            "container": {
              "$ref": "#/components/schemas/v1.Container"
            },
            "image": {
              "description": "Image for containing the language compilation environment.",
              "type": "string"
            },
            "podspec": {
              "$ref": "#/components/schemas/v1.PodSpec"
            }
          }
        },
        "v1.CSIVolumeSource": {
          "description": "Represents a source location of a volume to mount, managed by an external CSI driver",
          "required": [
            "driver"
          ],
          "properties": {
            "driver": {
              "description": "Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.",
              "type": "string"
            },
            "fsType": {
              "description": "Filesystem type to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.",
              "type": "string"
            },
            "nodePublishSecretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "readOnly": {
              "description": "Specifies a read-only configuration for the volume. Defaults to false (read/write).",
              "type": "boolean"
            },
            "volumeAttributes": {
              "description": "VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            }
          }
        },
        "v1.CanaryConfig": {
          "description": "CanaryConfig is for canary deployment of two functions.",
          "required": [
            "metadata",
            "spec",
            "status"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.CanaryConfigSpec"
            },
            "status": {
              "$ref": "#/components/schemas/v1.CanaryConfigStatus"
            }
          }
        },
        "v1.CanaryConfigSpec": {
          "description": "CanaryConfigSpec defines the canary configuration spec",
          "required": [
            "trigger",
            "newfunction",
            "oldfunction",
            "weightincrement",
            "duration",
            "failurethreshold",
            "failureType"
          ],
          "properties": {
            "duration": {
              "description": "Weight increment interval, string representation of time.Duration, ex : 1m, 2h, 2d (default: \"2m\")",
              "type": "string"
            },
            "failureType": {
              "type": "string"
            },
            "failurethreshold": {
              "description": "Threshold in percentage beyond which the new version of the function is considered unstable",
              "type": "integer",
              "format": "int32"
            },
            "newfunction": {
              "description": "New version of the function",
              "type": "string"
            },
            "oldfunction": {
              "description": "Old stable version of the function",
              "type": "string"
            },
            "trigger": {
              "description": "HTTP trigger that this config references",
              "type": "string"
            },
            "weightincrement": {
              "description": "Weight increment step for function",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v1.CanaryConfigStatus": {
          "description": "CanaryConfigStatus represents canary config status",
          "required": [
            "status"
          ],
          "properties": {
            "status": {
              "type": "string"
            }
          }
        },
        "v1.Capabilities": {
          "description": "Adds and removes POSIX capabilities from running containers.",
          "properties": {
            "add": {
              "description": "Added capabilities",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "drop": {
              "description": "Removed capabilities",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "v1.CephFSVolumeSource": {
          "description": "Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.",
          "required": [
            "monitors"
          ],
          "properties": {
            "monitors": {
              "description": "Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "path": {
              "description": "Optional: Used as the mounted root, rather than the full Ceph tree, default is /",
              "type": "string"
            },
            "readOnly": {
              "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
              "type": "boolean"
            },
            "secretFile": {
              "description": "Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
              "type": "string"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "user": {
              "description": "Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it",
              "type": "string"
            }
          }
        },
        "v1.Checksum": {
          "description": "Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; \"sha256\" is the only currently supported one. Sum is hex encoded.",
          "properties": {
            "sum": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        },
        "v1.CinderVolumeSource": {
          "description": "Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.",
          "required": [
            "volumeID"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
              "type": "string"
            },
            "readOnly": {
              "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
              "type": "boolean"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "volumeID": {
              "description": "volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md",
              "type": "string"
            }
          }
        },
        "v1.ConfigMapEnvSource": {
          "description": "ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.\n\nThe contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.",
          "properties": {
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the ConfigMap must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.ConfigMapKeySelector": {
          "description": "Selects a key from a ConfigMap.",
          "required": [
            "key"
          ],
          "properties": {
            "key": {
              "description": "The key to select.",
              "type": "string"
            },
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the ConfigMap or its key must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.ConfigMapProjection": {
          "description": "Adapts a ConfigMap into a projected volume.\n\nThe contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.",
          "properties": {
            "items": {
              "description": "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.KeyToPath"
              }
            },
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the ConfigMap or its keys must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.ConfigMapReference": {
          "description": "ConfigMapReference is a reference to a kubernetes configmap.",
          "required": [
            "namespace",
            "name"
          ],
          "properties": {
            "name": {
              "type": "string"
            },
            "namespace": {
              "type": "string"
            }
          }
        },
        "v1.ConfigMapVolumeSource": {
          "description": "Adapts a ConfigMap into a volume.\n\nThe contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.",
          "properties": {
            "defaultMode": {
              "description": "Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
              "type": "integer",
              "format": "int32"
            },
            "items": {
              "description": "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.KeyToPath"
              }
            },
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the ConfigMap or its keys must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.Container": {
          "description": "A single application container that you want to run within a pod.",
          "required": [
            "name"
          ],
          "properties": {
            "args": {
              "description": "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "command": {
              "description": "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "env": {
              "description": "List of environment variables to set in the container. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.EnvVar"
              }
            },
            "envFrom": {
              "description": "List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.EnvFromSource"
              }
            },
            "image": {
              "description": "Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.",
              "type": "string"
            },
            "imagePullPolicy": {
              "description": "Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images",
              "type": "string"
            },
            "lifecycle": {
              "$ref": "#/components/schemas/v1.Lifecycle"
            },
            "livenessProbe": {
              "$ref": "#/components/schemas/v1.Probe"
            },
            "name": {
              "description": "Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.",
              "type": "string"
            },
            "ports": {
              "description": "List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.ContainerPort"
              }
            },
            "readinessProbe": {
              "$ref": "#/components/schemas/v1.Probe"
            },
            "resources": {
              "$ref": "#/components/schemas/v1.ResourceRequirements"
            },
            "securityContext": {
              "$ref": "#/components/schemas/v1.SecurityContext"
            },
            "startupProbe": {
              "$ref": "#/components/schemas/v1.Probe"
            },
            "stdin": {
              "description": "Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.",
              "type": "boolean"
            },
            "stdinOnce": {
              "description": "Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false",
              "type": "boolean"
            },
            "terminationMessagePath": {
              "description": "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
              "type": "string"
            },
            "terminationMessagePolicy": {
              "description": "Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.",
              "type": "string"
            },
            "tty": {
              "description": "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
              "type": "boolean"
            },
            "volumeDevices": {
              "description": "volumeDevices is the list of block devices to be used by the container.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.VolumeDevice"
              }
            },
            "volumeMounts": {
              "description": "Pod volumes to mount into the container's filesystem. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.VolumeMount"
              }
            },
            "workingDir": {
              "description": "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
              "type": "string"
            }
          }
        },
        "v1.ContainerPort": {
          "description": "ContainerPort represents a network port in a single container.",
          "required": [
            "containerPort"
          ],
          "properties": {
            "containerPort": {
              "description": "Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.",
              "type": "integer",
              "format": "int32"
            },
            "hostIP": {
              "description": "What host IP to bind the external port to.",
              "type": "string"
            },
            "hostPort": {
              "description": "Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.",
              "type": "integer",
              "format": "int32"
            },
            "name": {
              "description": "If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.",
              "type": "string"
            },
            "protocol": {
              "description": "Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \"TCP\".",
              "type": "string"
            }
          }
        },
        "v1.DownwardAPIProjection": {
          "description": "Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.",
          "properties": {
            "items": {
              "description": "Items is a list of DownwardAPIVolume file",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.DownwardAPIVolumeFile"
              }
            }
          }
        },
        "v1.DownwardAPIVolumeFile": {
          "description": "DownwardAPIVolumeFile represents information to create the file containing the pod field",
          "required": [
            "path"
          ],
          "properties": {
            "fieldRef": {
              "$ref": "#/components/schemas/v1.ObjectFieldSelector"
            },
            "mode": {
              "description": "Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
              "type": "integer",
              "format": "int32"
            },
            "path": {
              "description": "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
              "type": "string"
            },
            "resourceFieldRef": {
              "$ref": "#/components/schemas/v1.ResourceFieldSelector"
            }
          }
        },
        "v1.DownwardAPIVolumeSource": {
          "description": "DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.",
          "properties": {
            "defaultMode": {
              "description": "Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
              "type": "integer",
              "format": "int32"
            },
            "items": {
              "description": "Items is a list of downward API volume file",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.DownwardAPIVolumeFile"
              }
            }
          }
        },
        "v1.EmptyDirVolumeSource": {
          "description": "Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.",
          "properties": {
            "medium": {
              "description": "What type of storage medium should back this directory. The default is \"\" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir",
              "type": "string"
            },
            "sizeLimit": {
              "description": "Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir",
              "type": "string"
            }
          }
        },
        "v1.EnvFromSource": {
          "description": "EnvFromSource represents the source of a set of ConfigMaps",
          "properties": {
            "configMapRef": {
              "$ref": "#/components/schemas/v1.ConfigMapEnvSource"
            },
            "prefix": {
              "description": "An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.",
              "type": "string"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.SecretEnvSource"
            }
          }
        },
        "v1.EnvVar": {
          "description": "EnvVar represents an environment variable present in a Container.",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "description": "Name of the environment variable. Must be a C_IDENTIFIER.",
              "type": "string"
            },
            "value": {
              "description": "Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".",
              "type": "string"
            },
            "valueFrom": {
              "$ref": "#/components/schemas/v1.EnvVarSource"
            }
          }
        },
        "v1.EnvVarSource": {
          "description": "EnvVarSource represents a source for the value of an EnvVar.",
          "properties": {
            "configMapKeyRef": {
              "$ref": "#/components/schemas/v1.ConfigMapKeySelector"
            },
            "fieldRef": {
              "$ref": "#/components/schemas/v1.ObjectFieldSelector"
            },
            "resourceFieldRef": {
              "$ref": "#/components/schemas/v1.ResourceFieldSelector"
            },
            "secretKeyRef": {
              "$ref": "#/components/schemas/v1.SecretKeySelector"
            }
          }
        },
        "v1.Environment": {
          "description": "Environment is environment for building and running user functions.",
          "required": [
            "metadata",
            "spec"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.EnvironmentSpec"
            }
          }
        },
        "v1.EnvironmentReference": {
          "description": "EnvironmentReference is a reference to an environment.",
          "required": [
            "namespace",
            "name"
          ],
          "properties": {
            "name": {
              "type": "string"
            },
            "namespace": {
              "type": "string"
            }
          }
        },
        "v1.EnvironmentSpec": {
          "description": "EnvironmentSpec contains with builder, runtime and some other related environment settings.",
          "required": [
            "version",
            "runtime",
            "builder",
            "resources",
            "keeparchive",
            "imagepullsecret"
          ],
          "properties": {
            "allowAccessToExternalNetwork": {
              "description": "Istio default blocks all egress traffic for safety. To enable accessibility of external network for builder/function pod, set to 'true'. (Optional) defaults to 'false'",
              "type": "boolean"
            },
            "allowedFunctionsPerContainer": {
              "description": "(Optional) defaults to 'single'. Fission workflow uses 'infinite' to load multiple functions in one function pod. Available value: - single - infinite",
              "type": "string"
            },
            "builder": {
              "$ref": "#/components/schemas/v1.Builder"
            },
            "imagepullsecret": {
              "description": "ImagePullSecret is the secret for Kubernetes to pull an image from a private registry.",
              "type": "string"
            },
            "keeparchive": {
              "description": "KeepArchive is used by fetcher to determine if the extracted archive or unarchived file should be placed, which is then used by specialize handler. (This is mainly for the JVM environment because .jar is one kind of zip archive.)",
              "type": "boolean"
            },
            "poolsize": {
              "description": "The initial pool size for environment",
              "type": "integer",
              "format": "int32"
            },
            "resources": {
              "$ref": "#/components/schemas/v1.ResourceRequirements"
            },
            "runtime": {
              "$ref": "#/components/schemas/v1.Runtime"
            },
            "terminationGracePeriod": {
              "description": "The grace time for pod to perform connection draining before termination. The unit is in seconds. (Optional) defaults to 360 seconds",
              "type": "integer",
              "format": "int64"
            },
            "version": {
              "description": "Version is the Environment API version\n\nVersion \"1\" allows user to run code snippet in a file, and it's supported by most of the environments except tensorflow-serving.\n\nVersion \"2\" supports downloading and compiling user function if source archive is not empty.\n\nVersion \"3\" is almost the same with v2, but you're able to control the size of pre-warm pool of the environment.",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v1.EphemeralContainer": {
          "description": "An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.\n\nTo add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.\n\nThis is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.",
          "required": [
            "name"
          ],
          "properties": {
            "args": {
              "description": "Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "command": {
              "description": "Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "env": {
              "description": "List of environment variables to set in the container. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.EnvVar"
              }
            },
            "envFrom": {
              "description": "List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.EnvFromSource"
              }
            },
            "image": {
              "description": "Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images",
              "type": "string"
            },
            "imagePullPolicy": {
              "description": "Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images",
              "type": "string"
            },
            "lifecycle": {
              "$ref": "#/components/schemas/v1.Lifecycle"
            },
            "livenessProbe": {
              "$ref": "#/components/schemas/v1.Probe"
            },
            "name": {
              "description": "Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.",
              "type": "string"
            },
            "ports": {
              "description": "Ports are not allowed for ephemeral containers.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.ContainerPort"
              }
            },
            "readinessProbe": {
              "$ref": "#/components/schemas/v1.Probe"
            },
            "resources": {
              "$ref": "#/components/schemas/v1.ResourceRequirements"
            },
            "securityContext": {
              "$ref": "#/components/schemas/v1.SecurityContext"
            },
            "startupProbe": {
              "$ref": "#/components/schemas/v1.Probe"
            },
            "stdin": {
              "description": "Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.",
              "type": "boolean"
            },
            "stdinOnce": {
              "description": "Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false",
              "type": "boolean"
            },
            "targetContainerName": {
              "description": "If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.\n\nThe container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.",
              "type": "string"
            },
            "terminationMessagePath": {
              "description": "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
              "type": "string"
            },
            "terminationMessagePolicy": {
              "description": "Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.",
              "type": "string"
            },
            "tty": {
              "description": "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
              "type": "boolean"
            },
            "volumeDevices": {
              "description": "volumeDevices is the list of block devices to be used by the container.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.VolumeDevice"
              }
            },
            "volumeMounts": {
              "description": "Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.VolumeMount"
              }
            },
            "workingDir": {
              "description": "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
              "type": "string"
            }
          }
        },
        "v1.EphemeralVolumeSource": {
          "description": "Represents an ephemeral volume that is handled by a normal storage driver.",
          "properties": {
            "volumeClaimTemplate": {
              "$ref": "#/components/schemas/v1.PersistentVolumeClaimTemplate"
            }
          }
        },
        "v1.ExecAction": {
          "description": "ExecAction describes a \"run in container\" action.",
          "properties": {
            "command": {
              "description": "Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "v1.ExecutionStrategy": {
          "description": "ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.\n\nMinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.\n\nMaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.",
          "required": [
            "ExecutorType",
            "MinScale",
            "MaxScale",
            "TargetCPUPercent",
            "SpecializationTimeout"
          ],
          "properties": {
            "ExecutorType": {
              "description": "ExecutorType is the executor type of function used. Defaults to \"poolmgr\".\n\nAvailable value:\n - poolmgr\n - newdeploy\n - container",
              "type": "string"
            },
            "MaxScale": {
              "description": "This is only for newdeploy to set up maximum replicas of deployment.",
              "type": "integer",
              "format": "int32"
            },
            "MinScale": {
              "description": "This is only for newdeploy to set up minimum replicas of deployment.",
              "type": "integer",
              "format": "int32"
            },
            "SpecializationTimeout": {
              "description": "This is the timeout setting for executor to wait for pod specialization.",
              "type": "integer",
              "format": "int32"
            },
            "TargetCPUPercent": {
              "description": "Deprecated: use hpaMetrics instead. This is only for executor type newdeploy and container to set up target CPU utilization of HPA. Applicable for executor type newdeploy and container.",
              "type": "integer",
              "format": "int32"
            },
            "hpaBehavior": {
              "$ref": "#/components/schemas/v2beta2.HorizontalPodAutoscalerBehavior"
            },
            "hpaMetrics": {
              "description": "hpaMetrics is the list of metrics used to determine the desired replica count of the Deployment created for the function. Applicable for executor type newdeploy and container.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v2beta2.MetricSpec"
              }
            }
          }
        },
        "v1.FCVolumeSource": {
          "description": "Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.",
          "properties": {
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.",
              "type": "string"
            },
            "lun": {
              "description": "Optional: FC target lun number",
              "type": "integer",
              "format": "int32"
            },
            "readOnly": {
              "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            },
            "targetWWNs": {
              "description": "Optional: FC target worldwide names (WWNs)",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "wwids": {
              "description": "Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "v1.FlexVolumeSource": {
          "description": "FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.",
          "required": [
            "driver"
          ],
          "properties": {
            "driver": {
              "description": "Driver is the name of the driver to use for this volume.",
              "type": "string"
            },
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.",
              "type": "string"
            },
            "options": {
              "description": "Optional: Extra command options if any.",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "readOnly": {
              "description": "Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            }
          }
        },
        "v1.FlockerVolumeSource": {
          "description": "Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.",
          "properties": {
            "datasetName": {
              "description": "Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated",
              "type": "string"
            },
            "datasetUUID": {
              "description": "UUID of the dataset. This is unique identifier of a Flocker dataset",
              "type": "string"
            }
          }
        },
        "v1.Function": {
          "description": "Function is function runs within environment runtime with given package and secrets/configmaps.",
          "required": [
            "metadata",
            "spec"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.FunctionSpec"
            }
          }
        },
        "v1.FunctionPackageRef": {
          "description": "FunctionPackageRef includes the reference to the package also the entrypoint of package.",
          "required": [
            "packageref"
          ],
          "properties": {
            "functionName": {
              "description": "FunctionName specifies a specific function within the package. This allows functions to share packages, by having different functions within the same package.\n\nFission itself does not interpret this path. It is passed verbatim to build and runtime environments.\n\nThis is optional: if unspecified, the environment has a default name.",
              "type": "string"
            },
            "packageref": {
              "$ref": "#/components/schemas/v1.PackageRef"
            }
          }
        },
        "v1.FunctionReference": {
          "description": "FunctionReference refers to a function",
          "required": [
            "type",
            "name",
            "functionweights"
          ],
          "properties": {
            "functionweights": {
              "description": "Function Reference by weight. this map contains function name as key and its weight as the value. This is for canary upgrade purpose.",
              "type": "object",
              "additionalProperties": {
                "type": "integer"
              }
            },
            "name": {
              "description": "Name of the function.",
              "type": "string"
            },
            "type": {
              "description": "Type indicates whether this function reference is by name or selector. For now, the only supported reference type is by \"name\".  Future reference types:\n  * Function by label or annotation\n  * Branch or tag of a versioned function\n  * A \"rolling upgrade\" from one version of a function to another\nAvailable value: - name - function-weights",
              "type": "string"
            }
          }
        },
        "v1.FunctionSpec": {
          "description": "FunctionSpec describes the contents of the function.",
          "required": [
            "environment",
            "package",
            "resources",
            "InvokeStrategy"
          ],
          "properties": {
            "InvokeStrategy": {
              "$ref": "#/components/schemas/v1.InvokeStrategy"
            },
            "concurrency": {
              "description": "Maximum number of pods to be specialized which will serve requests This is optional. If not specified default value will be taken as 500",
              "type": "integer",
              "format": "int32"
            },
            "configmaps": {
              "description": "Reference to a list of configmaps.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.ConfigMapReference"
              }
            },
            "environment": {
              "$ref": "#/components/schemas/v1.EnvironmentReference"
            },
            "functionTimeout": {
              "description": "FunctionTimeout provides a maximum amount of duration within which a request for a particular function execution should be complete. This is optional. If not specified default value will be taken as 60s",
              "type": "integer",
              "format": "int32"
            },
            "idletimeout": {
              "description": "IdleTimeout specifies the length of time that a function is idle before the function pod(s) are eligible for deletion. If no traffic to the function is detected within the idle timeout, the executor will then recycle the function pod(s) to release resources.",
              "type": "integer",
              "format": "int32"
            },
            "onceOnly": {
              "description": "OnceOnly specifies if specialized pod will serve exactly one request in its lifetime and would be garbage collected after serving that one request This is optional. If not specified default value will be taken as false",
              "type": "boolean"
            },
            "package": {
              "$ref": "#/components/schemas/v1.FunctionPackageRef"
            },
            "podspec": {
              "$ref": "#/components/schemas/v1.PodSpec"
            },
            "requestsPerPod": {
              "description": "RequestsPerPod indicates the maximum number of concurrent requests that can be served by a specialized pod This is optional. If not specified default value will be taken as 1",
              "type": "integer",
              "format": "int32"
            },
            "resources": {
              "$ref": "#/components/schemas/v1.ResourceRequirements"
            },
            "secrets": {
              "description": "Reference to a list of secrets.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.SecretReference"
              }
            }
          }
        },
        "v1.GCEPersistentDiskVolumeSource": {
          "description": "Represents a Persistent Disk resource in Google Compute Engine.\n\nA GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.",
          "required": [
            "pdName"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
              "type": "string"
            },
            "partition": {
              "description": "The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
              "type": "integer",
              "format": "int32"
            },
            "pdName": {
              "description": "Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
              "type": "string"
            },
            "readOnly": {
              "description": "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
              "type": "boolean"
            }
          }
        },
        "v1.GRPCAction": {
          "required": [
            "port",
            "service"
          ],
          "properties": {
            "port": {
              "description": "Port number of the gRPC service. Number must be in the range 1 to 65535.",
              "type": "integer",
              "format": "int32"
            },
            "service": {
              "description": "Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).\n\nIf this is not specified, the default behavior is defined by gRPC.",
              "type": "string"
            }
          }
        },
        "v1.GitRepoVolumeSource": {
          "description": "Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.\n\nDEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.",
          "required": [
            "repository"
          ],
          "properties": {
            "directory": {
              "description": "Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.",
              "type": "string"
            },
            "repository": {
              "description": "Repository URL",
              "type": "string"
            },
            "revision": {
              "description": "Commit hash for the specified revision.",
              "type": "string"
            }
          }
        },
        "v1.GlusterfsVolumeSource": {
          "description": "Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.",
          "required": [
            "endpoints",
            "path"
          ],
          "properties": {
            "endpoints": {
              "description": "EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
              "type": "string"
            },
            "path": {
              "description": "Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
              "type": "string"
            },
            "readOnly": {
              "description": "ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod",
              "type": "boolean"
            }
          }
        },
        "v1.HTTPGetAction": {
          "description": "HTTPGetAction describes an action based on HTTP Get requests.",
          "required": [
            "port"
          ],
          "properties": {
            "host": {
              "description": "Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.",
              "type": "string"
            },
            "httpHeaders": {
              "description": "Custom headers to set in the request. HTTP allows repeated headers.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.HTTPHeader"
              }
            },
            "path": {
              "description": "Path to access on the HTTP server.",
              "type": "string"
            },
            "port": {
              "description": "Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.",
              "type": "string"
            },
            "scheme": {
              "description": "Scheme to use for connecting to the host. Defaults to HTTP.",
              "type": "string"
            }
          }
        },
        "v1.HTTPHeader": {
          "description": "HTTPHeader describes a custom header to be used in HTTP probes",
          "required": [
            "name",
            "value"
          ],
          "properties": {
            "name": {
              "description": "The header field name",
              "type": "string"
            },
            "value": {
              "description": "The header field value",
              "type": "string"
            }
          }
        },
        "v1.HTTPTrigger": {
          "description": "HTTPTrigger is the trigger invokes user functions when receiving HTTP requests.",
          "required": [
            "metadata",
            "spec"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.HTTPTriggerSpec"
            }
          }
        },
        "v1.HTTPTriggerSpec": {
          "description": "HTTPTriggerSpec is for router to expose user functions at the given URL path.",
          "required": [
            "host",
            "relativeurl",
            "method",
            "functionref",
            "createingress",
            "ingressconfig"
          ],
          "properties": {
            "createingress": {
              "description": "If CreateIngress is true, router will create an ingress definition.",
              "type": "boolean"
            },
            "functionref": {
              "$ref": "#/components/schemas/v1.FunctionReference"
            },
            "host": {
              "description": "Deprecated: the original idea of this field is not for setting Ingress. Since we have IngressConfig now, remove Host after couple releases.",
              "type": "string"
            },
            "ingressconfig": {
              "$ref": "#/components/schemas/v1.IngressConfig"
            },
            "keepPrefix": {
              "description": "When function is exposed with Prefix based path, keepPrefix decides whether to keep or trim prefix in URL while invoking function.",
              "type": "boolean"
            },
            "method": {
              "description": "Use Methods instead of Method. This field is going to be deprecated in a future release HTTP method to access a function.",
              "type": "string"
            },
            "methods": {
              "description": "HTTP methods to access a function",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "prefix": {
              "description": "Prefix with which functions are exposed. NOTE: Prefix takes precedence over URL/RelativeURL. Note that it does not treat slashes specially (\"/foobar/\" will be matched by the prefix \"/foobar\").",
              "type": "string"
            },
            "relativeurl": {
              "description": "RelativeURL is the exposed URL for external client to access a function with.",
              "type": "string"
            }
          }
        },
        "v1.HostAlias": {
          "description": "HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.",
          "properties": {
            "hostnames": {
              "description": "Hostnames for the above IP address.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "ip": {
              "description": "IP address of the host file entry.",
              "type": "string"
            }
          }
        },
        "v1.HostPathVolumeSource": {
          "description": "Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.",
          "required": [
            "path"
          ],
          "properties": {
            "path": {
              "description": "Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath",
              "type": "string"
            },
            "type": {
              "description": "Type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath",
              "type": "string"
            }
          }
        },
        "v1.ISCSIVolumeSource": {
          "description": "Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.",
          "required": [
            "targetPortal",
            "iqn",
            "lun"
          ],
          "properties": {
            "chapAuthDiscovery": {
              "description": "whether support iSCSI Discovery CHAP authentication",
              "type": "boolean"
            },
            "chapAuthSession": {
              "description": "whether support iSCSI Session CHAP authentication",
              "type": "boolean"
            },
            "fsType": {
              "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi",
              "type": "string"
            },
            "initiatorName": {
              "description": "Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.",
              "type": "string"
            },
            "iqn": {
              "description": "Target iSCSI Qualified Name.",
              "type": "string"
            },
            "iscsiInterface": {
              "description": "iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).",
              "type": "string"
            },
            "lun": {
              "description": "iSCSI Target Lun number.",
              "type": "integer",
              "format": "int32"
            },
            "portals": {
              "description": "iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "readOnly": {
              "description": "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.",
              "type": "boolean"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "targetPortal": {
              "description": "iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).",
              "type": "string"
            }
          }
        },
        "v1.IngressConfig": {
          "description": "IngressConfig is for router to set up Ingress.",
          "required": [
            "annotations",
            "path",
            "host",
            "tls"
          ],
          "properties": {
            "annotations": {
              "description": "Annotations will be added to metadata when creating Ingress.",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "host": {
              "description": "Host is for ingress controller to apply rules. If host is empty or \"*\", the rule applies to all inbound HTTP traffic.",
              "type": "string"
            },
            "path": {
              "description": "Path is for path matching. The format of path depends on what ingress controller you used.",
              "type": "string"
            },
            "tls": {
              "description": "TLS is for user to specify a Secret that contains TLS key and certificate. The domain name in the key and crt must match the value of Host field.",
              "type": "string"
            }
          }
        },
        "v1.InvokeStrategy": {
          "description": "InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.\n\nAn InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).",
          "required": [
            "ExecutionStrategy",
            "StrategyType"
          ],
          "properties": {
            "ExecutionStrategy": {
              "$ref": "#/components/schemas/v1.ExecutionStrategy"
            },
            "StrategyType": {
              "description": "StrategyType is the strategy type of function. Now it only supports 'execution'.",
              "type": "string"
            }
          }
        },
        "v1.KeyToPath": {
          "description": "Maps a string key to a path within a volume.",
          "required": [
            "key",
            "path"
          ],
          "properties": {
            "key": {
              "description": "The key to project.",
              "type": "string"
            },
            "mode": {
              "description": "Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
              "type": "integer",
              "format": "int32"
            },
            "path": {
              "description": "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
              "type": "string"
            }
          }
        },
        "v1.KubernetesWatchTrigger": {
          "description": "KubernetesWatchTrigger watches kubernetes resource events and invokes functions.",
          "required": [
            "metadata",
            "spec"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.KubernetesWatchTriggerSpec"
            }
          }
        },
        "v1.KubernetesWatchTriggerSpec": {
          "description": "KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger",
          "required": [
            "namespace",
            "type",
            "labelselector",
            "functionref"
          ],
          "properties": {
            "functionref": {
              "$ref": "#/components/schemas/v1.FunctionReference"
            },
            "labelselector": {
              "description": "Resource labels",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "namespace": {
              "type": "string"
            },
            "type": {
              "description": "Type of resource to watch (Pod, Service, etc.)",
              "type": "string"
            }
          }
        },
        "v1.LabelSelector": {
          "description": "A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.",
          "properties": {
            "matchExpressions": {
              "description": "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.LabelSelectorRequirement"
              }
            },
            "matchLabels": {
              "description": "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            }
          }
        },
        "v1.LabelSelectorRequirement": {
          "description": "A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
          "required": [
            "key",
            "operator"
          ],
          "properties": {
            "key": {
              "description": "key is the label key that the selector applies to.",
              "type": "string"
            },
            "operator": {
              "description": "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
              "type": "string"
            },
            "values": {
              "description": "values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "v1.Lifecycle": {
          "description": "Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.",
          "properties": {
            "postStart": {
              "$ref": "#/components/schemas/v1.LifecycleHandler"
            },
            "preStop": {
              "$ref": "#/components/schemas/v1.LifecycleHandler"
            }
          }
        },
        "v1.LifecycleHandler": {
          "description": "LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.",
          "properties": {
            "exec": {
              "$ref": "#/components/schemas/v1.ExecAction"
            },
            "httpGet": {
              "$ref": "#/components/schemas/v1.HTTPGetAction"
            },
            "tcpSocket": {
              "$ref": "#/components/schemas/v1.TCPSocketAction"
            }
          }
        },
        "v1.LocalObjectReference": {
          "description": "LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.",
          "properties": {
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            }
          }
        },
        "v1.ManagedFieldsEntry": {
          "description": "ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.",
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.",
              "type": "string"
            },
            "fieldsType": {
              "description": "FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: \"FieldsV1\"",
              "type": "string"
            },
            "fieldsV1": {
              "description": "FieldsV1 holds the first JSON version format as described in the \"FieldsV1\" type.",
              "type": "string"
            },
            "manager": {
              "description": "Manager is an identifier of the workflow managing these fields.",
              "type": "string"
            },
            "operation": {
              "description": "Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.",
              "type": "string"
            },
            "subresource": {
              "description": "Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.",
              "type": "string"
            },
            "time": {
              "description": "Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply'",
              "type": "string"
            }
          }
        },
        "v1.MessageQueueTrigger": {
          "description": "MessageQueueTrigger invokes functions when messages arrive to certain topic that trigger subscribes to.",
          "required": [
            "metadata",
            "spec"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.MessageQueueTriggerSpec"
            }
          }
        },
        "v1.MessageQueueTriggerSpec": {
          "description": "MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function.",
          "required": [
            "functionref",
            "messageQueueType",
            "topic",
            "errorTopic",
            "maxRetries",
            "contentType",
            "metadata"
          ],
          "properties": {
            "contentType": {
              "description": "Content type of payload",
              "type": "string"
            },
            "cooldownPeriod": {
              "description": "The period to wait after the last trigger reported active before scaling the deployment back to 0",
              "type": "integer",
              "format": "int32"
            },
            "errorTopic": {
              "description": "Topic to collect error response sent from function",
              "type": "string"
            },
            "functionref": {
              "$ref": "#/components/schemas/v1.FunctionReference"
            },
            "maxReplicaCount": {
              "description": "Maximum number of replicas KEDA will scale the deployment up to",
              "type": "integer",
              "format": "int32"
            },
            "maxRetries": {
              "description": "Maximum times for message queue trigger to retry",
              "type": "integer",
              "format": "int32"
            },
            "messageQueueType": {
              "description": "Type of message queue (NATS, Kafka, AzureQueue)",
              "type": "string"
            },
            "metadata": {
              "description": "ScalerTrigger fields",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "minReplicaCount": {
              "description": "Minimum number of replicas KEDA will scale the deployment down to",
              "type": "integer",
              "format": "int32"
            },
            "mqtkind": {
              "description": "Kind of Message Queue Trigger to be created, by default its fission",
              "type": "string"
            },
            "podspec": {
              "$ref": "#/components/schemas/v1.PodSpec"
            },
            "pollingInterval": {
              "description": "The period to check each trigger source on every ScaledObject, and scale the deployment up or down accordingly",
              "type": "integer",
              "format": "int32"
            },
            "respTopic": {
              "description": "Topic for message queue trigger to sent response from function.",
              "type": "string"
            },
            "secret": {
              "description": "Secret name",
              "type": "string"
            },
            "topic": {
              "description": "Subscribed topic",
              "type": "string"
            }
          }
        },
        "v1.NFSVolumeSource": {
          "description": "Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.",
          "required": [
            "server",
            "path"
          ],
          "properties": {
            "path": {
              "description": "Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
              "type": "string"
            },
            "readOnly": {
              "description": "ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
              "type": "boolean"
            },
            "server": {
              "description": "Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs",
              "type": "string"
            }
          }
        },
        "v1.NodeAffinity": {
          "description": "Node affinity is a group of node affinity scheduling rules.",
          "properties": {
            "preferredDuringSchedulingIgnoredDuringExecution": {
              "description": "The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.PreferredSchedulingTerm"
              }
            },
            "requiredDuringSchedulingIgnoredDuringExecution": {
              "$ref": "#/components/schemas/v1.NodeSelector"
            }
          }
        },
        "v1.NodeSelector": {
          "description": "A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.",
          "required": [
            "nodeSelectorTerms"
          ],
          "properties": {
            "nodeSelectorTerms": {
              "description": "Required. A list of node selector terms. The terms are ORed.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.NodeSelectorTerm"
              }
            }
          }
        },
        "v1.NodeSelectorRequirement": {
          "description": "A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.",
          "required": [
            "key",
            "operator"
          ],
          "properties": {
            "key": {
              "description": "The label key that the selector applies to.",
              "type": "string"
            },
            "operator": {
              "description": "Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
              "type": "string"
            },
            "values": {
              "description": "An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "v1.NodeSelectorTerm": {
          "description": "A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.",
          "properties": {
            "matchExpressions": {
              "description": "A list of node selector requirements by node's labels.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.NodeSelectorRequirement"
              }
            },
            "matchFields": {
              "description": "A list of node selector requirements by node's fields.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.NodeSelectorRequirement"
              }
            }
          }
        },
        "v1.ObjectFieldSelector": {
          "description": "ObjectFieldSelector selects an APIVersioned field of an object.",
          "required": [
            "fieldPath"
          ],
          "properties": {
            "apiVersion": {
              "description": "Version of the schema the FieldPath is written in terms of, defaults to \"v1\".",
              "type": "string"
            },
            "fieldPath": {
              "description": "Path of the field to select in the specified API version.",
              "type": "string"
            }
          }
        },
        "v1.ObjectMeta": {
          "description": "ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.",
          "properties": {
            "annotations": {
              "description": "Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "clusterName": {
              "description": "The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.",
              "type": "string"
            },
            "creationTimestamp": {
              "description": "CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
              "type": "string"
            },
            "deletionGracePeriodSeconds": {
              "description": "Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.",
              "type": "integer",
              "format": "int64"
            },
            "deletionTimestamp": {
              "description": "DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.\n\nPopulated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata",
              "type": "string"
            },
            "finalizers": {
              "description": "Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "generateName": {
              "description": "GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.\n\nIf this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).\n\nApplied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency",
              "type": "string"
            },
            "generation": {
              "description": "A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.",
              "type": "integer",
              "format": "int64"
            },
            "labels": {
              "description": "Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "managedFields": {
              "description": "ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.ManagedFieldsEntry"
              }
            },
            "name": {
              "description": "Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names",
              "type": "string"
            },
            "namespace": {
              "description": "Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.\n\nMust be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces",
              "type": "string"
            },
            "ownerReferences": {
              "description": "List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.OwnerReference"
              }
            },
            "resourceVersion": {
              "description": "An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.\n\nPopulated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency",
              "type": "string"
            },
            "selfLink": {
              "description": "SelfLink is a URL representing this object. Populated by the system. Read-only.\n\nDEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.",
              "type": "string"
            },
            "uid": {
              "description": "UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.\n\nPopulated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids",
              "type": "string"
            }
          }
        },
        "v1.OwnerReference": {
          "description": "OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.",
          "required": [
            "apiVersion",
            "kind",
            "name",
            "uid"
          ],
          "properties": {
            "apiVersion": {
              "description": "API version of the referent.",
              "type": "string"
            },
            "blockOwnerDeletion": {
              "description": "If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.",
              "type": "boolean"
            },
            "controller": {
              "description": "If true, this reference points to the managing controller.",
              "type": "boolean"
            },
            "kind": {
              "description": "Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "name": {
              "description": "Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names",
              "type": "string"
            },
            "uid": {
              "description": "UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids",
              "type": "string"
            }
          }
        },
        "v1.Package": {
          "description": "Package Think of these as function-level images.",
          "required": [
            "metadata",
            "spec",
            "status"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.PackageSpec"
            },
            "status": {
              "$ref": "#/components/schemas/v1.PackageStatus"
            }
          }
        },
        "v1.PackageRef": {
          "description": "PackageRef is a reference to the package.",
          "required": [
            "namespace",
            "name"
          ],
          "properties": {
            "name": {
              "type": "string"
            },
            "namespace": {
              "type": "string"
            },
            "resourceversion": {
              "description": "Including resource version in the reference forces the function to be updated on package update, making it possible to cache the function based on its metadata.",
              "type": "string"
            }
          }
        },
        "v1.PackageSpec": {
          "description": "PackageSpec includes source/deploy archives and the reference of environment to build the package.",
          "required": [
            "environment"
          ],
          "properties": {
            "buildcmd": {
              "description": "BuildCommand is a custom build command that builder used to build the source archive.",
              "type": "string"
            },
            "deployment": {
              "$ref": "#/components/schemas/v1.Archive"
            },
            "environment": {
              "$ref": "#/components/schemas/v1.EnvironmentReference"
            },
            "source": {
              "$ref": "#/components/schemas/v1.Archive"
            }
          }
        },
        "v1.PackageStatus": {
          "description": "PackageStatus contains the build status of a package also the build log for examination.",
          "properties": {
            "buildlog": {
              "description": "BuildLog stores build log during the compilation.",
              "type": "string"
            },
            "buildstatus": {
              "description": "BuildStatus is the package build status.",
              "type": "string"
            },
            "lastUpdateTimestamp": {
              "description": "LastUpdateTimestamp will store the timestamp the package was last updated metav1.Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. https://github.com/kubernetes/apimachinery/blob/44bd77c24ef93cd3a5eb6fef64e514025d10d44e/pkg/apis/meta/v1/time.go#L26-L35",
              "type": "string"
            }
          }
        },
        "v1.PersistentVolumeClaimSpec": {
          "description": "PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes",
          "properties": {
            "accessModes": {
              "description": "AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "dataSource": {
              "$ref": "#/components/schemas/v1.TypedLocalObjectReference"
            },
            "dataSourceRef": {
              "$ref": "#/components/schemas/v1.TypedLocalObjectReference"
            },
            "resources": {
              "$ref": "#/components/schemas/v1.ResourceRequirements"
            },
            "selector": {
              "$ref": "#/components/schemas/v1.LabelSelector"
            },
            "storageClassName": {
              "description": "Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1",
              "type": "string"
            },
            "volumeMode": {
              "description": "volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.",
              "type": "string"
            },
            "volumeName": {
              "description": "VolumeName is the binding reference to the PersistentVolume backing this claim.",
              "type": "string"
            }
          }
        },
        "v1.PersistentVolumeClaimTemplate": {
          "description": "PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.",
          "required": [
            "spec"
          ],
          "properties": {
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.PersistentVolumeClaimSpec"
            }
          }
        },
        "v1.PersistentVolumeClaimVolumeSource": {
          "description": "PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).",
          "required": [
            "claimName"
          ],
          "properties": {
            "claimName": {
              "description": "ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims",
              "type": "string"
            },
            "readOnly": {
              "description": "Will force the ReadOnly setting in VolumeMounts. Default false.",
              "type": "boolean"
            }
          }
        },
        "v1.PhotonPersistentDiskVolumeSource": {
          "description": "Represents a Photon Controller persistent disk resource.",
          "required": [
            "pdID"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.",
              "type": "string"
            },
            "pdID": {
              "description": "ID that identifies Photon Controller persistent disk",
              "type": "string"
            }
          }
        },
        "v1.PodAffinity": {
          "description": "Pod affinity is a group of inter pod affinity scheduling rules.",
          "properties": {
            "preferredDuringSchedulingIgnoredDuringExecution": {
              "description": "The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.WeightedPodAffinityTerm"
              }
            },
            "requiredDuringSchedulingIgnoredDuringExecution": {
              "description": "If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.PodAffinityTerm"
              }
            }
          }
        },
        "v1.PodAffinityTerm": {
          "description": "Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running",
          "required": [
            "topologyKey"
          ],
          "properties": {
            "labelSelector": {
              "$ref": "#/components/schemas/v1.LabelSelector"
            },
            "namespaceSelector": {
              "$ref": "#/components/schemas/v1.LabelSelector"
            },
            "namespaces": {
              "description": "namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means \"this pod's namespace\"",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "topologyKey": {
              "description": "This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.",
              "type": "string"
            }
          }
        },
        "v1.PodAntiAffinity": {
          "description": "Pod anti affinity is a group of inter pod anti affinity scheduling rules.",
          "properties": {
            "preferredDuringSchedulingIgnoredDuringExecution": {
              "description": "The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.WeightedPodAffinityTerm"
              }
            },
            "requiredDuringSchedulingIgnoredDuringExecution": {
              "description": "If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.PodAffinityTerm"
              }
            }
          }
        },
        "v1.PodDNSConfig": {
          "description": "PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.",
          "properties": {
            "nameservers": {
              "description": "A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "options": {
              "description": "A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.PodDNSConfigOption"
              }
            },
            "searches": {
              "description": "A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "v1.PodDNSConfigOption": {
          "description": "PodDNSConfigOption defines DNS resolver options of a pod.",
          "properties": {
            "name": {
              "description": "Required.",
              "type": "string"
            },
            "value": {
              "type": "string"
            }
          }
        },
        "v1.PodOS": {
          "description": "PodOS defines the OS parameters of a pod.",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "description": "Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null",
              "type": "string"
            }
          }
        },
        "v1.PodReadinessGate": {
          "description": "PodReadinessGate contains the reference to a pod condition",
          "required": [
            "conditionType"
          ],
          "properties": {
            "conditionType": {
              "description": "ConditionType refers to a condition in the pod's condition list with matching type.",
              "type": "string"
            }
          }
        },
        "v1.PodSecurityContext": {
          "description": "PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.",
          "properties": {
            "fsGroup": {
              "description": "A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:\n\n1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw",
              "type": "integer",
              "format": "int64"
            },
            "fsGroupChangePolicy": {
              "description": "fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are \"OnRootMismatch\" and \"Always\". If not specified, \"Always\" is used. Note that this field cannot be set when spec.os.name is windows.",
              "type": "string"
            },
            "runAsGroup": {
              "description": "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.",
              "type": "integer",
              "format": "int64"
            },
            "runAsNonRoot": {
              "description": "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
              "type": "boolean"
            },
            "runAsUser": {
              "description": "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.",
              "type": "integer",
              "format": "int64"
            },
            "seLinuxOptions": {
              "$ref": "#/components/schemas/v1.SELinuxOptions"
            },
            "seccompProfile": {
              "$ref": "#/components/schemas/v1.SeccompProfile"
            },
            "supplementalGroups": {
              "description": "A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "sysctls": {
              "description": "Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.Sysctl"
              }
            },
            "windowsOptions": {
              "$ref": "#/components/schemas/v1.WindowsSecurityContextOptions"
            }
          }
        },
        "v1.PodSpec": {
          "description": "PodSpec is a description of a pod.",
          "required": [
            "containers"
          ],
          "properties": {
            "activeDeadlineSeconds": {
              "description": "Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.",
              "type": "integer",
              "format": "int64"
            },
            "affinity": {
              "$ref": "#/components/schemas/v1.Affinity"
            },
            "automountServiceAccountToken": {
              "description": "AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.",
              "type": "boolean"
            },
            "containers": {
              "description": "List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.Container"
              }
            },
            "dnsConfig": {
              "$ref": "#/components/schemas/v1.PodDNSConfig"
            },
            "dnsPolicy": {
              "description": "Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.",
              "type": "string"
            },
            "enableServiceLinks": {
              "description": "EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.",
              "type": "boolean"
            },
            "ephemeralContainers": {
              "description": "List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is beta-level and available on clusters that haven't disabled the EphemeralContainers feature gate.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.EphemeralContainer"
              }
            },
            "hostAliases": {
              "description": "HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.HostAlias"
              }
            },
            "hostIPC": {
              "description": "Use the host's ipc namespace. Optional: Default to false.",
              "type": "boolean"
            },
            "hostNetwork": {
              "description": "Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.",
              "type": "boolean"
            },
            "hostPID": {
              "description": "Use the host's pid namespace. Optional: Default to false.",
              "type": "boolean"
            },
            "hostname": {
              "description": "Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.",
              "type": "string"
            },
            "imagePullSecrets": {
              "description": "ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.LocalObjectReference"
              }
            },
            "initContainers": {
              "description": "List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.Container"
              }
            },
            "nodeName": {
              "description": "NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.",
              "type": "string"
            },
            "nodeSelector": {
              "description": "NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/",
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "os": {
              "$ref": "#/components/schemas/v1.PodOS"
            },
            "overhead": {
              "description": "Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md This field is beta-level as of Kubernetes v1.18, and is only honored by servers that enable the PodOverhead feature.",
              "type": "object",
              "additionalProperties": {
                "$ref": "#/components/schemas/resource.Quantity"
              }
            },
            "preemptionPolicy": {
              "description": "PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate.",
              "type": "string"
            },
            "priority": {
              "description": "The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.",
              "type": "integer",
              "format": "int32"
            },
            "priorityClassName": {
              "description": "If specified, indicates the pod's priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.",
              "type": "string"
            },
            "readinessGates": {
              "description": "If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to \"True\" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.PodReadinessGate"
              }
            },
            "restartPolicy": {
              "description": "Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy",
              "type": "string"
            },
            "runtimeClassName": {
              "description": "RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the \"legacy\" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class This is a beta feature as of Kubernetes v1.14.",
              "type": "string"
            },
            "schedulerName": {
              "description": "If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.",
              "type": "string"
            },
            "securityContext": {
              "$ref": "#/components/schemas/v1.PodSecurityContext"
            },
            "serviceAccount": {
              "description": "DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.",
              "type": "string"
            },
            "serviceAccountName": {
              "description": "ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
              "type": "string"
            },
            "setHostnameAsFQDN": {
              "description": "If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.",
              "type": "boolean"
            },
            "shareProcessNamespace": {
              "description": "Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.",
              "type": "boolean"
            },
            "subdomain": {
              "description": "If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all.",
              "type": "string"
            },
            "terminationGracePeriodSeconds": {
              "description": "Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.",
              "type": "integer",
              "format": "int64"
            },
            "tolerations": {
              "description": "If specified, the pod's tolerations.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.Toleration"
              }
            },
            "topologySpreadConstraints": {
              "description": "TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.TopologySpreadConstraint"
              }
            },
            "volumes": {
              "description": "List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.Volume"
              }
            }
          }
        },
        "v1.PortworxVolumeSource": {
          "description": "PortworxVolumeSource represents a Portworx volume resource.",
          "required": [
            "volumeID"
          ],
          "properties": {
            "fsType": {
              "description": "FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified.",
              "type": "string"
            },
            "readOnly": {
              "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            },
            "volumeID": {
              "description": "VolumeID uniquely identifies a Portworx volume",
              "type": "string"
            }
          }
        },
        "v1.PreferredSchedulingTerm": {
          "description": "An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).",
          "required": [
            "weight",
            "preference"
          ],
          "properties": {
            "preference": {
              "$ref": "#/components/schemas/v1.NodeSelectorTerm"
            },
            "weight": {
              "description": "Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v1.Probe": {
          "description": "Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.",
          "properties": {
            "exec": {
              "$ref": "#/components/schemas/v1.ExecAction"
            },
            "failureThreshold": {
              "description": "Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.",
              "type": "integer",
              "format": "int32"
            },
            "grpc": {
              "$ref": "#/components/schemas/v1.GRPCAction"
            },
            "httpGet": {
              "$ref": "#/components/schemas/v1.HTTPGetAction"
            },
            "initialDelaySeconds": {
              "description": "Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
              "type": "integer",
              "format": "int32"
            },
            "periodSeconds": {
              "description": "How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.",
              "type": "integer",
              "format": "int32"
            },
            "successThreshold": {
              "description": "Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.",
              "type": "integer",
              "format": "int32"
            },
            "tcpSocket": {
              "$ref": "#/components/schemas/v1.TCPSocketAction"
            },
            "terminationGracePeriodSeconds": {
              "description": "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.",
              "type": "integer",
              "format": "int64"
            },
            "timeoutSeconds": {
              "description": "Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v1.ProjectedVolumeSource": {
          "description": "Represents a projected volume source",
          "required": [
            "sources"
          ],
          "properties": {
            "defaultMode": {
              "description": "Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
              "type": "integer",
              "format": "int32"
            },
            "sources": {
              "description": "list of volume projections",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.VolumeProjection"
              }
            }
          }
        },
        "v1.QuobyteVolumeSource": {
          "description": "Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.",
          "required": [
            "registry",
            "volume"
          ],
          "properties": {
            "group": {
              "description": "Group to map volume access to Default is no group",
              "type": "string"
            },
            "readOnly": {
              "description": "ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.",
              "type": "boolean"
            },
            "registry": {
              "description": "Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes",
              "type": "string"
            },
            "tenant": {
              "description": "Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin",
              "type": "string"
            },
            "user": {
              "description": "User to map volume access to Defaults to serivceaccount user",
              "type": "string"
            },
            "volume": {
              "description": "Volume is a string that references an already created Quobyte volume by name.",
              "type": "string"
            }
          }
        },
        "v1.RBDVolumeSource": {
          "description": "Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.",
          "required": [
            "monitors",
            "image"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd",
              "type": "string"
            },
            "image": {
              "description": "The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
              "type": "string"
            },
            "keyring": {
              "description": "Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
              "type": "string"
            },
            "monitors": {
              "description": "A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "pool": {
              "description": "The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
              "type": "string"
            },
            "readOnly": {
              "description": "ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
              "type": "boolean"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "user": {
              "description": "The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it",
              "type": "string"
            }
          }
        },
        "v1.ResourceFieldSelector": {
          "description": "ResourceFieldSelector represents container resources (cpu, memory) and their output format",
          "required": [
            "resource"
          ],
          "properties": {
            "containerName": {
              "description": "Container name: required for volumes, optional for env vars",
              "type": "string"
            },
            "divisor": {
              "description": "Specifies the output format of the exposed resources, defaults to \"1\"",
              "type": "string"
            },
            "resource": {
              "description": "Required: resource to select",
              "type": "string"
            }
          }
        },
        "v1.ResourceRequirements": {
          "description": "ResourceRequirements describes the compute resource requirements.",
          "properties": {
            "limits": {
              "description": "Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
              "type": "object",
              "additionalProperties": {
                "$ref": "#/components/schemas/resource.Quantity"
              }
            },
            "requests": {
              "description": "Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
              "type": "object",
              "additionalProperties": {
                "$ref": "#/components/schemas/resource.Quantity"
              }
            }
          }
        },
        "v1.Runtime": {
          "description": "Runtime is the setting for environment runtime.",
          "required": [
            "image"
          ],
          "properties": {
            "container": {
              "$ref": "#/components/schemas/v1.Container"
            },
            "image": {
              "description": "Image for containing the language runtime.",
              "type": "string"
            },
            "podspec": {
              "$ref": "#/components/schemas/v1.PodSpec"
            }
          }
        },
        "v1.SELinuxOptions": {
          "description": "SELinuxOptions are the labels to be applied to the container",
          "properties": {
            "level": {
              "description": "Level is SELinux level label that applies to the container.",
              "type": "string"
            },
            "role": {
              "description": "Role is a SELinux role label that applies to the container.",
              "type": "string"
            },
            "type": {
              "description": "Type is a SELinux type label that applies to the container.",
              "type": "string"
            },
            "user": {
              "description": "User is a SELinux user label that applies to the container.",
              "type": "string"
            }
          }
        },
        "v1.ScaleIOVolumeSource": {
          "description": "ScaleIOVolumeSource represents a persistent ScaleIO volume",
          "required": [
            "gateway",
            "system",
            "secretRef"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".",
              "type": "string"
            },
            "gateway": {
              "description": "The host address of the ScaleIO API Gateway.",
              "type": "string"
            },
            "protectionDomain": {
              "description": "The name of the ScaleIO Protection Domain for the configured storage.",
              "type": "string"
            },
            "readOnly": {
              "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "sslEnabled": {
              "description": "Flag to enable/disable SSL communication with Gateway, default false",
              "type": "boolean"
            },
            "storageMode": {
              "description": "Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.",
              "type": "string"
            },
            "storagePool": {
              "description": "The ScaleIO Storage Pool associated with the protection domain.",
              "type": "string"
            },
            "system": {
              "description": "The name of the storage system as configured in ScaleIO.",
              "type": "string"
            },
            "volumeName": {
              "description": "The name of a volume already created in the ScaleIO system that is associated with this volume source.",
              "type": "string"
            }
          }
        },
        "v1.SeccompProfile": {
          "description": "SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.",
          "required": [
            "type"
          ],
          "properties": {
            "localhostProfile": {
              "description": "localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is \"Localhost\".",
              "type": "string"
            },
            "type": {
              "description": "type indicates which kind of seccomp profile will be applied. Valid options are:\n\nLocalhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.",
              "type": "string"
            }
          }
        },
        "v1.SecretEnvSource": {
          "description": "SecretEnvSource selects a Secret to populate the environment variables with.\n\nThe contents of the target Secret's Data field will represent the key-value pairs as environment variables.",
          "properties": {
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the Secret must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.SecretKeySelector": {
          "description": "SecretKeySelector selects a key of a Secret.",
          "required": [
            "key"
          ],
          "properties": {
            "key": {
              "description": "The key of the secret to select from.  Must be a valid secret key.",
              "type": "string"
            },
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the Secret or its key must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.SecretProjection": {
          "description": "Adapts a secret into a projected volume.\n\nThe contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.",
          "properties": {
            "items": {
              "description": "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.KeyToPath"
              }
            },
            "name": {
              "description": "Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "optional": {
              "description": "Specify whether the Secret or its key must be defined",
              "type": "boolean"
            }
          }
        },
        "v1.SecretReference": {
          "description": "SecretReference is a reference to a kubernetes secret.",
          "required": [
            "namespace",
            "name"
          ],
          "properties": {
            "name": {
              "type": "string"
            },
            "namespace": {
              "type": "string"
            }
          }
        },
        "v1.SecretVolumeSource": {
          "description": "Adapts a Secret into a volume.\n\nThe contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.",
          "properties": {
            "defaultMode": {
              "description": "Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.",
              "type": "integer",
              "format": "int32"
            },
            "items": {
              "description": "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v1.KeyToPath"
              }
            },
            "optional": {
              "description": "Specify whether the Secret or its keys must be defined",
              "type": "boolean"
            },
            "secretName": {
              "description": "Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
              "type": "string"
            }
          }
        },
        "v1.SecurityContext": {
          "description": "SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.",
          "properties": {
            "allowPrivilegeEscalation": {
              "description": "AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.",
              "type": "boolean"
            },
            "capabilities": {
              "$ref": "#/components/schemas/v1.Capabilities"
            },
            "privileged": {
              "description": "Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.",
              "type": "boolean"
            },
            "procMount": {
              "description": "procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.",
              "type": "string"
            },
            "readOnlyRootFilesystem": {
              "description": "Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.",
              "type": "boolean"
            },
            "runAsGroup": {
              "description": "The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.",
              "type": "integer",
              "format": "int64"
            },
            "runAsNonRoot": {
              "description": "Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
              "type": "boolean"
            },
            "runAsUser": {
              "description": "The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.",
              "type": "integer",
              "format": "int64"
            },
            "seLinuxOptions": {
              "$ref": "#/components/schemas/v1.SELinuxOptions"
            },
            "seccompProfile": {
              "$ref": "#/components/schemas/v1.SeccompProfile"
            },
            "windowsOptions": {
              "$ref": "#/components/schemas/v1.WindowsSecurityContextOptions"
            }
          }
        },
        "v1.ServiceAccountTokenProjection": {
          "description": "ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).",
          "required": [
            "path"
          ],
          "properties": {
            "audience": {
              "description": "Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.",
              "type": "string"
            },
            "expirationSeconds": {
              "description": "ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.",
              "type": "integer",
              "format": "int64"
            },
            "path": {
              "description": "Path is the path relative to the mount point of the file to project the token into.",
              "type": "string"
            }
          }
        },
        "v1.StorageOSVolumeSource": {
          "description": "Represents a StorageOS persistent volume resource.",
          "properties": {
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.",
              "type": "string"
            },
            "readOnly": {
              "description": "Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.",
              "type": "boolean"
            },
            "secretRef": {
              "$ref": "#/components/schemas/v1.LocalObjectReference"
            },
            "volumeName": {
              "description": "VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.",
              "type": "string"
            },
            "volumeNamespace": {
              "description": "VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.",
              "type": "string"
            }
          }
        },
        "v1.Sysctl": {
          "description": "Sysctl defines a kernel parameter to be set",
          "required": [
            "name",
            "value"
          ],
          "properties": {
            "name": {
              "description": "Name of a property to set",
              "type": "string"
            },
            "value": {
              "description": "Value of a property to set",
              "type": "string"
            }
          }
        },
        "v1.TCPSocketAction": {
          "description": "TCPSocketAction describes an action based on opening a socket",
          "required": [
            "port"
          ],
          "properties": {
            "host": {
              "description": "Optional: Host name to connect to, defaults to the pod IP.",
              "type": "string"
            },
            "port": {
              "description": "Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.",
              "type": "string"
            }
          }
        },
        "v1.TimeTrigger": {
          "description": "TimeTrigger invokes functions based on given cron schedule.",
          "required": [
            "metadata",
            "spec"
          ],
          "properties": {
            "apiVersion": {
              "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              "type": "string"
            },
            "kind": {
              "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/v1.ObjectMeta"
            },
            "spec": {
              "$ref": "#/components/schemas/v1.TimeTriggerSpec"
            }
          }
        },
        "v1.TimeTriggerSpec": {
          "description": "TimeTriggerSpec invokes the specific function at a time or times specified by a cron string.",
          "required": [
            "cron",
            "functionref"
          ],
          "properties": {
            "cron": {
              "description": "Cron schedule",
              "type": "string"
            },
            "functionref": {
              "$ref": "#/components/schemas/v1.FunctionReference"
            }
          }
        },
        "v1.Toleration": {
          "description": "The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.",
          "properties": {
            "effect": {
              "description": "Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.",
              "type": "string"
            },
            "key": {
              "description": "Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.",
              "type": "string"
            },
            "operator": {
              "description": "Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.",
              "type": "string"
            },
            "tolerationSeconds": {
              "description": "TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.",
              "type": "integer",
              "format": "int64"
            },
            "value": {
              "description": "Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.",
              "type": "string"
            }
          }
        },
        "v1.TopologySpreadConstraint": {
          "description": "TopologySpreadConstraint specifies how to spread matching pods among the given topology.",
          "required": [
            "maxSkew",
            "topologyKey",
            "whenUnsatisfiable"
          ],
          "properties": {
            "labelSelector": {
              "$ref": "#/components/schemas/v1.LabelSelector"
            },
            "maxSkew": {
              "description": "MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0:",
              "type": "integer",
              "format": "int32"
            },
            "topologyKey": {
              "description": "TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a \"bucket\", and try to put balanced number of pods into each bucket. It's a required field.",
              "type": "string"
            },
            "whenUnsatisfiable": {
              "description": "WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,\n  but giving higher precedence to topologies that would help reduce the\n  skew.\nA constraint is considered \"Unsatisfiable\" for an incoming pod if and only if every possible node assignment for that pod would violate \"MaxSkew\" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1:",
              "type": "string"
            }
          }
        },
        "v1.TypedLocalObjectReference": {
          "description": "TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.",
          "required": [
            "apiGroup",
            "kind",
            "name"
          ],
          "properties": {
            "apiGroup": {
              "description": "APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.",
              "type": "string"
            },
            "kind": {
              "description": "Kind is the type of resource being referenced",
              "type": "string"
            },
            "name": {
              "description": "Name is the name of resource being referenced",
              "type": "string"
            }
          }
        },
        "v1.Volume": {
          "description": "Volume represents a named volume in a pod that may be accessed by any container in the pod.",
          "required": [
            "name"
          ],
          "properties": {
            "awsElasticBlockStore": {
              "$ref": "#/components/schemas/v1.AWSElasticBlockStoreVolumeSource"
            },
            "azureDisk": {
              "$ref": "#/components/schemas/v1.AzureDiskVolumeSource"
            },
            "azureFile": {
              "$ref": "#/components/schemas/v1.AzureFileVolumeSource"
            },
            "cephfs": {
              "$ref": "#/components/schemas/v1.CephFSVolumeSource"
            },
            "cinder": {
              "$ref": "#/components/schemas/v1.CinderVolumeSource"
            },
            "configMap": {
              "$ref": "#/components/schemas/v1.ConfigMapVolumeSource"
            },
            "csi": {
              "$ref": "#/components/schemas/v1.CSIVolumeSource"
            },
            "downwardAPI": {
              "$ref": "#/components/schemas/v1.DownwardAPIVolumeSource"
            },
            "emptyDir": {
              "$ref": "#/components/schemas/v1.EmptyDirVolumeSource"
            },
            "ephemeral": {
              "$ref": "#/components/schemas/v1.EphemeralVolumeSource"
            },
            "fc": {
              "$ref": "#/components/schemas/v1.FCVolumeSource"
            },
            "flexVolume": {
              "$ref": "#/components/schemas/v1.FlexVolumeSource"
            },
            "flocker": {
              "$ref": "#/components/schemas/v1.FlockerVolumeSource"
            },
            "gcePersistentDisk": {
              "$ref": "#/components/schemas/v1.GCEPersistentDiskVolumeSource"
            },
            "gitRepo": {
              "$ref": "#/components/schemas/v1.GitRepoVolumeSource"
            },
            "glusterfs": {
              "$ref": "#/components/schemas/v1.GlusterfsVolumeSource"
            },
            "hostPath": {
              "$ref": "#/components/schemas/v1.HostPathVolumeSource"
            },
            "iscsi": {
              "$ref": "#/components/schemas/v1.ISCSIVolumeSource"
            },
            "name": {
              "description": "Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
              "type": "string"
            },
            "nfs": {
              "$ref": "#/components/schemas/v1.NFSVolumeSource"
            },
            "persistentVolumeClaim": {
              "$ref": "#/components/schemas/v1.PersistentVolumeClaimVolumeSource"
            },
            "photonPersistentDisk": {
              "$ref": "#/components/schemas/v1.PhotonPersistentDiskVolumeSource"
            },
            "portworxVolume": {
              "$ref": "#/components/schemas/v1.PortworxVolumeSource"
            },
            "projected": {
              "$ref": "#/components/schemas/v1.ProjectedVolumeSource"
            },
            "quobyte": {
              "$ref": "#/components/schemas/v1.QuobyteVolumeSource"
            },
            "rbd": {
              "$ref": "#/components/schemas/v1.RBDVolumeSource"
            },
            "scaleIO": {
              "$ref": "#/components/schemas/v1.ScaleIOVolumeSource"
            },
            "secret": {
              "$ref": "#/components/schemas/v1.SecretVolumeSource"
            },
            "storageos": {
              "$ref": "#/components/schemas/v1.StorageOSVolumeSource"
            },
            "vsphereVolume": {
              "$ref": "#/components/schemas/v1.VsphereVirtualDiskVolumeSource"
            }
          }
        },
        "v1.VolumeDevice": {
          "description": "volumeDevice describes a mapping of a raw block device within a container.",
          "required": [
            "name",
            "devicePath"
          ],
          "properties": {
            "devicePath": {
              "description": "devicePath is the path inside of the container that the device will be mapped to.",
              "type": "string"
            },
            "name": {
              "description": "name must match the name of a persistentVolumeClaim in the pod",
              "type": "string"
            }
          }
        },
        "v1.VolumeMount": {
          "description": "VolumeMount describes a mounting of a Volume within a container.",
          "required": [
            "name",
            "mountPath"
          ],
          "properties": {
            "mountPath": {
              "description": "Path within the container at which the volume should be mounted.  Must not contain ':'.",
              "type": "string"
            },
            "mountPropagation": {
              "description": "mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.",
              "type": "string"
            },
            "name": {
              "description": "This must match the Name of a Volume.",
              "type": "string"
            },
            "readOnly": {
              "description": "Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.",
              "type": "boolean"
            },
            "subPath": {
              "description": "Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root).",
              "type": "string"
            },
            "subPathExpr": {
              "description": "Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). SubPathExpr and SubPath are mutually exclusive.",
              "type": "string"
            }
          }
        },
        "v1.VolumeProjection": {
          "description": "Projection that may be projected along with other supported volume types",
          "properties": {
            "configMap": {
              "$ref": "#/components/schemas/v1.ConfigMapProjection"
            },
            "downwardAPI": {
              "$ref": "#/components/schemas/v1.DownwardAPIProjection"
            },
            "secret": {
              "$ref": "#/components/schemas/v1.SecretProjection"
            },
            "serviceAccountToken": {
              "$ref": "#/components/schemas/v1.ServiceAccountTokenProjection"
            }
          }
        },
        "v1.VsphereVirtualDiskVolumeSource": {
          "description": "Represents a vSphere volume resource.",
          "required": [
            "volumePath"
          ],
          "properties": {
            "fsType": {
              "description": "Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.",
              "type": "string"
            },
            "storagePolicyID": {
              "description": "Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.",
              "type": "string"
            },
            "storagePolicyName": {
              "description": "Storage Policy Based Management (SPBM) profile name.",
              "type": "string"
            },
            "volumePath": {
              "description": "Path that identifies vSphere volume vmdk",
              "type": "string"
            }
          }
        },
        "v1.WeightedPodAffinityTerm": {
          "description": "The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)",
          "required": [
            "weight",
            "podAffinityTerm"
          ],
          "properties": {
            "podAffinityTerm": {
              "$ref": "#/components/schemas/v1.PodAffinityTerm"
            },
            "weight": {
              "description": "weight associated with matching the corresponding podAffinityTerm, in the range 1-100.",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v1.WindowsSecurityContextOptions": {
          "description": "WindowsSecurityContextOptions contain Windows-specific options and credentials.",
          "properties": {
            "gmsaCredentialSpec": {
              "description": "GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.",
              "type": "string"
            },
            "gmsaCredentialSpecName": {
              "description": "GMSACredentialSpecName is the name of the GMSA credential spec to use.",
              "type": "string"
            },
            "hostProcess": {
              "description": "HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.",
              "type": "boolean"
            },
            "runAsUserName": {
              "description": "The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.",
              "type": "string"
            }
          }
        },
        "v2beta2.ContainerResourceMetricSource": {
          "description": "ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.",
          "required": [
            "name",
            "target",
            "container"
          ],
          "properties": {
            "container": {
              "description": "container is the name of the container in the pods of the scaling target",
              "type": "string"
            },
            "name": {
              "description": "name is the name of the resource in question.",
              "type": "string"
            },
            "target": {
              "$ref": "#/components/schemas/v2beta2.MetricTarget"
            }
          }
        },
        "v2beta2.CrossVersionObjectReference": {
          "description": "CrossVersionObjectReference contains enough information to let you identify the referred resource.",
          "required": [
            "kind",
            "name"
          ],
          "properties": {
            "apiVersion": {
              "description": "API version of the referent",
              "type": "string"
            },
            "kind": {
              "description": "Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds\"",
              "type": "string"
            },
            "name": {
              "description": "Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names",
              "type": "string"
            }
          }
        },
        "v2beta2.ExternalMetricSource": {
          "description": "ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).",
          "required": [
            "metric",
            "target"
          ],
          "properties": {
            "metric": {
              "$ref": "#/components/schemas/v2beta2.MetricIdentifier"
            },
            "target": {
              "$ref": "#/components/schemas/v2beta2.MetricTarget"
            }
          }
        },
        "v2beta2.HPAScalingPolicy": {
          "description": "HPAScalingPolicy is a single policy which must hold true for a specified past interval.",
          "required": [
            "type",
            "value",
            "periodSeconds"
          ],
          "properties": {
            "periodSeconds": {
              "description": "PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).",
              "type": "integer",
              "format": "int32"
            },
            "type": {
              "description": "Type is used to specify the scaling policy.",
              "type": "string"
            },
            "value": {
              "description": "Value contains the amount of change which is permitted by the policy. It must be greater than zero",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v2beta2.HPAScalingRules": {
          "description": "HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.",
          "properties": {
            "policies": {
              "description": "policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/v2beta2.HPAScalingPolicy"
              }
            },
            "selectPolicy": {
              "description": "selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used.",
              "type": "string"
            },
            "stabilizationWindowSeconds": {
              "description": "StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).",
              "type": "integer",
              "format": "int32"
            }
          }
        },
        "v2beta2.HorizontalPodAutoscalerBehavior": {
          "description": "HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).",
          "properties": {
            "scaleDown": {
              "$ref": "#/components/schemas/v2beta2.HPAScalingRules"
            },
            "scaleUp": {
              "$ref": "#/components/schemas/v2beta2.HPAScalingRules"
            }
          }
        },
        "v2beta2.MetricIdentifier": {
          "description": "MetricIdentifier defines the name and optionally selector for a metric",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "description": "name is the name of the given metric",
              "type": "string"
            },
            "selector": {
              "$ref": "#/components/schemas/v1.LabelSelector"
            }
          }
        },
        "v2beta2.MetricSpec": {
          "description": "MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).",
          "required": [
            "type"
          ],
          "properties": {
            "containerResource": {
              "$ref": "#/components/schemas/v2beta2.ContainerResourceMetricSource"
            },
            "external": {
              "$ref": "#/components/schemas/v2beta2.ExternalMetricSource"
            },
            "object": {
              "$ref": "#/components/schemas/v2beta2.ObjectMetricSource"
            },
            "pods": {
              "$ref": "#/components/schemas/v2beta2.PodsMetricSource"
            },
            "resource": {
              "$ref": "#/components/schemas/v2beta2.ResourceMetricSource"
            },
            "type": {
              "description": "type is the type of metric source.  It should be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled",
              "type": "string"
            }
          }
        },
        "v2beta2.MetricTarget": {
          "description": "MetricTarget defines the target value, average value, or average utilization of a specific metric",
          "required": [
            "type"
          ],
          "properties": {
            "averageUtilization": {
              "description": "averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type",
              "type": "integer",
              "format": "int32"
            },
            "averageValue": {
              "description": "averageValue is the target value of the average of the metric across all relevant pods (as a quantity)",
              "type": "string"
            },
            "type": {
              "description": "type represents whether the metric type is Utilization, Value, or AverageValue",
              "type": "string"
            },
            "value": {
              "description": "value is the target value of the metric (as a quantity).",
              "type": "string"
            }
          }
        },
        "v2beta2.ObjectMetricSource": {
          "description": "ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).",
          "required": [
            "describedObject",
            "target",
            "metric"
          ],
          "properties": {
            "describedObject": {
              "$ref": "#/components/schemas/v2beta2.CrossVersionObjectReference"
            },
            "metric": {
              "$ref": "#/components/schemas/v2beta2.MetricIdentifier"
            },
            "target": {
              "$ref": "#/components/schemas/v2beta2.MetricTarget"
            }
          }
        },
        "v2beta2.PodsMetricSource": {
          "description": "PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.",
          "required": [
            "metric",
            "target"
          ],
          "properties": {
            "metric": {
              "$ref": "#/components/schemas/v2beta2.MetricIdentifier"
            },
            "target": {
              "$ref": "#/components/schemas/v2beta2.MetricTarget"
            }
          }
        },
        "v2beta2.ResourceMetricSource": {
          "description": "ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.",
          "required": [
            "name",
            "target"
          ],
          "properties": {
            "name": {
              "description": "name is the name of the resource in question.",
              "type": "string"
            },
            "target": {
              "$ref": "#/components/schemas/v2beta2.MetricTarget"
            }
          }
        }
      }
    }
  }
]