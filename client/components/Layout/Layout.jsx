import React from 'react'; 
import PropTypes from 'prop-types';
import NavBar from "./NavBar";
import Footer from './Footer';
import Innerbanner from './Innerbanner';
import { useRouter } from 'next/router';
import Head from 'next/head';


const propTypes = {};
const defaultProps = {};
const Layout = ({children}) => {
    const router = useRouter();
    console.log("/////////////////////")
    console.log('dfghjk', router,children, "===");
    return (
        <>
        <Head>  
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        </Head>

            <div id="wrapper" className="clearfix">
            <NavBar />
            {/* {router.pathname !== '/' && <Innerbanner/>} */}
            {children}
            <Footer></Footer>
            </div>
        </>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;


export default Layout;