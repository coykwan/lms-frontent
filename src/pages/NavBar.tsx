import { Link } from "react-router-dom";
import { siteMap } from "sitemap";

// export function NavBar () {
//     return (
//       <nav>
//           <Link to="/">Home</Link> |{" "}
//         <ul>
//           <Link to="/admin/course">Courses</Link> |{" "}
//           <Link to="/admin/assessment">Assessments</Link> |{" "}
//         </ul>
//       </nav>
//     );
//   }


export function NavBar() {
    return (
      <nav>
        <Link to={siteMap.root}>Home</Link>
        <ul>
          <Link to={siteMap.admin.course}>Courses</Link>
          {" "}
          <Link to={siteMap.admin.assessment}>Assessments</Link>
        </ul>
      </nav>
    );
  }