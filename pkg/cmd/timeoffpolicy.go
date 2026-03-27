// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"context"
	"fmt"
	"os"

	"github.com/TeamWarp/warp-cli/internal/apiquery"
	"github.com/TeamWarp/warp-cli/internal/requestflag"
	"github.com/TeamWarp/warp-go-sdk"
	"github.com/TeamWarp/warp-go-sdk/option"
	"github.com/tidwall/gjson"
	"github.com/urfave/cli/v3"
)

var timeOffPoliciesRetrieve = cli.Command{
	Name:    "retrieve",
	Usage:   "Get a specific time off policy by id",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "id",
			Usage:    `a string starting with "top_"`,
			Required: true,
		},
	},
	Action:          handleTimeOffPoliciesRetrieve,
	HideHelpCommand: true,
}

var timeOffPoliciesList = cli.Command{
	Name:    "list",
	Usage:   "Get the time off policies for your company",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			Usage:     `a string starting with "top_"`,
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			Usage:     `a string starting with "top_"`,
			QueryPath: "beforeId",
		},
		&requestflag.Flag[string]{
			Name:      "limit",
			Usage:     "a number less than or equal to 100",
			QueryPath: "limit",
		},
		&requestflag.Flag[int64]{
			Name:  "max-items",
			Usage: "The maximum number of items to return (use -1 for unlimited).",
		},
	},
	Action:          handleTimeOffPoliciesList,
	HideHelpCommand: true,
}

func handleTimeOffPoliciesRetrieve(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()
	if !cmd.IsSet("id") && len(unusedArgs) > 0 {
		cmd.Set("id", unusedArgs[0])
		unusedArgs = unusedArgs[1:]
	}
	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

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

	var res []byte
	options = append(options, option.WithResponseBodyInto(&res))
	_, err = client.TimeOff.Policies.Get(ctx, cmd.Value("id").(string), options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "time-off:policies retrieve", obj, format, transform)
}

func handleTimeOffPoliciesList(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.TimeOffPolicyListParams{}

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
		_, err = client.TimeOff.Policies.List(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "time-off:policies list", obj, format, transform)
	} else {
		iter := client.TimeOff.Policies.ListAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "time-off:policies list", iter, format, transform, maxItems)
	}
}
