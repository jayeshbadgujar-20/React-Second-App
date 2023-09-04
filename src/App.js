// import logo from './logo.svg';
// import { PureComponent } from 'react';
import './App.css';
import CountApp from './AxiosData/CountApp'
// import PostForm from './AxiosData/PostForm';
// import PostList from './AxiosData/PostList';
// import MemoComp from './Components/MemoComp';
// import ParentComp from './Components/ParentComp';
// import PureComp from './Components/PureComp'
// import LifeCycle1 from './LifeCycle/LifeCycle1';
// import Stylesheet from './styles/Stylesheet';
// import InlineCSS from './styles/InlineCSS';
// import '../src/styles/appStyle.module.css';
// import '../src/styles/appStyle.css'
// import style from '../src/styles/appStyle.module.css'
// import Form1 from './Forms/Form1';

function App() {
  return (
    <>
      <div className="App">
        {/* <h2 className='error '>This is error text</h2>
       <h2 className={style.success}>This is success text </h2>
       <Stylesheet primary ={true} />
       <InlineCSS /> 
        <Form1 />
           <LifeCycle1/>  
          <PureComp />  
          <ParentComp/>
          <MemoComp />
          <PostList /> 
          <PostForm />  */}
          <CountApp />
      </div>

    </>
  );
}

export default App;
