# Changelog

## [0.4.0](https://github.com/TeamWarp/warp-cli/compare/v0.3.0...v0.4.0) (2026-09-03)


### ⚠ BREAKING CHANGES

* **api:** 110 breaking changes to the SDK surface.
    - Renamed SDK from `WarpApi` to `Warp`.
    - URL of environment `production` changed from `https://api.joinwarp.com` to `https://api.joinwarp.com/public`.
    - Response of `customFields.update` changed from `objects` to `none`.
    - Response of `customFields.archive` changed from `objects` to `none`.
    - Response of `customFields.updateOption` changed from `objects_3` to `none`.
    - Response of `customFields.archiveOption` changed from `objects_3` to `none`.
    - Response of `customFields.upsertValue` changed from `objects_4` to `none`.
    - Response of `offers.void` changed from `objects_5` to `none`.
    - Response of `offers.extendDeadline` changed from `objects_5` to `none`.
    - Response of `offers.resend` changed from `objects_5` to `none`.
    - Response of `timeOff.policies.get` changed from `objects_9` to `none`.
    - Response of `workers.get` changed from `objects_10` to `none`.
    - Property `public_worker_compensation.payRateId` type changed from `string` to `string`.
    - Property `public_worker_compensation.per` type changed from `public_pay_rate_per` to `public_pay_rate_per & string`.
    - Property `public_worker_compensation.amount` type changed from `string` to `integer`.
    - Property `public_worker_compensation.currency` type changed from `union` to `enum(USD | AUD | BGN | …)`.
    - Property `public_money_amount.amount` type changed from `string` to `integer`.
    - Property `public_money_amount.currency` type changed from `union` to `enum(USD | AUD | BGN | …)`.
    - Property `public_health_plan_carrier.id` type changed from `string` to `string`.
    - Property `public_health_plan.id` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `missing_required_company_permissions_encoded.requiredPermissions` type changed from `Array<object>` to `Array<object>`.
    - Property `health_plan_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `public_retirement_plan.id` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `retirement_plan_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `public_worker_reference.id` type changed from `string` to `string`.
    - Property `health_plan_reference.id` type changed from `string` to `string`.
    - Property `retirement_plan_reference.id` type changed from `string` to `string`.
    - Property `percentage_contribution.percentage` type changed from `string | union_1` to `number | enum(Infinity | -Infinity | NaN)`.
    - Property `public_benefit_deduction.id` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `benefit_deduction_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `custom_field_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `custom_field_option_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `custom_field_option_in_use_error_encoded.id` type changed from `string` to `string`.
    - Property `custom_field_worker_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `department_already_exists_encoded.id` type changed from `union_11` to `string | null`.
    - Property `department_not_found_encoded.id` type changed from `string` to `string`.
    - Property `workplace_not_found_encoded.id` type changed from `string` to `string`.
    - Property `manager_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `offer_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `invalid_offer_status_error_encoded.id` type changed from `string` to `string`.
    - Property `invalid_offer_status_error_encoded.status` type changed from `union_12` to `enum(draft | sent | accepted | …)`.
    - Property `public_pay_rate.id` type changed from `string` to `string`.
    - Property `public_pay_rate.amount` type changed from `string` to `integer`.
    - Property `public_pay_rate.currency` type changed from `union` to `enum(USD | AUD | BGN | …)`.
    - Property `public_pay_rate.effectiveStartDate` type changed from `string | null` to `string | null`.
    - Property `public_pay_rate.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `pay_rate_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `time_off_policy_not_found_encoded.id` type changed from `union_19` to `string | number | enum(Infinity | -Infinity | NaN)`.
    - Property `time_off_request_not_found_error_encoded.id` type changed from `string | number | union_1` to `string | number | enum(Infinity | -Infinity | NaN)`.
    - Property `worker_not_found_error_encoded.id` type changed from `string` to `string`.
    - Property `office_work_location.workplaceId` type changed from `string` to `string`.
    - Property `invalid_worker_status_error_encoded.id` type changed from `string` to `string`.
    - Property `cannot_delete_worker_encoded.id` type changed from `string` to `string`.
    - Property `workplace_already_exists_encoded.id` type changed from `union_33` to `string | null`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
    - Removed schema `union`.
    - Removed schema `union_1`.
    - Removed schema `union_2`.
    - Removed schema `union_3`.
    - Removed schema `objects_1`.
    - Removed schema `union_4`.
    - Removed schema `union_5`.
    - Removed schema `union_6`.
    - Removed schema `union_7`.
    - Removed schema `union_8`.
    - Removed schema `objects`.
    - Removed schema `union_9`.
    - Removed schema `objects_2`.
    - Removed schema `union_10`.
    - Removed schema `objects_3`.
    - Removed schema `objects_4`.
    - Removed schema `union_11`.
    - Removed schema `union_12`.
    - Removed schema `union_13`.
    - Removed schema `objects_6`.
    - Removed schema `union_14`.
    - Removed schema `objects_7`.
    - Removed schema `union_15`.
    - Removed schema `union_16`.
    - Removed schema `union_17`.
    - Removed schema `union_18`.
    - Removed schema `objects_8`.
    - Removed schema `objects_5`.
    - Removed schema `objects_9`.
    - Removed schema `union_19`.
    - Removed schema `union_20`.
    - Removed schema `union_21`.
    - Removed schema `union_22`.
    - Removed schema `union_23`.
    - Removed schema `union_24`.
    - Removed schema `union_25`.
    - Removed schema `union_26`.
    - Removed schema `union_27`.
    - Removed schema `union_28`.
    - Removed schema `union_29`.
    - Removed schema `union_30`.
    - Removed schema `union_31`.
    - Removed schema `union_32`.
    - Removed schema `objects_10`.
    - Removed schema `union_33`.
    - Removed schema `union_34`.
    - Removed schema `union_35`.
    - Removed schema `objects_11`.
    - Removed webhook `Unwrap` (`offer:voided`).
