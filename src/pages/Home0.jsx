import Header from '../components/Header';

import { ArrowLeft, Home, Instagram, Youtube, Twitter, Smartphone, Smile } from 'lucide-react';

function Home0() {

    var login = false;


    return (
        <main className='flex flex-col w-screen h-screen bg-zinc-950'>
            <header className='flex w-full h-16 border-b-[1px] border-zinc-600'>
                <div className='flex justify-center items-center w-1/5 border-r-[1px] border-zinc-600'>
                    <p className='text-white font-normal text-xl'><span className='font-bold'>Bold</span> Social Media</p>
                </div>
            </header>
            <main className='flex w-full h-full'>
                <div className='flex flex-col w-1/5 border-r-[1px] border-zinc-600 text-white list-none px-5 pt-10'>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Home className='w-4 stroke-white'/>Home</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Instagram className='w-4 stroke-white'/>Instagram</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Youtube className='w-4 stroke-white'/>Youtube</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Twitter className='w-4 stroke-white'/>Twitter</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Smartphone className='w-4 stroke-white'/>Tiktok</li>
                    <li className='flex gap-2 hover:bg-zinc-600 px-4 py-2 rounded'><Smile className='w-4 stroke-white'/>Whatsapp</li>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 w-4/5 h-full text-white'>
                    <h1 className='font-bold text-2xl'>Um novo jeito de criar conteúdo para as redes sociais</h1>
                    <h2 className='text-sm'>Oferecemos varios modelos de criação, cad um personalizado para a sua rede social favorita.</h2>
                    <button className='flex justify-center items-center py-2 px-5 text-black font-bold bg-white rounded gap-3'><ArrowLeft className='w-5' />Escolha uma ao lado</button>
                </div>
            </main>
        </main>
    )
}

export default Home0;