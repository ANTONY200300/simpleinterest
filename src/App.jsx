import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [Principle , setPrinciple]=useState("")
  const [rate,setRate]=useState("")
  const [year, setYear]=useState("")
  
  const [isPrinciple , setISPrinciple]=useState(true)
  const [israte,setIsRate]=useState(true)
  const [isyear, setISYear]=useState(true)
  const [Interest, setInterest] =useState(0)
  

  const validate =(e)=>{
    // console.log(e.target.name);
    const {name , value}= e.target 
    console.log(name);
    console.log(value);
    // match(RegExp) -return array when values matcheswith regular expression
    // else return null
    // ^[0-9]$
    // console.log(!!value.match('^[0-9]*$'));

    if(!!value.match('^[0-9]*$')){
      if(name=='principle'){
        setPrinciple(value)
        setISPrinciple(true)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(true)

    }
    else{
      setYear(value)
      setISYear(true)
    }
  }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setISPrinciple(false)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(false)

    }
    else{
      setYear(value)
      setISYear(false)
    }

    }
      

      
    
    
    
    
  }
  

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setISPrinciple(true)
    setIsRate(true)
    setISYear(true)
    setInterest(0)
  }

  const calculate = ()=>{
    setInterest((Principle * rate * year)/100)
  }

  return (
    <>
     <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100%'}}>
      <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple intsrest Easly </p>

        <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column' style={{height:'150px'}}>
          <h1>₹ {Interest} </h1>
          <p>Total simple interest </p>

        </div>
       <div className='my-3'> <TextField id="outlined-basic "className='w-100' value={Principle}  name='principle' label=" ₹Principle Amount" variant="outlined" onChange={(e)=>validate(e)}/> {isPrinciple==false &&<p className='text-danger'>invalid input</p>}
        
       </div>
       <div className="mb-3"> <TextField id="outlined-basic"className='w-100'value={rate} name='rate' label="Rate of interest(%)" variant="outlined" onChange={(e)=>validate(e)}/> {israte==false &&<p className='text-danger'>invalid input</p>}
       </div>
       <div className="mb-3"> <TextField id="outlined-basic"className='w-100' value={year} name='year' label="Year (yr)" variant="outlined" onChange={(e)=>validate(e)}/>{isyear==false &&<p className='text-danger'>invalid input</p>}
       </div>

       <div className="mb-3 d-flex justify-content-between">
       <Button disabled={isPrinciple && israte && isyear? false : true} variant="contained" style={{width:'190px'}} color='success' className='p-3
       ' onClick={calculate}>Calculate </Button>
       <Button variant="outlined" style={{width:'190px'}}className='p-3' onClick={handleReset}>reset</Button>
       </div>


      </div>
     </div>
      
     
    </>
  )
}

export default App 
