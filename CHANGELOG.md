# Changelog

## [0.2.0](https://github.com/TeamWarp/warp-cli/compare/v0.1.0...v0.2.0) (2026-08-05)


### ⚠ BREAKING CHANGES

* **api:** 20 breaking changes to the SDK surface.
    - Removed operation `customWorkerFields.list` (`GET /v1/custom-worker-fields`).
    - Removed operation `customWorkerFields.create` (`POST /v1/custom-worker-fields`).
    - Removed operation `customWorkerFields.retrieve` (`GET /v1/custom-worker-fields/{id}`).
    - Removed operation `customWorkerFields.update` (`PATCH /v1/custom-worker-fields/{id}`).
    - Removed operation `customWorkerFields.archive` (`POST /v1/custom-worker-fields/{id}/archive`).
    - Removed operation `customWorkerFields.createOption` (`POST /v1/custom-worker-fields/{id}/options`).
    - Removed operation `customWorkerFields.updateOption` (`PATCH /v1/custom-worker-field-options/{id}`).
    - Removed operation `customWorkerFields.deleteOption` (`DELETE /v1/custom-worker-field-options/{id}`).
    - Removed operation `customWorkerFields.archiveOption` (`POST /v1/custom-worker-field-options/{id}/archive`).
    - Removed operation `customWorkerFields.listValues` (`GET /v1/worker-custom-field-values`).
    - Removed operation `customWorkerFields.upsertValue` (`PUT /v1/worker-custom-field-values`).
    - Removed operation `customWorkerFields.clearValue` (`DELETE /v1/worker-custom-field-values`).
    - Removed schema `invalid_custom_worker_field_operation`.
    - Removed schema `custom_worker_field_already_exists`.
    - Removed schema `custom_worker_field_option_already_exists`.
    - Removed schema `custom_worker_field_not_found`.
    - Removed schema `custom_worker_field_option_not_found`.
    - Removed schema `custom_worker_field_option_in_use`.
    - Removed schema `invalid_custom_worker_field_value`.
    - Removed schema `custom_worker_field_worker_not_found`.
