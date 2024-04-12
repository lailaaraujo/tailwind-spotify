import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';  

export function Sidebar (){
    return (
        <aside className="w-full sm:w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <HomeIcon />
                    <span className="hidden sm:block">Home</span>
                </a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <Search />
                    <span className="hidden sm:block">Search</span>
                </a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200">
                    <Library />
                    <span className="hidden sm:block">Your Library</span>
                </a>
            </nav>


          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hip Hop 2000</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk Light</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Eletro House</a>
          </nav>
        </aside>
    )
}