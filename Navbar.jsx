import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-darkGray text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">EduAssist</Link>
      <div>
        <Link to="/student-dashboard" className="mr-4">Student</Link>
        <Link to="/tutor-dashboard">Tutor</Link>
      </div>
    </nav>
  );
}

export default Navbar;