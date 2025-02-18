import Logo from "../../assets/images/logo.svg?react";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import PasswordField from "../fields/passwordField/PasswordField";
import TextField from "../fields/textField/TextField";
import { useState } from "react";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="box-border flex flex-col items-center h-[623px] w-[540px] bg-neutral-0 rounded-xl border border-neutral-200 p-12 gap-4 shadow-large">
            <Logo />
            <h1 className="sans-preset1 text-neutral-950">Welcome to Note</h1>
            <h3 className="sans-preset5 text-neutral-600">Please log in to continue</h3>
            <form className="flex flex-col">
                <TextField label="Email Address" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <PasswordField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} onForgotPassword={() => { }} />
                <PrimaryButton>Login</PrimaryButton>
            </form>
        </div>
    )
}

export default Login;