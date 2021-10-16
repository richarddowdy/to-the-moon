// Thanks to https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

export const insertCommasHelper = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}