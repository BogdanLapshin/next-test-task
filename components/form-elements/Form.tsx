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
  const {register, handleSubmit} = useForm();
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
                register={register("email")}
              />
            </InputWrapper>
            <InputPassWrapper
              label="Пароль"
              inputId="pass"
              tip_content="?"
              name="password"
              register={register}
              dataRegister="test-data"
            />
            <InputPassWrapper
              label="Повторите пароль"
              inputId="re-pass"
              tip_content="?"
              name="re-password"
              register={register("re-pass")}
            />
            <span className={styles.form__line} />
            <InputCheckboxWrapper
              label="Ваша роль"
              label_tip={<Tips content="?" />}
              name="check-role"
            />
            <SubmitButton text="Продолжить" />
          </fieldset>
          <SocialMedia text="Или создать аккаунт при помощи" />
        </form>
      );
      break;
    case "auth":
      return (
        <form className={styles.form_auth}>
          <fieldset>
            <FormTitle
              title="Войти"
              suggestion="Нет аккаунта? "
              suggest_link=""
              action="Зарегистрируйтесь"
            />
            <InputWrapper>
              <Label inputId="mail" label="Ваш E-mail" />
              <Input type="email" inputId="mail" />
            </InputWrapper>
            <InputPassWrapper label="Пароль" inputId="pass" tip_content="?" />
            <SubmitButton text="Продолжить" />
          </fieldset>
          <SocialMedia text="Войти при помощи" />
        </form>
      );
      break;
  }
};

export default Form;
