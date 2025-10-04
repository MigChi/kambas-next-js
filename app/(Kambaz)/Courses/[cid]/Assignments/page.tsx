import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsSectionButtons from "./AssignmentsSectionButtons";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { BsJournalText, BsCaretDownFill } from "react-icons/bs";

export default function Assignments() {
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
            <ListGroupItem className="wd-assignment p-3 ps-1">
                  <div className="row align-items-center g-2">
                    <div className="col-auto">
                      <BsGripVertical className="fs-4" />
                      <BsJournalText/>
                    </div>

                    <div className="col">
                      <Link href="/Courses/1234/Assignments/123" className="fw-semibold text-dark text-decoration-none">
                        A1
                      </Link>
                      <div className="small text-muted mt-1">
                        Multiple Modules | <b>Not available until</b> May 6, 12:00am |
                        <br/><b> Due</b> May 30, 11:59pm | 110 pts
                      </div>
                    </div>

                    <div className="col-auto">
                      <AssignmentControlButtons />
                    </div>
                  </div> 
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
                  <div className="row align-items-center g-2">
                    <div className="col-auto">
                      <BsGripVertical className="fs-4" />
                      <BsJournalText/>
                    </div>

                    <div className="col">
                      <Link href="/Courses/1234/Assignments/123" className="fw-semibold text-dark text-decoration-none">
                        A2
                      </Link>
                      <div className="small text-muted mt-1">
                        Multiple Modules | <b>Not available until</b> May 6, 12:00am |
                        <br/><b> Due</b> May 30, 11:59pm | 110 pts
                      </div>
                    </div>

                    <div className="col-auto">
                      <AssignmentControlButtons />
                    </div>
                  </div> 
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
                  <div className="row align-items-center g-2">
                    <div className="col-auto">
                      <BsGripVertical className="fs-4" />
                      <BsJournalText/>
                    </div>

                    <div className="col">
                      <Link href="/Courses/1234/Assignments/123" className="fw-semibold text-dark text-decoration-none">
                        A3
                      </Link>
                      <div className="small text-muted mt-1">
                        Multiple Modules | <b>Not available until</b> May 6, 12:00am |
                        <br/><b> Due</b> May 30, 11:59pm | 110 pts
                      </div>
                    </div>

                    <div className="col-auto">
                      <AssignmentControlButtons />
                    </div>
                  </div> 
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
                  <div className="row align-items-center g-2">
                    <div className="col-auto">
                      <BsGripVertical className="fs-4" />
                      <BsJournalText/>
                    </div>

                    <div className="col">
                      <Link href="/Courses/1234/Assignments/123" className="fw-semibold text-dark text-decoration-none">
                        A4
                      </Link>
                      <div className="small text-muted mt-1">
                        Multiple Modules | <b>Not available until</b> May 6, 12:00am |
                        <br/><b> Due</b> May 30, 11:59pm | 110 pts
                      </div>
                    </div>

                    <div className="col-auto">
                      <AssignmentControlButtons />
                    </div>
                  </div> 
            </ListGroupItem>
            <ListGroupItem className="wd-assignment p-3 ps-1">
                  <div className="row align-items-center g-2">
                    <div className="col-auto">
                      <BsGripVertical className="fs-4" />
                      <BsJournalText/>
                    </div>

                    <div className="col">
                      <Link href="/Courses/1234/Assignments/123" className="fw-semibold text-dark text-decoration-none">
                        A5
                      </Link>
                      <div className="small text-muted mt-1">
                        Multiple Modules | <b>Not available until</b> May 6, 12:00am |
                        <br/><b> Due</b> May 30, 11:59pm | 110 pts
                      </div>
                    </div>

                    <div className="col-auto">
                      <AssignmentControlButtons />
                    </div>
                  </div> 
            </ListGroupItem>
          </ListGroup>  
        </ListGroupItem>
      </ListGroup>
  </div>
);}
