// import { useState } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";

export default function AddPost() {
  // const [data,setData]=useState({});
  const navigate=Navigate();
  function handleSubmit(e){
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const url = e.target.url.value;
    // console.log(title, description , url);
  // setData({title, description , url});
  // if(data!={}){

    axios.post("http://localhost:4000/add-post", {title, description , url})
  // }
  }

  return   (  
 <div className="w-full  grid justify-center my-4">
      <div className="w-full max-w-md p-8 space-y-2 bg-blue-300  shadow-black rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Add Post</h1>
        <div className="   p-2 rounded-lg">
          <form className="space-y-2" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-2 font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="mb-2 font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="url" className="mb-2 font-medium text-gray-700">
                Image Url
              </label>
              <input
                type="text"
                id="url"
                name="url"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
      )
}
