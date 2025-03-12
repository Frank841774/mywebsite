function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightGray">
      <h1 className="text-4xl font-bold text-teal">Welcome to EduAssist</h1>
      <p className="text-lg text-darkGray mt-2">Get help with assignments from expert tutors!</p>
      <div className="mt-4">
        <a href="/student-dashboard" className="px-4 py-2 bg-teal text-white rounded-md">Student Dashboard</a>
        <a href="/tutor-dashboard" className="ml-4 px-4 py-2 bg-darkGray text-white rounded-md">Tutor Dashboard</a>
      </div>
    </div>
  );
}

export default Home;