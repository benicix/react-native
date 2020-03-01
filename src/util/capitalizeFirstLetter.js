//Deixa a primeira letra em maiuscula

const capitalizeFirstLetter= string => {
    string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;