import './App.css'
import { useState, useEffect }          from 'react';
import { Provider }                     from 'react-redux';
import store                            from './store/store.ts';
import CollectionPage                       from './public/collectionPage/CollectionPage.tsx';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Dashboard                            from './public/dashboard/Dashboard.tsx';
import Login                            from './public/login/Login.tsx';
import SearchResultPage                 from './public/searchResultPage/SearchResultPage.tsx';
import Signup                           from './public/signup/Signup.tsx';
import AdminPanel                       from './private/adminPanel/AdminPanel.tsx';
import PrivateOffice                    from './private/privateOffice/PrivateOffice.tsx';
import Home                             from './components/Home.tsx';
import { Role } from './enum/role.enum.ts';
import { User } from './models/interfaces.user.ts';
function App() {
  const [user, setUser]: [ null | User, (value: User) => void] = useState<null | User>(null)

  async function getUser() {
    try{
      const response = await fetch('http://localhost:1000/user/12');
      const user = await response.json();
      console.log(user)
      setUser(user)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  // @ts-ignore
  const PrivateRoute = ({children}) => {
    if(!user) return
    const isAdmin = user.role === Role.admin

    return isAdmin ? <>{children}</> : <Navigate to={'/Home'} />
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <Provider store={store}>
      <h4>{'sdfgshgf'}</h4>
      <div>
        <NavLink to={'/'}>home</NavLink>
        <NavLink to={'/dashboard'}>dashboard</NavLink>
        <NavLink to={'/login'}>login</NavLink>
        <NavLink to={'/signup'}>signup</NavLink>
        <NavLink to={'/searchResult'}>search result</NavLink>
        <NavLink to={'/collection/id'}>collection</NavLink>
        { user &&  <NavLink to={ '/private/privateOffice' }>Private office</NavLink> }
        { user && <NavLink to={'/private/admin'}>admin panel</NavLink> }
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection/:id' element={<CollectionPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/searchResult' element={<SearchResultPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/private/admin' element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        <Route path='/private/privateOffice' element={<PrivateRoute><PrivateOffice /></PrivateRoute>}/>
      </Routes>
    </Provider>
  )
}

export default App
