import React from "react";
import ClassList from "../Class/ClassList";
import Button from "@mui/material/Button";

const CoursesPage = () => {
    return (
        <div>
            <h2>Các Khóa học</h2>
            <Button variant="outlined">Thêm Khóa học</Button>
            <ClassList/>
        </div>
    );
};

export default CoursesPage;
