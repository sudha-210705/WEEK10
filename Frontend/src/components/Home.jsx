import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center px-4">

      <h1 className="text-4xl font-bold mb-6">
        Welcome to Blog Platform
      </h1>

      <p className="text-gray-600 max-w-xl text-lg">
        This platform allows users to explore blogs and authors to publish 
        articles. Register as a user to read blogs or as an author to create 
        and share your own articles with the world.
      </p>

    </div>
  )
}

export default Home
