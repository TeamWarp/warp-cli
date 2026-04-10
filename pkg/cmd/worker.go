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

var workersRetrieve = cli.Command{
	Name:    "retrieve",
	Usage:   "Get a specific worker by id.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "id",
			Usage:    "The id of the worker.",
			Required: true,
		},
	},
	Action:          handleWorkersRetrieve,
	HideHelpCommand: true,
}

var workersList = cli.Command{
	Name:    "list",
	Usage:   "List all workers. Workers include anyone employed by the company, whether US or\ninternational, full-time employees or contractors.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:      "after-id",
			Usage:     "The id of the worker.",
			QueryPath: "afterId",
		},
		&requestflag.Flag[string]{
			Name:      "before-id",
			Usage:     "The id of the worker.",
			QueryPath: "beforeId",
		},
		&requestflag.Flag[string]{
			Name:      "limit",
			Usage:     "a number less than or equal to 100",
			QueryPath: "limit",
		},
		&requestflag.Flag[[]string]{
			Name:      "status",
			QueryPath: "statuses",
		},
		&requestflag.Flag[[]string]{
			Name:      "type",
			QueryPath: "types",
		},
		&requestflag.Flag[string]{
			Name:      "work-email",
			QueryPath: "workEmail",
		},
		&requestflag.Flag[int64]{
			Name:  "max-items",
			Usage: "The maximum number of items to return (use -1 for unlimited).",
		},
	},
	Action:          handleWorkersList,
	HideHelpCommand: true,
}

var workersDelete = cli.Command{
	Name:    "delete",
	Usage:   "Delete a worker. Only workers who have not yet completed onboarding can be\ndeleted. Active workers must be properly offboarded.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "id",
			Usage:    "The id of the worker.",
			Required: true,
		},
	},
	Action:          handleWorkersDelete,
	HideHelpCommand: true,
}

var workersCreateContractor = requestflag.WithInnerFlags(cli.Command{
	Name:    "create-contractor",
	Usage:   "Create a new contractor. The worker will be created in draft status and must be\ninvited separately via the invite endpoint. For business contractors, the\nbusinessName field is required.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "department-id",
			Usage:    "The department to assign this contractor to.",
			Required: true,
			BodyPath: "departmentId",
		},
		&requestflag.Flag[string]{
			Name:     "email",
			Usage:    "Personal email address. The invite will be sent here.",
			Required: true,
			BodyPath: "email",
		},
		&requestflag.Flag[string]{
			Name:     "entity-type",
			Usage:    "Whether the contractor is an individual person or a business entity.",
			Required: true,
			BodyPath: "entityType",
		},
		&requestflag.Flag[string]{
			Name:     "first-name",
			Usage:    "a non empty string",
			Required: true,
			BodyPath: "firstName",
		},
		&requestflag.Flag[string]{
			Name:     "last-name",
			Usage:    "a non empty string",
			Required: true,
			BodyPath: "lastName",
		},
		&requestflag.Flag[string]{
			Name:     "manager-id",
			Usage:    "The worker id of this contractor's direct manager.",
			Required: true,
			BodyPath: "managerId",
		},
		&requestflag.Flag[string]{
			Name:     "position",
			Usage:    "The contractor's role or job title.",
			Required: true,
			BodyPath: "position",
		},
		&requestflag.Flag[string]{
			Name:     "start-date",
			Usage:    "A date string in the form YYYY-MM-DD",
			Required: true,
			BodyPath: "startDate",
		},
		&requestflag.Flag[string]{
			Name:     "work-country",
			Usage:    `Allowed values: "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW".`,
			Required: true,
			BodyPath: "workCountry",
		},
		&requestflag.Flag[string]{
			Name:     "business-name",
			Usage:    `Required when entityType is "business". The legal name of the contractor's business.`,
			BodyPath: "businessName",
		},
		&requestflag.Flag[map[string]any]{
			Name:     "compensation",
			Usage:    "The pay rate for the contractor. Leave this blank if you'd like to pay this contractor on-demand or via invoicing.",
			BodyPath: "compensation",
		},
		&requestflag.Flag[any]{
			Name:     "pay-schedule",
			Usage:    "The contractor's pay schedule. Must be a pay schedule that the company has configured.",
			BodyPath: "paySchedule",
		},
		&requestflag.Flag[any]{
			Name:     "scope-of-work",
			Usage:    "A description of the work the contractor will perform.",
			BodyPath: "scopeOfWork",
		},
		&requestflag.Flag[any]{
			Name:     "work-email",
			Usage:    "An email with a reasonably valid regex (shamelessly taken from zod)",
			BodyPath: "workEmail",
		},
	},
	Action:          handleWorkersCreateContractor,
	HideHelpCommand: true,
}, map[string][]requestflag.HasOuterFlag{
	"compensation": {
		&requestflag.InnerFlag[float64]{
			Name:       "compensation.amount",
			Usage:      "a positive number",
			InnerField: "amount",
		},
		&requestflag.InnerFlag[string]{
			Name:       "compensation.currency",
			Usage:      `Allowed values: "USD", "AUD", "BGN", "BRL", "CAD", "CHF", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "INR", "JPY", "MYR", "NOK", "NZD", "CNY", "PLN", "RON", "TRY", "SEK", "SGD", "AED", "ARS", "BDT", "BWP", "CLP", "COP", "CRC", "EGP", "FJD", "GEL", "GHS", "ILS", "KES", "KRW", "LKR", "MAD", "MXN", "NPR", "PHP", "PKR", "THB", "UAH", "UGX", "UYU", "VND", "ZAR", "ZMW", "TND", "NGN", "RSD", "TWD", "GTQ", "HNL", "DOP", "SAR", "XAF", "PEN".`,
			InnerField: "currency",
		},
		&requestflag.InnerFlag[string]{
			Name:       "compensation.per",
			Usage:      "The pay period for the compensation amount.",
			InnerField: "per",
		},
	},
})

