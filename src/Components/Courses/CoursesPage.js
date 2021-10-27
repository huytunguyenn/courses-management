import React, {useEffect, useState} from "react";
import ClassList from "../Class/ClassList";
import Button from "@mui/material/Button";
import FormDialog from "./FormDialog";

const CoursesPage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    const fetchData = async () => {
        fetch(process.env.REACT_APP_URI_CLASSES)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }


    useEffect(() => {
        fetchData()
    }, []);

    const handleOnSubmit = async (newCourse) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCourse)
        };
        const response = await fetch(process.env.REACT_APP_URI_CLASSES, requestOptions);
        const data = await response.json();
        console.log(data)

        await fetchData()
        //setItems([...items, newCourse]);
    }

    return (
        <div>
            <h2>Các Khóa học</h2>
            <FormDialog title='Thêm khóa học' handleOnSubmit={handleOnSubmit}/>
            <ClassList items={items}/>
        </div>
    );
};

export default CoursesPage;
