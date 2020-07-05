import React from 'react'
import './Letter.css'
import classNames from 'classnames/bind'


function Letter(props) {
  const { status } = props;
  const classLetter = classNames('letter',{
    'isActived': status === 0,
    'isExactly': status === 1,
    'isFail': status === -1
  })
  return (
    <div className={classLetter}>
      {props.children === ' ' ? <span>&nbsp;</span> : props.children }
    </div>
  )
}

export default Letter