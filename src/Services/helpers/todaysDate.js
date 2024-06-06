import { format } from "date-fns";

export const todaysDate = () => {
    const today = new Date();
    const formattedDate = format(today, 'EEEE dd MMMM yyyy');
    return formattedDate
}