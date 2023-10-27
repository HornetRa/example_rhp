import styles from './ThemeSwitcher.module.css'
import { useState } from 'react'

interface IThemeSwitcher {
  onClick: (value: boolean) => void;
}

// Каждый компонент выполняет изолированное действие,
// родитель не знает что он делает, компоненту плевать,
// что в родителе, он получил пропсы или колбэки из родителя и в них передал или получил все нужное

// Компонент это какой то кусок кода, кнопки, менюшки, инпуты, заголовки если модифицируются сложно, формы (могут состоять из других компонентов как пример)
const ThemeSwitcher = ({ onClick }: IThemeSwitcher): JSX.Element => {
  const [toggled, setToggled] = useState(true);

  const handleSwitch = () => {
    setToggled(prevValue => !prevValue)
    onClick(toggled)
  }

    return (
        <div onClick={handleSwitch} className={`${styles.toggle} ${toggled && styles.night}`}>
            <div className={styles.sunMoon}>
              <div className={styles.crater}/>
              <div className={styles.crater}/>
            </div>
            <div>
                <div className={`${styles.shape} ${styles.sm}`} />
                <div id='nightShape' className={`${styles.shape} ${styles.sm}`}/>
                <div className={`${styles.shape} ${styles.sm}`}/>
                <div className={`${styles.shape} ${styles.md}`} />
                <div className={`${styles.shape} ${styles.lg}`}/>
            </div>
        </div>
    )
}

export default ThemeSwitcher;
