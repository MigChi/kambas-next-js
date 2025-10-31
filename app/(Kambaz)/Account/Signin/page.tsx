/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import * as db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({ username: "", password: "" });
  const dispatch = useDispatch();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-3">
      <div className="mx-auto" style={{ maxWidth: 420 }}>
        <h1>Sign in</h1>

        <FormControl
          id="wd-username"
          placeholder="username"
          className="mb-2 w-100"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <FormControl
          id="wd-password"
          placeholder="password"
          type="password"
          className="mb-2 w-100"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <Button id="wd-signin-btn" className="w-100 mb-2" onClick={signin}>
          Sign in
        </Button>

        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