* **api:** 8 breaking changes to the SDK surface.
    - Property `missing_required_company_permissions_encoded.requiredPermissions` type changed from `Array<object>` to `Array<object>`.
    - Property `objects_4.value` type changed from `object | object | object | object | object | object | object | object` to `object | object | object | object | object | object | object | object`.
    - Property `objects_6.contractorDetails` type changed from `object | null` to `object | null`.
    - Schema `union_15` shape changed.
    - Schema `union_16` shape changed.
    - Schema `union_17` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** `422` error response of `offers.create` changed from `invalid_expiration_time_error_encoded` to `application/json`.
* **api:** 2 breaking changes to the SDK surface.
    - Added required body field `voidReason` to `offers.void`.
    - Added required request body to `offers.void`.
* **api:** 8 breaking changes to the SDK surface.
    - Property `missing_required_company_permissions_encoded.requiredPermissions` type changed from `Array<object>` to `Array<object>`.
    - Property `objects_4.value` type changed from `object | object | object | object | object | object | object | object` to `object | object | object | object | object | object | object | object`.
    - Property `objects_6.contractorDetails` type changed from `object | null` to `object | null`.
    - Schema `union_15` shape changed.
    - Schema `union_16` shape changed.
    - Schema `union_17` shape changed.
    - Property `objects_8.basePay` type changed from `object` to `object`.
    - Property `address_invalid_encoded.suggestedAlternative` type changed from `object | null` to `object | null`.
* **api:** Schema `union_20` shape changed.
* **api:** 5 breaking changes to the SDK surface.
    - Added required property `public_worker_compensation.per`.
    - Removed required property `public_worker_compensation.basis`.
    - Added required property `public_pay_rate.per`.
    - Removed required property `public_pay_rate.basis`.
    - Removed schema `public_pay_rate_basis`.
* **api:** 2 breaking changes to the SDK surface.
    - Renamed SDK from `Warp` to `WarpApi`.
    - Removed operation `benefits.deductions.retrieve` (`GET /v1/benefits/deductions/{id}`).
* **api:** Removed operation `benefits.deductions.get` (`GET /v1/benefits/deductions/{id}`).
* **api:** 2 breaking changes to the SDK surface.
    - Schema `public_pay_rate_basis` shape changed.
    - Added required property `public_worker_compensation.basis`.
