package core

type YugiLimitRegulationError struct {
	IsYugiLimitRegulationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewYugiLimitRegulationError(code string, msg string, ctx *Context) *YugiLimitRegulationError {
	return &YugiLimitRegulationError{
		IsYugiLimitRegulationError: true,
		Sdk:              "YugiLimitRegulation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *YugiLimitRegulationError) Error() string {
	return e.Msg
}
