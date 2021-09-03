const yearTagHandler = (e)=>{
  console.log(e.target.innerHTML);
}


const TagsWrapper = () => {
  return (
    <aside className="tagsWrapper">
      <h3 className="tagsWrapper--mainHeadline">Assign Tags</h3>
      
      <hr />
      
      <h4>Year</h4>
      <ul className="tagsWrapper--yearTag">
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2020</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2019</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2018</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2017</button></li>
        <li><button className="tagsWrapper--yearTag__buttons btn-normal" onClick={yearTagHandler}>2016</button></li>
      </ul>

      <div className="tagsWrapper--buttons">
        <button className="tagsWrapper--buttons__tagsAssigned-btn">Tags assigned</button>
        <button className="tagsWrapper--buttons__upload-btn">Finsih and Upload</button>
      </div>

    </aside>
  )
}

export default TagsWrapper;
