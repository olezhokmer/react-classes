import React from 'react';
import {
    Link
} from "react-router-dom";

class Landing extends React.Component {
    
    constructor(props : any) {
      super(props);   
    }
    
    render() {
      return (
        <div>
        <main className="lg:flex lg:justify-center mx-auto  px-4  sm:px-6  bg-blue-200 lg:px-8 ">
            <div className="flex p-8 h-block items-center text-center">
                <div className="m-auto">
                    <h1 className="text-3xl tracking-tight font-bold text-gray-900 ">
                        <span className="">Best weather app.</span>
                    </h1>
                      
                    <div className="mt-8">
                        <Link to="/forecast" className="px-8 py-3 border border-transparent font-medium rounded-3xl text-white bg-black py-4 text-lg px-10">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-8 flex items-center justify-center">
                <img className="" src="./images/space.png" />
            </div>
        </main>
        <main className="w-full mx-auto text-center p-8 px-4  sm:px-6">
            <h1 className="text-3xl tracking-tight font-bold text-gray-900 ">
                <span className="block">Our benefits</span>
            </h1>
            <div className="">
                <div className="p-8">
                    <img className="inline object-cover w-32 h-32 mr-2 rounded-full" src="./images/earth.png" />
                    <h1 className="text-3xl tracking-tight text-gray-900 ">
                        <span className="block">Info about weather in whole world</span>
                    </h1>
                </div>
                <div className="p-8">
                    <img className="inline object-cover w-32 h-32 mr-2 rounded-full" src="./images/accuracy.png" />
                    <h1 className="text-3xl tracking-tight text-gray-900 ">
                        <span className="block">The most accuracy weather</span>
                    </h1>
                </div>
            </div>
        </main>
    </div>
      );
    }
}
export default Landing;