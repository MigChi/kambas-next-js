/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Row, Col, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import { BsCalendar3 } from "react-icons/bs";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignments: any[] = (db as any).assignments;
  const assignment = assignments.find((a) => a._id === aid && a.course === cid) || {};

  return (
    <div id="wd-assignments-editor" style={{ maxWidth: 550 }} className="mx-auto">
      <Form>
        {/* Assignment Name */}
        <Form.Label htmlFor="wd-name" as="h2" className="fw-bold mb-2">
          {assignment.title}
        </Form.Label>
        <Form.Control id="wd-name" defaultValue={assignment.title} className="mb-4" />

        {/* Description */}
        <Form.Control
          id="wd-description"
          as="textarea"
          rows={9}
          className="mb-4"
          defaultValue={assignment.description}
        />

        {/* Points */}
        <Row className="align-items-end mb-3">
          <Col sm={4} className="text-sm-end fw-semibold">
            <Form.Label htmlFor="wd-points" className="m-0">Points</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Control
              id="wd-points"
              type="number"
              defaultValue={assignment.points}
              style={{ maxWidth: 180 }}
            />
          </Col>
        </Row>

        {/* Assignment Group */}
        <Row className="align-items-end mb-3">
          <Col sm={4} className="text-sm-end fw-semibold">
            <Form.Label htmlFor="wd-group" className="m-0">Assignment Group</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS" style={{ maxWidth: 260 }}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Display Grade as */}
        <Row className="align-items-end mb-3">
          <Col sm={4} className="text-sm-end fw-semibold">
            <Form.Label htmlFor="wd-display-grade-as" className="m-0">Display Grade as</Form.Label>
          </Col>
          <Col sm={8}>
            <Form.Select id="wd-display-grade-as" defaultValue="PERCENT" style={{ maxWidth: 260 }}>
              <option value="PERCENT">Percentage</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Submission Type and Online Entry Options */}
        <Row className="mb-4">
          <Col sm={4} className="text-sm-end fw-semibold">
            <Form.Label htmlFor="wd-submission-type" className="m-0">Submission Type</Form.Label>
          </Col>
          <Col sm={8}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" defaultValue="ONLINE" style={{ maxWidth:260 }} className="mb-3">
                <option value="ONLINE">Online</option>
              </Form.Select>

              <div className="fw-semibold mb-2">Online Entry Options</div>
              <div className="d-flex flex-column gap-2">
                <Form.Check id="wd-text-entry" type="checkbox" label="Text Entry" />
                <Form.Check id="wd-website-url" type="checkbox" label="Website URL" defaultChecked />
                <Form.Check id="wd-media-recordings" type="checkbox" label="Media Recordings" />
                <Form.Check id="wd-student-annotation" type="checkbox" label="Student Annotation" />
                <Form.Check id="wd-file-upload" type="checkbox" label="File Uploads" />
              </div>
            </div>
          </Col>
        </Row>

        {/* Assign and Dates (calendar icon is purely visual) */}
        <Row className="mb-4">
          <Col sm={4} className="text-sm-end fw-semibold">
            <Form.Label htmlFor="wd-assign-to" className="m-0">Assign</Form.Label>
          </Col>
          <Col sm={8}>
            <div className="border rounded p-3">
              <div className="fw-semibold mb-2">
                <Form.Group controlId="wd-assign-to">
                  <Form.Label className="fw-semibold">Assign to</Form.Label>
                  <Form.Control defaultValue="Everyone" />
                </Form.Group>
              </div>

              {/* Due */}
              <div className="mb-3" style={{ maxWidth: 300 }}>
                <Form.Label htmlFor="wd-due-date" className="fw-semibold">Due</Form.Label>
                <InputGroup>
                  <Form.Control
                    id="wd-due-date"
                    type="date"
                    defaultValue={assignment.dueDate}
                  />
                  <InputGroup.Text aria-hidden="true" title="Calendar">
                    <BsCalendar3 />
                  </InputGroup.Text>
                </InputGroup>
              </div>

              {/* Available From and Until */}
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label htmlFor="wd-available-from" className="fw-semibold">Available from</Form.Label>
                  <InputGroup>
                    <Form.Control
                      id="wd-available-from"
                      type="date"
                      defaultValue={assignment.availableFrom}
                    />
                    <InputGroup.Text aria-hidden="true" title="Calendar">
                      <BsCalendar3 />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label htmlFor="wd-available-until" className="fw-semibold">Until</Form.Label>
                  <InputGroup>
                    <Form.Control
                      id="wd-available-until"
                      type="date"
                      defaultValue={assignment.availableUntil}
                    />
                    <InputGroup.Text aria-hidden="true" title="Calendar">
                      <BsCalendar3 />
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        <div className="d-flex justify-content-end gap-2">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-light">Cancel</Link>
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
        </div>
      </Form>
    </div>
  );
}
