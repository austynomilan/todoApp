import './addNewModal.css';

export default function addNewModal({ heading,value,setAddNewModal,submissionText,handleSubmit,setValue }) {

  
  return (
    <div className='addNewModal'>
      <form onSubmit={handleSubmit}>
        <h3>{heading}</h3>
        <input type='text' 
        placeholder='project name...' 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        autoFocus
        />
        <div className='addNew_controls'>
          <button type='button' onClick={() => setAddNewModal(false)}>Cancel</button>
          <button>{submissionText}</button>
        </div>
      </form>
    </div>
  );
}
