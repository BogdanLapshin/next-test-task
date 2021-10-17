import styles from "../../../styles/form-elements/inputs/input.module.scss";
type InputPassWrapperPropsType = {
  inputId?: string;
  type?: string;
  name?: string;
  register?: any;
  trigger?: any;
  errors?: any;
};
const Input: React.FC<InputPassWrapperPropsType> = ({
  inputId,
  type,
  name,
  register,
  errors,
  trigger,
}): JSX.Element => {
  const invalidClassname = errors[name] ? " " + styles.invalid : "";
  return (
    <>
      <input
        {...register}
        className={styles.form__input + invalidClassname}
        type={type}
        id={inputId}
        name={name}
        onKeyUp={() => {
          trigger(name);
        }}
        onBlur={() => {}}
      />
      {errors[name] && (
        <p className={styles.input__error__msg}>{errors[name].message}</p>
      )}
    </>
  );
};
export default Input;
