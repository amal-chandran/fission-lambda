// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  /**
   * Get archive
   *
   * Equivalent to GET /proxy/storage/v1/archive
   */
  getArchives?: Maybe<Scalars['JSON']>;
  /**
   * Get detail of canary config
   *
   * Equivalent to GET /v2/canaryconfigs/{canaryConfig}
   */
  getCanaryConfig?: Maybe<V1CanaryConfig>;
  /**
   * List all canary configs
   *
   * Equivalent to GET /v2/canaryconfigs
   */
  getCanaryConfigs?: Maybe<Array<Maybe<V1CanaryConfig>>>;
  /**
   * Get detail of environment
   *
   * Equivalent to GET /v2/environments/{environment}
   */
  getEnvironment?: Maybe<V1Environment>;
  /**
   * List all environments
   *
   * Equivalent to GET /v2/environments
   */
  getEnvironments?: Maybe<Array<Maybe<V1Environment>>>;
  /**
   * Get detail of function
   *
   * Equivalent to GET /v2/functions/{function}
   */
  getFunction?: Maybe<V1Function>;
  /**
   * List all functions
   *
   * Equivalent to GET /v2/functions
   */
  getFunctions?: Maybe<Array<Maybe<V1Function>>>;
  /**
   * Get detail of HTTP trigger
   *
   * Equivalent to GET /v2/triggers/http/{httpTrigger}
   */
  getHttp?: Maybe<V1HTTPTrigger>;
  /**
   * List all HTTP triggers
   *
   * Equivalent to GET /v2/triggers/http
   */
  getHttps?: Maybe<Array<Maybe<V1HTTPTrigger>>>;
  /**
   * Get detail of message queue trigger
   *
   * Equivalent to GET /v2/triggers/messagequeue/{mqTrigger}
   */
  getMessagequeue?: Maybe<V1MessageQueueTrigger>;
  /**
   * List all message queue triggers
   *
   * Equivalent to GET /v2/triggers/messagequeue
   */
  getMessagequeues?: Maybe<Array<Maybe<V1MessageQueueTrigger>>>;
  /**
   * Get detail of package
   *
   * Equivalent to GET /v2/packages/{package}
   */
  getPackage?: Maybe<V1Package>;
  /**
   * List all packages
   *
   * Equivalent to GET /v2/packages
   */
  getPackages?: Maybe<Array<Maybe<V1Package>>>;
  /**
   * Get detail of time trigger
   *
   * Equivalent to GET /v2/triggers/time/{timeTrigger}
   */
  getTime?: Maybe<V1TimeTrigger>;
  /**
   * List all time trigger
   *
   * Equivalent to GET /v2/triggers/time
   */
  getTimes?: Maybe<Array<Maybe<V1TimeTrigger>>>;
  /**
   * Get detail of kubernetes watch
   *
   * Equivalent to GET /v2/watches/{watch}
   */
  getWatch?: Maybe<V1KubernetesWatchTrigger>;
  /**
   * List all kubernetes watch
   *
   * Equivalent to GET /v2/watches
   */
  getWatches?: Maybe<Array<Maybe<V1KubernetesWatchTrigger>>>;
};


export type QuerygetCanaryConfigArgs = {
  canaryConfig: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetCanaryConfigsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetEnvironmentArgs = {
  environment: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetEnvironmentsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetFunctionArgs = {
  function: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetFunctionsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetHttpArgs = {
  httpTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetHttpsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetMessagequeueArgs = {
  mqTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetMessagequeuesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetPackageArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  package: Scalars['String'];
};


export type QuerygetPackagesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetTimeArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  timeTrigger: Scalars['String'];
};


export type QuerygetTimesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetWatchArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  watch: Scalars['String'];
};


export type QuerygetWatchesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};

/** CanaryConfig is for canary deployment of two functions. */
export type V1CanaryConfig = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** CanaryConfigSpec defines the canary configuration spec */
  spec: V1CanaryConfigSpec;
  /** CanaryConfigStatus represents canary config status */
  status: V1CanaryConfigStatus;
};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type V1ObjectMeta = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
  annotations?: Maybe<Scalars['JSON']>;
  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  clusterName?: Maybe<Scalars['String']>;
  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
   *
   * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  creationTimestamp?: Maybe<Scalars['String']>;
  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  deletionGracePeriodSeconds?: Maybe<Scalars['Float']>;
  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
   *
   * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  deletionTimestamp?: Maybe<Scalars['String']>;
  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
  finalizers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
   *
   * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
   *
   * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
   */
  generateName?: Maybe<Scalars['String']>;
  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  generation?: Maybe<Scalars['Float']>;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  labels?: Maybe<Scalars['JSON']>;
  /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
  managedFields?: Maybe<Array<Maybe<V1ManagedFieldsEntry>>>;
  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name?: Maybe<Scalars['String']>;
  /**
   * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
   *
   * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   */
  namespace?: Maybe<Scalars['String']>;
  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  ownerReferences?: Maybe<Array<Maybe<V1OwnerReference>>>;
  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
   *
   * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: Maybe<Scalars['String']>;
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   *
   * DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
   */
  selfLink?: Maybe<Scalars['String']>;
  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
   *
   * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid?: Maybe<Scalars['String']>;
};

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export type V1ManagedFieldsEntry = {
  /** APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
  apiVersion?: Maybe<Scalars['String']>;
  /** FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
  fieldsType?: Maybe<Scalars['String']>;
  /** FieldsV1 holds the first JSON version format as described in the "FieldsV1" type. */
  fieldsV1?: Maybe<Scalars['String']>;
  /** Manager is an identifier of the workflow managing these fields. */
  manager?: Maybe<Scalars['String']>;
  /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
  operation?: Maybe<Scalars['String']>;
  /** Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. */
  subresource?: Maybe<Scalars['String']>;
  /** Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply' */
  time?: Maybe<Scalars['String']>;
};

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export type V1OwnerReference = {
  /** API version of the referent. */
  apiVersion: Scalars['String'];
  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  blockOwnerDeletion?: Maybe<Scalars['Boolean']>;
  /** If true, this reference points to the managing controller. */
  controller?: Maybe<Scalars['Boolean']>;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind: Scalars['String'];
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
  /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  uid: Scalars['String'];
};

/** CanaryConfigSpec defines the canary configuration spec */
export type V1CanaryConfigSpec = {
  /** Weight increment interval, string representation of time.Duration, ex : 1m, 2h, 2d (default: "2m") */
  duration: Scalars['String'];
  failureType: Scalars['String'];
  /** Threshold in percentage beyond which the new version of the function is considered unstable */
  failurethreshold: Scalars['Int'];
  /** New version of the function */
  newfunction: Scalars['String'];
  /** Old stable version of the function */
  oldfunction: Scalars['String'];
  /** HTTP trigger that this config references */
  trigger: Scalars['String'];
  /** Weight increment step for function */
  weightincrement: Scalars['Int'];
};

/** CanaryConfigStatus represents canary config status */
export type V1CanaryConfigStatus = {
  status: Scalars['String'];
};

/** Environment is environment for building and running user functions. */
export type V1Environment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
  spec: V1EnvironmentSpec;
};

/** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
export type V1EnvironmentSpec = {
  /** Istio default blocks all egress traffic for safety. To enable accessibility of external network for builder/function pod, set to 'true'. (Optional) defaults to 'false' */
  allowAccessToExternalNetwork?: Maybe<Scalars['Boolean']>;
  /** (Optional) defaults to 'single'. Fission workflow uses 'infinite' to load multiple functions in one function pod. Available value: - single - infinite */
  allowedFunctionsPerContainer?: Maybe<Scalars['String']>;
  /** Builder is the setting for environment builder. */
  builder: V1Builder;
  /** ImagePullSecret is the secret for Kubernetes to pull an image from a private registry. */
  imagepullsecret: Scalars['String'];
  /** KeepArchive is used by fetcher to determine if the extracted archive or unarchived file should be placed, which is then used by specialize handler. (This is mainly for the JVM environment because .jar is one kind of zip archive.) */
  keeparchive: Scalars['Boolean'];
  /** The initial pool size for environment */
  poolsize?: Maybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirements;
  /** Runtime is the setting for environment runtime. */
  runtime: V1Runtime;
  /** The grace time for pod to perform connection draining before termination. The unit is in seconds. (Optional) defaults to 360 seconds */
  terminationGracePeriod?: Maybe<Scalars['Float']>;
  /**
   * Version is the Environment API version
   *
   * Version "1" allows user to run code snippet in a file, and it's supported by most of the environments except tensorflow-serving.
   *
   * Version "2" supports downloading and compiling user function if source archive is not empty.
   *
   * Version "3" is almost the same with v2, but you're able to control the size of pre-warm pool of the environment.
   */
  version: Scalars['Int'];
};

/** Builder is the setting for environment builder. */
export type V1Builder = {
  /** (Optional) Default build command to run for this build environment. */
  command?: Maybe<Scalars['String']>;
  /** A single application container that you want to run within a pod. */
  container?: Maybe<V1Container>;
  /** Image for containing the language compilation environment. */
  image?: Maybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
};

/** A single application container that you want to run within a pod. */
export type V1Container = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: Maybe<Array<Maybe<V1EnvVar>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: Maybe<Array<Maybe<V1EnvFromSource>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
  image?: Maybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: Maybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: Maybe<V1Lifecycle>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: Maybe<V1Probe>;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  name: Scalars['String'];
  /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
  ports?: Maybe<Array<Maybe<V1ContainerPort>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: Maybe<V1Probe>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: Maybe<V1ResourceRequirements>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: Maybe<V1SecurityContext>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: Maybe<V1Probe>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: Maybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: Maybe<Scalars['Boolean']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: Maybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: Maybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: Maybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: Maybe<Array<Maybe<V1VolumeDevice>>>;
  /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
  volumeMounts?: Maybe<Array<Maybe<V1VolumeMount>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: Maybe<Scalars['String']>;
};

/** EnvVar represents an environment variable present in a Container. */
export type V1EnvVar = {
  /** Name of the environment variable. Must be a C_IDENTIFIER. */
  name: Scalars['String'];
  /** Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  value?: Maybe<Scalars['String']>;
  /** EnvVarSource represents a source for the value of an EnvVar. */
  valueFrom?: Maybe<V1EnvVarSource>;
};

/** EnvVarSource represents a source for the value of an EnvVar. */
export type V1EnvVarSource = {
  /** Selects a key from a ConfigMap. */
  configMapKeyRef?: Maybe<V1ConfigMapKeySelector>;
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: Maybe<V1ObjectFieldSelector>;
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: Maybe<V1ResourceFieldSelector>;
  /** SecretKeySelector selects a key of a Secret. */
  secretKeyRef?: Maybe<V1SecretKeySelector>;
};

/** Selects a key from a ConfigMap. */
export type V1ConfigMapKeySelector = {
  /** The key to select. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its key must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export type V1ObjectFieldSelector = {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  apiVersion?: Maybe<Scalars['String']>;
  /** Path of the field to select in the specified API version. */
  fieldPath: Scalars['String'];
};

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export type V1ResourceFieldSelector = {
  /** Container name: required for volumes, optional for env vars */
  containerName?: Maybe<Scalars['String']>;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  divisor?: Maybe<Scalars['String']>;
  /** Required: resource to select */
  resource: Scalars['String'];
};

/** SecretKeySelector selects a key of a Secret. */
export type V1SecretKeySelector = {
  /** The key of the secret to select from.  Must be a valid secret key. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** EnvFromSource represents the source of a set of ConfigMaps */
export type V1EnvFromSource = {
  /**
   * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
   *
   * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  configMapRef?: Maybe<V1ConfigMapEnvSource>;
  /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  prefix?: Maybe<Scalars['String']>;
  /**
   * SecretEnvSource selects a Secret to populate the environment variables with.
   *
   * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  secretRef?: Maybe<V1SecretEnvSource>;
};

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export type V1ConfigMapEnvSource = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export type V1SecretEnvSource = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the Secret must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export type V1Lifecycle = {
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  postStart?: Maybe<V1LifecycleHandler>;
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  preStop?: Maybe<V1LifecycleHandler>;
};

/** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
export type V1LifecycleHandler = {
  /** ExecAction describes a "run in container" action. */
  exec?: Maybe<V1ExecAction>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: Maybe<V1HTTPGetAction>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: Maybe<V1TCPSocketAction>;
};

/** ExecAction describes a "run in container" action. */
export type V1ExecAction = {
  /** Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** HTTPGetAction describes an action based on HTTP Get requests. */
export type V1HTTPGetAction = {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  host?: Maybe<Scalars['String']>;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: Maybe<Array<Maybe<V1HTTPHeader>>>;
  /** Path to access on the HTTP server. */
  path?: Maybe<Scalars['String']>;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
  /** Scheme to use for connecting to the host. Defaults to HTTP. */
  scheme?: Maybe<Scalars['String']>;
};

/** HTTPHeader describes a custom header to be used in HTTP probes */
export type V1HTTPHeader = {
  /** The header field name */
  name: Scalars['String'];
  /** The header field value */
  value: Scalars['String'];
};

/** TCPSocketAction describes an action based on opening a socket */
export type V1TCPSocketAction = {
  /** Optional: Host name to connect to, defaults to the pod IP. */
  host?: Maybe<Scalars['String']>;
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
};

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export type V1Probe = {
  /** ExecAction describes a "run in container" action. */
  exec?: Maybe<V1ExecAction>;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  failureThreshold?: Maybe<Scalars['Int']>;
  grpc?: Maybe<V1GRPCAction>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: Maybe<V1HTTPGetAction>;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  initialDelaySeconds?: Maybe<Scalars['Int']>;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
  periodSeconds?: Maybe<Scalars['Int']>;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
  successThreshold?: Maybe<Scalars['Int']>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: Maybe<V1TCPSocketAction>;
  /** Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset. */
  terminationGracePeriodSeconds?: Maybe<Scalars['Float']>;
  /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  timeoutSeconds?: Maybe<Scalars['Int']>;
};

export type V1GRPCAction = {
  /** Port number of the gRPC service. Number must be in the range 1 to 65535. */
  port: Scalars['Int'];
  /**
   * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * If this is not specified, the default behavior is defined by gRPC.
   */
  service: Scalars['String'];
};

/** ContainerPort represents a network port in a single container. */
export type V1ContainerPort = {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  containerPort: Scalars['Int'];
  /** What host IP to bind the external port to. */
  hostIP?: Maybe<Scalars['String']>;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  hostPort?: Maybe<Scalars['Int']>;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
  name?: Maybe<Scalars['String']>;
  /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
  protocol?: Maybe<Scalars['String']>;
};

/** ResourceRequirements describes the compute resource requirements. */
export type V1ResourceRequirements = {
  /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  limits?: Maybe<Scalars['JSON']>;
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  requests?: Maybe<Scalars['JSON']>;
};

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export type V1SecurityContext = {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
  allowPrivilegeEscalation?: Maybe<Scalars['Boolean']>;
  /** Adds and removes POSIX capabilities from running containers. */
  capabilities?: Maybe<V1Capabilities>;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
  privileged?: Maybe<Scalars['Boolean']>;
  /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
  procMount?: Maybe<Scalars['String']>;
  /** Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
  readOnlyRootFilesystem?: Maybe<Scalars['Boolean']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: Maybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: Maybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: Maybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: Maybe<V1SELinuxOptions>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: Maybe<V1SeccompProfile>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: Maybe<V1WindowsSecurityContextOptions>;
};

/** Adds and removes POSIX capabilities from running containers. */
export type V1Capabilities = {
  /** Added capabilities */
  add?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Removed capabilities */
  drop?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** SELinuxOptions are the labels to be applied to the container */
export type V1SELinuxOptions = {
  /** Level is SELinux level label that applies to the container. */
  level?: Maybe<Scalars['String']>;
  /** Role is a SELinux role label that applies to the container. */
  role?: Maybe<Scalars['String']>;
  /** Type is a SELinux type label that applies to the container. */
  type?: Maybe<Scalars['String']>;
  /** User is a SELinux user label that applies to the container. */
  user?: Maybe<Scalars['String']>;
};

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export type V1SeccompProfile = {
  /** localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
  localhostProfile?: Maybe<Scalars['String']>;
  /**
   * type indicates which kind of seccomp profile will be applied. Valid options are:
   *
   * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
   */
  type: Scalars['String'];
};

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export type V1WindowsSecurityContextOptions = {
  /** GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
  gmsaCredentialSpec?: Maybe<Scalars['String']>;
  /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
  gmsaCredentialSpecName?: Maybe<Scalars['String']>;
  /** HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
  hostProcess?: Maybe<Scalars['Boolean']>;
  /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsUserName?: Maybe<Scalars['String']>;
};

/** volumeDevice describes a mapping of a raw block device within a container. */
export type V1VolumeDevice = {
  /** devicePath is the path inside of the container that the device will be mapped to. */
  devicePath: Scalars['String'];
  /** name must match the name of a persistentVolumeClaim in the pod */
  name: Scalars['String'];
};

/** VolumeMount describes a mounting of a Volume within a container. */
export type V1VolumeMount = {
  /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
  mountPath: Scalars['String'];
  /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
  mountPropagation?: Maybe<Scalars['String']>;
  /** This must match the Name of a Volume. */
  name: Scalars['String'];
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  subPath?: Maybe<Scalars['String']>;
  /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
  subPathExpr?: Maybe<Scalars['String']>;
};

/** PodSpec is a description of a pod. */
export type V1PodSpec = {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  activeDeadlineSeconds?: Maybe<Scalars['Float']>;
  /** Affinity is a group of affinity scheduling rules. */
  affinity?: Maybe<V1Affinity>;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  automountServiceAccountToken?: Maybe<Scalars['Boolean']>;
  /** List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
  containers: Array<Maybe<V1Container>>;
  /** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
  dnsConfig?: Maybe<V1PodDNSConfig>;
  /** Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
  dnsPolicy?: Maybe<Scalars['String']>;
  /** EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
  enableServiceLinks?: Maybe<Scalars['Boolean']>;
  /** List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is beta-level and available on clusters that haven't disabled the EphemeralContainers feature gate. */
  ephemeralContainers?: Maybe<Array<Maybe<V1EphemeralContainer>>>;
  /** HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
  hostAliases?: Maybe<Array<Maybe<V1HostAlias>>>;
  /** Use the host's ipc namespace. Optional: Default to false. */
  hostIPC?: Maybe<Scalars['Boolean']>;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
  hostNetwork?: Maybe<Scalars['Boolean']>;
  /** Use the host's pid namespace. Optional: Default to false. */
  hostPID?: Maybe<Scalars['Boolean']>;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  hostname?: Maybe<Scalars['String']>;
  /** ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
  imagePullSecrets?: Maybe<Array<Maybe<V1LocalObjectReference>>>;
  /** List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
  initContainers?: Maybe<Array<Maybe<V1Container>>>;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  nodeName?: Maybe<Scalars['String']>;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  nodeSelector?: Maybe<Scalars['JSON']>;
  /** PodOS defines the OS parameters of a pod. */
  os?: Maybe<V1PodOS>;
  /** Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md This field is beta-level as of Kubernetes v1.18, and is only honored by servers that enable the PodOverhead feature. */
  overhead?: Maybe<Scalars['JSON']>;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
  preemptionPolicy?: Maybe<Scalars['String']>;
  /** The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. */
  priority?: Maybe<Scalars['Int']>;
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  priorityClassName?: Maybe<Scalars['String']>;
  /** If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
  readinessGates?: Maybe<Array<Maybe<V1PodReadinessGate>>>;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
  restartPolicy?: Maybe<Scalars['String']>;
  /** RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class This is a beta feature as of Kubernetes v1.14. */
  runtimeClassName?: Maybe<Scalars['String']>;
  /** If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
  schedulerName?: Maybe<Scalars['String']>;
  /** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
  securityContext?: Maybe<V1PodSecurityContext>;
  /** DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
  serviceAccount?: Maybe<Scalars['String']>;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  serviceAccountName?: Maybe<Scalars['String']>;
  /** If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
  setHostnameAsFQDN?: Maybe<Scalars['Boolean']>;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
  shareProcessNamespace?: Maybe<Scalars['Boolean']>;
  /** If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
  subdomain?: Maybe<Scalars['String']>;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. */
  terminationGracePeriodSeconds?: Maybe<Scalars['Float']>;
  /** If specified, the pod's tolerations. */
  tolerations?: Maybe<Array<Maybe<V1Toleration>>>;
  /** TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
  topologySpreadConstraints?: Maybe<Array<Maybe<V1TopologySpreadConstraint>>>;
  /** List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
  volumes?: Maybe<Array<Maybe<V1Volume>>>;
};

/** Affinity is a group of affinity scheduling rules. */
export type V1Affinity = {
  /** Node affinity is a group of node affinity scheduling rules. */
  nodeAffinity?: Maybe<V1NodeAffinity>;
  /** Pod affinity is a group of inter pod affinity scheduling rules. */
  podAffinity?: Maybe<V1PodAffinity>;
  /** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
  podAntiAffinity?: Maybe<V1PodAntiAffinity>;
};

/** Node affinity is a group of node affinity scheduling rules. */
export type V1NodeAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1PreferredSchedulingTerm>>>;
  /** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
  requiredDuringSchedulingIgnoredDuringExecution?: Maybe<V1NodeSelector>;
};

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export type V1PreferredSchedulingTerm = {
  /** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
  preference: V1NodeSelectorTerm;
  /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export type V1NodeSelectorTerm = {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: Maybe<Array<Maybe<V1NodeSelectorRequirement>>>;
  /** A list of node selector requirements by node's fields. */
  matchFields?: Maybe<Array<Maybe<V1NodeSelectorRequirement>>>;
};

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1NodeSelectorRequirement = {
  /** The label key that the selector applies to. */
  key: Scalars['String'];
  /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  operator: Scalars['String'];
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export type V1NodeSelector = {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: Array<Maybe<V1NodeSelectorTerm>>;
};

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export type V1PodAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1WeightedPodAffinityTerm>>>;
  /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1PodAffinityTerm>>>;
};

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export type V1WeightedPodAffinityTerm = {
  /** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
  podAffinityTerm: V1PodAffinityTerm;
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export type V1PodAffinityTerm = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: Maybe<V1LabelSelector>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  namespaceSelector?: Maybe<V1LabelSelector>;
  /** namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace" */
  namespaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
  topologyKey: Scalars['String'];
};

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export type V1LabelSelector = {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  matchExpressions?: Maybe<Array<Maybe<V1LabelSelectorRequirement>>>;
  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  matchLabels?: Maybe<Scalars['JSON']>;
};

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1LabelSelectorRequirement = {
  /** key is the label key that the selector applies to. */
  key: Scalars['String'];
  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  operator: Scalars['String'];
  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export type V1PodAntiAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1WeightedPodAffinityTerm>>>;
  /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1PodAffinityTerm>>>;
};

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export type V1PodDNSConfig = {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  nameservers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
  options?: Maybe<Array<Maybe<V1PodDNSConfigOption>>>;
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  searches?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export type V1PodDNSConfigOption = {
  /** Required. */
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
 *
 * To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
 *
 * This is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.
 */
export type V1EphemeralContainer = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: Maybe<Array<Maybe<V1EnvVar>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: Maybe<Array<Maybe<V1EnvFromSource>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images */
  image?: Maybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: Maybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: Maybe<V1Lifecycle>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: Maybe<V1Probe>;
  /** Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers. */
  name: Scalars['String'];
  /** Ports are not allowed for ephemeral containers. */
  ports?: Maybe<Array<Maybe<V1ContainerPort>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: Maybe<V1Probe>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: Maybe<V1ResourceRequirements>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: Maybe<V1SecurityContext>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: Maybe<V1Probe>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: Maybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: Maybe<Scalars['Boolean']>;
  /**
   * If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
   *
   * The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
   */
  targetContainerName?: Maybe<Scalars['String']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: Maybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: Maybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: Maybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: Maybe<Array<Maybe<V1VolumeDevice>>>;
  /** Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated. */
  volumeMounts?: Maybe<Array<Maybe<V1VolumeMount>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: Maybe<Scalars['String']>;
};

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export type V1HostAlias = {
  /** Hostnames for the above IP address. */
  hostnames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** IP address of the host file entry. */
  ip?: Maybe<Scalars['String']>;
};

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export type V1LocalObjectReference = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
};

/** PodOS defines the OS parameters of a pod. */
export type V1PodOS = {
  /** Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null */
  name: Scalars['String'];
};

/** PodReadinessGate contains the reference to a pod condition */
export type V1PodReadinessGate = {
  /** ConditionType refers to a condition in the pod's condition list with matching type. */
  conditionType: Scalars['String'];
};

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export type V1PodSecurityContext = {
  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
   *
   * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw
   */
  fsGroup?: Maybe<Scalars['Float']>;
  /** fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows. */
  fsGroupChangePolicy?: Maybe<Scalars['String']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: Maybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: Maybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: Maybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: Maybe<V1SELinuxOptions>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: Maybe<V1SeccompProfile>;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows. */
  supplementalGroups?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows. */
  sysctls?: Maybe<Array<Maybe<V1Sysctl>>>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: Maybe<V1WindowsSecurityContextOptions>;
};

/** Sysctl defines a kernel parameter to be set */
export type V1Sysctl = {
  /** Name of a property to set */
  name: Scalars['String'];
  /** Value of a property to set */
  value: Scalars['String'];
};

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export type V1Toleration = {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  effect?: Maybe<Scalars['String']>;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  key?: Maybe<Scalars['String']>;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  operator?: Maybe<Scalars['String']>;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  tolerationSeconds?: Maybe<Scalars['Float']>;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  value?: Maybe<Scalars['String']>;
};

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export type V1TopologySpreadConstraint = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: Maybe<V1LabelSelector>;
  /** MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: */
  maxSkew: Scalars['Int'];
  /** TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field. */
  topologyKey: Scalars['String'];
  /**
   * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,
   *   but giving higher precedence to topologies that would help reduce the
   *   skew.
   * A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1:
   */
  whenUnsatisfiable: Scalars['String'];
};

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export type V1Volume = {
  /**
   * Represents a Persistent Disk resource in AWS.
   *
   * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
   */
  awsElasticBlockStore?: Maybe<V1AWSElasticBlockStoreVolumeSource>;
  /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
  azureDisk?: Maybe<V1AzureDiskVolumeSource>;
  /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
  azureFile?: Maybe<V1AzureFileVolumeSource>;
  /** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
  cephfs?: Maybe<V1CephFSVolumeSource>;
  /** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
  cinder?: Maybe<V1CinderVolumeSource>;
  /**
   * Adapts a ConfigMap into a volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
   */
  configMap?: Maybe<V1ConfigMapVolumeSource>;
  /** Represents a source location of a volume to mount, managed by an external CSI driver */
  csi?: Maybe<V1CSIVolumeSource>;
  /** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
  downwardAPI?: Maybe<V1DownwardAPIVolumeSource>;
  /** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
  emptyDir?: Maybe<V1EmptyDirVolumeSource>;
  /** Represents an ephemeral volume that is handled by a normal storage driver. */
  ephemeral?: Maybe<V1EphemeralVolumeSource>;
  /** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
  fc?: Maybe<V1FCVolumeSource>;
  /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
  flexVolume?: Maybe<V1FlexVolumeSource>;
  /** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
  flocker?: Maybe<V1FlockerVolumeSource>;
  /**
   * Represents a Persistent Disk resource in Google Compute Engine.
   *
   * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
   */
  gcePersistentDisk?: Maybe<V1GCEPersistentDiskVolumeSource>;
  /**
   * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
   *
   * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
   */
  gitRepo?: Maybe<V1GitRepoVolumeSource>;
  /** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
  glusterfs?: Maybe<V1GlusterfsVolumeSource>;
  /** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
  hostPath?: Maybe<V1HostPathVolumeSource>;
  /** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
  iscsi?: Maybe<V1ISCSIVolumeSource>;
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name: Scalars['String'];
  /** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
  nfs?: Maybe<V1NFSVolumeSource>;
  /** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
  persistentVolumeClaim?: Maybe<V1PersistentVolumeClaimVolumeSource>;
  /** Represents a Photon Controller persistent disk resource. */
  photonPersistentDisk?: Maybe<V1PhotonPersistentDiskVolumeSource>;
  /** PortworxVolumeSource represents a Portworx volume resource. */
  portworxVolume?: Maybe<V1PortworxVolumeSource>;
  /** Represents a projected volume source */
  projected?: Maybe<V1ProjectedVolumeSource>;
  /** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
  quobyte?: Maybe<V1QuobyteVolumeSource>;
  /** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
  rbd?: Maybe<V1RBDVolumeSource>;
  /** ScaleIOVolumeSource represents a persistent ScaleIO volume */
  scaleIO?: Maybe<V1ScaleIOVolumeSource>;
  /**
   * Adapts a Secret into a volume.
   *
   * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
   */
  secret?: Maybe<V1SecretVolumeSource>;
  /** Represents a StorageOS persistent volume resource. */
  storageos?: Maybe<V1StorageOSVolumeSource>;
  /** Represents a vSphere volume resource. */
  vsphereVolume?: Maybe<V1VsphereVirtualDiskVolumeSource>;
};

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export type V1AWSElasticBlockStoreVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  fsType?: Maybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  partition?: Maybe<Scalars['Int']>;
  /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  volumeID: Scalars['String'];
};

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export type V1AzureDiskVolumeSource = {
  /** Host Caching mode: None, Read Only, Read Write. */
  cachingMode?: Maybe<Scalars['String']>;
  /** The Name of the data disk in the blob storage */
  diskName: Scalars['String'];
  /** The URI the data disk in the blob storage */
  diskURI: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
  kind?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type V1AzureFileVolumeSource = {
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** the name of secret that contains Azure Storage Account Name and Key */
  secretName: Scalars['String'];
  /** Share Name */
  shareName: Scalars['String'];
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type V1CephFSVolumeSource = {
  /** Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  monitors: Array<Maybe<Scalars['String']>>;
  /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
  path?: Maybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  secretFile?: Maybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  user?: Maybe<Scalars['String']>;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type V1CinderVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  fsType?: Maybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  volumeID: Scalars['String'];
};

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export type V1ConfigMapVolumeSource = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** Maps a string key to a path within a volume. */
export type V1KeyToPath = {
  /** The key to project. */
  key: Scalars['String'];
  /** Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: Maybe<Scalars['Int']>;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  path: Scalars['String'];
};

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export type V1CSIVolumeSource = {
  /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
  fsType?: Maybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  nodePublishSecretRef?: Maybe<V1LocalObjectReference>;
  /** Specifies a read-only configuration for the volume. Defaults to false (read/write). */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
  volumeAttributes?: Maybe<Scalars['JSON']>;
};

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export type V1DownwardAPIVolumeSource = {
  /** Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** Items is a list of downward API volume file */
  items?: Maybe<Array<Maybe<V1DownwardAPIVolumeFile>>>;
};

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export type V1DownwardAPIVolumeFile = {
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: Maybe<V1ObjectFieldSelector>;
  /** Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: Maybe<Scalars['Int']>;
  /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  path: Scalars['String'];
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: Maybe<V1ResourceFieldSelector>;
};

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export type V1EmptyDirVolumeSource = {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  medium?: Maybe<Scalars['String']>;
  /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  sizeLimit?: Maybe<Scalars['String']>;
};

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export type V1EphemeralVolumeSource = {
  /** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
  volumeClaimTemplate?: Maybe<V1PersistentVolumeClaimTemplate>;
};

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export type V1PersistentVolumeClaimTemplate = {
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata?: Maybe<V1ObjectMeta>;
  /** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
  spec: V1PersistentVolumeClaimSpec;
};

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export type V1PersistentVolumeClaimSpec = {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  accessModes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSource?: Maybe<V1TypedLocalObjectReference>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSourceRef?: Maybe<V1TypedLocalObjectReference>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: Maybe<V1ResourceRequirements>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: Maybe<V1LabelSelector>;
  /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
  storageClassName?: Maybe<Scalars['String']>;
  /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
  volumeMode?: Maybe<Scalars['String']>;
  /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
  volumeName?: Maybe<Scalars['String']>;
};

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export type V1TypedLocalObjectReference = {
  /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
  apiGroup: Scalars['String'];
  /** Kind is the type of resource being referenced */
  kind: Scalars['String'];
  /** Name is the name of resource being referenced */
  name: Scalars['String'];
};

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export type V1FCVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Optional: FC target lun number */
  lun?: Maybe<Scalars['Int']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Optional: FC target worldwide names (WWNs) */
  targetWWNs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
  wwids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export type V1FlexVolumeSource = {
  /** Driver is the name of the driver to use for this volume. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  fsType?: Maybe<Scalars['String']>;
  /** Optional: Extra command options if any. */
  options?: Maybe<Scalars['JSON']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
};

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export type V1FlockerVolumeSource = {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  datasetName?: Maybe<Scalars['String']>;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  datasetUUID?: Maybe<Scalars['String']>;
};

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export type V1GCEPersistentDiskVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  fsType?: Maybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  partition?: Maybe<Scalars['Int']>;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  pdName: Scalars['String'];
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export type V1GitRepoVolumeSource = {
  /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  directory?: Maybe<Scalars['String']>;
  /** Repository URL */
  repository: Scalars['String'];
  /** Commit hash for the specified revision. */
  revision?: Maybe<Scalars['String']>;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type V1GlusterfsVolumeSource = {
  /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  endpoints: Scalars['String'];
  /** Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  path: Scalars['String'];
  /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export type V1HostPathVolumeSource = {
  /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  path: Scalars['String'];
  /** Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  type?: Maybe<Scalars['String']>;
};

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type V1ISCSIVolumeSource = {
  /** whether support iSCSI Discovery CHAP authentication */
  chapAuthDiscovery?: Maybe<Scalars['Boolean']>;
  /** whether support iSCSI Session CHAP authentication */
  chapAuthSession?: Maybe<Scalars['Boolean']>;
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
  fsType?: Maybe<Scalars['String']>;
  /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
  initiatorName?: Maybe<Scalars['String']>;
  /** Target iSCSI Qualified Name. */
  iqn: Scalars['String'];
  /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  iscsiInterface?: Maybe<Scalars['String']>;
  /** iSCSI Target Lun number. */
  lun: Scalars['Int'];
  /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  portals?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  targetPortal: Scalars['String'];
};

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export type V1NFSVolumeSource = {
  /** Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  path: Scalars['String'];
  /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  server: Scalars['String'];
};

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export type V1PersistentVolumeClaimVolumeSource = {
  /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  claimName: Scalars['String'];
  /** Will force the ReadOnly setting in VolumeMounts. Default false. */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/** Represents a Photon Controller persistent disk resource. */
export type V1PhotonPersistentDiskVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** ID that identifies Photon Controller persistent disk */
  pdID: Scalars['String'];
};

/** PortworxVolumeSource represents a Portworx volume resource. */
export type V1PortworxVolumeSource = {
  /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** VolumeID uniquely identifies a Portworx volume */
  volumeID: Scalars['String'];
};

/** Represents a projected volume source */
export type V1ProjectedVolumeSource = {
  /** Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** list of volume projections */
  sources: Array<Maybe<V1VolumeProjection>>;
};

/** Projection that may be projected along with other supported volume types */
export type V1VolumeProjection = {
  /**
   * Adapts a ConfigMap into a projected volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
   */
  configMap?: Maybe<V1ConfigMapProjection>;
  /** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
  downwardAPI?: Maybe<V1DownwardAPIProjection>;
  /**
   * Adapts a secret into a projected volume.
   *
   * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
   */
  secret?: Maybe<V1SecretProjection>;
  /** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
  serviceAccountToken?: Maybe<V1ServiceAccountTokenProjection>;
};

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export type V1ConfigMapProjection = {
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export type V1DownwardAPIProjection = {
  /** Items is a list of DownwardAPIVolume file */
  items?: Maybe<Array<Maybe<V1DownwardAPIVolumeFile>>>;
};

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export type V1SecretProjection = {
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export type V1ServiceAccountTokenProjection = {
  /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
  audience?: Maybe<Scalars['String']>;
  /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
  expirationSeconds?: Maybe<Scalars['Float']>;
  /** Path is the path relative to the mount point of the file to project the token into. */
  path: Scalars['String'];
};

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export type V1QuobyteVolumeSource = {
  /** Group to map volume access to Default is no group */
  group?: Maybe<Scalars['String']>;
  /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  registry: Scalars['String'];
  /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
  tenant?: Maybe<Scalars['String']>;
  /** User to map volume access to Defaults to serivceaccount user */
  user?: Maybe<Scalars['String']>;
  /** Volume is a string that references an already created Quobyte volume by name. */
  volume: Scalars['String'];
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type V1RBDVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
  fsType?: Maybe<Scalars['String']>;
  /** The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  image: Scalars['String'];
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  keyring?: Maybe<Scalars['String']>;
  /** A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  monitors: Array<Maybe<Scalars['String']>>;
  /** The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  pool?: Maybe<Scalars['String']>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  user?: Maybe<Scalars['String']>;
};

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export type V1ScaleIOVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
  fsType?: Maybe<Scalars['String']>;
  /** The host address of the ScaleIO API Gateway. */
  gateway: Scalars['String'];
  /** The name of the ScaleIO Protection Domain for the configured storage. */
  protectionDomain?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef: V1LocalObjectReference;
  /** Flag to enable/disable SSL communication with Gateway, default false */
  sslEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
  storageMode?: Maybe<Scalars['String']>;
  /** The ScaleIO Storage Pool associated with the protection domain. */
  storagePool?: Maybe<Scalars['String']>;
  /** The name of the storage system as configured in ScaleIO. */
  system: Scalars['String'];
  /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
  volumeName?: Maybe<Scalars['String']>;
};

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export type V1SecretVolumeSource = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Specify whether the Secret or its keys must be defined */
  optional?: Maybe<Scalars['Boolean']>;
  /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  secretName?: Maybe<Scalars['String']>;
};

/** Represents a StorageOS persistent volume resource. */
export type V1StorageOSVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
  volumeName?: Maybe<Scalars['String']>;
  /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
  volumeNamespace?: Maybe<Scalars['String']>;
};

/** Represents a vSphere volume resource. */
export type V1VsphereVirtualDiskVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
  storagePolicyID?: Maybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile name. */
  storagePolicyName?: Maybe<Scalars['String']>;
  /** Path that identifies vSphere volume vmdk */
  volumePath: Scalars['String'];
};

/** Runtime is the setting for environment runtime. */
export type V1Runtime = {
  /** A single application container that you want to run within a pod. */
  container?: Maybe<V1Container>;
  /** Image for containing the language runtime. */
  image: Scalars['String'];
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
};

/** Function is function runs within environment runtime with given package and secrets/configmaps. */
export type V1Function = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** FunctionSpec describes the contents of the function. */
  spec: V1FunctionSpec;
};

/** FunctionSpec describes the contents of the function. */
export type V1FunctionSpec = {
  /** Maximum number of pods to be specialized which will serve requests This is optional. If not specified default value will be taken as 500 */
  concurrency?: Maybe<Scalars['Int']>;
  /** Reference to a list of configmaps. */
  configmaps?: Maybe<Array<Maybe<V1ConfigMapReference>>>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReference;
  /** FunctionTimeout provides a maximum amount of duration within which a request for a particular function execution should be complete. This is optional. If not specified default value will be taken as 60s */
  functionTimeout?: Maybe<Scalars['Int']>;
  /** IdleTimeout specifies the length of time that a function is idle before the function pod(s) are eligible for deletion. If no traffic to the function is detected within the idle timeout, the executor will then recycle the function pod(s) to release resources. */
  idletimeout?: Maybe<Scalars['Int']>;
  /**
   * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
   *
   * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
   */
  invokeStrategy: V1InvokeStrategy;
  /** OnceOnly specifies if specialized pod will serve exactly one request in its lifetime and would be garbage collected after serving that one request This is optional. If not specified default value will be taken as false */
  onceOnly?: Maybe<Scalars['Boolean']>;
  /** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
  package: V1FunctionPackageRef;
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
  /** RequestsPerPod indicates the maximum number of concurrent requests that can be served by a specialized pod This is optional. If not specified default value will be taken as 1 */
  requestsPerPod?: Maybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirements;
  /** Reference to a list of secrets. */
  secrets?: Maybe<Array<Maybe<V1SecretReference>>>;
};

/** ConfigMapReference is a reference to a kubernetes configmap. */
export type V1ConfigMapReference = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** EnvironmentReference is a reference to an environment. */
export type V1EnvironmentReference = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/**
 * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
 *
 * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
 */
export type V1InvokeStrategy = {
  /**
   * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
   *
   * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
   *
   * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
   */
  executionStrategy: V1ExecutionStrategy;
  /** StrategyType is the strategy type of function. Now it only supports 'execution'. */
  strategyType: Scalars['String'];
};

/**
 * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
 *
 * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
 *
 * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
 */
export type V1ExecutionStrategy = {
  /**
   * ExecutorType is the executor type of function used. Defaults to "poolmgr".
   *
   * Available value:
   *  - poolmgr
   *  - newdeploy
   *  - container
   */
  executorType: Scalars['String'];
  /** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
  hpaBehavior?: Maybe<V2beta2HorizontalPodAutoscalerBehavior>;
  /** hpaMetrics is the list of metrics used to determine the desired replica count of the Deployment created for the function. Applicable for executor type newdeploy and container. */
  hpaMetrics?: Maybe<Array<Maybe<V2beta2MetricSpec>>>;
  /** This is only for newdeploy to set up maximum replicas of deployment. */
  maxScale: Scalars['Int'];
  /** This is only for newdeploy to set up minimum replicas of deployment. */
  minScale: Scalars['Int'];
  /** This is the timeout setting for executor to wait for pod specialization. */
  specializationTimeout: Scalars['Int'];
  /** Deprecated: use hpaMetrics instead. This is only for executor type newdeploy and container to set up target CPU utilization of HPA. Applicable for executor type newdeploy and container. */
  targetCPUPercent: Scalars['Int'];
};

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export type V2beta2HorizontalPodAutoscalerBehavior = {
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleDown?: Maybe<V2beta2HPAScalingRules>;
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleUp?: Maybe<V2beta2HPAScalingRules>;
};

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export type V2beta2HPAScalingRules = {
  /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
  policies?: Maybe<Array<Maybe<V2beta2HPAScalingPolicy>>>;
  /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
  selectPolicy?: Maybe<Scalars['String']>;
  /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
  stabilizationWindowSeconds?: Maybe<Scalars['Int']>;
};

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export type V2beta2HPAScalingPolicy = {
  /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
  periodSeconds: Scalars['Int'];
  /** Type is used to specify the scaling policy. */
  type: Scalars['String'];
  /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
  value: Scalars['Int'];
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type V2beta2MetricSpec = {
  /** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  containerResource?: Maybe<V2beta2ContainerResourceMetricSource>;
  /** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  external?: Maybe<V2beta2ExternalMetricSource>;
  /** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
  object?: Maybe<V2beta2ObjectMetricSource>;
  /** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
  pods?: Maybe<V2beta2PodsMetricSource>;
  /** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  resource?: Maybe<V2beta2ResourceMetricSource>;
  /** type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
  type: Scalars['String'];
};

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ContainerResourceMetricSource = {
  /** container is the name of the container in the pods of the scaling target */
  container: Scalars['String'];
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type V2beta2MetricTarget = {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  averageUtilization?: Maybe<Scalars['Int']>;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: Maybe<Scalars['String']>;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  type: Scalars['String'];
  /** value is the target value of the metric (as a quantity). */
  value?: Maybe<Scalars['String']>;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type V2beta2ExternalMetricSource = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifier;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** MetricIdentifier defines the name and optionally selector for a metric */
export type V2beta2MetricIdentifier = {
  /** name is the name of the given metric */
  name: Scalars['String'];
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: Maybe<V1LabelSelector>;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta2ObjectMetricSource = {
  /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
  describedObject: V2beta2CrossVersionObjectReference;
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifier;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V2beta2CrossVersionObjectReference = {
  /** API version of the referent */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
  kind: Scalars['String'];
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type V2beta2PodsMetricSource = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifier;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ResourceMetricSource = {
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
export type V1FunctionPackageRef = {
  /**
   * FunctionName specifies a specific function within the package. This allows functions to share packages, by having different functions within the same package.
   *
   * Fission itself does not interpret this path. It is passed verbatim to build and runtime environments.
   *
   * This is optional: if unspecified, the environment has a default name.
   */
  functionName?: Maybe<Scalars['String']>;
  /** PackageRef is a reference to the package. */
  packageref: V1PackageRef;
};

/** PackageRef is a reference to the package. */
export type V1PackageRef = {
  name: Scalars['String'];
  namespace: Scalars['String'];
  /** Including resource version in the reference forces the function to be updated on package update, making it possible to cache the function based on its metadata. */
  resourceversion?: Maybe<Scalars['String']>;
};

/** SecretReference is a reference to a kubernetes secret. */
export type V1SecretReference = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** HTTPTrigger is the trigger invokes user functions when receiving HTTP requests. */
export type V1HTTPTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
  spec: V1HTTPTriggerSpec;
};

/** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
export type V1HTTPTriggerSpec = {
  /** If CreateIngress is true, router will create an ingress definition. */
  createingress: Scalars['Boolean'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
  /** Deprecated: the original idea of this field is not for setting Ingress. Since we have IngressConfig now, remove Host after couple releases. */
  host: Scalars['String'];
  /** IngressConfig is for router to set up Ingress. */
  ingressconfig: V1IngressConfig;
  /** When function is exposed with Prefix based path, keepPrefix decides whether to keep or trim prefix in URL while invoking function. */
  keepPrefix?: Maybe<Scalars['Boolean']>;
  /** Use Methods instead of Method. This field is going to be deprecated in a future release HTTP method to access a function. */
  method: Scalars['String'];
  /** HTTP methods to access a function */
  methods?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Prefix with which functions are exposed. NOTE: Prefix takes precedence over URL/RelativeURL. Note that it does not treat slashes specially ("/foobar/" will be matched by the prefix "/foobar"). */
  prefix?: Maybe<Scalars['String']>;
  /** RelativeURL is the exposed URL for external client to access a function with. */
  relativeurl: Scalars['String'];
};

/** FunctionReference refers to a function */
export type V1FunctionReference = {
  /** Function Reference by weight. this map contains function name as key and its weight as the value. This is for canary upgrade purpose. */
  functionweights: Scalars['JSON'];
  /** Name of the function. */
  name: Scalars['String'];
  /**
   * Type indicates whether this function reference is by name or selector. For now, the only supported reference type is by "name".  Future reference types:
   *   * Function by label or annotation
   *   * Branch or tag of a versioned function
   *   * A "rolling upgrade" from one version of a function to another
   * Available value: - name - function-weights
   */
  type: Scalars['String'];
};

/** IngressConfig is for router to set up Ingress. */
export type V1IngressConfig = {
  /** Annotations will be added to metadata when creating Ingress. */
  annotations: Scalars['JSON'];
  /** Host is for ingress controller to apply rules. If host is empty or "*", the rule applies to all inbound HTTP traffic. */
  host: Scalars['String'];
  /** Path is for path matching. The format of path depends on what ingress controller you used. */
  path: Scalars['String'];
  /** TLS is for user to specify a Secret that contains TLS key and certificate. The domain name in the key and crt must match the value of Host field. */
  tls: Scalars['String'];
};

/** MessageQueueTrigger invokes functions when messages arrive to certain topic that trigger subscribes to. */
export type V1MessageQueueTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
  spec: V1MessageQueueTriggerSpec;
};

/** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
export type V1MessageQueueTriggerSpec = {
  /** Content type of payload */
  contentType: Scalars['String'];
  /** The period to wait after the last trigger reported active before scaling the deployment back to 0 */
  cooldownPeriod?: Maybe<Scalars['Int']>;
  /** Topic to collect error response sent from function */
  errorTopic: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
  /** Maximum number of replicas KEDA will scale the deployment up to */
  maxReplicaCount?: Maybe<Scalars['Int']>;
  /** Maximum times for message queue trigger to retry */
  maxRetries: Scalars['Int'];
  /** Type of message queue (NATS, Kafka, AzureQueue) */
  messageQueueType: Scalars['String'];
  /** ScalerTrigger fields */
  metadata: Scalars['JSON'];
  /** Minimum number of replicas KEDA will scale the deployment down to */
  minReplicaCount?: Maybe<Scalars['Int']>;
  /** Kind of Message Queue Trigger to be created, by default its fission */
  mqtkind?: Maybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
  /** The period to check each trigger source on every ScaledObject, and scale the deployment up or down accordingly */
  pollingInterval?: Maybe<Scalars['Int']>;
  /** Topic for message queue trigger to sent response from function. */
  respTopic?: Maybe<Scalars['String']>;
  /** Secret name */
  secret?: Maybe<Scalars['String']>;
  /** Subscribed topic */
  topic: Scalars['String'];
};

/** Package Think of these as function-level images. */
export type V1Package = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
  spec: V1PackageSpec;
  /** PackageStatus contains the build status of a package also the build log for examination. */
  status: V1PackageStatus;
};

/** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
export type V1PackageSpec = {
  /** BuildCommand is a custom build command that builder used to build the source archive. */
  buildcmd?: Maybe<Scalars['String']>;
  /** Archive contains or references a collection of sources or binary files. */
  deployment?: Maybe<V1Archive>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReference;
  /** Archive contains or references a collection of sources or binary files. */
  source?: Maybe<V1Archive>;
};

/** Archive contains or references a collection of sources or binary files. */
export type V1Archive = {
  /** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
  checksum?: Maybe<V1Checksum>;
  /** Literal contents of the package. Can be used for encoding packages below TODO (256 KB?) size. */
  literal?: Maybe<Scalars['String']>;
  /**
   * Type defines how the package is specified: literal or URL. Available value:
   *  - literal
   *  - url
   */
  type?: Maybe<Scalars['String']>;
  /** URL references a package. */
  url?: Maybe<Scalars['String']>;
};

/** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
export type V1Checksum = {
  sum?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** PackageStatus contains the build status of a package also the build log for examination. */
export type V1PackageStatus = {
  /** BuildLog stores build log during the compilation. */
  buildlog?: Maybe<Scalars['String']>;
  /** BuildStatus is the package build status. */
  buildstatus?: Maybe<Scalars['String']>;
  /** LastUpdateTimestamp will store the timestamp the package was last updated metav1.Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. https://github.com/kubernetes/apimachinery/blob/44bd77c24ef93cd3a5eb6fef64e514025d10d44e/pkg/apis/meta/v1/time.go#L26-L35 */
  lastUpdateTimestamp?: Maybe<Scalars['String']>;
};

/** TimeTrigger invokes functions based on given cron schedule. */
export type V1TimeTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
  spec: V1TimeTriggerSpec;
};

/** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
export type V1TimeTriggerSpec = {
  /** Cron schedule */
  cron: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
};

/** KubernetesWatchTrigger watches kubernetes resource events and invokes functions. */
export type V1KubernetesWatchTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
  spec: V1KubernetesWatchTriggerSpec;
};

/** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
export type V1KubernetesWatchTriggerSpec = {
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
  /** Resource labels */
  labelselector: Scalars['JSON'];
  namespace: Scalars['String'];
  /** Type of resource to watch (Pod, Service, etc.) */
  type: Scalars['String'];
};

export type Mutation = {
  /**
   * Create archive
   *
   * Equivalent to POST /proxy/storage/v1/archive
   */
  createArchives?: Maybe<Scalars['JSON']>;
  /**
   * Create canary config
   *
   * Equivalent to POST /v2/canaryconfigs
   */
  createCanaryConfigs?: Maybe<V1ObjectMeta>;
  /**
   * Create environment
   *
   * Equivalent to POST /v2/environments
   */
  createEnvironments?: Maybe<V1ObjectMeta>;
  /**
   * Create function
   *
   * Equivalent to POST /v2/functions
   */
  createFunctions?: Maybe<V1ObjectMeta>;
  /**
   * Create HTTP trigger
   *
   * Equivalent to POST /v2/triggers/http
   */
  createHttps?: Maybe<V1ObjectMeta>;
  /**
   * Create message queue trigger
   *
   * Equivalent to POST /v2/triggers/messagequeue
   */
  createMessagequeues?: Maybe<V1ObjectMeta>;
  /**
   * Create package
   *
   * Equivalent to POST /v2/packages
   */
  createPackages?: Maybe<V1ObjectMeta>;
  /**
   * Create time trigger
   *
   * Equivalent to POST /v2/triggers/time
   */
  createTimes?: Maybe<V1ObjectMeta>;
  /**
   * Create kubernetes watch
   *
   * Equivalent to POST /v2/watches
   */
  createWatches?: Maybe<V1ObjectMeta>;
  /**
   * Delete archive
   *
   * Equivalent to DELETE /proxy/storage/v1/archive
   */
  deleteArchives?: Maybe<Scalars['JSON']>;
  /**
   * Delete canary config
   *
   * Equivalent to DELETE /v2/canaryconfigs/{canaryConfig}
   */
  deleteCanaryConfig?: Maybe<Scalars['JSON']>;
  /**
   * Delete environment
   *
   * Equivalent to DELETE /v2/environments/{environment}
   */
  deleteEnvironment?: Maybe<Scalars['JSON']>;
  /**
   * Delete function
   *
   * Equivalent to DELETE /v2/functions/{function}
   */
  deleteFunction?: Maybe<Scalars['JSON']>;
  /**
   * Delete HTTP trigger
   *
   * Equivalent to DELETE /v2/triggers/http/{httpTrigger}
   */
  deleteHttp?: Maybe<Scalars['JSON']>;
  /**
   * Delete message queue trigger
   *
   * Equivalent to DELETE /v2/triggers/messagequeue/{mqTrigger}
   */
  deleteMessagequeue?: Maybe<Scalars['JSON']>;
  /**
   * Delete package
   *
   * Equivalent to DELETE /v2/packages/{package}
   */
  deletePackage?: Maybe<Scalars['JSON']>;
  /**
   * Delete time trigger
   *
   * Equivalent to DELETE /v2/triggers/time/{timeTrigger}
   */
  deleteTime?: Maybe<Scalars['JSON']>;
  /**
   * Delete kubernetes watch
   *
   * Equivalent to DELETE /v2/watches/{watch}
   */
  deleteWatch?: Maybe<Scalars['JSON']>;
  /**
   * Update canary config
   *
   * Equivalent to PUT /v2/canaryconfigs/{canaryConfig}
   */
  updateCanaryConfig?: Maybe<V1ObjectMeta>;
  /**
   * Update environment
   *
   * Equivalent to PUT /v2/environments/{environment}
   */
  updateEnvironment?: Maybe<V1ObjectMeta>;
  /**
   * Update function
   *
   * Equivalent to PUT /v2/functions/{function}
   */
  updateFunction?: Maybe<V1ObjectMeta>;
  /**
   * Update HTTP trigger
   *
   * Equivalent to PUT /v2/triggers/http/{httpTrigger}
   */
  updateHttp?: Maybe<V1ObjectMeta>;
  /**
   * Update message queue trigger
   *
   * Equivalent to PUT /v2/triggers/messagequeue/{mqTrigger}
   */
  updateMessagequeue?: Maybe<V1ObjectMeta>;
  /**
   * Update package
   *
   * Equivalent to PUT /v2/packages/{package}
   */
  updatePackage?: Maybe<V1ObjectMeta>;
  /**
   * Update time trigger
   *
   * Equivalent to PUT /v2/triggers/time/{timeTrigger}
   */
  updateTime?: Maybe<V1ObjectMeta>;
  /**
   * Update kubernetes watch
   *
   * Equivalent to PUT /v2/watches/{watch}
   */
  updateWatch?: Maybe<V1ObjectMeta>;
};


export type MutationcreateCanaryConfigsArgs = {
  v1CanaryConfigInput: V1CanaryConfigInput;
};


export type MutationcreateEnvironmentsArgs = {
  v1EnvironmentInput: V1EnvironmentInput;
};


export type MutationcreateFunctionsArgs = {
  v1FunctionInput: V1FunctionInput;
};


export type MutationcreateHttpsArgs = {
  v1HTTPTriggerInput: V1HTTPTriggerInput;
};


export type MutationcreateMessagequeuesArgs = {
  v1MessageQueueTriggerInput: V1MessageQueueTriggerInput;
};


export type MutationcreatePackagesArgs = {
  v1PackageInput: V1PackageInput;
};


export type MutationcreateTimesArgs = {
  v1TimeTriggerInput: V1TimeTriggerInput;
};


export type MutationcreateWatchesArgs = {
  v1KubernetesWatchTriggerInput: V1KubernetesWatchTriggerInput;
};


export type MutationdeleteCanaryConfigArgs = {
  canaryConfig: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteEnvironmentArgs = {
  environment: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteFunctionArgs = {
  function: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteHttpArgs = {
  httpTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteMessagequeueArgs = {
  mqTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeletePackageArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  package: Scalars['String'];
};


export type MutationdeleteTimeArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  timeTrigger: Scalars['String'];
};


export type MutationdeleteWatchArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  watch: Scalars['String'];
};


export type MutationupdateCanaryConfigArgs = {
  canaryConfig: Scalars['String'];
  v1CanaryConfigInput: V1CanaryConfigInput;
};


export type MutationupdateEnvironmentArgs = {
  environment: Scalars['String'];
  v1EnvironmentInput: V1EnvironmentInput;
};


export type MutationupdateFunctionArgs = {
  function: Scalars['String'];
  v1FunctionInput: V1FunctionInput;
};


export type MutationupdateHttpArgs = {
  httpTrigger: Scalars['String'];
  v1HTTPTriggerInput: V1HTTPTriggerInput;
};


export type MutationupdateMessagequeueArgs = {
  mqTrigger: Scalars['String'];
  v1MessageQueueTriggerInput: V1MessageQueueTriggerInput;
};


export type MutationupdatePackageArgs = {
  package: Scalars['String'];
  v1PackageInput: V1PackageInput;
};


export type MutationupdateTimeArgs = {
  timeTrigger: Scalars['String'];
  v1TimeTriggerInput: V1TimeTriggerInput;
};


export type MutationupdateWatchArgs = {
  v1KubernetesWatchTriggerInput: V1KubernetesWatchTriggerInput;
  watch: Scalars['String'];
};

/** CanaryConfig is for canary deployment of two functions. */
export type V1CanaryConfigInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** CanaryConfigSpec defines the canary configuration spec */
  spec: V1CanaryConfigSpecInput;
  /** CanaryConfigStatus represents canary config status */
  status: V1CanaryConfigStatusInput;
};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type V1ObjectMetaInput = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
  annotations?: InputMaybe<Scalars['JSON']>;
  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  clusterName?: InputMaybe<Scalars['String']>;
  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
   *
   * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  creationTimestamp?: InputMaybe<Scalars['String']>;
  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  deletionGracePeriodSeconds?: InputMaybe<Scalars['Float']>;
  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
   *
   * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  deletionTimestamp?: InputMaybe<Scalars['String']>;
  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
  finalizers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
   *
   * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
   *
   * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
   */
  generateName?: InputMaybe<Scalars['String']>;
  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  generation?: InputMaybe<Scalars['Float']>;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  labels?: InputMaybe<Scalars['JSON']>;
  /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
  managedFields?: InputMaybe<Array<InputMaybe<V1ManagedFieldsEntryInput>>>;
  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name?: InputMaybe<Scalars['String']>;
  /**
   * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
   *
   * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   */
  namespace?: InputMaybe<Scalars['String']>;
  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  ownerReferences?: InputMaybe<Array<InputMaybe<V1OwnerReferenceInput>>>;
  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
   *
   * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: InputMaybe<Scalars['String']>;
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   *
   * DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
   */
  selfLink?: InputMaybe<Scalars['String']>;
  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
   *
   * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid?: InputMaybe<Scalars['String']>;
};

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export type V1ManagedFieldsEntryInput = {
  /** APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
  fieldsType?: InputMaybe<Scalars['String']>;
  /** FieldsV1 holds the first JSON version format as described in the "FieldsV1" type. */
  fieldsV1?: InputMaybe<Scalars['String']>;
  /** Manager is an identifier of the workflow managing these fields. */
  manager?: InputMaybe<Scalars['String']>;
  /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
  operation?: InputMaybe<Scalars['String']>;
  /** Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. */
  subresource?: InputMaybe<Scalars['String']>;
  /** Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply' */
  time?: InputMaybe<Scalars['String']>;
};

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export type V1OwnerReferenceInput = {
  /** API version of the referent. */
  apiVersion: Scalars['String'];
  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  blockOwnerDeletion?: InputMaybe<Scalars['Boolean']>;
  /** If true, this reference points to the managing controller. */
  controller?: InputMaybe<Scalars['Boolean']>;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind: Scalars['String'];
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
  /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  uid: Scalars['String'];
};

/** CanaryConfigSpec defines the canary configuration spec */
export type V1CanaryConfigSpecInput = {
  /** Weight increment interval, string representation of time.Duration, ex : 1m, 2h, 2d (default: "2m") */
  duration: Scalars['String'];
  failureType: Scalars['String'];
  /** Threshold in percentage beyond which the new version of the function is considered unstable */
  failurethreshold: Scalars['Int'];
  /** New version of the function */
  newfunction: Scalars['String'];
  /** Old stable version of the function */
  oldfunction: Scalars['String'];
  /** HTTP trigger that this config references */
  trigger: Scalars['String'];
  /** Weight increment step for function */
  weightincrement: Scalars['Int'];
};

/** CanaryConfigStatus represents canary config status */
export type V1CanaryConfigStatusInput = {
  status: Scalars['String'];
};

/** Environment is environment for building and running user functions. */
export type V1EnvironmentInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
  spec: V1EnvironmentSpecInput;
};

/** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
export type V1EnvironmentSpecInput = {
  /** Istio default blocks all egress traffic for safety. To enable accessibility of external network for builder/function pod, set to 'true'. (Optional) defaults to 'false' */
  allowAccessToExternalNetwork?: InputMaybe<Scalars['Boolean']>;
  /** (Optional) defaults to 'single'. Fission workflow uses 'infinite' to load multiple functions in one function pod. Available value: - single - infinite */
  allowedFunctionsPerContainer?: InputMaybe<Scalars['String']>;
  /** Builder is the setting for environment builder. */
  builder: V1BuilderInput;
  /** ImagePullSecret is the secret for Kubernetes to pull an image from a private registry. */
  imagepullsecret: Scalars['String'];
  /** KeepArchive is used by fetcher to determine if the extracted archive or unarchived file should be placed, which is then used by specialize handler. (This is mainly for the JVM environment because .jar is one kind of zip archive.) */
  keeparchive: Scalars['Boolean'];
  /** The initial pool size for environment */
  poolsize?: InputMaybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirementsInput;
  /** Runtime is the setting for environment runtime. */
  runtime: V1RuntimeInput;
  /** The grace time for pod to perform connection draining before termination. The unit is in seconds. (Optional) defaults to 360 seconds */
  terminationGracePeriod?: InputMaybe<Scalars['Float']>;
  /**
   * Version is the Environment API version
   *
   * Version "1" allows user to run code snippet in a file, and it's supported by most of the environments except tensorflow-serving.
   *
   * Version "2" supports downloading and compiling user function if source archive is not empty.
   *
   * Version "3" is almost the same with v2, but you're able to control the size of pre-warm pool of the environment.
   */
  version: Scalars['Int'];
};

/** Builder is the setting for environment builder. */
export type V1BuilderInput = {
  /** (Optional) Default build command to run for this build environment. */
  command?: InputMaybe<Scalars['String']>;
  /** A single application container that you want to run within a pod. */
  container?: InputMaybe<V1ContainerInput>;
  /** Image for containing the language compilation environment. */
  image?: InputMaybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
};

/** A single application container that you want to run within a pod. */
export type V1ContainerInput = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: InputMaybe<Array<InputMaybe<V1EnvVarInput>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: InputMaybe<Array<InputMaybe<V1EnvFromSourceInput>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
  image?: InputMaybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: InputMaybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: InputMaybe<V1LifecycleInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: InputMaybe<V1ProbeInput>;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  name: Scalars['String'];
  /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
  ports?: InputMaybe<Array<InputMaybe<V1ContainerPortInput>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: InputMaybe<V1ProbeInput>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: InputMaybe<V1ResourceRequirementsInput>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: InputMaybe<V1SecurityContextInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: InputMaybe<V1ProbeInput>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: InputMaybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: InputMaybe<Scalars['Boolean']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: InputMaybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: InputMaybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: InputMaybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: InputMaybe<Array<InputMaybe<V1VolumeDeviceInput>>>;
  /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
  volumeMounts?: InputMaybe<Array<InputMaybe<V1VolumeMountInput>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: InputMaybe<Scalars['String']>;
};

/** EnvVar represents an environment variable present in a Container. */
export type V1EnvVarInput = {
  /** Name of the environment variable. Must be a C_IDENTIFIER. */
  name: Scalars['String'];
  /** Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  value?: InputMaybe<Scalars['String']>;
  /** EnvVarSource represents a source for the value of an EnvVar. */
  valueFrom?: InputMaybe<V1EnvVarSourceInput>;
};

/** EnvVarSource represents a source for the value of an EnvVar. */
export type V1EnvVarSourceInput = {
  /** Selects a key from a ConfigMap. */
  configMapKeyRef?: InputMaybe<V1ConfigMapKeySelectorInput>;
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: InputMaybe<V1ObjectFieldSelectorInput>;
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: InputMaybe<V1ResourceFieldSelectorInput>;
  /** SecretKeySelector selects a key of a Secret. */
  secretKeyRef?: InputMaybe<V1SecretKeySelectorInput>;
};

/** Selects a key from a ConfigMap. */
export type V1ConfigMapKeySelectorInput = {
  /** The key to select. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its key must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export type V1ObjectFieldSelectorInput = {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Path of the field to select in the specified API version. */
  fieldPath: Scalars['String'];
};

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export type V1ResourceFieldSelectorInput = {
  /** Container name: required for volumes, optional for env vars */
  containerName?: InputMaybe<Scalars['String']>;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  divisor?: InputMaybe<Scalars['String']>;
  /** Required: resource to select */
  resource: Scalars['String'];
};

/** SecretKeySelector selects a key of a Secret. */
export type V1SecretKeySelectorInput = {
  /** The key of the secret to select from.  Must be a valid secret key. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** EnvFromSource represents the source of a set of ConfigMaps */
export type V1EnvFromSourceInput = {
  /**
   * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
   *
   * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  configMapRef?: InputMaybe<V1ConfigMapEnvSourceInput>;
  /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * SecretEnvSource selects a Secret to populate the environment variables with.
   *
   * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  secretRef?: InputMaybe<V1SecretEnvSourceInput>;
};

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export type V1ConfigMapEnvSourceInput = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export type V1SecretEnvSourceInput = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the Secret must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export type V1LifecycleInput = {
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  postStart?: InputMaybe<V1LifecycleHandlerInput>;
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  preStop?: InputMaybe<V1LifecycleHandlerInput>;
};

/** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
export type V1LifecycleHandlerInput = {
  /** ExecAction describes a "run in container" action. */
  exec?: InputMaybe<V1ExecActionInput>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: InputMaybe<V1HTTPGetActionInput>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: InputMaybe<V1TCPSocketActionInput>;
};

/** ExecAction describes a "run in container" action. */
export type V1ExecActionInput = {
  /** Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** HTTPGetAction describes an action based on HTTP Get requests. */
export type V1HTTPGetActionInput = {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  host?: InputMaybe<Scalars['String']>;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: InputMaybe<Array<InputMaybe<V1HTTPHeaderInput>>>;
  /** Path to access on the HTTP server. */
  path?: InputMaybe<Scalars['String']>;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
  /** Scheme to use for connecting to the host. Defaults to HTTP. */
  scheme?: InputMaybe<Scalars['String']>;
};

/** HTTPHeader describes a custom header to be used in HTTP probes */
export type V1HTTPHeaderInput = {
  /** The header field name */
  name: Scalars['String'];
  /** The header field value */
  value: Scalars['String'];
};

/** TCPSocketAction describes an action based on opening a socket */
export type V1TCPSocketActionInput = {
  /** Optional: Host name to connect to, defaults to the pod IP. */
  host?: InputMaybe<Scalars['String']>;
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
};

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export type V1ProbeInput = {
  /** ExecAction describes a "run in container" action. */
  exec?: InputMaybe<V1ExecActionInput>;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  failureThreshold?: InputMaybe<Scalars['Int']>;
  grpc?: InputMaybe<V1GRPCActionInput>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: InputMaybe<V1HTTPGetActionInput>;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  initialDelaySeconds?: InputMaybe<Scalars['Int']>;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
  periodSeconds?: InputMaybe<Scalars['Int']>;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
  successThreshold?: InputMaybe<Scalars['Int']>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: InputMaybe<V1TCPSocketActionInput>;
  /** Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset. */
  terminationGracePeriodSeconds?: InputMaybe<Scalars['Float']>;
  /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  timeoutSeconds?: InputMaybe<Scalars['Int']>;
};

export type V1GRPCActionInput = {
  /** Port number of the gRPC service. Number must be in the range 1 to 65535. */
  port: Scalars['Int'];
  /**
   * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * If this is not specified, the default behavior is defined by gRPC.
   */
  service: Scalars['String'];
};

/** ContainerPort represents a network port in a single container. */
export type V1ContainerPortInput = {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  containerPort: Scalars['Int'];
  /** What host IP to bind the external port to. */
  hostIP?: InputMaybe<Scalars['String']>;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  hostPort?: InputMaybe<Scalars['Int']>;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
  name?: InputMaybe<Scalars['String']>;
  /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
  protocol?: InputMaybe<Scalars['String']>;
};

/** ResourceRequirements describes the compute resource requirements. */
export type V1ResourceRequirementsInput = {
  /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  limits?: InputMaybe<Scalars['JSON']>;
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  requests?: InputMaybe<Scalars['JSON']>;
};

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export type V1SecurityContextInput = {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
  allowPrivilegeEscalation?: InputMaybe<Scalars['Boolean']>;
  /** Adds and removes POSIX capabilities from running containers. */
  capabilities?: InputMaybe<V1CapabilitiesInput>;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
  privileged?: InputMaybe<Scalars['Boolean']>;
  /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
  procMount?: InputMaybe<Scalars['String']>;
  /** Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
  readOnlyRootFilesystem?: InputMaybe<Scalars['Boolean']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: InputMaybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: InputMaybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: InputMaybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: InputMaybe<V1SELinuxOptionsInput>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: InputMaybe<V1SeccompProfileInput>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: InputMaybe<V1WindowsSecurityContextOptionsInput>;
};

/** Adds and removes POSIX capabilities from running containers. */
export type V1CapabilitiesInput = {
  /** Added capabilities */
  add?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Removed capabilities */
  drop?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** SELinuxOptions are the labels to be applied to the container */
export type V1SELinuxOptionsInput = {
  /** Level is SELinux level label that applies to the container. */
  level?: InputMaybe<Scalars['String']>;
  /** Role is a SELinux role label that applies to the container. */
  role?: InputMaybe<Scalars['String']>;
  /** Type is a SELinux type label that applies to the container. */
  type?: InputMaybe<Scalars['String']>;
  /** User is a SELinux user label that applies to the container. */
  user?: InputMaybe<Scalars['String']>;
};

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export type V1SeccompProfileInput = {
  /** localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
  localhostProfile?: InputMaybe<Scalars['String']>;
  /**
   * type indicates which kind of seccomp profile will be applied. Valid options are:
   *
   * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
   */
  type: Scalars['String'];
};

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export type V1WindowsSecurityContextOptionsInput = {
  /** GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
  gmsaCredentialSpec?: InputMaybe<Scalars['String']>;
  /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
  gmsaCredentialSpecName?: InputMaybe<Scalars['String']>;
  /** HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
  hostProcess?: InputMaybe<Scalars['Boolean']>;
  /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsUserName?: InputMaybe<Scalars['String']>;
};

/** volumeDevice describes a mapping of a raw block device within a container. */
export type V1VolumeDeviceInput = {
  /** devicePath is the path inside of the container that the device will be mapped to. */
  devicePath: Scalars['String'];
  /** name must match the name of a persistentVolumeClaim in the pod */
  name: Scalars['String'];
};

/** VolumeMount describes a mounting of a Volume within a container. */
export type V1VolumeMountInput = {
  /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
  mountPath: Scalars['String'];
  /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
  mountPropagation?: InputMaybe<Scalars['String']>;
  /** This must match the Name of a Volume. */
  name: Scalars['String'];
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  subPath?: InputMaybe<Scalars['String']>;
  /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
  subPathExpr?: InputMaybe<Scalars['String']>;
};

/** PodSpec is a description of a pod. */
export type V1PodSpecInput = {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  activeDeadlineSeconds?: InputMaybe<Scalars['Float']>;
  /** Affinity is a group of affinity scheduling rules. */
  affinity?: InputMaybe<V1AffinityInput>;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  automountServiceAccountToken?: InputMaybe<Scalars['Boolean']>;
  /** List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
  containers: Array<InputMaybe<V1ContainerInput>>;
  /** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
  dnsConfig?: InputMaybe<V1PodDNSConfigInput>;
  /** Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
  dnsPolicy?: InputMaybe<Scalars['String']>;
  /** EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
  enableServiceLinks?: InputMaybe<Scalars['Boolean']>;
  /** List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is beta-level and available on clusters that haven't disabled the EphemeralContainers feature gate. */
  ephemeralContainers?: InputMaybe<Array<InputMaybe<V1EphemeralContainerInput>>>;
  /** HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
  hostAliases?: InputMaybe<Array<InputMaybe<V1HostAliasInput>>>;
  /** Use the host's ipc namespace. Optional: Default to false. */
  hostIPC?: InputMaybe<Scalars['Boolean']>;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
  hostNetwork?: InputMaybe<Scalars['Boolean']>;
  /** Use the host's pid namespace. Optional: Default to false. */
  hostPID?: InputMaybe<Scalars['Boolean']>;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  hostname?: InputMaybe<Scalars['String']>;
  /** ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
  imagePullSecrets?: InputMaybe<Array<InputMaybe<V1LocalObjectReferenceInput>>>;
  /** List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
  initContainers?: InputMaybe<Array<InputMaybe<V1ContainerInput>>>;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  nodeName?: InputMaybe<Scalars['String']>;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  nodeSelector?: InputMaybe<Scalars['JSON']>;
  /** PodOS defines the OS parameters of a pod. */
  os?: InputMaybe<V1PodOSInput>;
  /** Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md This field is beta-level as of Kubernetes v1.18, and is only honored by servers that enable the PodOverhead feature. */
  overhead?: InputMaybe<Scalars['JSON']>;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
  preemptionPolicy?: InputMaybe<Scalars['String']>;
  /** The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. */
  priority?: InputMaybe<Scalars['Int']>;
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  priorityClassName?: InputMaybe<Scalars['String']>;
  /** If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
  readinessGates?: InputMaybe<Array<InputMaybe<V1PodReadinessGateInput>>>;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
  restartPolicy?: InputMaybe<Scalars['String']>;
  /** RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class This is a beta feature as of Kubernetes v1.14. */
  runtimeClassName?: InputMaybe<Scalars['String']>;
  /** If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
  schedulerName?: InputMaybe<Scalars['String']>;
  /** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
  securityContext?: InputMaybe<V1PodSecurityContextInput>;
  /** DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
  serviceAccount?: InputMaybe<Scalars['String']>;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  serviceAccountName?: InputMaybe<Scalars['String']>;
  /** If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
  setHostnameAsFQDN?: InputMaybe<Scalars['Boolean']>;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
  shareProcessNamespace?: InputMaybe<Scalars['Boolean']>;
  /** If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
  subdomain?: InputMaybe<Scalars['String']>;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. */
  terminationGracePeriodSeconds?: InputMaybe<Scalars['Float']>;
  /** If specified, the pod's tolerations. */
  tolerations?: InputMaybe<Array<InputMaybe<V1TolerationInput>>>;
  /** TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
  topologySpreadConstraints?: InputMaybe<Array<InputMaybe<V1TopologySpreadConstraintInput>>>;
  /** List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
  volumes?: InputMaybe<Array<InputMaybe<V1VolumeInput>>>;
};

/** Affinity is a group of affinity scheduling rules. */
export type V1AffinityInput = {
  /** Node affinity is a group of node affinity scheduling rules. */
  nodeAffinity?: InputMaybe<V1NodeAffinityInput>;
  /** Pod affinity is a group of inter pod affinity scheduling rules. */
  podAffinity?: InputMaybe<V1PodAffinityInput>;
  /** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
  podAntiAffinity?: InputMaybe<V1PodAntiAffinityInput>;
};

/** Node affinity is a group of node affinity scheduling rules. */
export type V1NodeAffinityInput = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1PreferredSchedulingTermInput>>>;
  /** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
  requiredDuringSchedulingIgnoredDuringExecution?: InputMaybe<V1NodeSelectorInput>;
};

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export type V1PreferredSchedulingTermInput = {
  /** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
  preference: V1NodeSelectorTermInput;
  /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export type V1NodeSelectorTermInput = {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: InputMaybe<Array<InputMaybe<V1NodeSelectorRequirementInput>>>;
  /** A list of node selector requirements by node's fields. */
  matchFields?: InputMaybe<Array<InputMaybe<V1NodeSelectorRequirementInput>>>;
};

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1NodeSelectorRequirementInput = {
  /** The label key that the selector applies to. */
  key: Scalars['String'];
  /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  operator: Scalars['String'];
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export type V1NodeSelectorInput = {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: Array<InputMaybe<V1NodeSelectorTermInput>>;
};

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export type V1PodAffinityInput = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1WeightedPodAffinityTermInput>>>;
  /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1PodAffinityTermInput>>>;
};

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export type V1WeightedPodAffinityTermInput = {
  /** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
  podAffinityTerm: V1PodAffinityTermInput;
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export type V1PodAffinityTermInput = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: InputMaybe<V1LabelSelectorInput>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  namespaceSelector?: InputMaybe<V1LabelSelectorInput>;
  /** namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace" */
  namespaces?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
  topologyKey: Scalars['String'];
};

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export type V1LabelSelectorInput = {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  matchExpressions?: InputMaybe<Array<InputMaybe<V1LabelSelectorRequirementInput>>>;
  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  matchLabels?: InputMaybe<Scalars['JSON']>;
};

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1LabelSelectorRequirementInput = {
  /** key is the label key that the selector applies to. */
  key: Scalars['String'];
  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  operator: Scalars['String'];
  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export type V1PodAntiAffinityInput = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1WeightedPodAffinityTermInput>>>;
  /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1PodAffinityTermInput>>>;
};

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export type V1PodDNSConfigInput = {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  nameservers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
  options?: InputMaybe<Array<InputMaybe<V1PodDNSConfigOptionInput>>>;
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  searches?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export type V1PodDNSConfigOptionInput = {
  /** Required. */
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
 *
 * To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
 *
 * This is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.
 */
export type V1EphemeralContainerInput = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: InputMaybe<Array<InputMaybe<V1EnvVarInput>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: InputMaybe<Array<InputMaybe<V1EnvFromSourceInput>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images */
  image?: InputMaybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: InputMaybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: InputMaybe<V1LifecycleInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: InputMaybe<V1ProbeInput>;
  /** Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers. */
  name: Scalars['String'];
  /** Ports are not allowed for ephemeral containers. */
  ports?: InputMaybe<Array<InputMaybe<V1ContainerPortInput>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: InputMaybe<V1ProbeInput>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: InputMaybe<V1ResourceRequirementsInput>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: InputMaybe<V1SecurityContextInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: InputMaybe<V1ProbeInput>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: InputMaybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: InputMaybe<Scalars['Boolean']>;
  /**
   * If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
   *
   * The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
   */
  targetContainerName?: InputMaybe<Scalars['String']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: InputMaybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: InputMaybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: InputMaybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: InputMaybe<Array<InputMaybe<V1VolumeDeviceInput>>>;
  /** Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated. */
  volumeMounts?: InputMaybe<Array<InputMaybe<V1VolumeMountInput>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: InputMaybe<Scalars['String']>;
};

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export type V1HostAliasInput = {
  /** Hostnames for the above IP address. */
  hostnames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** IP address of the host file entry. */
  ip?: InputMaybe<Scalars['String']>;
};

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export type V1LocalObjectReferenceInput = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
};

/** PodOS defines the OS parameters of a pod. */
export type V1PodOSInput = {
  /** Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null */
  name: Scalars['String'];
};

/** PodReadinessGate contains the reference to a pod condition */
export type V1PodReadinessGateInput = {
  /** ConditionType refers to a condition in the pod's condition list with matching type. */
  conditionType: Scalars['String'];
};

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export type V1PodSecurityContextInput = {
  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
   *
   * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw
   */
  fsGroup?: InputMaybe<Scalars['Float']>;
  /** fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows. */
  fsGroupChangePolicy?: InputMaybe<Scalars['String']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: InputMaybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: InputMaybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: InputMaybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: InputMaybe<V1SELinuxOptionsInput>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: InputMaybe<V1SeccompProfileInput>;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows. */
  supplementalGroups?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows. */
  sysctls?: InputMaybe<Array<InputMaybe<V1SysctlInput>>>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: InputMaybe<V1WindowsSecurityContextOptionsInput>;
};

/** Sysctl defines a kernel parameter to be set */
export type V1SysctlInput = {
  /** Name of a property to set */
  name: Scalars['String'];
  /** Value of a property to set */
  value: Scalars['String'];
};

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export type V1TolerationInput = {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  effect?: InputMaybe<Scalars['String']>;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  key?: InputMaybe<Scalars['String']>;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  operator?: InputMaybe<Scalars['String']>;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  tolerationSeconds?: InputMaybe<Scalars['Float']>;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  value?: InputMaybe<Scalars['String']>;
};

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export type V1TopologySpreadConstraintInput = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: InputMaybe<V1LabelSelectorInput>;
  /** MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: */
  maxSkew: Scalars['Int'];
  /** TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field. */
  topologyKey: Scalars['String'];
  /**
   * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,
   *   but giving higher precedence to topologies that would help reduce the
   *   skew.
   * A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1:
   */
  whenUnsatisfiable: Scalars['String'];
};

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export type V1VolumeInput = {
  /**
   * Represents a Persistent Disk resource in AWS.
   *
   * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
   */
  awsElasticBlockStore?: InputMaybe<V1AWSElasticBlockStoreVolumeSourceInput>;
  /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
  azureDisk?: InputMaybe<V1AzureDiskVolumeSourceInput>;
  /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
  azureFile?: InputMaybe<V1AzureFileVolumeSourceInput>;
  /** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
  cephfs?: InputMaybe<V1CephFSVolumeSourceInput>;
  /** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
  cinder?: InputMaybe<V1CinderVolumeSourceInput>;
  /**
   * Adapts a ConfigMap into a volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
   */
  configMap?: InputMaybe<V1ConfigMapVolumeSourceInput>;
  /** Represents a source location of a volume to mount, managed by an external CSI driver */
  csi?: InputMaybe<V1CSIVolumeSourceInput>;
  /** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
  downwardAPI?: InputMaybe<V1DownwardAPIVolumeSourceInput>;
  /** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
  emptyDir?: InputMaybe<V1EmptyDirVolumeSourceInput>;
  /** Represents an ephemeral volume that is handled by a normal storage driver. */
  ephemeral?: InputMaybe<V1EphemeralVolumeSourceInput>;
  /** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
  fc?: InputMaybe<V1FCVolumeSourceInput>;
  /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
  flexVolume?: InputMaybe<V1FlexVolumeSourceInput>;
  /** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
  flocker?: InputMaybe<V1FlockerVolumeSourceInput>;
  /**
   * Represents a Persistent Disk resource in Google Compute Engine.
   *
   * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
   */
  gcePersistentDisk?: InputMaybe<V1GCEPersistentDiskVolumeSourceInput>;
  /**
   * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
   *
   * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
   */
  gitRepo?: InputMaybe<V1GitRepoVolumeSourceInput>;
  /** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
  glusterfs?: InputMaybe<V1GlusterfsVolumeSourceInput>;
  /** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
  hostPath?: InputMaybe<V1HostPathVolumeSourceInput>;
  /** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
  iscsi?: InputMaybe<V1ISCSIVolumeSourceInput>;
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name: Scalars['String'];
  /** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
  nfs?: InputMaybe<V1NFSVolumeSourceInput>;
  /** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
  persistentVolumeClaim?: InputMaybe<V1PersistentVolumeClaimVolumeSourceInput>;
  /** Represents a Photon Controller persistent disk resource. */
  photonPersistentDisk?: InputMaybe<V1PhotonPersistentDiskVolumeSourceInput>;
  /** PortworxVolumeSource represents a Portworx volume resource. */
  portworxVolume?: InputMaybe<V1PortworxVolumeSourceInput>;
  /** Represents a projected volume source */
  projected?: InputMaybe<V1ProjectedVolumeSourceInput>;
  /** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
  quobyte?: InputMaybe<V1QuobyteVolumeSourceInput>;
  /** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
  rbd?: InputMaybe<V1RBDVolumeSourceInput>;
  /** ScaleIOVolumeSource represents a persistent ScaleIO volume */
  scaleIO?: InputMaybe<V1ScaleIOVolumeSourceInput>;
  /**
   * Adapts a Secret into a volume.
   *
   * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
   */
  secret?: InputMaybe<V1SecretVolumeSourceInput>;
  /** Represents a StorageOS persistent volume resource. */
  storageos?: InputMaybe<V1StorageOSVolumeSourceInput>;
  /** Represents a vSphere volume resource. */
  vsphereVolume?: InputMaybe<V1VsphereVirtualDiskVolumeSourceInput>;
};

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export type V1AWSElasticBlockStoreVolumeSourceInput = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  fsType?: InputMaybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  partition?: InputMaybe<Scalars['Int']>;
  /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  volumeID: Scalars['String'];
};

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export type V1AzureDiskVolumeSourceInput = {
  /** Host Caching mode: None, Read Only, Read Write. */
  cachingMode?: InputMaybe<Scalars['String']>;
  /** The Name of the data disk in the blob storage */
  diskName: Scalars['String'];
  /** The URI the data disk in the blob storage */
  diskURI: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
  kind?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type V1AzureFileVolumeSourceInput = {
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** the name of secret that contains Azure Storage Account Name and Key */
  secretName: Scalars['String'];
  /** Share Name */
  shareName: Scalars['String'];
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type V1CephFSVolumeSourceInput = {
  /** Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  monitors: Array<InputMaybe<Scalars['String']>>;
  /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
  path?: InputMaybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  secretFile?: InputMaybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  user?: InputMaybe<Scalars['String']>;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type V1CinderVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  fsType?: InputMaybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  volumeID: Scalars['String'];
};

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export type V1ConfigMapVolumeSourceInput = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** Maps a string key to a path within a volume. */
export type V1KeyToPathInput = {
  /** The key to project. */
  key: Scalars['String'];
  /** Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: InputMaybe<Scalars['Int']>;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  path: Scalars['String'];
};

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export type V1CSIVolumeSourceInput = {
  /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
  fsType?: InputMaybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  nodePublishSecretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** Specifies a read-only configuration for the volume. Defaults to false (read/write). */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
  volumeAttributes?: InputMaybe<Scalars['JSON']>;
};

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export type V1DownwardAPIVolumeSourceInput = {
  /** Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** Items is a list of downward API volume file */
  items?: InputMaybe<Array<InputMaybe<V1DownwardAPIVolumeFileInput>>>;
};

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export type V1DownwardAPIVolumeFileInput = {
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: InputMaybe<V1ObjectFieldSelectorInput>;
  /** Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: InputMaybe<Scalars['Int']>;
  /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  path: Scalars['String'];
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: InputMaybe<V1ResourceFieldSelectorInput>;
};

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export type V1EmptyDirVolumeSourceInput = {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  medium?: InputMaybe<Scalars['String']>;
  /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  sizeLimit?: InputMaybe<Scalars['String']>;
};

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export type V1EphemeralVolumeSourceInput = {
  /** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
  volumeClaimTemplate?: InputMaybe<V1PersistentVolumeClaimTemplateInput>;
};

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export type V1PersistentVolumeClaimTemplateInput = {
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata?: InputMaybe<V1ObjectMetaInput>;
  /** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
  spec: V1PersistentVolumeClaimSpecInput;
};

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export type V1PersistentVolumeClaimSpecInput = {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  accessModes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSource?: InputMaybe<V1TypedLocalObjectReferenceInput>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSourceRef?: InputMaybe<V1TypedLocalObjectReferenceInput>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: InputMaybe<V1ResourceRequirementsInput>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: InputMaybe<V1LabelSelectorInput>;
  /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
  storageClassName?: InputMaybe<Scalars['String']>;
  /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
  volumeMode?: InputMaybe<Scalars['String']>;
  /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
  volumeName?: InputMaybe<Scalars['String']>;
};

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export type V1TypedLocalObjectReferenceInput = {
  /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
  apiGroup: Scalars['String'];
  /** Kind is the type of resource being referenced */
  kind: Scalars['String'];
  /** Name is the name of resource being referenced */
  name: Scalars['String'];
};

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export type V1FCVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Optional: FC target lun number */
  lun?: InputMaybe<Scalars['Int']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Optional: FC target worldwide names (WWNs) */
  targetWWNs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
  wwids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export type V1FlexVolumeSourceInput = {
  /** Driver is the name of the driver to use for this volume. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Optional: Extra command options if any. */
  options?: InputMaybe<Scalars['JSON']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
};

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export type V1FlockerVolumeSourceInput = {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  datasetName?: InputMaybe<Scalars['String']>;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  datasetUUID?: InputMaybe<Scalars['String']>;
};

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export type V1GCEPersistentDiskVolumeSourceInput = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  fsType?: InputMaybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  partition?: InputMaybe<Scalars['Int']>;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  pdName: Scalars['String'];
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export type V1GitRepoVolumeSourceInput = {
  /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  directory?: InputMaybe<Scalars['String']>;
  /** Repository URL */
  repository: Scalars['String'];
  /** Commit hash for the specified revision. */
  revision?: InputMaybe<Scalars['String']>;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type V1GlusterfsVolumeSourceInput = {
  /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  endpoints: Scalars['String'];
  /** Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  path: Scalars['String'];
  /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export type V1HostPathVolumeSourceInput = {
  /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  path: Scalars['String'];
  /** Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  type?: InputMaybe<Scalars['String']>;
};

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type V1ISCSIVolumeSourceInput = {
  /** whether support iSCSI Discovery CHAP authentication */
  chapAuthDiscovery?: InputMaybe<Scalars['Boolean']>;
  /** whether support iSCSI Session CHAP authentication */
  chapAuthSession?: InputMaybe<Scalars['Boolean']>;
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
  fsType?: InputMaybe<Scalars['String']>;
  /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
  initiatorName?: InputMaybe<Scalars['String']>;
  /** Target iSCSI Qualified Name. */
  iqn: Scalars['String'];
  /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  iscsiInterface?: InputMaybe<Scalars['String']>;
  /** iSCSI Target Lun number. */
  lun: Scalars['Int'];
  /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  portals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  targetPortal: Scalars['String'];
};

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export type V1NFSVolumeSourceInput = {
  /** Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  path: Scalars['String'];
  /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  server: Scalars['String'];
};

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export type V1PersistentVolumeClaimVolumeSourceInput = {
  /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  claimName: Scalars['String'];
  /** Will force the ReadOnly setting in VolumeMounts. Default false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a Photon Controller persistent disk resource. */
export type V1PhotonPersistentDiskVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** ID that identifies Photon Controller persistent disk */
  pdID: Scalars['String'];
};

/** PortworxVolumeSource represents a Portworx volume resource. */
export type V1PortworxVolumeSourceInput = {
  /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** VolumeID uniquely identifies a Portworx volume */
  volumeID: Scalars['String'];
};

/** Represents a projected volume source */
export type V1ProjectedVolumeSourceInput = {
  /** Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** list of volume projections */
  sources: Array<InputMaybe<V1VolumeProjectionInput>>;
};

/** Projection that may be projected along with other supported volume types */
export type V1VolumeProjectionInput = {
  /**
   * Adapts a ConfigMap into a projected volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
   */
  configMap?: InputMaybe<V1ConfigMapProjectionInput>;
  /** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
  downwardAPI?: InputMaybe<V1DownwardAPIProjectionInput>;
  /**
   * Adapts a secret into a projected volume.
   *
   * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
   */
  secret?: InputMaybe<V1SecretProjectionInput>;
  /** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
  serviceAccountToken?: InputMaybe<V1ServiceAccountTokenProjectionInput>;
};

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export type V1ConfigMapProjectionInput = {
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export type V1DownwardAPIProjectionInput = {
  /** Items is a list of DownwardAPIVolume file */
  items?: InputMaybe<Array<InputMaybe<V1DownwardAPIVolumeFileInput>>>;
};

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export type V1SecretProjectionInput = {
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export type V1ServiceAccountTokenProjectionInput = {
  /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
  audience?: InputMaybe<Scalars['String']>;
  /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
  expirationSeconds?: InputMaybe<Scalars['Float']>;
  /** Path is the path relative to the mount point of the file to project the token into. */
  path: Scalars['String'];
};

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export type V1QuobyteVolumeSourceInput = {
  /** Group to map volume access to Default is no group */
  group?: InputMaybe<Scalars['String']>;
  /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  registry: Scalars['String'];
  /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
  tenant?: InputMaybe<Scalars['String']>;
  /** User to map volume access to Defaults to serivceaccount user */
  user?: InputMaybe<Scalars['String']>;
  /** Volume is a string that references an already created Quobyte volume by name. */
  volume: Scalars['String'];
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type V1RBDVolumeSourceInput = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
  fsType?: InputMaybe<Scalars['String']>;
  /** The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  image: Scalars['String'];
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  keyring?: InputMaybe<Scalars['String']>;
  /** A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  monitors: Array<InputMaybe<Scalars['String']>>;
  /** The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  pool?: InputMaybe<Scalars['String']>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  user?: InputMaybe<Scalars['String']>;
};

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export type V1ScaleIOVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
  fsType?: InputMaybe<Scalars['String']>;
  /** The host address of the ScaleIO API Gateway. */
  gateway: Scalars['String'];
  /** The name of the ScaleIO Protection Domain for the configured storage. */
  protectionDomain?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef: V1LocalObjectReferenceInput;
  /** Flag to enable/disable SSL communication with Gateway, default false */
  sslEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
  storageMode?: InputMaybe<Scalars['String']>;
  /** The ScaleIO Storage Pool associated with the protection domain. */
  storagePool?: InputMaybe<Scalars['String']>;
  /** The name of the storage system as configured in ScaleIO. */
  system: Scalars['String'];
  /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
  volumeName?: InputMaybe<Scalars['String']>;
};

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export type V1SecretVolumeSourceInput = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Specify whether the Secret or its keys must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
  /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  secretName?: InputMaybe<Scalars['String']>;
};

/** Represents a StorageOS persistent volume resource. */
export type V1StorageOSVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
  volumeName?: InputMaybe<Scalars['String']>;
  /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
  volumeNamespace?: InputMaybe<Scalars['String']>;
};

/** Represents a vSphere volume resource. */
export type V1VsphereVirtualDiskVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
  storagePolicyID?: InputMaybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile name. */
  storagePolicyName?: InputMaybe<Scalars['String']>;
  /** Path that identifies vSphere volume vmdk */
  volumePath: Scalars['String'];
};

/** Runtime is the setting for environment runtime. */
export type V1RuntimeInput = {
  /** A single application container that you want to run within a pod. */
  container?: InputMaybe<V1ContainerInput>;
  /** Image for containing the language runtime. */
  image: Scalars['String'];
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
};

/** Function is function runs within environment runtime with given package and secrets/configmaps. */
export type V1FunctionInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** FunctionSpec describes the contents of the function. */
  spec: V1FunctionSpecInput;
};

/** FunctionSpec describes the contents of the function. */
export type V1FunctionSpecInput = {
  /** Maximum number of pods to be specialized which will serve requests This is optional. If not specified default value will be taken as 500 */
  concurrency?: InputMaybe<Scalars['Int']>;
  /** Reference to a list of configmaps. */
  configmaps?: InputMaybe<Array<InputMaybe<V1ConfigMapReferenceInput>>>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReferenceInput;
  /** FunctionTimeout provides a maximum amount of duration within which a request for a particular function execution should be complete. This is optional. If not specified default value will be taken as 60s */
  functionTimeout?: InputMaybe<Scalars['Int']>;
  /** IdleTimeout specifies the length of time that a function is idle before the function pod(s) are eligible for deletion. If no traffic to the function is detected within the idle timeout, the executor will then recycle the function pod(s) to release resources. */
  idletimeout?: InputMaybe<Scalars['Int']>;
  /**
   * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
   *
   * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
   */
  invokeStrategy: V1InvokeStrategyInput;
  /** OnceOnly specifies if specialized pod will serve exactly one request in its lifetime and would be garbage collected after serving that one request This is optional. If not specified default value will be taken as false */
  onceOnly?: InputMaybe<Scalars['Boolean']>;
  /** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
  package: V1FunctionPackageRefInput;
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
  /** RequestsPerPod indicates the maximum number of concurrent requests that can be served by a specialized pod This is optional. If not specified default value will be taken as 1 */
  requestsPerPod?: InputMaybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirementsInput;
  /** Reference to a list of secrets. */
  secrets?: InputMaybe<Array<InputMaybe<V1SecretReferenceInput>>>;
};

/** ConfigMapReference is a reference to a kubernetes configmap. */
export type V1ConfigMapReferenceInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** EnvironmentReference is a reference to an environment. */
export type V1EnvironmentReferenceInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/**
 * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
 *
 * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
 */
export type V1InvokeStrategyInput = {
  /**
   * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
   *
   * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
   *
   * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
   */
  executionStrategy: V1ExecutionStrategyInput;
  /** StrategyType is the strategy type of function. Now it only supports 'execution'. */
  strategyType: Scalars['String'];
};

/**
 * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
 *
 * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
 *
 * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
 */
export type V1ExecutionStrategyInput = {
  /**
   * ExecutorType is the executor type of function used. Defaults to "poolmgr".
   *
   * Available value:
   *  - poolmgr
   *  - newdeploy
   *  - container
   */
  executorType: Scalars['String'];
  /** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
  hpaBehavior?: InputMaybe<V2beta2HorizontalPodAutoscalerBehaviorInput>;
  /** hpaMetrics is the list of metrics used to determine the desired replica count of the Deployment created for the function. Applicable for executor type newdeploy and container. */
  hpaMetrics?: InputMaybe<Array<InputMaybe<V2beta2MetricSpecInput>>>;
  /** This is only for newdeploy to set up maximum replicas of deployment. */
  maxScale: Scalars['Int'];
  /** This is only for newdeploy to set up minimum replicas of deployment. */
  minScale: Scalars['Int'];
  /** This is the timeout setting for executor to wait for pod specialization. */
  specializationTimeout: Scalars['Int'];
  /** Deprecated: use hpaMetrics instead. This is only for executor type newdeploy and container to set up target CPU utilization of HPA. Applicable for executor type newdeploy and container. */
  targetCPUPercent: Scalars['Int'];
};

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export type V2beta2HorizontalPodAutoscalerBehaviorInput = {
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleDown?: InputMaybe<V2beta2HPAScalingRulesInput>;
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleUp?: InputMaybe<V2beta2HPAScalingRulesInput>;
};

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export type V2beta2HPAScalingRulesInput = {
  /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
  policies?: InputMaybe<Array<InputMaybe<V2beta2HPAScalingPolicyInput>>>;
  /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
  selectPolicy?: InputMaybe<Scalars['String']>;
  /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
  stabilizationWindowSeconds?: InputMaybe<Scalars['Int']>;
};

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export type V2beta2HPAScalingPolicyInput = {
  /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
  periodSeconds: Scalars['Int'];
  /** Type is used to specify the scaling policy. */
  type: Scalars['String'];
  /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
  value: Scalars['Int'];
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type V2beta2MetricSpecInput = {
  /** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  containerResource?: InputMaybe<V2beta2ContainerResourceMetricSourceInput>;
  /** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  external?: InputMaybe<V2beta2ExternalMetricSourceInput>;
  /** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
  object?: InputMaybe<V2beta2ObjectMetricSourceInput>;
  /** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
  pods?: InputMaybe<V2beta2PodsMetricSourceInput>;
  /** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  resource?: InputMaybe<V2beta2ResourceMetricSourceInput>;
  /** type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
  type: Scalars['String'];
};

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ContainerResourceMetricSourceInput = {
  /** container is the name of the container in the pods of the scaling target */
  container: Scalars['String'];
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type V2beta2MetricTargetInput = {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  averageUtilization?: InputMaybe<Scalars['Int']>;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: InputMaybe<Scalars['String']>;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  type: Scalars['String'];
  /** value is the target value of the metric (as a quantity). */
  value?: InputMaybe<Scalars['String']>;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type V2beta2ExternalMetricSourceInput = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifierInput;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** MetricIdentifier defines the name and optionally selector for a metric */
export type V2beta2MetricIdentifierInput = {
  /** name is the name of the given metric */
  name: Scalars['String'];
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: InputMaybe<V1LabelSelectorInput>;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta2ObjectMetricSourceInput = {
  /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
  describedObject: V2beta2CrossVersionObjectReferenceInput;
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifierInput;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V2beta2CrossVersionObjectReferenceInput = {
  /** API version of the referent */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
  kind: Scalars['String'];
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type V2beta2PodsMetricSourceInput = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifierInput;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ResourceMetricSourceInput = {
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
export type V1FunctionPackageRefInput = {
  /**
   * FunctionName specifies a specific function within the package. This allows functions to share packages, by having different functions within the same package.
   *
   * Fission itself does not interpret this path. It is passed verbatim to build and runtime environments.
   *
   * This is optional: if unspecified, the environment has a default name.
   */
  functionName?: InputMaybe<Scalars['String']>;
  /** PackageRef is a reference to the package. */
  packageref: V1PackageRefInput;
};

/** PackageRef is a reference to the package. */
export type V1PackageRefInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
  /** Including resource version in the reference forces the function to be updated on package update, making it possible to cache the function based on its metadata. */
  resourceversion?: InputMaybe<Scalars['String']>;
};

/** SecretReference is a reference to a kubernetes secret. */
export type V1SecretReferenceInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** HTTPTrigger is the trigger invokes user functions when receiving HTTP requests. */
export type V1HTTPTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
  spec: V1HTTPTriggerSpecInput;
};

/** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
export type V1HTTPTriggerSpecInput = {
  /** If CreateIngress is true, router will create an ingress definition. */
  createingress: Scalars['Boolean'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
  /** Deprecated: the original idea of this field is not for setting Ingress. Since we have IngressConfig now, remove Host after couple releases. */
  host: Scalars['String'];
  /** IngressConfig is for router to set up Ingress. */
  ingressconfig: V1IngressConfigInput;
  /** When function is exposed with Prefix based path, keepPrefix decides whether to keep or trim prefix in URL while invoking function. */
  keepPrefix?: InputMaybe<Scalars['Boolean']>;
  /** Use Methods instead of Method. This field is going to be deprecated in a future release HTTP method to access a function. */
  method: Scalars['String'];
  /** HTTP methods to access a function */
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Prefix with which functions are exposed. NOTE: Prefix takes precedence over URL/RelativeURL. Note that it does not treat slashes specially ("/foobar/" will be matched by the prefix "/foobar"). */
  prefix?: InputMaybe<Scalars['String']>;
  /** RelativeURL is the exposed URL for external client to access a function with. */
  relativeurl: Scalars['String'];
};

/** FunctionReference refers to a function */
export type V1FunctionReferenceInput = {
  /** Function Reference by weight. this map contains function name as key and its weight as the value. This is for canary upgrade purpose. */
  functionweights: Scalars['JSON'];
  /** Name of the function. */
  name: Scalars['String'];
  /**
   * Type indicates whether this function reference is by name or selector. For now, the only supported reference type is by "name".  Future reference types:
   *   * Function by label or annotation
   *   * Branch or tag of a versioned function
   *   * A "rolling upgrade" from one version of a function to another
   * Available value: - name - function-weights
   */
  type: Scalars['String'];
};

/** IngressConfig is for router to set up Ingress. */
export type V1IngressConfigInput = {
  /** Annotations will be added to metadata when creating Ingress. */
  annotations: Scalars['JSON'];
  /** Host is for ingress controller to apply rules. If host is empty or "*", the rule applies to all inbound HTTP traffic. */
  host: Scalars['String'];
  /** Path is for path matching. The format of path depends on what ingress controller you used. */
  path: Scalars['String'];
  /** TLS is for user to specify a Secret that contains TLS key and certificate. The domain name in the key and crt must match the value of Host field. */
  tls: Scalars['String'];
};

/** MessageQueueTrigger invokes functions when messages arrive to certain topic that trigger subscribes to. */
export type V1MessageQueueTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
  spec: V1MessageQueueTriggerSpecInput;
};

/** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
export type V1MessageQueueTriggerSpecInput = {
  /** Content type of payload */
  contentType: Scalars['String'];
  /** The period to wait after the last trigger reported active before scaling the deployment back to 0 */
  cooldownPeriod?: InputMaybe<Scalars['Int']>;
  /** Topic to collect error response sent from function */
  errorTopic: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
  /** Maximum number of replicas KEDA will scale the deployment up to */
  maxReplicaCount?: InputMaybe<Scalars['Int']>;
  /** Maximum times for message queue trigger to retry */
  maxRetries: Scalars['Int'];
  /** Type of message queue (NATS, Kafka, AzureQueue) */
  messageQueueType: Scalars['String'];
  /** ScalerTrigger fields */
  metadata: Scalars['JSON'];
  /** Minimum number of replicas KEDA will scale the deployment down to */
  minReplicaCount?: InputMaybe<Scalars['Int']>;
  /** Kind of Message Queue Trigger to be created, by default its fission */
  mqtkind?: InputMaybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
  /** The period to check each trigger source on every ScaledObject, and scale the deployment up or down accordingly */
  pollingInterval?: InputMaybe<Scalars['Int']>;
  /** Topic for message queue trigger to sent response from function. */
  respTopic?: InputMaybe<Scalars['String']>;
  /** Secret name */
  secret?: InputMaybe<Scalars['String']>;
  /** Subscribed topic */
  topic: Scalars['String'];
};

/** Package Think of these as function-level images. */
export type V1PackageInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
  spec: V1PackageSpecInput;
  /** PackageStatus contains the build status of a package also the build log for examination. */
  status: V1PackageStatusInput;
};

/** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
export type V1PackageSpecInput = {
  /** BuildCommand is a custom build command that builder used to build the source archive. */
  buildcmd?: InputMaybe<Scalars['String']>;
  /** Archive contains or references a collection of sources or binary files. */
  deployment?: InputMaybe<V1ArchiveInput>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReferenceInput;
  /** Archive contains or references a collection of sources or binary files. */
  source?: InputMaybe<V1ArchiveInput>;
};

/** Archive contains or references a collection of sources or binary files. */
export type V1ArchiveInput = {
  /** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
  checksum?: InputMaybe<V1ChecksumInput>;
  /** Literal contents of the package. Can be used for encoding packages below TODO (256 KB?) size. */
  literal?: InputMaybe<Scalars['String']>;
  /**
   * Type defines how the package is specified: literal or URL. Available value:
   *  - literal
   *  - url
   */
  type?: InputMaybe<Scalars['String']>;
  /** URL references a package. */
  url?: InputMaybe<Scalars['String']>;
};

/** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
export type V1ChecksumInput = {
  sum?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** PackageStatus contains the build status of a package also the build log for examination. */
export type V1PackageStatusInput = {
  /** BuildLog stores build log during the compilation. */
  buildlog?: InputMaybe<Scalars['String']>;
  /** BuildStatus is the package build status. */
  buildstatus?: InputMaybe<Scalars['String']>;
  /** LastUpdateTimestamp will store the timestamp the package was last updated metav1.Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. https://github.com/kubernetes/apimachinery/blob/44bd77c24ef93cd3a5eb6fef64e514025d10d44e/pkg/apis/meta/v1/time.go#L26-L35 */
  lastUpdateTimestamp?: InputMaybe<Scalars['String']>;
};

/** TimeTrigger invokes functions based on given cron schedule. */
export type V1TimeTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
  spec: V1TimeTriggerSpecInput;
};

/** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
export type V1TimeTriggerSpecInput = {
  /** Cron schedule */
  cron: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
};

/** KubernetesWatchTrigger watches kubernetes resource events and invokes functions. */
export type V1KubernetesWatchTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
  spec: V1KubernetesWatchTriggerSpecInput;
};

/** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
export type V1KubernetesWatchTriggerSpecInput = {
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
  /** Resource labels */
  labelselector: Scalars['JSON'];
  namespace: Scalars['String'];
  /** Type of resource to watch (Pod, Service, etc.) */
  type: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  V1CanaryConfig: ResolverTypeWrapper<V1CanaryConfig>;
  V1ObjectMeta: ResolverTypeWrapper<V1ObjectMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  V1ManagedFieldsEntry: ResolverTypeWrapper<V1ManagedFieldsEntry>;
  V1OwnerReference: ResolverTypeWrapper<V1OwnerReference>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  V1CanaryConfigSpec: ResolverTypeWrapper<V1CanaryConfigSpec>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  V1CanaryConfigStatus: ResolverTypeWrapper<V1CanaryConfigStatus>;
  V1Environment: ResolverTypeWrapper<V1Environment>;
  V1EnvironmentSpec: ResolverTypeWrapper<V1EnvironmentSpec>;
  V1Builder: ResolverTypeWrapper<V1Builder>;
  V1Container: ResolverTypeWrapper<V1Container>;
  V1EnvVar: ResolverTypeWrapper<V1EnvVar>;
  V1EnvVarSource: ResolverTypeWrapper<V1EnvVarSource>;
  V1ConfigMapKeySelector: ResolverTypeWrapper<V1ConfigMapKeySelector>;
  V1ObjectFieldSelector: ResolverTypeWrapper<V1ObjectFieldSelector>;
  V1ResourceFieldSelector: ResolverTypeWrapper<V1ResourceFieldSelector>;
  V1SecretKeySelector: ResolverTypeWrapper<V1SecretKeySelector>;
  V1EnvFromSource: ResolverTypeWrapper<V1EnvFromSource>;
  V1ConfigMapEnvSource: ResolverTypeWrapper<V1ConfigMapEnvSource>;
  V1SecretEnvSource: ResolverTypeWrapper<V1SecretEnvSource>;
  V1Lifecycle: ResolverTypeWrapper<V1Lifecycle>;
  V1LifecycleHandler: ResolverTypeWrapper<V1LifecycleHandler>;
  V1ExecAction: ResolverTypeWrapper<V1ExecAction>;
  V1HTTPGetAction: ResolverTypeWrapper<V1HTTPGetAction>;
  V1HTTPHeader: ResolverTypeWrapper<V1HTTPHeader>;
  V1TCPSocketAction: ResolverTypeWrapper<V1TCPSocketAction>;
  V1Probe: ResolverTypeWrapper<V1Probe>;
  V1GRPCAction: ResolverTypeWrapper<V1GRPCAction>;
  V1ContainerPort: ResolverTypeWrapper<V1ContainerPort>;
  V1ResourceRequirements: ResolverTypeWrapper<V1ResourceRequirements>;
  V1SecurityContext: ResolverTypeWrapper<V1SecurityContext>;
  V1Capabilities: ResolverTypeWrapper<V1Capabilities>;
  V1SELinuxOptions: ResolverTypeWrapper<V1SELinuxOptions>;
  V1SeccompProfile: ResolverTypeWrapper<V1SeccompProfile>;
  V1WindowsSecurityContextOptions: ResolverTypeWrapper<V1WindowsSecurityContextOptions>;
  V1VolumeDevice: ResolverTypeWrapper<V1VolumeDevice>;
  V1VolumeMount: ResolverTypeWrapper<V1VolumeMount>;
  V1PodSpec: ResolverTypeWrapper<V1PodSpec>;
  V1Affinity: ResolverTypeWrapper<V1Affinity>;
  V1NodeAffinity: ResolverTypeWrapper<V1NodeAffinity>;
  V1PreferredSchedulingTerm: ResolverTypeWrapper<V1PreferredSchedulingTerm>;
  V1NodeSelectorTerm: ResolverTypeWrapper<V1NodeSelectorTerm>;
  V1NodeSelectorRequirement: ResolverTypeWrapper<V1NodeSelectorRequirement>;
  V1NodeSelector: ResolverTypeWrapper<V1NodeSelector>;
  V1PodAffinity: ResolverTypeWrapper<V1PodAffinity>;
  V1WeightedPodAffinityTerm: ResolverTypeWrapper<V1WeightedPodAffinityTerm>;
  V1PodAffinityTerm: ResolverTypeWrapper<V1PodAffinityTerm>;
  V1LabelSelector: ResolverTypeWrapper<V1LabelSelector>;
  V1LabelSelectorRequirement: ResolverTypeWrapper<V1LabelSelectorRequirement>;
  V1PodAntiAffinity: ResolverTypeWrapper<V1PodAntiAffinity>;
  V1PodDNSConfig: ResolverTypeWrapper<V1PodDNSConfig>;
  V1PodDNSConfigOption: ResolverTypeWrapper<V1PodDNSConfigOption>;
  V1EphemeralContainer: ResolverTypeWrapper<V1EphemeralContainer>;
  V1HostAlias: ResolverTypeWrapper<V1HostAlias>;
  V1LocalObjectReference: ResolverTypeWrapper<V1LocalObjectReference>;
  V1PodOS: ResolverTypeWrapper<V1PodOS>;
  V1PodReadinessGate: ResolverTypeWrapper<V1PodReadinessGate>;
  V1PodSecurityContext: ResolverTypeWrapper<V1PodSecurityContext>;
  V1Sysctl: ResolverTypeWrapper<V1Sysctl>;
  V1Toleration: ResolverTypeWrapper<V1Toleration>;
  V1TopologySpreadConstraint: ResolverTypeWrapper<V1TopologySpreadConstraint>;
  V1Volume: ResolverTypeWrapper<V1Volume>;
  V1AWSElasticBlockStoreVolumeSource: ResolverTypeWrapper<V1AWSElasticBlockStoreVolumeSource>;
  V1AzureDiskVolumeSource: ResolverTypeWrapper<V1AzureDiskVolumeSource>;
  V1AzureFileVolumeSource: ResolverTypeWrapper<V1AzureFileVolumeSource>;
  V1CephFSVolumeSource: ResolverTypeWrapper<V1CephFSVolumeSource>;
  V1CinderVolumeSource: ResolverTypeWrapper<V1CinderVolumeSource>;
  V1ConfigMapVolumeSource: ResolverTypeWrapper<V1ConfigMapVolumeSource>;
  V1KeyToPath: ResolverTypeWrapper<V1KeyToPath>;
  V1CSIVolumeSource: ResolverTypeWrapper<V1CSIVolumeSource>;
  V1DownwardAPIVolumeSource: ResolverTypeWrapper<V1DownwardAPIVolumeSource>;
  V1DownwardAPIVolumeFile: ResolverTypeWrapper<V1DownwardAPIVolumeFile>;
  V1EmptyDirVolumeSource: ResolverTypeWrapper<V1EmptyDirVolumeSource>;
  V1EphemeralVolumeSource: ResolverTypeWrapper<V1EphemeralVolumeSource>;
  V1PersistentVolumeClaimTemplate: ResolverTypeWrapper<V1PersistentVolumeClaimTemplate>;
  V1PersistentVolumeClaimSpec: ResolverTypeWrapper<V1PersistentVolumeClaimSpec>;
  V1TypedLocalObjectReference: ResolverTypeWrapper<V1TypedLocalObjectReference>;
  V1FCVolumeSource: ResolverTypeWrapper<V1FCVolumeSource>;
  V1FlexVolumeSource: ResolverTypeWrapper<V1FlexVolumeSource>;
  V1FlockerVolumeSource: ResolverTypeWrapper<V1FlockerVolumeSource>;
  V1GCEPersistentDiskVolumeSource: ResolverTypeWrapper<V1GCEPersistentDiskVolumeSource>;
  V1GitRepoVolumeSource: ResolverTypeWrapper<V1GitRepoVolumeSource>;
  V1GlusterfsVolumeSource: ResolverTypeWrapper<V1GlusterfsVolumeSource>;
  V1HostPathVolumeSource: ResolverTypeWrapper<V1HostPathVolumeSource>;
  V1ISCSIVolumeSource: ResolverTypeWrapper<V1ISCSIVolumeSource>;
  V1NFSVolumeSource: ResolverTypeWrapper<V1NFSVolumeSource>;
  V1PersistentVolumeClaimVolumeSource: ResolverTypeWrapper<V1PersistentVolumeClaimVolumeSource>;
  V1PhotonPersistentDiskVolumeSource: ResolverTypeWrapper<V1PhotonPersistentDiskVolumeSource>;
  V1PortworxVolumeSource: ResolverTypeWrapper<V1PortworxVolumeSource>;
  V1ProjectedVolumeSource: ResolverTypeWrapper<V1ProjectedVolumeSource>;
  V1VolumeProjection: ResolverTypeWrapper<V1VolumeProjection>;
  V1ConfigMapProjection: ResolverTypeWrapper<V1ConfigMapProjection>;
  V1DownwardAPIProjection: ResolverTypeWrapper<V1DownwardAPIProjection>;
  V1SecretProjection: ResolverTypeWrapper<V1SecretProjection>;
  V1ServiceAccountTokenProjection: ResolverTypeWrapper<V1ServiceAccountTokenProjection>;
  V1QuobyteVolumeSource: ResolverTypeWrapper<V1QuobyteVolumeSource>;
  V1RBDVolumeSource: ResolverTypeWrapper<V1RBDVolumeSource>;
  V1ScaleIOVolumeSource: ResolverTypeWrapper<V1ScaleIOVolumeSource>;
  V1SecretVolumeSource: ResolverTypeWrapper<V1SecretVolumeSource>;
  V1StorageOSVolumeSource: ResolverTypeWrapper<V1StorageOSVolumeSource>;
  V1VsphereVirtualDiskVolumeSource: ResolverTypeWrapper<V1VsphereVirtualDiskVolumeSource>;
  V1Runtime: ResolverTypeWrapper<V1Runtime>;
  V1Function: ResolverTypeWrapper<V1Function>;
  V1FunctionSpec: ResolverTypeWrapper<V1FunctionSpec>;
  V1ConfigMapReference: ResolverTypeWrapper<V1ConfigMapReference>;
  V1EnvironmentReference: ResolverTypeWrapper<V1EnvironmentReference>;
  V1InvokeStrategy: ResolverTypeWrapper<V1InvokeStrategy>;
  V1ExecutionStrategy: ResolverTypeWrapper<V1ExecutionStrategy>;
  V2beta2HorizontalPodAutoscalerBehavior: ResolverTypeWrapper<V2beta2HorizontalPodAutoscalerBehavior>;
  V2beta2HPAScalingRules: ResolverTypeWrapper<V2beta2HPAScalingRules>;
  V2beta2HPAScalingPolicy: ResolverTypeWrapper<V2beta2HPAScalingPolicy>;
  V2beta2MetricSpec: ResolverTypeWrapper<V2beta2MetricSpec>;
  V2beta2ContainerResourceMetricSource: ResolverTypeWrapper<V2beta2ContainerResourceMetricSource>;
  V2beta2MetricTarget: ResolverTypeWrapper<V2beta2MetricTarget>;
  V2beta2ExternalMetricSource: ResolverTypeWrapper<V2beta2ExternalMetricSource>;
  V2beta2MetricIdentifier: ResolverTypeWrapper<V2beta2MetricIdentifier>;
  V2beta2ObjectMetricSource: ResolverTypeWrapper<V2beta2ObjectMetricSource>;
  V2beta2CrossVersionObjectReference: ResolverTypeWrapper<V2beta2CrossVersionObjectReference>;
  V2beta2PodsMetricSource: ResolverTypeWrapper<V2beta2PodsMetricSource>;
  V2beta2ResourceMetricSource: ResolverTypeWrapper<V2beta2ResourceMetricSource>;
  V1FunctionPackageRef: ResolverTypeWrapper<V1FunctionPackageRef>;
  V1PackageRef: ResolverTypeWrapper<V1PackageRef>;
  V1SecretReference: ResolverTypeWrapper<V1SecretReference>;
  V1HTTPTrigger: ResolverTypeWrapper<V1HTTPTrigger>;
  V1HTTPTriggerSpec: ResolverTypeWrapper<V1HTTPTriggerSpec>;
  V1FunctionReference: ResolverTypeWrapper<V1FunctionReference>;
  V1IngressConfig: ResolverTypeWrapper<V1IngressConfig>;
  V1MessageQueueTrigger: ResolverTypeWrapper<V1MessageQueueTrigger>;
  V1MessageQueueTriggerSpec: ResolverTypeWrapper<V1MessageQueueTriggerSpec>;
  V1Package: ResolverTypeWrapper<V1Package>;
  V1PackageSpec: ResolverTypeWrapper<V1PackageSpec>;
  V1Archive: ResolverTypeWrapper<V1Archive>;
  V1Checksum: ResolverTypeWrapper<V1Checksum>;
  V1PackageStatus: ResolverTypeWrapper<V1PackageStatus>;
  V1TimeTrigger: ResolverTypeWrapper<V1TimeTrigger>;
  V1TimeTriggerSpec: ResolverTypeWrapper<V1TimeTriggerSpec>;
  V1KubernetesWatchTrigger: ResolverTypeWrapper<V1KubernetesWatchTrigger>;
  V1KubernetesWatchTriggerSpec: ResolverTypeWrapper<V1KubernetesWatchTriggerSpec>;
  Mutation: ResolverTypeWrapper<{}>;
  V1CanaryConfigInput: V1CanaryConfigInput;
  V1ObjectMetaInput: V1ObjectMetaInput;
  V1ManagedFieldsEntryInput: V1ManagedFieldsEntryInput;
  V1OwnerReferenceInput: V1OwnerReferenceInput;
  V1CanaryConfigSpecInput: V1CanaryConfigSpecInput;
  V1CanaryConfigStatusInput: V1CanaryConfigStatusInput;
  V1EnvironmentInput: V1EnvironmentInput;
  V1EnvironmentSpecInput: V1EnvironmentSpecInput;
  V1BuilderInput: V1BuilderInput;
  V1ContainerInput: V1ContainerInput;
  V1EnvVarInput: V1EnvVarInput;
  V1EnvVarSourceInput: V1EnvVarSourceInput;
  V1ConfigMapKeySelectorInput: V1ConfigMapKeySelectorInput;
  V1ObjectFieldSelectorInput: V1ObjectFieldSelectorInput;
  V1ResourceFieldSelectorInput: V1ResourceFieldSelectorInput;
  V1SecretKeySelectorInput: V1SecretKeySelectorInput;
  V1EnvFromSourceInput: V1EnvFromSourceInput;
  V1ConfigMapEnvSourceInput: V1ConfigMapEnvSourceInput;
  V1SecretEnvSourceInput: V1SecretEnvSourceInput;
  V1LifecycleInput: V1LifecycleInput;
  V1LifecycleHandlerInput: V1LifecycleHandlerInput;
  V1ExecActionInput: V1ExecActionInput;
  V1HTTPGetActionInput: V1HTTPGetActionInput;
  V1HTTPHeaderInput: V1HTTPHeaderInput;
  V1TCPSocketActionInput: V1TCPSocketActionInput;
  V1ProbeInput: V1ProbeInput;
  V1GRPCActionInput: V1GRPCActionInput;
  V1ContainerPortInput: V1ContainerPortInput;
  V1ResourceRequirementsInput: V1ResourceRequirementsInput;
  V1SecurityContextInput: V1SecurityContextInput;
  V1CapabilitiesInput: V1CapabilitiesInput;
  V1SELinuxOptionsInput: V1SELinuxOptionsInput;
  V1SeccompProfileInput: V1SeccompProfileInput;
  V1WindowsSecurityContextOptionsInput: V1WindowsSecurityContextOptionsInput;
  V1VolumeDeviceInput: V1VolumeDeviceInput;
  V1VolumeMountInput: V1VolumeMountInput;
  V1PodSpecInput: V1PodSpecInput;
  V1AffinityInput: V1AffinityInput;
  V1NodeAffinityInput: V1NodeAffinityInput;
  V1PreferredSchedulingTermInput: V1PreferredSchedulingTermInput;
  V1NodeSelectorTermInput: V1NodeSelectorTermInput;
  V1NodeSelectorRequirementInput: V1NodeSelectorRequirementInput;
  V1NodeSelectorInput: V1NodeSelectorInput;
  V1PodAffinityInput: V1PodAffinityInput;
  V1WeightedPodAffinityTermInput: V1WeightedPodAffinityTermInput;
  V1PodAffinityTermInput: V1PodAffinityTermInput;
  V1LabelSelectorInput: V1LabelSelectorInput;
  V1LabelSelectorRequirementInput: V1LabelSelectorRequirementInput;
  V1PodAntiAffinityInput: V1PodAntiAffinityInput;
  V1PodDNSConfigInput: V1PodDNSConfigInput;
  V1PodDNSConfigOptionInput: V1PodDNSConfigOptionInput;
  V1EphemeralContainerInput: V1EphemeralContainerInput;
  V1HostAliasInput: V1HostAliasInput;
  V1LocalObjectReferenceInput: V1LocalObjectReferenceInput;
  V1PodOSInput: V1PodOSInput;
  V1PodReadinessGateInput: V1PodReadinessGateInput;
  V1PodSecurityContextInput: V1PodSecurityContextInput;
  V1SysctlInput: V1SysctlInput;
  V1TolerationInput: V1TolerationInput;
  V1TopologySpreadConstraintInput: V1TopologySpreadConstraintInput;
  V1VolumeInput: V1VolumeInput;
  V1AWSElasticBlockStoreVolumeSourceInput: V1AWSElasticBlockStoreVolumeSourceInput;
  V1AzureDiskVolumeSourceInput: V1AzureDiskVolumeSourceInput;
  V1AzureFileVolumeSourceInput: V1AzureFileVolumeSourceInput;
  V1CephFSVolumeSourceInput: V1CephFSVolumeSourceInput;
  V1CinderVolumeSourceInput: V1CinderVolumeSourceInput;
  V1ConfigMapVolumeSourceInput: V1ConfigMapVolumeSourceInput;
  V1KeyToPathInput: V1KeyToPathInput;
  V1CSIVolumeSourceInput: V1CSIVolumeSourceInput;
  V1DownwardAPIVolumeSourceInput: V1DownwardAPIVolumeSourceInput;
  V1DownwardAPIVolumeFileInput: V1DownwardAPIVolumeFileInput;
  V1EmptyDirVolumeSourceInput: V1EmptyDirVolumeSourceInput;
  V1EphemeralVolumeSourceInput: V1EphemeralVolumeSourceInput;
  V1PersistentVolumeClaimTemplateInput: V1PersistentVolumeClaimTemplateInput;
  V1PersistentVolumeClaimSpecInput: V1PersistentVolumeClaimSpecInput;
  V1TypedLocalObjectReferenceInput: V1TypedLocalObjectReferenceInput;
  V1FCVolumeSourceInput: V1FCVolumeSourceInput;
  V1FlexVolumeSourceInput: V1FlexVolumeSourceInput;
  V1FlockerVolumeSourceInput: V1FlockerVolumeSourceInput;
  V1GCEPersistentDiskVolumeSourceInput: V1GCEPersistentDiskVolumeSourceInput;
  V1GitRepoVolumeSourceInput: V1GitRepoVolumeSourceInput;
  V1GlusterfsVolumeSourceInput: V1GlusterfsVolumeSourceInput;
  V1HostPathVolumeSourceInput: V1HostPathVolumeSourceInput;
  V1ISCSIVolumeSourceInput: V1ISCSIVolumeSourceInput;
  V1NFSVolumeSourceInput: V1NFSVolumeSourceInput;
  V1PersistentVolumeClaimVolumeSourceInput: V1PersistentVolumeClaimVolumeSourceInput;
  V1PhotonPersistentDiskVolumeSourceInput: V1PhotonPersistentDiskVolumeSourceInput;
  V1PortworxVolumeSourceInput: V1PortworxVolumeSourceInput;
  V1ProjectedVolumeSourceInput: V1ProjectedVolumeSourceInput;
  V1VolumeProjectionInput: V1VolumeProjectionInput;
  V1ConfigMapProjectionInput: V1ConfigMapProjectionInput;
  V1DownwardAPIProjectionInput: V1DownwardAPIProjectionInput;
  V1SecretProjectionInput: V1SecretProjectionInput;
  V1ServiceAccountTokenProjectionInput: V1ServiceAccountTokenProjectionInput;
  V1QuobyteVolumeSourceInput: V1QuobyteVolumeSourceInput;
  V1RBDVolumeSourceInput: V1RBDVolumeSourceInput;
  V1ScaleIOVolumeSourceInput: V1ScaleIOVolumeSourceInput;
  V1SecretVolumeSourceInput: V1SecretVolumeSourceInput;
  V1StorageOSVolumeSourceInput: V1StorageOSVolumeSourceInput;
  V1VsphereVirtualDiskVolumeSourceInput: V1VsphereVirtualDiskVolumeSourceInput;
  V1RuntimeInput: V1RuntimeInput;
  V1FunctionInput: V1FunctionInput;
  V1FunctionSpecInput: V1FunctionSpecInput;
  V1ConfigMapReferenceInput: V1ConfigMapReferenceInput;
  V1EnvironmentReferenceInput: V1EnvironmentReferenceInput;
  V1InvokeStrategyInput: V1InvokeStrategyInput;
  V1ExecutionStrategyInput: V1ExecutionStrategyInput;
  V2beta2HorizontalPodAutoscalerBehaviorInput: V2beta2HorizontalPodAutoscalerBehaviorInput;
  V2beta2HPAScalingRulesInput: V2beta2HPAScalingRulesInput;
  V2beta2HPAScalingPolicyInput: V2beta2HPAScalingPolicyInput;
  V2beta2MetricSpecInput: V2beta2MetricSpecInput;
  V2beta2ContainerResourceMetricSourceInput: V2beta2ContainerResourceMetricSourceInput;
  V2beta2MetricTargetInput: V2beta2MetricTargetInput;
  V2beta2ExternalMetricSourceInput: V2beta2ExternalMetricSourceInput;
  V2beta2MetricIdentifierInput: V2beta2MetricIdentifierInput;
  V2beta2ObjectMetricSourceInput: V2beta2ObjectMetricSourceInput;
  V2beta2CrossVersionObjectReferenceInput: V2beta2CrossVersionObjectReferenceInput;
  V2beta2PodsMetricSourceInput: V2beta2PodsMetricSourceInput;
  V2beta2ResourceMetricSourceInput: V2beta2ResourceMetricSourceInput;
  V1FunctionPackageRefInput: V1FunctionPackageRefInput;
  V1PackageRefInput: V1PackageRefInput;
  V1SecretReferenceInput: V1SecretReferenceInput;
  V1HTTPTriggerInput: V1HTTPTriggerInput;
  V1HTTPTriggerSpecInput: V1HTTPTriggerSpecInput;
  V1FunctionReferenceInput: V1FunctionReferenceInput;
  V1IngressConfigInput: V1IngressConfigInput;
  V1MessageQueueTriggerInput: V1MessageQueueTriggerInput;
  V1MessageQueueTriggerSpecInput: V1MessageQueueTriggerSpecInput;
  V1PackageInput: V1PackageInput;
  V1PackageSpecInput: V1PackageSpecInput;
  V1ArchiveInput: V1ArchiveInput;
  V1ChecksumInput: V1ChecksumInput;
  V1PackageStatusInput: V1PackageStatusInput;
  V1TimeTriggerInput: V1TimeTriggerInput;
  V1TimeTriggerSpecInput: V1TimeTriggerSpecInput;
  V1KubernetesWatchTriggerInput: V1KubernetesWatchTriggerInput;
  V1KubernetesWatchTriggerSpecInput: V1KubernetesWatchTriggerSpecInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: Scalars['String'];
  JSON: Scalars['JSON'];
  V1CanaryConfig: V1CanaryConfig;
  V1ObjectMeta: V1ObjectMeta;
  Float: Scalars['Float'];
  V1ManagedFieldsEntry: V1ManagedFieldsEntry;
  V1OwnerReference: V1OwnerReference;
  Boolean: Scalars['Boolean'];
  V1CanaryConfigSpec: V1CanaryConfigSpec;
  Int: Scalars['Int'];
  V1CanaryConfigStatus: V1CanaryConfigStatus;
  V1Environment: V1Environment;
  V1EnvironmentSpec: V1EnvironmentSpec;
  V1Builder: V1Builder;
  V1Container: V1Container;
  V1EnvVar: V1EnvVar;
  V1EnvVarSource: V1EnvVarSource;
  V1ConfigMapKeySelector: V1ConfigMapKeySelector;
  V1ObjectFieldSelector: V1ObjectFieldSelector;
  V1ResourceFieldSelector: V1ResourceFieldSelector;
  V1SecretKeySelector: V1SecretKeySelector;
  V1EnvFromSource: V1EnvFromSource;
  V1ConfigMapEnvSource: V1ConfigMapEnvSource;
  V1SecretEnvSource: V1SecretEnvSource;
  V1Lifecycle: V1Lifecycle;
  V1LifecycleHandler: V1LifecycleHandler;
  V1ExecAction: V1ExecAction;
  V1HTTPGetAction: V1HTTPGetAction;
  V1HTTPHeader: V1HTTPHeader;
  V1TCPSocketAction: V1TCPSocketAction;
  V1Probe: V1Probe;
  V1GRPCAction: V1GRPCAction;
  V1ContainerPort: V1ContainerPort;
  V1ResourceRequirements: V1ResourceRequirements;
  V1SecurityContext: V1SecurityContext;
  V1Capabilities: V1Capabilities;
  V1SELinuxOptions: V1SELinuxOptions;
  V1SeccompProfile: V1SeccompProfile;
  V1WindowsSecurityContextOptions: V1WindowsSecurityContextOptions;
  V1VolumeDevice: V1VolumeDevice;
  V1VolumeMount: V1VolumeMount;
  V1PodSpec: V1PodSpec;
  V1Affinity: V1Affinity;
  V1NodeAffinity: V1NodeAffinity;
  V1PreferredSchedulingTerm: V1PreferredSchedulingTerm;
  V1NodeSelectorTerm: V1NodeSelectorTerm;
  V1NodeSelectorRequirement: V1NodeSelectorRequirement;
  V1NodeSelector: V1NodeSelector;
  V1PodAffinity: V1PodAffinity;
  V1WeightedPodAffinityTerm: V1WeightedPodAffinityTerm;
  V1PodAffinityTerm: V1PodAffinityTerm;
  V1LabelSelector: V1LabelSelector;
  V1LabelSelectorRequirement: V1LabelSelectorRequirement;
  V1PodAntiAffinity: V1PodAntiAffinity;
  V1PodDNSConfig: V1PodDNSConfig;
  V1PodDNSConfigOption: V1PodDNSConfigOption;
  V1EphemeralContainer: V1EphemeralContainer;
  V1HostAlias: V1HostAlias;
  V1LocalObjectReference: V1LocalObjectReference;
  V1PodOS: V1PodOS;
  V1PodReadinessGate: V1PodReadinessGate;
  V1PodSecurityContext: V1PodSecurityContext;
  V1Sysctl: V1Sysctl;
  V1Toleration: V1Toleration;
  V1TopologySpreadConstraint: V1TopologySpreadConstraint;
  V1Volume: V1Volume;
  V1AWSElasticBlockStoreVolumeSource: V1AWSElasticBlockStoreVolumeSource;
  V1AzureDiskVolumeSource: V1AzureDiskVolumeSource;
  V1AzureFileVolumeSource: V1AzureFileVolumeSource;
  V1CephFSVolumeSource: V1CephFSVolumeSource;
  V1CinderVolumeSource: V1CinderVolumeSource;
  V1ConfigMapVolumeSource: V1ConfigMapVolumeSource;
  V1KeyToPath: V1KeyToPath;
  V1CSIVolumeSource: V1CSIVolumeSource;
  V1DownwardAPIVolumeSource: V1DownwardAPIVolumeSource;
  V1DownwardAPIVolumeFile: V1DownwardAPIVolumeFile;
  V1EmptyDirVolumeSource: V1EmptyDirVolumeSource;
  V1EphemeralVolumeSource: V1EphemeralVolumeSource;
  V1PersistentVolumeClaimTemplate: V1PersistentVolumeClaimTemplate;
  V1PersistentVolumeClaimSpec: V1PersistentVolumeClaimSpec;
  V1TypedLocalObjectReference: V1TypedLocalObjectReference;
  V1FCVolumeSource: V1FCVolumeSource;
  V1FlexVolumeSource: V1FlexVolumeSource;
  V1FlockerVolumeSource: V1FlockerVolumeSource;
  V1GCEPersistentDiskVolumeSource: V1GCEPersistentDiskVolumeSource;
  V1GitRepoVolumeSource: V1GitRepoVolumeSource;
  V1GlusterfsVolumeSource: V1GlusterfsVolumeSource;
  V1HostPathVolumeSource: V1HostPathVolumeSource;
  V1ISCSIVolumeSource: V1ISCSIVolumeSource;
  V1NFSVolumeSource: V1NFSVolumeSource;
  V1PersistentVolumeClaimVolumeSource: V1PersistentVolumeClaimVolumeSource;
  V1PhotonPersistentDiskVolumeSource: V1PhotonPersistentDiskVolumeSource;
  V1PortworxVolumeSource: V1PortworxVolumeSource;
  V1ProjectedVolumeSource: V1ProjectedVolumeSource;
  V1VolumeProjection: V1VolumeProjection;
  V1ConfigMapProjection: V1ConfigMapProjection;
  V1DownwardAPIProjection: V1DownwardAPIProjection;
  V1SecretProjection: V1SecretProjection;
  V1ServiceAccountTokenProjection: V1ServiceAccountTokenProjection;
  V1QuobyteVolumeSource: V1QuobyteVolumeSource;
  V1RBDVolumeSource: V1RBDVolumeSource;
  V1ScaleIOVolumeSource: V1ScaleIOVolumeSource;
  V1SecretVolumeSource: V1SecretVolumeSource;
  V1StorageOSVolumeSource: V1StorageOSVolumeSource;
  V1VsphereVirtualDiskVolumeSource: V1VsphereVirtualDiskVolumeSource;
  V1Runtime: V1Runtime;
  V1Function: V1Function;
  V1FunctionSpec: V1FunctionSpec;
  V1ConfigMapReference: V1ConfigMapReference;
  V1EnvironmentReference: V1EnvironmentReference;
  V1InvokeStrategy: V1InvokeStrategy;
  V1ExecutionStrategy: V1ExecutionStrategy;
  V2beta2HorizontalPodAutoscalerBehavior: V2beta2HorizontalPodAutoscalerBehavior;
  V2beta2HPAScalingRules: V2beta2HPAScalingRules;
  V2beta2HPAScalingPolicy: V2beta2HPAScalingPolicy;
  V2beta2MetricSpec: V2beta2MetricSpec;
  V2beta2ContainerResourceMetricSource: V2beta2ContainerResourceMetricSource;
  V2beta2MetricTarget: V2beta2MetricTarget;
  V2beta2ExternalMetricSource: V2beta2ExternalMetricSource;
  V2beta2MetricIdentifier: V2beta2MetricIdentifier;
  V2beta2ObjectMetricSource: V2beta2ObjectMetricSource;
  V2beta2CrossVersionObjectReference: V2beta2CrossVersionObjectReference;
  V2beta2PodsMetricSource: V2beta2PodsMetricSource;
  V2beta2ResourceMetricSource: V2beta2ResourceMetricSource;
  V1FunctionPackageRef: V1FunctionPackageRef;
  V1PackageRef: V1PackageRef;
  V1SecretReference: V1SecretReference;
  V1HTTPTrigger: V1HTTPTrigger;
  V1HTTPTriggerSpec: V1HTTPTriggerSpec;
  V1FunctionReference: V1FunctionReference;
  V1IngressConfig: V1IngressConfig;
  V1MessageQueueTrigger: V1MessageQueueTrigger;
  V1MessageQueueTriggerSpec: V1MessageQueueTriggerSpec;
  V1Package: V1Package;
  V1PackageSpec: V1PackageSpec;
  V1Archive: V1Archive;
  V1Checksum: V1Checksum;
  V1PackageStatus: V1PackageStatus;
  V1TimeTrigger: V1TimeTrigger;
  V1TimeTriggerSpec: V1TimeTriggerSpec;
  V1KubernetesWatchTrigger: V1KubernetesWatchTrigger;
  V1KubernetesWatchTriggerSpec: V1KubernetesWatchTriggerSpec;
  Mutation: {};
  V1CanaryConfigInput: V1CanaryConfigInput;
  V1ObjectMetaInput: V1ObjectMetaInput;
  V1ManagedFieldsEntryInput: V1ManagedFieldsEntryInput;
  V1OwnerReferenceInput: V1OwnerReferenceInput;
  V1CanaryConfigSpecInput: V1CanaryConfigSpecInput;
  V1CanaryConfigStatusInput: V1CanaryConfigStatusInput;
  V1EnvironmentInput: V1EnvironmentInput;
  V1EnvironmentSpecInput: V1EnvironmentSpecInput;
  V1BuilderInput: V1BuilderInput;
  V1ContainerInput: V1ContainerInput;
  V1EnvVarInput: V1EnvVarInput;
  V1EnvVarSourceInput: V1EnvVarSourceInput;
  V1ConfigMapKeySelectorInput: V1ConfigMapKeySelectorInput;
  V1ObjectFieldSelectorInput: V1ObjectFieldSelectorInput;
  V1ResourceFieldSelectorInput: V1ResourceFieldSelectorInput;
  V1SecretKeySelectorInput: V1SecretKeySelectorInput;
  V1EnvFromSourceInput: V1EnvFromSourceInput;
  V1ConfigMapEnvSourceInput: V1ConfigMapEnvSourceInput;
  V1SecretEnvSourceInput: V1SecretEnvSourceInput;
  V1LifecycleInput: V1LifecycleInput;
  V1LifecycleHandlerInput: V1LifecycleHandlerInput;
  V1ExecActionInput: V1ExecActionInput;
  V1HTTPGetActionInput: V1HTTPGetActionInput;
  V1HTTPHeaderInput: V1HTTPHeaderInput;
  V1TCPSocketActionInput: V1TCPSocketActionInput;
  V1ProbeInput: V1ProbeInput;
  V1GRPCActionInput: V1GRPCActionInput;
  V1ContainerPortInput: V1ContainerPortInput;
  V1ResourceRequirementsInput: V1ResourceRequirementsInput;
  V1SecurityContextInput: V1SecurityContextInput;
  V1CapabilitiesInput: V1CapabilitiesInput;
  V1SELinuxOptionsInput: V1SELinuxOptionsInput;
  V1SeccompProfileInput: V1SeccompProfileInput;
  V1WindowsSecurityContextOptionsInput: V1WindowsSecurityContextOptionsInput;
  V1VolumeDeviceInput: V1VolumeDeviceInput;
  V1VolumeMountInput: V1VolumeMountInput;
  V1PodSpecInput: V1PodSpecInput;
  V1AffinityInput: V1AffinityInput;
  V1NodeAffinityInput: V1NodeAffinityInput;
  V1PreferredSchedulingTermInput: V1PreferredSchedulingTermInput;
  V1NodeSelectorTermInput: V1NodeSelectorTermInput;
  V1NodeSelectorRequirementInput: V1NodeSelectorRequirementInput;
  V1NodeSelectorInput: V1NodeSelectorInput;
  V1PodAffinityInput: V1PodAffinityInput;
  V1WeightedPodAffinityTermInput: V1WeightedPodAffinityTermInput;
  V1PodAffinityTermInput: V1PodAffinityTermInput;
  V1LabelSelectorInput: V1LabelSelectorInput;
  V1LabelSelectorRequirementInput: V1LabelSelectorRequirementInput;
  V1PodAntiAffinityInput: V1PodAntiAffinityInput;
  V1PodDNSConfigInput: V1PodDNSConfigInput;
  V1PodDNSConfigOptionInput: V1PodDNSConfigOptionInput;
  V1EphemeralContainerInput: V1EphemeralContainerInput;
  V1HostAliasInput: V1HostAliasInput;
  V1LocalObjectReferenceInput: V1LocalObjectReferenceInput;
  V1PodOSInput: V1PodOSInput;
  V1PodReadinessGateInput: V1PodReadinessGateInput;
  V1PodSecurityContextInput: V1PodSecurityContextInput;
  V1SysctlInput: V1SysctlInput;
  V1TolerationInput: V1TolerationInput;
  V1TopologySpreadConstraintInput: V1TopologySpreadConstraintInput;
  V1VolumeInput: V1VolumeInput;
  V1AWSElasticBlockStoreVolumeSourceInput: V1AWSElasticBlockStoreVolumeSourceInput;
  V1AzureDiskVolumeSourceInput: V1AzureDiskVolumeSourceInput;
  V1AzureFileVolumeSourceInput: V1AzureFileVolumeSourceInput;
  V1CephFSVolumeSourceInput: V1CephFSVolumeSourceInput;
  V1CinderVolumeSourceInput: V1CinderVolumeSourceInput;
  V1ConfigMapVolumeSourceInput: V1ConfigMapVolumeSourceInput;
  V1KeyToPathInput: V1KeyToPathInput;
  V1CSIVolumeSourceInput: V1CSIVolumeSourceInput;
  V1DownwardAPIVolumeSourceInput: V1DownwardAPIVolumeSourceInput;
  V1DownwardAPIVolumeFileInput: V1DownwardAPIVolumeFileInput;
  V1EmptyDirVolumeSourceInput: V1EmptyDirVolumeSourceInput;
  V1EphemeralVolumeSourceInput: V1EphemeralVolumeSourceInput;
  V1PersistentVolumeClaimTemplateInput: V1PersistentVolumeClaimTemplateInput;
  V1PersistentVolumeClaimSpecInput: V1PersistentVolumeClaimSpecInput;
  V1TypedLocalObjectReferenceInput: V1TypedLocalObjectReferenceInput;
  V1FCVolumeSourceInput: V1FCVolumeSourceInput;
  V1FlexVolumeSourceInput: V1FlexVolumeSourceInput;
  V1FlockerVolumeSourceInput: V1FlockerVolumeSourceInput;
  V1GCEPersistentDiskVolumeSourceInput: V1GCEPersistentDiskVolumeSourceInput;
  V1GitRepoVolumeSourceInput: V1GitRepoVolumeSourceInput;
  V1GlusterfsVolumeSourceInput: V1GlusterfsVolumeSourceInput;
  V1HostPathVolumeSourceInput: V1HostPathVolumeSourceInput;
  V1ISCSIVolumeSourceInput: V1ISCSIVolumeSourceInput;
  V1NFSVolumeSourceInput: V1NFSVolumeSourceInput;
  V1PersistentVolumeClaimVolumeSourceInput: V1PersistentVolumeClaimVolumeSourceInput;
  V1PhotonPersistentDiskVolumeSourceInput: V1PhotonPersistentDiskVolumeSourceInput;
  V1PortworxVolumeSourceInput: V1PortworxVolumeSourceInput;
  V1ProjectedVolumeSourceInput: V1ProjectedVolumeSourceInput;
  V1VolumeProjectionInput: V1VolumeProjectionInput;
  V1ConfigMapProjectionInput: V1ConfigMapProjectionInput;
  V1DownwardAPIProjectionInput: V1DownwardAPIProjectionInput;
  V1SecretProjectionInput: V1SecretProjectionInput;
  V1ServiceAccountTokenProjectionInput: V1ServiceAccountTokenProjectionInput;
  V1QuobyteVolumeSourceInput: V1QuobyteVolumeSourceInput;
  V1RBDVolumeSourceInput: V1RBDVolumeSourceInput;
  V1ScaleIOVolumeSourceInput: V1ScaleIOVolumeSourceInput;
  V1SecretVolumeSourceInput: V1SecretVolumeSourceInput;
  V1StorageOSVolumeSourceInput: V1StorageOSVolumeSourceInput;
  V1VsphereVirtualDiskVolumeSourceInput: V1VsphereVirtualDiskVolumeSourceInput;
  V1RuntimeInput: V1RuntimeInput;
  V1FunctionInput: V1FunctionInput;
  V1FunctionSpecInput: V1FunctionSpecInput;
  V1ConfigMapReferenceInput: V1ConfigMapReferenceInput;
  V1EnvironmentReferenceInput: V1EnvironmentReferenceInput;
  V1InvokeStrategyInput: V1InvokeStrategyInput;
  V1ExecutionStrategyInput: V1ExecutionStrategyInput;
  V2beta2HorizontalPodAutoscalerBehaviorInput: V2beta2HorizontalPodAutoscalerBehaviorInput;
  V2beta2HPAScalingRulesInput: V2beta2HPAScalingRulesInput;
  V2beta2HPAScalingPolicyInput: V2beta2HPAScalingPolicyInput;
  V2beta2MetricSpecInput: V2beta2MetricSpecInput;
  V2beta2ContainerResourceMetricSourceInput: V2beta2ContainerResourceMetricSourceInput;
  V2beta2MetricTargetInput: V2beta2MetricTargetInput;
  V2beta2ExternalMetricSourceInput: V2beta2ExternalMetricSourceInput;
  V2beta2MetricIdentifierInput: V2beta2MetricIdentifierInput;
  V2beta2ObjectMetricSourceInput: V2beta2ObjectMetricSourceInput;
  V2beta2CrossVersionObjectReferenceInput: V2beta2CrossVersionObjectReferenceInput;
  V2beta2PodsMetricSourceInput: V2beta2PodsMetricSourceInput;
  V2beta2ResourceMetricSourceInput: V2beta2ResourceMetricSourceInput;
  V1FunctionPackageRefInput: V1FunctionPackageRefInput;
  V1PackageRefInput: V1PackageRefInput;
  V1SecretReferenceInput: V1SecretReferenceInput;
  V1HTTPTriggerInput: V1HTTPTriggerInput;
  V1HTTPTriggerSpecInput: V1HTTPTriggerSpecInput;
  V1FunctionReferenceInput: V1FunctionReferenceInput;
  V1IngressConfigInput: V1IngressConfigInput;
  V1MessageQueueTriggerInput: V1MessageQueueTriggerInput;
  V1MessageQueueTriggerSpecInput: V1MessageQueueTriggerSpecInput;
  V1PackageInput: V1PackageInput;
  V1PackageSpecInput: V1PackageSpecInput;
  V1ArchiveInput: V1ArchiveInput;
  V1ChecksumInput: V1ChecksumInput;
  V1PackageStatusInput: V1PackageStatusInput;
  V1TimeTriggerInput: V1TimeTriggerInput;
  V1TimeTriggerSpecInput: V1TimeTriggerSpecInput;
  V1KubernetesWatchTriggerInput: V1KubernetesWatchTriggerInput;
  V1KubernetesWatchTriggerSpecInput: V1KubernetesWatchTriggerSpecInput;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getArchives?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getCanaryConfig?: Resolver<Maybe<ResolversTypes['V1CanaryConfig']>, ParentType, ContextType, RequireFields<QuerygetCanaryConfigArgs, 'canaryConfig'>>;
  getCanaryConfigs?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1CanaryConfig']>>>, ParentType, ContextType, Partial<QuerygetCanaryConfigsArgs>>;
  getEnvironment?: Resolver<Maybe<ResolversTypes['V1Environment']>, ParentType, ContextType, RequireFields<QuerygetEnvironmentArgs, 'environment'>>;
  getEnvironments?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Environment']>>>, ParentType, ContextType, Partial<QuerygetEnvironmentsArgs>>;
  getFunction?: Resolver<Maybe<ResolversTypes['V1Function']>, ParentType, ContextType, RequireFields<QuerygetFunctionArgs, 'function'>>;
  getFunctions?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Function']>>>, ParentType, ContextType, Partial<QuerygetFunctionsArgs>>;
  getHttp?: Resolver<Maybe<ResolversTypes['V1HTTPTrigger']>, ParentType, ContextType, RequireFields<QuerygetHttpArgs, 'httpTrigger'>>;
  getHttps?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1HTTPTrigger']>>>, ParentType, ContextType, Partial<QuerygetHttpsArgs>>;
  getMessagequeue?: Resolver<Maybe<ResolversTypes['V1MessageQueueTrigger']>, ParentType, ContextType, RequireFields<QuerygetMessagequeueArgs, 'mqTrigger'>>;
  getMessagequeues?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1MessageQueueTrigger']>>>, ParentType, ContextType, Partial<QuerygetMessagequeuesArgs>>;
  getPackage?: Resolver<Maybe<ResolversTypes['V1Package']>, ParentType, ContextType, RequireFields<QuerygetPackageArgs, 'package'>>;
  getPackages?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Package']>>>, ParentType, ContextType, Partial<QuerygetPackagesArgs>>;
  getTime?: Resolver<Maybe<ResolversTypes['V1TimeTrigger']>, ParentType, ContextType, RequireFields<QuerygetTimeArgs, 'timeTrigger'>>;
  getTimes?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1TimeTrigger']>>>, ParentType, ContextType, Partial<QuerygetTimesArgs>>;
  getWatch?: Resolver<Maybe<ResolversTypes['V1KubernetesWatchTrigger']>, ParentType, ContextType, RequireFields<QuerygetWatchArgs, 'watch'>>;
  getWatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1KubernetesWatchTrigger']>>>, ParentType, ContextType, Partial<QuerygetWatchesArgs>>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type V1CanaryConfigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1CanaryConfig'] = ResolversParentTypes['V1CanaryConfig']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1CanaryConfigSpec'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['V1CanaryConfigStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ObjectMetaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ObjectMeta'] = ResolversParentTypes['V1ObjectMeta']> = ResolversObject<{
  annotations?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  clusterName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletionGracePeriodSeconds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deletionTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finalizers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  generateName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  managedFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1ManagedFieldsEntry']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerReferences?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1OwnerReference']>>>, ParentType, ContextType>;
  resourceVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selfLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ManagedFieldsEntryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ManagedFieldsEntry'] = ResolversParentTypes['V1ManagedFieldsEntry']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldsV1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subresource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1OwnerReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1OwnerReference'] = ResolversParentTypes['V1OwnerReference']> = ResolversObject<{
  apiVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockOwnerDeletion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  controller?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1CanaryConfigSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1CanaryConfigSpec'] = ResolversParentTypes['V1CanaryConfigSpec']> = ResolversObject<{
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  failureType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  failurethreshold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  newfunction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oldfunction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trigger?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weightincrement?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1CanaryConfigStatusResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1CanaryConfigStatus'] = ResolversParentTypes['V1CanaryConfigStatus']> = ResolversObject<{
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EnvironmentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Environment'] = ResolversParentTypes['V1Environment']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1EnvironmentSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EnvironmentSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EnvironmentSpec'] = ResolversParentTypes['V1EnvironmentSpec']> = ResolversObject<{
  allowAccessToExternalNetwork?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  allowedFunctionsPerContainer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  builder?: Resolver<ResolversTypes['V1Builder'], ParentType, ContextType>;
  imagepullsecret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  keeparchive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  poolsize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['V1ResourceRequirements'], ParentType, ContextType>;
  runtime?: Resolver<ResolversTypes['V1Runtime'], ParentType, ContextType>;
  terminationGracePeriod?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1BuilderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Builder'] = ResolversParentTypes['V1Builder']> = ResolversObject<{
  command?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  container?: Resolver<Maybe<ResolversTypes['V1Container']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  podspec?: Resolver<Maybe<ResolversTypes['V1PodSpec']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Container'] = ResolversParentTypes['V1Container']> = ResolversObject<{
  args?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  command?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  env?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1EnvVar']>>>, ParentType, ContextType>;
  envFrom?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1EnvFromSource']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePullPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lifecycle?: Resolver<Maybe<ResolversTypes['V1Lifecycle']>, ParentType, ContextType>;
  livenessProbe?: Resolver<Maybe<ResolversTypes['V1Probe']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ports?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1ContainerPort']>>>, ParentType, ContextType>;
  readinessProbe?: Resolver<Maybe<ResolversTypes['V1Probe']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<ResolversTypes['V1ResourceRequirements']>, ParentType, ContextType>;
  securityContext?: Resolver<Maybe<ResolversTypes['V1SecurityContext']>, ParentType, ContextType>;
  startupProbe?: Resolver<Maybe<ResolversTypes['V1Probe']>, ParentType, ContextType>;
  stdin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  stdinOnce?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  terminationMessagePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminationMessagePolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  volumeDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1VolumeDevice']>>>, ParentType, ContextType>;
  volumeMounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1VolumeMount']>>>, ParentType, ContextType>;
  workingDir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EnvVarResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EnvVar'] = ResolversParentTypes['V1EnvVar']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueFrom?: Resolver<Maybe<ResolversTypes['V1EnvVarSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EnvVarSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EnvVarSource'] = ResolversParentTypes['V1EnvVarSource']> = ResolversObject<{
  configMapKeyRef?: Resolver<Maybe<ResolversTypes['V1ConfigMapKeySelector']>, ParentType, ContextType>;
  fieldRef?: Resolver<Maybe<ResolversTypes['V1ObjectFieldSelector']>, ParentType, ContextType>;
  resourceFieldRef?: Resolver<Maybe<ResolversTypes['V1ResourceFieldSelector']>, ParentType, ContextType>;
  secretKeyRef?: Resolver<Maybe<ResolversTypes['V1SecretKeySelector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ConfigMapKeySelectorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ConfigMapKeySelector'] = ResolversParentTypes['V1ConfigMapKeySelector']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ObjectFieldSelectorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ObjectFieldSelector'] = ResolversParentTypes['V1ObjectFieldSelector']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ResourceFieldSelectorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ResourceFieldSelector'] = ResolversParentTypes['V1ResourceFieldSelector']> = ResolversObject<{
  containerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  divisor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SecretKeySelectorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SecretKeySelector'] = ResolversParentTypes['V1SecretKeySelector']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EnvFromSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EnvFromSource'] = ResolversParentTypes['V1EnvFromSource']> = ResolversObject<{
  configMapRef?: Resolver<Maybe<ResolversTypes['V1ConfigMapEnvSource']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1SecretEnvSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ConfigMapEnvSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ConfigMapEnvSource'] = ResolversParentTypes['V1ConfigMapEnvSource']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SecretEnvSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SecretEnvSource'] = ResolversParentTypes['V1SecretEnvSource']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1LifecycleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Lifecycle'] = ResolversParentTypes['V1Lifecycle']> = ResolversObject<{
  postStart?: Resolver<Maybe<ResolversTypes['V1LifecycleHandler']>, ParentType, ContextType>;
  preStop?: Resolver<Maybe<ResolversTypes['V1LifecycleHandler']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1LifecycleHandlerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1LifecycleHandler'] = ResolversParentTypes['V1LifecycleHandler']> = ResolversObject<{
  exec?: Resolver<Maybe<ResolversTypes['V1ExecAction']>, ParentType, ContextType>;
  httpGet?: Resolver<Maybe<ResolversTypes['V1HTTPGetAction']>, ParentType, ContextType>;
  tcpSocket?: Resolver<Maybe<ResolversTypes['V1TCPSocketAction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ExecActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ExecAction'] = ResolversParentTypes['V1ExecAction']> = ResolversObject<{
  command?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1HTTPGetActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1HTTPGetAction'] = ResolversParentTypes['V1HTTPGetAction']> = ResolversObject<{
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  httpHeaders?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1HTTPHeader']>>>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1HTTPHeaderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1HTTPHeader'] = ResolversParentTypes['V1HTTPHeader']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1TCPSocketActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1TCPSocketAction'] = ResolversParentTypes['V1TCPSocketAction']> = ResolversObject<{
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ProbeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Probe'] = ResolversParentTypes['V1Probe']> = ResolversObject<{
  exec?: Resolver<Maybe<ResolversTypes['V1ExecAction']>, ParentType, ContextType>;
  failureThreshold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grpc?: Resolver<Maybe<ResolversTypes['V1GRPCAction']>, ParentType, ContextType>;
  httpGet?: Resolver<Maybe<ResolversTypes['V1HTTPGetAction']>, ParentType, ContextType>;
  initialDelaySeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  periodSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  successThreshold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tcpSocket?: Resolver<Maybe<ResolversTypes['V1TCPSocketAction']>, ParentType, ContextType>;
  terminationGracePeriodSeconds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timeoutSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1GRPCActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1GRPCAction'] = ResolversParentTypes['V1GRPCAction']> = ResolversObject<{
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  service?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ContainerPortResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ContainerPort'] = ResolversParentTypes['V1ContainerPort']> = ResolversObject<{
  containerPort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hostIP?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostPort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ResourceRequirementsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ResourceRequirements'] = ResolversParentTypes['V1ResourceRequirements']> = ResolversObject<{
  limits?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  requests?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SecurityContextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SecurityContext'] = ResolversParentTypes['V1SecurityContext']> = ResolversObject<{
  allowPrivilegeEscalation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  capabilities?: Resolver<Maybe<ResolversTypes['V1Capabilities']>, ParentType, ContextType>;
  privileged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  procMount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnlyRootFilesystem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runAsGroup?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  runAsNonRoot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runAsUser?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  seLinuxOptions?: Resolver<Maybe<ResolversTypes['V1SELinuxOptions']>, ParentType, ContextType>;
  seccompProfile?: Resolver<Maybe<ResolversTypes['V1SeccompProfile']>, ParentType, ContextType>;
  windowsOptions?: Resolver<Maybe<ResolversTypes['V1WindowsSecurityContextOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1CapabilitiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Capabilities'] = ResolversParentTypes['V1Capabilities']> = ResolversObject<{
  add?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  drop?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SELinuxOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SELinuxOptions'] = ResolversParentTypes['V1SELinuxOptions']> = ResolversObject<{
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SeccompProfileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SeccompProfile'] = ResolversParentTypes['V1SeccompProfile']> = ResolversObject<{
  localhostProfile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1WindowsSecurityContextOptionsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1WindowsSecurityContextOptions'] = ResolversParentTypes['V1WindowsSecurityContextOptions']> = ResolversObject<{
  gmsaCredentialSpec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gmsaCredentialSpecName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hostProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runAsUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1VolumeDeviceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1VolumeDevice'] = ResolversParentTypes['V1VolumeDevice']> = ResolversObject<{
  devicePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1VolumeMountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1VolumeMount'] = ResolversParentTypes['V1VolumeMount']> = ResolversObject<{
  mountPath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mountPropagation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  subPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subPathExpr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodSpec'] = ResolversParentTypes['V1PodSpec']> = ResolversObject<{
  activeDeadlineSeconds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  affinity?: Resolver<Maybe<ResolversTypes['V1Affinity']>, ParentType, ContextType>;
  automountServiceAccountToken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  containers?: Resolver<Array<Maybe<ResolversTypes['V1Container']>>, ParentType, ContextType>;
  dnsConfig?: Resolver<Maybe<ResolversTypes['V1PodDNSConfig']>, ParentType, ContextType>;
  dnsPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableServiceLinks?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ephemeralContainers?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1EphemeralContainer']>>>, ParentType, ContextType>;
  hostAliases?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1HostAlias']>>>, ParentType, ContextType>;
  hostIPC?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hostNetwork?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hostPID?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hostname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePullSecrets?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1LocalObjectReference']>>>, ParentType, ContextType>;
  initContainers?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Container']>>>, ParentType, ContextType>;
  nodeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeSelector?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  os?: Resolver<Maybe<ResolversTypes['V1PodOS']>, ParentType, ContextType>;
  overhead?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  preemptionPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priorityClassName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readinessGates?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1PodReadinessGate']>>>, ParentType, ContextType>;
  restartPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtimeClassName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schedulerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  securityContext?: Resolver<Maybe<ResolversTypes['V1PodSecurityContext']>, ParentType, ContextType>;
  serviceAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceAccountName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  setHostnameAsFQDN?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shareProcessNamespace?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  subdomain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminationGracePeriodSeconds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tolerations?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Toleration']>>>, ParentType, ContextType>;
  topologySpreadConstraints?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1TopologySpreadConstraint']>>>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Volume']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1AffinityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Affinity'] = ResolversParentTypes['V1Affinity']> = ResolversObject<{
  nodeAffinity?: Resolver<Maybe<ResolversTypes['V1NodeAffinity']>, ParentType, ContextType>;
  podAffinity?: Resolver<Maybe<ResolversTypes['V1PodAffinity']>, ParentType, ContextType>;
  podAntiAffinity?: Resolver<Maybe<ResolversTypes['V1PodAntiAffinity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1NodeAffinityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1NodeAffinity'] = ResolversParentTypes['V1NodeAffinity']> = ResolversObject<{
  preferredDuringSchedulingIgnoredDuringExecution?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1PreferredSchedulingTerm']>>>, ParentType, ContextType>;
  requiredDuringSchedulingIgnoredDuringExecution?: Resolver<Maybe<ResolversTypes['V1NodeSelector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PreferredSchedulingTermResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PreferredSchedulingTerm'] = ResolversParentTypes['V1PreferredSchedulingTerm']> = ResolversObject<{
  preference?: Resolver<ResolversTypes['V1NodeSelectorTerm'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1NodeSelectorTermResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1NodeSelectorTerm'] = ResolversParentTypes['V1NodeSelectorTerm']> = ResolversObject<{
  matchExpressions?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1NodeSelectorRequirement']>>>, ParentType, ContextType>;
  matchFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1NodeSelectorRequirement']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1NodeSelectorRequirementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1NodeSelectorRequirement'] = ResolversParentTypes['V1NodeSelectorRequirement']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1NodeSelectorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1NodeSelector'] = ResolversParentTypes['V1NodeSelector']> = ResolversObject<{
  nodeSelectorTerms?: Resolver<Array<Maybe<ResolversTypes['V1NodeSelectorTerm']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodAffinityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodAffinity'] = ResolversParentTypes['V1PodAffinity']> = ResolversObject<{
  preferredDuringSchedulingIgnoredDuringExecution?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1WeightedPodAffinityTerm']>>>, ParentType, ContextType>;
  requiredDuringSchedulingIgnoredDuringExecution?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1PodAffinityTerm']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1WeightedPodAffinityTermResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1WeightedPodAffinityTerm'] = ResolversParentTypes['V1WeightedPodAffinityTerm']> = ResolversObject<{
  podAffinityTerm?: Resolver<ResolversTypes['V1PodAffinityTerm'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodAffinityTermResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodAffinityTerm'] = ResolversParentTypes['V1PodAffinityTerm']> = ResolversObject<{
  labelSelector?: Resolver<Maybe<ResolversTypes['V1LabelSelector']>, ParentType, ContextType>;
  namespaceSelector?: Resolver<Maybe<ResolversTypes['V1LabelSelector']>, ParentType, ContextType>;
  namespaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  topologyKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1LabelSelectorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1LabelSelector'] = ResolversParentTypes['V1LabelSelector']> = ResolversObject<{
  matchExpressions?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1LabelSelectorRequirement']>>>, ParentType, ContextType>;
  matchLabels?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1LabelSelectorRequirementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1LabelSelectorRequirement'] = ResolversParentTypes['V1LabelSelectorRequirement']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodAntiAffinityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodAntiAffinity'] = ResolversParentTypes['V1PodAntiAffinity']> = ResolversObject<{
  preferredDuringSchedulingIgnoredDuringExecution?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1WeightedPodAffinityTerm']>>>, ParentType, ContextType>;
  requiredDuringSchedulingIgnoredDuringExecution?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1PodAffinityTerm']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodDNSConfigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodDNSConfig'] = ResolversParentTypes['V1PodDNSConfig']> = ResolversObject<{
  nameservers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1PodDNSConfigOption']>>>, ParentType, ContextType>;
  searches?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodDNSConfigOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodDNSConfigOption'] = ResolversParentTypes['V1PodDNSConfigOption']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EphemeralContainerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EphemeralContainer'] = ResolversParentTypes['V1EphemeralContainer']> = ResolversObject<{
  args?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  command?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  env?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1EnvVar']>>>, ParentType, ContextType>;
  envFrom?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1EnvFromSource']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePullPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lifecycle?: Resolver<Maybe<ResolversTypes['V1Lifecycle']>, ParentType, ContextType>;
  livenessProbe?: Resolver<Maybe<ResolversTypes['V1Probe']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ports?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1ContainerPort']>>>, ParentType, ContextType>;
  readinessProbe?: Resolver<Maybe<ResolversTypes['V1Probe']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<ResolversTypes['V1ResourceRequirements']>, ParentType, ContextType>;
  securityContext?: Resolver<Maybe<ResolversTypes['V1SecurityContext']>, ParentType, ContextType>;
  startupProbe?: Resolver<Maybe<ResolversTypes['V1Probe']>, ParentType, ContextType>;
  stdin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  stdinOnce?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  targetContainerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminationMessagePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terminationMessagePolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  volumeDevices?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1VolumeDevice']>>>, ParentType, ContextType>;
  volumeMounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1VolumeMount']>>>, ParentType, ContextType>;
  workingDir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1HostAliasResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1HostAlias'] = ResolversParentTypes['V1HostAlias']> = ResolversObject<{
  hostnames?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1LocalObjectReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1LocalObjectReference'] = ResolversParentTypes['V1LocalObjectReference']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodOSResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodOS'] = ResolversParentTypes['V1PodOS']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodReadinessGateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodReadinessGate'] = ResolversParentTypes['V1PodReadinessGate']> = ResolversObject<{
  conditionType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PodSecurityContextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PodSecurityContext'] = ResolversParentTypes['V1PodSecurityContext']> = ResolversObject<{
  fsGroup?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fsGroupChangePolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runAsGroup?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  runAsNonRoot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  runAsUser?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  seLinuxOptions?: Resolver<Maybe<ResolversTypes['V1SELinuxOptions']>, ParentType, ContextType>;
  seccompProfile?: Resolver<Maybe<ResolversTypes['V1SeccompProfile']>, ParentType, ContextType>;
  supplementalGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  sysctls?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1Sysctl']>>>, ParentType, ContextType>;
  windowsOptions?: Resolver<Maybe<ResolversTypes['V1WindowsSecurityContextOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SysctlResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Sysctl'] = ResolversParentTypes['V1Sysctl']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1TolerationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Toleration'] = ResolversParentTypes['V1Toleration']> = ResolversObject<{
  effect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tolerationSeconds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1TopologySpreadConstraintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1TopologySpreadConstraint'] = ResolversParentTypes['V1TopologySpreadConstraint']> = ResolversObject<{
  labelSelector?: Resolver<Maybe<ResolversTypes['V1LabelSelector']>, ParentType, ContextType>;
  maxSkew?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  topologyKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  whenUnsatisfiable?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1VolumeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Volume'] = ResolversParentTypes['V1Volume']> = ResolversObject<{
  awsElasticBlockStore?: Resolver<Maybe<ResolversTypes['V1AWSElasticBlockStoreVolumeSource']>, ParentType, ContextType>;
  azureDisk?: Resolver<Maybe<ResolversTypes['V1AzureDiskVolumeSource']>, ParentType, ContextType>;
  azureFile?: Resolver<Maybe<ResolversTypes['V1AzureFileVolumeSource']>, ParentType, ContextType>;
  cephfs?: Resolver<Maybe<ResolversTypes['V1CephFSVolumeSource']>, ParentType, ContextType>;
  cinder?: Resolver<Maybe<ResolversTypes['V1CinderVolumeSource']>, ParentType, ContextType>;
  configMap?: Resolver<Maybe<ResolversTypes['V1ConfigMapVolumeSource']>, ParentType, ContextType>;
  csi?: Resolver<Maybe<ResolversTypes['V1CSIVolumeSource']>, ParentType, ContextType>;
  downwardAPI?: Resolver<Maybe<ResolversTypes['V1DownwardAPIVolumeSource']>, ParentType, ContextType>;
  emptyDir?: Resolver<Maybe<ResolversTypes['V1EmptyDirVolumeSource']>, ParentType, ContextType>;
  ephemeral?: Resolver<Maybe<ResolversTypes['V1EphemeralVolumeSource']>, ParentType, ContextType>;
  fc?: Resolver<Maybe<ResolversTypes['V1FCVolumeSource']>, ParentType, ContextType>;
  flexVolume?: Resolver<Maybe<ResolversTypes['V1FlexVolumeSource']>, ParentType, ContextType>;
  flocker?: Resolver<Maybe<ResolversTypes['V1FlockerVolumeSource']>, ParentType, ContextType>;
  gcePersistentDisk?: Resolver<Maybe<ResolversTypes['V1GCEPersistentDiskVolumeSource']>, ParentType, ContextType>;
  gitRepo?: Resolver<Maybe<ResolversTypes['V1GitRepoVolumeSource']>, ParentType, ContextType>;
  glusterfs?: Resolver<Maybe<ResolversTypes['V1GlusterfsVolumeSource']>, ParentType, ContextType>;
  hostPath?: Resolver<Maybe<ResolversTypes['V1HostPathVolumeSource']>, ParentType, ContextType>;
  iscsi?: Resolver<Maybe<ResolversTypes['V1ISCSIVolumeSource']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nfs?: Resolver<Maybe<ResolversTypes['V1NFSVolumeSource']>, ParentType, ContextType>;
  persistentVolumeClaim?: Resolver<Maybe<ResolversTypes['V1PersistentVolumeClaimVolumeSource']>, ParentType, ContextType>;
  photonPersistentDisk?: Resolver<Maybe<ResolversTypes['V1PhotonPersistentDiskVolumeSource']>, ParentType, ContextType>;
  portworxVolume?: Resolver<Maybe<ResolversTypes['V1PortworxVolumeSource']>, ParentType, ContextType>;
  projected?: Resolver<Maybe<ResolversTypes['V1ProjectedVolumeSource']>, ParentType, ContextType>;
  quobyte?: Resolver<Maybe<ResolversTypes['V1QuobyteVolumeSource']>, ParentType, ContextType>;
  rbd?: Resolver<Maybe<ResolversTypes['V1RBDVolumeSource']>, ParentType, ContextType>;
  scaleIO?: Resolver<Maybe<ResolversTypes['V1ScaleIOVolumeSource']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['V1SecretVolumeSource']>, ParentType, ContextType>;
  storageos?: Resolver<Maybe<ResolversTypes['V1StorageOSVolumeSource']>, ParentType, ContextType>;
  vsphereVolume?: Resolver<Maybe<ResolversTypes['V1VsphereVirtualDiskVolumeSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1AWSElasticBlockStoreVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1AWSElasticBlockStoreVolumeSource'] = ResolversParentTypes['V1AWSElasticBlockStoreVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  volumeID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1AzureDiskVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1AzureDiskVolumeSource'] = ResolversParentTypes['V1AzureDiskVolumeSource']> = ResolversObject<{
  cachingMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diskName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  diskURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1AzureFileVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1AzureFileVolumeSource'] = ResolversParentTypes['V1AzureFileVolumeSource']> = ResolversObject<{
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shareName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1CephFSVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1CephFSVolumeSource'] = ResolversParentTypes['V1CephFSVolumeSource']> = ResolversObject<{
  monitors?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1CinderVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1CinderVolumeSource'] = ResolversParentTypes['V1CinderVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  volumeID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ConfigMapVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ConfigMapVolumeSource'] = ResolversParentTypes['V1ConfigMapVolumeSource']> = ResolversObject<{
  defaultMode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1KeyToPath']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1KeyToPathResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1KeyToPath'] = ResolversParentTypes['V1KeyToPath']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1CSIVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1CSIVolumeSource'] = ResolversParentTypes['V1CSIVolumeSource']> = ResolversObject<{
  driver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodePublishSecretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  volumeAttributes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1DownwardAPIVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1DownwardAPIVolumeSource'] = ResolversParentTypes['V1DownwardAPIVolumeSource']> = ResolversObject<{
  defaultMode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1DownwardAPIVolumeFile']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1DownwardAPIVolumeFileResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1DownwardAPIVolumeFile'] = ResolversParentTypes['V1DownwardAPIVolumeFile']> = ResolversObject<{
  fieldRef?: Resolver<Maybe<ResolversTypes['V1ObjectFieldSelector']>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resourceFieldRef?: Resolver<Maybe<ResolversTypes['V1ResourceFieldSelector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EmptyDirVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EmptyDirVolumeSource'] = ResolversParentTypes['V1EmptyDirVolumeSource']> = ResolversObject<{
  medium?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizeLimit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EphemeralVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EphemeralVolumeSource'] = ResolversParentTypes['V1EphemeralVolumeSource']> = ResolversObject<{
  volumeClaimTemplate?: Resolver<Maybe<ResolversTypes['V1PersistentVolumeClaimTemplate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PersistentVolumeClaimTemplateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PersistentVolumeClaimTemplate'] = ResolversParentTypes['V1PersistentVolumeClaimTemplate']> = ResolversObject<{
  metadata?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1PersistentVolumeClaimSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PersistentVolumeClaimSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PersistentVolumeClaimSpec'] = ResolversParentTypes['V1PersistentVolumeClaimSpec']> = ResolversObject<{
  accessModes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  dataSource?: Resolver<Maybe<ResolversTypes['V1TypedLocalObjectReference']>, ParentType, ContextType>;
  dataSourceRef?: Resolver<Maybe<ResolversTypes['V1TypedLocalObjectReference']>, ParentType, ContextType>;
  resources?: Resolver<Maybe<ResolversTypes['V1ResourceRequirements']>, ParentType, ContextType>;
  selector?: Resolver<Maybe<ResolversTypes['V1LabelSelector']>, ParentType, ContextType>;
  storageClassName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1TypedLocalObjectReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1TypedLocalObjectReference'] = ResolversParentTypes['V1TypedLocalObjectReference']> = ResolversObject<{
  apiGroup?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FCVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1FCVolumeSource'] = ResolversParentTypes['V1FCVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lun?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  targetWWNs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  wwids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FlexVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1FlexVolumeSource'] = ResolversParentTypes['V1FlexVolumeSource']> = ResolversObject<{
  driver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FlockerVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1FlockerVolumeSource'] = ResolversParentTypes['V1FlockerVolumeSource']> = ResolversObject<{
  datasetName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  datasetUUID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1GCEPersistentDiskVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1GCEPersistentDiskVolumeSource'] = ResolversParentTypes['V1GCEPersistentDiskVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partition?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pdName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1GitRepoVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1GitRepoVolumeSource'] = ResolversParentTypes['V1GitRepoVolumeSource']> = ResolversObject<{
  directory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repository?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  revision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1GlusterfsVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1GlusterfsVolumeSource'] = ResolversParentTypes['V1GlusterfsVolumeSource']> = ResolversObject<{
  endpoints?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1HostPathVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1HostPathVolumeSource'] = ResolversParentTypes['V1HostPathVolumeSource']> = ResolversObject<{
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ISCSIVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ISCSIVolumeSource'] = ResolversParentTypes['V1ISCSIVolumeSource']> = ResolversObject<{
  chapAuthDiscovery?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  chapAuthSession?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initiatorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iqn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  iscsiInterface?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lun?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  portals?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  targetPortal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1NFSVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1NFSVolumeSource'] = ResolversParentTypes['V1NFSVolumeSource']> = ResolversObject<{
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  server?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PersistentVolumeClaimVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PersistentVolumeClaimVolumeSource'] = ResolversParentTypes['V1PersistentVolumeClaimVolumeSource']> = ResolversObject<{
  claimName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PhotonPersistentDiskVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PhotonPersistentDiskVolumeSource'] = ResolversParentTypes['V1PhotonPersistentDiskVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PortworxVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PortworxVolumeSource'] = ResolversParentTypes['V1PortworxVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  volumeID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ProjectedVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ProjectedVolumeSource'] = ResolversParentTypes['V1ProjectedVolumeSource']> = ResolversObject<{
  defaultMode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sources?: Resolver<Array<Maybe<ResolversTypes['V1VolumeProjection']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1VolumeProjectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1VolumeProjection'] = ResolversParentTypes['V1VolumeProjection']> = ResolversObject<{
  configMap?: Resolver<Maybe<ResolversTypes['V1ConfigMapProjection']>, ParentType, ContextType>;
  downwardAPI?: Resolver<Maybe<ResolversTypes['V1DownwardAPIProjection']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['V1SecretProjection']>, ParentType, ContextType>;
  serviceAccountToken?: Resolver<Maybe<ResolversTypes['V1ServiceAccountTokenProjection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ConfigMapProjectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ConfigMapProjection'] = ResolversParentTypes['V1ConfigMapProjection']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1KeyToPath']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1DownwardAPIProjectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1DownwardAPIProjection'] = ResolversParentTypes['V1DownwardAPIProjection']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1DownwardAPIVolumeFile']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SecretProjectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SecretProjection'] = ResolversParentTypes['V1SecretProjection']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1KeyToPath']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ServiceAccountTokenProjectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ServiceAccountTokenProjection'] = ResolversParentTypes['V1ServiceAccountTokenProjection']> = ResolversObject<{
  audience?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationSeconds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1QuobyteVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1QuobyteVolumeSource'] = ResolversParentTypes['V1QuobyteVolumeSource']> = ResolversObject<{
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  registry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1RBDVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1RBDVolumeSource'] = ResolversParentTypes['V1RBDVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  keyring?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monitors?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ScaleIOVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ScaleIOVolumeSource'] = ResolversParentTypes['V1ScaleIOVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gateway?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protectionDomain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretRef?: Resolver<ResolversTypes['V1LocalObjectReference'], ParentType, ContextType>;
  sslEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  storageMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storagePool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  system?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volumeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SecretVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SecretVolumeSource'] = ResolversParentTypes['V1SecretVolumeSource']> = ResolversObject<{
  defaultMode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1KeyToPath']>>>, ParentType, ContextType>;
  optional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1StorageOSVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1StorageOSVolumeSource'] = ResolversParentTypes['V1StorageOSVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secretRef?: Resolver<Maybe<ResolversTypes['V1LocalObjectReference']>, ParentType, ContextType>;
  volumeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeNamespace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1VsphereVirtualDiskVolumeSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1VsphereVirtualDiskVolumeSource'] = ResolversParentTypes['V1VsphereVirtualDiskVolumeSource']> = ResolversObject<{
  fsType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storagePolicyID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storagePolicyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1RuntimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Runtime'] = ResolversParentTypes['V1Runtime']> = ResolversObject<{
  container?: Resolver<Maybe<ResolversTypes['V1Container']>, ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  podspec?: Resolver<Maybe<ResolversTypes['V1PodSpec']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FunctionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Function'] = ResolversParentTypes['V1Function']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1FunctionSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FunctionSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1FunctionSpec'] = ResolversParentTypes['V1FunctionSpec']> = ResolversObject<{
  concurrency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  configmaps?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1ConfigMapReference']>>>, ParentType, ContextType>;
  environment?: Resolver<ResolversTypes['V1EnvironmentReference'], ParentType, ContextType>;
  functionTimeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  idletimeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  invokeStrategy?: Resolver<ResolversTypes['V1InvokeStrategy'], ParentType, ContextType>;
  onceOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  package?: Resolver<ResolversTypes['V1FunctionPackageRef'], ParentType, ContextType>;
  podspec?: Resolver<Maybe<ResolversTypes['V1PodSpec']>, ParentType, ContextType>;
  requestsPerPod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['V1ResourceRequirements'], ParentType, ContextType>;
  secrets?: Resolver<Maybe<Array<Maybe<ResolversTypes['V1SecretReference']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ConfigMapReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ConfigMapReference'] = ResolversParentTypes['V1ConfigMapReference']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1EnvironmentReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1EnvironmentReference'] = ResolversParentTypes['V1EnvironmentReference']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1InvokeStrategyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1InvokeStrategy'] = ResolversParentTypes['V1InvokeStrategy']> = ResolversObject<{
  executionStrategy?: Resolver<ResolversTypes['V1ExecutionStrategy'], ParentType, ContextType>;
  strategyType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ExecutionStrategyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1ExecutionStrategy'] = ResolversParentTypes['V1ExecutionStrategy']> = ResolversObject<{
  executorType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hpaBehavior?: Resolver<Maybe<ResolversTypes['V2beta2HorizontalPodAutoscalerBehavior']>, ParentType, ContextType>;
  hpaMetrics?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2beta2MetricSpec']>>>, ParentType, ContextType>;
  maxScale?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minScale?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specializationTimeout?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetCPUPercent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2HorizontalPodAutoscalerBehaviorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2HorizontalPodAutoscalerBehavior'] = ResolversParentTypes['V2beta2HorizontalPodAutoscalerBehavior']> = ResolversObject<{
  scaleDown?: Resolver<Maybe<ResolversTypes['V2beta2HPAScalingRules']>, ParentType, ContextType>;
  scaleUp?: Resolver<Maybe<ResolversTypes['V2beta2HPAScalingRules']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2HPAScalingRulesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2HPAScalingRules'] = ResolversParentTypes['V2beta2HPAScalingRules']> = ResolversObject<{
  policies?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2beta2HPAScalingPolicy']>>>, ParentType, ContextType>;
  selectPolicy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stabilizationWindowSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2HPAScalingPolicyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2HPAScalingPolicy'] = ResolversParentTypes['V2beta2HPAScalingPolicy']> = ResolversObject<{
  periodSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2MetricSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2MetricSpec'] = ResolversParentTypes['V2beta2MetricSpec']> = ResolversObject<{
  containerResource?: Resolver<Maybe<ResolversTypes['V2beta2ContainerResourceMetricSource']>, ParentType, ContextType>;
  external?: Resolver<Maybe<ResolversTypes['V2beta2ExternalMetricSource']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['V2beta2ObjectMetricSource']>, ParentType, ContextType>;
  pods?: Resolver<Maybe<ResolversTypes['V2beta2PodsMetricSource']>, ParentType, ContextType>;
  resource?: Resolver<Maybe<ResolversTypes['V2beta2ResourceMetricSource']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2ContainerResourceMetricSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2ContainerResourceMetricSource'] = ResolversParentTypes['V2beta2ContainerResourceMetricSource']> = ResolversObject<{
  container?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['V2beta2MetricTarget'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2MetricTargetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2MetricTarget'] = ResolversParentTypes['V2beta2MetricTarget']> = ResolversObject<{
  averageUtilization?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  averageValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2ExternalMetricSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2ExternalMetricSource'] = ResolversParentTypes['V2beta2ExternalMetricSource']> = ResolversObject<{
  metric?: Resolver<ResolversTypes['V2beta2MetricIdentifier'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['V2beta2MetricTarget'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2MetricIdentifierResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2MetricIdentifier'] = ResolversParentTypes['V2beta2MetricIdentifier']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  selector?: Resolver<Maybe<ResolversTypes['V1LabelSelector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2ObjectMetricSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2ObjectMetricSource'] = ResolversParentTypes['V2beta2ObjectMetricSource']> = ResolversObject<{
  describedObject?: Resolver<ResolversTypes['V2beta2CrossVersionObjectReference'], ParentType, ContextType>;
  metric?: Resolver<ResolversTypes['V2beta2MetricIdentifier'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['V2beta2MetricTarget'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2CrossVersionObjectReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2CrossVersionObjectReference'] = ResolversParentTypes['V2beta2CrossVersionObjectReference']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2PodsMetricSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2PodsMetricSource'] = ResolversParentTypes['V2beta2PodsMetricSource']> = ResolversObject<{
  metric?: Resolver<ResolversTypes['V2beta2MetricIdentifier'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['V2beta2MetricTarget'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V2beta2ResourceMetricSourceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2beta2ResourceMetricSource'] = ResolversParentTypes['V2beta2ResourceMetricSource']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['V2beta2MetricTarget'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FunctionPackageRefResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1FunctionPackageRef'] = ResolversParentTypes['V1FunctionPackageRef']> = ResolversObject<{
  functionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packageref?: Resolver<ResolversTypes['V1PackageRef'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PackageRefResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PackageRef'] = ResolversParentTypes['V1PackageRef']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resourceversion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1SecretReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1SecretReference'] = ResolversParentTypes['V1SecretReference']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1HTTPTriggerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1HTTPTrigger'] = ResolversParentTypes['V1HTTPTrigger']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1HTTPTriggerSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1HTTPTriggerSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1HTTPTriggerSpec'] = ResolversParentTypes['V1HTTPTriggerSpec']> = ResolversObject<{
  createingress?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  functionref?: Resolver<ResolversTypes['V1FunctionReference'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ingressconfig?: Resolver<ResolversTypes['V1IngressConfig'], ParentType, ContextType>;
  keepPrefix?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relativeurl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1FunctionReferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1FunctionReference'] = ResolversParentTypes['V1FunctionReference']> = ResolversObject<{
  functionweights?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1IngressConfigResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1IngressConfig'] = ResolversParentTypes['V1IngressConfig']> = ResolversObject<{
  annotations?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tls?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1MessageQueueTriggerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1MessageQueueTrigger'] = ResolversParentTypes['V1MessageQueueTrigger']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1MessageQueueTriggerSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1MessageQueueTriggerSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1MessageQueueTriggerSpec'] = ResolversParentTypes['V1MessageQueueTriggerSpec']> = ResolversObject<{
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cooldownPeriod?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  errorTopic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  functionref?: Resolver<ResolversTypes['V1FunctionReference'], ParentType, ContextType>;
  maxReplicaCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxRetries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messageQueueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  minReplicaCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mqtkind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  podspec?: Resolver<Maybe<ResolversTypes['V1PodSpec']>, ParentType, ContextType>;
  pollingInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  respTopic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topic?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PackageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Package'] = ResolversParentTypes['V1Package']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1PackageSpec'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['V1PackageStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PackageSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PackageSpec'] = ResolversParentTypes['V1PackageSpec']> = ResolversObject<{
  buildcmd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deployment?: Resolver<Maybe<ResolversTypes['V1Archive']>, ParentType, ContextType>;
  environment?: Resolver<ResolversTypes['V1EnvironmentReference'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['V1Archive']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ArchiveResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Archive'] = ResolversParentTypes['V1Archive']> = ResolversObject<{
  checksum?: Resolver<Maybe<ResolversTypes['V1Checksum']>, ParentType, ContextType>;
  literal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1ChecksumResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1Checksum'] = ResolversParentTypes['V1Checksum']> = ResolversObject<{
  sum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1PackageStatusResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1PackageStatus'] = ResolversParentTypes['V1PackageStatus']> = ResolversObject<{
  buildlog?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buildstatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdateTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1TimeTriggerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1TimeTrigger'] = ResolversParentTypes['V1TimeTrigger']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1TimeTriggerSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1TimeTriggerSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1TimeTriggerSpec'] = ResolversParentTypes['V1TimeTriggerSpec']> = ResolversObject<{
  cron?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  functionref?: Resolver<ResolversTypes['V1FunctionReference'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1KubernetesWatchTriggerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1KubernetesWatchTrigger'] = ResolversParentTypes['V1KubernetesWatchTrigger']> = ResolversObject<{
  apiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['V1ObjectMeta'], ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['V1KubernetesWatchTriggerSpec'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type V1KubernetesWatchTriggerSpecResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V1KubernetesWatchTriggerSpec'] = ResolversParentTypes['V1KubernetesWatchTriggerSpec']> = ResolversObject<{
  functionref?: Resolver<ResolversTypes['V1FunctionReference'], ParentType, ContextType>;
  labelselector?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createArchives?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  createCanaryConfigs?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateCanaryConfigsArgs, 'v1CanaryConfigInput'>>;
  createEnvironments?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateEnvironmentsArgs, 'v1EnvironmentInput'>>;
  createFunctions?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateFunctionsArgs, 'v1FunctionInput'>>;
  createHttps?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateHttpsArgs, 'v1HTTPTriggerInput'>>;
  createMessagequeues?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateMessagequeuesArgs, 'v1MessageQueueTriggerInput'>>;
  createPackages?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreatePackagesArgs, 'v1PackageInput'>>;
  createTimes?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateTimesArgs, 'v1TimeTriggerInput'>>;
  createWatches?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationcreateWatchesArgs, 'v1KubernetesWatchTriggerInput'>>;
  deleteArchives?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  deleteCanaryConfig?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteCanaryConfigArgs, 'canaryConfig'>>;
  deleteEnvironment?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteEnvironmentArgs, 'environment'>>;
  deleteFunction?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteFunctionArgs, 'function'>>;
  deleteHttp?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteHttpArgs, 'httpTrigger'>>;
  deleteMessagequeue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteMessagequeueArgs, 'mqTrigger'>>;
  deletePackage?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeletePackageArgs, 'package'>>;
  deleteTime?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteTimeArgs, 'timeTrigger'>>;
  deleteWatch?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteWatchArgs, 'watch'>>;
  updateCanaryConfig?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateCanaryConfigArgs, 'canaryConfig' | 'v1CanaryConfigInput'>>;
  updateEnvironment?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateEnvironmentArgs, 'environment' | 'v1EnvironmentInput'>>;
  updateFunction?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateFunctionArgs, 'function' | 'v1FunctionInput'>>;
  updateHttp?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateHttpArgs, 'httpTrigger' | 'v1HTTPTriggerInput'>>;
  updateMessagequeue?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateMessagequeueArgs, 'mqTrigger' | 'v1MessageQueueTriggerInput'>>;
  updatePackage?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdatePackageArgs, 'package' | 'v1PackageInput'>>;
  updateTime?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateTimeArgs, 'timeTrigger' | 'v1TimeTriggerInput'>>;
  updateWatch?: Resolver<Maybe<ResolversTypes['V1ObjectMeta']>, ParentType, ContextType, RequireFields<MutationupdateWatchArgs, 'v1KubernetesWatchTriggerInput' | 'watch'>>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  V1CanaryConfig?: V1CanaryConfigResolvers<ContextType>;
  V1ObjectMeta?: V1ObjectMetaResolvers<ContextType>;
  V1ManagedFieldsEntry?: V1ManagedFieldsEntryResolvers<ContextType>;
  V1OwnerReference?: V1OwnerReferenceResolvers<ContextType>;
  V1CanaryConfigSpec?: V1CanaryConfigSpecResolvers<ContextType>;
  V1CanaryConfigStatus?: V1CanaryConfigStatusResolvers<ContextType>;
  V1Environment?: V1EnvironmentResolvers<ContextType>;
  V1EnvironmentSpec?: V1EnvironmentSpecResolvers<ContextType>;
  V1Builder?: V1BuilderResolvers<ContextType>;
  V1Container?: V1ContainerResolvers<ContextType>;
  V1EnvVar?: V1EnvVarResolvers<ContextType>;
  V1EnvVarSource?: V1EnvVarSourceResolvers<ContextType>;
  V1ConfigMapKeySelector?: V1ConfigMapKeySelectorResolvers<ContextType>;
  V1ObjectFieldSelector?: V1ObjectFieldSelectorResolvers<ContextType>;
  V1ResourceFieldSelector?: V1ResourceFieldSelectorResolvers<ContextType>;
  V1SecretKeySelector?: V1SecretKeySelectorResolvers<ContextType>;
  V1EnvFromSource?: V1EnvFromSourceResolvers<ContextType>;
  V1ConfigMapEnvSource?: V1ConfigMapEnvSourceResolvers<ContextType>;
  V1SecretEnvSource?: V1SecretEnvSourceResolvers<ContextType>;
  V1Lifecycle?: V1LifecycleResolvers<ContextType>;
  V1LifecycleHandler?: V1LifecycleHandlerResolvers<ContextType>;
  V1ExecAction?: V1ExecActionResolvers<ContextType>;
  V1HTTPGetAction?: V1HTTPGetActionResolvers<ContextType>;
  V1HTTPHeader?: V1HTTPHeaderResolvers<ContextType>;
  V1TCPSocketAction?: V1TCPSocketActionResolvers<ContextType>;
  V1Probe?: V1ProbeResolvers<ContextType>;
  V1GRPCAction?: V1GRPCActionResolvers<ContextType>;
  V1ContainerPort?: V1ContainerPortResolvers<ContextType>;
  V1ResourceRequirements?: V1ResourceRequirementsResolvers<ContextType>;
  V1SecurityContext?: V1SecurityContextResolvers<ContextType>;
  V1Capabilities?: V1CapabilitiesResolvers<ContextType>;
  V1SELinuxOptions?: V1SELinuxOptionsResolvers<ContextType>;
  V1SeccompProfile?: V1SeccompProfileResolvers<ContextType>;
  V1WindowsSecurityContextOptions?: V1WindowsSecurityContextOptionsResolvers<ContextType>;
  V1VolumeDevice?: V1VolumeDeviceResolvers<ContextType>;
  V1VolumeMount?: V1VolumeMountResolvers<ContextType>;
  V1PodSpec?: V1PodSpecResolvers<ContextType>;
  V1Affinity?: V1AffinityResolvers<ContextType>;
  V1NodeAffinity?: V1NodeAffinityResolvers<ContextType>;
  V1PreferredSchedulingTerm?: V1PreferredSchedulingTermResolvers<ContextType>;
  V1NodeSelectorTerm?: V1NodeSelectorTermResolvers<ContextType>;
  V1NodeSelectorRequirement?: V1NodeSelectorRequirementResolvers<ContextType>;
  V1NodeSelector?: V1NodeSelectorResolvers<ContextType>;
  V1PodAffinity?: V1PodAffinityResolvers<ContextType>;
  V1WeightedPodAffinityTerm?: V1WeightedPodAffinityTermResolvers<ContextType>;
  V1PodAffinityTerm?: V1PodAffinityTermResolvers<ContextType>;
  V1LabelSelector?: V1LabelSelectorResolvers<ContextType>;
  V1LabelSelectorRequirement?: V1LabelSelectorRequirementResolvers<ContextType>;
  V1PodAntiAffinity?: V1PodAntiAffinityResolvers<ContextType>;
  V1PodDNSConfig?: V1PodDNSConfigResolvers<ContextType>;
  V1PodDNSConfigOption?: V1PodDNSConfigOptionResolvers<ContextType>;
  V1EphemeralContainer?: V1EphemeralContainerResolvers<ContextType>;
  V1HostAlias?: V1HostAliasResolvers<ContextType>;
  V1LocalObjectReference?: V1LocalObjectReferenceResolvers<ContextType>;
  V1PodOS?: V1PodOSResolvers<ContextType>;
  V1PodReadinessGate?: V1PodReadinessGateResolvers<ContextType>;
  V1PodSecurityContext?: V1PodSecurityContextResolvers<ContextType>;
  V1Sysctl?: V1SysctlResolvers<ContextType>;
  V1Toleration?: V1TolerationResolvers<ContextType>;
  V1TopologySpreadConstraint?: V1TopologySpreadConstraintResolvers<ContextType>;
  V1Volume?: V1VolumeResolvers<ContextType>;
  V1AWSElasticBlockStoreVolumeSource?: V1AWSElasticBlockStoreVolumeSourceResolvers<ContextType>;
  V1AzureDiskVolumeSource?: V1AzureDiskVolumeSourceResolvers<ContextType>;
  V1AzureFileVolumeSource?: V1AzureFileVolumeSourceResolvers<ContextType>;
  V1CephFSVolumeSource?: V1CephFSVolumeSourceResolvers<ContextType>;
  V1CinderVolumeSource?: V1CinderVolumeSourceResolvers<ContextType>;
  V1ConfigMapVolumeSource?: V1ConfigMapVolumeSourceResolvers<ContextType>;
  V1KeyToPath?: V1KeyToPathResolvers<ContextType>;
  V1CSIVolumeSource?: V1CSIVolumeSourceResolvers<ContextType>;
  V1DownwardAPIVolumeSource?: V1DownwardAPIVolumeSourceResolvers<ContextType>;
  V1DownwardAPIVolumeFile?: V1DownwardAPIVolumeFileResolvers<ContextType>;
  V1EmptyDirVolumeSource?: V1EmptyDirVolumeSourceResolvers<ContextType>;
  V1EphemeralVolumeSource?: V1EphemeralVolumeSourceResolvers<ContextType>;
  V1PersistentVolumeClaimTemplate?: V1PersistentVolumeClaimTemplateResolvers<ContextType>;
  V1PersistentVolumeClaimSpec?: V1PersistentVolumeClaimSpecResolvers<ContextType>;
  V1TypedLocalObjectReference?: V1TypedLocalObjectReferenceResolvers<ContextType>;
  V1FCVolumeSource?: V1FCVolumeSourceResolvers<ContextType>;
  V1FlexVolumeSource?: V1FlexVolumeSourceResolvers<ContextType>;
  V1FlockerVolumeSource?: V1FlockerVolumeSourceResolvers<ContextType>;
  V1GCEPersistentDiskVolumeSource?: V1GCEPersistentDiskVolumeSourceResolvers<ContextType>;
  V1GitRepoVolumeSource?: V1GitRepoVolumeSourceResolvers<ContextType>;
  V1GlusterfsVolumeSource?: V1GlusterfsVolumeSourceResolvers<ContextType>;
  V1HostPathVolumeSource?: V1HostPathVolumeSourceResolvers<ContextType>;
  V1ISCSIVolumeSource?: V1ISCSIVolumeSourceResolvers<ContextType>;
  V1NFSVolumeSource?: V1NFSVolumeSourceResolvers<ContextType>;
  V1PersistentVolumeClaimVolumeSource?: V1PersistentVolumeClaimVolumeSourceResolvers<ContextType>;
  V1PhotonPersistentDiskVolumeSource?: V1PhotonPersistentDiskVolumeSourceResolvers<ContextType>;
  V1PortworxVolumeSource?: V1PortworxVolumeSourceResolvers<ContextType>;
  V1ProjectedVolumeSource?: V1ProjectedVolumeSourceResolvers<ContextType>;
  V1VolumeProjection?: V1VolumeProjectionResolvers<ContextType>;
  V1ConfigMapProjection?: V1ConfigMapProjectionResolvers<ContextType>;
  V1DownwardAPIProjection?: V1DownwardAPIProjectionResolvers<ContextType>;
  V1SecretProjection?: V1SecretProjectionResolvers<ContextType>;
  V1ServiceAccountTokenProjection?: V1ServiceAccountTokenProjectionResolvers<ContextType>;
  V1QuobyteVolumeSource?: V1QuobyteVolumeSourceResolvers<ContextType>;
  V1RBDVolumeSource?: V1RBDVolumeSourceResolvers<ContextType>;
  V1ScaleIOVolumeSource?: V1ScaleIOVolumeSourceResolvers<ContextType>;
  V1SecretVolumeSource?: V1SecretVolumeSourceResolvers<ContextType>;
  V1StorageOSVolumeSource?: V1StorageOSVolumeSourceResolvers<ContextType>;
  V1VsphereVirtualDiskVolumeSource?: V1VsphereVirtualDiskVolumeSourceResolvers<ContextType>;
  V1Runtime?: V1RuntimeResolvers<ContextType>;
  V1Function?: V1FunctionResolvers<ContextType>;
  V1FunctionSpec?: V1FunctionSpecResolvers<ContextType>;
  V1ConfigMapReference?: V1ConfigMapReferenceResolvers<ContextType>;
  V1EnvironmentReference?: V1EnvironmentReferenceResolvers<ContextType>;
  V1InvokeStrategy?: V1InvokeStrategyResolvers<ContextType>;
  V1ExecutionStrategy?: V1ExecutionStrategyResolvers<ContextType>;
  V2beta2HorizontalPodAutoscalerBehavior?: V2beta2HorizontalPodAutoscalerBehaviorResolvers<ContextType>;
  V2beta2HPAScalingRules?: V2beta2HPAScalingRulesResolvers<ContextType>;
  V2beta2HPAScalingPolicy?: V2beta2HPAScalingPolicyResolvers<ContextType>;
  V2beta2MetricSpec?: V2beta2MetricSpecResolvers<ContextType>;
  V2beta2ContainerResourceMetricSource?: V2beta2ContainerResourceMetricSourceResolvers<ContextType>;
  V2beta2MetricTarget?: V2beta2MetricTargetResolvers<ContextType>;
  V2beta2ExternalMetricSource?: V2beta2ExternalMetricSourceResolvers<ContextType>;
  V2beta2MetricIdentifier?: V2beta2MetricIdentifierResolvers<ContextType>;
  V2beta2ObjectMetricSource?: V2beta2ObjectMetricSourceResolvers<ContextType>;
  V2beta2CrossVersionObjectReference?: V2beta2CrossVersionObjectReferenceResolvers<ContextType>;
  V2beta2PodsMetricSource?: V2beta2PodsMetricSourceResolvers<ContextType>;
  V2beta2ResourceMetricSource?: V2beta2ResourceMetricSourceResolvers<ContextType>;
  V1FunctionPackageRef?: V1FunctionPackageRefResolvers<ContextType>;
  V1PackageRef?: V1PackageRefResolvers<ContextType>;
  V1SecretReference?: V1SecretReferenceResolvers<ContextType>;
  V1HTTPTrigger?: V1HTTPTriggerResolvers<ContextType>;
  V1HTTPTriggerSpec?: V1HTTPTriggerSpecResolvers<ContextType>;
  V1FunctionReference?: V1FunctionReferenceResolvers<ContextType>;
  V1IngressConfig?: V1IngressConfigResolvers<ContextType>;
  V1MessageQueueTrigger?: V1MessageQueueTriggerResolvers<ContextType>;
  V1MessageQueueTriggerSpec?: V1MessageQueueTriggerSpecResolvers<ContextType>;
  V1Package?: V1PackageResolvers<ContextType>;
  V1PackageSpec?: V1PackageSpecResolvers<ContextType>;
  V1Archive?: V1ArchiveResolvers<ContextType>;
  V1Checksum?: V1ChecksumResolvers<ContextType>;
  V1PackageStatus?: V1PackageStatusResolvers<ContextType>;
  V1TimeTrigger?: V1TimeTriggerResolvers<ContextType>;
  V1TimeTriggerSpec?: V1TimeTriggerSpecResolvers<ContextType>;
  V1KubernetesWatchTrigger?: V1KubernetesWatchTriggerResolvers<ContextType>;
  V1KubernetesWatchTriggerSpec?: V1KubernetesWatchTriggerSpecResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace FissionTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  /**
   * Get archive
   *
   * Equivalent to GET /proxy/storage/v1/archive
   */
  getArchives?: Maybe<Scalars['JSON']>;
  /**
   * Get detail of canary config
   *
   * Equivalent to GET /v2/canaryconfigs/{canaryConfig}
   */
  getCanaryConfig?: Maybe<V1CanaryConfig>;
  /**
   * List all canary configs
   *
   * Equivalent to GET /v2/canaryconfigs
   */
  getCanaryConfigs?: Maybe<Array<Maybe<V1CanaryConfig>>>;
  /**
   * Get detail of environment
   *
   * Equivalent to GET /v2/environments/{environment}
   */
  getEnvironment?: Maybe<V1Environment>;
  /**
   * List all environments
   *
   * Equivalent to GET /v2/environments
   */
  getEnvironments?: Maybe<Array<Maybe<V1Environment>>>;
  /**
   * Get detail of function
   *
   * Equivalent to GET /v2/functions/{function}
   */
  getFunction?: Maybe<V1Function>;
  /**
   * List all functions
   *
   * Equivalent to GET /v2/functions
   */
  getFunctions?: Maybe<Array<Maybe<V1Function>>>;
  /**
   * Get detail of HTTP trigger
   *
   * Equivalent to GET /v2/triggers/http/{httpTrigger}
   */
  getHttp?: Maybe<V1HTTPTrigger>;
  /**
   * List all HTTP triggers
   *
   * Equivalent to GET /v2/triggers/http
   */
  getHttps?: Maybe<Array<Maybe<V1HTTPTrigger>>>;
  /**
   * Get detail of message queue trigger
   *
   * Equivalent to GET /v2/triggers/messagequeue/{mqTrigger}
   */
  getMessagequeue?: Maybe<V1MessageQueueTrigger>;
  /**
   * List all message queue triggers
   *
   * Equivalent to GET /v2/triggers/messagequeue
   */
  getMessagequeues?: Maybe<Array<Maybe<V1MessageQueueTrigger>>>;
  /**
   * Get detail of package
   *
   * Equivalent to GET /v2/packages/{package}
   */
  getPackage?: Maybe<V1Package>;
  /**
   * List all packages
   *
   * Equivalent to GET /v2/packages
   */
  getPackages?: Maybe<Array<Maybe<V1Package>>>;
  /**
   * Get detail of time trigger
   *
   * Equivalent to GET /v2/triggers/time/{timeTrigger}
   */
  getTime?: Maybe<V1TimeTrigger>;
  /**
   * List all time trigger
   *
   * Equivalent to GET /v2/triggers/time
   */
  getTimes?: Maybe<Array<Maybe<V1TimeTrigger>>>;
  /**
   * Get detail of kubernetes watch
   *
   * Equivalent to GET /v2/watches/{watch}
   */
  getWatch?: Maybe<V1KubernetesWatchTrigger>;
  /**
   * List all kubernetes watch
   *
   * Equivalent to GET /v2/watches
   */
  getWatches?: Maybe<Array<Maybe<V1KubernetesWatchTrigger>>>;
};


export type QuerygetCanaryConfigArgs = {
  canaryConfig: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetCanaryConfigsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetEnvironmentArgs = {
  environment: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetEnvironmentsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetFunctionArgs = {
  function: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetFunctionsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetHttpArgs = {
  httpTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetHttpsArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetMessagequeueArgs = {
  mqTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetMessagequeuesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetPackageArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  package: Scalars['String'];
};


export type QuerygetPackagesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetTimeArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  timeTrigger: Scalars['String'];
};


export type QuerygetTimesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};


export type QuerygetWatchArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  watch: Scalars['String'];
};


export type QuerygetWatchesArgs = {
  namespace?: InputMaybe<Scalars['String']>;
};

/** CanaryConfig is for canary deployment of two functions. */
export type V1CanaryConfig = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** CanaryConfigSpec defines the canary configuration spec */
  spec: V1CanaryConfigSpec;
  /** CanaryConfigStatus represents canary config status */
  status: V1CanaryConfigStatus;
};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type V1ObjectMeta = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
  annotations?: Maybe<Scalars['JSON']>;
  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  clusterName?: Maybe<Scalars['String']>;
  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
   *
   * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  creationTimestamp?: Maybe<Scalars['String']>;
  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  deletionGracePeriodSeconds?: Maybe<Scalars['Float']>;
  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
   *
   * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  deletionTimestamp?: Maybe<Scalars['String']>;
  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
  finalizers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
   *
   * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
   *
   * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
   */
  generateName?: Maybe<Scalars['String']>;
  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  generation?: Maybe<Scalars['Float']>;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  labels?: Maybe<Scalars['JSON']>;
  /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
  managedFields?: Maybe<Array<Maybe<V1ManagedFieldsEntry>>>;
  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name?: Maybe<Scalars['String']>;
  /**
   * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
   *
   * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   */
  namespace?: Maybe<Scalars['String']>;
  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  ownerReferences?: Maybe<Array<Maybe<V1OwnerReference>>>;
  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
   *
   * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: Maybe<Scalars['String']>;
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   *
   * DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
   */
  selfLink?: Maybe<Scalars['String']>;
  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
   *
   * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid?: Maybe<Scalars['String']>;
};

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export type V1ManagedFieldsEntry = {
  /** APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
  apiVersion?: Maybe<Scalars['String']>;
  /** FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
  fieldsType?: Maybe<Scalars['String']>;
  /** FieldsV1 holds the first JSON version format as described in the "FieldsV1" type. */
  fieldsV1?: Maybe<Scalars['String']>;
  /** Manager is an identifier of the workflow managing these fields. */
  manager?: Maybe<Scalars['String']>;
  /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
  operation?: Maybe<Scalars['String']>;
  /** Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. */
  subresource?: Maybe<Scalars['String']>;
  /** Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply' */
  time?: Maybe<Scalars['String']>;
};

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export type V1OwnerReference = {
  /** API version of the referent. */
  apiVersion: Scalars['String'];
  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  blockOwnerDeletion?: Maybe<Scalars['Boolean']>;
  /** If true, this reference points to the managing controller. */
  controller?: Maybe<Scalars['Boolean']>;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind: Scalars['String'];
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
  /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  uid: Scalars['String'];
};

/** CanaryConfigSpec defines the canary configuration spec */
export type V1CanaryConfigSpec = {
  /** Weight increment interval, string representation of time.Duration, ex : 1m, 2h, 2d (default: "2m") */
  duration: Scalars['String'];
  failureType: Scalars['String'];
  /** Threshold in percentage beyond which the new version of the function is considered unstable */
  failurethreshold: Scalars['Int'];
  /** New version of the function */
  newfunction: Scalars['String'];
  /** Old stable version of the function */
  oldfunction: Scalars['String'];
  /** HTTP trigger that this config references */
  trigger: Scalars['String'];
  /** Weight increment step for function */
  weightincrement: Scalars['Int'];
};

/** CanaryConfigStatus represents canary config status */
export type V1CanaryConfigStatus = {
  status: Scalars['String'];
};

/** Environment is environment for building and running user functions. */
export type V1Environment = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
  spec: V1EnvironmentSpec;
};

/** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
export type V1EnvironmentSpec = {
  /** Istio default blocks all egress traffic for safety. To enable accessibility of external network for builder/function pod, set to 'true'. (Optional) defaults to 'false' */
  allowAccessToExternalNetwork?: Maybe<Scalars['Boolean']>;
  /** (Optional) defaults to 'single'. Fission workflow uses 'infinite' to load multiple functions in one function pod. Available value: - single - infinite */
  allowedFunctionsPerContainer?: Maybe<Scalars['String']>;
  /** Builder is the setting for environment builder. */
  builder: V1Builder;
  /** ImagePullSecret is the secret for Kubernetes to pull an image from a private registry. */
  imagepullsecret: Scalars['String'];
  /** KeepArchive is used by fetcher to determine if the extracted archive or unarchived file should be placed, which is then used by specialize handler. (This is mainly for the JVM environment because .jar is one kind of zip archive.) */
  keeparchive: Scalars['Boolean'];
  /** The initial pool size for environment */
  poolsize?: Maybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirements;
  /** Runtime is the setting for environment runtime. */
  runtime: V1Runtime;
  /** The grace time for pod to perform connection draining before termination. The unit is in seconds. (Optional) defaults to 360 seconds */
  terminationGracePeriod?: Maybe<Scalars['Float']>;
  /**
   * Version is the Environment API version
   *
   * Version "1" allows user to run code snippet in a file, and it's supported by most of the environments except tensorflow-serving.
   *
   * Version "2" supports downloading and compiling user function if source archive is not empty.
   *
   * Version "3" is almost the same with v2, but you're able to control the size of pre-warm pool of the environment.
   */
  version: Scalars['Int'];
};

/** Builder is the setting for environment builder. */
export type V1Builder = {
  /** (Optional) Default build command to run for this build environment. */
  command?: Maybe<Scalars['String']>;
  /** A single application container that you want to run within a pod. */
  container?: Maybe<V1Container>;
  /** Image for containing the language compilation environment. */
  image?: Maybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
};

/** A single application container that you want to run within a pod. */
export type V1Container = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: Maybe<Array<Maybe<V1EnvVar>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: Maybe<Array<Maybe<V1EnvFromSource>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
  image?: Maybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: Maybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: Maybe<V1Lifecycle>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: Maybe<V1Probe>;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  name: Scalars['String'];
  /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
  ports?: Maybe<Array<Maybe<V1ContainerPort>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: Maybe<V1Probe>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: Maybe<V1ResourceRequirements>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: Maybe<V1SecurityContext>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: Maybe<V1Probe>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: Maybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: Maybe<Scalars['Boolean']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: Maybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: Maybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: Maybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: Maybe<Array<Maybe<V1VolumeDevice>>>;
  /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
  volumeMounts?: Maybe<Array<Maybe<V1VolumeMount>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: Maybe<Scalars['String']>;
};

/** EnvVar represents an environment variable present in a Container. */
export type V1EnvVar = {
  /** Name of the environment variable. Must be a C_IDENTIFIER. */
  name: Scalars['String'];
  /** Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  value?: Maybe<Scalars['String']>;
  /** EnvVarSource represents a source for the value of an EnvVar. */
  valueFrom?: Maybe<V1EnvVarSource>;
};

/** EnvVarSource represents a source for the value of an EnvVar. */
export type V1EnvVarSource = {
  /** Selects a key from a ConfigMap. */
  configMapKeyRef?: Maybe<V1ConfigMapKeySelector>;
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: Maybe<V1ObjectFieldSelector>;
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: Maybe<V1ResourceFieldSelector>;
  /** SecretKeySelector selects a key of a Secret. */
  secretKeyRef?: Maybe<V1SecretKeySelector>;
};

/** Selects a key from a ConfigMap. */
export type V1ConfigMapKeySelector = {
  /** The key to select. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its key must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export type V1ObjectFieldSelector = {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  apiVersion?: Maybe<Scalars['String']>;
  /** Path of the field to select in the specified API version. */
  fieldPath: Scalars['String'];
};

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export type V1ResourceFieldSelector = {
  /** Container name: required for volumes, optional for env vars */
  containerName?: Maybe<Scalars['String']>;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  divisor?: Maybe<Scalars['String']>;
  /** Required: resource to select */
  resource: Scalars['String'];
};

/** SecretKeySelector selects a key of a Secret. */
export type V1SecretKeySelector = {
  /** The key of the secret to select from.  Must be a valid secret key. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** EnvFromSource represents the source of a set of ConfigMaps */
export type V1EnvFromSource = {
  /**
   * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
   *
   * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  configMapRef?: Maybe<V1ConfigMapEnvSource>;
  /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  prefix?: Maybe<Scalars['String']>;
  /**
   * SecretEnvSource selects a Secret to populate the environment variables with.
   *
   * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  secretRef?: Maybe<V1SecretEnvSource>;
};

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export type V1ConfigMapEnvSource = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export type V1SecretEnvSource = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the Secret must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export type V1Lifecycle = {
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  postStart?: Maybe<V1LifecycleHandler>;
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  preStop?: Maybe<V1LifecycleHandler>;
};

/** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
export type V1LifecycleHandler = {
  /** ExecAction describes a "run in container" action. */
  exec?: Maybe<V1ExecAction>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: Maybe<V1HTTPGetAction>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: Maybe<V1TCPSocketAction>;
};

/** ExecAction describes a "run in container" action. */
export type V1ExecAction = {
  /** Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** HTTPGetAction describes an action based on HTTP Get requests. */
export type V1HTTPGetAction = {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  host?: Maybe<Scalars['String']>;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: Maybe<Array<Maybe<V1HTTPHeader>>>;
  /** Path to access on the HTTP server. */
  path?: Maybe<Scalars['String']>;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
  /** Scheme to use for connecting to the host. Defaults to HTTP. */
  scheme?: Maybe<Scalars['String']>;
};

/** HTTPHeader describes a custom header to be used in HTTP probes */
export type V1HTTPHeader = {
  /** The header field name */
  name: Scalars['String'];
  /** The header field value */
  value: Scalars['String'];
};

/** TCPSocketAction describes an action based on opening a socket */
export type V1TCPSocketAction = {
  /** Optional: Host name to connect to, defaults to the pod IP. */
  host?: Maybe<Scalars['String']>;
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
};

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export type V1Probe = {
  /** ExecAction describes a "run in container" action. */
  exec?: Maybe<V1ExecAction>;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  failureThreshold?: Maybe<Scalars['Int']>;
  grpc?: Maybe<V1GRPCAction>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: Maybe<V1HTTPGetAction>;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  initialDelaySeconds?: Maybe<Scalars['Int']>;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
  periodSeconds?: Maybe<Scalars['Int']>;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
  successThreshold?: Maybe<Scalars['Int']>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: Maybe<V1TCPSocketAction>;
  /** Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset. */
  terminationGracePeriodSeconds?: Maybe<Scalars['Float']>;
  /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  timeoutSeconds?: Maybe<Scalars['Int']>;
};

export type V1GRPCAction = {
  /** Port number of the gRPC service. Number must be in the range 1 to 65535. */
  port: Scalars['Int'];
  /**
   * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * If this is not specified, the default behavior is defined by gRPC.
   */
  service: Scalars['String'];
};

/** ContainerPort represents a network port in a single container. */
export type V1ContainerPort = {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  containerPort: Scalars['Int'];
  /** What host IP to bind the external port to. */
  hostIP?: Maybe<Scalars['String']>;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  hostPort?: Maybe<Scalars['Int']>;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
  name?: Maybe<Scalars['String']>;
  /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
  protocol?: Maybe<Scalars['String']>;
};

/** ResourceRequirements describes the compute resource requirements. */
export type V1ResourceRequirements = {
  /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  limits?: Maybe<Scalars['JSON']>;
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  requests?: Maybe<Scalars['JSON']>;
};

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export type V1SecurityContext = {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
  allowPrivilegeEscalation?: Maybe<Scalars['Boolean']>;
  /** Adds and removes POSIX capabilities from running containers. */
  capabilities?: Maybe<V1Capabilities>;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
  privileged?: Maybe<Scalars['Boolean']>;
  /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
  procMount?: Maybe<Scalars['String']>;
  /** Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
  readOnlyRootFilesystem?: Maybe<Scalars['Boolean']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: Maybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: Maybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: Maybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: Maybe<V1SELinuxOptions>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: Maybe<V1SeccompProfile>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: Maybe<V1WindowsSecurityContextOptions>;
};

/** Adds and removes POSIX capabilities from running containers. */
export type V1Capabilities = {
  /** Added capabilities */
  add?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Removed capabilities */
  drop?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** SELinuxOptions are the labels to be applied to the container */
export type V1SELinuxOptions = {
  /** Level is SELinux level label that applies to the container. */
  level?: Maybe<Scalars['String']>;
  /** Role is a SELinux role label that applies to the container. */
  role?: Maybe<Scalars['String']>;
  /** Type is a SELinux type label that applies to the container. */
  type?: Maybe<Scalars['String']>;
  /** User is a SELinux user label that applies to the container. */
  user?: Maybe<Scalars['String']>;
};

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export type V1SeccompProfile = {
  /** localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
  localhostProfile?: Maybe<Scalars['String']>;
  /**
   * type indicates which kind of seccomp profile will be applied. Valid options are:
   *
   * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
   */
  type: Scalars['String'];
};

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export type V1WindowsSecurityContextOptions = {
  /** GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
  gmsaCredentialSpec?: Maybe<Scalars['String']>;
  /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
  gmsaCredentialSpecName?: Maybe<Scalars['String']>;
  /** HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
  hostProcess?: Maybe<Scalars['Boolean']>;
  /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsUserName?: Maybe<Scalars['String']>;
};

/** volumeDevice describes a mapping of a raw block device within a container. */
export type V1VolumeDevice = {
  /** devicePath is the path inside of the container that the device will be mapped to. */
  devicePath: Scalars['String'];
  /** name must match the name of a persistentVolumeClaim in the pod */
  name: Scalars['String'];
};

/** VolumeMount describes a mounting of a Volume within a container. */
export type V1VolumeMount = {
  /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
  mountPath: Scalars['String'];
  /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
  mountPropagation?: Maybe<Scalars['String']>;
  /** This must match the Name of a Volume. */
  name: Scalars['String'];
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  subPath?: Maybe<Scalars['String']>;
  /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
  subPathExpr?: Maybe<Scalars['String']>;
};

/** PodSpec is a description of a pod. */
export type V1PodSpec = {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  activeDeadlineSeconds?: Maybe<Scalars['Float']>;
  /** Affinity is a group of affinity scheduling rules. */
  affinity?: Maybe<V1Affinity>;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  automountServiceAccountToken?: Maybe<Scalars['Boolean']>;
  /** List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
  containers: Array<Maybe<V1Container>>;
  /** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
  dnsConfig?: Maybe<V1PodDNSConfig>;
  /** Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
  dnsPolicy?: Maybe<Scalars['String']>;
  /** EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
  enableServiceLinks?: Maybe<Scalars['Boolean']>;
  /** List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is beta-level and available on clusters that haven't disabled the EphemeralContainers feature gate. */
  ephemeralContainers?: Maybe<Array<Maybe<V1EphemeralContainer>>>;
  /** HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
  hostAliases?: Maybe<Array<Maybe<V1HostAlias>>>;
  /** Use the host's ipc namespace. Optional: Default to false. */
  hostIPC?: Maybe<Scalars['Boolean']>;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
  hostNetwork?: Maybe<Scalars['Boolean']>;
  /** Use the host's pid namespace. Optional: Default to false. */
  hostPID?: Maybe<Scalars['Boolean']>;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  hostname?: Maybe<Scalars['String']>;
  /** ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
  imagePullSecrets?: Maybe<Array<Maybe<V1LocalObjectReference>>>;
  /** List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
  initContainers?: Maybe<Array<Maybe<V1Container>>>;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  nodeName?: Maybe<Scalars['String']>;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  nodeSelector?: Maybe<Scalars['JSON']>;
  /** PodOS defines the OS parameters of a pod. */
  os?: Maybe<V1PodOS>;
  /** Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md This field is beta-level as of Kubernetes v1.18, and is only honored by servers that enable the PodOverhead feature. */
  overhead?: Maybe<Scalars['JSON']>;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
  preemptionPolicy?: Maybe<Scalars['String']>;
  /** The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. */
  priority?: Maybe<Scalars['Int']>;
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  priorityClassName?: Maybe<Scalars['String']>;
  /** If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
  readinessGates?: Maybe<Array<Maybe<V1PodReadinessGate>>>;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
  restartPolicy?: Maybe<Scalars['String']>;
  /** RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class This is a beta feature as of Kubernetes v1.14. */
  runtimeClassName?: Maybe<Scalars['String']>;
  /** If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
  schedulerName?: Maybe<Scalars['String']>;
  /** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
  securityContext?: Maybe<V1PodSecurityContext>;
  /** DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
  serviceAccount?: Maybe<Scalars['String']>;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  serviceAccountName?: Maybe<Scalars['String']>;
  /** If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
  setHostnameAsFQDN?: Maybe<Scalars['Boolean']>;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
  shareProcessNamespace?: Maybe<Scalars['Boolean']>;
  /** If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
  subdomain?: Maybe<Scalars['String']>;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. */
  terminationGracePeriodSeconds?: Maybe<Scalars['Float']>;
  /** If specified, the pod's tolerations. */
  tolerations?: Maybe<Array<Maybe<V1Toleration>>>;
  /** TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
  topologySpreadConstraints?: Maybe<Array<Maybe<V1TopologySpreadConstraint>>>;
  /** List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
  volumes?: Maybe<Array<Maybe<V1Volume>>>;
};

/** Affinity is a group of affinity scheduling rules. */
export type V1Affinity = {
  /** Node affinity is a group of node affinity scheduling rules. */
  nodeAffinity?: Maybe<V1NodeAffinity>;
  /** Pod affinity is a group of inter pod affinity scheduling rules. */
  podAffinity?: Maybe<V1PodAffinity>;
  /** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
  podAntiAffinity?: Maybe<V1PodAntiAffinity>;
};

/** Node affinity is a group of node affinity scheduling rules. */
export type V1NodeAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1PreferredSchedulingTerm>>>;
  /** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
  requiredDuringSchedulingIgnoredDuringExecution?: Maybe<V1NodeSelector>;
};

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export type V1PreferredSchedulingTerm = {
  /** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
  preference: V1NodeSelectorTerm;
  /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export type V1NodeSelectorTerm = {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: Maybe<Array<Maybe<V1NodeSelectorRequirement>>>;
  /** A list of node selector requirements by node's fields. */
  matchFields?: Maybe<Array<Maybe<V1NodeSelectorRequirement>>>;
};

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1NodeSelectorRequirement = {
  /** The label key that the selector applies to. */
  key: Scalars['String'];
  /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  operator: Scalars['String'];
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export type V1NodeSelector = {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: Array<Maybe<V1NodeSelectorTerm>>;
};

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export type V1PodAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1WeightedPodAffinityTerm>>>;
  /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1PodAffinityTerm>>>;
};

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export type V1WeightedPodAffinityTerm = {
  /** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
  podAffinityTerm: V1PodAffinityTerm;
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export type V1PodAffinityTerm = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: Maybe<V1LabelSelector>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  namespaceSelector?: Maybe<V1LabelSelector>;
  /** namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace" */
  namespaces?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
  topologyKey: Scalars['String'];
};

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export type V1LabelSelector = {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  matchExpressions?: Maybe<Array<Maybe<V1LabelSelectorRequirement>>>;
  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  matchLabels?: Maybe<Scalars['JSON']>;
};

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1LabelSelectorRequirement = {
  /** key is the label key that the selector applies to. */
  key: Scalars['String'];
  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  operator: Scalars['String'];
  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export type V1PodAntiAffinity = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1WeightedPodAffinityTerm>>>;
  /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: Maybe<Array<Maybe<V1PodAffinityTerm>>>;
};

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export type V1PodDNSConfig = {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  nameservers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
  options?: Maybe<Array<Maybe<V1PodDNSConfigOption>>>;
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  searches?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export type V1PodDNSConfigOption = {
  /** Required. */
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
 *
 * To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
 *
 * This is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.
 */
export type V1EphemeralContainer = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: Maybe<Array<Maybe<V1EnvVar>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: Maybe<Array<Maybe<V1EnvFromSource>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images */
  image?: Maybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: Maybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: Maybe<V1Lifecycle>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: Maybe<V1Probe>;
  /** Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers. */
  name: Scalars['String'];
  /** Ports are not allowed for ephemeral containers. */
  ports?: Maybe<Array<Maybe<V1ContainerPort>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: Maybe<V1Probe>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: Maybe<V1ResourceRequirements>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: Maybe<V1SecurityContext>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: Maybe<V1Probe>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: Maybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: Maybe<Scalars['Boolean']>;
  /**
   * If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
   *
   * The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
   */
  targetContainerName?: Maybe<Scalars['String']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: Maybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: Maybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: Maybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: Maybe<Array<Maybe<V1VolumeDevice>>>;
  /** Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated. */
  volumeMounts?: Maybe<Array<Maybe<V1VolumeMount>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: Maybe<Scalars['String']>;
};

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export type V1HostAlias = {
  /** Hostnames for the above IP address. */
  hostnames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** IP address of the host file entry. */
  ip?: Maybe<Scalars['String']>;
};

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export type V1LocalObjectReference = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
};

/** PodOS defines the OS parameters of a pod. */
export type V1PodOS = {
  /** Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null */
  name: Scalars['String'];
};

/** PodReadinessGate contains the reference to a pod condition */
export type V1PodReadinessGate = {
  /** ConditionType refers to a condition in the pod's condition list with matching type. */
  conditionType: Scalars['String'];
};

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export type V1PodSecurityContext = {
  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
   *
   * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw
   */
  fsGroup?: Maybe<Scalars['Float']>;
  /** fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows. */
  fsGroupChangePolicy?: Maybe<Scalars['String']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: Maybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: Maybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: Maybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: Maybe<V1SELinuxOptions>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: Maybe<V1SeccompProfile>;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows. */
  supplementalGroups?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows. */
  sysctls?: Maybe<Array<Maybe<V1Sysctl>>>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: Maybe<V1WindowsSecurityContextOptions>;
};

/** Sysctl defines a kernel parameter to be set */
export type V1Sysctl = {
  /** Name of a property to set */
  name: Scalars['String'];
  /** Value of a property to set */
  value: Scalars['String'];
};

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export type V1Toleration = {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  effect?: Maybe<Scalars['String']>;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  key?: Maybe<Scalars['String']>;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  operator?: Maybe<Scalars['String']>;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  tolerationSeconds?: Maybe<Scalars['Float']>;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  value?: Maybe<Scalars['String']>;
};

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export type V1TopologySpreadConstraint = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: Maybe<V1LabelSelector>;
  /** MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: */
  maxSkew: Scalars['Int'];
  /** TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field. */
  topologyKey: Scalars['String'];
  /**
   * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,
   *   but giving higher precedence to topologies that would help reduce the
   *   skew.
   * A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1:
   */
  whenUnsatisfiable: Scalars['String'];
};

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export type V1Volume = {
  /**
   * Represents a Persistent Disk resource in AWS.
   *
   * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
   */
  awsElasticBlockStore?: Maybe<V1AWSElasticBlockStoreVolumeSource>;
  /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
  azureDisk?: Maybe<V1AzureDiskVolumeSource>;
  /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
  azureFile?: Maybe<V1AzureFileVolumeSource>;
  /** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
  cephfs?: Maybe<V1CephFSVolumeSource>;
  /** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
  cinder?: Maybe<V1CinderVolumeSource>;
  /**
   * Adapts a ConfigMap into a volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
   */
  configMap?: Maybe<V1ConfigMapVolumeSource>;
  /** Represents a source location of a volume to mount, managed by an external CSI driver */
  csi?: Maybe<V1CSIVolumeSource>;
  /** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
  downwardAPI?: Maybe<V1DownwardAPIVolumeSource>;
  /** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
  emptyDir?: Maybe<V1EmptyDirVolumeSource>;
  /** Represents an ephemeral volume that is handled by a normal storage driver. */
  ephemeral?: Maybe<V1EphemeralVolumeSource>;
  /** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
  fc?: Maybe<V1FCVolumeSource>;
  /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
  flexVolume?: Maybe<V1FlexVolumeSource>;
  /** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
  flocker?: Maybe<V1FlockerVolumeSource>;
  /**
   * Represents a Persistent Disk resource in Google Compute Engine.
   *
   * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
   */
  gcePersistentDisk?: Maybe<V1GCEPersistentDiskVolumeSource>;
  /**
   * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
   *
   * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
   */
  gitRepo?: Maybe<V1GitRepoVolumeSource>;
  /** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
  glusterfs?: Maybe<V1GlusterfsVolumeSource>;
  /** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
  hostPath?: Maybe<V1HostPathVolumeSource>;
  /** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
  iscsi?: Maybe<V1ISCSIVolumeSource>;
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name: Scalars['String'];
  /** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
  nfs?: Maybe<V1NFSVolumeSource>;
  /** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
  persistentVolumeClaim?: Maybe<V1PersistentVolumeClaimVolumeSource>;
  /** Represents a Photon Controller persistent disk resource. */
  photonPersistentDisk?: Maybe<V1PhotonPersistentDiskVolumeSource>;
  /** PortworxVolumeSource represents a Portworx volume resource. */
  portworxVolume?: Maybe<V1PortworxVolumeSource>;
  /** Represents a projected volume source */
  projected?: Maybe<V1ProjectedVolumeSource>;
  /** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
  quobyte?: Maybe<V1QuobyteVolumeSource>;
  /** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
  rbd?: Maybe<V1RBDVolumeSource>;
  /** ScaleIOVolumeSource represents a persistent ScaleIO volume */
  scaleIO?: Maybe<V1ScaleIOVolumeSource>;
  /**
   * Adapts a Secret into a volume.
   *
   * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
   */
  secret?: Maybe<V1SecretVolumeSource>;
  /** Represents a StorageOS persistent volume resource. */
  storageos?: Maybe<V1StorageOSVolumeSource>;
  /** Represents a vSphere volume resource. */
  vsphereVolume?: Maybe<V1VsphereVirtualDiskVolumeSource>;
};

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export type V1AWSElasticBlockStoreVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  fsType?: Maybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  partition?: Maybe<Scalars['Int']>;
  /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  volumeID: Scalars['String'];
};

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export type V1AzureDiskVolumeSource = {
  /** Host Caching mode: None, Read Only, Read Write. */
  cachingMode?: Maybe<Scalars['String']>;
  /** The Name of the data disk in the blob storage */
  diskName: Scalars['String'];
  /** The URI the data disk in the blob storage */
  diskURI: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
  kind?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type V1AzureFileVolumeSource = {
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** the name of secret that contains Azure Storage Account Name and Key */
  secretName: Scalars['String'];
  /** Share Name */
  shareName: Scalars['String'];
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type V1CephFSVolumeSource = {
  /** Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  monitors: Array<Maybe<Scalars['String']>>;
  /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
  path?: Maybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  secretFile?: Maybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  user?: Maybe<Scalars['String']>;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type V1CinderVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  fsType?: Maybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  volumeID: Scalars['String'];
};

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export type V1ConfigMapVolumeSource = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** Maps a string key to a path within a volume. */
export type V1KeyToPath = {
  /** The key to project. */
  key: Scalars['String'];
  /** Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: Maybe<Scalars['Int']>;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  path: Scalars['String'];
};

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export type V1CSIVolumeSource = {
  /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
  fsType?: Maybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  nodePublishSecretRef?: Maybe<V1LocalObjectReference>;
  /** Specifies a read-only configuration for the volume. Defaults to false (read/write). */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
  volumeAttributes?: Maybe<Scalars['JSON']>;
};

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export type V1DownwardAPIVolumeSource = {
  /** Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** Items is a list of downward API volume file */
  items?: Maybe<Array<Maybe<V1DownwardAPIVolumeFile>>>;
};

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export type V1DownwardAPIVolumeFile = {
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: Maybe<V1ObjectFieldSelector>;
  /** Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: Maybe<Scalars['Int']>;
  /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  path: Scalars['String'];
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: Maybe<V1ResourceFieldSelector>;
};

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export type V1EmptyDirVolumeSource = {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  medium?: Maybe<Scalars['String']>;
  /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  sizeLimit?: Maybe<Scalars['String']>;
};

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export type V1EphemeralVolumeSource = {
  /** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
  volumeClaimTemplate?: Maybe<V1PersistentVolumeClaimTemplate>;
};

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export type V1PersistentVolumeClaimTemplate = {
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata?: Maybe<V1ObjectMeta>;
  /** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
  spec: V1PersistentVolumeClaimSpec;
};

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export type V1PersistentVolumeClaimSpec = {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  accessModes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSource?: Maybe<V1TypedLocalObjectReference>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSourceRef?: Maybe<V1TypedLocalObjectReference>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: Maybe<V1ResourceRequirements>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: Maybe<V1LabelSelector>;
  /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
  storageClassName?: Maybe<Scalars['String']>;
  /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
  volumeMode?: Maybe<Scalars['String']>;
  /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
  volumeName?: Maybe<Scalars['String']>;
};

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export type V1TypedLocalObjectReference = {
  /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
  apiGroup: Scalars['String'];
  /** Kind is the type of resource being referenced */
  kind: Scalars['String'];
  /** Name is the name of resource being referenced */
  name: Scalars['String'];
};

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export type V1FCVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Optional: FC target lun number */
  lun?: Maybe<Scalars['Int']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Optional: FC target worldwide names (WWNs) */
  targetWWNs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
  wwids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export type V1FlexVolumeSource = {
  /** Driver is the name of the driver to use for this volume. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  fsType?: Maybe<Scalars['String']>;
  /** Optional: Extra command options if any. */
  options?: Maybe<Scalars['JSON']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
};

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export type V1FlockerVolumeSource = {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  datasetName?: Maybe<Scalars['String']>;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  datasetUUID?: Maybe<Scalars['String']>;
};

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export type V1GCEPersistentDiskVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  fsType?: Maybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  partition?: Maybe<Scalars['Int']>;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  pdName: Scalars['String'];
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export type V1GitRepoVolumeSource = {
  /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  directory?: Maybe<Scalars['String']>;
  /** Repository URL */
  repository: Scalars['String'];
  /** Commit hash for the specified revision. */
  revision?: Maybe<Scalars['String']>;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type V1GlusterfsVolumeSource = {
  /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  endpoints: Scalars['String'];
  /** Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  path: Scalars['String'];
  /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export type V1HostPathVolumeSource = {
  /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  path: Scalars['String'];
  /** Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  type?: Maybe<Scalars['String']>;
};

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type V1ISCSIVolumeSource = {
  /** whether support iSCSI Discovery CHAP authentication */
  chapAuthDiscovery?: Maybe<Scalars['Boolean']>;
  /** whether support iSCSI Session CHAP authentication */
  chapAuthSession?: Maybe<Scalars['Boolean']>;
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
  fsType?: Maybe<Scalars['String']>;
  /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
  initiatorName?: Maybe<Scalars['String']>;
  /** Target iSCSI Qualified Name. */
  iqn: Scalars['String'];
  /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  iscsiInterface?: Maybe<Scalars['String']>;
  /** iSCSI Target Lun number. */
  lun: Scalars['Int'];
  /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  portals?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  targetPortal: Scalars['String'];
};

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export type V1NFSVolumeSource = {
  /** Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  path: Scalars['String'];
  /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  server: Scalars['String'];
};

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export type V1PersistentVolumeClaimVolumeSource = {
  /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  claimName: Scalars['String'];
  /** Will force the ReadOnly setting in VolumeMounts. Default false. */
  readOnly?: Maybe<Scalars['Boolean']>;
};

/** Represents a Photon Controller persistent disk resource. */
export type V1PhotonPersistentDiskVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** ID that identifies Photon Controller persistent disk */
  pdID: Scalars['String'];
};

/** PortworxVolumeSource represents a Portworx volume resource. */
export type V1PortworxVolumeSource = {
  /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** VolumeID uniquely identifies a Portworx volume */
  volumeID: Scalars['String'];
};

/** Represents a projected volume source */
export type V1ProjectedVolumeSource = {
  /** Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** list of volume projections */
  sources: Array<Maybe<V1VolumeProjection>>;
};

/** Projection that may be projected along with other supported volume types */
export type V1VolumeProjection = {
  /**
   * Adapts a ConfigMap into a projected volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
   */
  configMap?: Maybe<V1ConfigMapProjection>;
  /** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
  downwardAPI?: Maybe<V1DownwardAPIProjection>;
  /**
   * Adapts a secret into a projected volume.
   *
   * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
   */
  secret?: Maybe<V1SecretProjection>;
  /** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
  serviceAccountToken?: Maybe<V1ServiceAccountTokenProjection>;
};

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export type V1ConfigMapProjection = {
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export type V1DownwardAPIProjection = {
  /** Items is a list of DownwardAPIVolume file */
  items?: Maybe<Array<Maybe<V1DownwardAPIVolumeFile>>>;
};

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export type V1SecretProjection = {
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: Maybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: Maybe<Scalars['Boolean']>;
};

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export type V1ServiceAccountTokenProjection = {
  /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
  audience?: Maybe<Scalars['String']>;
  /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
  expirationSeconds?: Maybe<Scalars['Float']>;
  /** Path is the path relative to the mount point of the file to project the token into. */
  path: Scalars['String'];
};

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export type V1QuobyteVolumeSource = {
  /** Group to map volume access to Default is no group */
  group?: Maybe<Scalars['String']>;
  /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  registry: Scalars['String'];
  /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
  tenant?: Maybe<Scalars['String']>;
  /** User to map volume access to Defaults to serivceaccount user */
  user?: Maybe<Scalars['String']>;
  /** Volume is a string that references an already created Quobyte volume by name. */
  volume: Scalars['String'];
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type V1RBDVolumeSource = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
  fsType?: Maybe<Scalars['String']>;
  /** The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  image: Scalars['String'];
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  keyring?: Maybe<Scalars['String']>;
  /** A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  monitors: Array<Maybe<Scalars['String']>>;
  /** The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  pool?: Maybe<Scalars['String']>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  user?: Maybe<Scalars['String']>;
};

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export type V1ScaleIOVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
  fsType?: Maybe<Scalars['String']>;
  /** The host address of the ScaleIO API Gateway. */
  gateway: Scalars['String'];
  /** The name of the ScaleIO Protection Domain for the configured storage. */
  protectionDomain?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef: V1LocalObjectReference;
  /** Flag to enable/disable SSL communication with Gateway, default false */
  sslEnabled?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
  storageMode?: Maybe<Scalars['String']>;
  /** The ScaleIO Storage Pool associated with the protection domain. */
  storagePool?: Maybe<Scalars['String']>;
  /** The name of the storage system as configured in ScaleIO. */
  system: Scalars['String'];
  /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
  volumeName?: Maybe<Scalars['String']>;
};

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export type V1SecretVolumeSource = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: Maybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: Maybe<Array<Maybe<V1KeyToPath>>>;
  /** Specify whether the Secret or its keys must be defined */
  optional?: Maybe<Scalars['Boolean']>;
  /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  secretName?: Maybe<Scalars['String']>;
};

/** Represents a StorageOS persistent volume resource. */
export type V1StorageOSVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: Maybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: Maybe<V1LocalObjectReference>;
  /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
  volumeName?: Maybe<Scalars['String']>;
  /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
  volumeNamespace?: Maybe<Scalars['String']>;
};

/** Represents a vSphere volume resource. */
export type V1VsphereVirtualDiskVolumeSource = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: Maybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
  storagePolicyID?: Maybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile name. */
  storagePolicyName?: Maybe<Scalars['String']>;
  /** Path that identifies vSphere volume vmdk */
  volumePath: Scalars['String'];
};

/** Runtime is the setting for environment runtime. */
export type V1Runtime = {
  /** A single application container that you want to run within a pod. */
  container?: Maybe<V1Container>;
  /** Image for containing the language runtime. */
  image: Scalars['String'];
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
};

/** Function is function runs within environment runtime with given package and secrets/configmaps. */
export type V1Function = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** FunctionSpec describes the contents of the function. */
  spec: V1FunctionSpec;
};

/** FunctionSpec describes the contents of the function. */
export type V1FunctionSpec = {
  /** Maximum number of pods to be specialized which will serve requests This is optional. If not specified default value will be taken as 500 */
  concurrency?: Maybe<Scalars['Int']>;
  /** Reference to a list of configmaps. */
  configmaps?: Maybe<Array<Maybe<V1ConfigMapReference>>>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReference;
  /** FunctionTimeout provides a maximum amount of duration within which a request for a particular function execution should be complete. This is optional. If not specified default value will be taken as 60s */
  functionTimeout?: Maybe<Scalars['Int']>;
  /** IdleTimeout specifies the length of time that a function is idle before the function pod(s) are eligible for deletion. If no traffic to the function is detected within the idle timeout, the executor will then recycle the function pod(s) to release resources. */
  idletimeout?: Maybe<Scalars['Int']>;
  /**
   * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
   *
   * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
   */
  invokeStrategy: V1InvokeStrategy;
  /** OnceOnly specifies if specialized pod will serve exactly one request in its lifetime and would be garbage collected after serving that one request This is optional. If not specified default value will be taken as false */
  onceOnly?: Maybe<Scalars['Boolean']>;
  /** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
  package: V1FunctionPackageRef;
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
  /** RequestsPerPod indicates the maximum number of concurrent requests that can be served by a specialized pod This is optional. If not specified default value will be taken as 1 */
  requestsPerPod?: Maybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirements;
  /** Reference to a list of secrets. */
  secrets?: Maybe<Array<Maybe<V1SecretReference>>>;
};

/** ConfigMapReference is a reference to a kubernetes configmap. */
export type V1ConfigMapReference = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** EnvironmentReference is a reference to an environment. */
export type V1EnvironmentReference = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/**
 * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
 *
 * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
 */
export type V1InvokeStrategy = {
  /**
   * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
   *
   * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
   *
   * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
   */
  executionStrategy: V1ExecutionStrategy;
  /** StrategyType is the strategy type of function. Now it only supports 'execution'. */
  strategyType: Scalars['String'];
};

/**
 * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
 *
 * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
 *
 * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
 */
export type V1ExecutionStrategy = {
  /**
   * ExecutorType is the executor type of function used. Defaults to "poolmgr".
   *
   * Available value:
   *  - poolmgr
   *  - newdeploy
   *  - container
   */
  executorType: Scalars['String'];
  /** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
  hpaBehavior?: Maybe<V2beta2HorizontalPodAutoscalerBehavior>;
  /** hpaMetrics is the list of metrics used to determine the desired replica count of the Deployment created for the function. Applicable for executor type newdeploy and container. */
  hpaMetrics?: Maybe<Array<Maybe<V2beta2MetricSpec>>>;
  /** This is only for newdeploy to set up maximum replicas of deployment. */
  maxScale: Scalars['Int'];
  /** This is only for newdeploy to set up minimum replicas of deployment. */
  minScale: Scalars['Int'];
  /** This is the timeout setting for executor to wait for pod specialization. */
  specializationTimeout: Scalars['Int'];
  /** Deprecated: use hpaMetrics instead. This is only for executor type newdeploy and container to set up target CPU utilization of HPA. Applicable for executor type newdeploy and container. */
  targetCPUPercent: Scalars['Int'];
};

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export type V2beta2HorizontalPodAutoscalerBehavior = {
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleDown?: Maybe<V2beta2HPAScalingRules>;
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleUp?: Maybe<V2beta2HPAScalingRules>;
};

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export type V2beta2HPAScalingRules = {
  /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
  policies?: Maybe<Array<Maybe<V2beta2HPAScalingPolicy>>>;
  /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
  selectPolicy?: Maybe<Scalars['String']>;
  /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
  stabilizationWindowSeconds?: Maybe<Scalars['Int']>;
};

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export type V2beta2HPAScalingPolicy = {
  /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
  periodSeconds: Scalars['Int'];
  /** Type is used to specify the scaling policy. */
  type: Scalars['String'];
  /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
  value: Scalars['Int'];
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type V2beta2MetricSpec = {
  /** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  containerResource?: Maybe<V2beta2ContainerResourceMetricSource>;
  /** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  external?: Maybe<V2beta2ExternalMetricSource>;
  /** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
  object?: Maybe<V2beta2ObjectMetricSource>;
  /** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
  pods?: Maybe<V2beta2PodsMetricSource>;
  /** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  resource?: Maybe<V2beta2ResourceMetricSource>;
  /** type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
  type: Scalars['String'];
};

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ContainerResourceMetricSource = {
  /** container is the name of the container in the pods of the scaling target */
  container: Scalars['String'];
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type V2beta2MetricTarget = {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  averageUtilization?: Maybe<Scalars['Int']>;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: Maybe<Scalars['String']>;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  type: Scalars['String'];
  /** value is the target value of the metric (as a quantity). */
  value?: Maybe<Scalars['String']>;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type V2beta2ExternalMetricSource = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifier;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** MetricIdentifier defines the name and optionally selector for a metric */
export type V2beta2MetricIdentifier = {
  /** name is the name of the given metric */
  name: Scalars['String'];
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: Maybe<V1LabelSelector>;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta2ObjectMetricSource = {
  /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
  describedObject: V2beta2CrossVersionObjectReference;
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifier;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V2beta2CrossVersionObjectReference = {
  /** API version of the referent */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
  kind: Scalars['String'];
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type V2beta2PodsMetricSource = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifier;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ResourceMetricSource = {
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTarget;
};

/** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
export type V1FunctionPackageRef = {
  /**
   * FunctionName specifies a specific function within the package. This allows functions to share packages, by having different functions within the same package.
   *
   * Fission itself does not interpret this path. It is passed verbatim to build and runtime environments.
   *
   * This is optional: if unspecified, the environment has a default name.
   */
  functionName?: Maybe<Scalars['String']>;
  /** PackageRef is a reference to the package. */
  packageref: V1PackageRef;
};

/** PackageRef is a reference to the package. */
export type V1PackageRef = {
  name: Scalars['String'];
  namespace: Scalars['String'];
  /** Including resource version in the reference forces the function to be updated on package update, making it possible to cache the function based on its metadata. */
  resourceversion?: Maybe<Scalars['String']>;
};

/** SecretReference is a reference to a kubernetes secret. */
export type V1SecretReference = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** HTTPTrigger is the trigger invokes user functions when receiving HTTP requests. */
export type V1HTTPTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
  spec: V1HTTPTriggerSpec;
};

/** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
export type V1HTTPTriggerSpec = {
  /** If CreateIngress is true, router will create an ingress definition. */
  createingress: Scalars['Boolean'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
  /** Deprecated: the original idea of this field is not for setting Ingress. Since we have IngressConfig now, remove Host after couple releases. */
  host: Scalars['String'];
  /** IngressConfig is for router to set up Ingress. */
  ingressconfig: V1IngressConfig;
  /** When function is exposed with Prefix based path, keepPrefix decides whether to keep or trim prefix in URL while invoking function. */
  keepPrefix?: Maybe<Scalars['Boolean']>;
  /** Use Methods instead of Method. This field is going to be deprecated in a future release HTTP method to access a function. */
  method: Scalars['String'];
  /** HTTP methods to access a function */
  methods?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Prefix with which functions are exposed. NOTE: Prefix takes precedence over URL/RelativeURL. Note that it does not treat slashes specially ("/foobar/" will be matched by the prefix "/foobar"). */
  prefix?: Maybe<Scalars['String']>;
  /** RelativeURL is the exposed URL for external client to access a function with. */
  relativeurl: Scalars['String'];
};

/** FunctionReference refers to a function */
export type V1FunctionReference = {
  /** Function Reference by weight. this map contains function name as key and its weight as the value. This is for canary upgrade purpose. */
  functionweights: Scalars['JSON'];
  /** Name of the function. */
  name: Scalars['String'];
  /**
   * Type indicates whether this function reference is by name or selector. For now, the only supported reference type is by "name".  Future reference types:
   *   * Function by label or annotation
   *   * Branch or tag of a versioned function
   *   * A "rolling upgrade" from one version of a function to another
   * Available value: - name - function-weights
   */
  type: Scalars['String'];
};

/** IngressConfig is for router to set up Ingress. */
export type V1IngressConfig = {
  /** Annotations will be added to metadata when creating Ingress. */
  annotations: Scalars['JSON'];
  /** Host is for ingress controller to apply rules. If host is empty or "*", the rule applies to all inbound HTTP traffic. */
  host: Scalars['String'];
  /** Path is for path matching. The format of path depends on what ingress controller you used. */
  path: Scalars['String'];
  /** TLS is for user to specify a Secret that contains TLS key and certificate. The domain name in the key and crt must match the value of Host field. */
  tls: Scalars['String'];
};

/** MessageQueueTrigger invokes functions when messages arrive to certain topic that trigger subscribes to. */
export type V1MessageQueueTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
  spec: V1MessageQueueTriggerSpec;
};

/** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
export type V1MessageQueueTriggerSpec = {
  /** Content type of payload */
  contentType: Scalars['String'];
  /** The period to wait after the last trigger reported active before scaling the deployment back to 0 */
  cooldownPeriod?: Maybe<Scalars['Int']>;
  /** Topic to collect error response sent from function */
  errorTopic: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
  /** Maximum number of replicas KEDA will scale the deployment up to */
  maxReplicaCount?: Maybe<Scalars['Int']>;
  /** Maximum times for message queue trigger to retry */
  maxRetries: Scalars['Int'];
  /** Type of message queue (NATS, Kafka, AzureQueue) */
  messageQueueType: Scalars['String'];
  /** ScalerTrigger fields */
  metadata: Scalars['JSON'];
  /** Minimum number of replicas KEDA will scale the deployment down to */
  minReplicaCount?: Maybe<Scalars['Int']>;
  /** Kind of Message Queue Trigger to be created, by default its fission */
  mqtkind?: Maybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: Maybe<V1PodSpec>;
  /** The period to check each trigger source on every ScaledObject, and scale the deployment up or down accordingly */
  pollingInterval?: Maybe<Scalars['Int']>;
  /** Topic for message queue trigger to sent response from function. */
  respTopic?: Maybe<Scalars['String']>;
  /** Secret name */
  secret?: Maybe<Scalars['String']>;
  /** Subscribed topic */
  topic: Scalars['String'];
};

/** Package Think of these as function-level images. */
export type V1Package = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
  spec: V1PackageSpec;
  /** PackageStatus contains the build status of a package also the build log for examination. */
  status: V1PackageStatus;
};

/** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
export type V1PackageSpec = {
  /** BuildCommand is a custom build command that builder used to build the source archive. */
  buildcmd?: Maybe<Scalars['String']>;
  /** Archive contains or references a collection of sources or binary files. */
  deployment?: Maybe<V1Archive>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReference;
  /** Archive contains or references a collection of sources or binary files. */
  source?: Maybe<V1Archive>;
};

/** Archive contains or references a collection of sources or binary files. */
export type V1Archive = {
  /** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
  checksum?: Maybe<V1Checksum>;
  /** Literal contents of the package. Can be used for encoding packages below TODO (256 KB?) size. */
  literal?: Maybe<Scalars['String']>;
  /**
   * Type defines how the package is specified: literal or URL. Available value:
   *  - literal
   *  - url
   */
  type?: Maybe<Scalars['String']>;
  /** URL references a package. */
  url?: Maybe<Scalars['String']>;
};

/** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
export type V1Checksum = {
  sum?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** PackageStatus contains the build status of a package also the build log for examination. */
export type V1PackageStatus = {
  /** BuildLog stores build log during the compilation. */
  buildlog?: Maybe<Scalars['String']>;
  /** BuildStatus is the package build status. */
  buildstatus?: Maybe<Scalars['String']>;
  /** LastUpdateTimestamp will store the timestamp the package was last updated metav1.Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. https://github.com/kubernetes/apimachinery/blob/44bd77c24ef93cd3a5eb6fef64e514025d10d44e/pkg/apis/meta/v1/time.go#L26-L35 */
  lastUpdateTimestamp?: Maybe<Scalars['String']>;
};

/** TimeTrigger invokes functions based on given cron schedule. */
export type V1TimeTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
  spec: V1TimeTriggerSpec;
};

/** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
export type V1TimeTriggerSpec = {
  /** Cron schedule */
  cron: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
};

/** KubernetesWatchTrigger watches kubernetes resource events and invokes functions. */
export type V1KubernetesWatchTrigger = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: Maybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: Maybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMeta;
  /** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
  spec: V1KubernetesWatchTriggerSpec;
};

/** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
export type V1KubernetesWatchTriggerSpec = {
  /** FunctionReference refers to a function */
  functionref: V1FunctionReference;
  /** Resource labels */
  labelselector: Scalars['JSON'];
  namespace: Scalars['String'];
  /** Type of resource to watch (Pod, Service, etc.) */
  type: Scalars['String'];
};

export type Mutation = {
  /**
   * Create archive
   *
   * Equivalent to POST /proxy/storage/v1/archive
   */
  createArchives?: Maybe<Scalars['JSON']>;
  /**
   * Create canary config
   *
   * Equivalent to POST /v2/canaryconfigs
   */
  createCanaryConfigs?: Maybe<V1ObjectMeta>;
  /**
   * Create environment
   *
   * Equivalent to POST /v2/environments
   */
  createEnvironments?: Maybe<V1ObjectMeta>;
  /**
   * Create function
   *
   * Equivalent to POST /v2/functions
   */
  createFunctions?: Maybe<V1ObjectMeta>;
  /**
   * Create HTTP trigger
   *
   * Equivalent to POST /v2/triggers/http
   */
  createHttps?: Maybe<V1ObjectMeta>;
  /**
   * Create message queue trigger
   *
   * Equivalent to POST /v2/triggers/messagequeue
   */
  createMessagequeues?: Maybe<V1ObjectMeta>;
  /**
   * Create package
   *
   * Equivalent to POST /v2/packages
   */
  createPackages?: Maybe<V1ObjectMeta>;
  /**
   * Create time trigger
   *
   * Equivalent to POST /v2/triggers/time
   */
  createTimes?: Maybe<V1ObjectMeta>;
  /**
   * Create kubernetes watch
   *
   * Equivalent to POST /v2/watches
   */
  createWatches?: Maybe<V1ObjectMeta>;
  /**
   * Delete archive
   *
   * Equivalent to DELETE /proxy/storage/v1/archive
   */
  deleteArchives?: Maybe<Scalars['JSON']>;
  /**
   * Delete canary config
   *
   * Equivalent to DELETE /v2/canaryconfigs/{canaryConfig}
   */
  deleteCanaryConfig?: Maybe<Scalars['JSON']>;
  /**
   * Delete environment
   *
   * Equivalent to DELETE /v2/environments/{environment}
   */
  deleteEnvironment?: Maybe<Scalars['JSON']>;
  /**
   * Delete function
   *
   * Equivalent to DELETE /v2/functions/{function}
   */
  deleteFunction?: Maybe<Scalars['JSON']>;
  /**
   * Delete HTTP trigger
   *
   * Equivalent to DELETE /v2/triggers/http/{httpTrigger}
   */
  deleteHttp?: Maybe<Scalars['JSON']>;
  /**
   * Delete message queue trigger
   *
   * Equivalent to DELETE /v2/triggers/messagequeue/{mqTrigger}
   */
  deleteMessagequeue?: Maybe<Scalars['JSON']>;
  /**
   * Delete package
   *
   * Equivalent to DELETE /v2/packages/{package}
   */
  deletePackage?: Maybe<Scalars['JSON']>;
  /**
   * Delete time trigger
   *
   * Equivalent to DELETE /v2/triggers/time/{timeTrigger}
   */
  deleteTime?: Maybe<Scalars['JSON']>;
  /**
   * Delete kubernetes watch
   *
   * Equivalent to DELETE /v2/watches/{watch}
   */
  deleteWatch?: Maybe<Scalars['JSON']>;
  /**
   * Update canary config
   *
   * Equivalent to PUT /v2/canaryconfigs/{canaryConfig}
   */
  updateCanaryConfig?: Maybe<V1ObjectMeta>;
  /**
   * Update environment
   *
   * Equivalent to PUT /v2/environments/{environment}
   */
  updateEnvironment?: Maybe<V1ObjectMeta>;
  /**
   * Update function
   *
   * Equivalent to PUT /v2/functions/{function}
   */
  updateFunction?: Maybe<V1ObjectMeta>;
  /**
   * Update HTTP trigger
   *
   * Equivalent to PUT /v2/triggers/http/{httpTrigger}
   */
  updateHttp?: Maybe<V1ObjectMeta>;
  /**
   * Update message queue trigger
   *
   * Equivalent to PUT /v2/triggers/messagequeue/{mqTrigger}
   */
  updateMessagequeue?: Maybe<V1ObjectMeta>;
  /**
   * Update package
   *
   * Equivalent to PUT /v2/packages/{package}
   */
  updatePackage?: Maybe<V1ObjectMeta>;
  /**
   * Update time trigger
   *
   * Equivalent to PUT /v2/triggers/time/{timeTrigger}
   */
  updateTime?: Maybe<V1ObjectMeta>;
  /**
   * Update kubernetes watch
   *
   * Equivalent to PUT /v2/watches/{watch}
   */
  updateWatch?: Maybe<V1ObjectMeta>;
};


export type MutationcreateCanaryConfigsArgs = {
  v1CanaryConfigInput: V1CanaryConfigInput;
};


export type MutationcreateEnvironmentsArgs = {
  v1EnvironmentInput: V1EnvironmentInput;
};


export type MutationcreateFunctionsArgs = {
  v1FunctionInput: V1FunctionInput;
};


export type MutationcreateHttpsArgs = {
  v1HTTPTriggerInput: V1HTTPTriggerInput;
};


export type MutationcreateMessagequeuesArgs = {
  v1MessageQueueTriggerInput: V1MessageQueueTriggerInput;
};


export type MutationcreatePackagesArgs = {
  v1PackageInput: V1PackageInput;
};


export type MutationcreateTimesArgs = {
  v1TimeTriggerInput: V1TimeTriggerInput;
};


export type MutationcreateWatchesArgs = {
  v1KubernetesWatchTriggerInput: V1KubernetesWatchTriggerInput;
};


export type MutationdeleteCanaryConfigArgs = {
  canaryConfig: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteEnvironmentArgs = {
  environment: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteFunctionArgs = {
  function: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteHttpArgs = {
  httpTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeleteMessagequeueArgs = {
  mqTrigger: Scalars['String'];
  namespace?: InputMaybe<Scalars['String']>;
};


export type MutationdeletePackageArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  package: Scalars['String'];
};


export type MutationdeleteTimeArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  timeTrigger: Scalars['String'];
};


export type MutationdeleteWatchArgs = {
  namespace?: InputMaybe<Scalars['String']>;
  watch: Scalars['String'];
};


export type MutationupdateCanaryConfigArgs = {
  canaryConfig: Scalars['String'];
  v1CanaryConfigInput: V1CanaryConfigInput;
};


export type MutationupdateEnvironmentArgs = {
  environment: Scalars['String'];
  v1EnvironmentInput: V1EnvironmentInput;
};


export type MutationupdateFunctionArgs = {
  function: Scalars['String'];
  v1FunctionInput: V1FunctionInput;
};


export type MutationupdateHttpArgs = {
  httpTrigger: Scalars['String'];
  v1HTTPTriggerInput: V1HTTPTriggerInput;
};


export type MutationupdateMessagequeueArgs = {
  mqTrigger: Scalars['String'];
  v1MessageQueueTriggerInput: V1MessageQueueTriggerInput;
};


export type MutationupdatePackageArgs = {
  package: Scalars['String'];
  v1PackageInput: V1PackageInput;
};


export type MutationupdateTimeArgs = {
  timeTrigger: Scalars['String'];
  v1TimeTriggerInput: V1TimeTriggerInput;
};


export type MutationupdateWatchArgs = {
  v1KubernetesWatchTriggerInput: V1KubernetesWatchTriggerInput;
  watch: Scalars['String'];
};

/** CanaryConfig is for canary deployment of two functions. */
export type V1CanaryConfigInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** CanaryConfigSpec defines the canary configuration spec */
  spec: V1CanaryConfigSpecInput;
  /** CanaryConfigStatus represents canary config status */
  status: V1CanaryConfigStatusInput;
};

/** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export type V1ObjectMetaInput = {
  /** Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations */
  annotations?: InputMaybe<Scalars['JSON']>;
  /** The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. */
  clusterName?: InputMaybe<Scalars['String']>;
  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
   *
   * Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  creationTimestamp?: InputMaybe<Scalars['String']>;
  /** Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. */
  deletionGracePeriodSeconds?: InputMaybe<Scalars['Float']>;
  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
   *
   * Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   */
  deletionTimestamp?: InputMaybe<Scalars['String']>;
  /** Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list. */
  finalizers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
   *
   * If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
   *
   * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
   */
  generateName?: InputMaybe<Scalars['String']>;
  /** A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. */
  generation?: InputMaybe<Scalars['Float']>;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  labels?: InputMaybe<Scalars['JSON']>;
  /** ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object. */
  managedFields?: InputMaybe<Array<InputMaybe<V1ManagedFieldsEntryInput>>>;
  /** Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name?: InputMaybe<Scalars['String']>;
  /**
   * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
   *
   * Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   */
  namespace?: InputMaybe<Scalars['String']>;
  /** List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. */
  ownerReferences?: InputMaybe<Array<InputMaybe<V1OwnerReferenceInput>>>;
  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
   *
   * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: InputMaybe<Scalars['String']>;
  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   *
   * DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
   */
  selfLink?: InputMaybe<Scalars['String']>;
  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
   *
   * Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   */
  uid?: InputMaybe<Scalars['String']>;
};

/** ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export type V1ManagedFieldsEntryInput = {
  /** APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1" */
  fieldsType?: InputMaybe<Scalars['String']>;
  /** FieldsV1 holds the first JSON version format as described in the "FieldsV1" type. */
  fieldsV1?: InputMaybe<Scalars['String']>;
  /** Manager is an identifier of the workflow managing these fields. */
  manager?: InputMaybe<Scalars['String']>;
  /** Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'. */
  operation?: InputMaybe<Scalars['String']>;
  /** Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. */
  subresource?: InputMaybe<Scalars['String']>;
  /** Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply' */
  time?: InputMaybe<Scalars['String']>;
};

/** OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export type V1OwnerReferenceInput = {
  /** API version of the referent. */
  apiVersion: Scalars['String'];
  /** If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. */
  blockOwnerDeletion?: InputMaybe<Scalars['Boolean']>;
  /** If true, this reference points to the managing controller. */
  controller?: InputMaybe<Scalars['Boolean']>;
  /** Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind: Scalars['String'];
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
  /** UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids */
  uid: Scalars['String'];
};

/** CanaryConfigSpec defines the canary configuration spec */
export type V1CanaryConfigSpecInput = {
  /** Weight increment interval, string representation of time.Duration, ex : 1m, 2h, 2d (default: "2m") */
  duration: Scalars['String'];
  failureType: Scalars['String'];
  /** Threshold in percentage beyond which the new version of the function is considered unstable */
  failurethreshold: Scalars['Int'];
  /** New version of the function */
  newfunction: Scalars['String'];
  /** Old stable version of the function */
  oldfunction: Scalars['String'];
  /** HTTP trigger that this config references */
  trigger: Scalars['String'];
  /** Weight increment step for function */
  weightincrement: Scalars['Int'];
};

/** CanaryConfigStatus represents canary config status */
export type V1CanaryConfigStatusInput = {
  status: Scalars['String'];
};

/** Environment is environment for building and running user functions. */
export type V1EnvironmentInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
  spec: V1EnvironmentSpecInput;
};

/** EnvironmentSpec contains with builder, runtime and some other related environment settings. */
export type V1EnvironmentSpecInput = {
  /** Istio default blocks all egress traffic for safety. To enable accessibility of external network for builder/function pod, set to 'true'. (Optional) defaults to 'false' */
  allowAccessToExternalNetwork?: InputMaybe<Scalars['Boolean']>;
  /** (Optional) defaults to 'single'. Fission workflow uses 'infinite' to load multiple functions in one function pod. Available value: - single - infinite */
  allowedFunctionsPerContainer?: InputMaybe<Scalars['String']>;
  /** Builder is the setting for environment builder. */
  builder: V1BuilderInput;
  /** ImagePullSecret is the secret for Kubernetes to pull an image from a private registry. */
  imagepullsecret: Scalars['String'];
  /** KeepArchive is used by fetcher to determine if the extracted archive or unarchived file should be placed, which is then used by specialize handler. (This is mainly for the JVM environment because .jar is one kind of zip archive.) */
  keeparchive: Scalars['Boolean'];
  /** The initial pool size for environment */
  poolsize?: InputMaybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirementsInput;
  /** Runtime is the setting for environment runtime. */
  runtime: V1RuntimeInput;
  /** The grace time for pod to perform connection draining before termination. The unit is in seconds. (Optional) defaults to 360 seconds */
  terminationGracePeriod?: InputMaybe<Scalars['Float']>;
  /**
   * Version is the Environment API version
   *
   * Version "1" allows user to run code snippet in a file, and it's supported by most of the environments except tensorflow-serving.
   *
   * Version "2" supports downloading and compiling user function if source archive is not empty.
   *
   * Version "3" is almost the same with v2, but you're able to control the size of pre-warm pool of the environment.
   */
  version: Scalars['Int'];
};

/** Builder is the setting for environment builder. */
export type V1BuilderInput = {
  /** (Optional) Default build command to run for this build environment. */
  command?: InputMaybe<Scalars['String']>;
  /** A single application container that you want to run within a pod. */
  container?: InputMaybe<V1ContainerInput>;
  /** Image for containing the language compilation environment. */
  image?: InputMaybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
};

/** A single application container that you want to run within a pod. */
export type V1ContainerInput = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: InputMaybe<Array<InputMaybe<V1EnvVarInput>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: InputMaybe<Array<InputMaybe<V1EnvFromSourceInput>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets. */
  image?: InputMaybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: InputMaybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: InputMaybe<V1LifecycleInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: InputMaybe<V1ProbeInput>;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  name: Scalars['String'];
  /** List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. */
  ports?: InputMaybe<Array<InputMaybe<V1ContainerPortInput>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: InputMaybe<V1ProbeInput>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: InputMaybe<V1ResourceRequirementsInput>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: InputMaybe<V1SecurityContextInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: InputMaybe<V1ProbeInput>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: InputMaybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: InputMaybe<Scalars['Boolean']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: InputMaybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: InputMaybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: InputMaybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: InputMaybe<Array<InputMaybe<V1VolumeDeviceInput>>>;
  /** Pod volumes to mount into the container's filesystem. Cannot be updated. */
  volumeMounts?: InputMaybe<Array<InputMaybe<V1VolumeMountInput>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: InputMaybe<Scalars['String']>;
};

/** EnvVar represents an environment variable present in a Container. */
export type V1EnvVarInput = {
  /** Name of the environment variable. Must be a C_IDENTIFIER. */
  name: Scalars['String'];
  /** Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  value?: InputMaybe<Scalars['String']>;
  /** EnvVarSource represents a source for the value of an EnvVar. */
  valueFrom?: InputMaybe<V1EnvVarSourceInput>;
};

/** EnvVarSource represents a source for the value of an EnvVar. */
export type V1EnvVarSourceInput = {
  /** Selects a key from a ConfigMap. */
  configMapKeyRef?: InputMaybe<V1ConfigMapKeySelectorInput>;
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: InputMaybe<V1ObjectFieldSelectorInput>;
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: InputMaybe<V1ResourceFieldSelectorInput>;
  /** SecretKeySelector selects a key of a Secret. */
  secretKeyRef?: InputMaybe<V1SecretKeySelectorInput>;
};

/** Selects a key from a ConfigMap. */
export type V1ConfigMapKeySelectorInput = {
  /** The key to select. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its key must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** ObjectFieldSelector selects an APIVersioned field of an object. */
export type V1ObjectFieldSelectorInput = {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Path of the field to select in the specified API version. */
  fieldPath: Scalars['String'];
};

/** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export type V1ResourceFieldSelectorInput = {
  /** Container name: required for volumes, optional for env vars */
  containerName?: InputMaybe<Scalars['String']>;
  /** Specifies the output format of the exposed resources, defaults to "1" */
  divisor?: InputMaybe<Scalars['String']>;
  /** Required: resource to select */
  resource: Scalars['String'];
};

/** SecretKeySelector selects a key of a Secret. */
export type V1SecretKeySelectorInput = {
  /** The key of the secret to select from.  Must be a valid secret key. */
  key: Scalars['String'];
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** EnvFromSource represents the source of a set of ConfigMaps */
export type V1EnvFromSourceInput = {
  /**
   * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
   *
   * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  configMapRef?: InputMaybe<V1ConfigMapEnvSourceInput>;
  /** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * SecretEnvSource selects a Secret to populate the environment variables with.
   *
   * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  secretRef?: InputMaybe<V1SecretEnvSourceInput>;
};

/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.
 *
 * The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 */
export type V1ConfigMapEnvSourceInput = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/**
 * SecretEnvSource selects a Secret to populate the environment variables with.
 *
 * The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 */
export type V1SecretEnvSourceInput = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the Secret must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export type V1LifecycleInput = {
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  postStart?: InputMaybe<V1LifecycleHandlerInput>;
  /** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
  preStop?: InputMaybe<V1LifecycleHandlerInput>;
};

/** LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified. */
export type V1LifecycleHandlerInput = {
  /** ExecAction describes a "run in container" action. */
  exec?: InputMaybe<V1ExecActionInput>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: InputMaybe<V1HTTPGetActionInput>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: InputMaybe<V1TCPSocketActionInput>;
};

/** ExecAction describes a "run in container" action. */
export type V1ExecActionInput = {
  /** Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** HTTPGetAction describes an action based on HTTP Get requests. */
export type V1HTTPGetActionInput = {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  host?: InputMaybe<Scalars['String']>;
  /** Custom headers to set in the request. HTTP allows repeated headers. */
  httpHeaders?: InputMaybe<Array<InputMaybe<V1HTTPHeaderInput>>>;
  /** Path to access on the HTTP server. */
  path?: InputMaybe<Scalars['String']>;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
  /** Scheme to use for connecting to the host. Defaults to HTTP. */
  scheme?: InputMaybe<Scalars['String']>;
};

/** HTTPHeader describes a custom header to be used in HTTP probes */
export type V1HTTPHeaderInput = {
  /** The header field name */
  name: Scalars['String'];
  /** The header field value */
  value: Scalars['String'];
};

/** TCPSocketAction describes an action based on opening a socket */
export type V1TCPSocketActionInput = {
  /** Optional: Host name to connect to, defaults to the pod IP. */
  host?: InputMaybe<Scalars['String']>;
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  port: Scalars['String'];
};

/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export type V1ProbeInput = {
  /** ExecAction describes a "run in container" action. */
  exec?: InputMaybe<V1ExecActionInput>;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
  failureThreshold?: InputMaybe<Scalars['Int']>;
  grpc?: InputMaybe<V1GRPCActionInput>;
  /** HTTPGetAction describes an action based on HTTP Get requests. */
  httpGet?: InputMaybe<V1HTTPGetActionInput>;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  initialDelaySeconds?: InputMaybe<Scalars['Int']>;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
  periodSeconds?: InputMaybe<Scalars['Int']>;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. */
  successThreshold?: InputMaybe<Scalars['Int']>;
  /** TCPSocketAction describes an action based on opening a socket */
  tcpSocket?: InputMaybe<V1TCPSocketActionInput>;
  /** Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset. */
  terminationGracePeriodSeconds?: InputMaybe<Scalars['Float']>;
  /** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes */
  timeoutSeconds?: InputMaybe<Scalars['Int']>;
};

export type V1GRPCActionInput = {
  /** Port number of the gRPC service. Number must be in the range 1 to 65535. */
  port: Scalars['Int'];
  /**
   * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   *
   * If this is not specified, the default behavior is defined by gRPC.
   */
  service: Scalars['String'];
};

/** ContainerPort represents a network port in a single container. */
export type V1ContainerPortInput = {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  containerPort: Scalars['Int'];
  /** What host IP to bind the external port to. */
  hostIP?: InputMaybe<Scalars['String']>;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  hostPort?: InputMaybe<Scalars['Int']>;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. */
  name?: InputMaybe<Scalars['String']>;
  /** Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP". */
  protocol?: InputMaybe<Scalars['String']>;
};

/** ResourceRequirements describes the compute resource requirements. */
export type V1ResourceRequirementsInput = {
  /** Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  limits?: InputMaybe<Scalars['JSON']>;
  /** Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ */
  requests?: InputMaybe<Scalars['JSON']>;
};

/** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export type V1SecurityContextInput = {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. */
  allowPrivilegeEscalation?: InputMaybe<Scalars['Boolean']>;
  /** Adds and removes POSIX capabilities from running containers. */
  capabilities?: InputMaybe<V1CapabilitiesInput>;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows. */
  privileged?: InputMaybe<Scalars['Boolean']>;
  /** procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows. */
  procMount?: InputMaybe<Scalars['String']>;
  /** Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows. */
  readOnlyRootFilesystem?: InputMaybe<Scalars['Boolean']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: InputMaybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: InputMaybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: InputMaybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: InputMaybe<V1SELinuxOptionsInput>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: InputMaybe<V1SeccompProfileInput>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: InputMaybe<V1WindowsSecurityContextOptionsInput>;
};

/** Adds and removes POSIX capabilities from running containers. */
export type V1CapabilitiesInput = {
  /** Added capabilities */
  add?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Removed capabilities */
  drop?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** SELinuxOptions are the labels to be applied to the container */
export type V1SELinuxOptionsInput = {
  /** Level is SELinux level label that applies to the container. */
  level?: InputMaybe<Scalars['String']>;
  /** Role is a SELinux role label that applies to the container. */
  role?: InputMaybe<Scalars['String']>;
  /** Type is a SELinux type label that applies to the container. */
  type?: InputMaybe<Scalars['String']>;
  /** User is a SELinux user label that applies to the container. */
  user?: InputMaybe<Scalars['String']>;
};

/** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export type V1SeccompProfileInput = {
  /** localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must only be set if type is "Localhost". */
  localhostProfile?: InputMaybe<Scalars['String']>;
  /**
   * type indicates which kind of seccomp profile will be applied. Valid options are:
   *
   * Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
   */
  type: Scalars['String'];
};

/** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export type V1WindowsSecurityContextOptionsInput = {
  /** GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. */
  gmsaCredentialSpec?: InputMaybe<Scalars['String']>;
  /** GMSACredentialSpecName is the name of the GMSA credential spec to use. */
  gmsaCredentialSpecName?: InputMaybe<Scalars['String']>;
  /** HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true. */
  hostProcess?: InputMaybe<Scalars['Boolean']>;
  /** The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsUserName?: InputMaybe<Scalars['String']>;
};

/** volumeDevice describes a mapping of a raw block device within a container. */
export type V1VolumeDeviceInput = {
  /** devicePath is the path inside of the container that the device will be mapped to. */
  devicePath: Scalars['String'];
  /** name must match the name of a persistentVolumeClaim in the pod */
  name: Scalars['String'];
};

/** VolumeMount describes a mounting of a Volume within a container. */
export type V1VolumeMountInput = {
  /** Path within the container at which the volume should be mounted.  Must not contain ':'. */
  mountPath: Scalars['String'];
  /** mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. */
  mountPropagation?: InputMaybe<Scalars['String']>;
  /** This must match the Name of a Volume. */
  name: Scalars['String'];
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  subPath?: InputMaybe<Scalars['String']>;
  /** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. */
  subPathExpr?: InputMaybe<Scalars['String']>;
};

/** PodSpec is a description of a pod. */
export type V1PodSpecInput = {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  activeDeadlineSeconds?: InputMaybe<Scalars['Float']>;
  /** Affinity is a group of affinity scheduling rules. */
  affinity?: InputMaybe<V1AffinityInput>;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  automountServiceAccountToken?: InputMaybe<Scalars['Boolean']>;
  /** List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated. */
  containers: Array<InputMaybe<V1ContainerInput>>;
  /** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
  dnsConfig?: InputMaybe<V1PodDNSConfigInput>;
  /** Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. */
  dnsPolicy?: InputMaybe<Scalars['String']>;
  /** EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true. */
  enableServiceLinks?: InputMaybe<Scalars['Boolean']>;
  /** List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is beta-level and available on clusters that haven't disabled the EphemeralContainers feature gate. */
  ephemeralContainers?: InputMaybe<Array<InputMaybe<V1EphemeralContainerInput>>>;
  /** HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods. */
  hostAliases?: InputMaybe<Array<InputMaybe<V1HostAliasInput>>>;
  /** Use the host's ipc namespace. Optional: Default to false. */
  hostIPC?: InputMaybe<Scalars['Boolean']>;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false. */
  hostNetwork?: InputMaybe<Scalars['Boolean']>;
  /** Use the host's pid namespace. Optional: Default to false. */
  hostPID?: InputMaybe<Scalars['Boolean']>;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  hostname?: InputMaybe<Scalars['String']>;
  /** ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod */
  imagePullSecrets?: InputMaybe<Array<InputMaybe<V1LocalObjectReferenceInput>>>;
  /** List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/ */
  initContainers?: InputMaybe<Array<InputMaybe<V1ContainerInput>>>;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  nodeName?: InputMaybe<Scalars['String']>;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/ */
  nodeSelector?: InputMaybe<Scalars['JSON']>;
  /** PodOS defines the OS parameters of a pod. */
  os?: InputMaybe<V1PodOSInput>;
  /** Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md This field is beta-level as of Kubernetes v1.18, and is only honored by servers that enable the PodOverhead feature. */
  overhead?: InputMaybe<Scalars['JSON']>;
  /** PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is beta-level, gated by the NonPreemptingPriority feature-gate. */
  preemptionPolicy?: InputMaybe<Scalars['String']>;
  /** The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. */
  priority?: InputMaybe<Scalars['Int']>;
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  priorityClassName?: InputMaybe<Scalars['String']>;
  /** If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates */
  readinessGates?: InputMaybe<Array<InputMaybe<V1PodReadinessGateInput>>>;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy */
  restartPolicy?: InputMaybe<Scalars['String']>;
  /** RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class This is a beta feature as of Kubernetes v1.14. */
  runtimeClassName?: InputMaybe<Scalars['String']>;
  /** If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler. */
  schedulerName?: InputMaybe<Scalars['String']>;
  /** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
  securityContext?: InputMaybe<V1PodSecurityContextInput>;
  /** DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead. */
  serviceAccount?: InputMaybe<Scalars['String']>;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/ */
  serviceAccountName?: InputMaybe<Scalars['String']>;
  /** If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false. */
  setHostnameAsFQDN?: InputMaybe<Scalars['Boolean']>;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. */
  shareProcessNamespace?: InputMaybe<Scalars['Boolean']>;
  /** If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all. */
  subdomain?: InputMaybe<Scalars['String']>;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds. */
  terminationGracePeriodSeconds?: InputMaybe<Scalars['Float']>;
  /** If specified, the pod's tolerations. */
  tolerations?: InputMaybe<Array<InputMaybe<V1TolerationInput>>>;
  /** TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed. */
  topologySpreadConstraints?: InputMaybe<Array<InputMaybe<V1TopologySpreadConstraintInput>>>;
  /** List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes */
  volumes?: InputMaybe<Array<InputMaybe<V1VolumeInput>>>;
};

/** Affinity is a group of affinity scheduling rules. */
export type V1AffinityInput = {
  /** Node affinity is a group of node affinity scheduling rules. */
  nodeAffinity?: InputMaybe<V1NodeAffinityInput>;
  /** Pod affinity is a group of inter pod affinity scheduling rules. */
  podAffinity?: InputMaybe<V1PodAffinityInput>;
  /** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
  podAntiAffinity?: InputMaybe<V1PodAntiAffinityInput>;
};

/** Node affinity is a group of node affinity scheduling rules. */
export type V1NodeAffinityInput = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1PreferredSchedulingTermInput>>>;
  /** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
  requiredDuringSchedulingIgnoredDuringExecution?: InputMaybe<V1NodeSelectorInput>;
};

/** An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export type V1PreferredSchedulingTermInput = {
  /** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
  preference: V1NodeSelectorTermInput;
  /** Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export type V1NodeSelectorTermInput = {
  /** A list of node selector requirements by node's labels. */
  matchExpressions?: InputMaybe<Array<InputMaybe<V1NodeSelectorRequirementInput>>>;
  /** A list of node selector requirements by node's fields. */
  matchFields?: InputMaybe<Array<InputMaybe<V1NodeSelectorRequirementInput>>>;
};

/** A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1NodeSelectorRequirementInput = {
  /** The label key that the selector applies to. */
  key: Scalars['String'];
  /** Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  operator: Scalars['String'];
  /** An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export type V1NodeSelectorInput = {
  /** Required. A list of node selector terms. The terms are ORed. */
  nodeSelectorTerms: Array<InputMaybe<V1NodeSelectorTermInput>>;
};

/** Pod affinity is a group of inter pod affinity scheduling rules. */
export type V1PodAffinityInput = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1WeightedPodAffinityTermInput>>>;
  /** If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1PodAffinityTermInput>>>;
};

/** The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export type V1WeightedPodAffinityTermInput = {
  /** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
  podAffinityTerm: V1PodAffinityTermInput;
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100. */
  weight: Scalars['Int'];
};

/** Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export type V1PodAffinityTermInput = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: InputMaybe<V1LabelSelectorInput>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  namespaceSelector?: InputMaybe<V1LabelSelectorInput>;
  /** namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace" */
  namespaces?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed. */
  topologyKey: Scalars['String'];
};

/** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export type V1LabelSelectorInput = {
  /** matchExpressions is a list of label selector requirements. The requirements are ANDed. */
  matchExpressions?: InputMaybe<Array<InputMaybe<V1LabelSelectorRequirementInput>>>;
  /** matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  matchLabels?: InputMaybe<Scalars['JSON']>;
};

/** A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export type V1LabelSelectorRequirementInput = {
  /** key is the label key that the selector applies to. */
  key: Scalars['String'];
  /** operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. */
  operator: Scalars['String'];
  /** values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch. */
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export type V1PodAntiAffinityInput = {
  /** The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred. */
  preferredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1WeightedPodAffinityTermInput>>>;
  /** If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied. */
  requiredDuringSchedulingIgnoredDuringExecution?: InputMaybe<Array<InputMaybe<V1PodAffinityTermInput>>>;
};

/** PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export type V1PodDNSConfigInput = {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  nameservers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy. */
  options?: InputMaybe<Array<InputMaybe<V1PodDNSConfigOptionInput>>>;
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  searches?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** PodDNSConfigOption defines DNS resolver options of a pod. */
export type V1PodDNSConfigOptionInput = {
  /** Required. */
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/**
 * An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.
 *
 * To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
 *
 * This is a beta feature available on clusters that haven't disabled the EphemeralContainers feature gate.
 */
export type V1EphemeralContainerInput = {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  args?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell */
  command?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** List of environment variables to set in the container. Cannot be updated. */
  env?: InputMaybe<Array<InputMaybe<V1EnvVarInput>>>;
  /** List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. */
  envFrom?: InputMaybe<Array<InputMaybe<V1EnvFromSourceInput>>>;
  /** Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images */
  image?: InputMaybe<Scalars['String']>;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images */
  imagePullPolicy?: InputMaybe<Scalars['String']>;
  /** Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
  lifecycle?: InputMaybe<V1LifecycleInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  livenessProbe?: InputMaybe<V1ProbeInput>;
  /** Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers. */
  name: Scalars['String'];
  /** Ports are not allowed for ephemeral containers. */
  ports?: InputMaybe<Array<InputMaybe<V1ContainerPortInput>>>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  readinessProbe?: InputMaybe<V1ProbeInput>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: InputMaybe<V1ResourceRequirementsInput>;
  /** SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
  securityContext?: InputMaybe<V1SecurityContextInput>;
  /** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
  startupProbe?: InputMaybe<V1ProbeInput>;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. */
  stdin?: InputMaybe<Scalars['Boolean']>;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false */
  stdinOnce?: InputMaybe<Scalars['Boolean']>;
  /**
   * If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.
   *
   * The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
   */
  targetContainerName?: InputMaybe<Scalars['String']>;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. */
  terminationMessagePath?: InputMaybe<Scalars['String']>;
  /** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  terminationMessagePolicy?: InputMaybe<Scalars['String']>;
  /** Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. */
  tty?: InputMaybe<Scalars['Boolean']>;
  /** volumeDevices is the list of block devices to be used by the container. */
  volumeDevices?: InputMaybe<Array<InputMaybe<V1VolumeDeviceInput>>>;
  /** Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated. */
  volumeMounts?: InputMaybe<Array<InputMaybe<V1VolumeMountInput>>>;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  workingDir?: InputMaybe<Scalars['String']>;
};

/** HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export type V1HostAliasInput = {
  /** Hostnames for the above IP address. */
  hostnames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** IP address of the host file entry. */
  ip?: InputMaybe<Scalars['String']>;
};

/** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export type V1LocalObjectReferenceInput = {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
};

/** PodOS defines the OS parameters of a pod. */
export type V1PodOSInput = {
  /** Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null */
  name: Scalars['String'];
};

/** PodReadinessGate contains the reference to a pod condition */
export type V1PodReadinessGateInput = {
  /** ConditionType refers to a condition in the pod's condition list with matching type. */
  conditionType: Scalars['String'];
};

/** PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export type V1PodSecurityContextInput = {
  /**
   * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
   *
   * 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw
   */
  fsGroup?: InputMaybe<Scalars['Float']>;
  /** fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows. */
  fsGroupChangePolicy?: InputMaybe<Scalars['String']>;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsGroup?: InputMaybe<Scalars['Float']>;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  runAsNonRoot?: InputMaybe<Scalars['Boolean']>;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows. */
  runAsUser?: InputMaybe<Scalars['Float']>;
  /** SELinuxOptions are the labels to be applied to the container */
  seLinuxOptions?: InputMaybe<V1SELinuxOptionsInput>;
  /** SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
  seccompProfile?: InputMaybe<V1SeccompProfileInput>;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows. */
  supplementalGroups?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows. */
  sysctls?: InputMaybe<Array<InputMaybe<V1SysctlInput>>>;
  /** WindowsSecurityContextOptions contain Windows-specific options and credentials. */
  windowsOptions?: InputMaybe<V1WindowsSecurityContextOptionsInput>;
};

/** Sysctl defines a kernel parameter to be set */
export type V1SysctlInput = {
  /** Name of a property to set */
  name: Scalars['String'];
  /** Value of a property to set */
  value: Scalars['String'];
};

/** The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export type V1TolerationInput = {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  effect?: InputMaybe<Scalars['String']>;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  key?: InputMaybe<Scalars['String']>;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  operator?: InputMaybe<Scalars['String']>;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  tolerationSeconds?: InputMaybe<Scalars['Float']>;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  value?: InputMaybe<Scalars['String']>;
};

/** TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export type V1TopologySpreadConstraintInput = {
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  labelSelector?: InputMaybe<V1LabelSelectorInput>;
  /** MaxSkew describes the degree to which pods may be unevenly distributed. When `whenUnsatisfiable=DoNotSchedule`, it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: */
  maxSkew: Scalars['Int'];
  /** TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field. */
  topologyKey: Scalars['String'];
  /**
   * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,
   *   but giving higher precedence to topologies that would help reduce the
   *   skew.
   * A constraint is considered "Unsatisfiable" for an incoming pod if and only if every possible node assignment for that pod would violate "MaxSkew" on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1:
   */
  whenUnsatisfiable: Scalars['String'];
};

/** Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export type V1VolumeInput = {
  /**
   * Represents a Persistent Disk resource in AWS.
   *
   * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
   */
  awsElasticBlockStore?: InputMaybe<V1AWSElasticBlockStoreVolumeSourceInput>;
  /** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
  azureDisk?: InputMaybe<V1AzureDiskVolumeSourceInput>;
  /** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
  azureFile?: InputMaybe<V1AzureFileVolumeSourceInput>;
  /** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
  cephfs?: InputMaybe<V1CephFSVolumeSourceInput>;
  /** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
  cinder?: InputMaybe<V1CinderVolumeSourceInput>;
  /**
   * Adapts a ConfigMap into a volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
   */
  configMap?: InputMaybe<V1ConfigMapVolumeSourceInput>;
  /** Represents a source location of a volume to mount, managed by an external CSI driver */
  csi?: InputMaybe<V1CSIVolumeSourceInput>;
  /** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
  downwardAPI?: InputMaybe<V1DownwardAPIVolumeSourceInput>;
  /** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
  emptyDir?: InputMaybe<V1EmptyDirVolumeSourceInput>;
  /** Represents an ephemeral volume that is handled by a normal storage driver. */
  ephemeral?: InputMaybe<V1EphemeralVolumeSourceInput>;
  /** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
  fc?: InputMaybe<V1FCVolumeSourceInput>;
  /** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
  flexVolume?: InputMaybe<V1FlexVolumeSourceInput>;
  /** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
  flocker?: InputMaybe<V1FlockerVolumeSourceInput>;
  /**
   * Represents a Persistent Disk resource in Google Compute Engine.
   *
   * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
   */
  gcePersistentDisk?: InputMaybe<V1GCEPersistentDiskVolumeSourceInput>;
  /**
   * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
   *
   * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
   */
  gitRepo?: InputMaybe<V1GitRepoVolumeSourceInput>;
  /** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
  glusterfs?: InputMaybe<V1GlusterfsVolumeSourceInput>;
  /** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
  hostPath?: InputMaybe<V1HostPathVolumeSourceInput>;
  /** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
  iscsi?: InputMaybe<V1ISCSIVolumeSourceInput>;
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name: Scalars['String'];
  /** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
  nfs?: InputMaybe<V1NFSVolumeSourceInput>;
  /** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
  persistentVolumeClaim?: InputMaybe<V1PersistentVolumeClaimVolumeSourceInput>;
  /** Represents a Photon Controller persistent disk resource. */
  photonPersistentDisk?: InputMaybe<V1PhotonPersistentDiskVolumeSourceInput>;
  /** PortworxVolumeSource represents a Portworx volume resource. */
  portworxVolume?: InputMaybe<V1PortworxVolumeSourceInput>;
  /** Represents a projected volume source */
  projected?: InputMaybe<V1ProjectedVolumeSourceInput>;
  /** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
  quobyte?: InputMaybe<V1QuobyteVolumeSourceInput>;
  /** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
  rbd?: InputMaybe<V1RBDVolumeSourceInput>;
  /** ScaleIOVolumeSource represents a persistent ScaleIO volume */
  scaleIO?: InputMaybe<V1ScaleIOVolumeSourceInput>;
  /**
   * Adapts a Secret into a volume.
   *
   * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
   */
  secret?: InputMaybe<V1SecretVolumeSourceInput>;
  /** Represents a StorageOS persistent volume resource. */
  storageos?: InputMaybe<V1StorageOSVolumeSourceInput>;
  /** Represents a vSphere volume resource. */
  vsphereVolume?: InputMaybe<V1VsphereVirtualDiskVolumeSourceInput>;
};

/**
 * Represents a Persistent Disk resource in AWS.
 *
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export type V1AWSElasticBlockStoreVolumeSourceInput = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  fsType?: InputMaybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  partition?: InputMaybe<Scalars['Int']>;
  /** Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore */
  volumeID: Scalars['String'];
};

/** AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export type V1AzureDiskVolumeSourceInput = {
  /** Host Caching mode: None, Read Only, Read Write. */
  cachingMode?: InputMaybe<Scalars['String']>;
  /** The Name of the data disk in the blob storage */
  diskName: Scalars['String'];
  /** The URI the data disk in the blob storage */
  diskURI: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared */
  kind?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/** AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export type V1AzureFileVolumeSourceInput = {
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** the name of secret that contains Azure Storage Account Name and Key */
  secretName: Scalars['String'];
  /** Share Name */
  shareName: Scalars['String'];
};

/** Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export type V1CephFSVolumeSourceInput = {
  /** Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  monitors: Array<InputMaybe<Scalars['String']>>;
  /** Optional: Used as the mounted root, rather than the full Ceph tree, default is / */
  path?: InputMaybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  secretFile?: InputMaybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it */
  user?: InputMaybe<Scalars['String']>;
};

/** Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export type V1CinderVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  fsType?: InputMaybe<Scalars['String']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md */
  volumeID: Scalars['String'];
};

/**
 * Adapts a ConfigMap into a volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 */
export type V1ConfigMapVolumeSourceInput = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** Maps a string key to a path within a volume. */
export type V1KeyToPathInput = {
  /** The key to project. */
  key: Scalars['String'];
  /** Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: InputMaybe<Scalars['Int']>;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  path: Scalars['String'];
};

/** Represents a source location of a volume to mount, managed by an external CSI driver */
export type V1CSIVolumeSourceInput = {
  /** Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply. */
  fsType?: InputMaybe<Scalars['String']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  nodePublishSecretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** Specifies a read-only configuration for the volume. Defaults to false (read/write). */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values. */
  volumeAttributes?: InputMaybe<Scalars['JSON']>;
};

/** DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export type V1DownwardAPIVolumeSourceInput = {
  /** Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** Items is a list of downward API volume file */
  items?: InputMaybe<Array<InputMaybe<V1DownwardAPIVolumeFileInput>>>;
};

/** DownwardAPIVolumeFile represents information to create the file containing the pod field */
export type V1DownwardAPIVolumeFileInput = {
  /** ObjectFieldSelector selects an APIVersioned field of an object. */
  fieldRef?: InputMaybe<V1ObjectFieldSelectorInput>;
  /** Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  mode?: InputMaybe<Scalars['Int']>;
  /** Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  path: Scalars['String'];
  /** ResourceFieldSelector represents container resources (cpu, memory) and their output format */
  resourceFieldRef?: InputMaybe<V1ResourceFieldSelectorInput>;
};

/** Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export type V1EmptyDirVolumeSourceInput = {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
  medium?: InputMaybe<Scalars['String']>;
  /** Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  sizeLimit?: InputMaybe<Scalars['String']>;
};

/** Represents an ephemeral volume that is handled by a normal storage driver. */
export type V1EphemeralVolumeSourceInput = {
  /** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
  volumeClaimTemplate?: InputMaybe<V1PersistentVolumeClaimTemplateInput>;
};

/** PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export type V1PersistentVolumeClaimTemplateInput = {
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata?: InputMaybe<V1ObjectMetaInput>;
  /** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
  spec: V1PersistentVolumeClaimSpecInput;
};

/** PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export type V1PersistentVolumeClaimSpecInput = {
  /** AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1 */
  accessModes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSource?: InputMaybe<V1TypedLocalObjectReferenceInput>;
  /** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
  dataSourceRef?: InputMaybe<V1TypedLocalObjectReferenceInput>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources?: InputMaybe<V1ResourceRequirementsInput>;
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: InputMaybe<V1LabelSelectorInput>;
  /** Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1 */
  storageClassName?: InputMaybe<Scalars['String']>;
  /** volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. */
  volumeMode?: InputMaybe<Scalars['String']>;
  /** VolumeName is the binding reference to the PersistentVolume backing this claim. */
  volumeName?: InputMaybe<Scalars['String']>;
};

/** TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export type V1TypedLocalObjectReferenceInput = {
  /** APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required. */
  apiGroup: Scalars['String'];
  /** Kind is the type of resource being referenced */
  kind: Scalars['String'];
  /** Name is the name of resource being referenced */
  name: Scalars['String'];
};

/** Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export type V1FCVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Optional: FC target lun number */
  lun?: InputMaybe<Scalars['Int']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Optional: FC target worldwide names (WWNs) */
  targetWWNs?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. */
  wwids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export type V1FlexVolumeSourceInput = {
  /** Driver is the name of the driver to use for this volume. */
  driver: Scalars['String'];
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Optional: Extra command options if any. */
  options?: InputMaybe<Scalars['JSON']>;
  /** Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
};

/** Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export type V1FlockerVolumeSourceInput = {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  datasetName?: InputMaybe<Scalars['String']>;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  datasetUUID?: InputMaybe<Scalars['String']>;
};

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 *
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export type V1GCEPersistentDiskVolumeSourceInput = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  fsType?: InputMaybe<Scalars['String']>;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  partition?: InputMaybe<Scalars['Int']>;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  pdName: Scalars['String'];
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.
 *
 * DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
export type V1GitRepoVolumeSourceInput = {
  /** Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  directory?: InputMaybe<Scalars['String']>;
  /** Repository URL */
  repository: Scalars['String'];
  /** Commit hash for the specified revision. */
  revision?: InputMaybe<Scalars['String']>;
};

/** Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export type V1GlusterfsVolumeSourceInput = {
  /** EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  endpoints: Scalars['String'];
  /** Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  path: Scalars['String'];
  /** ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export type V1HostPathVolumeSourceInput = {
  /** Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  path: Scalars['String'];
  /** Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
  type?: InputMaybe<Scalars['String']>;
};

/** Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export type V1ISCSIVolumeSourceInput = {
  /** whether support iSCSI Discovery CHAP authentication */
  chapAuthDiscovery?: InputMaybe<Scalars['Boolean']>;
  /** whether support iSCSI Session CHAP authentication */
  chapAuthSession?: InputMaybe<Scalars['Boolean']>;
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi */
  fsType?: InputMaybe<Scalars['String']>;
  /** Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection. */
  initiatorName?: InputMaybe<Scalars['String']>;
  /** Target iSCSI Qualified Name. */
  iqn: Scalars['String'];
  /** iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  iscsiInterface?: InputMaybe<Scalars['String']>;
  /** iSCSI Target Lun number. */
  lun: Scalars['Int'];
  /** iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  portals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  targetPortal: Scalars['String'];
};

/** Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export type V1NFSVolumeSourceInput = {
  /** Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  path: Scalars['String'];
  /** ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs */
  server: Scalars['String'];
};

/** PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export type V1PersistentVolumeClaimVolumeSourceInput = {
  /** ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims */
  claimName: Scalars['String'];
  /** Will force the ReadOnly setting in VolumeMounts. Default false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a Photon Controller persistent disk resource. */
export type V1PhotonPersistentDiskVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** ID that identifies Photon Controller persistent disk */
  pdID: Scalars['String'];
};

/** PortworxVolumeSource represents a Portworx volume resource. */
export type V1PortworxVolumeSourceInput = {
  /** FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** VolumeID uniquely identifies a Portworx volume */
  volumeID: Scalars['String'];
};

/** Represents a projected volume source */
export type V1ProjectedVolumeSourceInput = {
  /** Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** list of volume projections */
  sources: Array<InputMaybe<V1VolumeProjectionInput>>;
};

/** Projection that may be projected along with other supported volume types */
export type V1VolumeProjectionInput = {
  /**
   * Adapts a ConfigMap into a projected volume.
   *
   * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
   */
  configMap?: InputMaybe<V1ConfigMapProjectionInput>;
  /** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
  downwardAPI?: InputMaybe<V1DownwardAPIProjectionInput>;
  /**
   * Adapts a secret into a projected volume.
   *
   * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
   */
  secret?: InputMaybe<V1SecretProjectionInput>;
  /** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
  serviceAccountToken?: InputMaybe<V1ServiceAccountTokenProjectionInput>;
};

/**
 * Adapts a ConfigMap into a projected volume.
 *
 * The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 */
export type V1ConfigMapProjectionInput = {
  /** If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the ConfigMap or its keys must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export type V1DownwardAPIProjectionInput = {
  /** Items is a list of DownwardAPIVolume file */
  items?: InputMaybe<Array<InputMaybe<V1DownwardAPIVolumeFileInput>>>;
};

/**
 * Adapts a secret into a projected volume.
 *
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export type V1SecretProjectionInput = {
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  name?: InputMaybe<Scalars['String']>;
  /** Specify whether the Secret or its key must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
};

/** ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export type V1ServiceAccountTokenProjectionInput = {
  /** Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. */
  audience?: InputMaybe<Scalars['String']>;
  /** ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. */
  expirationSeconds?: InputMaybe<Scalars['Float']>;
  /** Path is the path relative to the mount point of the file to project the token into. */
  path: Scalars['String'];
};

/** Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export type V1QuobyteVolumeSourceInput = {
  /** Group to map volume access to Default is no group */
  group?: InputMaybe<Scalars['String']>;
  /** ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  registry: Scalars['String'];
  /** Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin */
  tenant?: InputMaybe<Scalars['String']>;
  /** User to map volume access to Defaults to serivceaccount user */
  user?: InputMaybe<Scalars['String']>;
  /** Volume is a string that references an already created Quobyte volume by name. */
  volume: Scalars['String'];
};

/** Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export type V1RBDVolumeSourceInput = {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd */
  fsType?: InputMaybe<Scalars['String']>;
  /** The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  image: Scalars['String'];
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  keyring?: InputMaybe<Scalars['String']>;
  /** A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  monitors: Array<InputMaybe<Scalars['String']>>;
  /** The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  pool?: InputMaybe<Scalars['String']>;
  /** ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it */
  user?: InputMaybe<Scalars['String']>;
};

/** ScaleIOVolumeSource represents a persistent ScaleIO volume */
export type V1ScaleIOVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs". */
  fsType?: InputMaybe<Scalars['String']>;
  /** The host address of the ScaleIO API Gateway. */
  gateway: Scalars['String'];
  /** The name of the ScaleIO Protection Domain for the configured storage. */
  protectionDomain?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef: V1LocalObjectReferenceInput;
  /** Flag to enable/disable SSL communication with Gateway, default false */
  sslEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. */
  storageMode?: InputMaybe<Scalars['String']>;
  /** The ScaleIO Storage Pool associated with the protection domain. */
  storagePool?: InputMaybe<Scalars['String']>;
  /** The name of the storage system as configured in ScaleIO. */
  system: Scalars['String'];
  /** The name of a volume already created in the ScaleIO system that is associated with this volume source. */
  volumeName?: InputMaybe<Scalars['String']>;
};

/**
 * Adapts a Secret into a volume.
 *
 * The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 */
export type V1SecretVolumeSourceInput = {
  /** Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  defaultMode?: InputMaybe<Scalars['Int']>;
  /** If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'. */
  items?: InputMaybe<Array<InputMaybe<V1KeyToPathInput>>>;
  /** Specify whether the Secret or its keys must be defined */
  optional?: InputMaybe<Scalars['Boolean']>;
  /** Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret */
  secretName?: InputMaybe<Scalars['String']>;
};

/** Represents a StorageOS persistent volume resource. */
export type V1StorageOSVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. */
  readOnly?: InputMaybe<Scalars['Boolean']>;
  /** LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
  secretRef?: InputMaybe<V1LocalObjectReferenceInput>;
  /** VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace. */
  volumeName?: InputMaybe<Scalars['String']>;
  /** VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created. */
  volumeNamespace?: InputMaybe<Scalars['String']>;
};

/** Represents a vSphere volume resource. */
export type V1VsphereVirtualDiskVolumeSourceInput = {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  fsType?: InputMaybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. */
  storagePolicyID?: InputMaybe<Scalars['String']>;
  /** Storage Policy Based Management (SPBM) profile name. */
  storagePolicyName?: InputMaybe<Scalars['String']>;
  /** Path that identifies vSphere volume vmdk */
  volumePath: Scalars['String'];
};

/** Runtime is the setting for environment runtime. */
export type V1RuntimeInput = {
  /** A single application container that you want to run within a pod. */
  container?: InputMaybe<V1ContainerInput>;
  /** Image for containing the language runtime. */
  image: Scalars['String'];
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
};

/** Function is function runs within environment runtime with given package and secrets/configmaps. */
export type V1FunctionInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** FunctionSpec describes the contents of the function. */
  spec: V1FunctionSpecInput;
};

/** FunctionSpec describes the contents of the function. */
export type V1FunctionSpecInput = {
  /** Maximum number of pods to be specialized which will serve requests This is optional. If not specified default value will be taken as 500 */
  concurrency?: InputMaybe<Scalars['Int']>;
  /** Reference to a list of configmaps. */
  configmaps?: InputMaybe<Array<InputMaybe<V1ConfigMapReferenceInput>>>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReferenceInput;
  /** FunctionTimeout provides a maximum amount of duration within which a request for a particular function execution should be complete. This is optional. If not specified default value will be taken as 60s */
  functionTimeout?: InputMaybe<Scalars['Int']>;
  /** IdleTimeout specifies the length of time that a function is idle before the function pod(s) are eligible for deletion. If no traffic to the function is detected within the idle timeout, the executor will then recycle the function pod(s) to release resources. */
  idletimeout?: InputMaybe<Scalars['Int']>;
  /**
   * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
   *
   * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
   */
  invokeStrategy: V1InvokeStrategyInput;
  /** OnceOnly specifies if specialized pod will serve exactly one request in its lifetime and would be garbage collected after serving that one request This is optional. If not specified default value will be taken as false */
  onceOnly?: InputMaybe<Scalars['Boolean']>;
  /** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
  package: V1FunctionPackageRefInput;
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
  /** RequestsPerPod indicates the maximum number of concurrent requests that can be served by a specialized pod This is optional. If not specified default value will be taken as 1 */
  requestsPerPod?: InputMaybe<Scalars['Int']>;
  /** ResourceRequirements describes the compute resource requirements. */
  resources: V1ResourceRequirementsInput;
  /** Reference to a list of secrets. */
  secrets?: InputMaybe<Array<InputMaybe<V1SecretReferenceInput>>>;
};

/** ConfigMapReference is a reference to a kubernetes configmap. */
export type V1ConfigMapReferenceInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** EnvironmentReference is a reference to an environment. */
export type V1EnvironmentReferenceInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/**
 * InvokeStrategy is a set of controls over how the function executes. It affects the performance and resource usage of the function.
 *
 * An InvokeStrategy is of one of two types: ExecutionStrategy, which controls low-level parameters such as which ExecutorType to use, when to autoscale, minimum and maximum number of running instances, etc. A higher-level AbstractInvokeStrategy will also be supported; this strategy would specify the target request rate of the function, the target latency statistics, and the target cost (in terms of compute resources).
 */
export type V1InvokeStrategyInput = {
  /**
   * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
   *
   * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
   *
   * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
   */
  executionStrategy: V1ExecutionStrategyInput;
  /** StrategyType is the strategy type of function. Now it only supports 'execution'. */
  strategyType: Scalars['String'];
};

/**
 * ExecutionStrategy specifies low-level parameters for function execution, such as the number of instances.
 *
 * MinScale affects the cold start behavior for a function. If MinScale is 0 then the deployment is created on first invocation of function and is good for requests of asynchronous nature. If MinScale is greater than 0 then MinScale number of pods are created at the time of creation of function. This ensures faster response during first invocation at the cost of consuming resources.
 *
 * MaxScale is the maximum number of pods that function will scale to based on TargetCPUPercent and resources allocated to the function pod.
 */
export type V1ExecutionStrategyInput = {
  /**
   * ExecutorType is the executor type of function used. Defaults to "poolmgr".
   *
   * Available value:
   *  - poolmgr
   *  - newdeploy
   *  - container
   */
  executorType: Scalars['String'];
  /** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
  hpaBehavior?: InputMaybe<V2beta2HorizontalPodAutoscalerBehaviorInput>;
  /** hpaMetrics is the list of metrics used to determine the desired replica count of the Deployment created for the function. Applicable for executor type newdeploy and container. */
  hpaMetrics?: InputMaybe<Array<InputMaybe<V2beta2MetricSpecInput>>>;
  /** This is only for newdeploy to set up maximum replicas of deployment. */
  maxScale: Scalars['Int'];
  /** This is only for newdeploy to set up minimum replicas of deployment. */
  minScale: Scalars['Int'];
  /** This is the timeout setting for executor to wait for pod specialization. */
  specializationTimeout: Scalars['Int'];
  /** Deprecated: use hpaMetrics instead. This is only for executor type newdeploy and container to set up target CPU utilization of HPA. Applicable for executor type newdeploy and container. */
  targetCPUPercent: Scalars['Int'];
};

/** HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export type V2beta2HorizontalPodAutoscalerBehaviorInput = {
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleDown?: InputMaybe<V2beta2HPAScalingRulesInput>;
  /** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
  scaleUp?: InputMaybe<V2beta2HPAScalingRulesInput>;
};

/** HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export type V2beta2HPAScalingRulesInput = {
  /** policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid */
  policies?: InputMaybe<Array<InputMaybe<V2beta2HPAScalingPolicyInput>>>;
  /** selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used. */
  selectPolicy?: InputMaybe<Scalars['String']>;
  /** StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long). */
  stabilizationWindowSeconds?: InputMaybe<Scalars['Int']>;
};

/** HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export type V2beta2HPAScalingPolicyInput = {
  /** PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min). */
  periodSeconds: Scalars['Int'];
  /** Type is used to specify the scaling policy. */
  type: Scalars['String'];
  /** Value contains the amount of change which is permitted by the policy. It must be greater than zero */
  value: Scalars['Int'];
};

/** MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export type V2beta2MetricSpecInput = {
  /** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  containerResource?: InputMaybe<V2beta2ContainerResourceMetricSourceInput>;
  /** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
  external?: InputMaybe<V2beta2ExternalMetricSourceInput>;
  /** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
  object?: InputMaybe<V2beta2ObjectMetricSourceInput>;
  /** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
  pods?: InputMaybe<V2beta2PodsMetricSourceInput>;
  /** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
  resource?: InputMaybe<V2beta2ResourceMetricSourceInput>;
  /** type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled */
  type: Scalars['String'];
};

/** ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ContainerResourceMetricSourceInput = {
  /** container is the name of the container in the pods of the scaling target */
  container: Scalars['String'];
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** MetricTarget defines the target value, average value, or average utilization of a specific metric */
export type V2beta2MetricTargetInput = {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  averageUtilization?: InputMaybe<Scalars['Int']>;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  averageValue?: InputMaybe<Scalars['String']>;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  type: Scalars['String'];
  /** value is the target value of the metric (as a quantity). */
  value?: InputMaybe<Scalars['String']>;
};

/** ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export type V2beta2ExternalMetricSourceInput = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifierInput;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** MetricIdentifier defines the name and optionally selector for a metric */
export type V2beta2MetricIdentifierInput = {
  /** name is the name of the given metric */
  name: Scalars['String'];
  /** A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
  selector?: InputMaybe<V1LabelSelectorInput>;
};

/** ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export type V2beta2ObjectMetricSourceInput = {
  /** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
  describedObject: V2beta2CrossVersionObjectReferenceInput;
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifierInput;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export type V2beta2CrossVersionObjectReferenceInput = {
  /** API version of the referent */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds" */
  kind: Scalars['String'];
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  name: Scalars['String'];
};

/** PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export type V2beta2PodsMetricSourceInput = {
  /** MetricIdentifier defines the name and optionally selector for a metric */
  metric: V2beta2MetricIdentifierInput;
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export type V2beta2ResourceMetricSourceInput = {
  /** name is the name of the resource in question. */
  name: Scalars['String'];
  /** MetricTarget defines the target value, average value, or average utilization of a specific metric */
  target: V2beta2MetricTargetInput;
};

/** FunctionPackageRef includes the reference to the package also the entrypoint of package. */
export type V1FunctionPackageRefInput = {
  /**
   * FunctionName specifies a specific function within the package. This allows functions to share packages, by having different functions within the same package.
   *
   * Fission itself does not interpret this path. It is passed verbatim to build and runtime environments.
   *
   * This is optional: if unspecified, the environment has a default name.
   */
  functionName?: InputMaybe<Scalars['String']>;
  /** PackageRef is a reference to the package. */
  packageref: V1PackageRefInput;
};

/** PackageRef is a reference to the package. */
export type V1PackageRefInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
  /** Including resource version in the reference forces the function to be updated on package update, making it possible to cache the function based on its metadata. */
  resourceversion?: InputMaybe<Scalars['String']>;
};

/** SecretReference is a reference to a kubernetes secret. */
export type V1SecretReferenceInput = {
  name: Scalars['String'];
  namespace: Scalars['String'];
};

/** HTTPTrigger is the trigger invokes user functions when receiving HTTP requests. */
export type V1HTTPTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
  spec: V1HTTPTriggerSpecInput;
};

/** HTTPTriggerSpec is for router to expose user functions at the given URL path. */
export type V1HTTPTriggerSpecInput = {
  /** If CreateIngress is true, router will create an ingress definition. */
  createingress: Scalars['Boolean'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
  /** Deprecated: the original idea of this field is not for setting Ingress. Since we have IngressConfig now, remove Host after couple releases. */
  host: Scalars['String'];
  /** IngressConfig is for router to set up Ingress. */
  ingressconfig: V1IngressConfigInput;
  /** When function is exposed with Prefix based path, keepPrefix decides whether to keep or trim prefix in URL while invoking function. */
  keepPrefix?: InputMaybe<Scalars['Boolean']>;
  /** Use Methods instead of Method. This field is going to be deprecated in a future release HTTP method to access a function. */
  method: Scalars['String'];
  /** HTTP methods to access a function */
  methods?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Prefix with which functions are exposed. NOTE: Prefix takes precedence over URL/RelativeURL. Note that it does not treat slashes specially ("/foobar/" will be matched by the prefix "/foobar"). */
  prefix?: InputMaybe<Scalars['String']>;
  /** RelativeURL is the exposed URL for external client to access a function with. */
  relativeurl: Scalars['String'];
};

/** FunctionReference refers to a function */
export type V1FunctionReferenceInput = {
  /** Function Reference by weight. this map contains function name as key and its weight as the value. This is for canary upgrade purpose. */
  functionweights: Scalars['JSON'];
  /** Name of the function. */
  name: Scalars['String'];
  /**
   * Type indicates whether this function reference is by name or selector. For now, the only supported reference type is by "name".  Future reference types:
   *   * Function by label or annotation
   *   * Branch or tag of a versioned function
   *   * A "rolling upgrade" from one version of a function to another
   * Available value: - name - function-weights
   */
  type: Scalars['String'];
};

/** IngressConfig is for router to set up Ingress. */
export type V1IngressConfigInput = {
  /** Annotations will be added to metadata when creating Ingress. */
  annotations: Scalars['JSON'];
  /** Host is for ingress controller to apply rules. If host is empty or "*", the rule applies to all inbound HTTP traffic. */
  host: Scalars['String'];
  /** Path is for path matching. The format of path depends on what ingress controller you used. */
  path: Scalars['String'];
  /** TLS is for user to specify a Secret that contains TLS key and certificate. The domain name in the key and crt must match the value of Host field. */
  tls: Scalars['String'];
};

/** MessageQueueTrigger invokes functions when messages arrive to certain topic that trigger subscribes to. */
export type V1MessageQueueTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
  spec: V1MessageQueueTriggerSpecInput;
};

/** MessageQueueTriggerSpec defines a binding from a topic in a message queue to a function. */
export type V1MessageQueueTriggerSpecInput = {
  /** Content type of payload */
  contentType: Scalars['String'];
  /** The period to wait after the last trigger reported active before scaling the deployment back to 0 */
  cooldownPeriod?: InputMaybe<Scalars['Int']>;
  /** Topic to collect error response sent from function */
  errorTopic: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
  /** Maximum number of replicas KEDA will scale the deployment up to */
  maxReplicaCount?: InputMaybe<Scalars['Int']>;
  /** Maximum times for message queue trigger to retry */
  maxRetries: Scalars['Int'];
  /** Type of message queue (NATS, Kafka, AzureQueue) */
  messageQueueType: Scalars['String'];
  /** ScalerTrigger fields */
  metadata: Scalars['JSON'];
  /** Minimum number of replicas KEDA will scale the deployment down to */
  minReplicaCount?: InputMaybe<Scalars['Int']>;
  /** Kind of Message Queue Trigger to be created, by default its fission */
  mqtkind?: InputMaybe<Scalars['String']>;
  /** PodSpec is a description of a pod. */
  podspec?: InputMaybe<V1PodSpecInput>;
  /** The period to check each trigger source on every ScaledObject, and scale the deployment up or down accordingly */
  pollingInterval?: InputMaybe<Scalars['Int']>;
  /** Topic for message queue trigger to sent response from function. */
  respTopic?: InputMaybe<Scalars['String']>;
  /** Secret name */
  secret?: InputMaybe<Scalars['String']>;
  /** Subscribed topic */
  topic: Scalars['String'];
};

/** Package Think of these as function-level images. */
export type V1PackageInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
  spec: V1PackageSpecInput;
  /** PackageStatus contains the build status of a package also the build log for examination. */
  status: V1PackageStatusInput;
};

/** PackageSpec includes source/deploy archives and the reference of environment to build the package. */
export type V1PackageSpecInput = {
  /** BuildCommand is a custom build command that builder used to build the source archive. */
  buildcmd?: InputMaybe<Scalars['String']>;
  /** Archive contains or references a collection of sources or binary files. */
  deployment?: InputMaybe<V1ArchiveInput>;
  /** EnvironmentReference is a reference to an environment. */
  environment: V1EnvironmentReferenceInput;
  /** Archive contains or references a collection of sources or binary files. */
  source?: InputMaybe<V1ArchiveInput>;
};

/** Archive contains or references a collection of sources or binary files. */
export type V1ArchiveInput = {
  /** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
  checksum?: InputMaybe<V1ChecksumInput>;
  /** Literal contents of the package. Can be used for encoding packages below TODO (256 KB?) size. */
  literal?: InputMaybe<Scalars['String']>;
  /**
   * Type defines how the package is specified: literal or URL. Available value:
   *  - literal
   *  - url
   */
  type?: InputMaybe<Scalars['String']>;
  /** URL references a package. */
  url?: InputMaybe<Scalars['String']>;
};

/** Checksum of package contents when the contents are stored outside the Package struct. Type is the checksum algorithm; "sha256" is the only currently supported one. Sum is hex encoded. */
export type V1ChecksumInput = {
  sum?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** PackageStatus contains the build status of a package also the build log for examination. */
export type V1PackageStatusInput = {
  /** BuildLog stores build log during the compilation. */
  buildlog?: InputMaybe<Scalars['String']>;
  /** BuildStatus is the package build status. */
  buildstatus?: InputMaybe<Scalars['String']>;
  /** LastUpdateTimestamp will store the timestamp the package was last updated metav1.Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. https://github.com/kubernetes/apimachinery/blob/44bd77c24ef93cd3a5eb6fef64e514025d10d44e/pkg/apis/meta/v1/time.go#L26-L35 */
  lastUpdateTimestamp?: InputMaybe<Scalars['String']>;
};

/** TimeTrigger invokes functions based on given cron schedule. */
export type V1TimeTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
  spec: V1TimeTriggerSpecInput;
};

/** TimeTriggerSpec invokes the specific function at a time or times specified by a cron string. */
export type V1TimeTriggerSpecInput = {
  /** Cron schedule */
  cron: Scalars['String'];
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
};

/** KubernetesWatchTrigger watches kubernetes resource events and invokes functions. */
export type V1KubernetesWatchTriggerInput = {
  /** APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources */
  apiVersion?: InputMaybe<Scalars['String']>;
  /** Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  kind?: InputMaybe<Scalars['String']>;
  /** ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
  metadata: V1ObjectMetaInput;
  /** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
  spec: V1KubernetesWatchTriggerSpecInput;
};

/** KubernetesWatchTriggerSpec defines spec of KuberenetesWatchTrigger */
export type V1KubernetesWatchTriggerSpecInput = {
  /** FunctionReference refers to a function */
  functionref: V1FunctionReferenceInput;
  /** Resource labels */
  labelselector: Scalars['JSON'];
  namespace: Scalars['String'];
  /** Type of resource to watch (Pod, Service, etc.) */
  type: Scalars['String'];
};

    }
    export type QueryFissionSdk = {
  /** Get archive

Equivalent to GET /proxy/storage/v1/archive **/
  getArchives: InContextSdkMethod<FissionTypes.Query['getArchives'], {}, MeshContext>,
  /** Get detail of canary config

Equivalent to GET /v2/canaryconfigs/{canaryConfig} **/
  getCanaryConfig: InContextSdkMethod<FissionTypes.Query['getCanaryConfig'], FissionTypes.QuerygetCanaryConfigArgs, MeshContext>,
  /** List all canary configs

Equivalent to GET /v2/canaryconfigs **/
  getCanaryConfigs: InContextSdkMethod<FissionTypes.Query['getCanaryConfigs'], FissionTypes.QuerygetCanaryConfigsArgs, MeshContext>,
  /** Get detail of environment

Equivalent to GET /v2/environments/{environment} **/
  getEnvironment: InContextSdkMethod<FissionTypes.Query['getEnvironment'], FissionTypes.QuerygetEnvironmentArgs, MeshContext>,
  /** List all environments

Equivalent to GET /v2/environments **/
  getEnvironments: InContextSdkMethod<FissionTypes.Query['getEnvironments'], FissionTypes.QuerygetEnvironmentsArgs, MeshContext>,
  /** Get detail of function

Equivalent to GET /v2/functions/{function} **/
  getFunction: InContextSdkMethod<FissionTypes.Query['getFunction'], FissionTypes.QuerygetFunctionArgs, MeshContext>,
  /** List all functions

Equivalent to GET /v2/functions **/
  getFunctions: InContextSdkMethod<FissionTypes.Query['getFunctions'], FissionTypes.QuerygetFunctionsArgs, MeshContext>,
  /** Get detail of HTTP trigger

Equivalent to GET /v2/triggers/http/{httpTrigger} **/
  getHttp: InContextSdkMethod<FissionTypes.Query['getHttp'], FissionTypes.QuerygetHttpArgs, MeshContext>,
  /** List all HTTP triggers

Equivalent to GET /v2/triggers/http **/
  getHttps: InContextSdkMethod<FissionTypes.Query['getHttps'], FissionTypes.QuerygetHttpsArgs, MeshContext>,
  /** Get detail of message queue trigger

Equivalent to GET /v2/triggers/messagequeue/{mqTrigger} **/
  getMessagequeue: InContextSdkMethod<FissionTypes.Query['getMessagequeue'], FissionTypes.QuerygetMessagequeueArgs, MeshContext>,
  /** List all message queue triggers

Equivalent to GET /v2/triggers/messagequeue **/
  getMessagequeues: InContextSdkMethod<FissionTypes.Query['getMessagequeues'], FissionTypes.QuerygetMessagequeuesArgs, MeshContext>,
  /** Get detail of package

Equivalent to GET /v2/packages/{package} **/
  getPackage: InContextSdkMethod<FissionTypes.Query['getPackage'], FissionTypes.QuerygetPackageArgs, MeshContext>,
  /** List all packages

Equivalent to GET /v2/packages **/
  getPackages: InContextSdkMethod<FissionTypes.Query['getPackages'], FissionTypes.QuerygetPackagesArgs, MeshContext>,
  /** Get detail of time trigger

Equivalent to GET /v2/triggers/time/{timeTrigger} **/
  getTime: InContextSdkMethod<FissionTypes.Query['getTime'], FissionTypes.QuerygetTimeArgs, MeshContext>,
  /** List all time trigger

Equivalent to GET /v2/triggers/time **/
  getTimes: InContextSdkMethod<FissionTypes.Query['getTimes'], FissionTypes.QuerygetTimesArgs, MeshContext>,
  /** Get detail of kubernetes watch

Equivalent to GET /v2/watches/{watch} **/
  getWatch: InContextSdkMethod<FissionTypes.Query['getWatch'], FissionTypes.QuerygetWatchArgs, MeshContext>,
  /** List all kubernetes watch

Equivalent to GET /v2/watches **/
  getWatches: InContextSdkMethod<FissionTypes.Query['getWatches'], FissionTypes.QuerygetWatchesArgs, MeshContext>
};

export type MutationFissionSdk = {
  /** Create archive

Equivalent to POST /proxy/storage/v1/archive **/
  createArchives: InContextSdkMethod<FissionTypes.Mutation['createArchives'], {}, MeshContext>,
  /** Create canary config

Equivalent to POST /v2/canaryconfigs **/
  createCanaryConfigs: InContextSdkMethod<FissionTypes.Mutation['createCanaryConfigs'], FissionTypes.MutationcreateCanaryConfigsArgs, MeshContext>,
  /** Create environment

Equivalent to POST /v2/environments **/
  createEnvironments: InContextSdkMethod<FissionTypes.Mutation['createEnvironments'], FissionTypes.MutationcreateEnvironmentsArgs, MeshContext>,
  /** Create function

Equivalent to POST /v2/functions **/
  createFunctions: InContextSdkMethod<FissionTypes.Mutation['createFunctions'], FissionTypes.MutationcreateFunctionsArgs, MeshContext>,
  /** Create HTTP trigger

Equivalent to POST /v2/triggers/http **/
  createHttps: InContextSdkMethod<FissionTypes.Mutation['createHttps'], FissionTypes.MutationcreateHttpsArgs, MeshContext>,
  /** Create message queue trigger

Equivalent to POST /v2/triggers/messagequeue **/
  createMessagequeues: InContextSdkMethod<FissionTypes.Mutation['createMessagequeues'], FissionTypes.MutationcreateMessagequeuesArgs, MeshContext>,
  /** Create package

Equivalent to POST /v2/packages **/
  createPackages: InContextSdkMethod<FissionTypes.Mutation['createPackages'], FissionTypes.MutationcreatePackagesArgs, MeshContext>,
  /** Create time trigger

Equivalent to POST /v2/triggers/time **/
  createTimes: InContextSdkMethod<FissionTypes.Mutation['createTimes'], FissionTypes.MutationcreateTimesArgs, MeshContext>,
  /** Create kubernetes watch

Equivalent to POST /v2/watches **/
  createWatches: InContextSdkMethod<FissionTypes.Mutation['createWatches'], FissionTypes.MutationcreateWatchesArgs, MeshContext>,
  /** Delete archive

Equivalent to DELETE /proxy/storage/v1/archive **/
  deleteArchives: InContextSdkMethod<FissionTypes.Mutation['deleteArchives'], {}, MeshContext>,
  /** Delete canary config

Equivalent to DELETE /v2/canaryconfigs/{canaryConfig} **/
  deleteCanaryConfig: InContextSdkMethod<FissionTypes.Mutation['deleteCanaryConfig'], FissionTypes.MutationdeleteCanaryConfigArgs, MeshContext>,
  /** Delete environment

Equivalent to DELETE /v2/environments/{environment} **/
  deleteEnvironment: InContextSdkMethod<FissionTypes.Mutation['deleteEnvironment'], FissionTypes.MutationdeleteEnvironmentArgs, MeshContext>,
  /** Delete function

Equivalent to DELETE /v2/functions/{function} **/
  deleteFunction: InContextSdkMethod<FissionTypes.Mutation['deleteFunction'], FissionTypes.MutationdeleteFunctionArgs, MeshContext>,
  /** Delete HTTP trigger

Equivalent to DELETE /v2/triggers/http/{httpTrigger} **/
  deleteHttp: InContextSdkMethod<FissionTypes.Mutation['deleteHttp'], FissionTypes.MutationdeleteHttpArgs, MeshContext>,
  /** Delete message queue trigger

Equivalent to DELETE /v2/triggers/messagequeue/{mqTrigger} **/
  deleteMessagequeue: InContextSdkMethod<FissionTypes.Mutation['deleteMessagequeue'], FissionTypes.MutationdeleteMessagequeueArgs, MeshContext>,
  /** Delete package

Equivalent to DELETE /v2/packages/{package} **/
  deletePackage: InContextSdkMethod<FissionTypes.Mutation['deletePackage'], FissionTypes.MutationdeletePackageArgs, MeshContext>,
  /** Delete time trigger

Equivalent to DELETE /v2/triggers/time/{timeTrigger} **/
  deleteTime: InContextSdkMethod<FissionTypes.Mutation['deleteTime'], FissionTypes.MutationdeleteTimeArgs, MeshContext>,
  /** Delete kubernetes watch

Equivalent to DELETE /v2/watches/{watch} **/
  deleteWatch: InContextSdkMethod<FissionTypes.Mutation['deleteWatch'], FissionTypes.MutationdeleteWatchArgs, MeshContext>,
  /** Update canary config

Equivalent to PUT /v2/canaryconfigs/{canaryConfig} **/
  updateCanaryConfig: InContextSdkMethod<FissionTypes.Mutation['updateCanaryConfig'], FissionTypes.MutationupdateCanaryConfigArgs, MeshContext>,
  /** Update environment

Equivalent to PUT /v2/environments/{environment} **/
  updateEnvironment: InContextSdkMethod<FissionTypes.Mutation['updateEnvironment'], FissionTypes.MutationupdateEnvironmentArgs, MeshContext>,
  /** Update function

Equivalent to PUT /v2/functions/{function} **/
  updateFunction: InContextSdkMethod<FissionTypes.Mutation['updateFunction'], FissionTypes.MutationupdateFunctionArgs, MeshContext>,
  /** Update HTTP trigger

Equivalent to PUT /v2/triggers/http/{httpTrigger} **/
  updateHttp: InContextSdkMethod<FissionTypes.Mutation['updateHttp'], FissionTypes.MutationupdateHttpArgs, MeshContext>,
  /** Update message queue trigger

Equivalent to PUT /v2/triggers/messagequeue/{mqTrigger} **/
  updateMessagequeue: InContextSdkMethod<FissionTypes.Mutation['updateMessagequeue'], FissionTypes.MutationupdateMessagequeueArgs, MeshContext>,
  /** Update package

Equivalent to PUT /v2/packages/{package} **/
  updatePackage: InContextSdkMethod<FissionTypes.Mutation['updatePackage'], FissionTypes.MutationupdatePackageArgs, MeshContext>,
  /** Update time trigger

Equivalent to PUT /v2/triggers/time/{timeTrigger} **/
  updateTime: InContextSdkMethod<FissionTypes.Mutation['updateTime'], FissionTypes.MutationupdateTimeArgs, MeshContext>,
  /** Update kubernetes watch

Equivalent to PUT /v2/watches/{watch} **/
  updateWatch: InContextSdkMethod<FissionTypes.Mutation['updateWatch'], FissionTypes.MutationupdateWatchArgs, MeshContext>
};

export type SubscriptionFissionSdk = {

};

export type FissionContext = {
      ["Fission"]: { Query: QueryFissionSdk, Mutation: MutationFissionSdk, Subscription: SubscriptionFissionSdk },
      ["fetch"]: typeof fetch
    };

export type MeshContext = FissionContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Fission/oas-schema":
      return import("./sources/Fission/oas-schema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetchFactory } from 'fetchache';
import { fetch, Request, Response } from 'cross-undici-fetch';

import OpenapiHandler from "@graphql-mesh/openapi"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)
const fetchFn = fetchFactory({ cache, fetch, Request, Response });
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const fissionTransforms = [];
const additionalTypeDefs = [] as any[];
const fissionHandler = new OpenapiHandler({
              name: "Fission",
              config: {"baseUrl":"http://localhost:8001/api/v1/namespaces/fission/services/controller:80/proxy/","source":"fission-spec.yaml","operationIdFieldNames":true},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Fission"),
              logger: logger.child("Fission"),
              importFn,
              fetchFn,
            });
sources[0] = {
          name: 'Fission',
          handler: fissionHandler,
          transforms: fissionTransforms
        }
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })
const additionalResolvers = [] as any[]

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetEnvironmentsDocument,
        get rawSDL() {
          return printWithCache(GetEnvironmentsDocument);
        },
        location: 'GetEnvironmentsDocument.graphql'
      },{
        document: GetEnvironmentDocument,
        get rawSDL() {
          return printWithCache(GetEnvironmentDocument);
        },
        location: 'GetEnvironmentDocument.graphql'
      },{
        document: DeleteEnvironmentDocument,
        get rawSDL() {
          return printWithCache(DeleteEnvironmentDocument);
        },
        location: 'DeleteEnvironmentDocument.graphql'
      },{
        document: CreateEnvironmentsDocument,
        get rawSDL() {
          return printWithCache(CreateEnvironmentsDocument);
        },
        location: 'CreateEnvironmentsDocument.graphql'
      },{
        document: GetFunctionsDocument,
        get rawSDL() {
          return printWithCache(GetFunctionsDocument);
        },
        location: 'GetFunctionsDocument.graphql'
      },{
        document: GetFunctionDocument,
        get rawSDL() {
          return printWithCache(GetFunctionDocument);
        },
        location: 'GetFunctionDocument.graphql'
      },{
        document: DeleteFunctionDocument,
        get rawSDL() {
          return printWithCache(DeleteFunctionDocument);
        },
        location: 'DeleteFunctionDocument.graphql'
      },{
        document: GetPackagesDocument,
        get rawSDL() {
          return printWithCache(GetPackagesDocument);
        },
        location: 'GetPackagesDocument.graphql'
      },{
        document: GetPackageDocument,
        get rawSDL() {
          return printWithCache(GetPackageDocument);
        },
        location: 'GetPackageDocument.graphql'
      },{
        document: DeletePackageDocument,
        get rawSDL() {
          return printWithCache(DeletePackageDocument);
        },
        location: 'DeletePackageDocument.graphql'
      }
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
export function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltMesh().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type getEnvironmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type getEnvironmentsQuery = { getEnvironments?: Maybe<Array<Maybe<{ metadata: Pick<V1ObjectMeta, 'name'> }>>> };

export type getEnvironmentQueryVariables = Exact<{
  environment: Scalars['String'];
}>;


export type getEnvironmentQuery = { getEnvironment?: Maybe<{ metadata: Pick<V1ObjectMeta, 'name'> }> };

export type deleteEnvironmentMutationVariables = Exact<{
  environment: Scalars['String'];
}>;


export type deleteEnvironmentMutation = Pick<Mutation, 'deleteEnvironment'>;

export type createEnvironmentsMutationVariables = Exact<{
  object?: InputMaybe<V1EnvironmentInput>;
}>;


export type createEnvironmentsMutation = { createEnvironments?: Maybe<Pick<V1ObjectMeta, 'name'>> };

export type getFunctionsQueryVariables = Exact<{ [key: string]: never; }>;


export type getFunctionsQuery = { getFunctions?: Maybe<Array<Maybe<{ metadata: Pick<V1ObjectMeta, 'name'> }>>> };

export type getFunctionQueryVariables = Exact<{
  function: Scalars['String'];
}>;


export type getFunctionQuery = { getFunction?: Maybe<{ metadata: Pick<V1ObjectMeta, 'name'> }> };

export type deleteFunctionMutationVariables = Exact<{
  function: Scalars['String'];
}>;


export type deleteFunctionMutation = Pick<Mutation, 'deleteFunction'>;

export type getPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type getPackagesQuery = { getPackages?: Maybe<Array<Maybe<{ metadata: Pick<V1ObjectMeta, 'name'> }>>> };

export type getPackageQueryVariables = Exact<{
  package: Scalars['String'];
}>;


export type getPackageQuery = { getPackage?: Maybe<{ metadata: Pick<V1ObjectMeta, 'name'> }> };

export type deletePackageMutationVariables = Exact<{
  package: Scalars['String'];
}>;


export type deletePackageMutation = Pick<Mutation, 'deletePackage'>;


export const getEnvironmentsDocument = gql`
    query getEnvironments {
  getEnvironments {
    metadata {
      name
    }
  }
}
    ` as unknown as DocumentNode<getEnvironmentsQuery, getEnvironmentsQueryVariables>;
export const getEnvironmentDocument = gql`
    query getEnvironment($environment: String!) {
  getEnvironment(environment: $environment) {
    metadata {
      name
    }
  }
}
    ` as unknown as DocumentNode<getEnvironmentQuery, getEnvironmentQueryVariables>;
export const deleteEnvironmentDocument = gql`
    mutation deleteEnvironment($environment: String!) {
  deleteEnvironment(environment: $environment)
}
    ` as unknown as DocumentNode<deleteEnvironmentMutation, deleteEnvironmentMutationVariables>;
export const createEnvironmentsDocument = gql`
    mutation createEnvironments($object: V1EnvironmentInput) {
  createEnvironments(v1EnvironmentInput: $object) {
    name
  }
}
    ` as unknown as DocumentNode<createEnvironmentsMutation, createEnvironmentsMutationVariables>;
export const getFunctionsDocument = gql`
    query getFunctions {
  getFunctions {
    metadata {
      name
    }
  }
}
    ` as unknown as DocumentNode<getFunctionsQuery, getFunctionsQueryVariables>;
export const getFunctionDocument = gql`
    query getFunction($function: String!) {
  getFunction(function: $function) {
    metadata {
      name
    }
  }
}
    ` as unknown as DocumentNode<getFunctionQuery, getFunctionQueryVariables>;
export const deleteFunctionDocument = gql`
    mutation deleteFunction($function: String!) {
  deleteFunction(function: $function)
}
    ` as unknown as DocumentNode<deleteFunctionMutation, deleteFunctionMutationVariables>;
export const getPackagesDocument = gql`
    query getPackages {
  getPackages {
    metadata {
      name
    }
  }
}
    ` as unknown as DocumentNode<getPackagesQuery, getPackagesQueryVariables>;
export const getPackageDocument = gql`
    query getPackage($package: String!) {
  getPackage(package: $package) {
    metadata {
      name
    }
  }
}
    ` as unknown as DocumentNode<getPackageQuery, getPackageQueryVariables>;
export const deletePackageDocument = gql`
    mutation deletePackage($package: String!) {
  deletePackage(package: $package)
}
    ` as unknown as DocumentNode<deletePackageMutation, deletePackageMutationVariables>;











export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    getEnvironments(variables?: getEnvironmentsQueryVariables, options?: C): Promise<getEnvironmentsQuery> {
      return requester<getEnvironmentsQuery, getEnvironmentsQueryVariables>(getEnvironmentsDocument, variables, options);
    },
    getEnvironment(variables: getEnvironmentQueryVariables, options?: C): Promise<getEnvironmentQuery> {
      return requester<getEnvironmentQuery, getEnvironmentQueryVariables>(getEnvironmentDocument, variables, options);
    },
    deleteEnvironment(variables: deleteEnvironmentMutationVariables, options?: C): Promise<deleteEnvironmentMutation> {
      return requester<deleteEnvironmentMutation, deleteEnvironmentMutationVariables>(deleteEnvironmentDocument, variables, options);
    },
    createEnvironments(variables?: createEnvironmentsMutationVariables, options?: C): Promise<createEnvironmentsMutation> {
      return requester<createEnvironmentsMutation, createEnvironmentsMutationVariables>(createEnvironmentsDocument, variables, options);
    },
    getFunctions(variables?: getFunctionsQueryVariables, options?: C): Promise<getFunctionsQuery> {
      return requester<getFunctionsQuery, getFunctionsQueryVariables>(getFunctionsDocument, variables, options);
    },
    getFunction(variables: getFunctionQueryVariables, options?: C): Promise<getFunctionQuery> {
      return requester<getFunctionQuery, getFunctionQueryVariables>(getFunctionDocument, variables, options);
    },
    deleteFunction(variables: deleteFunctionMutationVariables, options?: C): Promise<deleteFunctionMutation> {
      return requester<deleteFunctionMutation, deleteFunctionMutationVariables>(deleteFunctionDocument, variables, options);
    },
    getPackages(variables?: getPackagesQueryVariables, options?: C): Promise<getPackagesQuery> {
      return requester<getPackagesQuery, getPackagesQueryVariables>(getPackagesDocument, variables, options);
    },
    getPackage(variables: getPackageQueryVariables, options?: C): Promise<getPackageQuery> {
      return requester<getPackageQuery, getPackageQueryVariables>(getPackageDocument, variables, options);
    },
    deletePackage(variables: deletePackageMutationVariables, options?: C): Promise<deletePackageMutation> {
      return requester<deletePackageMutation, deletePackageMutationVariables>(deletePackageDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;