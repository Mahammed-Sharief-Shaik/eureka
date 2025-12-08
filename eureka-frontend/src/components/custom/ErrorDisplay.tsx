const ErrorDisplay = ({message } : {message : string} ) => {

  return (
    <p className='text-error'>
        {`Error : ${message}`}
    </p>
  )
}

export default ErrorDisplay