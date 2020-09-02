export const regRut = (rut)=>{
    const splitArr = rut.split('-');
    splitArr[0] = splitArr[0].replace(/(\d)(?=(?:\d{3})+$)/g,'$1.');
    return splitArr.join('-');
};

export const regPhone = (phone)=> {
    return phone.slice(0,3)+' ' + phone.slice(3,4)+' '+ phone.slice(4,8)+' '+phone.slice(8)
};
