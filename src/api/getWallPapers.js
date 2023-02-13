import request from './requset';

const BASE_URL = 'https://pixabay.com/api';

const defaultParam = {
    key: process.env.REACT_APP_PIXABAY,
};

// const example = {
//     q: 'sky',
// };

//URL에서 사용하기에 적합한 쿼리 문자열을 포함하는 문자열을 반환합니다.
const getWallPapers = async (paramObj) => {
    const params = new URLSearchParams({
        ...defaultParam,
        ...paramObj,
    }).toString();
    const result = await request(`${BASE_URL}/?${params}`);
    return result;
};

export default getWallPapers;
