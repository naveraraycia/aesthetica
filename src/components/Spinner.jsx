import { PuffLoader } from 'react-spinners'

function Spinner() {
  return (
    <>
      <div className="h-100 w-100 d-flex justify-content-center align-items-center">
      <PuffLoader
        color='#f5f5f5'
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    </>
  )
}

export default Spinner