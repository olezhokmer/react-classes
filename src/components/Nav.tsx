import React from 'react';
import {
    Link
} from "react-router-dom";

class Nav extends React.Component {


    
    loggedIn: boolean = false;
    sideBar : any;
    email : string | null = null;

    constructor(props : any) {
      super(props);
      this.sideBar = React.createRef();
     
    }
    showHide(ref : any){
        ref.current.style.display == '' || ref.current.style.display == 'none' ? 
        this.hide(ref) : this.show(ref);
    }
    logout(){
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.reload();
    }
    hide(ref: any){
        ref.current.style.display = 'none';
    }
    show(ref: any){
        ref.current.style.display = 'block';
    }
    render() {
        this.email = localStorage.getItem('email');
        if(this.email){
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
        let profileBlock = !this.loggedIn ? (
            <Link to="/login" className="inline-block text-lg px-4 py-2 leading-none border rounded mt-4 lg:mt-0">
                        Sign in
            </Link>
        ) : (
            <div>
                {this.email}
                <button onClick={this.logout} className="inline-block text-lg px-4 py-2 ml-2 leading-none border rounded mt-4 lg:mt-0">
                        Log out
                </button>
            </div>
        )
      return (
          <div>
            <nav className="flex items-center justify-between flex-wrap p-4 shadow-lg">
                <div className="flex items-center flex-shrink-0 mr-6 ">
                    <Link to="/"><img className="fill-current h-8 w-8 mr-2" width="154" height="154" src="./images/logo.png" /></Link>
                    <Link to="/" className="font-semibold text-xl tracking-tight hidden lg:block">Weather</Link>
                </div>
                <div className="block lg:hidden">
                    <button id="side-bar-open" className="flex items-center " onClick={() => this.show(this.sideBar)}>
                        <img  src="./images/menu.svg" />
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block">
                    <div className="text-sm lg:flex-grow ">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">Home</Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    {profileBlock}
                </div>
            </nav>
            <div>
                <div ref={this.sideBar} className="hidden">
                    <div className="flex absolute top-0 right-0 h-screen w-full object-right justify-end">
                        <div className="fixed h-screen w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="flex justify-end" >
                                <a id="close-side-bar" onClick={() => this.hide(this.sideBar)}><img src="./images/close.svg" width="40px" height="40px" /></a>
                            </div>
                            
                            <div className="p-4 ">
                                <div className="items-center text-center">
                                    {profileBlock}
                                </div>
                                <div className="">
                                    <Link to="/" className="font-semibold text-xl tracking-tight">Weather</Link>
                                </div>
                                <div className="">
                                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>     
      );
    }
}
export default Nav;
