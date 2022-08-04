import {surahdb} from '../apis/qurandb';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import theme from '../themes/theme';
import {Card, Box, ThemeProvider, List, ListItem, Button} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SurahPage = () => {

    let params = useParams();

    const [surah, setSurah] = useState([]);

    useEffect(() => {
        const fetchSurah = async () => {
            try {
                const difetchSurah = await surahdb.get("/"+params?.id);
                setSurah(difetchSurah.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchSurah();
    }, [params?.id]);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Card sx={{ display: 'flex', marginTop:3, marginLeft:1, marginRight:1, marginBottom:10}}>
                    <Box sx={{marginTop: 11}}>
                        <Box sx={{display: 'flex', paddingLeft: 1}}>
                            <Button variant="outlined" href='/'>Back to Home</Button>
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', flexDirection: 'column', flexWrap: 'wrap', marginBottom:6}}>
                        <h1>{params?.nama}</h1>

                            {
                                surah.map(item => (
                                    <List>
                                        <ListItem>{item.nomor}.</ListItem>
                                        <ListItem sx={{textAlign: 'right'}}>{item.ar}</ListItem>
                                        <ListItem>{item.id}</ListItem>
                                    </List>
                                ))
                            }
                            <hr/>
                        </Box>
                    </Box>
                </Card>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default SurahPage;