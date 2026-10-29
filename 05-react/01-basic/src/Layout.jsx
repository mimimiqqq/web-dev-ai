import Hrader from "./Header.jsx";
import{Outlet} from  "react-router";

//outlet:들어오는 주소에 맞는 페이지가 들어올 빈자리
//   /-><Dashboard />가 Outlet 자리에 
//  /cars -> <Cars />가 Outlet 자리에


//모든 페이지가 같이 쓴 틀
const Layout = () =>{
    return <>
    retrun (
        <>
        <header></header></>
    )
    
    </>;
    
};
exprot default Header;