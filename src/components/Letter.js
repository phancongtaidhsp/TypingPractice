import React from 'react'
import './Letter.css'
import classNames from 'classnames/bind'


function Letter(props) {
  const { isActived } = props;
  const classLetter = classNames('letter',{
    'isActived': isActived
  })
  return (
    <div className={classLetter}>
      {props.children === ' ' ? <span>&nbsp;</span> : props.children }
    </div>
  )
}

export default Letter