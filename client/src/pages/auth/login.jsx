import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: '',
  password: '',
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
          Welcome back 🎉🎉🎉
        </h1>
        <div className="text-justify">
        <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
        </div>
        <p className="mt-2">
          Don't have an account?Create one
          <Link
            className="font-medium text-primary ml-2 hover:underline"
            to="/auth/register"
          >
            {" "}
            register
          </Link>
        </p>
      </div>
    
    </div>
  );
}

export default AuthLogin;