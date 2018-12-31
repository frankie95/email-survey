import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'


import Header from './Header'
const Dashboard =()=><h2>Dashboard</h2>
const SurveyNew =()=><h2>SurveyNew</h2>
const Landing =()=><h2>Landing</h2>

const App=()=>{

return(

<div className="container">
<BrowserRouter>
<div>
<Header/>
<Route path="/" component={Landing} exact></Route>
<Route path="/surveys" component={Dashboard} exact></Route>
<Route path="/surveys/new" component={SurveyNew} exact></Route>
<Route path="/" component={Landing}></Route>

</div>
</BrowserRouter>
</div>

)


}

export default App;
