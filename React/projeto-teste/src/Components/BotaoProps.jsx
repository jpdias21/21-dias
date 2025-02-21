export default function BotaoProps({nome, color, link}){
 
    return (
        <div className="BotaoProps">    
        <button style={{backgroundColor : color}} onClick={() => window.location.href= link}>{nome}</button>   
        </div>
     
    )
}