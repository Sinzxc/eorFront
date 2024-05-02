    export interface JournalItem {
        name: string;
        surname: string;
        patronimyc:string;
        dates: { date: Date; score: {
            _id: string;
            idLesson: string;
            idStudent: string;
            value: string;
        } }[];
    }
