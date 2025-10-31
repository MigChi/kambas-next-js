/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, MouseEvent } from "react";
import Link from "next/link";
import {
  Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enroll, unenroll } from "../Enrollments/reducer"; 

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer); 

  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const [showAll, setShowAll] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/NU_RGB_Notched-N_motto_RB.png",
    description: "New Description",
  });

  const isEnrolled = (courseId: string) =>
    !!currentUser &&
    enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === courseId
    );

  const enrolledCourses = currentUser
    ? courses.filter((c: any) => isEnrolled(c._id))
    : [];

  const visibleCourses = showAll ? courses : enrolledCourses;

  const handleEnrollToggle = (e: MouseEvent, courseId: string) => {
    e.preventDefault(); 
    e.stopPropagation();
    if (!currentUser) return;
    if (isEnrolled(courseId)) {
      dispatch(unenroll({ user: currentUser._id, course: courseId }));
    } else {
      dispatch(enroll({ user: currentUser._id, course: courseId }));
    }
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center">
        <h1 id="wd-dashboard-title" className="me-auto">Dashboard</h1>
        <button
          className="btn btn-primary"
          id="wd-enrollments-toggle"
          onClick={() => setShowAll((v) => !v)}
          title={showAll ? "Show only my enrollments" : "Show all courses"}
        >
          Enrollments
        </button>
      </div>

      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />

      {!currentUser && (
        <div className="text-muted mb-3">
          Sign in to manage enrollments and see your courses.
        </div>
      )}

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((course: any) => {
            const enrolled = isEnrolled(course._id);
            return (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg src={course.image} variant="top" width="100%" height={160} />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </CardText>

                      <div className="d-flex align-items-center">
                        <Button variant="primary">Go</Button>

                        {currentUser && (
                          <button
                            className={`btn ms-2 ${enrolled ? "btn-danger" : "btn-success"}`}
                            onClick={(event) => handleEnrollToggle(event, course._id)}
                            id={`wd-${enrolled ? "unenroll" : "enroll"}-${course._id}`}
                          >
                            {enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}

                        {isFaculty && (
                          <>
                            <Button
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(deleteCourse(course._id));
                              }}
                              className="btn btn-danger float-end ms-auto"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </Button>
                            <Button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </Button>
                          </>
                        )}
                      </div>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

