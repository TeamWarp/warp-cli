# Warp CLI API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`TimeOff`](#timeoff)
  - [List time off assignments](#list-time-off-assignments)
  - [List time off balances](#list-time-off-balances)
  - [List time off requests](#list-time-off-requests)
  - [`TimeOff Policies`](#timeoff-policies)
    - [List time off policies](#list-time-off-policies)
    - [Get time off policy](#get-time-off-policy)
- [`Workers`](#workers)
  - [List workers](#list-workers)
  - [Get worker](#get-worker)
  - [Delete worker](#delete-worker)
  - [Create employee](#create-employee)
  - [Create contractor](#create-contractor)
  - [Invite worker](#invite-worker)
- [`Departments`](#departments)
  - [List departments](#list-departments)
  - [Create department](#create-department)
  - [Update department](#update-department)
- [`Workplaces`](#workplaces)
  - [List workplaces](#list-workplaces)
  - [Create workplace](#create-workplace)
  - [Update workplace](#update-workplace)

## `TimeOff`

### List time off assignments

Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.

```sh
warp time-off list-assignments --api-key "$WARP_API_KEY"
```

### List time off balances

Get worker remaining time-off balances.

```sh
warp time-off list-balances --api-key "$WARP_API_KEY"
```

### List time off requests

Get the time off requests that workers in your company have made.

```sh
warp time-off list-requests --api-key "$WARP_API_KEY"
```

### `TimeOff Policies`

#### List time off policies

Get the time off policies for your company

```sh
warp time-off:policies list --api-key "$WARP_API_KEY"
```

#### Get time off policy

Get a specific time off policy by id

```sh
warp time-off:policies retrieve 'top_1234' --api-key "$WARP_API_KEY"
```

## `Workers`

### List workers

List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.

```sh
warp workers list --api-key "$WARP_API_KEY"
```

### Get worker

Get a specific worker by id.

```sh
warp workers retrieve 'wrk_1234' --api-key "$WARP_API_KEY"
```

### Delete worker

Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.

```sh
warp workers delete 'wrk_1234' --api-key "$WARP_API_KEY"
```

### Create employee

Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.

```sh
warp workers create-employee --api-key "$WARP_API_KEY" --first-name 'firstName' --last-name 'lastName' --position 'position' --start-date '2000-01-01' --email 'john@joinwarp.com' --department-id 'dpt_1234' --manager-id 'wrk_1234' --work-location '{"type":"office","workplaceId":"wkp_1234"}' --compensation '{"amount":0,"per":"hour"}'
```

### Create contractor

Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.

```sh
warp workers create-contractor --api-key "$WARP_API_KEY" --entity-type 'individual' --first-name 'firstName' --last-name 'lastName' --position 'position' --start-date '2000-01-01' --email 'john@joinwarp.com' --department-id 'dpt_1234' --manager-id 'wrk_1234' --work-country 'AD'
```

### Invite worker

Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.

```sh
warp workers invite 'wrk_1234' --api-key "$WARP_API_KEY"
```

## `Departments`

### List departments

List all departments for your company.

```sh
warp departments list --api-key "$WARP_API_KEY"
```

### Create department

Create a new department.

```sh
warp departments create --api-key "$WARP_API_KEY" --name 'name'
```

### Update department

Update an existing department.

```sh
warp departments update 'dpt_1234' --api-key "$WARP_API_KEY"
```

## `Workplaces`

### List workplaces

List all workplaces for your company.

```sh
warp workplaces list --api-key "$WARP_API_KEY"
```

### Create workplace

Create a new workplace.

```sh
warp workplaces create --api-key "$WARP_API_KEY" --name 'name' --type 'remote' --address '{"line1":"x","city":"","postalCode":"","state":"AL","country":"US"}'
```

### Update workplace

Update an existing workplace.

```sh
warp workplaces update 'wkp_1234' --api-key "$WARP_API_KEY"
```
