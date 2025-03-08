import React from 'react'

type Props = {
    title : string
    content : string
    commentsQty : number
    tags : string []
    /// enum
    category : Category
}

export enum Category{
    Js = "JvaScript" ,
    Jv = "Java" ,
    P = "Python" , 
    Ts = "TypeScript",
}

const Destructuring = ({title, content, commentsQty, tags, category} : Props) => {
  return (
        <>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidades de comentarios:{commentsQty}</p>
        <div>
            {tags.map(event => (
                <span>#{event}</span>
            ))}
        </div>
        <h4>Categoria {category}</h4>
        </>
  )
}

export default Destructuring