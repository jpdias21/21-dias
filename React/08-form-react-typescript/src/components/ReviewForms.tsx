import './ReviewForm.css'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";


type ReviewForm = {
  data : {
    review : string,
    comment : string ,
  }
  updateFieldHandler: (key:string, value:string) => void
}

const ReviewForms: React.FC<ReviewForm> = ({data, updateFieldHandler}) => {
  return <div className="review-form">
    <div className="form-control score-conteiner">
      <label className="radio-conteiner">
        <input type="radio" value='unsatisfied' name='review' required 
        checked={data.review === 'unsatisfied'}
        onChange={(event) => updateFieldHandler('review' , event.target.value)}
        />
        <BsFillEmojiFrownFill/>
        <p>Insadisfeito</p>
      </label>
      <label className="radio-conteiner">
        <input type="radio" value='neutral' name='review' required 
         checked={data.review === 'neutral'}
         onChange={(event) => updateFieldHandler('review' , event.target.value)}
         />
        <BsFillEmojiNeutralFill/>
        <p>Poderia ser melhor</p>
      </label>
      <label className="radio-conteiner">
        <input type="radio" value='satisfied' name='review' required 
         checked={data.review === 'satisfied'}
         onChange={(event) => updateFieldHandler('review' , event.target.value)}
        />
        <BsFillEmojiSmileFill/>
        <p>Sadisfeito</p>
      </label>
      <label className="radio-conteiner">
        <input type="radio" value='verysatisfied' name='review' required 
         checked={data.review === 'verysatisfied'}
         onChange={(event) => updateFieldHandler('review' , event.target.value)}
         />
        <BsFillEmojiHeartEyesFill/>
        <p>Muito sadisfeito</p>
      </label>
    </div>
    <div className="form-control">
    <label htmlFor="comment">Comentario</label>
    <textarea name="comments" id="comments" placeholder='conte como foi a sua experiencia' required  value={data.comment || ""}
    onChange={(event) => updateFieldHandler('comment' , event.target.value)}></textarea>
    </div>
  </div>
}

export default ReviewForms