* **api:** 4 breaking changes to the SDK surface.
    - Removed operation `customFields.retrieve` (`GET /v1/custom_fields/{id}`).
    - Removed operation `timeOff.policies.timeOffGet` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.timeOffGet2` (`GET /v1/time_off/policies/{id}`).
    - Removed operation `workers.retrieve` (`GET /v1/workers/{id}`).
* **api:** 2 breaking changes to the SDK surface.
    - Added required property `public_pay_rate.worker`.
    - Removed required property `public_pay_rate.workerId`.
* **api:** 8 breaking changes to the SDK surface.
    - Removed operation `payRates.list` (`GET /v1/pay_rates`).
    - Removed operation `payRates.retrieve` (`GET /v1/pay_rates/{id}`).
    - Removed operation `timeOff.policies.list` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.get` (`GET /v1/time_off/policies/{id}`).
    - Removed schema `public_pay_rate_type`.
    - Removed schema `public_pay_rate_basis`.
    - Removed schema `public_pay_rate`.
    - Removed schema `pay_rate_not_found_error_encoded`.
* **api:** 7 breaking changes to the SDK surface.
    - Removed operation `timeOff.policies.timeOffGet` (`GET /v1/time_off/policies`).
    - Removed operation `timeOff.policies.timeOffGet2` (`GET /v1/time_off/policies/{id}`).
    - Schema `union_32` shape changed.
    - Added required property `objects_10.compensation`.
    - Schema `union_33` changed from `enum(remote | office)` to `string | null`.
    - Schema `union_34` shape changed.
    - Property `workplace_already_exists_encoded.id` type changed from `union_32` to `union_33`.
* **api:** 3 breaking changes to the SDK surface.
    - Property `objects_6.email` type changed from `string` to `string<email>`.
    - Schema `union_28` shape changed.
    - Property `objects_10.email` type changed from `string` to `string<email>`.
