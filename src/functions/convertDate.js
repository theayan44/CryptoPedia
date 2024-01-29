function convertDate(value) {
    const dateObj = new Date(value);
    return `${dateObj.getDate()}/${dateObj.getMonth() + 1}`;
}

export default convertDate;