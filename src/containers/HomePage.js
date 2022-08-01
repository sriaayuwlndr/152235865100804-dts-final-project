import { qurandb } from '../apis/qurandb';
import '../App.css';
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import {ThemeProvider} from '@mui/material';
import theme from '../themes/theme';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [surah, setSurah] = useState([]);

    useEffect(() => {
        const fetchSurah = async () => {
            try {
                const difetchSurah = await qurandb.get();
                setSurah(difetchSurah.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchSurah();
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Box sx={{marginTop: 11}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom:6}}>
                        {
                            surah.map(item => (
                                <Content key={item.nomor} items={item} ></Content>
                            ))
                        }
                    </Box>
                </Box>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default HomePage;