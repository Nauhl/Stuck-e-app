// import React from 'react'

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { flexbox } from '@mui/system';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export const ListaNotas = ({titulo, descripcion, Add}) => {
//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <TextField
//                 id="outlined-basic"
//                 // label="Outlined"
//                 variant="outlined"
//                 placeholder='Escribe un titulo'
//                 value={text}
//                 onChange={(e) =>
//                     setText(e.target.value)
//                 }
//                 color="info"
//             // style={flexbox}
//             />
//             <TextField
//                 id="outlined-basic"
//                 // label="Outlined"
//                 variant="outlined"
//                 placeholder='Escribe una Descripcion'
//                 value={descripcion}
//                 onChange={(e) =>
//                     setDescripcion(e.target.value)
//                 }
//             // style={flexbox}
//             />
//             <Button variant="contained" onClick={Add}>Agregar</Button>
//             <Card sx={{ maxWidth: 345 }}>
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {/* key={index} */}
//                         {titulo}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {descripcion}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small">Editar </Button>
//                     <Button size="small">Eliminar</Button>
//                 </CardActions>
//             </Card>
//         </Box>
//     )
// }

import React from 'react'

export const ListaNotas = () => {
  return (
    <div>ListaNotas</div>
  )
}
