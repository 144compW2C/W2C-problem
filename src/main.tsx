import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// PrimeReactのCSSを追加
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
// import 'primeicons/primeicons.css' // primeiconsが必要な場合は別途インストール

import './index.css'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
