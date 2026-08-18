# Warp CLI API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Benefits`](#benefits)
  - [`Benefits HealthPlans`](#benefits-healthplans)
    - [List Health Plans](#list-health-plans)
    - [Get Health Plan](#get-health-plan)
  - [`Benefits RetirementPlans`](#benefits-retirementplans)
    - [List Retirement Plans](#list-retirement-plans)
    - [Get Retirement Plan](#get-retirement-plan)
  - [`Benefits Deductions`](#benefits-deductions)
    - [List Benefit Deductions](#list-benefit-deductions)
    - [Get Benefit Deduction](#get-benefit-deduction)
- [`CustomFields`](#customfields)
  - [List Fields](#list-fields)
  - [Create Field](#create-field)
  - [Get Field](#get-field)
  - [Update Field](#update-field)
  - [Archive Field](#archive-field)
  - [Create Field Option](#create-field-option)
  - [Update Field Option](#update-field-option)
  - [Delete Unused Field Option](#delete-unused-field-option)
  - [Archive Field Option](#archive-field-option)
  - [List Field Values](#list-field-values)
  - [Set Field Value](#set-field-value)
  - [Clear Field Value](#clear-field-value)
- [`Departments`](#departments)
  - [List Departments](#list-departments)
  - [Create Department](#create-department)
  - [Update Department](#update-department)
- [`Offers`](#offers)
  - [List Offers](#list-offers)
  - [Create Offer](#create-offer)
  - [Void Offer](#void-offer)
  - [Extend Offer Deadline](#extend-offer-deadline)
  - [Resend Offer](#resend-offer)
- [`PayRates`](#payrates)
  - [List Pay Rates](#list-pay-rates)
  - [Get Pay Rate](#get-pay-rate)
- [`TimeOff`](#timeoff)
  - [List Time Off Assignments](#list-time-off-assignments)
  - [List Time Off Balances](#list-time-off-balances)
  - [List Time Off Requests](#list-time-off-requests)
  - [`TimeOff Policies`](#timeoff-policies)
    - [List Time Off Policies](#list-time-off-policies)
    - [Get Time Off Policy](#get-time-off-policy)
- [`Workers`](#workers)
  - [List Workers](#list-workers)
  - [Get Worker](#get-worker)
  - [Delete Worker](#delete-worker)
  - [Create Employee](#create-employee)
  - [Create Contractor](#create-contractor)
  - [Invite Worker](#invite-worker)
- [`Workplaces`](#workplaces)
  - [List Workplaces](#list-workplaces)
  - [Create Workplace](#create-workplace)
  - [Update Workplace](#update-workplace)

## `Benefits`

### `Benefits HealthPlans`

#### List Health Plans

List company health plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.

```sh
warp benefits:health-plans list --api-key "$WARP_API_KEY" --limit 'limit' --statuses '["active"]'
```

#### Get Health Plan

Get a publicly visible company health plan by id.

```sh
warp benefits:health-plans get 'id' --api-key "$WARP_API_KEY"
```

### `Benefits RetirementPlans`

#### List Retirement Plans

List company retirement plans. Defaults to active plans. A plan whose effectiveEndDate has elapsed is reported and filtered as terminated.

```sh
warp benefits:retirement-plans list --api-key "$WARP_API_KEY" --limit 'limit' --statuses '["active"]'
```

#### Get Retirement Plan

Get a company retirement plan by id, regardless of status.

```sh
warp benefits:retirement-plans get 'id' --api-key "$WARP_API_KEY"
```

### `Benefits Deductions`

#### List Benefit Deductions

List current payroll benefit deductions. Defaults to active deductions. A deduction whose effectiveEndDate has elapsed is reported and filtered as terminated.

```sh
warp benefits:deductions list --api-key "$WARP_API_KEY" --limit 'limit' --statuses '["active"]'
```

#### Get Benefit Deduction

Get the current version of a company benefit deduction by id.

```sh
warp benefits:deductions get 'id' --api-key "$WARP_API_KEY"
```

## `CustomFields`

### List Fields

List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.

```sh
warp custom-fields list --api-key "$WARP_API_KEY"
```

### Create Field

Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.

```sh
warp custom-fields create --api-key "$WARP_API_KEY" --name '{}' --type 'text' --category 'info'
```

### Get Field

Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.

```sh
warp custom-fields get 'id' --api-key "$WARP_API_KEY"
```

### Update Field

Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.

```sh
warp custom-fields update 'id' --api-key "$WARP_API_KEY"
```

### Archive Field

Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.

```sh
warp custom-fields archive 'id' --api-key "$WARP_API_KEY"
```

### Create Field Option

Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.

```sh
warp custom-fields create-option 'id' --api-key "$WARP_API_KEY" --label '{}' --value '{}'
```

### Update Field Option

Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.

```sh
warp custom-fields update-option 'id' --api-key "$WARP_API_KEY"
```

### Delete Unused Field Option

Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.

```sh
warp custom-fields delete-option 'id' --api-key "$WARP_API_KEY"
```

### Archive Field Option

Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.

```sh
warp custom-fields archive-option 'id' --api-key "$WARP_API_KEY"
```

### List Field Values

List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.

```sh
warp custom-fields list-values --api-key "$WARP_API_KEY"
```

### Set Field Value

Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.

```sh
warp custom-fields upsert-value --api-key "$WARP_API_KEY" --worker-id '{}' --field-id '{}' --value '{"type":"text","value":""}'
```

### Clear Field Value

Remove a worker's value for a custom field. Your API key must hold write on the field's category.

```sh
warp custom-fields clear-value --api-key "$WARP_API_KEY" --worker-id '{}' --field-id '{}'
```

## `Departments`

### List Departments

List all departments for your company.

```sh
warp departments list --api-key "$WARP_API_KEY" --limit 'limit'
```

### Create Department

Create a new department.

```sh
warp departments create --api-key "$WARP_API_KEY" --name '{}'
```

### Update Department

Update an existing department.

```sh
warp departments update 'id' --api-key "$WARP_API_KEY"
```

## `Offers`

### List Offers

List the candidate offers for your company.

```sh
warp offers list --api-key "$WARP_API_KEY" --limit 'limit'
```

### Create Offer

Create and send a candidate offer. The candidate receives an email with a link to the offer portal.

```sh
warp offers create --api-key "$WARP_API_KEY" --candidate '{"firstName":{},"lastName":{},"email":{}}' --position '{"title":{},"startDate":{}}' --worker-type 'employee' --compensation '{"payBasis":"year","payCurrency":"USD","payRate":{}}'
```

### Void Offer

Void a previously sent offer. Only sent offers can be voided.

```sh
warp offers void 'id' --api-key "$WARP_API_KEY"
```

### Extend Offer Deadline

Extend the expiration deadline of a sent offer.

```sh
warp offers extend-deadline 'id' --api-key "$WARP_API_KEY" --expiration-time 'expirationTime'
```

### Resend Offer

Resend the offer email to the candidate for a sent offer.

```sh
warp offers resend 'id' --api-key "$WARP_API_KEY"
```

## `PayRates`

### List Pay Rates

List pay rates visible to the API key. Results may be filtered by worker, effective start date, or regular/additional type. US and global worker rates require their corresponding compensation read scopes.

```sh
warp pay-rates list --api-key "$WARP_API_KEY" --limit 'limit'
```

### Get Pay Rate

Get a specific pay rate by id. The API key must have the compensation read scope corresponding to the worker.

```sh
warp pay-rates get 'id' --api-key "$WARP_API_KEY"
```

## `TimeOff`

### List Time Off Assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

```sh
warp time-off list-assignments --api-key "$WARP_API_KEY" --limit 'limit'
```

### List Time Off Balances

Get worker remaining time-off balances.

```sh
warp time-off list-balances --api-key "$WARP_API_KEY" --limit 'limit'
```

### List Time Off Requests

Get the time off requests that workers in your company have made.

```sh
warp time-off list-requests --api-key "$WARP_API_KEY" --limit 'limit'
```

### `TimeOff Policies`

#### List Time Off Policies

Get the time off policies for your company

```sh
warp time-off:policies list --api-key "$WARP_API_KEY" --limit 'limit'
```

#### Get Time Off Policy

Get a specific time off policy by id

```sh
warp time-off:policies get 'id' --api-key "$WARP_API_KEY"
```

## `Workers`

### List Workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

```sh
warp workers list --api-key "$WARP_API_KEY" --limit 'limit'
```

### Get Worker

Get a specific worker by id.

```sh
warp workers get 'id' --api-key "$WARP_API_KEY"
```

### Delete Worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```sh
warp workers delete 'id' --api-key "$WARP_API_KEY"
```

### Create Employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

```sh
warp workers create-employee --api-key "$WARP_API_KEY" --first-name '{}' --last-name '{}' --position '{}' --start-date '{}' --email '{}' --department-id '{}' --manager-id '{}' --work-location '{"type":"office","workplaceId":{}}' --compensation '{"amount":{},"per":"hour"}'
```

### Create Contractor

Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.

```sh
warp workers create-contractor --api-key "$WARP_API_KEY" --entity-type 'individual' --first-name '{}' --last-name '{}' --position '{}' --start-date '{}' --email '{}' --department-id '{}' --manager-id '{}' --work-country 'AD'
```

### Invite Worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

```sh
warp workers invite 'id' --api-key "$WARP_API_KEY"
```

## `Workplaces`

### List Workplaces

List all workplaces for your company.

```sh
warp workplaces list --api-key "$WARP_API_KEY" --limit 'limit'
```

### Create Workplace

Create a new workplace.

```sh
warp workplaces create --api-key "$WARP_API_KEY" --name '{}' --type 'remote' --address '{"line1":{},"city":"","postalCode":"","state":"AL","country":"US"}'
```

### Update Workplace

Update an existing workplace.

```sh
warp workplaces update 'id' --api-key "$WARP_API_KEY"
```
