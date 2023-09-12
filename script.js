const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1dneUVdqt62YeIi_-sOudKFKBpPfudVrU" ;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '中指平野.png'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=19ys_aaVwxYK1VoCsCclHEksTT2_2CRlM" ;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '中塚(図書館)ピッツァ.png'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
    const fileUrl = "https://drive.google.com/uc?export=download&id=1s1KZ2_uaKjP1432qi6DTmzjDy4TvzA_B" ;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '中塚(図書館)ピッツァ.png'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});