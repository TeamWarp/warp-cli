// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"context"
	"fmt"
	"os"

	"github.com/TeamWarp/warp-go-sdk"
	"github.com/TeamWarp/warp-go-sdk/option"
	"github.com/stainless-sdks/warp-hr-cli/internal/apiquery"
	"github.com/stainless-sdks/warp-hr-cli/internal/requestflag"
	"github.com/tidwall/gjson"
	"github.com/urfave/cli/v3"
)

var timeOffListAssignments = cli.Command{
	Name:    "list-assignments",
	Usage:   "Time off assignments are mappings between workers and time off policies. Useful\nfor finding out which policies a worker is assigned to, or which workers are\nassigned to a given policy.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			QueryPath: "beforeId",
		},
		&requestflag.Flag[string]{
			Name:      "limit",
			Usage:     "a number less than or equal to 100",
			QueryPath: "limit",
		},
		&requestflag.Flag[[]string]{
			Name:      "policy-id",
			QueryPath: "policyIds",
		},
		&requestflag.Flag[[]string]{
			Name:      "worker-id",
			QueryPath: "workerIds",
		},
		&requestflag.Flag[int64]{
			Name:  "max-items",
			Usage: "The maximum number of items to return (use -1 for unlimited).",
		},
	},
	Action:          handleTimeOffListAssignments,
	HideHelpCommand: true,
}

var timeOffListBalances = cli.Command{
	Name:    "list-balances",
	Usage:   "Get worker remaining time-off balances.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			QueryPath: "beforeId",
		},
		&requestflag.Flag[string]{
			Name:      "end-date",
			Usage:     "a string to be decoded into a Date",
			QueryPath: "endDate",
		},
		&requestflag.Flag[string]{
			Name:      "limit",
			Usage:     "a number less than or equal to 100",
			QueryPath: "limit",
		},
		&requestflag.Flag[[]string]{
			Name:      "policy-id",
			QueryPath: "policyIds",
		},
		&requestflag.Flag[string]{
			Name:      "start-date",
			Usage:     "a string to be decoded into a Date",
			QueryPath: "startDate",
		},
		&requestflag.Flag[[]string]{
			Name:      "worker-id",
			QueryPath: "workerIds",
		},
		&requestflag.Flag[int64]{
			Name:  "max-items",
			Usage: "The maximum number of items to return (use -1 for unlimited).",
		},
	},
	Action:          handleTimeOffListBalances,
	HideHelpCommand: true,
}

var timeOffListRequests = cli.Command{
	Name:    "list-requests",
	Usage:   "Get the time off requests that workers in your company have made.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			QueryPath: "beforeId",
		},
		&requestflag.Flag[string]{
			Name:      "ends-before",
			Usage:     "a string to be decoded into a Date",
			QueryPath: "endsBefore",
		},
		&requestflag.Flag[string]{
			Name:      "ends-on-or-after",
			Usage:     "a string to be decoded into a Date",
			QueryPath: "endsOnOrAfter",
		},
		&requestflag.Flag[string]{
			Name:      "limit",
			Usage:     "a number less than or equal to 100",
			QueryPath: "limit",
		},
		&requestflag.Flag[[]string]{
			Name:      "policy-id",
			QueryPath: "policyIds",
		},
		&requestflag.Flag[string]{
			Name:      "starts-before",
			Usage:     "a string to be decoded into a Date",
			QueryPath: "startsBefore",
		},
		&requestflag.Flag[string]{
			Name:      "starts-on-or-after",
			Usage:     "a string to be decoded into a Date",
			QueryPath: "startsOnOrAfter",
		},
		&requestflag.Flag[[]string]{
			Name:      "status",
			QueryPath: "statuses",
		},
		&requestflag.Flag[[]string]{
			Name:      "worker-id",
			QueryPath: "workerIds",
		},
		&requestflag.Flag[int64]{
			Name:  "max-items",
			Usage: "The maximum number of items to return (use -1 for unlimited).",
		},
	},
	Action:          handleTimeOffListRequests,
	HideHelpCommand: true,
}

func handleTimeOffListAssignments(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.TimeOffListAssignmentsParams{}

	options, err := flagOptions(
		cmd,
		apiquery.NestedQueryFormatBrackets,
		apiquery.ArrayQueryFormatRepeat,
		EmptyBody,
		false,
	)
	if err != nil {
		return err
	}

	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	if format == "raw" {
		var res []byte
		options = append(options, option.WithResponseBodyInto(&res))
		_, err = client.TimeOff.ListAssignments(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "time-off list-assignments", obj, format, transform)
	} else {
		iter := client.TimeOff.ListAssignmentsAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "time-off list-assignments", iter, format, transform, maxItems)
	}
}

func handleTimeOffListBalances(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.TimeOffListBalancesParams{}

	options, err := flagOptions(
		cmd,
		apiquery.NestedQueryFormatBrackets,
		apiquery.ArrayQueryFormatRepeat,
		EmptyBody,
		false,
	)
	if err != nil {
		return err
	}

	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	if format == "raw" {
		var res []byte
		options = append(options, option.WithResponseBodyInto(&res))
		_, err = client.TimeOff.ListBalances(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "time-off list-balances", obj, format, transform)
	} else {
		iter := client.TimeOff.ListBalancesAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "time-off list-balances", iter, format, transform, maxItems)
	}
}

func handleTimeOffListRequests(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.TimeOffListRequestsParams{}

	options, err := flagOptions(
		cmd,
		apiquery.NestedQueryFormatBrackets,
		apiquery.ArrayQueryFormatRepeat,
		EmptyBody,
		false,
	)
	if err != nil {
		return err
	}

	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	if format == "raw" {
		var res []byte
		options = append(options, option.WithResponseBodyInto(&res))
		_, err = client.TimeOff.ListRequests(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "time-off list-requests", obj, format, transform)
	} else {
		iter := client.TimeOff.ListRequestsAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "time-off list-requests", iter, format, transform, maxItems)
	}
}
