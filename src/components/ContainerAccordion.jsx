import * as React from "react";
import { useState } from "react";
import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";
import AccordionItem from './AccordionItem';

import ArrowAcc from '../images/icon_arrow_right.svg'

const AccHeading = styled(motion.div)`
  user-select:none;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #24152F;
  border-bottom: 1px solid rgba(151, 151, 151, .2);
  .arrow-acc{
    transition: transform .3s;
    margin-left: 10px;
    &.active{
      transform: rotate(180deg)
    }
  }
`


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
          <motion.section
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
            <AccordionItem texto={texto} id={id}/>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const ContainerAccordion = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(false);

  return objectAccordion.map(i => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} titulo={i.titulo} id={i.id} texto={i.texto} key={i.id}/>
  ));
};

const objectAccordion = [
  {
    titulo: '¿Qué pasa si no llega el mail dentro de las 12 hrs?',
    id: 0,
    texto: [
      'Nuestros ejecutivos se comunicarán contigo durante el día.'
    ]
  },
  {
    titulo: '¿Al recibir mi plan como lo debo activar? (Plan Nuevo)  / ¿Cuánto se demora en quedar activa mi portabilidad? Debo hacer algo más (Portabilidad)',
    id: 1,
    texto: [
      'Solo tienes que colocarlo en tu celular, el plan se activa automáticamente durante el día',
      'La portabilidad se realiza al siguiente día hábil, solo tienes que esperar que tu chip anterior quede sin servicio para colocar el de WOM, si hay un problema un ejecutivo nuestro se comunicará contigo'
    ]
  },
  {
    titulo: '¿Qué documento debo tener al momento recibir mi plan?',
    id: 2,
    texto: [
      'Solo tienes que tener a mano tu carnet de identidad para recibir el chip.',
    ]
  },
  {
    titulo: '¿Qué ocurre si mi chip no llega a tiempo?',
    id: 3,
    texto: [
      'Comunicate con nuestro Whatsapp para tener más información número +56935223070',
    ]
  },
  {
    titulo: '¿Puedo cancelar mi Portabilidad?',
    id: 4,
    texto: [
      'Aunque dudamos que lo necesites, sí, puedes cancelar el proceso de portabilidad hasta las 22:00 hrs del día de la entrega de tu chip, enviando un whatsapp al  +56 9 3522 3070, llamando al 103 desde un número WOM o en alguna de nuestras tiendas.',
    ]
  }
]




