import React, { useState } from 'react';
import Header from '../components/Header';
import { GoogleGenerativeAI } from '@google/generative-ai';


function Home() { 
    
    var [legendaPronta, setLegendaPronta] = useState(["Clique no botão para gerar a Legenda"]);

    async function GerarTexto() {
        var input = document.getElementById("meuInput");
        var valorDigitado = input.value;
      
        const API_KEY = "AIzaSyD5PMVUKP2DDjb3XwKGBggq3_tQ_da9l5E";
        
        const genAI = new GoogleGenerativeAI(API_KEY);
      
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
        const prompt = `Crie uma legenda para um post do Instagram com o título: ${valorDigitado}, legenda simples com no maximo 5 linhas, como se fosse um especialista na area falando. (tudo na formatação normal de texto, sem negrito, sem links)`;
      
        try {
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = response.text();
          setLegendaPronta(text);
        } catch (error) {
          console.error("Erro ao gerar legenda:", error);
        }

        return text;
        
    }

    var [hashtagPronta, setHashtagPronta] = useState(["Clique no botão para gerar as Hashtags"]);

    async function GerarHashtag() {
        var input = document.getElementById("meuInput");
        var valorDigitado = input.value;
      
        const API_KEY = "AIzaSyD5PMVUKP2DDjb3XwKGBggq3_tQ_da9l5E";
    
        const genAI = new GoogleGenerativeAI(API_KEY);
      
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
        const prompt = `Crie 10 hashtags para um post do Instagram com o título: ${valorDigitado}, boas hashtags, criativas, como se fosse um especialista na area falando. (tudo na formatação normal de texto, sem negrito, sem links)(uma hashtag do lado da outra pulando espaços entre elas, tudo em letra minuscula, no maximo 2 palavras na hashtag)`;
      
        try {
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = response.text();
          setHashtagPronta(text);
        } catch (error) {
          console.error("Erro ao gerar legenda:", error);
        }

        return text;
        
    }

    function CopiarLegenda() {
        navigator.clipboard.writeText(legendaPronta);
    }

    function CopiarHashtag() {
        navigator.clipboard.writeText(hashtagPronta);
    }

    function Limpar() {
        setLegendaPronta("Clique no botão para gerar a Legenda");
        setHashtagPronta("Clique no botão para gerar as Hashtags");
    }



    return (
        <main className='flex flex-col w-full bg-gray-100'>
            <Header></Header>
            <main className='flex flex-col justify-center w-full h-auto'>
                <section className='flex justify-center items-center w-full'>
                    <div className='flex flex-col justify-center items-center w-4/5'>
                        <div className='flex flex-col justify-center items-center gap-8 bg-white p-10 rounded-lg mt-10 mb-10'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-pink-600 font-medium'>Qual o titulo do post?</label>
                                <input className='w-[600px] h-10 pl-5 text-sm rounded-lg solid border-slate-400 border-2 outline-none' type="text" placeholder='Assunto do Post' id="meuInput" />
                                <button className='bg-blue-600 text-white font-medium rounded hover:cursor-pointer hover:opacity-70 hover:duration-500' type="submit" onClick={() => { GerarTexto(); GerarHashtag(); }}>Gerar</button>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center pl-5 pr-5 h-10 bg-pink-600 rounded-t-lg'>
                                    <p className='text-white font-bold'>AI-Generated Legend</p>
                                    <button className='text-white text-sm hover:opacity-70' onClick={() => {CopiarLegenda()}}>Copiar!</button>
                                </div>
                                <div className='w-[600px] h-auto rounded-b-lg solid p-5 border-pink-600 border-2 outline-none' >
                                    <p>{legendaPronta}</p>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center pl-5 pr-5 h-10 bg-pink-600 rounded-t-lg'>
                                    <p className='text-white font-bold'>AI-Generated Hashtags</p>
                                    <button className='text-white text-sm hover:opacity-70' onClick={() => {CopiarHashtag()}}>Copiar!</button>
                                </div>
                                <div className='w-[600px] h-auto rounded-b-lg solid p-5 border-pink-600 border-2 outline-none' >
                                    <p>{hashtagPronta}</p>
                                </div>
                            </div>
                            <button className='bg-red-600 text-white w-full h-10 font-medium rounded hover:cursor-pointer hover:opacity-70 hover:duration-500' type="submit" onClick={() => {Limpar()}}>Limpar</button>
                        </div>
                    </div>
                </section>
            </main>
        </main>
    )
}

export default Home;