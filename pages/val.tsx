import {useForm} from "react-hook-form";
import TestInput from "../components/TestInput";
const val = () => {
  const {register, handleSubmit} = useForm();
  const sbmtForm = (data) => {
    console.log(data);
    return data;
  };
  return (
    <form onSubmit={handleSubmit(sbmtForm)}>
      <TestInput type="text" register={register("newname", {required: true})} />
      <input type="submit" value="send" />
    </form>
  );
};

export default val;
