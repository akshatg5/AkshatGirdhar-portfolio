'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress"

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

interface UserData {
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHub() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const userResponse = await fetch('https://api.github.com/users/akshatg5')
        if (!userResponse.ok) throw new Error('Failed to fetch user data')
        const userData = await userResponse.json()
        setUserData(userData)
        const reposResponse = await fetch('https://api.github.com/users/akshatg5/repos')
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
        const reposData = await reposResponse.json()
        setRepos(reposData)

        setLoading(false)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="flex justify-center w-1/2  items-center mx-auto min-h-screen py-20">
      <Progress value={50} color='white' />
    </div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">GitHub Profile</h1>
      
      {userData && (
        <div className="bg-slate-950-800 p-6 shadow-lg shadow-white rounded-lg mb-8 flex items-center">
          <Image src={userData.avatar_url} alt={userData.name} width={100} height={100} className="rounded-full mr-6" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
            <p className="text-gray-400 mb-4">{userData.bio}</p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <span>{userData.public_repos} repositories</span>
              <span>{userData.followers} followers</span>
              <span>{userData.following} following</span>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repos.map(repo => (
          <div key={repo.id} className="bg-slate-900 p-6 rounded-lg shadow-md shadow-black">
            <h3 className="text-xl font-semibold mb-2">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-400 mb-4">{repo.description || 'No description available'}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{repo.language || 'Not specified'}</span>
              <span className="flex items-center text-sm text-gray-500">
                <Star  />
                {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}