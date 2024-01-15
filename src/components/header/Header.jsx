import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import Icon from '../icon/Icon'

function Header() {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Antonio Ferreira</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/AdAntonio07" />
      </div>
    </div>
  )
}

export default Header