export function prettifyDate (currentDate: string){
    const date = new Date(currentDate);
    const dateTime = date.toString().split(" ");
    const formattedDate = `${dateTime[2]} ${dateTime[1]}, ${dateTime[3]}`;
    return formattedDate;
};