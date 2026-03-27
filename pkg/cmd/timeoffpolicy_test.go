// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"testing"

	"github.com/TeamWarp/warp-cli/internal/mocktest"
)

func TestTimeOffPoliciesRetrieve(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"time-off:policies", "retrieve",
			"--id", "top_1234",
		)
	})
}

func TestTimeOffPoliciesList(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"time-off:policies", "list",
			"--max-items", "10",
			"--after-id", "top_1234",
			"--before-id", "top_1234",
			"--limit", "limit",
		)
	})
}
