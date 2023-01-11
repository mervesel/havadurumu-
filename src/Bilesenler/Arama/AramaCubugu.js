import React,{useState} from 'react';

function AramaCubugu({setHavaDurumu}){
    const api={
        key: "62611274094c87d53f8202fab3404f2a",
        base:"https://api.openweathermap.org/data/2.5/weather"

    }
    const [araParametre,setAraParametre]=useState("");
    const ara=(e)=>{
        if(e.key==="Enter"){
            fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
            .then((veri)=>veri.json())
            .then((sonuc)=>{
                setAraParametre("");
                setHavaDurumu(sonuc);
                
            });
        }
    }
    return (
        <div className='arama'>
            <input 
            className='arama-input' 
            type="text"
            placeholder="şehir"
            onChange={(e)=> setAraParametre(e.target.value)}
            value={araParametre}
            onKeyPress={ara}
            
            />
        </div>
    )
}

export default AramaCubugu;

