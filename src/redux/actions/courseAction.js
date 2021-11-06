import { classTypes } from '../../constants'

function createCourse(course) {
    return {
        type: classTypes.CREATE_COURSE,
        course: course
    };
}

export const courseActions = {
    createCourse
}