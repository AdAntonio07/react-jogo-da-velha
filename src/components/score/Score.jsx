import Style from './Score.module.css'

import Icon from '../icon/Icon'

function Score() {
  return (
    <>
      <h4>Placar:</h4>
      <div className={Style.score}>
        <div className={Style.scoreContent}>
          <Icon iconName="circle" />
          <h2>0</h2>
        </div>
        <div className={Style.scoreContent}>
          <Icon iconName="x" />
          <h2>0</h2>
        </div>
      </div>
    </>
  )
}

export default Score 