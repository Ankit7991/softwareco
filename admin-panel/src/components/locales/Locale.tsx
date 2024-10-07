import React from 'react'
import { useTranslation } from 'react-i18next'

export const Locale = ({text}: {text: string}) => {
    const {t} = useTranslation();
    return (
        <span>t(text)</span>
    )
}
