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
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One entry per generated operation. `args` is the argv passed to the built CLI; the other fields
// are metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the CLI command surface.
const cases: { operation: string; method: string; path: string; args: string[] }[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/v1/benefits/health_plans',
    args: ['benefits:health-plans', 'list', '--status', 'active'],
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
    args: ['benefits:retirement-plans', 'list', '--status', 'active'],
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
    args: ['benefits:deductions', 'list', '--status', 'active'],
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
    args: ['custom-fields', 'create', '--name', 'name', '--type', 'text', '--category', 'info'],
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/custom_fields/{id}',
    args: ['custom-fields', 'retrieve', 'cf_1234'],
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/custom_fields/{id}',
    args: ['custom-fields', 'update', 'cf_1234'],
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
    args: ['custom-fields', 'create-option', 'cf_1234', '--label', 'label', '--value', 'value'],
  },

  {
    operation: 'updateOption',
    method: 'PATCH',
    path: '/v1/custom_field_options/{id}',
    args: ['custom-fields', 'update-option', 'cfo_1234'],
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
    args: ['custom-fields', 'list-values'],
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
    args: ['departments', 'list'],
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
    args: ['departments', 'update', 'dpt_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/offers',
    args: ['offers', 'list'],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/offers',
    args: [
      'offers',
      'create',
      '--candidate',
      '{"firstName":"x","lastName":"x","email":"john@joinwarp.com"}',
      '--position',
      '{"title":"x","startDate":"2000-01-01"}',
      '--worker-type',
      'employee',
      '--compensation',
      '{"payBasis":"year","payCurrency":"USD","payRate":0}',
    ],
  },

  {
    operation: 'void',
    method: 'POST',
    path: '/v1/offers/{id}/void',
    args: ['offers', 'void', 'offr_1234'],
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
    operation: 'listAssignments',
    method: 'GET',
    path: '/v1/time_off/assignments',
    args: ['time-off', 'list-assignments'],
  },

  {
    operation: 'listBalances',
    method: 'GET',
    path: '/v1/time_off/balances',
    args: ['time-off', 'list-balances'],
  },

  {
    operation: 'listRequests',
    method: 'GET',
    path: '/v1/time_off/requests',
    args: ['time-off', 'list-requests'],
  },

  {
    operation: 'timeOffGet',
    method: 'GET',
    path: '/v1/time_off/policies',
    args: ['time-off:policies', 'time-off-get'],
  },

  {
    operation: 'timeOffGet2',
    method: 'GET',
    path: '/v1/time_off/policies/{id}',
    args: ['time-off:policies', 'time-off-get2', 'top_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workers',
    args: ['workers', 'list'],
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/v1/workers/{id}',
    args: ['workers', 'retrieve', 'wrk_1234'],
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
    args: [
      'workers',
      'create-employee',
      '--first-name',
      'firstName',
      '--last-name',
      'lastName',
      '--position',
      'position',
      '--start-date',
      '2000-01-01',
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
    operation: 'createContractor',
    method: 'POST',
    path: '/v1/workers/contractor',
    args: [
      'workers',
      'create-contractor',
      '--entity-type',
      'individual',
      '--first-name',
      'firstName',
      '--last-name',
      'lastName',
      '--position',
      'position',
      '--start-date',
      '2000-01-01',
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
    operation: 'invite',
    method: 'POST',
    path: '/v1/workers/{id}/invite',
    args: ['workers', 'invite', 'wrk_1234'],
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/workplaces',
    args: ['workplaces', 'list'],
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/workplaces',
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
    operation: 'update',
    method: 'PATCH',
    path: '/v1/workplaces/{id}',
    args: ['workplaces', 'update', 'wkp_1234'],
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
      try {
        // Pass the current environment through so the embedded SDK picks up the base URL and
        // credentials; node runs the built bin exactly as the published executable would.
        await execFileAsync('node', [binPath, ...testCase.args], {
          env: process.env,
          timeout: COMMAND_TIMEOUT_MS,
          maxBuffer: 1024 * 1024 * 20,
        });
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'passed',
          durationMs: Date.now() - startedAt,
        };
      } catch (error) {
        // Surface stderr (commander/runtime error output) when present; fall back to the message.
        const detail =
          error && typeof error === 'object' && 'stderr' in error
            ? String((error as { stderr?: unknown }).stderr ?? '')
            : '';
        const message =
          detail.trim() || (error instanceof Error ? (error.stack ?? error.message) : String(error));
        return {
          operation: testCase.operation,
          method: testCase.method,
          path: testCase.path,
          status: 'failed',
          durationMs: Date.now() - startedAt,
          error: message,
        };
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
      if (result.status === 'passed')
        console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`);
      else
        console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`);
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
