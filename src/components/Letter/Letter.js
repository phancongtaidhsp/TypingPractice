import React from 'react'
import './Letter.css'
import classNames from 'classnames/bind'


function Letter(props) {
  const { index, currentLetter } = props;
  const classLetter = classNames('letter',{
    'isActived': index === currentLetter,
    'isDone': index < currentLetter
  })
  return (
    <div className={classLetter}>
      {props.children === ' ' ? <span>&nbsp;</span> : props.children }
    </div>
  )
}

export default Letter