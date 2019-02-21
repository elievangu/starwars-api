//npm import
import { connect } from "react-redux";

//local import
import Chart from "../Components/UI/Chart";

const mapStateToProps = (state) => {
  return {
    chartData: state.chartData
  }
}

const ChartApp = connect(
  mapStateToProps,
  null
)(Chart);

export default ChartApp;