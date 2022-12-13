export class Publisher {
    constructor(private publisherName: string) { }

    getPublisherName(): string {
        return this.publisherName;
    }
}