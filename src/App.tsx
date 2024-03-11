import style from './App.module.scss'
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
  const isAdmin = user ? user.role === Role.admin : false
  async function getUser() {
    try{
      const response = await fetch('http://localhost:1000/user/1');
      const user = await response.json();
      console.log(user)
      setUser(user)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  // @ts-ignore
  const PrivateRoute = ({children}) => {
    return isAdmin ? <>{children}</> : <Navigate to={'/Home'} />
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <Provider store={store}>
      <nav className={style.nav}>
        <NavLink className={style.nav_link} to={'/'}>home</NavLink>
        <NavLink className={style.nav_link} to={'/dashboard'}>dashboard</NavLink>
        <NavLink className={style.nav_link} to={'/login'}>login</NavLink>
        <NavLink className={style.nav_link} to={'/signup'}>signup</NavLink>
        <NavLink className={style.nav_link} to={'/searchResult'}>search result</NavLink>
        <NavLink className={style.nav_link} to={'/collection/id'}>collection</NavLink>
        { isAdmin &&  <NavLink className={style.nav_link} to={ '/private/privateOffice' }>Private office</NavLink> }
        { isAdmin && <NavLink className={style.nav_link} to={'/private/admin'}>admin panel</NavLink> }
      </nav>

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
