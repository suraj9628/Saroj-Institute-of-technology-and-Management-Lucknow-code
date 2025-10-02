// Dummy data
const courses = ["B.Tech Computer Science", "BBA", "MBA", "B.Sc Physics", "Diploma in Mechanical"];
const notices = [
    "Admissions open for 2025 batch!",
    "Mid-term exams start from Oct 10",
    "Annual Fest: Nov 15-16",
    "Placement drive by Infosys on Oct 5"
];

window.onload = () => {
    const courseList = document.getElementById("courseList");
    const noticeList = document.getElementById("noticeList");

    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
    });

    notices.forEach(notice => {
        const li = document.createElement("li");
        li.textContent = notice;
        noticeList.appendChild(li);
    });
};
