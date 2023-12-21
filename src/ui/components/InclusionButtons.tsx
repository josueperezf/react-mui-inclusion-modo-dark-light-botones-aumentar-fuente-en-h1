import { Box, Stack, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import VolumeUp from '@mui/icons-material/VolumeUp';


import { useThemeContext } from "../../theme/ThemeContextProvider";


const commonStyles = {
    bgcolor: 'background.paper',
    // p: '0px',
    m: 1,
    border: 1,
    width: '2rem',
    height: '2rem',
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  };
const InclusionButtons = () => {
    const { mode, fontSize, toggleColorMode, handleIncrement, handleDecrement } = useThemeContext();
    console.log({fontSize});
  
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderColor: "text.primary",
          border: "1px solid",
          borderRadius: 25,
        }}
      >
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            {/* cambiar tema */}
            <Box sx={{ ...commonStyles, borderColor: 'primary.main'}} className="cursor-pointer" onClick={toggleColorMode}>
                {mode === "dark" ? <Brightness7Icon  fontSize="small" /> : <Brightness4Icon  fontSize="small"/>}  
            </Box>
            {/* decrementar fuente */}
            <Box sx={{ ...commonStyles, borderColor: 'primary.main' }} className="cursor-pointer" onClick={handleDecrement}>
                <TextDecreaseIcon fontSize="small"/>
            </Box>

            <Box sx={{ ...commonStyles, ml: 0, borderColor: 'primary.main' }} className="cursor-pointer" onClick={handleIncrement}>
                <TextIncreaseIcon fontSize="small"/>
            </Box>

            <Box sx={{ ...commonStyles, ml: 0, width: '7rem', borderColor: 'primary.main' }} className="cursor-pointer" >
                <Stack direction="row" alignItems="center" gap={1}>
                    <VolumeUp/>
                    <Typography variant="subtitle2">Escuchar</Typography>
                </Stack>
            </Box>

            <Box sx={{ ...commonStyles, ml: 0, borderColor: 'primary.main', textDecoration: 'underline', width: '1.6rem', height: '1.6rem' }} className="cursor-pointer" >
                <Typography variant="subtitle2">EN</Typography>
            </Box>

            <Box sx={{ ...commonStyles, ml: 0, borderColor: 'primary.main', textDecoration: 'underline', width: '1.6rem', height: '1.6rem' }} className="cursor-pointer" >
                <Typography variant="subtitle2" fontSize='small'>MP</Typography>
            </Box>

            {/* <IconButton sx={{ ml: 1, borderColor: 'primary.main' }} onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton> */}

        </Box>
      </Box>
    );
}

export default InclusionButtons;