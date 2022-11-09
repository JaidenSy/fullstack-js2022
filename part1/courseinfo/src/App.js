const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
  <>
    <p>
      {props.part1} {props.exercises1}
    </p>
    <p>
      {props.part2} {props.exercises2}
    </p>
    <p>
      {props.part3} {props.exercises3}
    </p>
  </>
  )
}
const Total = (props) => {
  return (
  <>
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development', 
    parts: [
    {
      name: 'Fundamentals of React', excercises: 10
    }, 
    {
      name: 'Using props to pass data', excercises: 7
    }, 
    {
      name: 'State of a component', excercises: 14
    }
  ]}


  return (
    <div>
      <Header course={course.name}/>
      <Content part1={course.parts[0].name} part2={course.parts[1].name} part3={course.parts[2].name}
               exercises1={course.parts[0].excercises} exercises2={course.parts[1].excercises} exercises3={course.parts[2].excercises}/>
      <Total exercises1={course.parts[0].excercises} exercises2={course.parts[1].excercises} exercises3={course.parts[2].excercises}/>
    </div>
  )
}

export default App