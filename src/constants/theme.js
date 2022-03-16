import { createTheme } from '@material-ui/core/styles';
import {primaryColor, neutralColor} from "./colors";


const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      darker: primaryColor,
      contrastText: '#fff',
      background: '#5cb646',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    text: {
      primary: neutralColor,
    }
  }
})

export default theme