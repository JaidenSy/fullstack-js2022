const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
  <>
    <p>
      {props.part1} 
    </p>
    <p>
      {props.part2} 
    </p>
    <p>
      {props.part3} 
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
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App