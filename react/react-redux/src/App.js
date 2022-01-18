import "./App.css";
import { connect } from "react-redux";
import { addNumber, subNumber} from "./store";

const App = ({quantity, addNumber, subNumber}) => {
  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span><strong>17,500</strong>원</span>

      <div id="counter-box">
        <button type="button" onClick={subNumber} disabled>MINUS</button>
        <span id="number">{quantity}</span>
        <button type="button" onClick={addNumber}>PLUS</button>
      </div>

      <div>
        총 수량 <strong id="quantity">{quantity}</strong>
      </div>

      <div>
        <strong id="total">{quantity*17500}</strong>원
      </div>

    </div>
  );
};
function mapStateToProps(state) {
  return { quantity: state };
}

const mapDisPatchToProps = (dispatch) => {
  return {
    plusNum: (text) => dispatch(addNumber(text)),
    minusNum: (text) => dispatch(subNumber(text)),
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(App);
