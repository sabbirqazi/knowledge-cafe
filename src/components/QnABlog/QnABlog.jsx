import React from "react";
import pic1 from "../../images/props-vs-state.png";
import pic2 from "../../images/useState-hook-.png";
import pic3 from "../../images/useEffect.png";
import pic4 from "../../images/what-is-reactjs.jpg";
import "./QnABlog.css";
const QnABlog = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8 underline text-indigo-500">Blog For Interview Crackers</h1>
      <div className="card-container my-10 gap-20">
      <div className="two-card">
        <div className="qna-card bg-base-100 shadow-xl">
          <img src={pic1} alt="" />
          <h1 className="text-2xl font-bold px-8 py-5">
                1.Props Vs State
                </h1>
          <div className="p-8">
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
        <div className="qna-card bg-base-100 shadow-xl">
          <img src={pic2} alt="" />
          <div className="text-2xl  p-8">
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
        </div>
        <div className="two-card">
        <div className="qna-card bg-base-100 shadow-xl">
          <img src={pic3} alt="" />
          <div className="text-2xl  p-8">
            <h1 className="text-2xl font-bold">3.Purpose of useEffect other than fetching data.</h1>
          <p>The useEffect in react js allows us to perform side effects in our components. The purpose of  useEffect other than fetching data are direct DOM updates, Showing pop-up when event handler is triggered , logging user informations etc.  useEffect has two argument , first one is a callback function second argument is an empty array which is dependency. </p>
          </div>
        </div>
        <div className="qna-card bg-base-100 shadow-xl">
          <img src={pic4} alt="" />
         <div className="text-2xl  p-8">
         <h1 className="text-2xl font-bold">4. How Does React work?</h1>
          <p>React JS is a modern Javascript library which gives us the facility of reusable component and building user interfaces. <br />
          React uses the DOM and make copy of it and uses it when we change any updates on our code which is called virtual DOM. React virtual DOM converted our code into real DOM ,to make it happen react use DIFF Algorithm.To build UI in react we use JSX(Javascript XML), JSX is simply syntactic sugar for creating very specific JavaScript objects.
          ReactDOM render it with the help of diff Algorithm virtual DOM to real DOM when any changes occurs.</p>
         </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default QnABlog;
