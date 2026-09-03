// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: invokes the generated CLI once per operation to confirm each command can reach
// its endpoint. Build the CLI first (so dist/esm/bin.js exists), then run this from the repo
// with `bun tests/smoke-test.ts`. Each case below holds the argv for one command, minus the
// base URL and credentials — the embedded SDK reads those from the environment, so set
// <PREFIX>_BASE_URL and the auth variables before running.
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { execFile } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the flags the command
// requires, the second also passes every optional flag. `label` says which is which, and is
// absent when the command has no optional flag and so has only one case. `args` is the argv
// passed to the built CLI; the other fields are metadata used for filtering and reporting. This
// list is generated, so it stays in sync with the CLI command surface.
const cases: { operation: string; method: string; path: string; label?: string; args: string[] }[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/health_plans',
    label: 'required params',
    args: ['benefits:health-plans', 'list', '--limit', 'limit', '--statuses', '["active"]'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/health_plans',
    label: 'all params',
    args: [
      'benefits:health-plans',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'chpl_1234',
      '--before-id',
      'chpl_1234',
      '--types',
      '["medical"]',
      '--statuses',
      '["active"]',
      '--carrier-ids',
      '["carrierId"]',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/health_plans/{id}',
    args: ['benefits:health-plans', 'get', 'chpl_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/retirement_plans',
    label: 'required params',
    args: ['benefits:retirement-plans', 'list', '--limit', 'limit', '--statuses', '["active"]'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/retirement_plans',
    label: 'all params',
    args: [
      'benefits:retirement-plans',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'crpl_1234',
      '--before-id',
      'crpl_1234',
      '--types',
      '["401k"]',
      '--statuses',
      '["active"]',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/retirement_plans/{id}',
    args: ['benefits:retirement-plans', 'get', 'crpl_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/deductions',
    label: 'required params',
    args: ['benefits:deductions', 'list', '--limit', 'limit', '--statuses', '["active"]'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/deductions',
    label: 'all params',
    args: [
      'benefits:deductions',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'pbdg_1234',
      '--before-id',
      'pbdg_1234',
      '--worker-ids',
      '["workerId"]',
      '--categories',
      '["health"]',
      '--types',
      '["medical"]',
      '--statuses',
      '["active"]',
      '--health-plan-ids',
      '["healthPlanId"]',
      '--retirement-plan-ids',
      '["retirementPlanId"]',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/benefits/deductions/{id}',
    args: ['benefits:deductions', 'get', 'pbdg_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/custom_fields',
    args: ['custom-fields', 'list'],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/custom_fields',
    label: 'required params',
    args: ['custom-fields', 'create', '--name', 'name', '--type', 'text', '--category', 'info'],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/custom_fields',
    label: 'all params',
    args: [
      'custom-fields',
      'create',
      '--name',
      'name',
      '--description',
      'description',
      '--type',
      'text',
      '--config',
      '{}',
      '--category',
      'info',
      '--access-level',
      'admins',
      '--input-by',
      'admin',
      '--required',
      '--options',
      '[{"label":"x","value":"x"}]',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/custom_fields/{id}',
    args: ['custom-fields', 'get', 'cf_1234'],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/custom_fields/{id}',
    label: 'required params',
    args: ['custom-fields', 'update', 'cf_1234'],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/custom_fields/{id}',
    label: 'all params',
    args: [
      'custom-fields',
      'update',
      'cf_1234',
      '--name',
      'name',
      '--description',
      'description',
      '--config',
      '{}',
      '--category',
      'info',
      '--access-level',
      'admins',
      '--input-by',
      'admin',
      '--required',
    ],
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/custom_fields/{id}/archive',
    args: ['custom-fields', 'archive', 'cf_1234'],
  },

  {
    operation: 'createOption',
    method: 'POST',
    path: '/v1/custom_fields/{id}/options',
    label: 'required params',
    args: ['custom-fields', 'create-option', 'cf_1234', '--label', 'label', '--value', 'value'],
  },

  {
    operation: 'createOption',
    method: 'POST',
    path: '/v1/custom_fields/{id}/options',
    label: 'all params',
    args: [
      'custom-fields',
      'create-option',
      'cf_1234',
      '--label',
      'label',
      '--value',
      'value',
      '--sort-order',
      '1',
    ],
  },

  {
    operation: 'updateOption',
    method: 'PATCH',
    path: '/v1/custom_field_options/{id}',
    label: 'required params',
    args: ['custom-fields', 'update-option', 'cfo_1234'],
  },

  {
    operation: 'updateOption',
    method: 'PATCH',
    path: '/v1/custom_field_options/{id}',
    label: 'all params',
    args: ['custom-fields', 'update-option', 'cfo_1234', '--label', 'label', '--sort-order', '1'],
  },

  {
    operation: 'deleteOption',
    method: 'DELETE',
    path: '/v1/custom_field_options/{id}',
    args: ['custom-fields', 'delete-option', 'cfo_1234'],
  },

  {
    operation: 'archiveOption',
    method: 'POST',
    path: '/v1/custom_field_options/{id}/archive',
    args: ['custom-fields', 'archive-option', 'cfo_1234'],
  },

  {
    operation: 'listValues',
    method: 'GET',
    path: '/v1/custom_field_values',
    label: 'required params',
    args: ['custom-fields', 'list-values'],
  },

  {
    operation: 'listValues',
    method: 'GET',
    path: '/v1/custom_field_values',
    label: 'all params',
    args: ['custom-fields', 'list-values', '--worker-ids', '["workerId"]', '--field-ids', '["fieldId"]'],
  },

  {
    operation: 'upsertValue',
    method: 'PUT',
    path: '/v1/custom_field_values',
    args: [
      'custom-fields',
      'upsert-value',
      '--worker-id',
      'wrk_1234',
      '--field-id',
      'cf_1234',
      '--value',
      '{"type":"text","value":""}',
    ],
  },

  {
    operation: 'clearValue',
    method: 'DELETE',
    path: '/v1/custom_field_values',
    args: ['custom-fields', 'clear-value', '--worker-id', 'wrk_1234', '--field-id', 'cf_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/departments',
    label: 'required params',
    args: ['departments', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/departments',
    label: 'all params',
    args: ['departments', 'list', '--limit', 'limit', '--after-id', 'dpt_1234', '--before-id', 'dpt_1234'],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/departments',
    args: ['departments', 'create', '--name', 'name'],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/departments/{id}',
    label: 'required params',
    args: ['departments', 'update', 'dpt_1234'],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/departments/{id}',
    label: 'all params',
    args: ['departments', 'update', 'dpt_1234', '--name', 'name'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/levels',
    args: ['levels', 'list'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/offers',
    label: 'required params',
    args: ['offers', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/offers',
    label: 'all params',
    args: [
      'offers',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'offr_1234',
      '--before-id',
      'offr_1234',
      '--statuses',
      '["draft"]',
      '--worker-types',
      '["employee"]',
      '--candidate-email',
      'john@joinwarp.com',
    ],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/offers',
    label: 'required params',
    args: [
      'offers',
      'create',
      '--candidate',
      '{"firstName":"x","lastName":"x","email":"john@joinwarp.com"}',
      '--position',
      '{"title":"x","startDate":""}',
      '--worker-type',
      'employee',
      '--compensation',
      '{"payBasis":"year","payCurrency":"USD","payRate":0}',
    ],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/offers',
    label: 'all params',
    args: [
      'offers',
      'create',
      '--candidate',
      '{"firstName":"x","lastName":"x","email":"john@joinwarp.com","contractorDetails":{"isBusiness":false,"legalBusinessName":""}}',
      '--position',
      '{"title":"x","startDate":"","country":"AD","scopeOfWork":""}',
      '--department-id',
      'dpt_1234',
      '--workplace-id',
      'wkp_1234',
      '--manager-id',
      'wrk_1234',
      '--level-id',
      'jlvl_1234',
      '--worker-type',
      'employee',
      '--compensation',
      '{"payBasis":"year","payCurrency":"USD","payRate":0,"payType":"fixed","payVariableRate":0,"signOnBonus":0,"relocationBonus":0,"stockOptions":0,"vestingScheduleMonths":0,"cliffMonths":0}',
      '--expiration-time',
      'expirationTime',
      '--background-check-work-location',
      '{"country":"","state":"","city":""}',
    ],
  },

  {
    operation: 'void',
    method: 'POST',
    path: '/v1/offers/{id}/void',
    label: 'required params',
    args: ['offers', 'void', 'offr_1234', '--void-reason', 'candidate_declined'],
  },

  {
    operation: 'void',
    method: 'POST',
    path: '/v1/offers/{id}/void',
    label: 'all params',
    args: ['offers', 'void', 'offr_1234', '--void-reason', 'candidate_declined', '--void-notes', 'voidNotes'],
  },

  {
    operation: 'extendDeadline',
    method: 'POST',
    path: '/v1/offers/{id}/extend-deadline',
    args: ['offers', 'extend-deadline', 'offr_1234', '--expiration-time', 'expirationTime'],
  },

  {
    operation: 'resend',
    method: 'POST',
    path: '/v1/offers/{id}/resend',
    args: ['offers', 'resend', 'offr_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pay_rates',
    label: 'required params',
    args: ['pay-rates', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/pay_rates',
    label: 'all params',
    args: [
      'pay-rates',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'pyr_1234',
      '--before-id',
      'pyr_1234',
      '--worker-id',
      'wrk_1234',
      '--effective-on-or-after',
      'effectiveOnOrAfter',
      '--effective-before',
      'effectiveBefore',
      '--type',
      'regular',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/pay_rates/{id}',
    args: ['pay-rates', 'get', 'pyr_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/payrolls',
    label: 'required params',
    args: ['payroll', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/payrolls',
    label: 'all params',
    args: [
      'payroll',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'pay_1234',
      '--before-id',
      'pay_1234',
      '--types',
      '["us"]',
      '--subtypes',
      '["regular"]',
      '--statuses',
      '["draft"]',
      '--pay-frequencies',
      '["weekly"]',
      '--payday-on-or-after',
      'paydayOnOrAfter',
      '--payday-before',
      'paydayBefore',
      '--pay-period-end-on-or-after',
      'payPeriodEndOnOrAfter',
      '--pay-period-end-before',
      'payPeriodEndBefore',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/payrolls/{id}',
    args: ['payroll', 'get', 'pay_1234'],
  },

  {
    operation: 'listPaychecks',
    method: 'GET',
    path: '/v1/paychecks',
    label: 'required params',
    args: ['payroll', 'list-paychecks', '--limit', 'limit'],
  },

  {
    operation: 'listPaychecks',
    method: 'GET',
    path: '/v1/paychecks',
    label: 'all params',
    args: [
      'payroll',
      'list-paychecks',
      '--limit',
      'limit',
      '--after-id',
      'pyc_1234',
      '--before-id',
      'pyc_1234',
      '--payroll-ids',
      '["payrollId"]',
      '--worker-ids',
      '["workerId"]',
      '--worker-types',
      '["us_w2"]',
      '--payroll-types',
      '["us"]',
      '--statuses',
      '["draft"]',
      '--payment-methods',
      '["direct_deposit"]',
      '--compensation-currencies',
      '["USD"]',
      '--pay-frequencies',
      '["weekly"]',
      '--payday-on-or-after',
      'paydayOnOrAfter',
      '--payday-before',
      'paydayBefore',
    ],
  },

  {
    operation: 'getPaycheck',
    method: 'GET',
    path: '/v1/paychecks/{id}',
    args: ['payroll', 'get-paycheck', 'pyc_1234'],
  },

  {
    operation: 'listAssignments',
    method: 'GET',
    path: '/v1/time_off/assignments',
    label: 'required params',
    args: ['time-off', 'list-assignments', '--limit', 'limit'],
  },

  {
    operation: 'listAssignments',
    method: 'GET',
    path: '/v1/time_off/assignments',
    label: 'all params',
    args: [
      'time-off',
      'list-assignments',
      '--limit',
      'limit',
      '--after-id',
      'wrkasn_1234',
      '--before-id',
      'wrkasn_1234',
      '--policy-ids',
      '["policyId"]',
      '--worker-ids',
      '["workerId"]',
    ],
  },

  {
    operation: 'listBalances',
    method: 'GET',
    path: '/v1/time_off/balances',
    label: 'required params',
    args: ['time-off', 'list-balances', '--limit', 'limit'],
  },

  {
    operation: 'listBalances',
    method: 'GET',
    path: '/v1/time_off/balances',
    label: 'all params',
    args: [
      'time-off',
      'list-balances',
      '--limit',
      'limit',
      '--after-id',
      'wrkasn_1234',
      '--before-id',
      'wrkasn_1234',
      '--policy-ids',
      '["policyId"]',
      '--worker-ids',
      '["workerId"]',
      '--start-date',
      'startDate',
      '--end-date',
      'endDate',
    ],
  },

  {
    operation: 'listRequests',
    method: 'GET',
    path: '/v1/time_off/requests',
    label: 'required params',
    args: ['time-off', 'list-requests', '--limit', 'limit'],
  },

  {
    operation: 'listRequests',
    method: 'GET',
    path: '/v1/time_off/requests',
    label: 'all params',
    args: [
      'time-off',
      'list-requests',
      '--limit',
      'limit',
      '--after-id',
      'afterId',
      '--before-id',
      'beforeId',
      '--statuses',
      '["pending"]',
      '--policy-ids',
      '["policyId"]',
      '--worker-ids',
      '["workerId"]',
      '--starts-on-or-after',
      'startsOnOrAfter',
      '--starts-before',
      'startsBefore',
      '--ends-on-or-after',
      'endsOnOrAfter',
      '--ends-before',
      'endsBefore',
    ],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/time_off/policies',
    label: 'required params',
    args: ['time-off:policies', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/time_off/policies',
    label: 'all params',
    args: [
      'time-off:policies',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'top_1234',
      '--before-id',
      'top_1234',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/time_off/policies/{id}',
    args: ['time-off:policies', 'get', 'top_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workers',
    label: 'required params',
    args: ['workers', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workers',
    label: 'all params',
    args: [
      'workers',
      'list',
      '--limit',
      'limit',
      '--after-id',
      'wrk_1234',
      '--before-id',
      'wrk_1234',
      '--statuses',
      '["draft"]',
      '--types',
      '["employee"]',
      '--work-email',
      'workEmail',
    ],
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/workers/{id}',
    args: ['workers', 'get', 'wrk_1234'],
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/workers/{id}',
    args: ['workers', 'delete', 'wrk_1234'],
  },

  {
    operation: 'createEmployee',
    method: 'POST',
    path: '/v1/workers/employee',
    label: 'required params',
    args: [
      'workers',
      'create-employee',
      '--first-name',
      'Jonathan',
      '--last-name',
      'Galt',
      '--position',
      'Software Engineer',
      '--start-date',
      'startDate',
      '--email',
      'john@joinwarp.com',
      '--department-id',
      'dpt_1234',
      '--manager-id',
      'wrk_1234',
      '--work-location',
      '{"type":"office","workplaceId":"wkp_1234"}',
      '--compensation',
      '{"amount":0,"per":"hour"}',
    ],
  },

  {
    operation: 'createEmployee',
    method: 'POST',
    path: '/v1/workers/employee',
    label: 'all params',
    args: [
      'workers',
      'create-employee',
      '--first-name',
      'Jonathan',
      '--last-name',
      'Galt',
      '--position',
      'Software Engineer',
      '--start-date',
      'startDate',
      '--email',
      'john@joinwarp.com',
      '--work-email',
      'john@joinwarp.com',
      '--require-i9',
      '--state-registration',
      'self_managed',
      '--department-id',
      'dpt_1234',
      '--level-id',
      'jlvl_1234',
      '--manager-id',
      'wrk_1234',
      '--stock-options',
      '1',
      '--work-location',
      '{"type":"office","workplaceId":"wkp_1234"}',
      '--compensation',
      '{"amount":0,"per":"hour"}',
      '--pay-schedule',
      'weekly',
    ],
  },

  {
    operation: 'createContractor',
    method: 'POST',
    path: '/v1/workers/contractor',
    label: 'required params',
    args: [
      'workers',
      'create-contractor',
      '--entity-type',
      'individual',
      '--first-name',
      'Melissa',
      '--last-name',
      'Jones',
      '--position',
      'Design Consultant',
      '--start-date',
      'startDate',
      '--email',
      'john@joinwarp.com',
      '--department-id',
      'dpt_1234',
      '--manager-id',
      'wrk_1234',
      '--work-country',
      'AD',
    ],
  },

  {
    operation: 'createContractor',
    method: 'POST',
    path: '/v1/workers/contractor',
    label: 'all params',
    args: [
      'workers',
      'create-contractor',
      '--entity-type',
      'individual',
      '--first-name',
      'Melissa',
      '--last-name',
      'Jones',
      '--position',
      'Design Consultant',
      '--business-name',
      'Galt Enterprises, LLC',
      '--scope-of-work',
      'scopeOfWork',
      '--start-date',
      'startDate',
      '--email',
      'john@joinwarp.com',
      '--work-email',
      'john@joinwarp.com',
      '--department-id',
      'dpt_1234',
      '--level-id',
      'jlvl_1234',
      '--manager-id',
      'wrk_1234',
      '--work-country',
      'AD',
      '--compensation',
      '{"currency":"USD","amount":0,"per":"year"}',
      '--pay-schedule',
      'weekly',
    ],
  },

  {
    operation: 'invite',
    method: 'POST',
    path: '/v1/workers/{id}/invite',
    args: ['workers', 'invite', 'wrk_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workplaces',
    label: 'required params',
    args: ['workplaces', 'list', '--limit', 'limit'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workplaces',
    label: 'all params',
    args: ['workplaces', 'list', '--limit', 'limit', '--after-id', 'wkp_1234', '--before-id', 'wkp_1234'],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/workplaces',
    label: 'required params',
    args: [
      'workplaces',
      'create',
      '--name',
      'name',
      '--type',
      'remote',
      '--address',
      '{"line1":"x","city":"","postalCode":"","state":"AL","country":"US"}',
    ],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/workplaces',
    label: 'all params',
    args: [
      'workplaces',
      'create',
      '--name',
      'name',
      '--type',
      'remote',
      '--address',
      '{"line1":"x","line2":"","city":"","postalCode":"","state":"AL","country":"US"}',
    ],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/workplaces/{id}',
    label: 'required params',
    args: ['workplaces', 'update', 'wkp_1234'],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/workplaces/{id}',
    label: 'all params',
    args: ['workplaces', 'update', 'wkp_1234', '--name', 'name'],
  },
];

// Each command gets its own budget so one hanging command fails on its own instead of stalling
// the whole run; the generator additionally bounds the overall run.
const COMMAND_TIMEOUT_MS = 60_000;

// Locate the built executable from the nearest package.json `bin` entry. Walking up from this
// file (rather than assuming a fixed relative path) keeps it correct whether this harness runs
// from the repo's `tests/` directory or is staged flat into a runner by the smoke tester.
const resolveBinPath = (): string => {
  let dir = dirname(fileURLToPath(import.meta.url));
  for (let depth = 0; depth < 6; depth += 1) {
    const manifestPath = join(dir, 'package.json');
    if (existsSync(manifestPath)) {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
        bin?: string | Record<string, string>;
      };
      const bin = typeof manifest.bin === 'string' ? manifest.bin : Object.values(manifest.bin ?? {})[0];
      if (bin) return join(dir, bin);
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(
    'Could not locate the built CLI binary (run the package build first so dist/esm/bin.js exists).',
  );
};

const main = async (): Promise<void> => {
  const binPath = resolveBinPath();

  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected command concurrently. Promise.allSettled means one failing command never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      // `label` distinguishes the required-flags run from the all-flags run of the same command;
      // it is omitted entirely when the command contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        // Pass the current environment through so the embedded SDK picks up the base URL and
        // credentials; node runs the built bin exactly as the published executable would.
        await execFileAsync('node', [binPath, ...testCase.args], {
          env: process.env,
          timeout: COMMAND_TIMEOUT_MS,
          maxBuffer: 1024 * 1024 * 20,
        });
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Surface stderr (commander/runtime error output) when present; fall back to the message.
        const detail =
          error && typeof error === 'object' && 'stderr' in error
            ? String((error as { stderr?: unknown }).stderr ?? '')
            : '';
        const message =
          detail.trim() || (error instanceof Error ? (error.stack ?? error.message) : String(error));
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No commands ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} commands passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
