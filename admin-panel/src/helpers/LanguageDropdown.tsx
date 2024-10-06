import React from 'react'
import {useTranslation} from 'react-i18next'

export const LanguageDropdown = () => {
  const {i18n} = useTranslation();
  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const lng = e.target.value
    i18n.changeLanguage(lng)
  }
  return (
    <>
      <select onChange={changeLanguage}>
        <option value={'en'}>English 🍔</option>
        <option value={'fr'}>French 🌮</option>
        <option value={'es'}>Spanish 🥖</option>
      </select>
    </>
  )
}
