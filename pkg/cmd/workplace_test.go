// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"testing"

	"github.com/stainless-sdks/warp-hr-cli/internal/mocktest"
	"github.com/stainless-sdks/warp-hr-cli/internal/requestflag"
)

func TestWorkplacesCreate(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workplaces", "create",
			"--address", "{city: city, country: US, line1: x, postalCode: postalCode, state: AL, line2: line2}",
			"--name", "name",
			"--type", "remote",
		)
	})

	t.Run("inner flags", func(t *testing.T) {
		// Check that inner flags have been set up correctly
		requestflag.CheckInnerFlags(workplacesCreate)

		// Alternative argument passing style using inner flags
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workplaces", "create",
			"--address.city", "city",
			"--address.country", "US",
			"--address.line1", "x",
			"--address.postal-code", "postalCode",
			"--address.state", "AL",
			"--address.line2", "line2",
			"--name", "name",
			"--type", "remote",
		)
	})

	t.Run("piping data", func(t *testing.T) {
		// Test piping YAML data over stdin
		pipeData := []byte("" +
			"address:\n" +
			"  city: city\n" +
			"  country: US\n" +
			"  line1: x\n" +
			"  postalCode: postalCode\n" +
			"  state: AL\n" +
			"  line2: line2\n" +
			"name: name\n" +
			"type: remote\n")
		mocktest.TestRunMockTestWithPipeAndFlags(
			t, pipeData,
			"--api-key", "string",
			"workplaces", "create",
		)
	})
}

func TestWorkplacesUpdate(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workplaces", "update",
			"--id", "wkp_1234",
			"--name", "name",
		)
	})

	t.Run("piping data", func(t *testing.T) {
		// Test piping YAML data over stdin
		pipeData := []byte("name: name")
		mocktest.TestRunMockTestWithPipeAndFlags(
			t, pipeData,
			"--api-key", "string",
			"workplaces", "update",
			"--id", "wkp_1234",
		)
	})
}

func TestWorkplacesList(t *testing.T) {
	t.Skip("Mock server tests are disabled")
	t.Run("regular flags", func(t *testing.T) {
		mocktest.TestRunMockTestWithFlags(
			t,
			"--api-key", "string",
			"workplaces", "list",
			"--max-items", "10",
			"--after-id", "wkp_1234",
			"--before-id", "wkp_1234",
			"--limit", "limit",
		)
	})
}
