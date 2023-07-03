import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import Route from './components/Route';
import Sidebar from './components/Siderbar';

function App() {


    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/button">
                    <ButtonPage/>
                </Route>
                <Route path="/dropdown">
                    <DropdownPage/>
                </Route>
                <Route path="/">
                    <DropdownPage/>
                </Route>
                <Route path="/modal">
                    <ModalPage/>
                </Route>
                <Route path="/table">
                    <TablePage/>
                </Route>
                <Route path="/counter">
                    <CounterPage/>
                </Route>

            </div>
        </div>

    )
}

export default App;