import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'; // Make sure these imports are correct
import UserList from './UserList';
import PageNotFound from './PageNotFound';
import TodoList from './ToDoList';
import Header from './Header';


function App() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
