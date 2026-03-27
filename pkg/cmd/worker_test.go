// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"testing"

	"github.com/stainless-sdks/warp-hr-cli/internal/mocktest"
	"github.com/stainless-sdks/warp-hr-cli/internal/requestflag"
)

func TestWorkersRetrieve(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "retrieve",
			"--id", "wrk_1234",
		)
	})
}

func TestWorkersList(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "list",
			"--max-items", "10",
			"--after-id", "wrk_1234",
			"--before-id", "wrk_1234",
			"--limit", "limit",
			"--status", "draft",
			"--type", "employee",
			"--work-email", "workEmail",
		)
	})
}

func TestWorkersDelete(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "delete",
			"--id", "wrk_1234",
		)
	})
}

func TestWorkersCreateContractor(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "create-contractor",
			"--department-id", "dpt_1234",
			"--email", "john@joinwarp.com",
			"--entity-type", "individual",
			"--first-name", "Melissa",
			"--last-name", "Jones",
			"--manager-id", "wrk_1234",
			"--position", "Design Consultant",
			"--start-date", "2000-01-01",
			"--work-country", "AD",
			"--business-name", "Galt Enterprises, LLC",
			"--compensation", "{amount: 1, currency: USD, per: hour}",
			"--pay-schedule", "weekly",
			"--scope-of-work", "Frontend development for the customer dashboard",
			"--work-email", "john@joinwarp.com",
		)
	})

	t.Run("inner flags", func(t *testing.T) {
		// Check that inner flags have been set up correctly
		requestflag.CheckInnerFlags(workersCreateContractor)

		// Alternative argument passing style using inner flags
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "create-contractor",
			"--department-id", "dpt_1234",
			"--email", "john@joinwarp.com",
			"--entity-type", "individual",
			"--first-name", "Melissa",
			"--last-name", "Jones",
			"--manager-id", "wrk_1234",
			"--position", "Design Consultant",
			"--start-date", "2000-01-01",
			"--work-country", "AD",
			"--business-name", "Galt Enterprises, LLC",
			"--compensation.amount", "1",
			"--compensation.currency", "USD",
			"--compensation.per", "hour",
			"--pay-schedule", "weekly",
			"--scope-of-work", "Frontend development for the customer dashboard",
			"--work-email", "john@joinwarp.com",
		)
	})

	t.Run("piping data", func(t *testing.T) {
		// Test piping YAML data over stdin
		pipeData := []byte("" +
			"departmentId: dpt_1234\n" +
			"email: john@joinwarp.com\n" +
			"entityType: individual\n" +
			"firstName: Melissa\n" +
			"lastName: Jones\n" +
			"managerId: wrk_1234\n" +
			"position: Design Consultant\n" +
			"startDate: '2000-01-01'\n" +
			"workCountry: AD\n" +
			"businessName: Galt Enterprises, LLC\n" +
			"compensation:\n" +
			"  amount: 1\n" +
			"  currency: USD\n" +
			"  per: hour\n" +
			"paySchedule: weekly\n" +
			"scopeOfWork: Frontend development for the customer dashboard\n" +
			"workEmail: john@joinwarp.com\n")
		mocktest.TestRunMockTestWithPipeAndFlags(
			t, pipeData,
			"--api-key", "string",
			"workers", "create-contractor",
		)
	})
}

func TestWorkersCreateEmployee(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "create-employee",
			"--compensation", "{amount: 1, per: hour}",
			"--department-id", "dpt_1234",
			"--email", "john@joinwarp.com",
			"--first-name", "Jonathan",
			"--last-name", "Galt",
			"--manager-id", "wrk_1234",
			"--position", "Software Engineer",
			"--start-date", "2000-01-01",
			"--work-location", "{type: office, workplaceId: wkp_1234}",
			"--pay-schedule", "weekly",
			"--require-i9=true",
			"--state-registration", "self_managed",
			"--stock-options", "10000",
			"--work-email", "john@joinwarp.com",
		)
	})

	t.Run("inner flags", func(t *testing.T) {
		// Check that inner flags have been set up correctly
		requestflag.CheckInnerFlags(workersCreateEmployee)

		// Alternative argument passing style using inner flags
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "create-employee",
			"--compensation.amount", "1",
			"--compensation.per", "hour",
			"--department-id", "dpt_1234",
			"--email", "john@joinwarp.com",
			"--first-name", "Jonathan",
			"--last-name", "Galt",
			"--manager-id", "wrk_1234",
			"--position", "Software Engineer",
			"--start-date", "2000-01-01",
			"--work-location", "{type: office, workplaceId: wkp_1234}",
			"--pay-schedule", "weekly",
			"--require-i9=true",
			"--state-registration", "self_managed",
			"--stock-options", "10000",
			"--work-email", "john@joinwarp.com",
		)
	})

	t.Run("piping data", func(t *testing.T) {
		// Test piping YAML data over stdin
		pipeData := []byte("" +
			"compensation:\n" +
			"  amount: 1\n" +
			"  per: hour\n" +
			"departmentId: dpt_1234\n" +
			"email: john@joinwarp.com\n" +
			"firstName: Jonathan\n" +
			"lastName: Galt\n" +
			"managerId: wrk_1234\n" +
			"position: Software Engineer\n" +
			"startDate: '2000-01-01'\n" +
			"workLocation:\n" +
			"  type: office\n" +
			"  workplaceId: wkp_1234\n" +
			"paySchedule: weekly\n" +
			"requireI9: true\n" +
			"stateRegistration: self_managed\n" +
			"stockOptions: 10000\n" +
			"workEmail: john@joinwarp.com\n")
		mocktest.TestRunMockTestWithPipeAndFlags(
			t, pipeData,
			"--api-key", "string",
			"workers", "create-employee",
		)
	})
}

func TestWorkersInvite(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workers", "invite",
			"--id", "wrk_1234",
		)
	})
}