* **api:** 214 breaking changes to the SDK surface.
    - query param `limit` on `benefits.healthPlans.list` is now required.
    - query param `statuses` on `benefits.healthPlans.list` is now required.
    - Serialization or defaults of query param `statuses` on `benefits.healthPlans.list` changed.
    - `401` error response of `benefits.healthPlans.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `benefits.healthPlans.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `benefits.healthPlans.get` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `benefits.healthPlans.get` changed from `health_plan_not_found_error` to `health_plan_not_found_error_encoded`.
    - `429` error response of `benefits.healthPlans.get` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `benefits.retirementPlans.list` is now required.
    - query param `statuses` on `benefits.retirementPlans.list` is now required.
    - Serialization or defaults of query param `statuses` on `benefits.retirementPlans.list` changed.
    - `401` error response of `benefits.retirementPlans.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `benefits.retirementPlans.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `benefits.retirementPlans.get` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `benefits.retirementPlans.get` changed from `retirement_plan_not_found_error` to `retirement_plan_not_found_error_encoded`.
    - `429` error response of `benefits.retirementPlans.get` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `benefits.deductions.list` is now required.
    - query param `statuses` on `benefits.deductions.list` is now required.
    - Serialization or defaults of query param `statuses` on `benefits.deductions.list` changed.
    - `401` error response of `benefits.deductions.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `benefits.deductions.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `benefits.deductions.get` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `benefits.deductions.get` changed from `benefit_deduction_not_found_error` to `benefit_deduction_not_found_error_encoded`.
    - `429` error response of `benefits.deductions.get` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `customFields.create` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.retrieve` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.retrieve` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `429` error response of `customFields.retrieve` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.update` changed from `none` to `objects`.
    - `400` error response of `customFields.update` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.update` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.update` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `409` error response of `customFields.update` changed from `custom_field_already_exists_error` to `custom_field_already_exists_error_encoded`.
    - `429` error response of `customFields.update` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.archive` changed from `none` to `objects`.
    - `401` error response of `customFields.archive` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.archive` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `429` error response of `customFields.archive` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `customFields.createOption` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.createOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.createOption` changed from `custom_field_not_found_error` to `custom_field_not_found_error_encoded`.
    - `409` error response of `customFields.createOption` changed from `custom_field_option_already_exists_error` to `custom_field_option_already_exists_error_encoded`.
    - `429` error response of `customFields.createOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.updateOption` changed from `none` to `objects_3`.
    - `400` error response of `customFields.updateOption` changed from `application/json` to `invalid_custom_field_operation_error_encoded`.
    - `401` error response of `customFields.updateOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.updateOption` changed from `custom_field_option_not_found_error` to `custom_field_option_not_found_error_encoded`.
    - `409` error response of `customFields.updateOption` changed from `custom_field_option_already_exists_error` to `custom_field_option_already_exists_error_encoded`.
    - `429` error response of `customFields.updateOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.deleteOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.deleteOption` changed from `custom_field_option_not_found_error` to `custom_field_option_not_found_error_encoded`.
    - `409` error response of `customFields.deleteOption` changed from `custom_field_option_in_use_error` to `custom_field_option_in_use_error_encoded`.
    - `429` error response of `customFields.deleteOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.archiveOption` changed from `none` to `objects_3`.
    - `401` error response of `customFields.archiveOption` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `customFields.archiveOption` changed from `custom_field_option_not_found_error` to `custom_field_option_not_found_error_encoded`.
    - `429` error response of `customFields.archiveOption` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.listValues` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.listValues` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `customFields.upsertValue` changed from `none` to `objects_4`.
    - `401` error response of `customFields.upsertValue` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.upsertValue` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `customFields.clearValue` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `customFields.clearValue` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `departments.list` is now required.
    - `401` error response of `departments.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `departments.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `departments.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `409` error response of `departments.create` changed from `department_already_exists` to `department_already_exists_encoded`.
    - `429` error response of `departments.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `departments.update` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `departments.update` changed from `department_not_found` to `department_not_found_encoded`.
    - `409` error response of `departments.update` changed from `department_already_exists` to `department_already_exists_encoded`.
    - `429` error response of `departments.update` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `offers.list` is now required.
    - `401` error response of `offers.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `offers.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `offers.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `422` error response of `offers.create` changed from `invalid_expiration_time_error` to `invalid_expiration_time_error_encoded`.
    - `429` error response of `offers.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `offers.void` changed from `none` to `objects_5`.
    - `401` error response of `offers.void` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `offers.void` changed from `offer_not_found_error` to `offer_not_found_error_encoded`.
    - `409` error response of `offers.void` changed from `invalid_offer_status_error` to `invalid_offer_status_error_encoded`.
    - `429` error response of `offers.void` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `offers.extendDeadline` changed from `none` to `objects_5`.
    - `401` error response of `offers.extendDeadline` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `offers.extendDeadline` changed from `offer_not_found_error` to `offer_not_found_error_encoded`.
    - `409` error response of `offers.extendDeadline` changed from `invalid_offer_status_error` to `invalid_offer_status_error_encoded`.
    - `422` error response of `offers.extendDeadline` changed from `invalid_expiration_time_error` to `invalid_expiration_time_error_encoded`.
    - `429` error response of `offers.extendDeadline` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `offers.resend` changed from `none` to `objects_5`.
    - `401` error response of `offers.resend` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `offers.resend` changed from `offer_not_found_error` to `offer_not_found_error_encoded`.
    - `409` error response of `offers.resend` changed from `invalid_offer_status_error` to `invalid_offer_status_error_encoded`.
    - `429` error response of `offers.resend` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.listAssignments` is now required.
    - `401` error response of `timeOff.listAssignments` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `timeOff.listAssignments` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.listBalances` is now required.
    - `401` error response of `timeOff.listBalances` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.listBalances` changed from `time_off_policy_not_found` to `time_off_policy_not_found_encoded`.
    - `429` error response of `timeOff.listBalances` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.listRequests` is now required.
    - `401` error response of `timeOff.listRequests` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.listRequests` changed from `time_off_request_not_found_error` to `time_off_request_not_found_error_encoded`.
    - `429` error response of `timeOff.listRequests` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `timeOff.policies.timeOffGet` is now required.
    - `401` error response of `timeOff.policies.timeOffGet` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.policies.timeOffGet` changed from `time_off_policy_not_found` to `time_off_policy_not_found_encoded`.
    - `429` error response of `timeOff.policies.timeOffGet` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `timeOff.policies.timeOffGet2` changed from `none` to `objects_9`.
    - `401` error response of `timeOff.policies.timeOffGet2` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `timeOff.policies.timeOffGet2` changed from `time_off_policy_not_found` to `time_off_policy_not_found_encoded`.
    - `429` error response of `timeOff.policies.timeOffGet2` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `workers.list` is now required.
    - `401` error response of `workers.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workers.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Response of `workers.retrieve` changed from `none` to `objects_10`.
    - `401` error response of `workers.retrieve` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workers.retrieve` changed from `worker_not_found_error` to `worker_not_found_error_encoded`.
    - `429` error response of `workers.retrieve` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workers.delete` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workers.delete` changed from `worker_not_found_error` to `worker_not_found_error_encoded`.
    - `409` error response of `workers.delete` changed from `cannot_delete_worker` to `cannot_delete_worker_encoded`.
    - `429` error response of `workers.delete` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `workers.createEmployee` changed from `application/json` to `state_registration_required_encoded`.
    - `401` error response of `workers.createEmployee` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workers.createEmployee` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workers.createContractor` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workers.createContractor` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workers.invite` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workers.invite` changed from `worker_not_found_error` to `worker_not_found_error_encoded`.
    - `429` error response of `workers.invite` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - query param `limit` on `workplaces.list` is now required.
    - `401` error response of `workplaces.list` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `429` error response of `workplaces.list` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `400` error response of `workplaces.create` changed from `application/json` to `address_invalid_encoded`.
    - `401` error response of `workplaces.create` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `409` error response of `workplaces.create` changed from `workplace_already_exists` to `workplace_already_exists_encoded`.
    - `429` error response of `workplaces.create` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - `401` error response of `workplaces.update` changed from `api_key_unauthorized` to `api_key_unauthorized_encoded`.
    - `404` error response of `workplaces.update` changed from `workplace_not_found` to `workplace_not_found_encoded`.
    - `409` error response of `workplaces.update` changed from `workplace_already_exists` to `workplace_already_exists_encoded`.
    - `429` error response of `workplaces.update` changed from `rate_limit_exceeded` to `rate_limit_exceeded_encoded`.
    - Property `public_money_amount.amount` type changed from `integer` to `string`.
    - Property `public_money_amount.currency` type changed from `enum(USD | AUD | BGN | …)` to `union`.
    - Property `public_health_plan_carrier.id` type changed from `string` to `string`.
    - Property `public_health_plan.id` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_health_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `public_health_plan.createdAt` type changed from `date` to `string`.
    - Property `public_health_plan.updatedAt` type changed from `date` to `string`.
    - Property `public_retirement_plan.id` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_retirement_plan.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `public_retirement_plan.createdAt` type changed from `date` to `string`.
    - Property `public_retirement_plan.updatedAt` type changed from `date` to `string`.
    - Property `public_worker_reference.id` type changed from `string` to `string`.
    - Property `health_plan_reference.id` type changed from `string` to `string`.
    - Property `retirement_plan_reference.id` type changed from `string` to `string`.
    - Property `percentage_contribution.percentage` type changed from `number` to `string | union_1`.
    - Property `public_benefit_deduction.id` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveStartDate` type changed from `string` to `string`.
    - Property `public_benefit_deduction.effectiveEndDate` type changed from `string | null` to `string | null`.
    - Property `public_benefit_deduction.createdAt` type changed from `date_from_string` to `string`.
    - Property `public_benefit_deduction.updatedAt` type changed from `date_from_string` to `string`.
    - Property `office_work_location.workplaceId` type changed from `string` to `string`.
    - Removed schema `date`.
    - Removed schema `http_api_decode_error`.
    - Removed schema `issue`.
    - Removed schema `property_key`.
    - Removed schema `internal_server_error`.
    - Removed schema `api_key_unauthorized`.
    - Removed schema `rate_limit_exceeded`.
    - Removed schema `date_time_utc`.
    - Removed schema `missing_required_company_permissions`.
    - Removed schema `api_not_enabled`.
    - Removed schema `health_plan_not_found_error`.
    - Removed schema `retirement_plan_not_found_error`.
    - Removed schema `date_from_string`.
    - Removed schema `benefit_deduction_not_found_error`.
    - Removed schema `trimmed`.
    - Removed schema `non_empty_trimmed_string`.
    - Removed schema `invalid_custom_field_operation_error`.
    - Removed schema `custom_field_already_exists_error`.
    - Removed schema `custom_field_option_already_exists_error`.
    - Removed schema `custom_field_not_found_error`.
    - Removed schema `custom_field_option_not_found_error`.
    - Removed schema `custom_field_option_in_use_error`.
    - Removed schema `invalid_custom_field_value_error`.
    - Removed schema `custom_field_worker_not_found_error`.
    - Removed schema `department_already_exists`.
    - Removed schema `department_not_found`.
    - Removed schema `invalid_expiration_time_error`.
    - Removed schema `workplace_not_found`.
    - Removed schema `manager_not_found_error`.
    - Removed schema `offer_not_found_error`.
    - Removed schema `invalid_offer_status_error`.
    - Removed schema `time_off_policy_not_found`.
    - Removed schema `time_off_request_not_found_error`.
    - Removed schema `worker_not_found_error`.
    - Removed schema `state_registration_required`.
    - Removed schema `pay_schedule_not_configured`.
    - Removed schema `subscription_limit_error`.
    - Removed schema `invalid_worker_status_error`.
    - Removed schema `worker_already_exists_error`.
    - Removed schema `cannot_delete_worker`.
    - Removed schema `address_invalid`.
    - Removed schema `workplace_already_exists`.
* **api:** 6 breaking changes to the SDK surface.
    - Removed operation `benefits.healthPlans.benefitsList` (`GET /v1/benefits/health_plans`).
    - Removed operation `benefits.healthPlans.benefitsGet` (`GET /v1/benefits/health_plans/{id}`).
    - Removed operation `benefits.retirementPlans.benefitsList` (`GET /v1/benefits/retirement_plans`).
    - Removed operation `benefits.retirementPlans.benefitsGet` (`GET /v1/benefits/retirement_plans/{id}`).
    - Removed operation `benefits.deductions.benefitsList` (`GET /v1/benefits/deductions`).
    - Removed operation `benefits.deductions.benefitsGet` (`GET /v1/benefits/deductions/{id}`).
* **api:** Renamed SDK from `WarpApi` to `Warp`.
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

* **api:** add body field voidReason on offers.void (+2 more changes) ([6657151](https://github.com/TeamWarp/warp-cli/commit/6657151a4e0e4318951b857324880a002a840f55))
* **api:** add operation customFields.list (+20 more changes) ([4c3349a](https://github.com/TeamWarp/warp-cli/commit/4c3349aa778bd0dd58a31195c35c12968b829ea6))
* **api:** add operation payRates.list (+5 more changes) ([4d13e61](https://github.com/TeamWarp/warp-cli/commit/4d13e618a5a0c992ec9a12720521b56251e7b2df))
* **api:** add property public_pay_rate.worker (+1 more change) ([bcbcd60](https://github.com/TeamWarp/warp-cli/commit/bcbcd60422a7e1a432c2d2ef009b9949d79d27cb))
* **api:** add schema public_money_amount (+1 more change) ([e73d4d3](https://github.com/TeamWarp/warp-cli/commit/e73d4d320e6dd8c864a5246b1bf4c698aa67ad05))
* **api:** initial SDK generation ([13093cf](https://github.com/TeamWarp/warp-cli/commit/13093cf7fd3c65bea6a3cb55b2fb878923fa6b1e))
* **api:** remove operation benefits.deductions.get (+1 more change) ([46c5eed](https://github.com/TeamWarp/warp-cli/commit/46c5eed16e87e47bd22a26ae24d7fc26a54196b5))
* **api:** remove operation customFields.retrieve (+7 more changes) ([afb56d5](https://github.com/TeamWarp/warp-cli/commit/afb56d5b5c62b12432c6f46500ac91da1c4e4fbf))
* **api:** remove operation customWorkerFields.list (+19 more changes) ([da27e58](https://github.com/TeamWarp/warp-cli/commit/da27e58b3431fcc6e8812bd72978c3d3372248ab))
* **api:** remove operation payRates.list (+9 more changes) ([38d04c7](https://github.com/TeamWarp/warp-cli/commit/38d04c7d5ab35a4edbd70ff84e4416bab653defe))
* **api:** update 422 error response on offers.create (+2 more changes) ([9426076](https://github.com/TeamWarp/warp-cli/commit/9426076d38d9a2f49d2d072a40bc318ddb27367c))
* **api:** update property objects_6.email (+2 more changes) ([297c5d6](https://github.com/TeamWarp/warp-cli/commit/297c5d6f31adde7b7197d8f043e8dffde98e11fe))
* **api:** update schema public_pay_rate_basis (+1 more change) ([d28daff](https://github.com/TeamWarp/warp-cli/commit/d28daff5db67d17dd687d84966766256276be8b5))
* **api:** update schema union_20 ([bd50f30](https://github.com/TeamWarp/warp-cli/commit/bd50f305972a451048b101ea4a429bfcaef59933))
* **api:** update SDK name (+145 more changes) ([782be8c](https://github.com/TeamWarp/warp-cli/commit/782be8cc0350782cfb1e93c33097eccc741d28d6))
* **api:** update SDK name (+2 more changes) ([3d7660e](https://github.com/TeamWarp/warp-cli/commit/3d7660e0cc476b7c06fdc1d624a2da07fb1c7732))
* **api:** update SDK name (+222 more changes) ([65861a4](https://github.com/TeamWarp/warp-cli/commit/65861a479255960829b416736eb09b438e951ab3))
* **api:** update SDK name (+27 more changes) ([a52f6de](https://github.com/TeamWarp/warp-cli/commit/a52f6de987000729ad2602ed62c2862336fedfde))
* **api:** update SDK surface (14 changes) ([2900529](https://github.com/TeamWarp/warp-cli/commit/2900529e79e143ede8d419a8050f10df2c8026e0))
* **api:** update SDK surface (18 changes) ([fdfaf04](https://github.com/TeamWarp/warp-cli/commit/fdfaf04f84b1fb2521581c632a500cfbe948d1b3))
* **api:** update SDK surface (2 changes) ([c37e2e3](https://github.com/TeamWarp/warp-cli/commit/c37e2e3d586536e1b91b5735a2306b66ea5011e3))
* **api:** update SDK surface (329 changes) ([570311e](https://github.com/TeamWarp/warp-cli/commit/570311e64526c400057a029349811778a2ef1040))
* **api:** update SDK surface (7 changes) ([8e0814e](https://github.com/TeamWarp/warp-cli/commit/8e0814ed79c22c10654c5e782b9768fe4356b04b))
* **api:** update SDK surface (8 changes) ([8a88c5e](https://github.com/TeamWarp/warp-cli/commit/8a88c5e9bda33be0b94057c0665b4ac3cc76a353))
* **api:** update SDK surface (9 changes) ([a242326](https://github.com/TeamWarp/warp-cli/commit/a2423265799d1886a57cfba705fc3dc17a51be84))


### Chores

* **api:** regenerate SDK ([d460f2b](https://github.com/TeamWarp/warp-cli/commit/d460f2b61c3dbcc0a65a93ff47e70f0ab1a69c95))
* **api:** regenerate SDK ([973905a](https://github.com/TeamWarp/warp-cli/commit/973905a356f909fff9c70be3dcb3bd6a1ed68073))
* **api:** regenerate SDK ([420a49a](https://github.com/TeamWarp/warp-cli/commit/420a49a05ba100769cc252527df1b5fd90797300))
* **api:** regenerate SDK ([f2708e6](https://github.com/TeamWarp/warp-cli/commit/f2708e6776554280b9ab47ab79328e9e2d563ecd))
* **api:** regenerate SDK ([8bcae7d](https://github.com/TeamWarp/warp-cli/commit/8bcae7daa9fe464614b9390bfe70ac974eb3e2a1))
* **api:** update generated SDK content ([d309867](https://github.com/TeamWarp/warp-cli/commit/d30986700b5622ef94e48cd2391eb587c605f930))
* **api:** update generated SDK content ([92594a0](https://github.com/TeamWarp/warp-cli/commit/92594a098dcd0f48c761d3f262d6fff470209009))
* **api:** update generated SDK content ([2665935](https://github.com/TeamWarp/warp-cli/commit/26659350c01d6df9e1c7fc02e7cd04c7a1108949))
* **api:** update generated SDK content ([9219a65](https://github.com/TeamWarp/warp-cli/commit/9219a65aabc10fb630fb52968c46eda0d8f6407e))
* **api:** update generated SDK content ([6245868](https://github.com/TeamWarp/warp-cli/commit/62458683315ecac9c557a0616a73a3df00db70fb))
* **api:** update generated SDK content ([260ae69](https://github.com/TeamWarp/warp-cli/commit/260ae692bc4916fb5050f7c55bb1971f9ad1598d))
* **api:** update generated SDK content ([51b29bb](https://github.com/TeamWarp/warp-cli/commit/51b29bb892e220f2c41fb9ec6346ce2e28bb9997))
* **api:** update generated SDK content ([6e6b2b5](https://github.com/TeamWarp/warp-cli/commit/6e6b2b56feb60fda87a44396ff9b1d9f95c5c1c9))
* **api:** update generated SDK content ([0c25cb4](https://github.com/TeamWarp/warp-cli/commit/0c25cb411e4248be0324351c3c965d990bda706f))
* **api:** update generated SDK content ([af3ad4e](https://github.com/TeamWarp/warp-cli/commit/af3ad4ed93bc0a7b51e2ff97c391fe6c0222b6c6))
* set the release manifest to 0.3.0 ([16ecd4e](https://github.com/TeamWarp/warp-cli/commit/16ecd4e4a2826413160bbca9f3e2c29f13a822a9))

## [0.2.0](https://github.com/TeamWarp/warp-cli/compare/v0.1.0...v0.2.0) (2026-08-03)


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
* **api:** initial SDK generation ([13093cf](https://github.com/TeamWarp/warp-cli/commit/13093cf7fd3c65bea6a3cb55b2fb878923fa6b1e))
* **api:** remove operation customWorkerFields.list (+19 more changes) ([da27e58](https://github.com/TeamWarp/warp-cli/commit/da27e58b3431fcc6e8812bd72978c3d3372248ab))
* **api:** update contact email ([2ebd7dd](https://github.com/TeamWarp/warp-cli/commit/2ebd7dd83f53a49ae7552b8e3f135affef1e6c26))
* **api:** update import names to warp ([1c92288](https://github.com/TeamWarp/warp-cli/commit/1c922880681e393a7c7491f99f5d8914bdd91cae))
* **api:** update SDK name (+145 more changes) ([782be8c](https://github.com/TeamWarp/warp-cli/commit/782be8cc0350782cfb1e93c33097eccc741d28d6))
* **api:** update SDK surface (2 changes) ([c37e2e3](https://github.com/TeamWarp/warp-cli/commit/c37e2e3d586536e1b91b5735a2306b66ea5011e3))


### Chores

* **api:** regenerate SDK ([f2708e6](https://github.com/TeamWarp/warp-cli/commit/f2708e6776554280b9ab47ab79328e9e2d563ecd))
* **api:** regenerate SDK ([8bcae7d](https://github.com/TeamWarp/warp-cli/commit/8bcae7daa9fe464614b9390bfe70ac974eb3e2a1))
* **api:** update generated SDK content ([51b29bb](https://github.com/TeamWarp/warp-cli/commit/51b29bb892e220f2c41fb9ec6346ce2e28bb9997))
* **api:** update generated SDK content ([6e6b2b5](https://github.com/TeamWarp/warp-cli/commit/6e6b2b56feb60fda87a44396ff9b1d9f95c5c1c9))
* **api:** update generated SDK content ([0c25cb4](https://github.com/TeamWarp/warp-cli/commit/0c25cb411e4248be0324351c3c965d990bda706f))
* **api:** update generated SDK content ([af3ad4e](https://github.com/TeamWarp/warp-cli/commit/af3ad4ed93bc0a7b51e2ff97c391fe6c0222b6c6))
