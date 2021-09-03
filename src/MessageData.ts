export default interface MessageData {
    read(language: string): Promise<string>;
}