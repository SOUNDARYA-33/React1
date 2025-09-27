import React, { useState, useEffect } from "react";
import "../component/css/blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dummyPosts = [
      { id: 1, title: "HTML", content: "HTML is the standard language used to create and structure content on web pages."},
      { id: 2, title: "CSS", content: "CSS(Cascading Style Sheet) is a standard language used to style the structure of the web page." },
      { id: 3, title: "JAVA SCRIPT", content: "JavaScript (JS) is a scripting language used to add interactivity and dynamic behavior to web page." },
    ];
    setPosts(dummyPosts);
  }, []);

  return (
    <section className="blogs" id="blogs">
      <h2>Different Languages</h2>
      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
