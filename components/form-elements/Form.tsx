import styles from "../../styles/form-elements/form.module.scss";
import SocialMedia from "../social-media/Social-media";
import SubmitButton from "./buttons/SubmitButton";
import FormTitle from "./form-title/Form-title";
import InputCheckboxWrapper from "./input-wrapper/Input-checkbox-wrapper";
import InputPassWrapper from "./input-wrapper/Input-pass-wrapper";
import InputWrapper from "./input-wrapper/Input-wrapper";
import Input from "./inputs/Input";
import Label from "./labels/Label";
import Tips from "./labels/Tips";

const Form = () => {
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
        <SubmitButton btn_text="Продолжить" />
      </fieldset>
      <SocialMedia text="Или создать аккаунт при помощи" />
    </form>
  );
};

export default Form;
