const daysFromDate = (date: string): number => {
    const today = new Date();
    const realDate = new Date(date);
    const diff = today.getTime() - realDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
export { daysFromDate };