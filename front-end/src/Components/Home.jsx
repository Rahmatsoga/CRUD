import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const DATA = [
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
//   {
//     image:
//       "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
//     title: "Blog Images",
//     description: "Free images for blogs",
//   },
// ];
export default function Home() {
  const [data , setData]=useState([])
  //if new data insert or update/change data then run useEffect 
useEffect(()=>{
axios
.get("http://localhost:4000")
.then((req)=>setData(res.data))
.catch((err)=>console.log(err.message))
})
  return (
    <div className="h-screen bg-slate-200 grid grid-cols-4 p-5 gap-6 ">
      {data.length > 0 &&
      data.map((post) =>{
        <div
          key={post._id}
          className="  h-auto  bg-white rounded-xl shadow-md shadow-black hover:scale-105 transition-all duration-400 m-2"
        >
          <Link >
          <img src={post.image} className="w-full rounded-t-xl" />
          <div className="p-1">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.description}</p>
          </div>
          </Link>
        </div>
      })
    }
    </div>
  );
}
