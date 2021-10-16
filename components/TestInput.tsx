const TestInput = ({register, func, trig, name, resetfunc}) => {
  return (
    <>
      <input
        type="number"
        {...register}
        onKeyUp={() => {
          trig(name);
        }}
        onBlur={() => {
          resetfunc();
        }}
      />
      {func[name] && func.digit.message}
    </>
  );
};
export default TestInput;
