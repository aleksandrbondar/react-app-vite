// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './assets/css/normalize.css'
import './assets/css/style.css'
import Button from './components/Button/Button.tsx'
import Input from './components/Input/Input.tsx'


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render([<App />,
<Button text='Button from Main.tsx and test #' type="submit" />,
<Input type="text" placeholder='там' />]
);
