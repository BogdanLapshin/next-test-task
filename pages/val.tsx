import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import TestInput from "../components/TestInput";
const val = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    trigger,
    reset,
  } = useForm();
  const sbmtForm = (data) => {
    console.log(data);
    return data;
  };
  return (
    <form onSubmit={handleSubmit(sbmtForm)}>
      <TestInput
        register={register("digit", {
          required: "Error",
          min: {value: 10, message: "Min is 10"},
        })}
        trig={trigger}
        func={errors}
        name="digit"
        resetfunc={reset}
      />
      <TestInput
        register={register("age", {
          required: "Error",
          min: {value: 10, message: "Min is 10"},
        })}
        trig={trigger}
        func={errors}
        name="age"
        resetfunc={reset}
      />
      <input type="submit" value="send" />
    </form>
  );
};

export default val;
