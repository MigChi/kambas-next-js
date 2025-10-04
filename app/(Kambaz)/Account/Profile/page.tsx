import Link from "next/link";
import { FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">
      <div className="mx-auto" style={{ maxWidth: 420 }}>
        <h3>Profile</h3>

        <FormControl id="wd-username" defaultValue="alice" placeholder="username" className="mb-2 w-100"/>
        <FormControl id="wd-password" type="password" defaultValue="123" placeholder="password" className="mb-2 w-100"/>
        <FormControl id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="mb-2 w-100"/>
        <FormControl id="wd-lastname"defaultValue="Wonderland" placeholder="Last Name" className="mb-2 w-100"/>
        <FormControl id="wd-dob" type="date" defaultValue="2000-01-01" className="mb-2 w-100"/>
        <FormControl id="wd-email"type="email" defaultValue="alice@wonderland" placeholder="email" className="mb-2 w-100"/>
        <FormSelect id="wd-role" defaultValue="FACULTY" className="mb-3 w-100">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>

        <Link href="/Account/Signin" className="btn btn-danger w-100" id="wd-signoutbtn">
          Sign out
        </Link>
      </div>
    </div>
  );
}