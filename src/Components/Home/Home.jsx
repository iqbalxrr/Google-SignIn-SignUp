
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <Link to='/'>Home</Link>
           <Link to='/login'>Login</Link>
           <Link to='/practiselogin'> Practise Login</Link>
        </div>
    );
};

export default Home;