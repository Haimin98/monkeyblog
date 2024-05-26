import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import Field from "components/field/Field";
import { Label } from "components/label";
import { Input } from "components/input";
import IconEyeClose from "components/icon/IconEyeClose";
import IconEyeOpen from "components/icon/IconEyeOpen";
import Button from "components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebasedb/firebase-config";
const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    else navigate("/sign-in");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };

  const schema = yup.object({
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Your password must be at least 8 characters or greater"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  //toast error
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
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
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
            width: "100%",
            margin: "0 auto",
          }}
        >
          Sign In
        </Button>
      </form>
      <div className="have-account">
        Don't you have an account? <NavLink to="/sign-up">SignUp</NavLink>
      </div>
    </AuthenticationPage>
  );
};

export default SignInPage;
