import { BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import FormCandidatura from "./pages/FormCandidatura.jsx";
import Bilheteira from "./pages/Bilheteira.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<TemplatePage/>}>*/}
                <Route index element={<Homepage/>}/>
                <Route path="/formcandidatura" element={<FormCandidatura/>}/>
                <Route path="/bilheteira" element={<Bilheteira/>}/>
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App;