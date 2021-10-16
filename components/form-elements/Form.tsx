import styles from "../../styles/form-elements/form.module.scss";
import SocialMedia from "../social-media/Social-media";
import SubmitButton from "./SubmitButton/SubmitButton";
import FormTitle from "./form-title/Form-title";
import InputCheckboxWrapper from "./input-wrapper/Input-checkbox-wrapper";
import InputPassWrapper from "./input-wrapper/Input-pass-wrapper";
import InputWrapper from "./input-wrapper/Input-wrapper";
import Input from "./inputs/Input";
import Label from "./labels/Label";
import Tips from "./labels/Tips";
import {useForm} from "react-hook-form";
type FormPropsType = {
  form_type?: string;
};

const Form: React.FC<FormPropsType> = (props) => {
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
  switch (props.form_type) {
    case "reg":
      return (
        <form className={styles.form} onSubmit={handleSubmit(sbmtForm)}>
          <fieldset>
            <FormTitle
              title="Регистрация"
              suggestion="Уже зарегистрированы? "
              suggest_link="auth"
              action="Войдите"
            />
            <InputWrapper>
              <Label inputId="mail" label="Ваш E-mail" />
              <Input
                type="email"
                inputId="mail"
                name="email"
                errors={errors}
                trigger={trigger}
                register={register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Incorrect email",
                  },
                })}
              />
            </InputWrapper>
            <InputPassWrapper
              label="Пароль"
              inputId="pass"
              tip_content={<div>?</div>}
              name="password"
              register={register}
              errors={errors}
              trigger={trigger}
            />
            <InputPassWrapper
              label="Повторите пароль"
              inputId="re-pass"
              tip_content={<div>?</div>}
              name="re-password"
              register={register}
              errors={errors}
              trigger={trigger}
            />
            <span className={styles.form__line} />
            <InputCheckboxWrapper
              label="Ваша роль"
              label_tip={<Tips content={<div>?</div>} />}
              name="role"
              register={register("roole")}
            />
            <SubmitButton text="Продолжить" />
          </fieldset>
          <SocialMedia text="Или создать аккаунт при помощи" />
        </form>
      );
      break;
    case "auth":
      return (
        <form className={styles.form_auth} onSubmit={handleSubmit(sbmtForm)}>
          <fieldset>
            <FormTitle
              title="Войти"
              suggestion="Нет аккаунта? "
              suggest_link=""
              action="Зарегистрируйтесь"
            />
            <InputWrapper>
              <Label inputId="mail" label="Ваш E-mail" />
              <Input
                type="email"
                inputId="mail"
                name="email"
                errors={errors}
                trigger={trigger}
                register={register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Incorrect email",
                  },
                })}
              />
            </InputWrapper>
            <InputPassWrapper
              label="Пароль"
              inputId="pass"
              tip_content={<div>?</div>}
              name="password"
              register={register}
              errors={errors}
              trigger={trigger}
            />
            <SubmitButton text="Продолжить" />
          </fieldset>
          <SocialMedia text="Войти при помощи" />
        </form>
      );
      break;
  }
};

export default Form;
