

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const EachUploadFile = ({ file }) => {

  const { preview, name, lastModified, size } = file; //destructuring file    

  const selectImg = (e)=>{    
    const targeted = e.target;
    const parentElement = e.target.parentElement;          

    if(targeted.tagName === 'IMG'){
      const listOfClass = parentElement.className;
      console.log(listOfClass.search('clicked'));
      const search = listOfClass.search('clicked');

      if( search > -1){
        parentElement.classList.remove('clicked');      
      } else{        
        parentElement.classList.add('clicked');
      }
    }
  }
  
  return (
    <div onClick={selectImg} className="draggedItem" id={lastModified} data-id={lastModified} data-src={preview} data-name={name} data-size={size}>
        <img id={lastModified}  src={preview} style={img} alt={name}/>
    </div>
  )
}

export default EachUploadFile
