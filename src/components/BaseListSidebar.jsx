import React from 'react';
import {ReactComponent as Close} from '../assets/icons/close.svg';
import './BaseListSidebar.css';

function BaseListSidebar(props) {

const {setPret0,setPret1,setPret2,setPret3,setAn0,setAn1,setAn2} = props;
const {pret0,pret1,pret2,pret3,an0,an1,an2}=props;
                                 
  function handlePret0Change(event)
    { 
      const value = event.target.checked;
      setPret0(value);      
    }
    function handlePret1Change(event)
    {
      const value = event.target.checked;
      setPret1(value);
    }
    function handlePret2Change(event)
    {
      const value = event.target.checked;
      setPret2(value);
    }
    function handlePret3Change(event)
    {
      const value = event.target.checked;
      setPret3(value);
    }
    
    function handleAn0Change(event)
    {
      const value = event.target.checked;
      setAn0(value);
    }
    function handleAn1Change(event)
    {
      const value = event.target.checked;
      setAn1(value);  
    }
    function handleAn2Change(event)
    {
      const value = event.target.checked;
      setAn2(value);
    }
   function handleDeleteFilter(event)
   {
    setPret0(false);
    setPret1(false);
    setPret2(false);
    setPret3(false);
    setAn0(false);
    setAn1(false);
    setAn2(false);
   }
   function handleApplyFilter(event)
   {
    setPret0(true);
    setPret1(true);
    setPret2(true);
    setPret3(true);
    setAn0(true);
    setAn1(true);
    setAn2(true);
   }
 
  return (
  <div className="base-list-sidebar">
    <h5>Filtre</h5>
    <button 
        className="btn btn-outline-dark"
        onClick={(event)=>{handleApplyFilter(event)}}
      >
       Selecteaza tot 
    </button>
   
      <div>
          <h6>Pret ( ]</h6>
            <div>
              <input 
                type="checkbox" 
                name="Pret0" 
                checked={pret0}
                onChange={(event)=>{handlePret0Change(event)}}
              />
              <label htmlFor="Pret0" >100-10.000 </label>
          </div>
          <div>
              <input 
                type="checkbox" 
                name="Pret1" 
                checked={pret1}
                onChange={(event)=>{handlePret1Change(event)}}
              />
              <label htmlFor="Pret1" >10.000-20.000 </label>
          </div>
          <div>
              <input 
                type="checkbox" 
                name="Pret2" 
                checked={pret2}
                onChange={(event)=>{handlePret2Change(event)}}
              />
              <label htmlFor="Pret2" >20.000-30.000 </label>
          </div>
          <div>
              <input 
                type="checkbox" 
                name="Pret3" 
                checked={pret3}
                onChange={(event)=>{handlePret3Change(event)}}
              />
              <label htmlFor="Pret3" >peste 30.000 </label>
          </div>
          
      </div>
      <div>
        <h6 >An ( ]</h6>
        <div>
            <input 
                  type="checkbox" 
                  name="An0" 
                  checked={an0}
                  onChange={(event)=>{handleAn0Change(event)}}
            />
            <label htmlFor="An0" >2010-2015 </label>
        </div>
        <div>
            <input 
                  type="checkbox" 
                  name="An1" 
                  checked={an1}
                  onChange={(event)=>{handleAn1Change(event)}}
            />
            <label htmlFor="An1" >2015-2020 </label>
          
        </div>
        <div>
            <input 
                  type="checkbox" 
                  name="An2" 
                  checked={an2}
                  onChange={(event)=>{handleAn2Change(event)}}
            />
            <label htmlFor="An2" >peste 2020 </label>
          
        </div>
      </div>
    <button 
        className="btn btn-outline-dark d-flex align-items-center "
        onClick={(event)=>{handleDeleteFilter(event)}}
    >
        <span className="text-nowrap ">Sterge filtrele</span> 
        <Close /> 
    </button>  
  </div>
  )
}

export default BaseListSidebar;