* **api:** 86 breaking changes to the SDK surface.
    - Renamed SDK from `Warp` to `WarpApi`.
    - `400` error response of `departments.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `departments.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `departments.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `departments.create` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `departments.create` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `409` error response of `departments.create` changed from `DepartmentAlreadyExists` to `department_already_exists`.
    - `429` error response of `departments.create` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `departments.update` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `departments.update` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `departments.update` changed from `DepartmentNotFound` to `department_not_found`.
    - `409` error response of `departments.update` changed from `DepartmentAlreadyExists` to `department_already_exists`.
    - `429` error response of `departments.update` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.listAssignments` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.listAssignments` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `timeOff.listAssignments` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.listBalances` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.listBalances` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `timeOff.listBalances` changed from `TimeOffPolicyNotFound` to `time_off_policy_not_found`.
    - `429` error response of `timeOff.listBalances` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `timeOff.listRequests` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `timeOff.listRequests` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `timeOff.listRequests` changed from `TimeOffRequestNotFoundError` to `time_off_request_not_found_error`.
    - `429` error response of `timeOff.listRequests` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workers.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.retrieve` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.retrieve` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workers.retrieve` changed from `WorkerNotFoundError` to `worker_not_found_error`.
    - `429` error response of `workers.retrieve` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.delete` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.delete` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workers.delete` changed from `WorkerNotFoundError` to `worker_not_found_error`.
    - `409` error response of `workers.delete` changed from `CannotDeleteWorker` to `cannot_delete_worker`.
    - `429` error response of `workers.delete` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `workers.createEmployee` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workers.createEmployee` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.createContractor` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.createContractor` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workers.createContractor` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workers.invite` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workers.invite` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workers.invite` changed from `WorkerNotFoundError` to `worker_not_found_error`.
    - `429` error response of `workers.invite` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workplaces.list` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workplaces.list` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `429` error response of `workplaces.list` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `401` error response of `workplaces.create` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `409` error response of `workplaces.create` changed from `WorkplaceAlreadyExists` to `workplace_already_exists`.
    - `429` error response of `workplaces.create` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - `400` error response of `workplaces.update` changed from `HttpApiDecodeError` to `http_api_decode_error`.
    - `401` error response of `workplaces.update` changed from `ApiKeyUnauthorized` to `api_key_unauthorized`.
    - `404` error response of `workplaces.update` changed from `WorkplaceNotFound` to `workplace_not_found`.
    - `409` error response of `workplaces.update` changed from `WorkplaceAlreadyExists` to `workplace_already_exists`.
    - `429` error response of `workplaces.update` changed from `RateLimitExceeded` to `rate_limit_exceeded`.
    - Removed operation `timeOff.policies.list` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.retrieve` (`GET /v1/time_off/policies/{id}`).
    - Removed schema `Date`.
    - Removed schema `HttpApiDecodeError`.
    - Removed schema `Issue`.
    - Removed schema `PropertyKey`.
    - Removed schema `InternalServerError`.
    - Removed schema `ApiKeyUnauthorized`.
    - Removed schema `RateLimitExceeded`.
    - Removed schema `DateTimeUtc`.
    - Removed schema `MissingRequiredCompanyPermissions`.
    - Removed schema `ApiNotEnabled`.
    - Removed schema `Trimmed`.
    - Removed schema `DepartmentAlreadyExists`.
    - Removed schema `DepartmentNotFound`.
    - Removed schema `ManagerNotFoundError`.
    - Removed schema `TimeOffPolicyNotFound`.
    - Removed schema `TimeOffRequestNotFoundError`.
    - Removed schema `WorkerNotFoundError`.
    - Removed schema `OfficeWorkLocation`.
    - Removed schema `RemoteWorkLocation`.
    - Removed schema `StateRegistrationRequired`.
    - Removed schema `WorkplaceNotFound`.
    - Removed schema `PayScheduleNotConfigured`.
    - Removed schema `SubscriptionLimitError`.
    - Removed schema `InvalidWorkerStatusError`.
    - Removed schema `WorkerAlreadyExistsError`.
    - Removed schema `CannotDeleteWorker`.
    - Removed schema `AddressInvalid`.
    - Removed schema `WorkplaceAlreadyExists`.
* **api:** Property `MissingRequiredCompanyPermissions.requiredPermissions` type changed from `Array<object>` to `Array<object>`.

### Features

* **api:** add operation customFields.list (+20 more changes) ([4c3349a](https://github.com/TeamWarp/warp-cli/commit/4c3349aa778bd0dd58a31195c35c12968b829ea6))
* **api:** add schema public_money_amount (+1 more change) ([e73d4d3](https://github.com/TeamWarp/warp-cli/commit/e73d4d320e6dd8c864a5246b1bf4c698aa67ad05))
* **api:** initial SDK generation ([13093cf](https://github.com/TeamWarp/warp-cli/commit/13093cf7fd3c65bea6a3cb55b2fb878923fa6b1e))
* **api:** remove operation customWorkerFields.list (+19 more changes) ([da27e58](https://github.com/TeamWarp/warp-cli/commit/da27e58b3431fcc6e8812bd72978c3d3372248ab))
* **api:** update contact email ([2ebd7dd](https://github.com/TeamWarp/warp-cli/commit/2ebd7dd83f53a49ae7552b8e3f135affef1e6c26))
* **api:** update import names to warp ([1c92288](https://github.com/TeamWarp/warp-cli/commit/1c922880681e393a7c7491f99f5d8914bdd91cae))
* **api:** update SDK name (+145 more changes) ([782be8c](https://github.com/TeamWarp/warp-cli/commit/782be8cc0350782cfb1e93c33097eccc741d28d6))
* **api:** update SDK surface (2 changes) ([c37e2e3](https://github.com/TeamWarp/warp-cli/commit/c37e2e3d586536e1b91b5735a2306b66ea5011e3))


### Chores

* **api:** regenerate SDK ([420a49a](https://github.com/TeamWarp/warp-cli/commit/420a49a05ba100769cc252527df1b5fd90797300))
* **api:** regenerate SDK ([f2708e6](https://github.com/TeamWarp/warp-cli/commit/f2708e6776554280b9ab47ab79328e9e2d563ecd))
* **api:** regenerate SDK ([8bcae7d](https://github.com/TeamWarp/warp-cli/commit/8bcae7daa9fe464614b9390bfe70ac974eb3e2a1))
* **api:** update generated SDK content ([51b29bb](https://github.com/TeamWarp/warp-cli/commit/51b29bb892e220f2c41fb9ec6346ce2e28bb9997))
* **api:** update generated SDK content ([6e6b2b5](https://github.com/TeamWarp/warp-cli/commit/6e6b2b56feb60fda87a44396ff9b1d9f95c5c1c9))
* **api:** update generated SDK content ([0c25cb4](https://github.com/TeamWarp/warp-cli/commit/0c25cb411e4248be0324351c3c965d990bda706f))
* **api:** update generated SDK content ([af3ad4e](https://github.com/TeamWarp/warp-cli/commit/af3ad4ed93bc0a7b51e2ff97c391fe6c0222b6c6))
