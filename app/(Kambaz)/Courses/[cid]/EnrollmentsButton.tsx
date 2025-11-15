/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { unenroll, enroll } from "../../Enrollments/reducer";
import {
  unenrollUserFromCourse,
  enrollUserInCourse,
} from "../../Enrollments/client";
import { useParams } from "next/navigation";
import { setCourses } from "../reducer";
import * as coursesClient from "../client";

type Props = {
  courseId?: string;
};

export default function EnrollmentsButton({ courseId }: Props) {
  const params = useParams() as { cid?: string };
  const cid = courseId ?? params.cid;
  const dispatch = useDispatch();

  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const { enrollments } = useSelector((s: any) => s.enrollmentsReducer);

  if (!currentUser || !cid) return null;

  const userId = currentUser._id;
  const isEnrolled = enrollments.some(
    (e: any) => e.user === userId && e.course === cid
  );

  const refreshMyCourses = async () => {
    const myCourses = await coursesClient.findMyCourses();
    dispatch(setCourses(myCourses ?? []));
  };

  const handleEnroll = async () => {
    await enrollUserInCourse(userId, cid);
    dispatch(enroll({ user: userId, course: cid }));
    await refreshMyCourses();
  };

  const handleUnenroll = async () => {
    await unenrollUserFromCourse(userId, cid);
    dispatch(unenroll({ user: userId, course: cid }));
    await refreshMyCourses();
  };

  return isEnrolled ? (
    <Button variant="danger" onClick={handleUnenroll}>
      Unenroll
    </Button>
  ) : (
    <Button variant="primary" onClick={handleEnroll}>
      Enroll
    </Button>
  );
}
