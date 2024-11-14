import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  username: '',
  email: '',
  password: '',
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
          Create an account!! 😉😉😉
        </h1>
        <div className="text-justify">
        <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
        </div>
       
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium text-primary ml-2 hover:underline"
            to="/auth/login"
          >
            {" "}
            login
          </Link>
        </p>
      </div>
     
    </div>
  );
}

export default AuthRegister;
