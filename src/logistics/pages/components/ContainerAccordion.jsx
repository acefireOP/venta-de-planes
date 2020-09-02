import * as React from "react";
import { useState } from "react";
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";

import ArrowAcc from '../../images/icon_arrow_right.svg'

const AccHeading = styled(motion.div)`
  user-select:none;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  border-bottom: 1px solid rgba(151, 151, 151, .2);
  .arrow-acc{
    transition: transform .3s;
    margin-left: 10px;
    &.active{
      transform: rotate(180deg)
    }
  }
`;

const Section = styled(motion.section)`
  width: 100%;
  ul {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-wrap: wrap;
      font-size: 13px;
      line-height: 19px;
      color: #fff;
      li {
           margin: 0 10px;
      }
  }
`;



const Accordion = ({ i, expanded, setExpanded, titulo, id, texto }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <AccHeading
        initial={false}
        animate={{ backgroundColor: isOpen ? "transparent" : "transparent" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {titulo}
        <img
          src={ArrowAcc}
          // initial={false}
          className={isOpen ? 'arrow-acc active' : 'arrow-acc'}
        />
      </AccHeading>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0, overflow: 'hidden' }
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ul>
              {texto.map((text, index)=>{
                return (
                    <li key={index}>{text}</li>
                )
              })}
            </ul>
          </Section>
        )}
      </AnimatePresence>
    </>
  );
};

export const ContainerAccordion = ({data}) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(false);

  return data.map(i => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} titulo={i.title} id={i.id} texto={i.value} key={i.id}/>
  ));
};




