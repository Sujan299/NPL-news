import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom'
import GetCategory from '../../components/user/GetCategory';
import GetAuthor from '../../components/user/GetAuthor';
// import { toast } from 'react-toastify'

// displays all the posts
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const setData = () => {
      const data = localStorage.getItem("user-info");
      const userData = JSON.parse(data);
      setUser(userData);
    }
    setData();
    console.log(user);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://npl-news.onrender.com/posts/get_all_posts/",
          {
            withCredentials: true
          }
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err, "I am getting an error")
      }
    }
    fetchData();
  }, []);





  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/home");
    window.location.reload();
    // const notify = () => { toast.success("Logout successfully !") }
    // notify();
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      {/* <div className="h-48 bg-gradient-to-r rounded-3xl flex flex-col justify-center items-center text-center bg-light_white">
        <h3 className="text-lg font-semibold mb-4 tracking-widest opacity-65">WELCOME TO BULETIN</h3>
        <div className="text-2xl font-semibold">
          <h2>CRAFT NARRATIVES THAT IGNITE</h2>
          <h2>INSPIRATION, KNOWLEDGE, AND ENTERTAINMENT</h2>
        </div>
      </div> */}

      {/* Featured Post Section */}
      <div className="flex h-80 mt-16 justify-between gap-12">
        <div className="flex-1 bg-gray-200 rounded-xl overflow-hidden">
          <img src={posts[3]?.image} alt="Featured Post" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-around text-gray-700">
          <div className="opacity-65 my-1">{posts[3]?.date}</div>
          <h1 className="text-4xl font-semibold my-2">{posts[3]?.title}</h1>
          <div className="rounded-lg my-2 opacity-75" dangerouslySetInnerHTML={{ __html: posts[3]?.content }} />
          {/*<div className="text-red-600 my-1">{posts[3]?.category}</div> */}
        </div>
      </div>

      {/* Latest News Section */}
      <div className="mt-16 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Latest News!</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post._id}`}>
            <div className="rounded-md bg-white shadow-lg overflow-hidden transform transition-all hover:scale-105 my-2">
              <img src={post.image} className="rounded-t-lg h-48 w-full object-cover" alt={post.title} />
              <div className="px-4 py-2">
                <div className="opacity-65 my-1">{post.date}</div>
                <h1 className="text-xl font-semibold text-gray-800 my-2 h-40">{post.title}</h1>
                {/* <div className="text-sm opacity-75" dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                <div className="text-red-600 my-1 flex justify-between">
                  <div className='flex'>
                    <span>Category :</span><span><GetCategory category_id={post.category} /></span>
                  </div>
                  <div className='flex'>
                    <span>By :</span><span>
                      <GetAuthor authorId={post.author} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      {
        user ?
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div> : null
      }

      {/* Subscribe Section */}
      <div className="h-48 bg-gradient-to-r bg-light_white rounded-3xl mt-10 flex justify-between items-center px-8">
        <div>
          <h3 className="text-xl font-semibold">Get First Updates!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem esse doloribus in.</p>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-l-md text-black"
          />
          <button className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>


  )
}

export default Home

