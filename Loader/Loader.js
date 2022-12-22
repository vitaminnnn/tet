import { ThreeCircles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div>
      <ThreeCircles
        height="250"
        width="250"
        color="#ff751d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  )
}

export default Loader
