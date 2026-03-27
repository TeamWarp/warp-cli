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

var departmentsCreate = cli.Command{
	Name:    "create",
	Usage:   "Create a new department.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "name",
			Usage:    "a non empty string",
			Required: true,
			BodyPath: "name",
		},
	},
	Action:          handleDepartmentsCreate,
	HideHelpCommand: true,
}

var departmentsUpdate = cli.Command{
	Name:    "update",
	Usage:   "Update an existing department.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "id",
			Usage:    "The unique public id of the department",
			Required: true,
		},
		&requestflag.Flag[string]{
			Name:     "name",
			BodyPath: "name",
		},
	},
	Action:          handleDepartmentsUpdate,
	HideHelpCommand: true,
}

var departmentsList = cli.Command{
	Name:    "list",
	Usage:   "List all departments for your company.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			Usage:     "The unique public id of the department",
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			Usage:     "The unique public id of the department",
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
	Action:          handleDepartmentsList,
	HideHelpCommand: true,
}

func handleDepartmentsCreate(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.DepartmentNewParams{}

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
	_, err = client.Departments.New(ctx, params, options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "departments create", obj, format, transform)
}

func handleDepartmentsUpdate(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()
	if !cmd.IsSet("id") && len(unusedArgs) > 0 {
		cmd.Set("id", unusedArgs[0])
		unusedArgs = unusedArgs[1:]
	}
	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.DepartmentUpdateParams{}

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
	_, err = client.Departments.Update(
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
	return ShowJSON(os.Stdout, "departments update", obj, format, transform)
}

func handleDepartmentsList(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.DepartmentListParams{}

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
		_, err = client.Departments.List(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "departments list", obj, format, transform)
	} else {
		iter := client.Departments.ListAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "departments list", iter, format, transform, maxItems)
	}
}
