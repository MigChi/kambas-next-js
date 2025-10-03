"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

      <div id="wd-dashboard-courses" style={{ marginLeft: 140 }}>
        <Row xs={1} md={5} className="g-4" style={{ columnGap: 24, rowGap: 32 }}>
          {/* 1 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/class1.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS1234 React JS
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    Full Stack software developer
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* 2 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/2345/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/calss7.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2345 Data Structures
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    Algorithms, complexity, and ADTs
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* 3 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/3456/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/class3.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS3456 Databases
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    SQL, normalization, and transactions
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* 4 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/4567/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/class4.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS4567 Operating Systems
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    Processes, threads, and scheduling
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* 5 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/5678/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/class5.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS5678 Computer Networks
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    TCP/IP, routing, and congestion control
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* 6 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/6789/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/class6.jpg" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS6789 AI Fundamentals
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    Search, logic, and planning
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* 7 */}
          <Col className="wd-dashboard-course" style={{ width: 300, flex: "0 0 300px" }}>
            <Card>
              <Link href="/Courses/7890/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/class4.webp" width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS7890 HCI
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: 100 }}>
                    Designing usable interfaces
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}