"use client"
import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
        <h3>Sign up</h3>
        <input placeholder="username" className="wd-username" /><br/>
        <input placeholder="password" type="password" className="wd-password" /><br/>
        <input placeholder="verify password"
            type="password" className="wd-password-verify" /><br/>
        <button type="button"
                onClick={() => window.location.href="Profile"}
                id="wd-signupbtn">
           Sign up
        </button> <br />
        <Link  href="Signin" > Sign in </Link>
    </div>
);}
