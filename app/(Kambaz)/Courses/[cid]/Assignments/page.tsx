/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsSectionButtons from "./AssignmentsSectionButtons";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { BsJournalText, BsCaretDownFill } from "react-icons/bs";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const prettyDate = (iso?: string, timeLabel?: string) => {
  if (!iso) return "";
  const d = /^\d{4}-\d{2}-\d{2}$/.test(iso)
    ? new Date(Number(iso.slice(0, 4)), Number(iso.slice(5, 7)) - 1, Number(iso.slice(8, 10)))
    : new Date(iso);
  const month = d.toLocaleString("en-US", { month: "long" });
  const day = ordinal(d.getDate());
  return `${month} ${day}${timeLabel ? ` at ${timeLabel}` : ""}`;
};

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = (db as any).assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentControls/> <br/>

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> 
            <BsCaretDownFill/>
            <b>ASSIGNMENTS</b> 
            <AssignmentsSectionButtons/>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1">
                <div className="row align-items-center g-2">
                  <div className="col-auto">
                    <BsGripVertical className="fs-4" />
                    <BsJournalText/>
                  </div>

                  <div className="col">
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-semibold text-dark text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <div className="small text-muted mt-1">
                      Multiple Modules | <b>Not available until</b> {prettyDate(assignment.availableFrom, "12:00am")} |
                      <br/><b>Due</b> {prettyDate(assignment.dueDate, "11:59pm")} | {assignment.points} pts
                    </div>
                  </div>

                  <div className="col-auto">
                    <AssignmentControlButtons />
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>  
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}