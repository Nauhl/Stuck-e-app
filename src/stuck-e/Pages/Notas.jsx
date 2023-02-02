import React from 'react'
//import { Navigate } from 'react-router-dom'
//import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Context from '../context/StaticContext';
// import { NavBar } from './NavBar';

//import { ListaNotas } from './ListaNotas';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { flexbox } from '@mui/system';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Notas = () => {

    const [text, setText] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [cards, setCards] = useState([])

    const Add = () => {
        const newCard = {
            text: text,
            descripcion: descripcion
        }
        console.log("text", newCard)
        setCards( (old)=> [...old, newCard ]);
        //setCard(...card, newCard)
        // console.log(newCard);
    }

    return (
        <>
            {/* {
                card.map((element, index) => {
                    //key:{texto}
                    return ( */}
                        <NavBar />
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            className='cards'
                        >
                            <TextField
                                id="outlined-basic"
                                // label="Outlined"
                                variant="outlined"
                                placeholder='Escribe un titulo'
                                value={text}
                                onChange={(e) =>
                                    setText(e.target.value)
                                }
                                color="info"
                                
                            // style={flexbox}
                            />

                            <TextField
                                id="outlined-basic"
                                // label="Outlined"
                                variant="outlined"
                                placeholder='Escribe una Descripcion'
                                value={descripcion}
                                onChange={(e) =>
                                    setDescripcion(e.target.value)
                                }
                            // style={flexbox}
                            />

                            <Button variant="contained" onClick={Add}>Agregar</Button>

                            {
                                cards.map((element, index) => {
                                    //key:{texto}
                                    return (
                                        <>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardContent>

                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {/* key={index} */}
                                                        {element.text}
                                                    </Typography>

                                                    <Typography variant="body2" color="text.secondary">
                                                        {element.descripcion}
                                                    </Typography>

                                                </CardContent>

                                                <CardActions>

                                                    <Button size="small">Editar </Button>
                                                    <Button size="small">Eliminar</Button>

                                                </CardActions>
                                            </Card>
                                        </>
                                    )
                                })
                            }
                        </Box>
                    {/* )
                })
            } */}
        </>
    )
}
