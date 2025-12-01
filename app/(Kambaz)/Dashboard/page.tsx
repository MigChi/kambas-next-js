/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMyCourses } from "../Courses/reducer";
import * as client from "../Courses/client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { myCourses } = useSelector((state: any) => state.coursesReducer);

  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const [course, setCourse] = useState<any>({
    name: "",
    number: "",
    description: "",
    image: "/images/NU_RGB_Notched-N_motto_RB.png",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const fetchMyCourses = async () => {
    const courses = await client.findMyCourses();
    dispatch(setMyCourses(courses ?? []));
  };

  useEffect(() => {
    if (currentUser) {
      fetchMyCourses();
    }
  }, [currentUser]);

  const onAddCourse = async () => {
    // Creator is auto-enrolled on the server
    await client.createCourse(course);
    await fetchMyCourses();
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    // Remove from *my* courses list on the Dashboard
    dispatch(
      setMyCourses(myCourses.filter((c: any) => c._id !== courseId))
    );
  };

  const onUpdateCourse = async () => {
    const updated = await client.updateCourse(course);
    dispatch(
      setMyCourses(
        myCourses.map((c: any) => (c._id === course._id ? updated : c))
      )
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {!currentUser && (
        <div className="text-muted mb-3">Sign in to view your courses.</div>
      )}

      {currentUser && (
        <>
          <h2 id="wd-dashboard-published">
            My Courses ({myCourses.length})
          </h2>
          <hr />
        </>
      )}

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddCourse}
            >
              Add
            </button>
            <button
              className="btn btn-secondary float-end me-2"
              id="wd-update-course-click"
              onClick={onUpdateCourse}
            >
              Update
            </button>
          </h5>

          <FormControl
            className="mb-2"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />

          <FormControl
            className="mb-2"
            placeholder="Course Number"
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />

          <FormControl
            as="textarea"
            rows={3}
            className="mb-2"
            placeholder="Course Description"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />

          <hr />
        </>
      )}

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {myCourses.map((c: any) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src={c.image}
                    variant="top"
                    width="100%"
                    height={160}
                  />

                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>

                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </CardText>

                    <div className="d-flex align-items-center">
                      <button className="btn btn-primary">Go</button>

                      {isFaculty && (
                        <>
                          <Button
                            variant="warning"
                            className="ms-2"
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(c);
                            }}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            className="ms-2"
                            id="wd-delete-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              onDeleteCourse(c._id);
                            }}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </div>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
