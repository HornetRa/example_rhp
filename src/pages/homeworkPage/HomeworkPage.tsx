import React, { useState } from 'react'
import styles from './HomeworkPage.module.css' // Модули изолируют css просто и удобно и можешь одинаковый нейминг использовать
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher'

// Тут выглядит не как компонент, а как страница, потому вынес для примера в страницы, тут можешь формировать под себя другие из компонентов

const HomeworkPage = () => {
  const [toggled, setToggled] = useState(false)
  // Этот метод ты отдаешь в свой компонент,
  // компонент свои действия производит и прокидывает в него значение новое switchedValue,
  // которое ты пере используешь там где надо как надо
  const handleClick = (switchedValue: boolean) => {
    setToggled(switchedValue);
  }

  return (
    <div className={`${styles.container} ${toggled && styles.night}`}>
      <header className={styles.header}>
        <h1>
          <div className={styles.toggleDiv}>
            <ThemeSwitcher onClick={handleClick} />
          </div>
          <span>Homework page</span>
        </h1>
      </header>
      <nav className={styles.navbar}>
        Navigation
      </nav>
    </div>
  )
}

export default HomeworkPage
