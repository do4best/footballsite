import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider,createTheme } from '@mantine/core'
const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById('root')).render(
<MantineProvider theme={theme}>
    <App />
    </MantineProvider>

)
