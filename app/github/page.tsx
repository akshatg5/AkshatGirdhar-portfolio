'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export default function GitHub() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [contributions, setContributions] = useState<string>('')

  useEffect(() => {
    // Fetch GitHub repositories
    fetch('https://api.github.com/users/yourusername/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error))

    // Fetch GitHub contributions (you'll need to implement this on your backend)
    fetch('/api/github-contributions')
      .then(response => response.text())
      .then(data => setContributions(data))
      .catch(error => console.error('Error fetching contributions:', error))
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My GitHub</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contribution Graph</h2>
        <div className="bg-gray-800 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: contributions }} />
      </div>
      <h2 className="text-2xl font-semibold mb-4">My Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map(repo => (
          <div key={repo.id} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-400 mb-4">{repo.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{repo.language}</span>
              <span className="flex items-center text-sm text-gray-500">
                <Image src="/star.svg" alt="Stars" width={16} height={16} className="mr-1" />
                {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}