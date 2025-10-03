"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  const isActive = (p: string) =>
    pathname === p || pathname.startsWith(p + "/");

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}        
      id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link">
        <img src="/images/NU_CMYK_Notched-N_motto_RW.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem className={`border-0 text-center ${isActive("/Account") ? "bg-white" : "bg-black"}`}>
        <Link href="/Account" id="wd-account-link"
          className={`${isActive("/Account") ? "text-danger" : "text-white"} text-decoration-none`}>
            <FaRegCircleUser className="fs-1 text-white" /> 
            <br/>
            Account
        </Link>
      </ListGroupItem>

      {/* Dashboard */}
      <ListGroupItem className={`border-0 text-center ${isActive("/Dashboard") ? "bg-white" : "bg-black"}`}>
        <Link href="/Dashboard" id="wd-dashboard-link"
          className={`${isActive("/Dashboard") ? "text-danger" : "text-white"} text-decoration-none`}>
            <AiOutlineDashboard className="fs-1 text-danger" /> 
            <br />
            Dashboard
        </Link>
      </ListGroupItem>

      {/* Courses */}
      <ListGroupItem className={`border-0 text-center ${isActive("/Dashboard") ? "bg-white" : "bg-black"}`}>
        <Link href="/Dashboard" id="wd-course-link"
          className={`${isActive("/Dashboard") ? "text-danger" : "text-white"} text-decoration-none`}>
            <LiaBookSolid className="fs-1 text-danger" />
            <br />
            Courses
        </Link>
      </ListGroupItem>

      {/* Calendar */}
      <ListGroupItem className={`border-0 text-center ${isActive("/Calendar") ? "bg-white" : "bg-black"}`}>
        <Link href="/Calendar" id="wd-calendar-link"
          className={`${isActive("/Calendar") ? "text-danger" : "text-white"} text-decoration-none`}>
            <IoCalendarOutline className="fs-1 text-danger" />
            <br />
            Calendar
        </Link>
      </ListGroupItem>
  
      {/* Inbox */}
      <ListGroupItem className={`border-0 text-center ${isActive("/Inbox") ? "bg-white" : "bg-black"}`}>
        <Link href="/Inbox" id="wd-inbox-link"
          className={`${isActive("/Inbox") ? "text-danger" : "text-white"} text-decoration-none`}>
            <FaInbox className="fs-1 text-danger"/>
            <br/>
            Inbox
        </Link>
      </ListGroupItem> 

      {/* Labs */}
      <ListGroupItem className={`border-0 ${isActive("/Labs") ? "bg-white" : "bg-black"} text-center`}>
        <Link href="/Labs" id="wd-labs-link"
          className={`${isActive("/Labs") ? "text-danger" : "text-white"} text-decoration-none`}>
            <LiaCogSolid className="fs-1 text-danger" />
            <br />
            Labs
        </Link>
      </ListGroupItem>
      <br />
    </ListGroup>
  );
}

