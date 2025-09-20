import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />

      <div id="wd-dashboard-courses">
        <ul>
            <li>
                <div className="wd-dashboard-course1">
            <Link href="/Courses/1234" className="wd-dashboard-course-link">
                <Image src="/images/class1.jpg" width={200} height={150} alt=""/>
                <div>
                <h5> CS1234 React JS </h5>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <button> Go </button>
                </div>
            </Link>
                </div>
            </li>
            <li>
                <div className="wd-dashboard-course2">
                <Link href="/Courses/3333" className="wd-dashboard-course-link">
                    <Image src="/images/image2.jpg" width={200} height={150} alt=""/>
                    <div>
                    <h5> CS3333 JS </h5>
                    <p className="wd-dashboard-course-title">
                        javascript fundies
                    </p>
                    <button> Go </button><br />
                    </div>
                </Link>
                </div>
            </li>
            <li>
                <div className="wd-dashboard-course3">
            <Link href="/Courses/1233" className="wd-dashboard-course-link">
                <Image src="/images/class3.jpg" width={200} height={150} alt=""/>
                <div>
                <h5> CS1233 python </h5>
                <p className="wd-dashboard-course-title">
                    python fundies
                </p>
                <button> Go </button><br />
                </div>
            </Link>
                </div>
            </li>
            <li>
                <div className="wd-dashboard-course4">
            <Link href="/Courses/3200" className="wd-dashboard-course-link">
                <Image src="/images/class4.jpg" width={200} height={150} alt=""/>
                <div>
                <h5> CS3200 OOD </h5>
                <p className="wd-dashboard-course-title">
                    object oriented Design
                </p>
                <button> Go </button><br />
                </div>
            </Link>
                </div>
            </li>
            <li>
                <div className="wd-dashboard-course5">
            <Link href="/Courses/3233" className="wd-dashboard-course-link">
                <Image src="/images/class5.jpg" width={200} height={150} alt=""/>
                <div>
                <h5> CS3233 Engienes </h5>
                <p className="wd-dashboard-course-title">
                    learn to make Engienes
                </p>
                <button> Go </button><br />
                </div>
            </Link>
                </div>
            </li>
            <li>
                <div className="wd-dashboard-course6">
            <Link href="/Courses/1111" className="wd-dashboard-course-link">
                <Image src="/images/class6.jpg" width={200} height={150} alt=""/>
                <div>
                <h5> THTR1111 Acting </h5>
                <p className="wd-dashboard-course-title">
                    learn to act
                </p>
                <button> Go </button><br />
                </div>
            </Link>
                </div>
            </li>
            <li>
                <div className="wd-dashboard-course6">
            <Link href="/Courses/1112" className="wd-dashboard-course-link">
                <Image src="/images/calss7.jpg" width={200} height={150} alt=""/>
                <div>
                <h5> COMM1112 talking </h5>
                <p className="wd-dashboard-course-title">
                    yap sesh 101
                </p>
                <button> Go </button><br />
                </div>
            </Link>
                </div>
            </li>
        </ul>
      </div>
    </div>
);}
