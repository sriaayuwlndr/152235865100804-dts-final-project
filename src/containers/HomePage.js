import { qurandb } from '../apis/qurandb';
import '../App.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import {ThemeProvider, Box, Input} from '@mui/material';
import theme from '../themes/theme';
import React, { useEffect, useState } from 'react';
import Buttons from "../components/Buttons";

const HomePage = () => {
    const [surah, setSurah] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [surahByType, setItem] = useState([]);

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
    }, [setItem]);

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

    const menuItems = [...new Set(surah.map((Val) => Val.type))];

    const filterItem = (curcat) => {
        const newItem = surah.filter((newVal) => {
          return newVal.type === curcat;
        });
        setItem(newItem);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar></Navbar>
                <Box sx={{marginTop: 13}}>
                    <Input icon='search ' placeholder='Cari nama Surah...' onChange={(e) => searchItems(e.target.value)}/>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                        dataSurah ={surah}
                    />
                    {
                        searchInput.length > 1 ? (
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
                                    surahByType.map(item => (
                                        <Content key={item.nomor} items={item} ></Content>
                                    ))
                                }
                            </Box>
                        )
                    }
                    
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