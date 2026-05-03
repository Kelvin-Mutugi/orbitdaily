import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  // Get adjacent posts for navigation
  const postIndex = blogPosts.findIndex(p => p.id === parseInt(id));
  const previousPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
          <Link to="/" className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded">
            Back to All Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow">
        <div className="px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-700 font-semibold mb-4 flex items-center gap-2"
          >
            ← Back to Stories
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-8 h-96">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Category Badge 
          <div className="mb-4">
            <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div> */}

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-gray-600 border-b pb-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold">By</span>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Published</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.includes(':')) {
                // Section header
                return (
                  <div key={index} className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{paragraph}</h3>
                  </div>
                );
              }
              if (paragraph.startsWith('-')) {
                // Bullet points
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('-', '').trim()}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Navigation to Previous/Next Posts */}
        {(previousPost || nextPost) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {previousPost && (
              <Link
                to={`/post/${previousPost.id}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 text-sm mb-2">← Previous Story</p>
                <h3 className="text-lg font-bold text-gray-800 hover:text-gray-600 line-clamp-2">
                  {previousPost.title}
                </h3>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/post/${nextPost.id}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 text-sm mb-2 text-right">Next Story →</p>
                <h3 className="text-lg font-bold text-gray-800 hover:text-gray-600 line-clamp-2">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition-colors inline-block"
          >
            Back to All Stories
          </Link>
        </div>
      </div>
    </div>
  );
}
