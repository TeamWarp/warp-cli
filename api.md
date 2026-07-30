# Warp CLI API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`CustomWorkerFields`](#customworkerfields)
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

## `CustomWorkerFields`

### List Fields

List the custom worker field definitions your API key can read. Each field belongs to a worker-data category; fields whose category your key cannot read are omitted unless the key holds workers:custom_fields.

```sh
warpapi custom-worker-fields list --api-key "$API_KEY"
```

### Create Field

Create a custom worker field definition. The field type is immutable after creation. Select and multi_select fields can include their initial options. Access to values derives from the field category; requires the workers:custom_fields permission.

```sh
warpapi custom-worker-fields create --api-key "$API_KEY" --name 'name' --type 'text' --category 'info'
```

### Get Field

Get a custom worker field definition, including its select options. Archived options may appear on existing worker values but cannot be newly selected.

```sh
warpapi custom-worker-fields retrieve 'cf_1234' --api-key "$API_KEY"
```

### Update Field

Update a custom worker field definition. The field type cannot be changed; create a new field instead. Requires the workers:custom_fields permission; changing the category, access level, or input source requires the manage level.

```sh
warpapi custom-worker-fields update 'cf_1234' --api-key "$API_KEY"
```

### Archive Field

Archive a custom worker field. Archived fields keep their existing worker values but cannot receive new ones. Requires the workers:custom_fields permission at the manage level.

```sh
warpapi custom-worker-fields archive 'cf_1234' --api-key "$API_KEY"
```

### Create Field Option

Add an option to a select or multi_select custom worker field. The option value should be treated as stable; the label can change. Requires the workers:custom_fields permission.

```sh
warpapi custom-worker-fields create-option 'cf_1234' --api-key "$API_KEY" --label 'label' --value 'value'
```

### Update Field Option

Update the label or sort order of a custom worker field option. Options of archived fields cannot be edited. Requires the workers:custom_fields permission.

```sh
warpapi custom-worker-fields update-option 'cfo_1234' --api-key "$API_KEY"
```

### Delete Unused Field Option

Delete a custom worker field option that is not applied to any worker. Options in use must be archived instead. Requires the workers:custom_fields permission at the manage level.

```sh
warpapi custom-worker-fields delete-option 'cfo_1234' --api-key "$API_KEY"
```

### Archive Field Option

Archive a custom worker field option. Archived options remain on existing worker values but cannot be newly selected. Requires the workers:custom_fields permission at the manage level.

```sh
warpapi custom-worker-fields archive-option 'cfo_1234' --api-key "$API_KEY"
```

### List Field Values

List custom field values for workers, optionally filtered by worker or field. Values are returned only for fields whose category your API key can read.

```sh
warpapi custom-worker-fields list-values --api-key "$API_KEY"
```

### Set Field Value

Create or replace a worker's value for a custom field. The value shape must match the field type, and your API key must hold write on the field's category.

```sh
warpapi custom-worker-fields upsert-value --api-key "$API_KEY" --worker-id 'wrk_1234' --field-id 'cf_1234' --value '{"type":"text","value":""}'
```

### Clear Field Value

Remove a worker's value for a custom field. Your API key must hold write on the field's category.

```sh
warpapi custom-worker-fields clear-value --api-key "$API_KEY" --worker-id 'wrk_1234' --field-id 'cf_1234'
```

## `Departments`

### List Departments

List all departments for your company.

```sh
warpapi departments list --api-key "$API_KEY"
```

### Create Department

Create a new department.

```sh
warpapi departments create --api-key "$API_KEY" --name 'name'
```

### Update Department

Update an existing department.

```sh
warpapi departments update 'dpt_1234' --api-key "$API_KEY"
```

## `Offers`

### List Offers

List the candidate offers for your company.

```sh
warpapi offers list --api-key "$API_KEY"
```

### Create Offer

Create and send a candidate offer. The candidate receives an email with a link to the offer portal.

```sh
warpapi offers create --api-key "$API_KEY" --candidate '{"firstName":"x","lastName":"x","email":"john@joinwarp.com"}' --position '{"title":"x","startDate":"2000-01-01"}' --worker-type 'employee' --compensation '{"payBasis":"year","payCurrency":"USD","payRate":0}'
```

### Void Offer

Void a previously sent offer. Only sent offers can be voided.

```sh
warpapi offers void 'offr_1234' --api-key "$API_KEY"
```

### Extend Offer Deadline

Extend the expiration deadline of a sent offer.

```sh
warpapi offers extend-deadline 'offr_1234' --api-key "$API_KEY" --expiration-time 'expirationTime'
```

### Resend Offer

Resend the offer email to the candidate for a sent offer.

```sh
warpapi offers resend 'offr_1234' --api-key "$API_KEY"
```

## `TimeOff`

### List Time Off Assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

```sh
warpapi time-off list-assignments --api-key "$API_KEY"
```

### List Time Off Balances

Get worker remaining time-off balances.

```sh
warpapi time-off list-balances --api-key "$API_KEY"
```

### List Time Off Requests

Get the time off requests that workers in your company have made.

```sh
warpapi time-off list-requests --api-key "$API_KEY"
```

### `TimeOff Policies`

#### List Time Off Policies

Get the time off policies for your company

```sh
warpapi time-off:policies time-off-get --api-key "$API_KEY"
```

#### Get Time Off Policy

Get a specific time off policy by id

```sh
warpapi time-off:policies time-off-get2 'top_1234' --api-key "$API_KEY"
```

## `Workers`

### List Workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

```sh
warpapi workers list --api-key "$API_KEY"
```

### Get Worker

Get a specific worker by id.

```sh
warpapi workers retrieve 'wrk_1234' --api-key "$API_KEY"
```

### Delete Worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```sh
warpapi workers delete 'wrk_1234' --api-key "$API_KEY"
```

### Create Employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

```sh
warpapi workers create-employee --api-key "$API_KEY" --first-name 'firstName' --last-name 'lastName' --position 'position' --start-date '2000-01-01' --email 'john@joinwarp.com' --department-id 'dpt_1234' --manager-id 'wrk_1234' --work-location '{"type":"office","workplaceId":"wkp_1234"}' --compensation '{"amount":0,"per":"hour"}'
```

### Create Contractor

Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.

```sh
warpapi workers create-contractor --api-key "$API_KEY" --entity-type 'individual' --first-name 'firstName' --last-name 'lastName' --position 'position' --start-date '2000-01-01' --email 'john@joinwarp.com' --department-id 'dpt_1234' --manager-id 'wrk_1234' --work-country 'AD'
```

### Invite Worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

```sh
warpapi workers invite 'wrk_1234' --api-key "$API_KEY"
```

## `Workplaces`

### List Workplaces

List all workplaces for your company.

```sh
warpapi workplaces list --api-key "$API_KEY"
```

### Create Workplace

Create a new workplace.

```sh
warpapi workplaces create --api-key "$API_KEY" --name 'name' --type 'remote' --address '{"line1":"x","city":"","postalCode":"","state":"AL","country":"US"}'
```

### Update Workplace

Update an existing workplace.

```sh
warpapi workplaces update 'wkp_1234' --api-key "$API_KEY"
```
