export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/') // ['28', '10', '2021']
    .map((value: string): number => {
        return parseInt(value);
    });

    return new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
};