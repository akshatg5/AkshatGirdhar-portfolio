import Link from 'next/link';
import { Music, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Music className="h-6 w-6 mr-2 text-primary" color='white' />
            <span className="text-sm text-white font-semibold">VoteTube</span>
          </div>
          
          <div className="text-sm text-center text-white md:text-left mb-4 md:mb-0">
            <p>Create and share music playlists with your friends.</p>
            <p>Vote for your favorite tracks and discover new music together.</p>
          </div>
          
          <div className="flex space-x-4">
            <Link href="https://github.com/akshatg5/" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-white hover:text-primary transition-colors" aria-label="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/akshat-girdhar-56a848206/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-white hover:text-primary transition-colors" aria-label="LinkedIn" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} VoteTube. All rights reserved.
        </div>
      </div>
    </footer>
  );
}