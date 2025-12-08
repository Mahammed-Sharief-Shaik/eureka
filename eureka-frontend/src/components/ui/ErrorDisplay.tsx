const ErrorDisplay = ({message } : {message : string} ) => {

  return (
    <p className='text-error'>
        {`${message}`}
    </p>
  )
}

export default ErrorDisplay