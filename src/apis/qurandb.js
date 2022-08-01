import axios from 'axios';

const baseURL = 'https://al-quran-8d642.firebaseio.com/data.json?print=pretty';
const baseURLSurah = 'https://api.npoint.io/99c279bb173a6e28359c/surat';

const qurandb = axios.create({
    baseURL: baseURL,
})

const surahdb = axios.create({
    baseURL: baseURLSurah
})

export { qurandb, surahdb };