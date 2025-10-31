/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { redirect } from "next/dist/client/components/navigation";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams() as { cid: string };
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);          
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);      
  const course = courses?.find((c: any) => c._id === cid);

  const allowed =
    !!currentUser &&
    enrollments?.some((e: any) => e.user === currentUser._id && e.course === cid);

  if (!allowed) {
    redirect("/Dashboard");
    return null;
  }

  const [navOpen, setNavOpen] = useState(true);
  const toggleNav = () => setNavOpen((v) => !v);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center gap-2">
        <button
          type="button"
          id="wd-courses-nav-toggle"
          onClick={toggleNav}
          aria-label={navOpen ? "Hide course navigation" : "Show course navigation"}
          aria-pressed={navOpen}
          className="btn btn-link p-0 m-0 text-decoration-none"
        >
          <FaAlignJustify className="fs-4 mb-1" />
        </button>
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        {navOpen && (
          <aside className="me-3">
            <CourseNavigation cid={cid} />
          </aside>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
