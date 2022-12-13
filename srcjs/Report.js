export class Report {
    constructor(monthOfReporting, publisherName, placement, videoShowing, hour, returnVisit, bibleStudy) {
        this.monthOfReporting = monthOfReporting;
        this.publisherName = publisherName;
        this.placement = placement;
        this.videoShowing = videoShowing;
        this.hour = hour;
        this.returnVisit = returnVisit;
        this.bibleStudy = bibleStudy;
    }
    getMonthOfReporting() {
        return this.monthOfReporting;
    }
    getPublisherName() {
        return this.publisherName;
    }
    getPlacement() {
        return this.placement;
    }
    getVideoShowing() {
        return this.videoShowing;
    }
    getHour() {
        return this.hour;
    }
    getReturnVisit() {
        return this.returnVisit;
    }
    getBibleStudy() {
        return this.bibleStudy;
    }
}