var workersCreateEmployee = requestflag.WithInnerFlags(cli.Command{
	Name:    "create-employee",
	Usage:   "Create a new US employee. The worker will be created in draft status and must be\ninvited separately via the invite endpoint. If hiring in a state without an\nexisting tax registration, you must specify the stateRegistration field.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[map[string]any]{
			Name:     "compensation",
			Usage:    "The employee's base compensation.",
			Required: true,
			BodyPath: "compensation",
		},
		&requestflag.Flag[string]{
			Name:     "department-id",
			Usage:    "The department to assign this employee to.",
			Required: true,
			BodyPath: "departmentId",
		},
		&requestflag.Flag[string]{
			Name:     "email",
			Usage:    "Personal email address. The invite will be sent here.",
			Required: true,
			BodyPath: "email",
		},
		&requestflag.Flag[string]{
			Name:     "first-name",
			Usage:    "a non empty string",
			Required: true,
			BodyPath: "firstName",
		},
		&requestflag.Flag[string]{
			Name:     "last-name",
			Usage:    "a non empty string",
			Required: true,
			BodyPath: "lastName",
		},
		&requestflag.Flag[string]{
			Name:     "manager-id",
			Usage:    "The worker id of this employee's direct manager.",
			Required: true,
			BodyPath: "managerId",
		},
		&requestflag.Flag[string]{
			Name:     "position",
			Usage:    "The employee's job title.",
			Required: true,
			BodyPath: "position",
		},
		&requestflag.Flag[string]{
			Name:     "start-date",
			Usage:    "A date string in the form YYYY-MM-DD",
			Required: true,
			BodyPath: "startDate",
		},
		&requestflag.Flag[map[string]any]{
			Name:     "work-location",
			Usage:    "Where the employee will work. Either an existing company workplace or a remote US state.",
			Required: true,
			BodyPath: "workLocation",
		},
		&requestflag.Flag[any]{
			Name:     "pay-schedule",
			Usage:    "The employee's pay schedule. Must be a pay schedule that the company has configured.",
			BodyPath: "paySchedule",
		},
		&requestflag.Flag[bool]{
			Name:     "require-i9",
			Usage:    "Whether the employee is required to complete I-9 work authorization. Set to false if the employee has already been verified off-platform. Defaults to true.",
			BodyPath: "requireI9",
		},
		&requestflag.Flag[string]{
			Name:     "state-registration",
			Usage:    "How state tax registration is handled for this employee's work state. Required when hiring in a state where your company doesn't have an existing registration. Use 'self_managed' if you've already registered in this state, or 'warp_managed' for Warp to handle registration on your behalf.",
			BodyPath: "stateRegistration",
		},
		&requestflag.Flag[any]{
			Name:     "stock-options",
			Usage:    "a non-negative number",
			BodyPath: "stockOptions",
		},
		&requestflag.Flag[any]{
			Name:     "work-email",
			Usage:    "An email with a reasonably valid regex (shamelessly taken from zod)",
			BodyPath: "workEmail",
		},
	},
	Action:          handleWorkersCreateEmployee,
	HideHelpCommand: true,
}, map[string][]requestflag.HasOuterFlag{
	"compensation": {
		&requestflag.InnerFlag[float64]{
			Name:       "compensation.amount",
			Usage:      "a positive number",
			InnerField: "amount",
		},
		&requestflag.InnerFlag[string]{
			Name:       "compensation.per",
			Usage:      "Whether the amount is per hour or per year.",
			InnerField: "per",
		},
	},
})

