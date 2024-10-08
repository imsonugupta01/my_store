// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import cartlogo from '../Components/assets/cartlogo.png';
// import profilelogo from '../Components/assets/profilelogo.png';
// import applogo from '../Components/assets/applogo.png';
// import { auth, db } from '../FirebaseConfigs/firebaseConfigs';
// import { collection, getDocs, query, where } from 'firebase/firestore';


// const Navbar = () => {
//     function GetCurrentUser() {
//         const [user, setUser] = useState("");
//         // const usersCollectionRef = collection(db, "users");
//         useEffect(() => {
//             auth.onAuthStateChanged(userlogged => {
//                 if (userlogged) {
//                     const getUsers = async () => {
//                         const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
//                         const data = await getDocs(q);
//                         setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//                     };
//                     getUsers();
//                 }
//                 else {
//                     setUser(null);
//                 }
//             })
//         }, [])
//         return user;
//     }
//     const loggeduser = GetCurrentUser();

//     const navigate = useNavigate();
//     const handleLogout = () => {
//         auth.signOut().then(() => {
//             navigate("/login");
//         });
//     }

//     const [cartdata, setcartdata] = useState([]);
//     if (loggeduser) {
//         const getcartdata = async () => {
//             const cartArray = [];
//             const path = `cart-${loggeduser[0].uid}`;
//             getDocs(collection(db, path)).then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                     cartArray.push({ ...doc.data(), id: doc.id });
//                 });
//                 setcartdata(cartArray);
//             }).catch(console.error);
//         }
//         getcartdata();
//     }

//     return (
//         <div>
//             <div className='navbar'>
//                 <div className="LeftContainer">
//                     <img src={applogo} alt="App Logo" />
//                 </div>
//                 <div className="RightContainer">
//                     {!loggeduser && <nav>
//                         <Link to='/'><button>Home</button></Link>
//                         <Link to="/orders"><button>Orders</button></Link>
//                         {/* <div className='cart-btnse'>
//                             <img src={search} alt="Cart Logo" />
//                              <span className='cart-icon-css'>0</span> 
//                         </div> */}
//                         <Link to='/signup'><button>Register</button></Link>
//                         <Link to='/login'><button>Login</button></Link>
//                         <div className='cart-btn'>
//                             <img src={cartlogo} alt="Cart Logo" />
//                             <span className='cart-icon-css'>0</span>
//                         </div>
//                         <Link to="/userprofile">
//                             <img src={profilelogo} className='profile-icon' alt="Profile Logo" />
//                         </Link>
//                     </nav>}

//                     {loggeduser && <nav>
//                         <Link to='/'><button>Home</button></Link>
//                         <Link to="/orders"><button>Orders</button></Link>
//                         <Link to='/sellproduct'><button>Admin</button></Link>
//                         <div className='cart-btn'>
//                             <Link to='/cartdata'><img src={cartlogo} alt="Cart Logo" /></Link>
//                             <button className='cart-icon-css'>{cartdata.length}</button>
//                         </div>
//                         <Link to="/userprofile">
//                             <img src={profilelogo} className='profile-icon' alt="Profile Logo" />
//                         </Link>
//                         <button className='logout-btn' onClick={handleLogout}>Logout</button>
//                     </nav>}
//                 </div>
//             </div>
//             <div className='product-types'>
                
//                 <Link to="/product-type/mobile"><button>Mobiles</button></Link>
//             <Link to="/product-type/laptop"><button>Laptops</button></Link>
//             <Link to="/product-type/camera"><button>Cameras</button></Link>
//             <Link to="/product-type/shoes"><button>Shoes</button></Link>
//             </div>
//         </div>
//     );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import cartlogo from '../Components/assets/cartlogo.png';
import profilelogo from '../Components/assets/profilelogo.png';
// import applogo from '../Components/assets/applogo.png';
// import applogo from "../Components/assets/hk412bQf.jpeg"
import { auth, db } from '../FirebaseConfigs/firebaseConfigs';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    function GetCurrentUser() {
        const [user, setUser] = useState("");
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUsers = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                } else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }

    const loggeduser = GetCurrentUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login");
        });
    }

    const [cartdata, setcartdata] = useState([]);
    useEffect(() => {
        if (loggeduser) {
            const getcartdata = async () => {
                const cartArray = [];
                const path = `cart-${loggeduser[0].uid}`;
                getDocs(collection(db, path)).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        cartArray.push({ ...doc.data(), id: doc.id });
                    });
                    setcartdata(cartArray);
                }).catch(console.error);
            }
            getcartdata();
        }
    }, [loggeduser]);

    return (
        <div>
            <div className='navbar'>
                <div className="LeftContainer">
                    {/* <img src={applogo} alt="App Logo" /> */}
                    {/* <h1 style={{color:"white",marginLeft:"5%"}}>apnaStore</h1> */}
                    {/* <h1 style={{ color: "white", marginLeft: "5%", fontFamily: "cursive" }}>apnaStore</h1> */}
                    {/* <h1 style={{ color: "white", marginLeft: "5%", fontFamily: "'Brush Script MT', cursive", fontStyle: "italic" }}>apnaStore</h1> */}
                    <h1 style={{ color: "white", marginLeft: "5%", fontFamily: "'Dancing Script', cursive" }}>apnaStore</h1>


                </div>
                <div className="RightContainer">
                    <button className='sidebar-toggle' onClick={toggleSidebar}>☰</button>
                    <nav className={sidebarOpen ? 'open' : ''}>
                        {!loggeduser && <>
                            <Link to='/'><button>Home</button></Link>
                            <Link to="/orders"><button>Orders</button></Link>
                            <Link to='/signup'><button>Register</button></Link>
                            <Link to='/login'><button>Login</button></Link>
                            <div className='cart-btn'>
                                <img src={cartlogo} alt="Cart Logo" />
                                <span className='cart-icon-css'>0</span>
                            </div>
                            <Link to="/userprofile">
                                <img src={profilelogo} className='profile-icon' alt="Profile Logo" />
                            </Link>
                        </>}

                        {loggeduser && <>
                            <Link to='/'><button>Home</button></Link>
                            <Link to="/orders"><button>Orders</button></Link>
                             <Link to='/sellproduct'><button>Admin</button></Link>
                            <div className='cart-btn'>
                                <Link to='/cartdata'><img src={cartlogo} alt="Cart Logo" /></Link>
                                <button className='cart-icon-css'>{cartdata.length}</button>
                            </div>
                            <Link to="/userprofile">
                                <img src={profilelogo} className='profile-icon' alt="Profile Logo" />
                            </Link>
                            <button className='logout-btn' onClick={handleLogout}>Logout</button>
                        </>}
                    </nav>
                </div>
            </div>
            <div className='product-types'>
                <Link to="/product-type/mobile"><button>Mobiles</button></Link>
                <Link to="/product-type/laptop"><button>Laptops</button></Link>
                <Link to="/product-type/camera"><button>Cameras</button></Link>
                <Link to="/product-type/shoes"><button>Shoes</button></Link>
            </div>
        </div>
    );
}

export default Navbar;
