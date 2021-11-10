import { courseTypes } from '../../constants'
import * as courseApi from '../../api/courseApi'

// action creators
function createCourse(course) {
    return {
        type: courseTypes.CREATE_COURSE,
        course
    };
}

function loadCoursesSuccess(courses){
    return {
        type: courseTypes.LOAD_COURSES_SUCCESS,
        courses
    }
}


// thunks
function loadCourses(){
    return function (dispatch){ // redux-thunk có sẵn dispatch
        return courseApi.getCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses)); // tạo action creator riêng cho hợp lý (chỉ đc dispatch khi async api call thành công)
        }).catch(err => {
            console.log('load courses err', err)
            throw err
        })
    }
}


export const courseActions = {
    createCourse,
    loadCourses
}