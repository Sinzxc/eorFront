export interface JournalItem {
    name: string;
    surname: string;
    dates: {
        date: Date;
        value: number;
    }[];
}
