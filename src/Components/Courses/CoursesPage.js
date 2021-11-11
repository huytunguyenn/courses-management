import React, {useEffect} from "react";
import Courses from "./Courses";
import FormDialog from "./FormDialog";
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../../redux/actions/courseAction'

const CoursesPage = (props) => {
    const courses = useSelector(state => state.courses)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(courseActions.loadCourses())
    }, [dispatch])


    const handleOnSubmit = async (newCourse) => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(newCourse)
        // };
        // const response = await fetch(process.env.REACT_APP_URI_CLASSES, requestOptions);
        // const data = await response.json();
        // console.log(data)
        //setCourses([...courses, newCourse]);

        dispatch(courseActions.createCourse(newCourse)); // trả ra object {newCourse, type} rồi dispatch tới reducer
    }

    return (
        <div>
            <h2>Các Khóa học</h2>
            <FormDialog title='Thêm khóa học' handleOnSubmit={handleOnSubmit}/>
            <Courses
                items={courses}
            />
        </div>
    );
};


export default CoursesPage;
