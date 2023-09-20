import { LineChart as LChart, Line } from "recharts";

const LineChart = () => {
  const subjectMarks = [
    {
      student_id: 1,
      name: "Student 1",
      math_marks: 85,
      physics_marks: 78,
      chemistry_marks: 90,
    },
    {
      student_id: 2,
      name: "Student 2",
      math_marks: 92,
      physics_marks: 88,
      chemistry_marks: 85,
    },
    {
      student_id: 3,
      name: "Student 3",
      math_marks: 78,
      physics_marks: 76,
      chemistry_marks: 82,
    },
    {
      student_id: 4,
      name: "Student 4",
      math_marks: 88,
      physics_marks: 85,
      chemistry_marks: 91,
    },
    {
      student_id: 5,
      name: "Student 5",
      math_marks: 95,
      physics_marks: 90,
      chemistry_marks: 88,
    },
    {
      student_id: 6,
      name: "Student 6",
      math_marks: 72,
      physics_marks: 68,
      chemistry_marks: 75,
    },
    {
      student_id: 7,
      name: "Student 7",
      math_marks: 83,
      physics_marks: 79,
      chemistry_marks: 87,
    },
    {
      student_id: 8,
      name: "Student 8",
      math_marks: 89,
      physics_marks: 91,
      chemistry_marks: 93,
    },
    {
      student_id: 9,
      name: "Student 9",
      math_marks: 94,
      physics_marks: 92,
      chemistry_marks: 96,
    },
    {
      student_id: 10,
      name: "Student 10",
      math_marks: 80,
      physics_marks: 75,
      chemistry_marks: 81,
    },
    {
      student_id: 11,
      name: "Student 11",
      math_marks: 85,
      physics_marks: 83,
      chemistry_marks: 87,
    },
    {
      student_id: 12,
      name: "Student 12",
      math_marks: 77,
      physics_marks: 74,
      chemistry_marks: 79,
    },
    {
      student_id: 13,
      name: "Student 13",
      math_marks: 91,
      physics_marks: 87,
      chemistry_marks: 92,
    },
    {
      student_id: 14,
      name: "Student 14",
      math_marks: 82,
      physics_marks: 79,
      chemistry_marks: 86,
    },
    {
      student_id: 15,
      name: "Student 15",
      math_marks: 76,
      physics_marks: 73,
      chemistry_marks: 78,
    },
  ];

  return (
    <div className="ml-12">
      <LChart width={700} height={400} data={subjectMarks}>
        <Line dataKey="math_marks" stroke="green"></Line>
        <Line dataKey={"physics_marks"} stroke="red"></Line>
        <Line dataKey={"chemistry_marks"} stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
