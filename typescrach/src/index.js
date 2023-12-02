import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const  ImageCard = (props) => {
  const [spans, setSpans] = React.useState(0);
  const imageRef = React.useRef(null);

  const calculateSpans = () => {
    const height = this.imageRef.current.clientHeight;
    setSpans(Math.ceil(height/10));
  }

  // コンポーネントをレンダーする度にコンポーネント全体のスナップショットを撮り、その差分を使って動く
  React.useEffect(() => {
    imageRef.current.addEventListener('load', calculateSpans);
  });

  const {description, urls} = props.image;
  
  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
