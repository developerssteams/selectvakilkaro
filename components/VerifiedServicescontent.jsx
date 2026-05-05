import React from "react";
// import "./VerifiedServicescontent.css";

const VerifiedServicescontent = () => {
  return (
    <div className="VerifiedServicescontent-container">
      
      {/* LEFT CONTENT */}
      <div className="VerifiedServicescontent-left">
        <h1>
          LLP Registration: A Strategic Path to Business Excellence
        </h1>

        <p>
          Limited Liability Partnership (LLP) registration is a crucial step
          for businesses seeking a structured, legally compliant, and flexible
          operational framework.
        </p>

        {/* Long Content */}
        {[...Array(20)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam saepe molestiae, accusamus error voluptas pariatur.
          </p>
        ))}
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="VerifiedServicescontent-right">
        <div className="VerifiedServicescontent-sidebar">
          
          {/* BLOG 1 */}
          <div className="VerifiedServicescontent-blog-card">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="blog"
            />
            <h3>Lorem Ipsum Is Not Simply Random</h3>
            <p>
              Lorem Ipsum is not simply random text. It has roots in classical
              literature.
            </p>
          </div>

          {/* BLOG 2 */}
          <div className="VerifiedServicescontent-blog-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="blog"
            />
            <h3>Second Blog Title</h3>
            <p>
              This is another blog below the first one just like you wanted.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default VerifiedServicescontent;