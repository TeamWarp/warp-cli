// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { Command } from 'commander'
import SDK from '../sdk/index'
import { createProgram, type CliClientOptionDefinition, type CliCommandDefinition } from '../cli/runtime'

const clientOptions = [
  {
    "clientKey": "apiKey",
    "sdkKey": "apiKey",
    "name": "api-key",
    "optionKey": "apiKey",
    "env": "WARP_API_KEY",
    "auth": true
  }
] as const satisfies readonly CliClientOptionDefinition[]

const commands = [
  {
    "resourcePath": [
      "timeOff"
    ],
    "commandPath": [
      "time-off",
      "list-assignments"
    ],
    "methodName": "listAssignments",
    "summary": "List time off assignments",
    "description": "Time off assignments are mappings between workers and time off policies. Useful for finding out which policies a worker is assigned to, or which workers are assigned to a given policy.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "policy-id",
        "optionKey": "policyId",
        "paramKey": "policyIds",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "worker-id",
        "optionKey": "workerId",
        "paramKey": "workerIds",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      }
    ]
  },
  {
    "resourcePath": [
      "timeOff"
    ],
    "commandPath": [
      "time-off",
      "list-balances"
    ],
    "methodName": "listBalances",
    "summary": "List time off balances",
    "description": "Get worker remaining time-off balances.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "policy-id",
        "optionKey": "policyId",
        "paramKey": "policyIds",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "worker-id",
        "optionKey": "workerId",
        "paramKey": "workerIds",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "start-date",
        "optionKey": "startDate",
        "paramKey": "startDate",
        "location": "query",
        "required": false,
        "description": "a string to be decoded into a Date",
        "valueKind": "string"
      },
      {
        "name": "end-date",
        "optionKey": "endDate",
        "paramKey": "endDate",
        "location": "query",
        "required": false,
        "description": "a string to be decoded into a Date",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "timeOff"
    ],
    "commandPath": [
      "time-off",
      "list-requests"
    ],
    "methodName": "listRequests",
    "summary": "List time off requests",
    "description": "Get the time off requests that workers in your company have made.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "valueKind": "string"
      },
      {
        "name": "status",
        "optionKey": "status",
        "paramKey": "statuses",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "policy-id",
        "optionKey": "policyId",
        "paramKey": "policyIds",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "worker-id",
        "optionKey": "workerId",
        "paramKey": "workerIds",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "starts-on-or-after",
        "optionKey": "startsOnOrAfter",
        "paramKey": "startsOnOrAfter",
        "location": "query",
        "required": false,
        "description": "a string to be decoded into a Date",
        "valueKind": "string"
      },
      {
        "name": "starts-before",
        "optionKey": "startsBefore",
        "paramKey": "startsBefore",
        "location": "query",
        "required": false,
        "description": "a string to be decoded into a Date",
        "valueKind": "string"
      },
      {
        "name": "ends-on-or-after",
        "optionKey": "endsOnOrAfter",
        "paramKey": "endsOnOrAfter",
        "location": "query",
        "required": false,
        "description": "a string to be decoded into a Date",
        "valueKind": "string"
      },
      {
        "name": "ends-before",
        "optionKey": "endsBefore",
        "paramKey": "endsBefore",
        "location": "query",
        "required": false,
        "description": "a string to be decoded into a Date",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "timeOff",
      "policies"
    ],
    "commandPath": [
      "time-off:policies",
      "list"
    ],
    "methodName": "list",
    "summary": "List time off policies",
    "description": "Get the time off policies for your company",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "description": "a string starting with \"top_\"",
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "description": "a string starting with \"top_\"",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "timeOff",
      "policies"
    ],
    "commandPath": [
      "time-off:policies",
      "retrieve"
    ],
    "methodName": "retrieve",
    "summary": "Get time off policy",
    "description": "Get a specific time off policy by id",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "id",
        "optionKey": "id",
        "paramKey": "id",
        "location": "path",
        "required": true,
        "description": "a string starting with \"top_\"",
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "workers"
    ],
    "commandPath": [
      "workers",
      "list"
    ],
    "methodName": "list",
    "summary": "List workers",
    "description": "List all workers. Workers include anyone employed by the company, whether US or international, full-time employees or contractors.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "description": "The id of the worker.",
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "description": "The id of the worker.",
        "valueKind": "string"
      },
      {
        "name": "status",
        "optionKey": "status",
        "paramKey": "statuses",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "type",
        "optionKey": "type",
        "paramKey": "types",
        "location": "query",
        "required": false,
        "valueKind": "array",
        "repeatable": true
      },
      {
        "name": "work-email",
        "optionKey": "workEmail",
        "paramKey": "workEmail",
        "location": "query",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "workers"
    ],
    "commandPath": [
      "workers",
      "retrieve"
    ],
    "methodName": "retrieve",
    "summary": "Get worker",
    "description": "Get a specific worker by id.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "id",
        "optionKey": "id",
        "paramKey": "id",
        "location": "path",
        "required": true,
        "description": "The id of the worker.",
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "workers"
    ],
    "commandPath": [
      "workers",
      "delete"
    ],
    "methodName": "delete",
    "summary": "Delete worker",
    "description": "Delete a worker. Only workers who have not yet completed onboarding can be deleted. Active workers must be properly offboarded.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "id",
        "optionKey": "id",
        "paramKey": "id",
        "location": "path",
        "required": true,
        "description": "The id of the worker.",
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "workers"
    ],
    "commandPath": [
      "workers",
      "create-employee"
    ],
    "methodName": "createEmployee",
    "summary": "Create employee",
    "description": "Create a new US employee. The worker will be created in draft status and must be invited separately via the invite endpoint. If hiring in a state without an existing tax registration, you must specify the stateRegistration field.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "first-name",
        "optionKey": "firstName",
        "paramKey": "firstName",
        "location": "body",
        "required": true,
        "description": "a non empty string",
        "valueKind": "string"
      },
      {
        "name": "last-name",
        "optionKey": "lastName",
        "paramKey": "lastName",
        "location": "body",
        "required": true,
        "description": "a non empty string",
        "valueKind": "string"
      },
      {
        "name": "position",
        "optionKey": "position",
        "paramKey": "position",
        "location": "body",
        "required": true,
        "description": "The employee's job title.",
        "valueKind": "string"
      },
      {
        "name": "start-date",
        "optionKey": "startDate",
        "paramKey": "startDate",
        "location": "body",
        "required": true,
        "description": "A date string in the form YYYY-MM-DD",
        "valueKind": "string"
      },
      {
        "name": "email",
        "optionKey": "email",
        "paramKey": "email",
        "location": "body",
        "required": true,
        "description": "Personal email address. The invite will be sent here.",
        "valueKind": "string"
      },
      {
        "name": "work-email",
        "optionKey": "workEmail",
        "paramKey": "workEmail",
        "location": "body",
        "required": false,
        "description": "Company-issued email address, if applicable.",
        "valueKind": "string"
      },
      {
        "name": "require-i9",
        "optionKey": "requireI9",
        "paramKey": "requireI9",
        "location": "body",
        "required": false,
        "description": "Whether the employee is required to complete I-9 work authorization. Set to false if the employee has already been verified off-platform. Defaults to true.",
        "valueKind": "boolean"
      },
      {
        "name": "state-registration",
        "optionKey": "stateRegistration",
        "paramKey": "stateRegistration",
        "location": "body",
        "required": false,
        "description": "How state tax registration is handled for this employee's work state. Required when hiring in a state where your company doesn't have an existing registration. Use 'self_managed' if you've already registered in this state, or 'warp_managed' for Warp to handle registration on your behalf.",
        "valueKind": "string"
      },
      {
        "name": "department-id",
        "optionKey": "departmentId",
        "paramKey": "departmentId",
        "location": "body",
        "required": true,
        "description": "The department to assign this employee to.",
        "valueKind": "string"
      },
      {
        "name": "manager-id",
        "optionKey": "managerId",
        "paramKey": "managerId",
        "location": "body",
        "required": true,
        "description": "The worker id of this employee's direct manager.",
        "valueKind": "string"
      },
      {
        "name": "stock-options",
        "optionKey": "stockOptions",
        "paramKey": "stockOptions",
        "location": "body",
        "required": false,
        "description": "Number of stock options granted to this employee.",
        "valueKind": "number"
      },
      {
        "name": "work-location",
        "optionKey": "workLocation",
        "paramKey": "workLocation",
        "location": "body",
        "required": true,
        "description": "Where the employee will work. Either an existing company workplace or a remote US state.",
        "valueKind": "unknown"
      },
      {
        "name": "compensation",
        "optionKey": "compensation",
        "paramKey": "compensation",
        "location": "body",
        "required": true,
        "description": "The employee's base compensation.",
        "valueKind": "object"
      },
      {
        "name": "compensation.amount",
        "optionKey": "compensation.amount",
        "paramKey": "compensation",
        "location": "body",
        "required": false,
        "description": "a positive number",
        "valueKind": "number",
        "objectPath": [
          "amount"
        ]
      },
      {
        "name": "compensation.per",
        "optionKey": "compensation.per",
        "paramKey": "compensation",
        "location": "body",
        "required": false,
        "description": "Whether the amount is per hour or per year.",
        "valueKind": "string",
        "objectPath": [
          "per"
        ]
      },
      {
        "name": "pay-schedule",
        "optionKey": "paySchedule",
        "paramKey": "paySchedule",
        "location": "body",
        "required": false,
        "description": "The employee's pay schedule. Must be a pay schedule that the company has configured.",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "workers"
    ],
    "commandPath": [
      "workers",
      "create-contractor"
    ],
    "methodName": "createContractor",
    "summary": "Create contractor",
    "description": "Create a new contractor. The worker will be created in draft status and must be invited separately via the invite endpoint. For business contractors, the businessName field is required.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "entity-type",
        "optionKey": "entityType",
        "paramKey": "entityType",
        "location": "body",
        "required": true,
        "description": "Whether the contractor is an individual person or a business entity.",
        "valueKind": "string"
      },
      {
        "name": "first-name",
        "optionKey": "firstName",
        "paramKey": "firstName",
        "location": "body",
        "required": true,
        "description": "a non empty string",
        "valueKind": "string"
      },
      {
        "name": "last-name",
        "optionKey": "lastName",
        "paramKey": "lastName",
        "location": "body",
        "required": true,
        "description": "a non empty string",
        "valueKind": "string"
      },
      {
        "name": "position",
        "optionKey": "position",
        "paramKey": "position",
        "location": "body",
        "required": true,
        "description": "The contractor's role or job title.",
        "valueKind": "string"
      },
      {
        "name": "business-name",
        "optionKey": "businessName",
        "paramKey": "businessName",
        "location": "body",
        "required": false,
        "description": "Required when entityType is \"business\". The legal name of the contractor's business.",
        "valueKind": "string"
      },
      {
        "name": "scope-of-work",
        "optionKey": "scopeOfWork",
        "paramKey": "scopeOfWork",
        "location": "body",
        "required": false,
        "description": "A description of the work the contractor will perform.",
        "valueKind": "string"
      },
      {
        "name": "start-date",
        "optionKey": "startDate",
        "paramKey": "startDate",
        "location": "body",
        "required": true,
        "description": "A date string in the form YYYY-MM-DD",
        "valueKind": "string"
      },
      {
        "name": "email",
        "optionKey": "email",
        "paramKey": "email",
        "location": "body",
        "required": true,
        "description": "Personal email address. The invite will be sent here.",
        "valueKind": "string"
      },
      {
        "name": "work-email",
        "optionKey": "workEmail",
        "paramKey": "workEmail",
        "location": "body",
        "required": false,
        "description": "Company-issued email address, if applicable.",
        "valueKind": "string"
      },
      {
        "name": "department-id",
        "optionKey": "departmentId",
        "paramKey": "departmentId",
        "location": "body",
        "required": true,
        "description": "The department to assign this contractor to.",
        "valueKind": "string"
      },
      {
        "name": "manager-id",
        "optionKey": "managerId",
        "paramKey": "managerId",
        "location": "body",
        "required": true,
        "description": "The worker id of this contractor's direct manager.",
        "valueKind": "string"
      },
      {
        "name": "work-country",
        "optionKey": "workCountry",
        "paramKey": "workCountry",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "compensation",
        "optionKey": "compensation",
        "paramKey": "compensation",
        "location": "body",
        "required": false,
        "description": "The contractor's pay rate. Omit if you'd like to pay on-demand or via invoicing.",
        "valueKind": "object"
      },
      {
        "name": "compensation.currency",
        "optionKey": "compensation.currency",
        "paramKey": "compensation",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "currency"
        ]
      },
      {
        "name": "compensation.amount",
        "optionKey": "compensation.amount",
        "paramKey": "compensation",
        "location": "body",
        "required": false,
        "description": "a positive number",
        "valueKind": "number",
        "objectPath": [
          "amount"
        ]
      },
      {
        "name": "compensation.per",
        "optionKey": "compensation.per",
        "paramKey": "compensation",
        "location": "body",
        "required": false,
        "description": "The pay period for the compensation amount.",
        "valueKind": "string",
        "objectPath": [
          "per"
        ]
      },
      {
        "name": "pay-schedule",
        "optionKey": "paySchedule",
        "paramKey": "paySchedule",
        "location": "body",
        "required": false,
        "description": "The contractor's pay schedule. Must be a pay schedule that the company has configured.",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "workers"
    ],
    "commandPath": [
      "workers",
      "invite"
    ],
    "methodName": "invite",
    "summary": "Invite worker",
    "description": "Send or resend the worker invite so they can accept and complete onboarding to Warp. If the worker has already been invited, the invite will be resent with extended validity.",
    "transport": "http",
    "iterable": false,
    "callShape": "options",
    "positional": [
      {
        "name": "id",
        "optionKey": "id",
        "paramKey": "id",
        "location": "path",
        "required": true,
        "description": "The id of the worker.",
        "valueKind": "string"
      }
    ],
    "flags": []
  },
  {
    "resourcePath": [
      "departments"
    ],
    "commandPath": [
      "departments",
      "list"
    ],
    "methodName": "list",
    "summary": "List departments",
    "description": "List all departments for your company.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "description": "The unique public id of the department",
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "description": "The unique public id of the department",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "departments"
    ],
    "commandPath": [
      "departments",
      "create"
    ],
    "methodName": "create",
    "summary": "Create department",
    "description": "Create a new department.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": true,
        "description": "a non empty string",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "departments"
    ],
    "commandPath": [
      "departments",
      "update"
    ],
    "methodName": "update",
    "summary": "Update department",
    "description": "Update an existing department.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "id",
        "optionKey": "id",
        "paramKey": "id",
        "location": "path",
        "required": true,
        "description": "The unique public id of the department",
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "workplaces"
    ],
    "commandPath": [
      "workplaces",
      "list"
    ],
    "methodName": "list",
    "summary": "List workplaces",
    "description": "List all workplaces for your company.",
    "transport": "http",
    "iterable": false,
    "callShape": "params",
    "positional": [],
    "flags": [
      {
        "name": "limit",
        "optionKey": "limit",
        "paramKey": "limit",
        "location": "query",
        "required": false,
        "description": "a number less than or equal to 100",
        "valueKind": "string"
      },
      {
        "name": "after-id",
        "optionKey": "afterId",
        "paramKey": "afterId",
        "location": "query",
        "required": false,
        "description": "Public workplace identifier",
        "valueKind": "string"
      },
      {
        "name": "before-id",
        "optionKey": "beforeId",
        "paramKey": "beforeId",
        "location": "query",
        "required": false,
        "description": "Public workplace identifier",
        "valueKind": "string"
      }
    ]
  },
  {
    "resourcePath": [
      "workplaces"
    ],
    "commandPath": [
      "workplaces",
      "create"
    ],
    "methodName": "create",
    "summary": "Create workplace",
    "description": "Create a new workplace.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": true,
        "description": "a non empty string",
        "valueKind": "string"
      },
      {
        "name": "type",
        "optionKey": "type",
        "paramKey": "type",
        "location": "body",
        "required": true,
        "valueKind": "string"
      },
      {
        "name": "address",
        "optionKey": "address",
        "paramKey": "address",
        "location": "body",
        "required": true,
        "description": "A valid US address",
        "valueKind": "object"
      },
      {
        "name": "address.line1",
        "optionKey": "address.line1",
        "paramKey": "address",
        "location": "body",
        "required": false,
        "description": "a non empty string",
        "valueKind": "string",
        "objectPath": [
          "line1"
        ]
      },
      {
        "name": "address.line2",
        "optionKey": "address.line2",
        "paramKey": "address",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "line2"
        ]
      },
      {
        "name": "address.city",
        "optionKey": "address.city",
        "paramKey": "address",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "city"
        ]
      },
      {
        "name": "address.postal-code",
        "optionKey": "address.postalCode",
        "paramKey": "address",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "postalCode"
        ]
      },
      {
        "name": "address.state",
        "optionKey": "address.state",
        "paramKey": "address",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "state"
        ]
      },
      {
        "name": "address.country",
        "optionKey": "address.country",
        "paramKey": "address",
        "location": "body",
        "required": false,
        "valueKind": "string",
        "objectPath": [
          "country"
        ]
      }
    ]
  },
  {
    "resourcePath": [
      "workplaces"
    ],
    "commandPath": [
      "workplaces",
      "update"
    ],
    "methodName": "update",
    "summary": "Update workplace",
    "description": "Update an existing workplace.",
    "transport": "http",
    "iterable": false,
    "callShape": "body",
    "positional": [
      {
        "name": "id",
        "optionKey": "id",
        "paramKey": "id",
        "location": "path",
        "required": true,
        "description": "Public workplace identifier",
        "valueKind": "string"
      }
    ],
    "flags": [
      {
        "name": "name",
        "optionKey": "name",
        "paramKey": "name",
        "location": "body",
        "required": false,
        "valueKind": "string"
      }
    ]
  }
] as const satisfies readonly CliCommandDefinition[]

export const getProgram = (): Command =>
  createProgram({
    SDK,
    binaryName: "warp",
    version: "0.2.0", // x-release-please-version
    description: "CLI for Warp",
    defaultFormat: "auto",
    defaultErrorFormat: "auto",
    clientOptions,
    commands,
  })
