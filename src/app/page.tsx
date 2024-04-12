import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';  
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row flex-1">
        <Sidebar />
       
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <a href="#" className="bg-white/5  group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum Dangerous Woman da Ariana Grande"/>
              <strong>Dangerous Woman</strong>    
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
                </button>        
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album2.jpg" width={104} height={104} alt="Capa do álbum Bad de Michael Jackson"/>
              <strong>BAD</strong>  
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
                </button>             
            </a>
            <a href="#"className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album3.jpg" width={104} height={104} alt="Capa da playlist de Zeca Pagodinho"/>
              <strong>This is Zeca Pagodinho</strong>       
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
                </button>        
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album4.jpeg" width={104} height={104} alt="Capa da playlist dos hits de 2004"/>
              <strong>Top Hits of 2004</strong>   
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
                </button>            
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album5.jpeg" width={104} height={104} alt="Capa do álbum Get Rich or Die Tryin de 50 Cent"/>
              <strong>Get Rich Or Die Tryin</strong>     
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
                </button>          
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album6.jpeg" width={104} height={104} alt="Capa do álbum LUME de Filipe Ret"/>
              <strong>LUME</strong>      
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
                </button>         
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Laila Araujo</h2>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4">
          <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/daily1.jpeg" className="w-full" width={120} height={120} alt="Daily Mix"/>
          <strong className="font-semibold">Daily mix 1</strong>
          <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/daily2.jpeg" className="w-full" width={120} height={120} alt="Daily Mix"/>
          <strong className="font-semibold">Daily mix 2</strong>
          <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/daily3.jpeg" className="w-full" width={120} height={120} alt="Daily Mix"/>
          <strong className="font-semibold">Daily mix 3</strong>
          <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/daily4.jpeg" className="w-full" width={120} height={120} alt="Daily Mix"/>
          <strong className="font-semibold">Daily mix 4</strong>
          <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image src="/daily5.jpeg" className="w-full" width={120} height={120} alt="Daily Mix"/>
          <strong className="font-semibold">Daily mix 5</strong>
          <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
          </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
