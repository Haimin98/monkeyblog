import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import IconEyeOpen from "components/icon/IconEyeOpen";
import Field from "components/field/Field";
import IconEyeClose from "components/icon/IconEyeClose";
import Button from "components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebasedb/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";

const schema = yup.object({
  fullName: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Your password must be at least 8 characters or greater"),
});
const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    // console.log(errors);
    if (!isValid) return;
    console.log("🚀 ~ handleSignUp ~ values:", values);
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullName,
    });
    const colRef = collection(db, "user");
    await addDoc(colRef, {
      fullname: values.fullName,
      email: values.email,
      userId: user.user.uid,
    });
    toast.success("Register successfully!");
    // navigate("/");
  };
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    document.title = "Register Page";
  }, []);
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="fullName" className="label">
            Full Name
          </Label>
          <Input
            type="text"
            name="fullName"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>

        <Field>
          <Label htmlFor="email" className="label">
            Email
          </Label>
          <Input
            type="text"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password" className="label">
            Password
          </Label>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {!showPassword ? (
              <IconEyeClose
                onClick={() => setShowPassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen onClick={() => setShowPassword(false)}></IconEyeOpen>
            )}
          </Input>
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          style={{
            maxWidth: 350,
            margin: "0 auto",
          }}
        >
          Sign Up
        </Button>
        <div className="have-account">
          Already have an account? <NavLink to="/sign-in">Login</NavLink>
        </div>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
