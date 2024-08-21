type ErrorProps = {
  message?: string | any
  error: {
    message: Error | any
  }
}

export const Loading = () => {
  return <p>Loading...</p>
}

export const ErrorState = (error: ErrorProps) => {
  return (
    <div>
      <p>Error: {error?.message || 'An error occured.'}</p>
    </div>
  )
}

export const NotFound = () => {
  return (
    <p>No data found.</p>
  )
}