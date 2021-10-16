import {useForm} from "react-hook-form";
const formuse = () => {
  console.log("formuse");
  const myVal = useForm();
  return myVal;
};

export default formuse;
