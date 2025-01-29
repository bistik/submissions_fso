import Header from "./Header"
import Content from "./Content"

const Course = ({course}) => {
    const total = course.parts.reduce((acc, current) => {
        return acc + current.exercises;
    }, 0)

    return (
        <>
        <Header course={course} />
        <Content course={course} />
        <b>total of {total} exercises</b>
        </>
    )
}

export default Course