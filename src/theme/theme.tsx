//!! LEER LA SIGUIENTE LINEA
//* GENERADOR DE TEMAAAAAAAAAAAAAAAAAA https://bareynol.github.io/mui-theme-creator/
import { PaletteMode } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

//* para crear el boton de un tipo llamado bold, aunque puede llamarse como
// declare module "@mui/material/Button" {
//   interface ButtonPropsVariantOverrides {
//     bold: true;
//   }
// }



const theme = {
  palette: {
    primary: amber,
  },
};


export const getDesignTokens = (mode: PaletteMode, fontSize: number) => {
  console.log({fontSize, 'desde': 'theme'});
  console.log(this);
  
  
  return {
  typography: {
    h1: {
      // rem
      fontSize: `${4 + fontSize}rem`,
      //fontSize: `${2}rem`,
    },
    // fontSize: (mode == 'light') ? 12 : 18 ,
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // loco: {
        //   light: 'green',
        //   main: 'green',
        //   dark: 'yellow', // esto es para el color hover del boton que tenga el color loco, ejemplo  <Button variant="contained" color="loco" >Hola a todos</Button>
        //   contrastText: '#000',
        // },
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
        typography: {
          h3: {
            fontSize: 8,
          },
        },

          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: "#fff",
          //   secondary: grey[500],
          // },
        }),
  },
}
};

export default theme;