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
const Form = (props) => {
  switch (props.form_type) {
    case "reg":
      return (
        <form className={styles.form}>
          <fieldset>
            <FormTitle
              title="Регистрация"
              suggestion="Уже зарегистрированы? "
              suggest_link="auth"
              action="Войдите"
            />
            <InputWrapper>
              <Label inputId="mail" label="Ваш E-mail" />
              <Input type="email" inputId="mail" />
            </InputWrapper>
            <InputPassWrapper label="Пароль" inputId="pass" tip_content="?" />
            <InputPassWrapper
              label="Повторите пароль"
              inputId="re-pass"
              tip_content="?"
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
        <form className={styles.form}>
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
