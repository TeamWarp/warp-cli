// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package cmd

import (
	"context"
	"fmt"
	"os"

	"github.com/stainless-sdks/warp-hr-cli/internal/apiquery"
	"github.com/stainless-sdks/warp-hr-cli/internal/requestflag"
	"github.com/stainless-sdks/warp-hr-go"
	"github.com/stainless-sdks/warp-hr-go/option"
	"github.com/tidwall/gjson"
	"github.com/urfave/cli/v3"
)

var workplacesCreate = requestflag.WithInnerFlags(cli.Command{
	Name:    "create",
	Usage:   "Create a new workplace.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[map[string]any]{
			Name:     "address",
			Usage:    "A valid US address",
			Required: true,
			BodyPath: "address",
		},
		&requestflag.Flag[string]{
			Name:     "name",
			Usage:    "a non empty string",
			Required: true,
			BodyPath: "name",
		},
		&requestflag.Flag[string]{
			Name:     "type",
			Usage:    `Allowed values: "remote", "office".`,
			Required: true,
			BodyPath: "type",
		},
	},
	Action:          handleWorkplacesCreate,
	HideHelpCommand: true,
}, map[string][]requestflag.HasOuterFlag{
	"address": {
		&requestflag.InnerFlag[string]{
			Name:       "address.city",
			InnerField: "city",
		},
		&requestflag.InnerFlag[string]{
			Name:       "address.country",
			Usage:      `Allowed values: "US".`,
			InnerField: "country",
		},
		&requestflag.InnerFlag[string]{
			Name:       "address.line1",
			Usage:      "a non empty string",
			InnerField: "line1",
		},
		&requestflag.InnerFlag[string]{
			Name:       "address.postal-code",
			InnerField: "postalCode",
		},
		&requestflag.InnerFlag[string]{
			Name:       "address.state",
			Usage:      `Allowed values: "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".`,
			InnerField: "state",
		},
		&requestflag.InnerFlag[any]{
			Name:       "address.line2",
			InnerField: "line2",
		},
	},
})

var workplacesUpdate = cli.Command{
	Name:    "update",
	Usage:   "Update an existing workplace.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "id",
			Usage:    "Public workplace identifier",
			Required: true,
		},
		&requestflag.Flag[string]{
			Name:     "name",
			BodyPath: "name",
		},
	},
	Action:          handleWorkplacesUpdate,
	HideHelpCommand: true,
}

var workplacesList = cli.Command{
	Name:    "list",
	Usage:   "List all workplaces for your company.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			Usage:     "Public workplace identifier",
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			Usage:     "Public workplace identifier",
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
	Action:          handleWorkplacesList,
	HideHelpCommand: true,
}

func handleWorkplacesCreate(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.WorkplaceNewParams{}

	options, err := flagOptions(
		cmd,
		apiquery.NestedQueryFormatBrackets,
		apiquery.ArrayQueryFormatRepeat,
		ApplicationJSON,
		false,
	)
	if err != nil {
		return err
	}

	var res []byte
	options = append(options, option.WithResponseBodyInto(&res))
	_, err = client.Workplaces.New(ctx, params, options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "workplaces create", obj, format, transform)
}

func handleWorkplacesUpdate(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()
	if !cmd.IsSet("id") && len(unusedArgs) > 0 {
		cmd.Set("id", unusedArgs[0])
		unusedArgs = unusedArgs[1:]
	}
	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.WorkplaceUpdateParams{}

	options, err := flagOptions(
		cmd,
		apiquery.NestedQueryFormatBrackets,
		apiquery.ArrayQueryFormatRepeat,
		ApplicationJSON,
		false,
	)
	if err != nil {
		return err
	}

	var res []byte
	options = append(options, option.WithResponseBodyInto(&res))
	_, err = client.Workplaces.Update(
		ctx,
		cmd.Value("id").(string),
		params,
		options...,
	)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "workplaces update", obj, format, transform)
}

func handleWorkplacesList(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.WorkplaceListParams{}

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
		_, err = client.Workplaces.List(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "workplaces list", obj, format, transform)
	} else {
		iter := client.Workplaces.ListAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "workplaces list", iter, format, transform, maxItems)
	}
}
