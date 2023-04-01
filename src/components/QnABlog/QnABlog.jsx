import React from "react";
import pic1 from "../../images/props-vs-state.png";
import pic2 from "../../images/useState-hook-.png";
import pic3 from "../../images/useEffect.png";
import pic4 from "../../images/what-is-reactjs.jpg";
import "./QnABlog.css";
const QnABlog = () => {
  return (
    <>
      <div className="card-container">
        <div className="qna-card">
          <img src={pic1} alt="" />
          <h1 className="text-2xl font-bold p-5">
                1.Props Vs State
                </h1>
          <div className="p-5">
            <div className="text-2xl">
                <h2 className="font-bold">Props:</h2>
                <ul>
                  <li>
                    i. Props are used to send data and event handlers to a
                    component's children.
                  </li>
                  <li>
                    ii. Props are immutable(unchanging), it cannot be changed
                    after they have sent.
                  </li>
                  <li>iii. Props are mainly function's parameter.</li>
                  <li>iv. Passes from parent component, can be empty</li>
                </ul>
              
            </div>
            <div className="text-2xl ">
                <h2 className="font-bold">States:</h2>
                <ul>
                  <li>
                    i. To manage data within component.
                  </li>
                  <li>
                    ii. State can be modified but can't get the data from outside.
                  </li>
                  <li>iii. Data can be changed with setState or any event handlers.</li>
                  <li>iv. Need an initial value,it can be empty array, string, object etc.</li>
                </ul>
              
            </div>
          </div>
        </div>
        <div className="qna-card">
          <img src={pic2} alt="" />
          <div className="text-2xl  p-5">
          <h1 className="text-2xl font-bold">2.How does useState work?</h1>
          <h2 className="font-bold">useState() :</h2>
          <p>useState() is a React Hook that allows us to set a state to functional component.
            It initially takes as an argument and returns an array of two values, The first one is value which we want to set and second one is set/update the value of the component. The initial argument of useState can be an array or object or a string.
            Syntax of useState Hooks is: <br />
            <span className="bg-gray-200">const [state, setState] = useState(initialstate);</span> <br />
            In a simple way we can say that useState is used to set the state of a component as we want.
          </p>
          </div>
        </div>
        <div className="qna-card">
          <img src={pic3} alt="" />
          <div>
            <h1>3.Purpose of useEffect other than fetching data.</h1>
          <p>The useEffect in react js allows us to perform side effects in our components. The purpose of  useEffect other than fetching data is direct DOM updates, and timers. useEffect has two argument , first one is a callback function second argument is an empty array which is dependency. </p>
          </div>
        </div>
        <div className="qna-card">
          <img src={pic4} alt="" />
          <h1>1.Props Vs State</h1>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default QnABlog;
