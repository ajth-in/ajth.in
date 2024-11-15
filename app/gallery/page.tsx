
import { cx } from "class-variance-authority";
import Link from "next/link";

const GalleryPage = () => {
    const blogbg="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
    const images = [blogbg,blogbg,blogbg,blogbg,blogbg]
    const containerStyles= ["row-span-3 col-span-1","row-span-1 col-span-1","row-span-2 col-span-1","row-span-2 col-span-1","row-span-2 col-span-1"]
  return (
     <div className="grid p-4 lg:grid-cols-3 h-100 gap-2 lg:grid-rows-3 bg-dark">
        {images.map((image,index)=>(<div  className={cx("relative flex  border border-gray-300/20 rounded-lg bg-dark", containerStyles[index])} >
        <img
          style={{ objectFit: "cover" }}
          className="rounded-xl opacity-20 hover:opacity-70 duration-500"
          src={image}
        />
      </div>))}
      
      
    </div>
  );
};


export default GalleryPage