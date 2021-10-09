import React from "react";
import styles from "../styles/form-area.module.scss";
import Copyright from "./copyright/Copyright";
import SubmitButton from "./form-elements/buttons/SubmitButton";
import Form from "./form-elements/Form";
import FormTitle from "./form-elements/form-title/Form-title";
import InputCheckboxWrapper from "./form-elements/input-wrapper/Input-checkbox-wrapper";
import InputPassWrapper from "./form-elements/input-wrapper/Input-pass-wrapper";
import InputWrapper from "./form-elements/input-wrapper/Input-wrapper";
import Input from "./form-elements/inputs/Input";
import Label from "./form-elements/labels/Label";
import Tips from "./form-elements/labels/Tips";
import Logo from "./logo/Logo";
import SocialMedia from "./social-media/Social-media";
const FormArea = (props) => {
  return (
    <section className={styles.form__area}>
      <Logo custom_class="small_logo" />
      <Form form_type={props.form_type} />
      <Copyright />
    </section>
  );
};

export default FormArea;
