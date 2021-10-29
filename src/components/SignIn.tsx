import React from 'react';


class SignIn extends React.Component {
    constructor(props : any) {
      super(props);
    }
    submit(e : any){
        //e.preventDefault();
        let email = e.target[0].value;
        let pass = e.target[1].value;
        
        if(!email || !pass) return;
        localStorage.setItem('email', email);
        localStorage.setItem('password', pass);
        
    }

    render() {
        if(localStorage.getItem('email')){
            window.location.href="/";
          }
      return (
        <div className="flex flex-col items-center justify-center w-screen mt-40  ">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/" onSubmit={this.submit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                    </label>
                    <input className="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" />
                    
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                    </button>
                </div>
                
            </form>
        </div>    
      );
    }
}
export default SignIn;