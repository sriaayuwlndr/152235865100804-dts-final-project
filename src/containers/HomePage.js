import { qurandb } from '../apis/qurandb';
import '../App.css';
// import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import {ThemeProvider, Box, Input} from '@mui/material';
import theme from '../themes/theme';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [surah, setSurah] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

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

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = surah.filter((item) => {
                return Object.values(item.nama).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(surah)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Box sx={{marginTop: 13}}>
                    <Input icon='search ' placeholder='Cari nama Surah...' onChange={(e) => searchItems(e.target.value)}/>
                    {searchInput.length > 1 ? (
                        <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom:6}}>
                        {
                            filteredResults.map(item => (
                                <Content key={item.nomor} items={item} ></Content>
                            ))
                        }
                        </Box>
                    ) : (
                        <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom:6}}>
                            {
                                surah.map(item => (
                                    <Content key={item.nomor} items={item} ></Content>
                                ))
                            }
                        </Box>
                    )}

                </Box>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default HomePage;