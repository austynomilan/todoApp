import './Counter.css'

export default function Counter(props) {
    const classes = 'counter ' + props.className
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}
