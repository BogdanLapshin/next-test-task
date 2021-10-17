import {useForm} from "react-hook-form";

import SocialMedia from "../SocialMedia/SocialMedia";
import SubmitButton from "./SubmitButton/SubmitButton";
import FormTitle from "./FormTitle/FormTitle";
import InputCheckboxWrapper from "./InputWrapper/InputCheckboxWrapper";
import InputPassWrapper from "./InputWrapper/InputPassWrapper";
import InputWrapper from "./InputWrapper/InputWrapper";
import Input from "./Inputs/Input";
import Label from "./Labels/Label";
import Tips from "./Labels/Tips";

import styles from "../../styles/FormElements/Form.module.scss";

type FormPropsType = {
  form_type?: string;
};

const Form: React.FC<FormPropsType> = ({form_type}): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    trigger,
    watch,
  } = useForm();

  const sbmtForm = (data) => {
    console.log(data);
    return data;
  };

  switch (form_type) {
    case "reg":
      return (
        <form
          className={styles.form}
          onSubmit={handleSubmit(sbmtForm)}
          noValidate
        >
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
              tip_content={
                <Tips
                  content="?"
                  message="Your password"
                  tipId="password-tip"
                />
              }
              name="password"
              register={register}
              errors={errors}
              trigger={trigger}
            />
            <InputPassWrapper
              label="Повторите пароль"
              inputId="re-pass"
              tip_content={
                <Tips
                  content="?"
                  message="Confirm your password"
                  tipId="repassword-tip"
                />
              }
              name="re-password"
              register={register}
              errors={errors}
              trigger={trigger}
              watch={watch("password")}
            />
            <span className={styles.form__line} />
            <InputCheckboxWrapper
              label="Ваша роль"
              label_tip={
                <Tips
                  content="?"
                  message="Choose your role"
                  tipId="checkbox-tip"
                />
              }
              register={register("roole")}
            />
            <SubmitButton text="Продолжить" />
          </fieldset>
          <SocialMedia text="Или создать аккаунт при помощи" />
        </form>
      );

    case "auth":
      return (
        <form
          className={styles.form_auth}
          onSubmit={handleSubmit(sbmtForm)}
          noValidate
        >
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
              tip_content={
                <Tips
                  content="?"
                  message="Your password"
                  tipId="password-tip"
                />
              }
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
  }
};

export default Form;
