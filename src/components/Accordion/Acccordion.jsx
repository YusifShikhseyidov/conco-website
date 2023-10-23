// import necessary modules for accordion
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

import { useState } from 'react';

// import your styles
import './Acccordion.css'

// import arrowright form react-icons
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri'

// import accordion data to map through
import data from './accordion-data'


export default function Acccordion() {

  const [accordion, setSctiveAccordion] = useState(0)

  function toggleAccordion(index){
    if(accordion === index){
      setSctiveAccordion(-1)
      return
    }
    setSctiveAccordion(index)
  }



  return (

    <div className="priorities-container">
      <h1>Öncəliklərimiz</h1>
      <h4>Müştərilərimizin məmnuniyyəti üçün hər zaman aşağıdakı prinsiplər öncəliklərimizdir:</h4>

{/* try to fix arrow position problem */}
      <Accordion className='accordion' allowMultipleExpanded={true} preExpanded={[0]} allowZeroExpanded={true}>
        {data.map((item, index)=>{
          return(
            <AccordionItem className='accordion-item' key={index} uuid={index} onClick={()=> toggleAccordion(index)}>
              <AccordionItemHeading>
                <AccordionItemButton className='accordion-button'>
                  <span className="accordion-heading-text">{item.heading}</span>
                  <div className="accordion-heading-icon">
                     <RiArrowDownSLine size={20} className={`${accordion === index ? 'activeOne' : ''}`}/> 
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel>
                <p className="accordion-content-text">{item.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          )
        })}
      </Accordion>

    </div>


  )
}
