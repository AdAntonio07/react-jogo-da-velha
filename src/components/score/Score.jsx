import Style from './Score.module.css'

import Icon from '../icon/Icon'

function Score({ winnerCircle, winnerX }) {
  return (
    <>
      <h4>Placar:</h4>
      <div className={Style.score}>
        <div className={Style.scoreContent}>
          <Icon iconName="circle" />
          <h2>{winnerCircle}</h2>
        </div>
        <div className={Style.scoreContent}>
          <Icon iconName="x" />
          <h2>{winnerX}</h2>
        </div>
      </div>
    </>
  )
}

export default Score 