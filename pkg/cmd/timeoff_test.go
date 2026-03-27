// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"testing"

	"github.com/TeamWarp/warp-cli/internal/mocktest"
)

func TestTimeOffListAssignments(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"time-off", "list-assignments",
			"--max-items", "10",
			"--after-id", "afterId",
			"--before-id", "beforeId",
			"--limit", "limit",
			"--policy-id", "top_1234",
			"--worker-id", "wrk_1234",
		)
	})
}

func TestTimeOffListBalances(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"time-off", "list-balances",
			"--max-items", "10",
			"--after-id", "afterId",
			"--before-id", "beforeId",
			"--end-date", "endDate",
			"--limit", "limit",
			"--policy-id", "top_1234",
			"--start-date", "startDate",
			"--worker-id", "wrk_1234",
		)
	})
}

func TestTimeOffListRequests(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"time-off", "list-requests",
			"--max-items", "10",
			"--after-id", "afterId",
			"--before-id", "beforeId",
			"--ends-before", "endsBefore",
			"--ends-on-or-after", "endsOnOrAfter",
			"--limit", "limit",
			"--policy-id", "top_1234",
			"--starts-before", "startsBefore",
			"--starts-on-or-after", "startsOnOrAfter",
			"--status", "pending",
			"--worker-id", "wrk_1234",
		)
	})
}
