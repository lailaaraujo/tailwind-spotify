import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';  

export function Footer () {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4"> 
          <Image src="/album.jpg" width={56} height={56} alt="Capa do álbum Dangerous Woman da Ariana Grande"/>
          <div className="flex flex-col">
            <strong className="font-normal mb-1">Bad Decisions</strong>
            <span className="text-xs text-zinc-400 mb-2">Ariana Grande</span>
          </div>
        </div>
      
        <div className="flex flex-col items-center justify-center flex-grow mt-4 sm:mt-0 sm:ml-4"> 
          <div className="flex items-center gap-4 justify-center"> 
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>   
                  
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          
          <div className="flex items-center gap-2 mt-2 justify-center"> 
            <span className="text-xs text-zinc-400">1:59</span>
            <div className="h-1 rounded-full w-56 sm:w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-20 sm:w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:46</span>
          </div>
        </div>
      
        <div className="flex items-center gap-4 justify-center mt-4 sm:mt-0"> 
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-16 sm:w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-6 sm:w-10 h-1 rounded-full"></div>
            </div>
            <Maximize2 size={20} />
          </div>
        </div>
      </footer>
    )
} 