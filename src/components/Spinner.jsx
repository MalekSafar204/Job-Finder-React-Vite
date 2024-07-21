/* eslint-disable no-unused-vars */
import ClipLoader from "react-spinners/ClipLoader";
import PropType from 'prop-types';

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader color="#4338ca" loading = {loading} cssOverride={override} size={150} />
  )
}
Spinner.propTypes = {
  loading: PropType.bool.isRequired
}

export default Spinner;