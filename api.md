# Warp CLI API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

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

## `Departments`

### List Departments

List all departments for your company.

```sh
warpapi departments list --api-key "$WARP_API_KEY"
```

### Create Department

Create a new department.

```sh
warpapi departments create --api-key "$WARP_API_KEY" --name 'name'
```

### Update Department

Update an existing department.

```sh
warpapi departments update 'dpt_1234' --api-key "$WARP_API_KEY"
```

## `Offers`

### List Offers

List the candidate offers for your company.

```sh
warpapi offers list --api-key "$WARP_API_KEY"
```

### Create Offer

Create and send a candidate offer. The candidate receives an email with a link to the offer portal.

```sh
warpapi offers create --api-key "$WARP_API_KEY" --candidate '{"firstName":"x","lastName":"x","email":"john@joinwarp.com"}' --position '{"title":"x","startDate":"2000-01-01"}' --worker-type 'employee' --compensation '{"payBasis":"year","payCurrency":"USD","payRate":0}'
```

### Void Offer

Void a previously sent offer. Only sent offers can be voided.

```sh
warpapi offers void 'offr_1234' --api-key "$WARP_API_KEY"
```

### Extend Offer Deadline

Extend the expiration deadline of a sent offer.

```sh
warpapi offers extend-deadline 'offr_1234' --api-key "$WARP_API_KEY" --expiration-time 'expirationTime'
```

### Resend Offer

Resend the offer email to the candidate for a sent offer.

```sh
warpapi offers resend 'offr_1234' --api-key "$WARP_API_KEY"
```

## `TimeOff`

### List Time Off Assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

```sh
warpapi time-off list-assignments --api-key "$WARP_API_KEY"
```

### List Time Off Balances

Get worker remaining time-off balances.

```sh
warpapi time-off list-balances --api-key "$WARP_API_KEY"
```

### List Time Off Requests

Get the time off requests that workers in your company have made.

```sh
warpapi time-off list-requests --api-key "$WARP_API_KEY"
```

### `TimeOff Policies`

#### List Time Off Policies

Get the time off policies for your company

```sh
warpapi time-off:policies time-off-get --api-key "$WARP_API_KEY"
```

#### Get Time Off Policy

Get a specific time off policy by id

```sh
warpapi time-off:policies time-off-get2 'top_1234' --api-key "$WARP_API_KEY"
```

## `Workers`

### List Workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

```sh
warpapi workers list --api-key "$WARP_API_KEY"
```

### Get Worker

Get a specific worker by id.

```sh
warpapi workers retrieve 'wrk_1234' --api-key "$WARP_API_KEY"
```

### Delete Worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```sh
warpapi workers delete 'wrk_1234' --api-key "$WARP_API_KEY"
```

### Create Employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

```sh
warpapi workers create-employee --api-key "$WARP_API_KEY" --first-name 'firstName' --last-name 'lastName' --position 'position' --start-date '2000-01-01' --email 'john@joinwarp.com' --department-id 'dpt_1234' --manager-id 'wrk_1234' --work-location '{"type":"office","workplaceId":"wkp_1234"}' --compensation '{"amount":0,"per":"hour"}'
```

### Create Contractor

Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.

```sh
warpapi workers create-contractor --api-key "$WARP_API_KEY" --entity-type 'individual' --first-name 'firstName' --last-name 'lastName' --position 'position' --start-date '2000-01-01' --email 'john@joinwarp.com' --department-id 'dpt_1234' --manager-id 'wrk_1234' --work-country 'AD'
```

### Invite Worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

```sh
warpapi workers invite 'wrk_1234' --api-key "$WARP_API_KEY"
```

## `Workplaces`

### List Workplaces

List all workplaces for your company.

```sh
warpapi workplaces list --api-key "$WARP_API_KEY"
```

### Create Workplace

Create a new workplace.

```sh
warpapi workplaces create --api-key "$WARP_API_KEY" --name 'name' --type 'remote' --address '{"line1":"x","city":"","postalCode":"","state":"AL","country":"US"}'
```

### Update Workplace

Update an existing workplace.

```sh
warpapi workplaces update 'wkp_1234' --api-key "$WARP_API_KEY"
```
