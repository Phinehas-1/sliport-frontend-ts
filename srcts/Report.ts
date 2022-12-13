export class Report {
    constructor(private readonly monthOfReporting: string, private readonly publisherName: string, private readonly placement: number, private readonly videoShowing: number, private readonly hour: number, private readonly returnVisit: number, private readonly bibleStudy: number) { }

    getMonthOfReporting(): string {
        return this.monthOfReporting;
    }

    getPublisherName(): string {
        return this.publisherName;
    }

    getPlacement(): number {
        return this.placement;
    }

    getVideoShowing(): number {
        return this.videoShowing;
    }

    getHour(): number {
        return this.hour;
    }

    getReturnVisit(): number {
        return this.returnVisit;
    }

    getBibleStudy(): number {
        return this.bibleStudy;
    }
}