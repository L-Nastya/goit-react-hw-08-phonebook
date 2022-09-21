import { React, Fragment, useEffect } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AllRoutes from "./AllRoutes/allRoutes";

import { useDispatch } from "react-redux";

import { current } from "../redux/auth/auth-operations";


const App = () => {
 const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current())
  }, [dispatch]);

  
    return (
       <Fragment>
      <AllRoutes/>
      <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          
/>
      </Fragment>
  );
  }
 
export default App;



