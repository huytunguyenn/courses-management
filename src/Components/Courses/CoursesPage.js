import React, {useEffect, useState} from "react";
import ClassList from "../Class/ClassList";
import FormDialog from "./FormDialog";
import { useSelector, useDispatch } from 'react-redux';
import { courseActions } from '../../redux/actions/courseAction'

const CoursesPage = (props) => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    //const [courses, setCourses] = useState([]);
    const courses = useSelector(state => state.courses)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     fetch(process.env.REACT_APP_URI_CLASSES)
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         );
    // }, []);

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
        dispatch(courseActions.createCourse(newCourse));   // trả ra object với newCourse kẹp thêm type, rồi dispatch
    }

    return (
        <div>
            <h2>Các Khóa học</h2>
            <FormDialog title='Thêm khóa học' handleOnSubmit={handleOnSubmit}/>
            <ClassList
                items={courses}
            />
        </div>
    );
};


export default CoursesPage;