var workersInvite = cli.Command{
	Name:    "invite",
	Usage:   "Send or resend the worker invite so they can accept and complete onboarding to\nWarp. If the worker has already been invited, the invite will be resent with\nextended validity.",
	Suggest: true,
	Flags: []cli.Flag{
		&requestflag.Flag[string]{
			Name:     "id",
			Usage:    "The id of the worker.",
			Required: true,
		},
	},
	Action:          handleWorkersInvite,
	HideHelpCommand: true,
}

func handleWorkersRetrieve(ctx context.Context, cmd *cli.Command) error {
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
	_, err = client.Workers.Get(ctx, cmd.Value("id").(string), options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "workers retrieve", obj, format, transform)
}

func handleWorkersList(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.WorkerListParams{}

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
		_, err = client.Workers.List(ctx, params, options...)
		if err != nil {
			return err
		}
		obj := gjson.ParseBytes(res)
		return ShowJSON(os.Stdout, "workers list", obj, format, transform)
	} else {
		iter := client.Workers.ListAutoPaging(ctx, params, options...)
		maxItems := int64(-1)
		if cmd.IsSet("max-items") {
			maxItems = cmd.Value("max-items").(int64)
		}
		return ShowJSONIterator(os.Stdout, "workers list", iter, format, transform, maxItems)
	}
}

func handleWorkersDelete(ctx context.Context, cmd *cli.Command) error {
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

	return client.Workers.Delete(ctx, cmd.Value("id").(string), options...)
}

func handleWorkersCreateContractor(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.WorkerNewContractorParams{}

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
	_, err = client.Workers.NewContractor(ctx, params, options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "workers create-contractor", obj, format, transform)
}

func handleWorkersCreateEmployee(ctx context.Context, cmd *cli.Command) error {
	client := warphr.NewClient(getDefaultRequestOptions(cmd)...)
	unusedArgs := cmd.Args().Slice()

	if len(unusedArgs) > 0 {
		return fmt.Errorf("Unexpected extra arguments: %v", unusedArgs)
	}

	params := warphr.WorkerNewEmployeeParams{}

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
	_, err = client.Workers.NewEmployee(ctx, params, options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "workers create-employee", obj, format, transform)
}

func handleWorkersInvite(ctx context.Context, cmd *cli.Command) error {
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
	_, err = client.Workers.Invite(ctx, cmd.Value("id").(string), options...)
	if err != nil {
		return err
	}

	obj := gjson.ParseBytes(res)
	format := cmd.Root().String("format")
	transform := cmd.Root().String("transform")
	return ShowJSON(os.Stdout, "workers invite", obj, format, transform)
}
