import {Routes, Route} from 'react-router-dom'
import Form from "../Pages/Form"
function AllRoutes (){
    return(
    <Routes>
        <Route path="/contact" element={<Form/>}/>
    </Routes>
    )
}

export default AllRoutes