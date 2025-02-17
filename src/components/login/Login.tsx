import Logo from "../../assets/images/logo.svg?react";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const Login = () => {
    return (
        <div className="box-border flex flex-col items-center h-[623px] w-[540px] bg-neutral-0 rounded-xl border border-neutral-200 p-12 gap-4 shadow-large">
            <Logo />
            <h1 className="sans-preset1 text-neutral-950">Welcome to Note</h1>
            <h3 className="sans-preset5 text-neutral-600">Please log in to continue</h3>
            <form>
                <div>
                    <label htmlFor="email" className="sans-preset4 text-neutral-950">Email Address</label>
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" />
                </div>


                <PrimaryButton>Login</PrimaryButton>
            </form>
        </div>
    )
}

export default Login;


/* Page Content */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 48px;
// gap: 16px;

// width: 540px;
// height: 623px;

// background: #FFFFFF;
// border: 1px solid #E0E4EA;
// /* Large Shadow */
// box-shadow: 0px 8px 12px rgba(240, 240, 240, 0.6);
// border-radius: 12px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
