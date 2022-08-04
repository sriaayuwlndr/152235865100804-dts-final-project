import React from 'react';
import { Box, CardMedia, Card, Typography, CardContent, Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
// import useSound from 'use-sound';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


const Content = ({items})=> {

    let navigate = useNavigate();

    const viewSurah = (items) => {
        const idSurah = items.nomor;
        const namaSurah = items.nama;
        navigate(`/detail/${idSurah}/${namaSurah}`);
    }

    // const [playSound] = useSound(items.audio);

    return (
        <Card id={items.nomor} sx={{ display: 'flex', width: 280, marginTop:3, marginLeft:1, marginRight:1, marginBottom:3}}>
            <CardMedia sx={{ width: 220, height: 200, paddingTop:1}}>
                {items.nomor}
                <hr></hr>
            </CardMedia>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardMedia sx={{ width: 220, height: 20, paddingTop:1}}>
                    {items.asma}
                </CardMedia>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                    {items.nama} ({items.ayat})
                    </Typography>
                    <Box sx={{width: 200, alignItems: 'center'}}>
                        {items.arti}
                    </Box>
                </CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button variant="contained" endIcon={<VisibilityIcon />} onClick={() => viewSurah(items)} xs={{paddingButton: 5}}>
                        VIEW
                        </Button>
                        {/* <Button variant="contained" endIcon={<PlayCircleOutlineIcon />} onClick={() => playSound()}>
                        PLAY AUDIO
                        </Button> */}
                    </Grid>
                    </Grid>
                </Box>
            </Box>
      </Card>
    )
}

export default Content;